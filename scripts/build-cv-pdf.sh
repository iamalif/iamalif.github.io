#!/usr/bin/env bash
# Regenerates public/Al-Amin-Alif-CV.pdf from the CV page, so its portfolio link matches the configured address.
# Changing PUBLIC_SITE or PUBLIC_BASE does NOT rewrite an existing PDF: run this again after any such change,
# then commit the new PDF and scripts/cv-pdf-built-for.txt. `npm run check:release` fails if they disagree.
# Needs Google Chrome (macOS path below; override with CHROME=/path/to/chrome).
set -euo pipefail
cd "$(dirname "$0")/.."
SITE="${PUBLIC_SITE:-https://iamalif.github.io}"; SITE="${SITE%/}"
BASE="${PUBLIC_BASE:-/}"; BASE="${BASE%/}/"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT=4399
if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Port $PORT is already in use (a leftover dev server?). Stop it and run again." >&2
  exit 1
fi
PROFILE="$(mktemp -d)"
# npx starts astro in a separate process, so stop whatever is listening on the port as well as the parent.
trap 'kill "$SERVER" 2>/dev/null || true; lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null | xargs kill 2>/dev/null || true; rm -rf "$PROFILE"' EXIT
PUBLIC_SITE="$SITE" PUBLIC_BASE="$BASE" npx astro dev --port "$PORT" >/dev/null 2>&1 &
SERVER=$!
for _ in $(seq 1 40); do curl -sf "http://127.0.0.1:$PORT${BASE}cv/" >/dev/null && break; sleep 0.5; done
# Print to a temporary file and retry: Chrome sometimes exits without writing anything. The existing PDF is only
# replaced by a fresh, non-empty one, so a failed run can never leave an old PDF looking like a new one.
TMP_PDF="$PROFILE/cv.pdf"
for attempt in 1 2 3; do
  rm -f "$TMP_PDF"
  "$CHROME" --headless --disable-gpu --user-data-dir="$PROFILE" --no-pdf-header-footer \
    --print-to-pdf="$TMP_PDF" "http://127.0.0.1:$PORT${BASE}cv/" >"$PROFILE/chrome.log" 2>&1 || true
  [ -s "$TMP_PDF" ] && break
  sleep 2
done
if [ ! -s "$TMP_PDF" ]; then
  echo "Chrome did not produce a PDF after 3 attempts. The existing PDF was NOT changed. Chrome said:" >&2
  tail -20 "$PROFILE/chrome.log" >&2
  exit 1
fi
mv "$TMP_PDF" public/Al-Amin-Alif-CV.pdf
printf '%s\n' "$SITE$BASE" > scripts/cv-pdf-built-for.txt
echo "Wrote public/Al-Amin-Alif-CV.pdf for $SITE$BASE ($(wc -c < public/Al-Amin-Alif-CV.pdf | tr -d ' ') bytes)"

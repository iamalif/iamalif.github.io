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
PROFILE="$(mktemp -d)"
trap 'kill "$SERVER" 2>/dev/null || true; rm -rf "$PROFILE"' EXIT
PUBLIC_SITE="$SITE" PUBLIC_BASE="$BASE" npx astro dev --port "$PORT" >/dev/null 2>&1 &
SERVER=$!
for _ in $(seq 1 40); do curl -sf "http://127.0.0.1:$PORT${BASE}cv/" >/dev/null && break; sleep 0.5; done
"$CHROME" --headless --disable-gpu --user-data-dir="$PROFILE" --no-pdf-header-footer \
  --print-to-pdf=public/Al-Amin-Alif-CV.pdf "http://127.0.0.1:$PORT${BASE}cv/" >/dev/null 2>&1
printf '%s\n' "$SITE$BASE" > scripts/cv-pdf-built-for.txt
echo "Wrote public/Al-Amin-Alif-CV.pdf for $SITE$BASE"

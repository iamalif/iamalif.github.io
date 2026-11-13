---
title: "Data collection and quality: GPS and audio"
subtitle: "Provenance, quality checks and documented decisions"
summary: "GPS trajectory processing and audio-quality review with documented cleaning decisions, plus web collection and research-methods exercises."
role: "Designed and implemented data-quality workflows"
context: "Coursework"
dates: "Sep to Oct 2026"
group: "Featured technical work"
order: 5
featured: false
tags:
  - "Python"
  - "Data quality"
  - "GPS"
  - "Audio"
diagramKind: "pipeline"
tools:
  - "Python"
  - "pandas"
  - "Jupyter"
data: "20 GPS files (16,094 points) and an UrbanSound8K subset"
links:
  - label: "Repository"
    url: "https://github.com/iamalif/data-collection-and-quality-msc"
scope:
  - value: "20"
    label: "GPS files processed"
    note: "Collection scope"
  - value: "16,094"
    label: "points around Borlänge and Falun"
    note: "Collection scope"
problem: "How do collection conditions and processing choices affect what data can support? The coursework covers GPS records, environmental audio, web collection and research design, with attention to provenance and explicit methodological choices."
method:
  - title: "GPS mobility"
    url: "https://github.com/iamalif/data-collection-and-quality-msc/tree/main/gps-mobility"
    text: "Parsed logger records, converted coordinates, segmented journeys, calculated movement features and flagged quality issues."
  - title: "Audio quality"
    url: "https://github.com/iamalif/data-collection-and-quality-msc/tree/main/audio-quality"
    text: "Sampled an UrbanSound8K subset, inspected recording quality, audited labels by listening, created spectrograms and extracted features."
  - title: "Web collection"
    url: "https://github.com/iamalif/data-collection-and-quality-msc/tree/main/web-collection"
    text: "Collected text, product and weather data with provenance and error handling, plus a separate OCR demonstration."
  - title: "Research methods"
    url: "https://github.com/iamalif/data-collection-and-quality-msc/tree/main/research-methods"
    text: "Quantitative and qualitative method exercises, including a small two-interview thematic analysis."
limitsTitle: "Scope and limits"
limits:
  - "The public package is code-only: raw GPS records, audio clips, collected content and interview material are not bundled, and saved notebook outputs were cleared. The workflows cannot be reproduced from the repository alone."
  - "The audio listening audit covers a small educational sample. Listener uncertainty is not proof that dataset labels are wrong."
  - "The qualitative exercise is a small course exercise, not a representative study."
aiNote: "I set the requirements and quality standards, made the methodological decisions, ran the notebooks locally and reviewed the results. AI tools, principally Claude, supported coding, debugging, drafting and review. The audio listening audit was my own."
related:
  - label: "The Calibration Gap (research proposal)"
    path: "projects/calibration-gap/"
contribution: "Coursework for Data Collection and Data Quality (AMI23K). The Calibration Gap proposal has its own page. The collection does not claim authorship of supplied data or teaching materials."
---

---
title: GeoLife trip-purpose classification
subtitle: Trajectory-only versus semantically enriched models
summary: Compares trajectory-only and semantically enriched Hidden Markov Models with a Random Forest, with the evaluation limits documented beside the results.
role: Implemented and analysed
context: Coursework, group assignment (Group 26)
dates: Mar to Apr 2026
group: Featured technical work
order: 3
featured: true
tags: [Python, scikit-learn, HMM, Feature engineering]
diagramKind: bars
tools: [Python, pandas, scikit-learn, Hidden Markov Models, Random Forest]
data: GeoLife trajectories, 182 users, 28,608 trips
links:
  - label: Repository
    url: https://github.com/iamalif/geolife-trip-purpose-classification
  - label: Report (PDF)
    url: https://github.com/iamalif/geolife-trip-purpose-classification/blob/main/report.pdf
  - label: Presentation
    url: https://github.com/iamalif/geolife-trip-purpose-classification/blob/main/presentation.pptx
  - label: Saved results (CSV)
    url: https://github.com/iamalif/geolife-trip-purpose-classification/blob/main/results_summary.csv
  - label: Pipeline code
    url: https://github.com/iamalif/geolife-trip-purpose-classification/blob/main/pipeline.py
scope:
  - value: "182"
    label: users
    note: Dataset scope
  - value: 28,608
    label: trips
    note: Dataset scope
problem: Can the purpose of a trip (commute, education, shopping, leisure or other) be inferred from GPS trajectories alone, or does semantic context about the destination help? This was a Business Intelligence course study at Dalarna University.
method:
  - title: GPS points
    text: Microsoft GeoLife trajectories from 182 users.
  - title: Trips
    text: 28,608 trips, split at gaps of more than 20 minutes, dropping segments under 10 points.
  - title: Features
    text: Movement features and destination context to separate five categories.
  - title: Models
    text: A trajectory-only HMM, an enriched HMM and a Random Forest, compared across repeated folds.
findings:
  intro: Mean macro-F1 and standard deviation across five stratified folds repeated three times (15 scores). These are saved study outputs, not a confidence interval.
  evaluationContext: "Evaluation context: scores measure agreement with heuristic trip-purpose labels, using synthetic POI context and trip-level cross-validation."
  tableCaption: Mean macro-F1 and standard deviation across repeated folds, from the project's saved results.
  rows:
    - label: Baseline HMM
      mean: 0.41701469
      sd: 0.00442759
    - label: Enriched HMM
      mean: 0.76858813
      sd: 0.02385285
    - label: Random Forest
      mean: 0.88351258
      sd: 0.00492478
  figure:
    src: ../../assets/figures/geolife-model-comparison.png
    alt: Box plot of macro-F1 across repeated folds for the baseline HMM, enriched HMM and Random Forest, matching the values in the table.
    caption: Figure from the project repository, shown as published.
limits:
  - "The semantic context is synthetic POI data, not an independently verified dataset."
  - "Labels are weak: heuristic rules combine destination context with time and movement signals."
  - "Some signals that create the labels also appear among the predictors, so scores measure agreement with the project's labels, not verified trip purpose."
  - "Cross-validation is stratified by trip, not grouped by user, so one person's trips can appear in training and validation."
  - "The 15 scores come from overlapping repeated folds and are not independent replications."
  - "The HMM uses synthetic observation sequences built from trip-level features; its states are not validated stages of real travel."
contribution: Submitted as a course group assignment (Group 26). I implemented and analysed the study. The original group attribution is kept in the report and presentation.
thumb: ../../assets/figures/geolife-model-comparison.png
thumbAlt: Box plot comparing macro-F1 for three models.
---

---
title: "Environmental disclosure analysis"
subtitle: "Text mining of corporate sustainability reports"
summary: "Rule-based text analysis of 1,347 corporate reports from 2002 to 2016, examining how environmental disclosure language changes over time and across reporting-framework periods."
role: "Led planning; contributed analysis and code"
context: "Coursework, group project (Group 10)"
dates: "Jan to Feb 2026"
group: "Featured technical work"
order: 4
featured: false
tags:
  - "Python"
  - "Text mining"
  - "pandas"
diagramKind: "bars"
tools:
  - "Python"
  - "pandas"
  - "NumPy"
  - "Matplotlib"
  - "Seaborn"
data: "1,347 English-language CSR reports, 2002 to 2016"
links:
  - label: "Repository"
    url: "https://github.com/iamalif/environmental-disclosure-analysis"
scope:
  - value: "1,347"
    label: "English-language reports"
    note: "Corpus scope"
  - value: "2002 to 2016"
    label: "reporting years"
    note: "Corpus scope"
problem: "Corporate environmental reporting has grown, but more reporting does not by itself mean more concrete reporting. The study asks how environmental disclosure language varies over time and across sectors, and around the GRI G3 and G4 reporting-framework transitions."
method:
  - title: "Prepare"
    text: "Join report metadata to the text files, select English-language reports, filter by year and apply a minimum sentence threshold."
  - title: "Classify"
    text: "Identify environmental sentences and classify their wording as substantive, symbolic, mixed or neutral using keyword dictionaries."
  - title: "Measure"
    text: "Calculate report-level measures such as environmental sentence density and category shares."
  - title: "Compare"
    text: "Compare patterns across years, sectors and reporting periods with charts and statistical summaries."
results:
  intro: "The study reports growth in environmental disclosure volume without a corresponding improvement in the substantive language measures used."
  context: "These are observations about dictionary-based measures of reporting language. They do not establish corporate environmental performance, greenwashing or a causal effect of GRI adoption."
  items: []
limitsTitle: "Interpretation limits"
limits:
  - "Keyword classes are proxies for disclosure language, not direct measures of corporate performance."
  - "Category definitions, aggregation choices and corpus composition affect interpretation."
  - "The sample is uneven over time, with most reports from 2011 to 2016, and covers English-language reports only. Converting PDFs to text may add noise in earlier reports."
  - "The report corpus is a third-party academic input and is not bundled in the repository, so the full analysis cannot be reproduced from the repository alone."
contribution: "Group project. I led the planning and contributed substantially to the analysis and Python implementation. The original group attribution is kept in the report."
---

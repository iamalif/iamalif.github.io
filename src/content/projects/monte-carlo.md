---
title: "Monte Carlo risk analysis"
subtitle: "Hospital capacity and stock returns"
summary: "Hospital-capacity and stock-return simulations in R, with an exact stationary check of the hospital model and sensitivity analysis."
role: "Implemented and analysed"
context: "Coursework, group assignment (Group 15)"
dates: "Sep to Oct 2026"
group: "Featured technical work"
order: 2
featured: true
tags:
  - "R"
  - "Monte Carlo"
  - "Sensitivity analysis"
diagramKind: "dist"
tools:
  - "R"
data: "Frozen Intel, SSAB-A and exchange-rate data"
links:
  - label: "Repository"
    url: "https://github.com/iamalif/monte-carlo-risk-analysis"
scope:
  - value: "10,000"
    label: "paths per capacity"
    note: "Simulation design"
  - value: "20,000"
    label: "stock paths"
    note: "Simulation design"
thumb: "../../assets/figures/montecarlo-hospital-capacity.png"
thumbAlt: "Hospital capacity analysis figure from the project report."
problem: "How uncertain are the outputs of a simulation, and how much does the answer depend on the model behind it? The project applies Monte Carlo simulation to a hospital-capacity problem and to stock-return outcomes, and separates simulation precision from uncertainty about the model and the future."
method:
  - title: "Hospital model"
    text: "Capacities from 40 to 70 beds, 10,000 independent paths each after a 365-day warm-up."
  - title: "Exact check"
    text: "A stationary calculation across capacities 1 to 100 to check the simulated threshold."
  - title: "Stock returns"
    text: "Frozen Intel, SSAB-A and exchange-rate data, with 20,000 full daily paths."
  - title: "Sensitivity"
    text: "Alternative estimation windows and a block-bootstrap volatility diagnostic."
results:
  intro: "Recorded results from the final report and saved outputs."
  context: "These are results of the assignment's models. They are not hospital or investment recommendations."
  items:
    - label: "minimum hospital capacity under the assignment's model"
      value: "64 beds"
      note: "Occupancy at most 85% with probability at least 95%"
    - label: "simulated paths per capacity"
      value: "10,000"
      note: "After a 365-day warm-up"
    - label: "stock-price paths"
      value: "20,000"
      note: "Full daily paths"
  figure:
    src: "../../assets/figures/montecarlo-hospital-capacity.png"
    alt: "Chart of the hospital-capacity analysis comparing simulated and exact results across bed capacities."
    caption: "Hospital-capacity figure from the project repository, shown as published."
limits:
  - "Hospital results depend on the assumed arrival and service processes and on the chosen capacity criterion."
  - "Stock results depend on the fitted return model, the input period and the treatment of prices and exchange rates."
  - "Monte Carlo confidence intervals describe numerical precision under fitted assumptions, not all parameter uncertainty or future market outcomes."
  - "Alternative estimation windows are post hoc sensitivity checks."
  - "Neither set of results establishes certainty about real outcomes."
contribution: "Submitted as a course group assignment (Group 15). I implemented and analysed the study. The original group attribution is kept in the report."
---

---
layout: page
title: GMR-Water
description: MATLAB toolbox for high-precision water-level retrieval using GNSS multipath reflectometry.
img: assets/img/projects/project-gmr-water.png
importance: 2
category: software
featured: true
github: https://github.com/HaoRuixian/GNSS-IR-Kit
---

GMR-Water is a MATLAB-based toolbox for water-level retrieval with GNSS multipath reflectometry. It supports multi-GNSS, multi-frequency, and multi-observation processing, combining SNR, carrier phase, and pseudo-range observations in one workflow.

The software provides both GUI and scriptable processing modes, making it suitable for interactive inspection, reproducible experiments, and larger station-network studies.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/project-gmr-water.png" title="GMR-Water software overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**Key points**

- Supports GPS, Galileo, GLONASS, and BDS observations.
- Implements SNR, carrier, and pseudo-range based retrieval pipelines.
- Includes error control and analysis steps such as tropospheric/tidal correction, quality control, and visual reporting.
- Provides GUI and batch processing for station-scale or multi-day experiments.

**Links**

- [GitHub repository](https://github.com/HaoRuixian/GNSS-IR-Kit)
- [GPS Solutions article](https://doi.org/10.1007/s10291-026-02111-y)

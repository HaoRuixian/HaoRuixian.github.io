---
layout: page
title: GMR-Water
description: MATLAB toolbox for high-precision water-level retrieval using GNSS multipath reflectometry.
description_zh: 面向 GNSS 多路径反射测量水位反演的 MATLAB 软件，支持多系统、多频点和多观测值处理。
img: assets/img/projects/project-gmr-water.png
importance: 2
category: software
featured: true
github: https://github.com/HaoRuixian/GNSS-IR-Kit
---

<div data-lang-en markdown="1">

GMR-Water is a MATLAB-based toolbox for water-level retrieval with GNSS multipath reflectometry. It supports multi-GNSS, multi-frequency, and multi-observation processing, combining SNR, carrier phase, and pseudo-range observations in one workflow.

The software provides both GUI and scriptable processing modes, making it suitable for interactive inspection, reproducible experiments, and larger station-network studies.

</div>

<div data-lang-zh markdown="1">

GMR-Water 是基于 MATLAB 开发的 GNSS 多路径反射测量水位反演软件，支持多 GNSS 系统、多频点和多观测值联合处理，可在同一流程中综合 SNR、载波相位和伪距观测。

软件提供交互式 GUI 和可脚本化处理模式，适合单站数据检查、可复现实验以及多站/多天尺度的水位反演研究。

</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/project-gmr-water.png" title="GMR-Water software overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**<span data-lang-en>Key points</span><span data-lang-zh>项目要点</span>**

<div data-lang-en markdown="1">

- Supports GPS, Galileo, GLONASS, and BDS observations.
- Implements SNR, carrier, and pseudo-range based retrieval pipelines.
- Includes error control and analysis steps such as tropospheric/tidal correction, quality control, and visual reporting.
- Provides GUI and batch processing for station-scale or multi-day experiments.

</div>

<div data-lang-zh markdown="1">

- 支持 GPS、Galileo、GLONASS 和 BDS 多系统观测数据。
- 实现基于 SNR、载波相位和伪距组合的多类水位反演流程。
- 集成对流层/潮汐改正、质量控制、精度评价和结果可视化等步骤。
- 支持 GUI 操作和批处理流程，便于开展站点尺度或连续多日实验。

</div>

**<span data-lang-en>Links</span><span data-lang-zh>链接</span>**

- [GitHub repository](https://github.com/HaoRuixian/GNSS-IR-Kit)
- [GPS Solutions article](https://doi.org/10.1007/s10291-026-02111-y)

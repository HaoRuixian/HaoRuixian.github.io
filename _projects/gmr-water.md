---
layout: page
title: GMR-Water
title_zh: GMR-Water 水位反演软件
description: Open-source MATLAB software for multi-GNSS, multi-frequency, and multi-observation GNSS-MR water-level retrieval.
description_zh: 面向多系统、多频点与多观测值 GNSS-MR 水位反演的开源 MATLAB 软件。
img: assets/img/projects/gmr-water-workflow.jpg
importance: 2
category: software
featured: true
github: https://github.com/GRseRG-CUMTB/GMR-Water
toc:
  sidebar: left
---

<div class="research-project">

<div class="project-lead" data-lang-en markdown="1">

**GMR-Water** is an open-source MATLAB platform for retrieving coastal water levels from GNSS multipath reflections. It unifies SNR, carrier-phase, and pseudorange observations in one workflow, supports four major satellite constellations and their available frequencies, and provides both a graphical interface and reproducible batch processing.

</div>

<div class="project-lead" data-lang-zh markdown="1">

**GMR-Water** 是一套利用 GNSS 多路径反射信号反演近岸水位的开源 MATLAB 软件。它在同一流程中统一处理 SNR、载波相位和伪距观测，支持四大卫星导航系统及其可用频点，并同时提供图形化交互界面与可复现的批处理能力。

</div>

<div class="project-fact-grid" aria-label="Project summary">
  <div class="project-fact">
    <span class="project-fact-value">4</span>
    <span class="project-fact-label"><span data-lang-en>GNSS constellations</span><span data-lang-zh>大 GNSS 系统</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">3</span>
    <span class="project-fact-label"><span data-lang-en>observation types</span><span data-lang-zh>类 GNSS 观测值</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">5</span>
    <span class="project-fact-label"><span data-lang-en>retrieval strategies</span><span data-lang-zh>类水位反演策略</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">2022a+</span>
    <span class="project-fact-label"><span data-lang-en>MATLAB requirement</span><span data-lang-zh>MATLAB 版本要求</span></span>
  </div>
</div>

<h2 id="gmr-overview" data-toc-text="Overview" data-toc-text-en="Overview" data-toc-text-zh="项目概览"><span data-lang-en>Overview</span><span data-lang-zh>项目概览</span></h2>

<div data-lang-en markdown="1">

GNSS-MR turns the multipath usually treated as positioning noise into an environmental signal. The interference between direct and water-reflected GNSS signals contains information about the vertical distance from the antenna to the reflecting surface. GMR-Water extracts that information, estimates reflection height, applies environmental corrections, and converts the result to a consistent water-level series.

The software was designed to address a practical limitation of many existing tools: water-level retrieval is no longer restricted to a single constellation, frequency, or SNR-only model. Different observations can be processed, compared, quality controlled, and combined within a common software environment.

</div>

<div data-lang-zh markdown="1">

GNSS-MR 将定位处理中通常被视为噪声的多路径效应转化为环境观测信号。GNSS 直达信号与水面反射信号发生干涉，其中包含天线至反射面的垂直距离信息。GMR-Water 负责提取该信息、估计反射高度、施加环境误差改正，并将结果转换为统一的水位时间序列。

软件着重解决现有工具中的一项实际限制：水位反演不再局限于单一卫星系统、单一频点或仅使用 SNR 的模型。不同观测值能够在同一环境中完成处理、比较、质量控制与组合。

</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-principle.jpg" title="GNSS-MR water-level retrieval principle" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>GNSS-MR geometry and the SNR spectral-analysis route from reflected signals to corrected reflection height.</span><span data-lang-zh>GNSS-MR 几何关系，以及由反射信号经 SNR 频谱分析得到改正后反射高度的基本路径。</span></p>
</div>

<h2 id="architecture" data-toc-text="Workflow and architecture" data-toc-text-en="Workflow and architecture" data-toc-text-zh="流程与架构"><span data-lang-en>Workflow and architecture</span><span data-lang-zh>流程与架构</span></h2>

<div data-lang-en markdown="1">

The processing chain is organized into four stages:

1. **Prepare inputs:** RINEX observations, broadcast or precise ephemerides, station metadata, and optional reference tide-gauge records.
2. **Extract observations:** compute satellite geometry, filter by azimuth and elevation, and separate SNR, carrier phase, and pseudorange measurements.
3. **Retrieve water level:** use spectral analysis or inverse modeling for SNR, and dual-/triple-frequency combinations for carrier phase and pseudorange.
4. **Correct and analyze:** apply tropospheric and dynamic-tide corrections, combine multi-source retrievals, visualize time series, and report RMSE, bias, correlation, and daily sampling statistics.

</div>

<div data-lang-zh markdown="1">

软件处理链由四个阶段组成：

1. **准备输入：** RINEX 观测文件、广播或精密星历、测站信息，以及可选的验潮站参考水位。
2. **提取观测：** 计算卫星几何信息，按方位角与高度角筛选弧段，并分别提取 SNR、载波相位和伪距观测。
3. **水位反演：** SNR 可采用频谱分析或反演建模，载波相位与伪距采用双频或三频组合模型。
4. **改正与分析：** 施加对流层和动态潮汐改正，融合多源结果，绘制时间序列，并给出 RMSE、Bias、相关系数和日均采样数等指标。

</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-workflow.jpg" title="GMR-Water software workflow" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>Software architecture linking input preparation, observation extraction, five retrieval strategies, multi-source combination, and validation.</span><span data-lang-zh>软件架构连接数据准备、观测值提取、五类反演策略、多源组合与精度验证。</span></p>
</div>

<h2 id="capabilities" data-toc-text="Core capabilities" data-toc-text-en="Core capabilities" data-toc-text-zh="核心能力"><span data-lang-en>Core capabilities</span><span data-lang-zh>核心能力</span></h2>

<div data-lang-en markdown="1">

- **Multi-GNSS and multi-frequency:** GPS, GLONASS, Galileo, and BDS observations can be processed across their available bands.
- **Multi-observation retrieval:** SNR spectral/inverse methods, carrier dual- and triple-frequency combinations, carrier–pseudorange combinations, and pseudorange dual-/triple-frequency combinations.
- **Quality control and correction:** configurable azimuth/elevation masks, outlier control, tropospheric correction, dynamic-tide correction, and accuracy evaluation against reference water levels.
- **Combination strategies:** robust regression and B-spline methods produce uniformly sampled multi-GNSS time series from irregular single-track retrievals.
- **Research and operational modes:** a GUI supports interactive analysis, while function and batch workflows support repeatable station/day-scale processing.

</div>

<div data-lang-zh markdown="1">

- **多系统、多频点：** 支持 GPS、GLONASS、Galileo 和 BDS 及其可用频段。
- **多观测值反演：** 包括 SNR 频谱/反演方法、载波相位双频与三频组合、载波相位—伪距组合，以及伪距双频与三频组合。
- **质量控制与误差改正：** 可配置方位角/高度角掩膜、异常值控制、对流层改正、动态潮汐改正，并能利用参考水位进行精度评定。
- **多源组合：** 通过稳健回归与 B 样条方法，将不规则分布的单弧段结果组合为等时间间隔的多 GNSS 水位序列。
- **科研与批处理模式：** GUI 用于交互式分析，函数和批处理流程则适合可复现的多天或多站处理。

</div>

<h2 id="validation" data-toc-text="AT01 validation" data-toc-text-en="AT01 validation" data-toc-text-zh="AT01 实验验证"><span data-lang-en>AT01 validation</span><span data-lang-zh>AT01 实验验证</span></h2>

<div data-lang-en markdown="1">

The software paper evaluated GMR-Water with 28 days of data from the coastal AT01 GNSS station in February 2023. Across all tested SNR bands and all four constellations, RMSE remained below 20 cm; the best single-frequency result was GPS S1L at **17.39 cm**. Triple-frequency carrier-phase combinations produced RMSE values of 22.17, 19.00, and 26.60 cm for GPS, Galileo, and BDS, respectively.

Combining irregular retrievals improved agreement with the tide gauge. The correlation coefficient increased from 0.935 for raw retrievals to 0.939 with robust regression and 0.946 with B-spline fitting. Robust regression remains the more conservative option when preserving rapid water-level variability is important.

</div>

<div data-lang-zh markdown="1">

软件论文利用 AT01 海岸 GNSS 站 2023 年 2 月连续 28 天的数据进行验证。四大系统全部测试 SNR 频点的 RMSE 均低于 20 cm，其中 GPS S1L 的单频结果最佳，RMSE 为 **17.39 cm**。GPS、Galileo 和 BDS 的载波相位三频组合 RMSE 分别为 22.17、19.00 和 26.60 cm。

多源组合进一步提升了反演结果与验潮站记录的一致性：原始反演值的相关系数为 0.935，稳健回归组合后为 0.939，B 样条组合后为 0.946；当研究更关注快速水位变化的保真度时，稳健回归是更保守的选择。

</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-snr-results.jpg" title="Multi-GNSS SNR water-level retrieval at AT01" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>AT01 SNR retrievals for GPS, GLONASS, Galileo, and BDS, with per-frequency RMSE and average daily retrieval counts.</span><span data-lang-zh>AT01 测站 GPS、GLONASS、Galileo 和 BDS 的 SNR 水位反演结果，以及各频点 RMSE 与日均反演点数。</span></p>
</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-combination.jpg" title="Robust-regression and B-spline combination results" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>Comparison of robust-regression and B-spline strategies for combining irregular GNSS-MR retrievals.</span><span data-lang-zh>采用稳健回归与 B 样条策略组合不规则 GNSS-MR 反演值的结果比较。</span></p>
</div>

<h2 id="use" data-toc-text="Using the software" data-toc-text-en="Using the software" data-toc-text-zh="软件使用"><span data-lang-en>Using the software</span><span data-lang-zh>软件使用</span></h2>

<div data-lang-en markdown="1">

GMR-Water requires **MATLAB R2022a or later**. Launch `Start.mlapp` for the graphical workflow, or call `GMR_Water.m` for function-based and batch processing. The repository provides example data, documentation, interfaces, and supporting libraries; configuration options cover station geometry, satellite systems, frequency bands, retrieval models, corrections, and output analysis.

</div>

<div data-lang-zh markdown="1">

GMR-Water 需要 **MATLAB R2022a 或更高版本**。运行 `Start.mlapp` 可进入图形化流程，也可以调用 `GMR_Water.m` 进行函数式或批量处理。仓库提供示例数据、说明文档、接口和依赖库，配置范围涵盖测站几何、卫星系统、频点、反演模型、误差改正和结果分析。

</div>

<div class="project-resource-links">
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/GRseRG-CUMTB/GMR-Water"><i class="fa-brands fa-github"></i>&nbsp; <span data-lang-en>GitHub repository</span><span data-lang-zh>GitHub 仓库</span></a>
  <a class="btn btn-sm btn-outline-primary" href="https://doi.org/10.1007/s10291-026-02111-y"><i class="fa-solid fa-file-lines"></i>&nbsp; <span data-lang-en>GPS Solutions article</span><span data-lang-zh>GPS Solutions 论文</span></a>
</div>

<h2 id="gmr-publication" data-toc-text="Publication" data-toc-text-en="Publication" data-toc-text-zh="论文引文"><span data-lang-en>Publication</span><span data-lang-zh>论文引文</span></h2>

<div class="project-citation">
  Yang, F., &amp; Hao, R. (2026). <a href="https://doi.org/10.1007/s10291-026-02111-y">GMR-water: A water level retrieval software for multi-GNSS, multi-frequence and multi-observation based on GNSS-MR</a>. <em>GPS Solutions, 30</em>(3).
</div>

</div>

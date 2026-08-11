---
layout: page
title: Tropospheric Scale-Height Research
title_zh: 对流层参量尺度高度研究
description: From regional water-vapor climatology to the global ERA5-SH dataset and height-correction applications.
description_zh: 从中国区域水汽尺度高度规律，拓展到全球 ERA5-SH 数据集及其高程改正应用。
img: assets/img/projects/project-era5-sh.png
importance: 1
category: data
featured: true
github: https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis
toc:
  sidebar: left
---

<div class="research-project">

<div class="project-lead" data-lang-en markdown="1">

This project brings together two connected studies on **tropospheric scale height**: a radiosonde-based investigation of water-vapor scale height across China's climate zones, followed by ERA5-SH, a global gridded dataset for six key tropospheric parameters. Together, they move from explaining regional atmospheric structure to building a reusable global product for GNSS meteorology and atmospheric remote sensing.

</div>

<div class="project-lead" data-lang-zh markdown="1">

本项目整合了两项相互衔接的**对流层参量尺度高度研究**：首先利用中国无线电探空资料揭示不同气候区水汽尺度高度的时空变化与影响因素，随后将研究拓展至全球，构建包含六类关键对流层参量的 ERA5-SH 格网数据集。研究由区域大气结构认识出发，最终形成可直接服务于 GNSS 气象学与大气遥感的全球产品。

</div>

<div class="project-fact-grid" aria-label="Project summary">
  <div class="project-fact">
    <span class="project-fact-value">89</span>
    <span class="project-fact-label"><span data-lang-en>radiosonde stations in China</span><span data-lang-zh>个中国无线电探空站</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">6</span>
    <span class="project-fact-label"><span data-lang-en>tropospheric parameters</span><span data-lang-zh>类对流层关键参量</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">1° × 1°</span>
    <span class="project-fact-label"><span data-lang-en>global spatial resolution</span><span data-lang-zh>全球空间分辨率</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">1 hour</span>
    <span class="project-fact-label"><span data-lang-en>temporal resolution</span><span data-lang-zh>时间分辨率</span></span>
  </div>
  <div class="project-fact">
    <span class="project-fact-value">2013–2022</span>
    <span class="project-fact-label"><span data-lang-en>ERA5-SH data period</span><span data-lang-zh>ERA5-SH 数据时段</span></span>
  </div>
</div>

<h2 id="overview" data-toc-text="Overview" data-toc-text-en="Overview" data-toc-text-zh="研究概览"><span data-lang-en>Overview</span><span data-lang-zh>研究概览</span></h2>

<div data-lang-en markdown="1">

Scale height describes how rapidly an atmospheric parameter decays with altitude: it is the height increment over which the parameter falls to (1/e), or about 36.7%, of its reference value. This compact quantity links vertical atmospheric structure to practical models for zenith delays, water vapor, weighted mean temperature, and vertical interpolation.

The research follows a clear progression: identify how water-vapor scale height behaves under different regional climates, then build and validate a global, hourly, multi-parameter scale-height dataset from ERA5 pressure-level profiles.

</div>

<div data-lang-zh markdown="1">

尺度高度描述大气参量随高程衰减的快慢：当某参量降低至参考值的 (1/e)，即约 36.7% 时，对应的高程增量就是尺度高度。它以一个紧凑参数连接大气垂直结构与天顶延迟、水汽、加权平均温度和垂向插值等实际模型。

本项目的研究路径十分明确：先认识不同区域气候条件下水汽尺度高度的变化规律，再基于 ERA5 pressure-level 廓线构建并验证全球、逐小时、多参量的尺度高度数据集。

</div>

<h2 id="research-program" data-toc-text="Research program" data-toc-text-en="Research program" data-toc-text-zh="研究主线"><span data-lang-en>Research program</span><span data-lang-zh>研究主线</span></h2>

<h3 id="regional-study" data-toc-text="Regional climatology" data-toc-text-en="Regional climatology" data-toc-text-zh="区域气候研究"><span data-lang-en>1. Regional water-vapor climatology</span><span data-lang-zh>1. 区域水汽尺度高度气候研究</span></h3>

<div class="project-study-panel" data-lang-en markdown="1">

Using 2016–2019 radiosonde profiles from 89 stations, the first study quantified water-vapor scale height across four climate zones in China. It examined spatial contrasts, seasonal and diurnal cycles, long-term trends, and relationships with temperature, pressure, and precipitable water vapor.

</div>

<div class="project-study-panel" data-lang-zh markdown="1">

第一项研究利用 2016–2019 年中国 89 个无线电探空站的廓线资料，分析四类气候区的水汽尺度高度，系统讨论空间差异、季节和日变化、长期趋势，以及其与温度、气压和大气可降水量之间的关系。

</div>

<div data-lang-en markdown="1">

The annual mean ranged from **1.79 to 3.02 km**. Values were generally higher in subtropical monsoon and temperate continental climates, where regional means exceeded 2.35 km. Annual and semiannual signals were both evident, with mean amplitudes of approximately 0.20 and 0.09 km. Water-vapor scale height was positively associated with temperature, pressure, and precipitable water, although the strength and trend differed by climate zone.

</div>

<div data-lang-zh markdown="1">

中国区域年平均水汽尺度高度约为 **1.79–3.02 km**。亚热带季风气候区和温带大陆性气候区的尺度高度相对较大，区域均值超过 2.35 km；年周期与半年周期均较显著，平均振幅分别约为 0.20 km 和 0.09 km。尺度高度总体与温度、气压和大气可降水量呈正相关，但不同气候区的相关程度和变化趋势并不相同。

</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-spatial.jpg" title="Spatial distribution of annual mean water-vapor scale height across China" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>Annual mean water-vapor scale height derived from 89 radiosonde stations; the station network spans four major climate zones.</span><span data-lang-zh>基于 89 个无线电探空站得到的年平均水汽尺度高度空间分布，覆盖中国四类主要气候区。</span></p>
</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-periodicity.jpg" title="Annual and semiannual amplitudes of water-vapor scale height" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>Spatial patterns of the annual and semiannual amplitudes show that temporal variability is strongly climate dependent.</span><span data-lang-zh>年周期与半年周期振幅的空间分布表明，水汽尺度高度的时间变化具有明显的气候区差异。</span></p>
</div>

<h3 id="global-dataset" data-toc-text="Global ERA5-SH dataset" data-toc-text-en="Global ERA5-SH dataset" data-toc-text-zh="全球 ERA5-SH 数据集"><span data-lang-en>2. Global ERA5-SH dataset</span><span data-lang-zh>2. 全球 ERA5-SH 数据集</span></h3>

<div class="project-study-panel" data-lang-en markdown="1">

ERA5-SH extends the scale-height framework from one parameter and one country to six parameters worldwide: precipitable water vapor (PWV), water vapor density (WVD), weighted mean temperature (Tm), zenith total delay (ZTD), zenith hydrostatic delay (ZHD), and zenith wet delay (ZWD). Numerical integration and exponential fitting were applied to ERA5 profiles on 37 pressure levels.

</div>

<div class="project-study-panel" data-lang-zh markdown="1">

ERA5-SH 将尺度高度研究从单一水汽参量和中国区域扩展至全球六类参量：大气可降水量（PWV）、水汽密度（WVD）、加权平均温度（Tm）、天顶总延迟（ZTD）、天顶静力延迟（ZHD）和天顶湿延迟（ZWD）。项目对 ERA5 的 37 个气压层廓线进行数值积分与指数拟合。

</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/project-era5-sh.png" title="ERA5-SH production and validation workflow" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>ERA5-SH production workflow, from ERA5 pressure-level variables to six scale-height products and radiosonde validation.</span><span data-lang-zh>ERA5-SH 制作流程：由 ERA5 pressure-level 变量计算六类尺度高度产品，并使用无线电探空资料进行验证。</span></p>
</div>

<div data-lang-en markdown="1">

After quality control, scale heights derived from **587 radiosonde stations** were used for independent evaluation. Mean coefficients of determination for the six parameters ranged from 0.957 to 0.999. A global ZTD interpolation experiment at 12,552 GNSS stations further showed the practical value of the product: introducing ZTDSH reduced the mean interpolation RMSE from **50.27 mm to 18.40 mm**.

</div>

<div data-lang-zh markdown="1">

经过质量控制后，研究使用 **587 个无线电探空站**独立计算的尺度高度进行验证，六类参量的平均决定系数为 0.957–0.999。针对全球 12,552 个 GNSS 站开展的 ZTD 插值实验进一步表明：引入 ZTDSH 后，平均插值 RMSE 由 **50.27 mm 降至 18.40 mm**。

</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-validation.jpg" title="Global radiosonde validation of ERA5-SH" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>Global radiosonde validation RMSE for PWVSH, WVSH, TmSH, ZTDSH, ZHDSH, and ZWDSH.</span><span data-lang-zh>PWVSH、WVSH、TmSH、ZTDSH、ZHDSH 和 ZWDSH 的全球无线电探空验证 RMSE。</span></p>
</div>

<div class="project-figure">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-ztd-application.jpg" title="ZTD interpolation before and after scale-height correction" class="img-fluid rounded z-depth-1" %}
  <p class="project-caption"><span data-lang-en>Global ZTD interpolation errors before (left) and after (right) applying ERA5-derived ZTDSH correction.</span><span data-lang-zh>应用 ERA5 ZTDSH 改正前（左）与改正后（右）的全球 ZTD 插值误差。</span></p>
</div>

<h2 id="data-code" data-toc-text="Data and code" data-toc-text-en="Data and code" data-toc-text-zh="数据与代码"><span data-lang-en>Data and code</span><span data-lang-zh>数据与代码</span></h2>

<div data-lang-en markdown="1">

The ERA5-SH data are archived in two Zenodo records. Annual MATLAB files store compressed `int16` arrays together with scale, offset, and maximum-error metadata. The companion GitHub repository contains workflows for profile calculation, scale-height fitting, ground interpolation, and radiosonde processing.

</div>

<div data-lang-zh markdown="1">

ERA5-SH 数据通过两个 Zenodo 记录长期开放。按年组织的 MATLAB 文件以压缩 `int16` 数组保存，同时提供比例因子、偏移量与最大误差等元数据。配套 GitHub 仓库包含廓线计算、尺度高度拟合、地面插值和无线电探空处理流程。

</div>

<div class="project-resource-links">
  <a class="btn btn-sm btn-outline-primary" href="https://doi.org/10.5281/zenodo.14676025"><i class="fa-solid fa-database"></i>&nbsp; Zenodo: ZTDSH / ZHDSH / ZWDSH</a>
  <a class="btn btn-sm btn-outline-primary" href="https://doi.org/10.5281/zenodo.14679394"><i class="fa-solid fa-database"></i>&nbsp; Zenodo: PWVSH / WVSH / TmSH</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis"><i class="fa-brands fa-github"></i>&nbsp; <span data-lang-en>Source code</span><span data-lang-zh>源代码</span></a>
</div>

<h2 id="publications" data-toc-text="Publications" data-toc-text-en="Publications" data-toc-text-zh="相关论文"><span data-lang-en>Publications</span><span data-lang-zh>相关论文</span></h2>

<div class="project-citation">
  Hao, R., Xu, T., Li, Z., Yang, F., Hao, Z., Tan, J., Gao, Y., &amp; Shu, Z. (2024). <a href="https://doi.org/10.1016/j.asr.2024.05.019">Spatial-temporal variation of water vapor scale height and its impact factors in different climate zones of China</a>. <em>Advances in Space Research, 74</em>(4), 1576–1585.
</div>

<div class="project-citation">
  Hao, R., Yang, F., Li, Z., Zhang, Y., Zhou, L., &amp; Wang, L. (2025). <a href="https://doi.org/10.1038/s41597-025-04714-5">ERA5-SH: A global grided scale height dataset for tropospheric parameters based on ERA5 reanalysis</a>. <em>Scientific Data, 12</em>, 381.
</div>

<h2 id="applications" data-toc-text="Applications" data-toc-text-en="Applications" data-toc-text-zh="应用方向"><span data-lang-en>Applications</span><span data-lang-zh>应用方向</span></h2>

<div data-lang-en markdown="1">

- Height normalization and interpolation of GNSS tropospheric delays across stations with large elevation differences.
- Vertical modeling of PWV, WVD, and Tm for GNSS meteorology and atmospheric water-vapor studies.
- Prior information for water-vapor tomography, atmospheric profile reconstruction, and regional climate analysis.
- Reproducible benchmarking of empirical and reanalysis-based scale-height models.

</div>

<div data-lang-zh markdown="1">

- 面向大高差 GNSS 站点的对流层延迟高程归算与空间插值。
- 服务 GNSS 气象学和大气水汽研究的 PWV、WVD 与 Tm 垂向建模。
- 为水汽层析、大气廓线重建和区域气候分析提供先验信息。
- 对经验模型与再分析资料尺度高度模型开展可复现的精度比较。

</div>

</div>

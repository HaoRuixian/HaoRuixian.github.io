---
layout: page
title: GMR-Water
title_zh: GMR-Water 水位反演软件
description: Multi-GNSS, multi-frequency, and multi-observation GNSS-MR water-level retrieval.
description_zh: 面向多系统、多频点与多观测值的 GNSS-MR 水位反演。
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

**GMR-Water** is an open-source MATLAB platform for coastal water-level retrieval from GNSS multipath reflections. It places SNR, carrier phase, and pseudorange observations in one processing system, supports GPS, GLONASS, Galileo, and BDS across their available frequencies, and provides graphical, functional, and batch workflows for reproducible GNSS reflectometry.

</div>

<div class="project-lead" data-lang-zh markdown="1">

**GMR-Water** 是一套利用 GNSS 多路径反射信号反演近岸水位的开源 MATLAB 平台。它将 SNR、载波相位和伪距观测统一到同一处理系统，支持 GPS、GLONASS、Galileo 与 BDS 的可用频点，并提供图形界面、函数调用和批处理流程，以实现可复现的 GNSS 反射测量。

</div>

<h2 id="background" data-toc-text="Research context" data-toc-text-en="Research context" data-toc-text-zh="研究背景"><span data-lang-en>Research context and software objective</span><span data-lang-zh>研究背景与软件目标</span></h2>

<div data-lang-en markdown="1">

Dense coastal GNSS networks continuously record signals from several constellations. In conventional positioning, reflections from nearby water surfaces are treated as multipath errors. In GNSS multipath reflectometry (GNSS-MR), the same interference becomes an environmental observation: its oscillation frequency and phase encode the vertical distance between the antenna and the reflecting surface.

Previous water-level tools commonly emphasized SNR observations, a single constellation or frequency, or one inversion strategy. Separate implementations also made it difficult to compare results across observation types. GMR-Water was developed to provide a common interface for the principal GNSS-MR models, uniform quality control, environmental corrections, multi-source combination, accuracy assessment, and visualization.

</div>

<div data-lang-zh markdown="1">

密集的沿海 GNSS 网络能够连续接收多个卫星导航系统的信号。在传统定位中，邻近水面产生的反射通常被视为多路径误差；在 GNSS 多路径反射测量（GNSS-MR）中，同一干涉现象被转化为环境观测，其振荡频率与相位包含天线至反射面的垂直距离信息。

已有水位软件多集中于 SNR 观测、单一卫星系统或频点，或仅实现一种反演方法；分散的实现也不利于不同观测类型之间的统一比较。GMR-Water 因此提供主要 GNSS-MR 模型的统一接口，并集成质量控制、环境改正、多源组合、精度评定和可视化。

</div>

<h2 id="principle" data-toc-text="GNSS-MR principle" data-toc-text-en="GNSS-MR principle" data-toc-text-zh="GNSS-MR 原理"><span data-lang-en>Observation principle</span><span data-lang-zh>观测原理</span></h2>

<div data-lang-en markdown="1">

The antenna receives a direct signal with amplitude A<sub>d</sub> and a water-reflected signal with amplitude A<sub>r</sub>. Their path difference changes with satellite elevation angle e. For a locally horizontal reflector and antenna–water separation H, the phase difference can be approximated by

</div>

<div data-lang-zh markdown="1">

GNSS 天线同时接收振幅为 A<sub>d</sub> 的直达信号和振幅为 A<sub>r</sub> 的水面反射信号。二者的传播路径差随卫星高度角 e 变化。对于局部水平反射面，若天线与水面的垂直距离为 H，相位差可近似表示为

</div>

$$
\Delta\phi=\frac{4\pi H}{\lambda}\sin e+\phi_0,
$$

<div data-lang-en markdown="1">

where λ is wavelength and φ<sub>0</sub> is an initial phase. SNR residuals therefore oscillate approximately as a sinusoid in sin(e). Spectral analysis estimates the dominant frequency and converts it to reflection height; inverse modeling estimates H directly in the observation equation. Carrier-phase and pseudorange combinations isolate multipath terms by eliminating or reducing geometric distance, clock error, ionospheric delay, and other common components.

Reflection height is not yet water level. Antenna reference height, tidal loading, tropospheric delay, the local reflection geometry, and a chosen vertical datum must be handled consistently before the result is compared with a tide gauge.

</div>

<div data-lang-zh markdown="1">

其中 λ 为波长，φ<sub>0</sub> 为初始相位。因此，SNR 残差相对于 sin(e) 近似呈正弦振荡；频谱法通过主频求取反射高度，反演模型则在观测方程中直接估计 H。载波相位和伪距组合通过消除或削弱几何距离、钟差、电离层延迟等共同项，分离多路径分量。

反射高度并不直接等于水位。与验潮记录比较之前，还需要统一处理天线参考高程、潮汐负荷、对流层延迟、局部反射几何和垂直基准。

</div>

<div class="project-figure project-figure--medium">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-principle.jpg" title="GNSS-MR water-level retrieval principle" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 1. Direct and reflected GNSS signals, reflection geometry, and the SNR spectral route from oscillation frequency to corrected reflection height.</span><span data-lang-zh>图 1. GNSS 直达与反射信号、反射几何，以及由 SNR 振荡频率获得改正后反射高度的频谱处理路线。</span></p>
</div>

<h2 id="models" data-toc-text="Retrieval models" data-toc-text-en="Retrieval models" data-toc-text-zh="反演模型"><span data-lang-en>Five retrieval strategies</span><span data-lang-zh>五类水位反演策略</span></h2>

<div data-lang-en markdown="1">

GMR-Water implements five model families rather than restricting analysis to one observation type.

</div>

<div data-lang-zh markdown="1">

GMR-Water 实现五类模型体系，不再将分析限定于单一观测值。

</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Strategy                          | Observation                 | Main idea                                                                                         | Primary output                           |
| --------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| SNR spectral analysis             | SNR                         | Remove the low-order direct-signal trend; apply Lomb–Scargle periodogram to residual oscillations | Dominant frequency and reflection height |
| SNR inverse modeling              | SNR                         | Fit the interference model directly, treating reflection height and phase terms as unknowns       | Reflection height from least squares     |
| Carrier dual/triple frequency     | Carrier phase               | Form frequency combinations that suppress common errors and expose multipath oscillations         | Multi-frequency reflection height        |
| Carrier–pseudorange combination   | Carrier phase + pseudorange | Combine code and phase to retain the reflection signature while reducing shared errors            | Track-level height estimate              |
| Pseudorange dual/triple frequency | Pseudorange                 | Construct ionosphere-reduced multi-frequency code combinations and analyze multipath              | Code-based reflection height             |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 策略                  | 观测值          | 核心方法                                                     | 主要输出         |
| --------------------- | --------------- | ------------------------------------------------------------ | ---------------- |
| SNR 频谱分析          | SNR             | 去除直达信号低阶趋势，对残差振荡进行 Lomb–Scargle 周期图分析 | 主频与反射高度   |
| SNR 反演模型          | SNR             | 直接拟合干涉模型，将反射高度和相位项作为未知参数             | 最小二乘反射高度 |
| 载波相位双频/三频组合 | 载波相位        | 构造多频组合削弱共同误差并提取多路径振荡                     | 多频反射高度     |
| 载波相位—伪距组合     | 载波相位 + 伪距 | 组合码与相位，在削弱共同误差的同时保留反射特征               | 弧段反射高度     |
| 伪距双频/三频组合     | 伪距            | 构造削弱电离层项的多频码组合并分析多路径                     | 码观测反射高度   |

</div>

<div data-lang-en markdown="1">

For SNR spectral retrieval, the low-elevation arc is detrended, converted to linear amplitude, and analyzed with a Lomb–Scargle periodogram because GNSS elevation samples are irregular in sin(e). The strongest physically plausible peak gives H. The inverse route fits the complete interference function and can avoid an explicit peak-picking step, but depends more strongly on initial values and parameter bounds.

Carrier phase L<sub>i</sub>, pseudorange C<sub>i</sub>, wavelength, ambiguity, ionospheric delay, tropospheric delay, and multipath terms enter the multi-frequency combinations. Dual- and triple-frequency formulations trade error cancellation against noise amplification; the software exposes the combinations so that different systems and signals can be evaluated consistently.

</div>

<div data-lang-zh markdown="1">

在 SNR 频谱反演中，首先对低高度角弧段去趋势并转换为线性振幅。由于 GNSS 观测在 sin(e) 域并非等间隔采样，软件采用 Lomb–Scargle 周期图；物理范围内最强的谱峰用于估计 H。反演路线则拟合完整干涉函数，可省略显式峰值选择，但对初值与参数边界更敏感。

多频组合涉及载波相位 L<sub>i</sub>、伪距 C<sub>i</sub>、波长、整周模糊度、电离层延迟、对流层延迟与多路径项。双频和三频模型需要在误差消除与噪声放大之间权衡；软件统一开放这些组合，便于不同系统和信号在相同条件下评估。

</div>

<h2 id="software" data-toc-text="Software workflow" data-toc-text-en="Software workflow" data-toc-text-zh="软件流程"><span data-lang-en>Software architecture and processing workflow</span><span data-lang-zh>软件架构与处理流程</span></h2>

<div data-lang-en markdown="1">

The implementation separates data preparation, arc extraction, model inversion, and time-series analysis:

1. **Input preparation:** read RINEX observations, broadcast or precise ephemerides, station coordinates and antenna information, processing dates, and optional tide-gauge records.
2. **Geometry and arc extraction:** calculate satellite azimuth/elevation, choose constellations and frequencies, apply azimuth and elevation masks, and divide continuous observations into rising or setting arcs.
3. **Retrieval:** run one or more of the five SNR, carrier-phase, and pseudorange strategies; reject estimates outside configured height and quality limits.
4. **Correction:** apply tropospheric and dynamic-tide corrections and convert reflector height to the selected water-level datum.
5. **Combination and evaluation:** fuse irregular track-level solutions, construct uniform series, compare with tide-gauge observations, and report RMSE, bias, correlation, and daily retrieval counts.

</div>

<div data-lang-zh markdown="1">

软件实现将数据准备、弧段提取、模型反演和时间序列分析分离：

1. **输入准备：** 读取 RINEX 观测文件、广播或精密星历、测站坐标与天线信息、处理日期，以及可选的验潮站记录。
2. **几何计算与弧段提取：** 计算卫星方位角和高度角，选择系统与频点，应用方位角/高度角掩膜，并将连续观测划分为升轨或降轨弧段。
3. **反演：** 运行一种或多种 SNR、载波相位和伪距策略，剔除超出设定高度与质量阈值的结果。
4. **误差改正：** 施加对流层与动态潮汐改正，将反射面高度转换到指定水位基准。
5. **组合与评定：** 融合不规则弧段解，形成等时间间隔序列，与验潮观测比较，并输出 RMSE、Bias、相关系数及日均反演点数。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-workflow.jpg" title="GMR-Water software architecture" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 2. Processing architecture from input preparation and observation extraction to five retrieval models, correction, combination, and validation.</span><span data-lang-zh>图 2. 从输入准备、观测提取到五类反演模型、误差改正、组合与验证的软件架构。</span></p>
</div>

<h3 id="systems" data-toc-text="Systems and signals" data-toc-text-en="Systems and signals" data-toc-text-zh="系统与信号"><span data-lang-en>Constellations, observations, and execution modes</span><span data-lang-zh>卫星系统、观测值与运行方式</span></h3>

<div data-lang-en markdown="1">

The AT01 experiment demonstrates support for GPS L1/L2/L5, GLONASS G1/G2, Galileo E1/E5a/E5b/E5/E6, and BDS B1/B1-2/B2a/B2b/B3 observations when present in the RINEX file. The same project can mix SNR, carrier, and pseudorange strategies without converting data into separate software-specific formats.

Interactive work begins with `Start.mlapp`; scripted and batch work uses `GMR_Water.m` and the processing functions in the repository. The GUI is intended for station configuration, model selection, quality inspection, and plots, whereas function and batch modes support repeated station-day processing and reproducible experiments. MATLAB R2022a or later is required by the current release.

</div>

<div data-lang-zh markdown="1">

AT01 实验展示了对 GPS L1/L2/L5、GLONASS G1/G2、Galileo E1/E5a/E5b/E5/E6，以及 BDS B1/B1-2/B2a/B2b/B3 的支持，前提是相应观测存在于 RINEX 文件中。同一项目可混合使用 SNR、载波相位与伪距策略，无需将数据转换成彼此独立的软件专用格式。

交互处理由 `Start.mlapp` 启动，脚本和批处理则调用 `GMR_Water.m` 及仓库中的处理函数。GUI 用于测站配置、模型选择、质量检查与绘图；函数和批处理模式适合重复的“测站—日期”计算及可复现实验。当前版本需要 MATLAB R2022a 或更高版本。

</div>

<h3 id="corrections" data-toc-text="Correction and fusion" data-toc-text-en="Correction and fusion" data-toc-text-zh="改正与融合"><span data-lang-en>Error correction and multi-source combination</span><span data-lang-zh>误差改正与多源组合</span></h3>

<div data-lang-en markdown="1">

Low-elevation reflected signals are especially sensitive to tropospheric bending and to the fact that a moving sea surface changes during a satellite arc. GMR-Water therefore includes tropospheric and dynamic-tide corrections before final water-level conversion. Azimuth and elevation masks restrict observations to a physically valid reflecting sector, while user-defined height and spectral-quality ranges reject spurious peaks.

Individual GNSS-MR estimates are irregular in time because each satellite arc has its own geometry. The software implements two combination strategies. Robust regression reduces the influence of outliers while retaining rapid changes. B-spline fitting produces a smoother, uniformly sampled curve and can yield higher correlation, but its shape constraints may suppress genuine short-period variability. The appropriate choice depends on whether robustness or smooth temporal continuity is the priority.

</div>

<div data-lang-zh markdown="1">

低高度角反射信号对对流层弯曲十分敏感，同时卫星弧段期间水面本身也在变化。GMR-Water 因而在最终水位转换前加入对流层与动态潮汐改正。方位角和高度角掩膜用于限定物理上有效的反射扇区，用户设定的高度与频谱质量范围则用于剔除伪峰。

由于不同卫星弧段具有各自的几何条件，GNSS-MR 单点反演在时间上并不规则。软件提供两种组合策略：稳健回归可降低离群值影响并保留快速变化；B 样条拟合可生成更平滑的等间隔曲线，并可能获得更高相关性，但曲线约束也可能压制真实的短周期变化。应根据研究更重视稳健性还是时间连续性进行选择。

</div>

<h2 id="experiment" data-toc-text="AT01 experiment" data-toc-text-en="AT01 experiment" data-toc-text-zh="AT01 实验"><span data-lang-en>AT01 coastal validation experiment</span><span data-lang-zh>AT01 海岸测站验证实验</span></h2>

<h3 id="site" data-toc-text="Site and reference" data-toc-text-en="Site and reference" data-toc-text-zh="测站与参考"><span data-lang-en>Station geometry and tide-gauge reference</span><span data-lang-zh>测站几何与验潮参考</span></h3>

<div data-lang-en markdown="1">

The software paper used 28 days of observations from **AT01** in February 2023. The station is at 63.48405°N, 162.00640°W near St. Michael, Alaska, with the antenna phase center approximately 12 m above sea level. The open water sector is mainly within azimuth 0°–220°. Elevation angles of 5°–15° were selected so that the first Fresnel zones fell predominantly on the water surface.

Reference observations came from NOAA tide station **9468333**, approximately 74 km from AT01. Six-minute tide records were interpolated to the GNSS-MR epochs with a spline function. The spatial separation means the comparison evaluates both retrieval error and some local difference in water-level behavior, which is relevant when interpreting centimetric RMSE.

</div>

<div data-lang-zh markdown="1">

软件论文采用 **AT01** 站 2023 年 2 月连续 28 天的观测。该站位于美国阿拉斯加 St. Michael 附近（63.48405°N，162.00640°W），天线相位中心距海面约 12 m。开阔水面主要位于方位角 0°—220°，实验选择 5°—15° 高度角，使第一菲涅尔区尽可能落在水面上。

参考水位来自 NOAA 验潮站 **9468333**，距 AT01 约 74 km。6 分钟验潮记录通过样条插值归算至 GNSS-MR 历元。由于两站存在空间距离，厘米级 RMSE 同时包含反演误差和局部水位差异，解释结果时需要考虑这一点。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-station-fresnel.jpg" title="AT01 station, tide gauge, and Fresnel zones" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 3. Location of AT01 and NOAA 9468333, station photographs, and first Fresnel zones for selected elevation angles.</span><span data-lang-zh>图 3. AT01 与 NOAA 9468333 的位置、测站照片及不同高度角对应的第一菲涅尔区。</span></p>
</div>

<h3 id="snr-results" data-toc-text="SNR results" data-toc-text-en="SNR results" data-toc-text-zh="SNR 结果"><span data-lang-en>Multi-GNSS SNR retrieval</span><span data-lang-zh>多系统 SNR 水位反演</span></h3>

<div data-lang-en markdown="1">

All tested SNR signals from the four constellations achieved RMSE below **20 cm** against the tide gauge. GPS S1L produced the best single-frequency value, approximately **17.3 cm**, while BDS S1P was the largest at 19.681 cm. Retrieval density depended on constellation geometry and the number of tracked signals: BDS produced more than 263 estimates per day, whereas Galileo produced about 180 per day.

The results show why multi-GNSS processing matters operationally. A single frequency can already reach decimetric accuracy, but pooling constellations increases temporal sampling and reduces gaps. Differences among frequency bands also provide a direct way to diagnose antenna response, observation quality, and local reflection conditions.

</div>

<div data-lang-zh markdown="1">

四个卫星系统全部受测 SNR 信号相对于验潮站的 RMSE 均低于 **20 cm**。GPS S1L 的单频结果最好，约为 **17.3 cm**；BDS S1P 最大，为 19.681 cm。反演密度取决于星座几何及可跟踪信号数量：BDS 日均反演点数超过 263，Galileo 约为 180。

这些结果说明多系统处理具有直接的业务价值。单频信号已可达到分米级精度，而合并多个星座能够提高时间采样并减少空缺。不同频点的差异也可用于诊断天线响应、观测质量和局部反射条件。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-snr-results.jpg" title="Multi-GNSS SNR water-level retrieval at AT01" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 4. GPS, GLONASS, Galileo, and BDS SNR retrievals, including per-signal RMSE and daily sampling counts.</span><span data-lang-zh>图 4. GPS、GLONASS、Galileo 与 BDS 的 SNR 反演结果，包括各信号 RMSE 和日均采样数。</span></p>
</div>

<h3 id="combination-results" data-toc-text="Combination results" data-toc-text-en="Combination results" data-toc-text-zh="组合结果"><span data-lang-en>Robust regression and B-spline combination</span><span data-lang-zh>稳健回归与 B 样条组合</span></h3>

<div data-lang-en markdown="1">

The correlation with the tide gauge was **0.935** for the uncombined retrievals. It increased to **0.939** after robust-regression combination and **0.946** after B-spline fitting. The B-spline result follows the broad tide cycle smoothly, but the manuscript notes that curve constraints can become unreasonable where the water level changes rapidly or data are sparse. Robust regression therefore provides the safer general-purpose solution, even when its correlation is slightly lower.

</div>

<div data-lang-zh markdown="1">

未组合反演值与验潮记录的相关系数为 **0.935**；稳健回归组合后提高至 **0.939**，B 样条拟合后达到 **0.946**。B 样条能够平滑跟踪主要潮汐周期，但论文指出，在水位快速变化或数据稀疏处，曲线约束可能产生不合理形态。因此，即使相关系数略低，稳健回归仍是更安全的通用选择。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-combination.jpg" title="Multi-source GNSS-MR water-level combination" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 5. Raw track-level solutions and uniformly sampled series from robust regression and B-spline fitting.</span><span data-lang-zh>图 5. 原始弧段解，以及稳健回归和 B 样条拟合形成的等间隔水位序列。</span></p>
</div>

<h3 id="carrier-results" data-toc-text="Carrier results" data-toc-text-en="Carrier results" data-toc-text-zh="载波结果"><span data-lang-en>Carrier-phase and other observation combinations</span><span data-lang-zh>载波相位与其他观测组合</span></h3>

<div data-lang-en markdown="1">

The triple-frequency carrier-phase experiment used GPS L1/L2/L5, Galileo E1/E5a/E5b, and BDS B1/B3/B2a. RMSE values were **22.17, 19.00, and 26.60 cm**, respectively, and the combined correlation was **0.886**. Average daily retrieval counts were 26.39 for GPS, 41.86 for Galileo, and 39.03 for BDS. Carrier-phase retrieval was therefore less accurate and much sparser than SNR at AT01, but it demonstrates an independent observation route and identifies where combination design and quality control can be improved.

The complete software also implements the SNR inverse model, carrier–pseudorange combinations, and pseudorange dual-/triple-frequency models. Worked examples and parameter definitions are included in Section 7 of the repository manual, allowing the same station and arc masks to be reused when comparing observation strategies.

</div>

<div data-lang-zh markdown="1">

三频载波相位实验分别采用 GPS L1/L2/L5、Galileo E1/E5a/E5b 和 BDS B1/B3/B2a，RMSE 为 **22.17、19.00 和 26.60 cm**，组合相关系数为 **0.886**。GPS、Galileo 与 BDS 的日均反演点数分别为 26.39、41.86 和 39.03。AT01 的载波相位结果精度低于 SNR 且更稀疏，但它提供了独立的观测路线，也明确了多频组合设计与质量控制仍可优化的环节。

完整软件还实现 SNR 反演模型、载波相位—伪距组合，以及伪距双频/三频模型。仓库说明书第 7 节提供计算示例和参数定义，可在比较不同观测策略时复用相同测站与弧段掩膜。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/gmr-water-carrier-results.jpg" title="Triple-frequency carrier-phase retrieval at AT01" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 6. Triple-frequency carrier-phase results for GPS, Galileo, and BDS, with tide-gauge comparison and sampling statistics.</span><span data-lang-zh>图 6. GPS、Galileo 与 BDS 三频载波相位结果、验潮对比及采样统计。</span></p>
</div>

<h2 id="reproducibility" data-toc-text="Reproducibility" data-toc-text-en="Reproducibility" data-toc-text-zh="复现说明"><span data-lang-en>Data, operation, and reproducibility</span><span data-lang-zh>数据、运行与复现说明</span></h2>

<div data-lang-en markdown="1">

The repository contains source code, the graphical application, example files, processing interfaces, dependency libraries, and the user manual. A reproducible run requires the RINEX observation file, an appropriate ephemeris, correct antenna coordinates and reference height, chosen satellite/frequency settings, azimuth/elevation masks, and—when validation is required—a tide record expressed in a documented datum.

AT01 GNSS observations used in the paper are available through the PBO/EarthScope archive; the reference water levels are available from NOAA station 9468333. Users applying the software elsewhere should inspect the first Fresnel zones before choosing an azimuth sector, because land contamination, structures, sea ice, or shoreline changes can produce spectral peaks unrelated to water level.

- [GMR-Water source code, manual, and examples](https://github.com/GRseRG-CUMTB/GMR-Water)
- [Published article in _GPS Solutions_](https://doi.org/10.1007/s10291-026-02111-y)

</div>

<div data-lang-zh markdown="1">

仓库包含源代码、图形应用、示例文件、处理接口、依赖库和用户说明书。一次可复现的计算需要 RINEX 观测文件、适当的星历、正确的天线坐标与参考高程、卫星系统/频点设置、方位角/高度角掩膜，以及在精度验证时具有明确基准的验潮记录。

论文采用的 AT01 GNSS 观测可由 PBO/EarthScope 数据库获取，参考水位来自 NOAA 9468333 验潮站。用户将软件应用于其他地点时，应在选择方位扇区前检查第一菲涅尔区；陆地、建筑物、海冰或岸线变化都可能形成与真实水位无关的谱峰。

- [GMR-Water 源代码、说明书与示例](https://github.com/GRseRG-CUMTB/GMR-Water)
- [发表于 _GPS Solutions_ 的论文](https://doi.org/10.1007/s10291-026-02111-y)

</div>

<h2 id="conclusions" data-toc-text="Conclusions" data-toc-text-en="Conclusions" data-toc-text-zh="结论"><span data-lang-en>Conclusions and current limitations</span><span data-lang-zh>结论与当前局限</span></h2>

<div data-lang-en markdown="1">

GMR-Water shows that one open workflow can process multiple constellations, frequencies, and observation types for coastal water-level retrieval. At AT01, SNR achieved sub-20-cm RMSE on all tested signals and provided the densest solutions. Multi-source combination improved temporal continuity and correlation. Carrier-phase combinations were feasible but less accurate and less dense, indicating that noise control, combination selection, and arc-level screening remain important development areas.

The AT01 experiment is a coastal demonstration rather than a universal performance guarantee. Accuracy at a new station depends on antenna height, reflector roughness, surrounding terrain, satellite visibility, tide-gauge distance, sea state, and the observation equipment. The software is intended to make these choices visible and repeatable rather than conceal them behind a single default model.

</div>

<div data-lang-zh markdown="1">

GMR-Water 表明，同一开源流程能够利用多系统、多频点和多类观测值进行近岸水位反演。AT01 实验中，全部受测 SNR 信号的 RMSE 均低于 20 cm，并提供最密集的解；多源组合提高了时间连续性与相关性。载波相位组合可以实现，但精度和密度均较低，说明噪声控制、组合选择与弧段级筛选仍是后续优化重点。

AT01 是海岸环境下的示范实验，并不代表所有测站都能获得相同性能。新测站精度取决于天线高度、反射面粗糙度、周边地形、卫星可见性、验潮站距离、海况和接收设备。软件的目标是让这些选择透明且可复现，而不是用单一默认模型掩盖差异。

</div>

<h2 id="publication" data-toc-text="Publication" data-toc-text-en="Publication" data-toc-text-zh="论文引文"><span data-lang-en>Publication</span><span data-lang-zh>论文引文</span></h2>

<div class="project-citation">
  Yang, F., &amp; Hao, R. (2026). <a href="https://doi.org/10.1007/s10291-026-02111-y">GMR-water: A water level retrieval software for multi-GNSS, multi-frequence and multi-observation based on GNSS-MR</a>. <em>GPS Solutions, 30</em>(3).
</div>

</div>

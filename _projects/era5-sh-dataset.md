---
layout: page
title: Tropospheric Scale-Height Research
title_zh: 对流层参数尺度高度研究
description: Regional water-vapor climatology, the global ERA5-SH dataset, and height-correction applications.
description_zh: 区域水汽尺度高度气候特征、全球 ERA5-SH 数据集及高程改正应用。
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

This project connects two studies of **tropospheric scale height**. The first uses radiosonde observations to explain the spatial and temporal behavior of water-vapor scale height in four Chinese climate zones. The second extends the same physical framework to six atmospheric parameters and produces ERA5-SH: an hourly, global, gridded dataset for atmospheric modeling, GNSS meteorology, and vertical correction.

</div>

<div class="project-lead" data-lang-zh markdown="1">

本项目整合了两项相互衔接的**对流层参数尺度高度研究**。第一项研究利用无线电探空资料，分析中国四类气候区水汽尺度高度的时空变化及其影响因素；第二项研究将相同的物理框架扩展到六类大气参数，形成逐小时、全球格网化的 ERA5-SH 数据集，为大气建模、GNSS 气象学与高程改正提供数据基础。

</div>

<h2 id="definition" data-toc-text="Scale height" data-toc-text-en="Scale height" data-toc-text-zh="尺度高度定义"><span data-lang-en>Scale height and research scope</span><span data-lang-zh>尺度高度与研究范围</span></h2>

<div data-lang-en markdown="1">

Scale height describes the vertical decay of an atmospheric parameter. If a parameter at reference height h<sub>s</sub> is p<sub>v,s</sub>, its vertical profile can be approximated by

</div>

<div data-lang-zh markdown="1">

尺度高度用于描述大气参数随高程衰减的速度。若参数在参考高程 h<sub>s</sub> 处的值为 p<sub>v,s</sub>，其垂直廓线可近似表示为

</div>

$$
p_v(h)=p_{v,s}\exp\left[-\frac{h-h_s}{SH}\right].
$$

<div data-lang-en markdown="1">

At one scale height above the reference level, the parameter falls to 1/e, or about 36.7% of its reference value. A single fitted coefficient therefore summarizes a full vertical profile and can be used to normalize observations between stations at different elevations.

</div>

<div data-lang-zh markdown="1">

当高程增加一个尺度高度时，参数衰减到参考值的 1/e，即约 36.7%。因此，一个拟合参数即可概括整条垂直廓线，并可用于不同高程测站之间的观测归算。

</div>

<h2 id="china-study" data-toc-text="China study" data-toc-text-en="China study" data-toc-text-zh="中国区域研究"><span data-lang-en>Study I · Water-vapor scale height over China</span><span data-lang-zh>研究一 · 中国区域水汽尺度高度</span></h2>

<h3 id="china-background" data-toc-text="Background and data" data-toc-text-en="Background and data" data-toc-text-zh="背景与数据"><span data-lang-en>Background, data, and climate zones</span><span data-lang-zh>研究背景、数据与气候分区</span></h3>

<div data-lang-en markdown="1">

Water vapor is concentrated in the lower troposphere and varies strongly with geography, circulation, temperature, and season. A constant empirical scale height is convenient in GNSS meteorology, but it cannot represent this variability. The regional study therefore used radiosonde profiles to answer four questions: how scale height varies across China, how it changes by month and observation time, whether trends and periodic signals are detectable, and which surface meteorological factors are most closely related to it.

The analysis used observations from **89 radiosonde stations** obtained from the University of Wyoming archive. Profiles cover **2016–2019**, normally at **00 and 12 UTC**, and extend from the surface to approximately 30 km. Stations were assigned to four climate regions: subtropical monsoon, temperate monsoon, temperate continental, and alpine plateau.

</div>

<div data-lang-zh markdown="1">

水汽主要集中在对流层低层，并受地理位置、大气环流、温度和季节显著影响。GNSS 气象处理中常采用固定经验尺度高度，但固定值无法表达真实的时空差异。因此，该研究利用探空廓线回答四个问题：尺度高度在中国如何分布、月际与日内如何变化、是否存在趋势与周期信号，以及哪些地面气象因素与其关系最密切。

研究采用美国怀俄明大学资料库的 **89 个无线电探空站**数据，时间为 **2016—2019 年**，通常包含 **00 UTC 与 12 UTC** 两个时次，廓线由地面延伸至约 30 km。全部测站划分为亚热带季风、温带季风、温带大陆性和高原山地四类气候区。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-climate-zones.jpg" title="Radiosonde stations and climate zones in China" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 1. Distribution of the 89 radiosonde stations and the four climate zones used in the regional analysis.</span><span data-lang-zh>图 1. 89 个无线电探空站及区域分析采用的四类气候分区。</span></p>
</div>

<h3 id="china-method" data-toc-text="Calculation" data-toc-text-en="Calculation" data-toc-text-zh="计算方法"><span data-lang-en>Water-vapor scale-height calculation</span><span data-lang-zh>水汽尺度高度计算</span></h3>

<div data-lang-en markdown="1">

The study assumes a negative-exponential water-vapor-density profile. Water-vapor scale height is obtained from the ratio between vertically integrated water vapor and surface water-vapor density. Surface vapor density is calculated from vapor pressure and temperature; vapor pressure is derived with the modified Magnus formula. PWV is calculated layer by layer from specific humidity and pressure:

</div>

<div data-lang-zh markdown="1">

研究假定水汽密度廓线服从负指数衰减，并利用垂直积分水汽与地面水汽密度之比求得尺度高度。地面水汽密度由水汽压与温度计算，水汽压采用修正 Magnus 公式获得；PWV 则根据各层比湿与气压逐层积分：

</div>

$$
SH_{WV}=\frac{PWV}{\rho_{v,s}}, \qquad
\rho_{v,s}=\frac{e_s}{R_vT_s}.
$$

<div data-lang-en markdown="1">

Only profiles passing completeness and physical-range checks were retained. Least-squares linear fitting was used for trends, the periodogram power spectral density was used to identify dominant periods, and annual plus semiannual trigonometric terms were fitted to quantify phase and amplitude. Correlations were calculated between scale height and PWV, surface temperature, pressure, and vapor pressure.

</div>

<div data-lang-zh markdown="1">

只有通过完整性与物理范围检查的廓线才进入分析。长期变化采用最小二乘线性拟合，主周期采用周期图功率谱密度识别，并通过年周期与半年周期三角函数拟合估计相位和振幅；同时计算尺度高度与 PWV、地面温度、气压及水汽压的相关性。

</div>

<h3 id="china-spatial" data-toc-text="Spatial pattern" data-toc-text-en="Spatial pattern" data-toc-text-zh="空间分布"><span data-lang-en>Spatial distribution</span><span data-lang-zh>空间分布特征</span></h3>

<div data-lang-en markdown="1">

Annual mean water-vapor scale height ranged from approximately **1.78 to 3.02 km**. Guilin reached the maximum value of 3.02 km, whereas Qingdao had the minimum value of 1.78 km. Higher values were concentrated mainly in the subtropical monsoon and temperate continental regions; lower values were common in the temperate monsoon and alpine plateau regions. The widely used constant value of 2.34 km therefore represents some regions better than others.

</div>

<div data-lang-zh markdown="1">

各站年平均水汽尺度高度约为 **1.78—3.02 km**。桂林达到最大值 3.02 km，青岛最低，为 1.78 km。较高值主要位于亚热带季风区和温带大陆性气候区，温带季风区及高原山地区相对较低。因此，常用的 2.34 km 固定值对不同区域的代表性并不一致。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-spatial.jpg" title="Annual mean water-vapor scale height across China" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 2. Spatial distribution of annual mean water-vapor scale height derived from the radiosonde profiles.</span><span data-lang-zh>图 2. 基于探空廓线计算的年平均水汽尺度高度空间分布。</span></p>
</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Climate zone          | Median (km) | Mean (km) | Maximum (km) | Minimum (km) | Stations above 2.34 km |
| --------------------- | ----------: | --------: | -----------: | -----------: | ---------------------: |
| Subtropical monsoon   |        2.45 |      2.45 |         2.62 |         1.84 |                  76.3% |
| Temperate monsoon     |        2.18 |      2.19 |         2.44 |         1.78 |                  15.8% |
| Temperate continental |        2.33 |      2.36 |         2.71 |         2.09 |                  50.0% |
| Alpine plateau        |        2.17 |      2.20 |         2.54 |         1.92 |                  18.2% |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 气候区     | 中位数 (km) | 平均值 (km) | 最大值 (km) | 最小值 (km) | 高于 2.34 km 的测站比例 |
| ---------- | ----------: | ----------: | ----------: | ----------: | ----------------------: |
| 亚热带季风 |        2.45 |        2.45 |        2.62 |        1.84 |                   76.3% |
| 温带季风   |        2.18 |        2.19 |        2.44 |        1.78 |                   15.8% |
| 温带大陆性 |        2.33 |        2.36 |        2.71 |        2.09 |                   50.0% |
| 高原山地   |        2.17 |        2.20 |        2.54 |        1.92 |                   18.2% |

</div>

<h3 id="china-temporal" data-toc-text="Temporal variation" data-toc-text-en="Temporal variation" data-toc-text-zh="时间变化"><span data-lang-en>Monthly, seasonal, and diurnal variation</span><span data-lang-zh>月际、季节与日内变化</span></h3>

<div data-lang-en markdown="1">

The national monthly mean rose from winter into summer, reached **2.42 km in July**, and decreased to **2.04 km in December**. The subtropical monsoon and temperate continental zones remained above 2 km throughout the year, while the alpine plateau showed the strongest warm-season increase. Seasonal national means were 2.34, 2.47, 2.27, and 2.28 km for spring, summer, autumn, and winter; the corresponding medians were 2.32, 2.50, 2.22, and 2.27 km.

</div>

<div data-lang-zh markdown="1">

全国月平均值由冬季向夏季升高，**7 月达到 2.42 km**，随后下降至 **12 月的 2.04 km**。亚热带季风区和温带大陆性气候区全年均高于 2 km，高原山地区的暖季增幅最明显。春、夏、秋、冬全国平均值分别为 2.34、2.47、2.27 和 2.28 km，中位数分别为 2.32、2.50、2.22 和 2.27 km。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-monthly.jpg" title="Monthly water-vapor scale height by climate zone" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 3. Monthly mean scale height for the four climate zones and the national station set.</span><span data-lang-zh>图 3. 四类气候区及全国测站的月平均尺度高度。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-seasonal.jpg" title="Seasonal water-vapor scale-height distributions" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 4. Seasonal distributions show the summer maximum and the distinct dispersion within each climate region.</span><span data-lang-zh>图 4. 季节分布显示全国夏季高值及不同气候区内部的离散差异。</span></p>
</div>

<div data-lang-en markdown="1">

At most stations, the 12 UTC value exceeded the 00 UTC value. The difference was especially clear in the temperate continental zone (2.37 versus 2.24 km) and alpine plateau zone (2.30 versus 2.08 km), reflecting daytime heating and boundary-layer development.

</div>

<div data-lang-zh markdown="1">

多数测站 12 UTC 的尺度高度高于 00 UTC。温带大陆性气候区分别为 2.37 与 2.24 km，高原山地区分别为 2.30 与 2.08 km，反映了日间增温及边界层发展的影响。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-diurnal.jpg" title="Comparison between 00 UTC and 12 UTC" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 5. Frequency distributions of scale height at 00 and 12 UTC for each climate zone.</span><span data-lang-zh>图 5. 各气候区 00 UTC 与 12 UTC 尺度高度的频率分布。</span></p>
</div>

<h3 id="china-trend" data-toc-text="Trends and cycles" data-toc-text-en="Trends and cycles" data-toc-text-zh="趋势与周期"><span data-lang-en>Trends, periodicity, and meteorological controls</span><span data-lang-zh>趋势、周期及气象影响因素</span></h3>

<div data-lang-en markdown="1">

Trend directions differed among regions. Decreasing trends occurred at 81.82% of alpine plateau stations and 71.05% of subtropical monsoon stations, whereas 57.89% of temperate monsoon stations increased. Shantou showed the largest decline (−10.4622 m yr⁻¹), Taiyuan the largest rise (+10.44782 m yr⁻¹), and the national station mean increased by **3.3820 m yr⁻¹**.

</div>

<div data-lang-zh markdown="1">

各区域的变化趋势并不一致。高原山地区 81.82% 的测站和亚热带季风区 71.05% 的测站呈下降趋势，而温带季风区 57.89% 的测站呈上升趋势。汕头下降最快，为 −10.4622 m/年；太原上升最快，为 +10.44782 m/年；全国测站平均变化率为 **+3.3820 m/年**。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-trends.jpg" title="Station trends in water-vapor scale height" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 6. Linear trends at individual stations and their regional distribution.</span><span data-lang-zh>图 6. 各测站线性变化率及其区域分布。</span></p>
</div>

<div data-lang-en markdown="1">

Periodograms identified both annual and semiannual signals. The fitted annual amplitude reached 0.18 km for the alpine plateau regional series but only 0.01 km for the temperate monsoon series. Semiannual amplitudes were 0.15 km in the temperate monsoon region and 0.12 km in the alpine plateau region. Across individual stations, the mean annual and semiannual amplitudes were about **0.20 and 0.09 km**. Kunming had the largest annual amplitude (0.51 km), Nanchang the smallest (0.03 km); Hailar had the largest semiannual amplitude (0.43 km), and Weining the smallest (0.01 km).

</div>

<div data-lang-zh markdown="1">

周期图表明年周期和半年周期均普遍存在。区域序列中，高原山地区的年周期振幅达到 0.18 km，而温带季风区仅为 0.01 km；温带季风区和高原山地区的半年周期振幅分别为 0.15 与 0.12 km。对单站而言，年周期与半年周期平均振幅约为 **0.20 和 0.09 km**。昆明年周期振幅最大（0.51 km），南昌最小（0.03 km）；海拉尔半年周期振幅最大（0.43 km），威宁最小（0.01 km）。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-psd.jpg" title="Power spectral density of regional scale-height series" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 7. Periodogram power spectra used to identify annual and semiannual components.</span><span data-lang-zh>图 7. 用于识别年周期和半年周期分量的周期图功率谱。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-cycle-fit.jpg" title="Annual and semiannual cycle fitting" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 8. Annual and semiannual harmonic fits for the four climate-zone series.</span><span data-lang-zh>图 8. 四类气候区序列的年周期与半年周期谐波拟合。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-periodicity.jpg" title="Annual and semiannual amplitudes at radiosonde stations" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 9. Spatial distribution of annual and semiannual amplitudes at the 89 stations.</span><span data-lang-zh>图 9. 89 个测站年周期与半年周期振幅的空间分布。</span></p>
</div>

<div data-lang-en markdown="1">

PWV, temperature, and surface pressure were generally positively correlated with water-vapor scale height, but their relative importance depended on climate. PWV gave the strongest regional mean correlation in the subtropical monsoon zone (r = 0.56); temperature and pressure both averaged r = 0.44 in the temperate monsoon zone; temperature was strongest in the temperate continental (r = 0.40) and alpine plateau (r = 0.56) zones. Vapor-pressure correlations were usually weaker, although several stations exceeded 0.8.

</div>

<div data-lang-zh markdown="1">

总体而言，PWV、温度和地面气压均与水汽尺度高度呈正相关，但不同气候区的主导因素不同。亚热带季风区以 PWV 的区域平均相关性最强（r = 0.56）；温带季风区温度与气压的平均相关系数均为 r = 0.44；温带大陆性与高原山地区则以温度最强，分别为 r = 0.40 和 r = 0.56。水汽压的整体相关性较弱，但部分测站仍超过 0.8。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/scale-height-china-correlations.jpg" title="Correlations between water-vapor scale height and meteorological variables" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 10. Station correlations with PWV, temperature, pressure, and vapor pressure.</span><span data-lang-zh>图 10. 尺度高度与 PWV、温度、气压和水汽压的测站相关性。</span></p>
</div>

<h2 id="era5-sh" data-toc-text="ERA5-SH dataset" data-toc-text-en="ERA5-SH dataset" data-toc-text-zh="ERA5-SH 数据集"><span data-lang-en>Study II · Global ERA5-SH dataset</span><span data-lang-zh>研究二 · 全球 ERA5-SH 数据集</span></h2>

<h3 id="era5-motivation" data-toc-text="Parameters and inputs" data-toc-text-en="Parameters and inputs" data-toc-text-zh="参数与输入"><span data-lang-en>Motivation, parameters, and source data</span><span data-lang-zh>研究动机、参数与源数据</span></h3>

<div data-lang-en markdown="1">

The troposphere contains roughly 75% of atmospheric mass and more than 90% of atmospheric water vapor. Its vertical structure determines how GNSS signals are delayed and how PWV, weighted mean temperature, and tomographic constraints should be transferred between elevations. ERA5-SH generalizes the regional work to six parameters with very different vertical behavior.

</div>

<div data-lang-zh markdown="1">

对流层约包含大气总质量的 75% 和 90% 以上的大气水汽。其垂直结构决定 GNSS 信号延迟，并影响 PWV、加权平均温度和层析约束在不同高程之间的归算。ERA5-SH 将区域研究扩展到六类具有不同垂直特征的参数。

</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Product | Unit | Physical meaning                                |
| ------- | ---- | ----------------------------------------------- |
| ZTDSH   | m    | Scale height of total zenith tropospheric delay |
| ZHDSH   | m    | Scale height of the dry-air (hydrostatic) delay |
| ZWDSH   | m    | Scale height of the water-vapor (wet) delay     |
| PWVSH   | km   | Scale height of precipitable water vapor        |
| WVSH    | km   | Scale height of water-vapor density             |
| TmSH    | km   | Scale height of weighted mean temperature       |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 产品  | 单位 | 物理含义                 |
| ----- | ---- | ------------------------ |
| ZTDSH | m    | 天顶对流层总延迟尺度高度 |
| ZHDSH | m    | 干空气静力延迟尺度高度   |
| ZWDSH | m    | 水汽湿延迟尺度高度       |
| PWVSH | km   | 大气可降水量尺度高度     |
| WVSH  | km   | 水汽密度尺度高度         |
| TmSH  | km   | 加权平均温度尺度高度     |

</div>

<div data-lang-en markdown="1">

ERA5 temperature, geopotential, relative humidity, and specific humidity were sampled on **37 pressure levels from 1000 to 1 hPa**. The released data cover **2013–2022**, at **1° × 1°** spatial and **1-hour** temporal resolution. Geopotential was converted to ellipsoidal height, surface meteorological values were interpolated or extrapolated to the true ground elevation, and numerical parameter profiles were then constructed.

</div>

<div data-lang-zh markdown="1">

研究采用 ERA5 在 **1000—1 hPa 共 37 个气压层**上的温度、位势、相对湿度和比湿。正式发布的数据覆盖 **2013—2022 年**，空间分辨率为 **1° × 1°**，时间分辨率为 **1 小时**。计算中先将位势转换为椭球高，再将地面气象值插值或外推到真实地表高程，随后构建各参数的数值廓线。

</div>

<h3 id="era5-production" data-toc-text="Production workflow" data-toc-text-en="Production workflow" data-toc-text-zh="生产流程"><span data-lang-en>Production, profile calculation, and fitting</span><span data-lang-zh>数据生产、廓线计算与拟合</span></h3>

<div class="project-figure project-figure--portrait">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-workflow.jpg" title="ERA5-SH production and validation workflow" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 11. ERA5-SH production and validation workflow. ERA5 and radiosonde profiles are processed independently before station-level comparison.</span><span data-lang-zh>图 11. ERA5-SH 生产与验证流程。ERA5 和探空廓线分别独立计算，随后在测站位置进行比较。</span></p>
</div>

<div data-lang-en markdown="1">

The six profile variables are calculated from temperature, pressure, humidity, and height. The main relationships include

</div>

<div data-lang-zh markdown="1">

六类参数廓线由温度、气压、湿度和高程共同计算，主要关系包括

</div>

$$
ZTD=ZHD+ZWD,
$$

$$
ZWD=\int\left(k'_2\frac{e}{T}+k_3\frac{e}{T^2}\right)dh,
\qquad
ZHD=\int k_1\frac{p-e}{T}\,dh,
$$

$$
WVD=\frac{e}{R_vT},
\qquad
q=\frac{0.622e}{p-0.378e},
\qquad
T_m=\frac{\int e/T\,dh}{\int e/T^2\,dh}.
$$

<div data-lang-en markdown="1">

PWV is obtained through pressure-layer integration of specific humidity. Each accumulated or instantaneous vertical profile is fitted with the negative-exponential model using the Levenberg–Marquardt algorithm. The resulting scale height is stored for every grid cell, hour, and parameter.

For radiosonde validation, 818 stations were initially collected for 2022. Quality control required a top valid height of at least 10 km, at least 20 valid levels, consecutive height spacing no greater than 2 km, and pressure gaps no greater than 200 hPa. **587 stations** remained after these checks. ERA5-SH values were bilinearly interpolated to each station and compared with scale heights calculated independently from the sounding profiles.

</div>

<div data-lang-zh markdown="1">

PWV 通过比湿在气压层上的逐层积分获得。各类累积或瞬时垂直廓线采用 Levenberg–Marquardt 算法进行负指数拟合，并将每个格点、每个小时、每类参数的尺度高度写入数据集。

探空验证最初收集 2022 年 818 个测站。质量控制要求有效廓线顶高不低于 10 km、有效层数不少于 20 层、相邻有效高程间距不超过 2 km、气压间隔不超过 200 hPa。最终保留 **587 个测站**。ERA5-SH 通过双线性插值归算到站点位置，并与由探空廓线独立计算的尺度高度比较。

</div>

<h3 id="era5-validation" data-toc-text="Fit and validation" data-toc-text-en="Fit and validation" data-toc-text-zh="拟合与验证"><span data-lang-en>Profile fitting and radiosonde validation</span><span data-lang-zh>廓线拟合与探空验证</span></h3>

<div data-lang-en markdown="1">

The mean profile-fitting coefficients of determination for PWVSH, WVSH, TmSH, ZTDSH, ZHDSH, and ZWDSH were **0.991, 0.957, 0.980, 0.999, 0.999, and 0.995**, respectively. The consistently high values show that the exponential model summarizes the ERA5 vertical profiles well, although water-vapor-density profiles are more variable than delay profiles.

</div>

<div data-lang-zh markdown="1">

PWVSH、WVSH、TmSH、ZTDSH、ZHDSH 和 ZWDSH 的平均廓线拟合决定系数分别为 **0.991、0.957、0.980、0.999、0.999 和 0.995**。结果表明指数模型能够很好地概括 ERA5 垂直廓线，其中水汽密度廓线相较延迟廓线具有更强的变化性。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-r2-map.jpg" title="Global profile-fitting coefficients of determination" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 12. Global mean coefficient of determination for exponential fitting of the six parameter profiles.</span><span data-lang-zh>图 12. 六类参数指数廓线拟合决定系数的全球平均分布。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-r2-distribution.jpg" title="Distributions of profile-fitting coefficients" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 13. Box plots and frequency distributions of the fitting coefficients.</span><span data-lang-zh>图 13. 六类参数拟合决定系数的箱线图与频率分布。</span></p>
</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Product | RMSE: mean (min, max) | RRMSE %: mean (min, max) | Bias: mean (min, max)  | Correlation: mean (min, max) |
| ------- | --------------------- | ------------------------ | ---------------------- | ---------------------------- |
| PWVSH   | 0.243 (0.122, 0.719)  | 13.194 (5.992, 42.763)   | 0.185 (−0.130, 0.456)  | 0.919 (0.016, 0.985)         |
| WVSH    | 0.189 (0.153, 0.232)  | 6.941 (5.575, 8.649)     | 0.068 (−0.044, 0.172)  | 0.765 (0.542, 0.865)         |
| TmSH    | 3.290 (1.801, 7.379)  | 6.280 (3.095, 16.372)    | −0.599 (−4.036, 4.957) | 0.880 (0.742, 0.958)         |
| ZTDSH   | 0.879 (0.172, 2.838)  | 15.396 (2.426, 64.457)   | 0.843 (0.163, 2.835)   | 0.561 (−0.462, 0.878)        |
| ZHDSH   | 0.681 (0.208, 1.983)  | 10.156 (2.951, 35.351)   | 0.644 (0.196, 1.969)   | 0.509 (−0.487, 0.938)        |
| ZWDSH   | 0.263 (0.134, 0.748)  | 13.849 (6.677, 43.291)   | 0.204 (−0.132, 0.480)  | 0.918 (0.019, 0.985)         |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 产品  | RMSE：平均值（最小，最大） | RRMSE %：平均值（最小，最大） | Bias：平均值（最小，最大） | 相关系数：平均值（最小，最大） |
| ----- | -------------------------- | ----------------------------- | -------------------------- | ------------------------------ |
| PWVSH | 0.243 (0.122, 0.719)       | 13.194 (5.992, 42.763)        | 0.185 (−0.130, 0.456)      | 0.919 (0.016, 0.985)           |
| WVSH  | 0.189 (0.153, 0.232)       | 6.941 (5.575, 8.649)          | 0.068 (−0.044, 0.172)      | 0.765 (0.542, 0.865)           |
| TmSH  | 3.290 (1.801, 7.379)       | 6.280 (3.095, 16.372)         | −0.599 (−4.036, 4.957)     | 0.880 (0.742, 0.958)           |
| ZTDSH | 0.879 (0.172, 2.838)       | 15.396 (2.426, 64.457)        | 0.843 (0.163, 2.835)       | 0.561 (−0.462, 0.878)          |
| ZHDSH | 0.681 (0.208, 1.983)       | 10.156 (2.951, 35.351)        | 0.644 (0.196, 1.969)       | 0.509 (−0.487, 0.938)          |
| ZWDSH | 0.263 (0.134, 0.748)       | 13.849 (6.677, 43.291)        | 0.204 (−0.132, 0.480)      | 0.918 (0.019, 0.985)           |

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-validation.jpg" title="Global radiosonde validation of ERA5-SH" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 14. Station-level RMSE of the six ERA5-SH products against radiosonde-derived scale heights.</span><span data-lang-zh>图 14. 六类 ERA5-SH 产品相对于探空尺度高度的测站 RMSE。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-station-validation.jpg" title="ERA5-SH validation at representative radiosonde stations" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 15. Time-series comparison at representative stations, illustrating parameter-dependent accuracy and seasonal behavior.</span><span data-lang-zh>图 15. 代表性测站的时间序列比较，展示不同参数的精度与季节行为。</span></p>
</div>

<h3 id="era5-characteristics" data-toc-text="Dataset characteristics" data-toc-text-en="Dataset characteristics" data-toc-text-zh="数据特征"><span data-lang-en>Spatial and temporal characteristics</span><span data-lang-zh>空间与时间特征</span></h3>

<div data-lang-en markdown="1">

Instantaneous maps retain synoptic structures that would be lost in monthly climatologies. Water-vapor-related scale heights reveal vortex and frontal patterns, ZHDSH is comparatively stable, and ZTDSH combines dry- and wet-atmosphere effects. Long-term means are generally smaller along sharp land–sea transitions and at high elevations, including the Tibetan Plateau and Antarctica, and larger in humid equatorial regions.

</div>

<div data-lang-zh markdown="1">

逐小时瞬时图能够保留月平均气候图中容易被平滑掉的天气尺度结构。水汽相关尺度高度可呈现涡旋和锋面特征，ZHDSH 相对稳定，而 ZTDSH 同时受干、湿大气影响。长期平均结果在显著海陆边界和高海拔区域（如青藏高原与南极洲）通常较低，在湿润赤道区域较高。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-instant-map.jpg" title="Instantaneous global ERA5-SH fields" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 16. Global distribution of the six products at 00 UTC on 1 January 2013.</span><span data-lang-zh>图 16. 2013 年 1 月 1 日 00 UTC 六类尺度高度产品的全球分布。</span></p>
</div>

<div data-lang-en markdown="1">

Latitude-band analysis shows opposite seasonal phases between the Northern and Southern Hemispheres. For example, the R3 band reached August means of 2.20 km for PWVSH and 2.29 km for ZWDSH, whereas the corresponding R4 August minima were 1.59 and 1.65 km. At 120°E, 30°N, water-vapor-related products varied roughly from 0.8 to 4 km around a mean near 2 km; ZTD- and ZHD-related scale heights were commonly 7–8 km, while TmSH ranged from about 38 to 80 km.

</div>

<div data-lang-zh markdown="1">

纬度带分析显示南北半球的季节位相相反。例如，R3 区 8 月 PWVSH 和 ZWDSH 平均值分别达到 2.20 与 2.29 km，而 R4 区同期最低值分别为 1.59 与 1.65 km。在 120°E、30°N，水汽相关尺度高度约在 0.8—4 km 之间变化，平均接近 2 km；ZTD 与 ZHD 相关尺度高度通常为 7—8 km，TmSH 则约为 38—80 km。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-latitude-seasonality.jpg" title="Seasonality of ERA5-SH by latitude band" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 17. Monthly variation in six latitude regions, showing reversed seasonal phases between hemispheres.</span><span data-lang-zh>图 17. 六个纬度区的月际变化及南北半球相反的季节位相。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-climatology.jpg" title="Global climatology of ERA5-SH" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 18. Multi-year mean fields of the six products.</span><span data-lang-zh>图 18. 六类产品的多年平均空间分布。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-timeseries.jpg" title="ERA5-SH time series at a representative grid cell" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 19. Hourly scale-height series at 120°E, 30°N, showing the very different ranges of the six parameters.</span><span data-lang-zh>图 19. 120°E、30°N 格点的逐小时尺度高度序列，展示六类参数不同的数值范围。</span></p>
</div>

<h3 id="era5-application" data-toc-text="GNSS application" data-toc-text-en="GNSS application" data-toc-text-zh="GNSS 应用"><span data-lang-en>ZTD height correction at global GNSS stations</span><span data-lang-zh>全球 GNSS 测站 ZTD 高程改正</span></h3>

<div data-lang-en markdown="1">

The application experiment screened **91,088,258** ZTD estimates from **12,552 GNSS stations** in the KIT tropospheric product. Direct spatial interpolation without an elevation correction produced a mean RMSE of **50.27 mm**. Applying ERA5-derived ZTDSH to normalize the observations reduced the mean RMSE to **18.40 mm**. Improvements were largest across coastlines and strong relief; in some regions the reduction exceeded 90%, and corrected RMSE was below 5 cm. Stations above 400 m generally benefited more than low-elevation sites.

</div>

<div data-lang-zh markdown="1">

应用实验从 KIT 对流层产品中筛选了 **12,552 个 GNSS 测站的 91,088,258 个 ZTD 估值**。不进行高程改正而直接空间插值时，平均 RMSE 为 **50.27 mm**；利用 ERA5 的 ZTDSH 归算后，平均 RMSE 降至 **18.40 mm**。改进在海陆交界和地形起伏强烈地区最明显，部分区域降幅超过 90%，改正后 RMSE 低于 5 cm；海拔高于 400 m 的测站通常比低海拔测站获益更大。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-ztd-application.jpg" title="ZTD interpolation before and after scale-height correction" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 20. Global ZTD interpolation error before and after applying ERA5-derived ZTDSH correction.</span><span data-lang-zh>图 20. 应用 ERA5 ZTDSH 改正前后的全球 ZTD 插值误差。</span></p>
</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/era5-sh-altitude-impact.jpg" title="Influence of station altitude on ZTD interpolation" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 21. RMSE and bias as functions of station elevation, demonstrating the value of explicit height correction.</span><span data-lang-zh>图 21. RMSE 与 Bias 随测站高程的变化，显示显式高程改正的作用。</span></p>
</div>

<h3 id="era5-technical" data-toc-text="Technical details" data-toc-text-en="Technical details" data-toc-text-zh="技术细节"><span data-lang-en>Height conversion, surface correction, and periodic model</span><span data-lang-zh>高程转换、地表改正与周期模型</span></h3>

<div data-lang-en markdown="1">

Three technical steps are important for reproducibility:

1. **Height system:** ERA5 geopotential is converted first to geopotential height and then to orthometric/geometric height with latitude-dependent gravity and Earth-radius terms; EGM2008 geoid undulation is added to obtain ellipsoidal height.
2. **Surface meteorology:** temperature and relative humidity are linearly interpolated or extrapolated to the actual surface. Pressure uses exponential vertical interpolation with virtual temperature T<sub>v</sub> = T(1 + 0.6077q).
3. **Seasonal analysis:** annual and semiannual cycles are represented by

</div>

<div data-lang-zh markdown="1">

为保证结果可复现，计算中包含三个关键技术步骤：

1. **高程系统：** ERA5 位势先转换为位势高，再结合随纬度变化的重力与地球半径项得到正高/几何高，最后叠加 EGM2008 大地水准面起伏得到椭球高。
2. **地表气象改正：** 温度与相对湿度线性插值或外推至真实地表；气压使用含虚温 T<sub>v</sub> = T(1 + 0.6077q) 的指数垂直插值。
3. **周期分析：** 年周期与半年周期表示为

</div>

$$
SH=a_0+a_1\cos\frac{2\pi d}{365.25}+a_2\sin\frac{2\pi d}{365.25}
+a_3\cos\frac{4\pi d}{365.25}+a_4\sin\frac{4\pi d}{365.25},
$$

<div data-lang-en markdown="1">

where d is day of year. This representation separates the climatological mean, annual component, and semiannual component without discarding the original hourly product.

</div>

<div data-lang-zh markdown="1">

其中 d 为年积日。该模型在保留原始逐小时产品的同时，可分离气候平均项、年周期项和半年周期项。

</div>

<h2 id="data-code" data-toc-text="Data and code" data-toc-text-en="Data and code" data-toc-text-zh="数据与代码"><span data-lang-en>Data records and reproducible code</span><span data-lang-zh>数据记录与可复现代码</span></h2>

<div data-lang-en markdown="1">

The released annual MATLAB files store compressed `int16` arrays together with `Scale`, `Offset`, `Data`, and `Max_error` metadata. The archive is split into two permanent Zenodo records, while the GitHub repository contains the profile calculations, exponential fitting, radiosonde processing, spatial interpolation, and analysis scripts.

- [Zenodo: ZTDSH, ZHDSH, and ZWDSH](https://doi.org/10.5281/zenodo.14676025)
- [Zenodo: PWVSH, WVSH, and TmSH](https://doi.org/10.5281/zenodo.14679394)
- [ERA5-SH calculation and analysis code](https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis)

</div>

<div data-lang-zh markdown="1">

正式发布的年度 MATLAB 文件以压缩 `int16` 数组保存，并包含 `Scale`、`Offset`、`Data` 和 `Max_error` 元数据。数据按参数拆分为两个永久 Zenodo 记录；GitHub 仓库则提供廓线计算、指数拟合、探空处理、空间插值和分析代码。

- [Zenodo：ZTDSH、ZHDSH 与 ZWDSH](https://doi.org/10.5281/zenodo.14676025)
- [Zenodo：PWVSH、WVSH 与 TmSH](https://doi.org/10.5281/zenodo.14679394)
- [ERA5-SH 计算与分析代码](https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis)

</div>

<h2 id="publications" data-toc-text="Publications" data-toc-text-en="Publications" data-toc-text-zh="相关论文"><span data-lang-en>Publications</span><span data-lang-zh>相关论文</span></h2>

<div class="project-citation">
  Hao, R., Xu, T., Li, Z., Yang, F., Hao, Z., Tan, J., Gao, Y., &amp; Shu, Z. (2024). <a href="https://doi.org/10.1016/j.asr.2024.05.019">Spatial-temporal variation of water vapor scale height and its impact factors in different climate zones of China</a>. <em>Advances in Space Research, 74</em>(4), 1576–1585.
</div>

<div class="project-citation">
  Hao, R., Yang, F., Li, Z., Zhang, Y., Zhou, L., &amp; Wang, L. (2025). <a href="https://doi.org/10.1038/s41597-025-04714-5">ERA5-SH: A global grided scale height dataset for tropospheric parameters based on ERA5 reanalysis</a>. <em>Scientific Data, 12</em>, 381.
</div>

</div>

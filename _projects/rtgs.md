---
layout: page
title: RTGS
title_zh: RTGS 实时 GNSS 综合处理平台
description: Real-Time GNSS Studio for acquisition, monitoring, positioning, reflectometry, and standards-oriented data conversion.
description_zh: 面向数据采集、质量监测、定位解算、反射测量与标准化数据转换的实时 GNSS 综合处理平台。
img: assets/img/projects/project-rtgs.png
importance: 3
category: software
featured: true
github: https://github.com/HaoRuixian/RTGS
toc:
  sidebar: left
---

<div class="research-project">

<div class="project-lead" data-lang-en markdown="1">

**RTGS (Real-Time GNSS Studio)** is a Python desktop workbench that brings GNSS stream acquisition, signal-quality monitoring, positioning, reflectometry, recording, and data conversion into one application. A PySide6 interface coordinates reusable processing modules for NTRIP, serial receivers, RINEX replay, RTCM decoding, multi-GNSS analysis, live visualization, and standards-oriented export.

</div>

<div class="project-lead" data-lang-zh markdown="1">

**RTGS（Real-Time GNSS Studio）** 是一套 Python 桌面工作平台，将 GNSS 数据流采集、信号质量监测、定位解算、反射测量、数据记录与格式转换集成到同一应用中。PySide6 图形界面负责组织 NTRIP、串口接收机、RINEX 回放、RTCM 解码、多系统 GNSS 分析、实时可视化与标准化数据输出等可复用处理模块。

</div>

<h2 id="objective" data-toc-text="Project objective" data-toc-text-en="Project objective" data-toc-text-zh="项目目标"><span data-lang-en>Why RTGS was developed</span><span data-lang-zh>为什么开发 RTGS</span></h2>

<div data-lang-en markdown="1">

Real-time GNSS experiments usually require several disconnected tools: one program connects to a caster or receiver, another decodes RTCM, another writes RINEX, and separate scripts perform positioning or environmental analysis. This fragmentation makes it difficult to inspect the complete data path, compare live and replay results, and reproduce a station configuration.

RTGS was developed as a common engineering layer for these tasks. The same observation stream can be inspected in the monitoring dashboard, recorded for later analysis, supplied to a positioning engine, or forwarded to a GNSS-reflectometry workflow. Offline RINEX replay uses the same visual and processing interfaces, which makes recorded experiments easier to review without rebuilding a separate pipeline.

</div>

<div data-lang-zh markdown="1">

实时 GNSS 实验通常依赖多套彼此分离的工具：一个程序连接差分数据源或接收机，另一个程序解析 RTCM，其他工具负责写入 RINEX，而定位解算和环境反演又由独立脚本完成。这样的工作方式不利于检查完整数据链路，也增加了实时结果与回放结果比较、测站配置复现和故障定位的难度。

RTGS 旨在为这些任务提供统一的工程层。同一观测数据流可以在质量监测界面中检查、记录为文件、输入定位引擎，或传递给 GNSS 反射测量流程。离线 RINEX 回放沿用相同的可视化与处理接口，因此无需重新搭建另一套流程即可复查已记录的实验。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="eager" path="assets/img/projects/rtgs-launch.png" title="RTGS workbench launcher" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 1. The launcher provides a common entry point for signal-quality monitoring, precise positioning, GNSS reflectometry, and the planned refractometry workspace.</span><span data-lang-zh>图 1. 启动器为信号质量监测、高精度定位、GNSS 反射测量以及规划中的折射测量工作台提供统一入口。</span></p>
</div>

<h2 id="status" data-toc-text="Module status" data-toc-text-en="Module status" data-toc-text-zh="模块状态"><span data-lang-en>Current module status</span><span data-lang-zh>当前模块状态</span></h2>

<div data-lang-en markdown="1">

The repository clearly separates delivered functions from modules that remain under validation or are still planned.

</div>

<div data-lang-zh markdown="1">

仓库明确区分了已经完成的功能、仍在验证中的模块和规划中的功能，避免将研究原型描述为已经成熟的业务产品。

</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Module                    | Repository status | What is currently implemented                                                                                                          |
| ------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Signal-quality monitoring | Completed         | Live/replay input, skyplot, satellite-count and SNR trends, observation tables, stream state, diagnostics, and recording               |
| RTCM batch conversion     | Completed         | Folder conversion with constellation/observation filters, sampling control, UTC splitting, metadata, and parallel file processing      |
| Precise positioning       | In progress       | Multi-GNSS SPP and PPP, single-base and network RTK, stream/solver configuration, maps, DOP, atmosphere, offsets, and solution history |
| GNSS reflectometry        | In progress       | Real-time and RINEX-batch arc processing, spectral height estimation, quality control, product conversion, and EKF processing          |
| GNSS refractometry        | Planned           | Placeholder for future troposphere, water-vapor, ionosphere, and gradient products                                                     |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 模块          | 仓库状态 | 当前实现                                                                                        |
| ------------- | -------- | ----------------------------------------------------------------------------------------------- |
| 信号质量监测  | 已完成   | 实时/回放输入、天空图、卫星数量与 SNR 变化、观测值表格、数据流状态、运行诊断和数据记录          |
| RTCM 批量转换 | 已完成   | 文件夹批量转换、系统/观测类型筛选、采样控制、UTC 分段、元数据设置和多文件并行处理               |
| 高精度定位    | 开发中   | 多系统 SPP 与 PPP、单基站和网络 RTK、数据流/解算器配置、地图、DOP、大气参数、位置偏差和解算历史 |
| GNSS 反射测量 | 开发中   | 实时与 RINEX 批处理弧段构建、频谱反射高度估计、质量控制、环境产品转换和 EKF 处理                |
| GNSS 折射测量 | 规划中   | 为未来对流层、水汽、电离层和梯度产品预留的工作台                                                |

</div>

<h2 id="monitoring" data-toc-text="Monitoring" data-toc-text-en="Monitoring" data-toc-text-zh="质量监测"><span data-lang-en>Real-time acquisition and signal-quality monitoring</span><span data-lang-zh>实时采集与信号质量监测</span></h2>

<div data-lang-en markdown="1">

The completed monitoring workbench accepts three primary observation sources:

- **NTRIP server:** connect to a caster with host, port, mountpoint, and credentials.
- **Serial receiver:** configure port, baud rate, data bits, stop bits, parity, and flow control for direct hardware acquisition.
- **RINEX observation file:** replay a recorded session at a configurable speed for inspection and algorithm testing.

The observation stream (OBS) is the primary input. Separate broadcast-ephemeris (EPH) and state-space-representation (SSR) streams are optional. Their status is shown independently so that a connected socket is not confused with the successful reception of valid navigation or correction messages.

The interface combines a live skyplot, satellite-count history, multi-signal SNR overview, detailed pseudorange/carrier/Doppler/SNR tables, constellation filters, and a runtime log. GPS, GLONASS, Galileo, BeiDou, QZSS, SBAS, and NavIC/IRNSS can be inspected selectively when the corresponding messages are present. At high RINEX replay speeds, display updates are throttled so that visualization does not unnecessarily block decoding and processing.

</div>

<div data-lang-zh markdown="1">

已经完成的质量监测工作台支持三类主要观测数据源：

- **NTRIP 服务：** 通过主机、端口、挂载点和账号信息连接差分数据源。
- **串口接收机：** 配置串口、波特率、数据位、停止位、校验和流控制，直接采集硬件输出。
- **RINEX 观测文件：** 按可配置速度回放已有观测，用于实验复查和算法测试。

观测流（OBS）是主要输入；广播星历（EPH）和状态空间改正（SSR）可以作为独立的可选数据流。界面分别显示各数据流的状态，避免将“连接已经建立”误认为“已经收到可用的星历或改正信息”。

监测界面集成实时天空图、卫星数量历史、多信号 SNR 总览、伪距/载波相位/多普勒/SNR 详细表格、卫星系统筛选和运行日志。当数据中包含相应消息时，可分别查看 GPS、GLONASS、Galileo、BDS、QZSS、SBAS 和 NavIC/IRNSS。高倍速 RINEX 回放时，界面会降低刷新频率，避免可视化阻塞解码和处理流程。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/project-rtgs.png" title="RTGS signal-quality monitoring workbench" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 2. The monitoring workbench combines stream state, satellite geometry, multi-signal SNR/CNR trends, observation tables, recording controls, and runtime diagnostics.</span><span data-lang-zh>图 2. 质量监测工作台统一显示数据流状态、卫星几何、多信号 SNR/CNR 变化、观测值表格、记录控制和运行诊断信息。</span></p>
</div>

<h3 id="recording" data-toc-text="Recording and export" data-toc-text-en="Recording and export" data-toc-text-zh="记录与输出"><span data-lang-en>Recording and standards-oriented output</span><span data-lang-zh>数据记录与标准化输出</span></h3>

<div data-lang-en markdown="1">

Recording is part of the live workflow rather than a separate afterthought. A user selects the output directory, rotation interval, sampling interval, and format before starting a session. Depending on the available source messages, RTGS can write CSV fields, raw binary RTCM, RINEX observation files, RINEX navigation files, and SP3-style precise output. Station ID, country code, data type, receiver/antenna metadata, and naming fields can be configured for RINEX generation.

This design preserves both diagnostic and scientific use cases: raw streams can be retained for decoder regression, standardized RINEX supports independent GNSS software, and filtered CSV output allows rapid quality assessment.

</div>

<div data-lang-zh markdown="1">

数据记录被纳入实时工作流，而不是作为独立的事后步骤。开始记录前，可设置输出目录、文件轮换时间、采样间隔和格式。根据数据源中实际包含的消息，RTGS 可以输出 CSV 字段、原始二进制 RTCM、RINEX 观测文件、RINEX 导航文件以及 SP3 风格精密产品；RINEX 生成还可配置测站代码、国家代码、数据类型、接收机/天线元数据与命名字段。

这种设计同时服务于诊断和科研：保留原始数据流便于解码器回归测试，标准 RINEX 可以交由其他 GNSS 软件独立处理，筛选后的 CSV 则适合快速开展质量评估。

</div>

<h2 id="positioning" data-toc-text="Positioning" data-toc-text-en="Positioning" data-toc-text-zh="定位解算"><span data-lang-en>SPP, PPP, and RTK positioning workbench</span><span data-lang-zh>SPP、PPP 与 RTK 定位工作台</span></h2>

<div data-lang-en markdown="1">

The positioning module uses the same live streams or RINEX replay mechanism as monitoring, but adds mode-specific solver settings and result diagnostics.

</div>

<div data-lang-zh markdown="1">

定位模块复用质量监测中的实时数据流和 RINEX 回放机制，并在此基础上增加不同定位模式的解算配置和结果诊断。

</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Mode | Main input                                                                             | Processing role                                                                                                                                                            |
| ---- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SPP  | OBS with usable broadcast ephemeris                                                    | Multi-GNSS code positioning with configurable constellation selection, elevation mask, atmospheric models, weighting, smoothing, PDOP, satellite-count, and quality limits |
| PPP  | Dual-frequency code/phase observations, ephemeris, and optional/required SSR by policy | Stateful ionosphere-free or uncombined filtering, physical corrections, troposphere estimation, SSR orbit/clock/bias handling, and ambiguity validation                    |
| RTK  | Rover OBS plus a base or network correction stream                                     | Native `rtkrcv` integration for single-base or VRS/FKP/MAC network RTK with FIX/FLOAT state, correction age, ambiguity ratio, and GGA policy                               |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 模式 | 主要输入                                          | 处理功能                                                                                                    |
| ---- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SPP  | OBS 与可用广播星历                                | 多系统伪距定位，可配置卫星系统、高度角、对流层/电离层模型、权重、平滑、PDOP、卫星数量和质量阈值             |
| PPP  | 双频码/相位观测、星历，以及按策略选用或要求的 SSR | 有状态的无电离层组合或非组合滤波、精密物理改正、对流层估计、SSR 轨道/钟差/偏差处理和模糊度检验              |
| RTK  | 流动站 OBS 与基准站或网络改正流                   | 调用原生 `rtkrcv` 完成单基站或 VRS/FKP/MAC 网络 RTK，并显示 FIX/FLOAT 状态、改正龄期、模糊度比值和 GGA 策略 |

</div>

<div data-lang-en markdown="1">

The positioning dashboard provides a map or coordinate track, HDOP/VDOP/PDOP/GDOP histories, PPP atmosphere estimates, current-solution details, offsets from a reference or first valid solution, a chronological solution table, and solver logs. Latitude/longitude/height and ECEF XYZ display modes are available.

PPP can use antenna phase-center and ocean-loading models when compatible ANTEX and BLQ data are configured. Ambiguities are not forced to integers: the solution remains float when compatible phase biases or validation thresholds are unavailable. RTK additionally requires a working `rtkrcv` executable and valid rover/base formats. The repository documentation therefore labels positioning as under active validation; status badges alone should not be treated as a surveying accuracy guarantee.

</div>

<div data-lang-zh markdown="1">

定位工作台提供地图或坐标轨迹、HDOP/VDOP/PDOP/GDOP 历史、PPP 大气参数、当前解算详情、相对于参考坐标或首个有效解的位置偏差、时间顺序解算表和解算日志，并支持纬度/经度/高程与 ECEF XYZ 两种显示方式。

在配置兼容的 ANTEX 和 BLQ 数据后，PPP 可以使用天线相位中心与海潮负荷模型。系统不会强制固定模糊度：当缺少兼容的相位偏差或未通过质量阈值时，结果保持浮点解。RTK 还需要可正常运行的 `rtkrcv` 程序以及正确的流动站/基准站数据格式。因此，仓库文档将定位模块标记为“正在验证”；不能仅凭状态标志将结果视为测量精度保证。

</div>

<div class="project-figure project-figure--wide">
  {% include figure.liquid loading="lazy" path="assets/img/projects/rtgs-positioning-overview.png" title="RTGS precise-positioning workbench" class="img-fluid" %}
  <p class="project-caption"><span data-lang-en>Figure 3. The positioning workspace presents the trajectory, dilution-of-precision histories, solution state, constellation use, processing time, and coordinate errors in one diagnostic view.</span><span data-lang-zh>图 3. 定位工作台在同一诊断界面中呈现运动轨迹、精度因子历史、解算状态、卫星系统使用情况、处理时间和坐标误差。</span></p>
</div>

<h2 id="reflectometry" data-toc-text="Reflectometry" data-toc-text-en="Reflectometry" data-toc-text-zh="反射测量"><span data-lang-en>Integrated GNSS reflectometry development</span><span data-lang-zh>集成式 GNSS 反射测量开发</span></h2>

<div data-lang-en markdown="1">

The GNSS-reflectometry module extends RTGS from conventional receiver monitoring into environmental sensing. Its current source tree contains both real-time and RINEX-batch processing paths. The processing services are separated into observation providers, geometry resolution, arc construction, SNR preprocessing, Lomb–Scargle spectrum analysis, reflection-height estimation, quality control, product conversion, and output management.

Configuration files define receiver position, enabled systems and signals, azimuth/elevation reflection zones, arc length and gap limits, detrending, spectrum search ranges, peak-selection rules, quality thresholds, reflector reference height, and output products. The implementation includes strategies for reflector height, sea level, and snow depth, together with robust dynamic sea-level fitting and an extended Kalman filter processing path.

This module is still marked **in progress**. Its presence in the interface and test suite shows an integrated research architecture, but it should be evaluated against station geometry, reference observations, and experiment-specific quality criteria before operational use.

</div>

<div data-lang-zh markdown="1">

GNSS 反射测量模块将 RTGS 从常规接收机监测扩展到环境感知。当前源码同时包含实时处理和 RINEX 批处理路径；处理服务被拆分为观测数据提供、几何计算、弧段构建、SNR 预处理、Lomb–Scargle 频谱分析、反射高度估计、质量控制、环境产品转换和结果输出。

配置文件可定义接收机位置、启用的卫星系统与信号、方位角/高度角反射区域、弧段长度与中断阈值、去趋势方式、频谱搜索范围、峰值选择规则、质量阈值、反射面参考高度和输出产品。源码中已经包含反射高度、海面高度和雪深产品策略，并实现稳健动态海面拟合和扩展卡尔曼滤波处理路径。

该模块目前仍被标记为**开发中**。它已经进入统一界面和测试体系，说明平台形成了完整的研究架构；但用于业务运行之前，仍需结合具体测站几何、参考观测和实验质量标准进行验证。

</div>

<h2 id="conversion" data-toc-text="Data conversion" data-toc-text-en="Data conversion" data-toc-text-zh="数据转换"><span data-lang-en>RTCM/receiver-data conversion and RINEX utilities</span><span data-lang-zh>RTCM/接收机数据转换与 RINEX 工具</span></h2>

<div data-lang-en markdown="1">

RTGS includes an independent graphical batch converter launched with `rtcm_batch_gui.py`. It scans a folder for RTCM or supported Unicore raw files and converts multiple files without opening the full workbench. Users can:

- include or exclude GPS, GLONASS, Galileo, BeiDou, QZSS, SBAS, and NavIC;
- select pseudorange (C), carrier phase (L), Doppler (D), and signal strength (S) independently;
- set an output sampling interval and split files on UTC boundaries;
- enter station, receiver, antenna, approximate-coordinate, and reference-date metadata;
- process several input files in parallel and protect existing output names unless overwrite is explicitly enabled.

The repository also contains command-line utilities for single-file RTCM-to-RINEX conversion and for splitting, merging, and resampling RINEX files. Missing measurements are not synthesized; for example, a Doppler field remains blank when the source stream does not provide Doppler.

</div>

<div data-lang-zh markdown="1">

RTGS 提供可通过 `rtcm_batch_gui.py` 独立启动的图形化批量转换器。它能够扫描文件夹中的 RTCM 或支持的和芯星通原始文件，并在不打开完整工作台的情况下批量转换。用户可以：

- 独立选择 GPS、GLONASS、Galileo、BDS、QZSS、SBAS 和 NavIC；
- 分别选择伪距（C）、载波相位（L）、多普勒（D）和信号强度（S）；
- 设置输出采样间隔，并按 UTC 时间边界分割文件；
- 填写测站、接收机、天线、概略坐标和参考日期元数据；
- 并行处理多个输入文件，且默认避免覆盖已有输出文件。

仓库还包含单文件 RTCM 转 RINEX，以及 RINEX 分割、合并和重采样命令行工具。转换不会虚构原始数据中不存在的观测值；例如，当数据源没有提供多普勒时，对应 RINEX 字段保持为空。

</div>

<h2 id="architecture" data-toc-text="Architecture" data-toc-text-en="Architecture" data-toc-text-zh="软件架构"><span data-lang-en>Software architecture and data flow</span><span data-lang-zh>软件架构与数据流</span></h2>

<div data-lang-en markdown="1">

The repository follows a separation between interface orchestration and reusable GNSS processing:

1. **Acquisition:** NTRIP clients, serial clients, and RINEX loaders provide live or replay observations. Optional EPH, SSR, and RTK correction streams are configured separately.
2. **Decode and normalize:** RTCM/receiver-specific handlers convert raw messages into shared epoch, satellite, signal, ephemeris, and correction data models.
3. **Store and schedule:** data stores and ring buffers retain the latest state while worker threads keep network, decoding, solver, and GUI refresh tasks separated.
4. **Analyze:** monitoring, SPP/PPP/RTK positioning, and GNSS-IR services consume the normalized observations rather than implementing independent input stacks.
5. **Present and export:** PySide6 widgets display live status and diagnostics; writers produce selected raw, tabular, RINEX, navigation, or precise products.

</div>

<div data-lang-zh markdown="1">

仓库将界面调度与可复用 GNSS 处理逻辑分离：

1. **数据采集：** NTRIP 客户端、串口客户端和 RINEX 读取器提供实时或回放观测；EPH、SSR 和 RTK 改正流独立配置。
2. **解码与统一建模：** RTCM/接收机专用处理器将原始消息转换为共享的历元、卫星、信号、星历和改正数据模型。
3. **缓存与调度：** 数据存储和环形缓冲区维护最新状态，工作线程将网络、解码、解算和界面刷新任务相互分离。
4. **分析处理：** 质量监测、SPP/PPP/RTK 定位和 GNSS-IR 服务共同使用标准化观测，而不是分别建立彼此独立的输入流程。
5. **显示与输出：** PySide6 控件展示实时状态和诊断信息，写入模块按选择生成原始数据、表格、RINEX、导航或精密产品。

</div>

<div class="project-table-wrap" data-lang-en markdown="1">

| Repository area | Responsibility                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `gui_main.py`   | Main desktop launcher                                                                                                     |
| `ui/`           | PySide6 windows, dialogs, visual widgets, module orchestration, and background workers                                    |
| `core/`         | Shared data models, RTCM decoding, stream clients, RINEX writing, positioning engines, physical models, and reflectometry |
| `config/`       | YAML stream and GNSS-IR station configurations plus antenna/loading reference files                                       |
| `utils/`        | Conversion, RINEX management, multi-station recording, and real-time GNSS-IR service wrappers                             |
| `tests/`        | Unit, integration, regression, positioning, RTCM, RINEX, replay, conversion, and reflectometry tests                      |
| `doc/`          | Monitoring and positioning user guides plus protocol and receiver references                                              |

</div>

<div class="project-table-wrap" data-lang-zh markdown="1">

| 仓库目录      | 职责                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| `gui_main.py` | 桌面应用主启动入口                                                              |
| `ui/`         | PySide6 窗口、对话框、可视化控件、模块调度与后台工作线程                        |
| `core/`       | 共享数据模型、RTCM 解码、数据流客户端、RINEX 写入、定位引擎、物理模型和反射测量 |
| `config/`     | 数据流与 GNSS-IR 测站 YAML 配置，以及天线/负荷参考文件                          |
| `utils/`      | 数据转换、RINEX 管理、多测站记录和实时 GNSS-IR 服务封装                         |
| `tests/`      | 单元、集成、回归、定位、RTCM、RINEX、回放、转换和反射测量测试                   |
| `doc/`        | 质量监测与定位用户指南，以及协议和接收机参考资料                                |

</div>

<h2 id="configuration" data-toc-text="Configuration" data-toc-text-en="Configuration" data-toc-text-zh="配置与复现"><span data-lang-en>Configuration and reproducible experiments</span><span data-lang-zh>配置管理与可复现实验</span></h2>

<div data-lang-en markdown="1">

Stream and GNSS-IR settings are stored in YAML. A stream configuration can define OBS, optional EPH and SSR, RTK base/network input, replay speed, source type, connection parameters, and positioning defaults. GNSS-IR station files record geometry and processing choices separately from the application code.

This makes a station workflow reproducible, but configuration files may contain NTRIP credentials, private mountpoints, receiver passwords, or site coordinates. The repository includes a credential-free example for documentation; operational secrets should remain in local configuration and must not be committed or copied into screenshots.

</div>

<div data-lang-zh markdown="1">

数据流和 GNSS-IR 设置采用 YAML 保存。数据流配置可定义 OBS、可选 EPH/SSR、RTK 基准站或网络改正输入、回放速度、数据源类型、连接参数和定位默认设置；GNSS-IR 测站文件则将几何与处理选择从应用源码中分离出来。

这种方式有利于复现实验，但配置文件可能包含 NTRIP 账号、私有挂载点、接收机密码或测站坐标。仓库提供不含真实凭据的示例用于文档说明；业务密钥应保留在本地配置中，不应提交到仓库或出现在共享截图里。

</div>

<h2 id="usage" data-toc-text="Getting started" data-toc-text-en="Getting started" data-toc-text-zh="启动方式"><span data-lang-en>Getting started from the current repository</span><span data-lang-zh>基于当前仓库启动 RTGS</span></h2>

<div data-lang-en markdown="1">

The current default branch uses `requirements.txt` and direct Python entry points. Python 3.10 or newer is recommended.

```powershell
git clone https://github.com/HaoRuixian/RTGS.git
cd RTGS
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python gui_main.py
```

Launch the independent batch converter with:

```powershell
python rtcm_batch_gui.py
```

RTK mode additionally requires `rtkrcv`. Before positioning or reflectometry results are used beyond research evaluation, verify the input time system, ephemeris/correction compatibility, antenna metadata, reference coordinates, station geometry, and solution-quality diagnostics.

</div>

<div data-lang-zh markdown="1">

当前默认分支通过 `requirements.txt` 安装依赖，并使用 Python 脚本直接启动；建议使用 Python 3.10 或更高版本。

```powershell
git clone https://github.com/HaoRuixian/RTGS.git
cd RTGS
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python gui_main.py
```

独立批量转换器的启动方式为：

```powershell
python rtcm_batch_gui.py
```

RTK 模式还需要 `rtkrcv`。定位或反射测量结果用于科研评估之外的场景前，应核对输入时间系统、星历/改正兼容性、天线元数据、参考坐标、测站几何和解算质量诊断。

</div>

<h2 id="references" data-toc-text="Repository resources" data-toc-text-en="Repository resources" data-toc-text-zh="仓库资料"><span data-lang-en>Repository and documentation</span><span data-lang-zh>代码仓库与使用文档</span></h2>

<div data-lang-en markdown="1">

- [RTGS source repository](https://github.com/HaoRuixian/RTGS)
- [Signal Quality Monitoring user guide](https://github.com/HaoRuixian/RTGS/blob/master/doc/USAGE.md)
- [Precise Positioning user guide](https://github.com/HaoRuixian/RTGS/blob/master/doc/POSITIONING.md)
- [Repository revision reviewed for this page (09b04ab)](https://github.com/HaoRuixian/RTGS/commit/09b04abf5d91c6963c804f2d42fa6d4ed63b7909)

</div>

<div data-lang-zh markdown="1">

- [RTGS 源代码仓库](https://github.com/HaoRuixian/RTGS)
- [信号质量监测使用指南](https://github.com/HaoRuixian/RTGS/blob/master/doc/USAGE.md)
- [高精度定位使用指南](https://github.com/HaoRuixian/RTGS/blob/master/doc/POSITIONING.md)
- [本页面核对的仓库版本（09b04ab）](https://github.com/HaoRuixian/RTGS/commit/09b04abf5d91c6963c804f2d42fa6d4ed63b7909)

</div>

</div>

---
layout: post
title: Deploying a Multi-Sensor GNSS Observation Station
date: 2026-07-14
description: A field report on designing, installing, and commissioning a rooftop GNSS and environmental monitoring platform.
tags: [GNSS, GNSS meteorology, multi-sensor integration]
categories: projects
thumbnail: /assets/img/blog/03-final-rooftop-station.png
related_posts: false
_styles: |
  .post-content #markdown-content img {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 520px;
    margin: 1.25rem auto 0.5rem;
    object-fit: contain;
  }
---

<div data-lang-en markdown="1">

# Deploying a Multi-Sensor GNSS Observation Station

After several weeks of planning, equipment selection, and field work, I successfully deployed a comprehensive GNSS observation station on the rooftop of our university building. The project covered the complete workflow from system design and procurement to support-bracket fabrication, installation, commissioning, and remote data access. The platform combines high-precision GNSS observations with meteorological and precipitation measurements, creating a complete experimental infrastructure for GNSS meteorology, multi-sensor integration, atmospheric remote sensing, and GNSS data-quality analysis.

The GNSS subsystem uses a dual-antenna configuration. The primary antenna is a Huaxin choke-ring antenna, selected for stable and high-quality geodetic observations and improved multipath control. The secondary antenna is a Beitian surveying antenna that can support dual-antenna positioning, attitude determination, and comparative studies of different antenna types. This arrangement also makes it possible to test different processing strategies with two antennas operating under the same local environment.

## Environmental monitoring

Alongside the GNSS equipment, I installed a compact automatic weather station. It includes a Stevenson screen containing temperature, relative-humidity, and atmospheric-pressure sensors, as well as a tipping-bucket rain gauge for continuous precipitation monitoring. These observations provide independent environmental information for GNSS meteorology, tropospheric-delay modeling, precipitation monitoring, and later validation of GNSS-derived parameters.

The sensors and rain gauge are connected to a 4G communication module, which uploads observations to an Alibaba Cloud server over the public cellular network. The server stores and organizes the observations for later analysis, providing a fully automated workflow for remote data collection, storage, and management without requiring a permanent on-site computer.

## Shared GNSS signal acquisition

The GNSS signals follow a separate acquisition architecture. A 90 m low-loss RF cable carries each antenna signal into the laboratory, where a GNSS RF splitter distributes the same signal to receivers from several manufacturers, including Septentrio, BDStar, SinoGNSS, and Huace. This shared-signal configuration allows different receivers to observe the same signal at the same time, providing a consistent platform for receiver-performance evaluation, observation-quality assessment, and GNSS algorithm comparisons under identical signal conditions.

## Off-grid power and edge computing

Because stable commercial power is unavailable on the rooftop, the environmental monitoring system is powered by a 30 W solar panel and a 20 Ah rechargeable battery. This independent power supply supports the weather station, rain gauge, and 4G communication module for long-term operation, while reducing the need for maintenance visits to the rooftop.

The complete platform is managed by an RK3588-based embedded computer running Linux. It acts as the edge-computing controller for device management, local data acquisition, and communication with the remote server. I was involved in every stage of the project, from system design and equipment procurement to custom bracket fabrication, installation, and commissioning. Through this process, I learned how to read temperature, humidity, and pressure observations, poll remote devices over a public network, and connect multiple sensors into one reliable data-acquisition workflow. The experience also strengthened my understanding of Linux deployment, embedded-device management, and the design of real-time GNSS monitoring and edge-computing systems.

The following photos document the installation process and the final rooftop station.

</div>

<div data-lang-zh markdown="1">

# 我在综合楼楼顶部署了一套 GNSS 综合观测基站

经过一段时间的方案设计、设备选型和现场安装，我完成了实验室综合楼楼顶 GNSS 综合观测基站的部署。整个项目覆盖了系统方案设计、设备采购、支架设计制作、现场安装调试以及后续远程数据访问等完整流程。这套系统不仅能够开展高精度 GNSS 观测，还集成了气象传感器和降雨监测设备，为后续 GNSS 气象学、多传感器融合、大气遥感以及 GNSS 数据质量分析提供了完整的实验平台。

整个观测系统采用双天线配置，包括一套主天线和一套从天线。主天线选用了华信扼流圈天线，用于获得更加稳定、高质量的大地测量观测数据，并改善多路径效应的影响；从天线采用北天普通测量型 GNSS 天线，可用于双天线定位、姿态解算以及不同类型天线性能的对比研究。双天线在相同周边环境下同步工作，也便于后续验证不同的数据处理策略。

## 气象与降雨监测

除了 GNSS 设备外，我还在基站附近安装了一套小型自动气象观测系统。系统配备了气象百叶盒，内部集成温度、相对湿度和大气压力传感器，同时配置了一台翻斗式雨量计，用于连续记录降雨信息。这些环境观测数据可以支持 GNSS 气象学、对流层延迟建模、降水监测等研究，也可以作为 GNSS 反演大气参数时的独立验证资料。

气象传感器和雨量计均接入 4G 数据传输模块，通过公网将观测数据实时上传至阿里云服务器，并在服务器端完成数据存储、管理与后续分析。这样就形成了一套不依赖现场电脑、可以远程运行的自动化采集流程，减少了后续维护和人工抄录数据的工作量。

## 多接收机共享信号采集

GNSS 部分采用了独立的数据采集架构。天线信号通过 90 m 低损耗射频馈线引入办公室，并接入小型机柜中的 GNSS 射频功分器，将同一路天线信号分配给多个不同厂商的 GNSS 接收机同步采集。目前已接入 Septentrio、北斗星通、司南导航、华测导航等品牌的设备。由于不同接收机可以同时观测完全相同的信号，这套共享信号架构能够为接收机性能评估、观测数据质量分析以及 GNSS 算法对比研究提供统一、公平的数据采集平台。

## 太阳能供电与边缘计算

由于楼顶现场无法提供稳定市电，环境监测系统采用独立的太阳能供电方案，包括 30 W 太阳能电池板和 20 Ah 蓄电池，为雨量计、气象传感器以及 4G 通信模块持续供电，保证系统能够长期稳定运行，同时减少频繁登上楼顶维护设备的需要。

整套系统最终采用 RK3588 嵌入式平台运行 Linux 系统，负责设备管理、本地数据采集和与远程服务器的通信。从方案设计、设备采购、支架设计制作到现场安装调试，我都参与并负责了整个过程。在这一过程中，我学习了如何读取温度、湿度和气压等气象数据，如何通过公网轮询方式获取远程设备数据，以及如何将多个传感器连接成稳定可靠的数据采集流程。通过本次项目，我进一步熟悉了 GNSS 硬件系统搭建、Linux 系统部署、嵌入式设备管理、远程数据采集以及多传感器数据融合，也为今后开发实时 GNSS 监测系统和边缘计算平台积累了实践经验。

下面的图片记录了本次设备安装过程和最终建成的楼顶 GNSS 综合观测基站。

</div>

## <span data-lang-en>Installation photos</span><span data-lang-zh>安装过程照片</span>

![The equipment being debugged at my workstation.](/assets/img/blog/01-desk-debugging.jpeg)

<span data-lang-en>*Debugging the equipment at my workstation.*</span><span data-lang-zh>*在工位调试设备。*</span>

![Fabricating the support bracket in the field.](/assets/img/blog/02-field-assembly.jpeg)

<span data-lang-en>*Fabricating the support bracket in the field.*</span><span data-lang-zh>*外出进行支架的焊接制作。*</span>

![The completed rooftop observation station.](/assets/img/blog/03-final-rooftop-station.png)

<span data-lang-en>*The completed rooftop observation station.*</span><span data-lang-zh>*最终安装完成的楼顶设备。*</span>

![A view of the installed equipment from the ground.](/assets/img/blog/04-building-view.png)

<span data-lang-en>*The station viewed from the ground.*</span><span data-lang-zh>*从楼下看到的设备，非常骄傲！*</span>

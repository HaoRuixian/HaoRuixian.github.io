---
layout: post
title: Building a Multi-Receiver Test Platform for Low-Cost GNSS Modules
title_zh: 在北航柏彦大厦开展低成本 GNSS 设备测试实验
date: 2026-03-30
description: Designing and deploying a synchronized multi-receiver platform for evaluating low-cost GNSS modules under identical observation conditions.
tags: [low-cost GNSS, research infrastructure, receiver evaluation]
categories: research-projects
thumbnail: /assets/img/blog/0330-final-multi-receiver-platform.jpeg
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

To better understand the performance limits of modern low-cost GNSS receivers, I recently carried out a series of evaluation experiments at Beihang University's Baiyan Building. The objective was to compare several commercially available GNSS modules under identical observation conditions and establish a reliable data foundation for future research in precise positioning, GNSS-IR, and real-time applications.

## A common signal source for fair comparison

This experiment was made possible by the generous support of Dr. Kai Guo, whom I had the privilege of working with during my internship at Beihang University. With his help, I was able to use the Huaxin HX-CGX611A choke-ring antenna installed on the rooftop of the Baiyan Building as the common signal source for every test receiver.

Using one geodetic antenna for all devices is important for a fair evaluation. It removes differences caused by antenna quality, installation position, cable configuration, and local multipath conditions. Each receiver therefore observes the same satellite signals in the same environment, allowing performance differences to be attributed more confidently to the receiver hardware and processing software themselves.

## A four-receiver parallel test platform

To support the experiment, I designed and built a multi-receiver GNSS evaluation platform capable of operating four low-cost GNSS modules simultaneously. The antenna signal is passed through a GNSS RF splitter and distributed evenly to all receivers, enabling synchronized observation and a consistent data source for later analysis.

The platform currently integrates several representative receivers: the Allystar UM982, u-blox ZED-F9P, Septentrio mosaic-X5, and SinoGNSS K827. Their synchronized observations can be used to evaluate data quality, positioning performance, cycle-slip and signal behavior, and the consistency of downstream algorithms across different hardware platforms.

## Raspberry Pi control and reliable operation

A Raspberry Pi 5 serves as the central controller for the entire test system. I also added an uninterruptible power supply (UPS) so that the platform can continue operating during temporary power interruptions or unstable supply conditions. This protects long-duration experiments from losing observations at the moment of a power event.

In addition to the hardware integration, I developed a web-based management system for remote administration of all receivers. The dashboard displays receiver status, data output, and network connectivity in real time. It also supports remote configuration and command transmission, allowing the platform to be monitored and controlled through a browser without repeatedly accessing the equipment physically.

## Data distribution and local archiving

Each receiver can stream its real-time observations to multiple NTRIP Casters at the same time, which supports different downstream applications and data consumers. Meanwhile, all raw observations are archived locally on the Raspberry Pi. Maintaining a complete local archive is useful for offline analysis, algorithm validation, troubleshooting, and long-term performance evaluation.

I developed the entire platform independently, including the hardware integration, embedded Linux deployment, network communication, web application, and system commissioning. The project has given me practical experience in GNSS receiver management, automated data acquisition, remote device control, and the design of reliable long-duration experiments.

In the future, I plan to use this platform for systematic comparisons of low-cost GNSS modules and to investigate their potential in precise positioning, real-time GNSS-IR, PPP, and multi-sensor integration.

</div>

<div data-lang-zh markdown="1">

为了进一步评估不同低成本 GNSS 模组的定位性能和观测质量，我近期在北京航空航天大学柏彦大厦开展了一系列设备测试实验。此次实验的目标是在完全一致的观测环境下，对多款主流低成本 GNSS 接收机进行长期、系统的性能评估，为后续开展高精度定位、GNSS-IR 以及实时应用研究提供可靠的数据基础。

## 统一信号源与公平对比

这次实验能够顺利开展，特别感谢我在北航实习期间的老师郭凯老师给予的大力支持。在郭老师的帮助下，我得以使用柏彦大厦楼顶安装的华信 HX-CGX611A 扼流圈天线作为统一信号源，为所有测试设备提供高质量 GNSS 观测信号。

让所有接收机共用同一副大地测量天线，对于公平比较非常重要。这样可以尽量排除天线性能、安装位置、线缆配置以及周围多路径环境差异带来的影响，使不同设备在相同卫星信号和相同观测环境下工作，从而更加客观地分析接收机硬件和软件处理性能的差异。

## 多接收机并行测试平台

为了满足实验需求，我自主设计并搭建了一套多模组并行测试平台。整个平台可以同时接入四套低成本 GNSS 接收设备，并保证所有设备接收来自同一天线的卫星信号。天线信号经过 GNSS 射频功分器后，被均匀分配至各个接收机，实现同步观测，为后续观测质量分析、定位性能评估以及算法验证提供统一的数据来源。

本次测试平台集成了多款具有代表性的 GNSS 接收机，包括 Allystar UM982、u-blox ZED-F9P、Septentrio mosaic-X5 以及司南导航 K827 等产品。不同设备的同步观测数据可以用于比较数据质量、定位性能、周跳和信号行为，以及不同硬件平台上后续算法处理结果的一致性。

## 树莓派控制与稳定运行

为了实现设备的自动化运行，我采用 Raspberry Pi 5 作为整个测试平台的控制中心，并配备 UPS 不间断电源。即使遇到短时断电或供电异常，平台仍能够持续稳定运行，避免长时间观测数据在关键时刻丢失。

除了硬件平台之外，我还自主开发了一套 Web 管理系统，用于远程管理和监控所有测试设备。该系统能够实时显示各接收机的运行状态、数据输出情况以及网络连接状态，并支持远程发送控制指令，实现设备的在线配置和管理，减少反复进入设备现场进行操作的需要。

## 数据分发与本地归档

在数据管理方面，平台支持将每台接收机采集到的实时数据同时推送至多个 NTRIP Caster，满足不同应用场景和数据使用者的分发需求。同时，所有原始观测数据也会自动保存至树莓派本地，为后续离线分析、算法验证、故障排查以及长期性能评估提供完整的数据记录。

整个测试平台从硬件集成、嵌入式 Linux 系统部署、网络通信、Web 软件开发到系统调试均由我独立完成。通过这次项目，我不仅建立了一套能够长期稳定运行的低成本 GNSS 测试平台，也进一步提升了自己在 GNSS 设备管理、自动化数据采集、远程设备控制以及长期实验系统设计方面的实践能力。

未来，我计划利用这一平台持续开展不同 GNSS 模组之间的系统性能对比研究，并进一步探索其在高精度定位、实时 GNSS-IR、PPP 以及多传感器融合等方向上的应用潜力。

</div>

## <span data-lang-en>Platform photos</span><span data-lang-zh>测试平台照片</span>

![The first low-cost GNSS receiver prototype assembled in a cardboard enclosure.](/assets/img/blog/0330-prototype-platform.png)

<span data-lang-en>_The early prototype of the multi-receiver platform._</span><span data-lang-zh>_最初使用自制纸箱搭建的设备原型。_</span>

![The final multi-receiver GNSS test platform deployed with the antenna splitter and receiver modules.](/assets/img/blog/0330-final-multi-receiver-platform.jpeg)

<span data-lang-en>_The final deployed low-cost GNSS test platform._</span><span data-lang-zh>_最终部署完成的低成本 GNSS 多模组测试平台。_</span>

![The web management system showing the status and data streams of the GNSS receivers.](/assets/img/blog/0330-web-management-system.png)

<span data-lang-en>_The web-based monitoring and control interface._</span><span data-lang-zh>_GNSS 设备 Web 远程管理与监控界面。_</span>

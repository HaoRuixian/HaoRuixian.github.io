---
layout: post
title: Deploying a New GNSS-IR Experimental Platform at the Ningbo Hydrological Station
title_zh: 在宁波水文站部署新一代 GNSS-IR 实验平台
date: 2026-06-17
description: A field report on upgrading a GNSS-IR water-level monitoring platform with directional antennas, dual-polarization observations, and real-time edge computing.
tags: [GNSS-IR, sea-level monitoring, low-cost GNSS, field deployment]
categories: research-projects
thumbnail: /assets/img/blog/0617-final-gnss-ir-deployment.png
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
  .blog-figure {
    margin: 1.75rem auto 2rem;
    text-align: center;
  }
  .blog-figure figcaption {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    line-height: 1.5;
  }
---

<div data-lang-en markdown="1">

I recently traveled to Ningbo to conduct a new round of GNSS-IR field experiments at the Ningbo Hydrological Station. Building upon the encouraging results obtained during last year's campaign, this visit focused on deploying an upgraded observation platform and evaluating several new GNSS-IR configurations under real operational conditions.

## A practical motivation for GNSS-IR water-level monitoring

The motivation for this work comes from a practical problem at the hydrological station. Over time, significant sediment has accumulated inside the stilling well, preventing the traditional float-type water-level gauge from operating properly during low tide. As the water level drops, the float becomes obstructed by the accumulated silt and can no longer follow the water surface. The lowest water levels are therefore missing from the conventional record, which creates a clear limitation for continuous hydrological monitoring.

GNSS Interferometric Reflectometry (GNSS-IR) offers a useful non-contact complement to the mechanical gauge. It estimates water level from the interference between direct and surface-reflected satellite signals, so its measurements are not affected by sediment inside the stilling well. This makes GNSS-IR particularly valuable during extremely low-tide conditions, when the conventional float gauge is most likely to fail.

</div>

<div data-lang-zh markdown="1">

最近我前往宁波水文站开展了一次新的 GNSS-IR 现场实验。本次工作基于去年实验取得的成果，重点部署升级后的观测平台，并在真实运行环境下验证更加丰富的 GNSS-IR 观测方案。

## GNSS-IR 水位监测的实际需求

本次实验的背景来源于宁波水文站遇到的一个实际工程问题。由于长期泥沙淤积，水位井底部出现了较为严重的沉积，导致传统浮子式水位计在低潮位时无法正常工作。当水位下降到一定高度后，浮子会受到淤泥阻碍，无法继续跟随水面下降，因此最低潮位无法被准确记录，给连续水文监测带来了一定影响。

GNSS-IR 是一种非接触式遥感观测技术，可以利用卫星直射信号与水面反射信号之间的干涉信息反演水位。由于它不依赖水位井内部的机械浮子，因此不会受到淤泥沉积的影响，尤其适合在传统水位计容易失效的极端低潮位条件下，为传统水位观测提供可靠补充。

</div>

<figure class="blog-figure">
  <img src="/assets/img/blog/0617-stilling-well-sediment.png" alt="Sediment accumulation inside the stilling well, which obstructs the conventional float gauge" loading="lazy">
  <figcaption><span data-lang-en>Sediment accumulation inside the stilling well and the affected float gauge.</span><span data-lang-zh>水位井内的淤泥沉积，以及受到影响的浮子式水位计。</span></figcaption>
</figure>

<div data-lang-en markdown="1">

## New observation configurations

Our previous campaign at this site demonstrated promising GNSS-IR sea-level retrieval results. During this visit, we expanded the original platform to test more diverse observation strategies.

The first upgrade was the installation of a side-looking small helical antenna oriented toward the water surface. Unlike a conventional surveying antenna, this low-cost directional antenna is designed to strengthen the reception of reflected signals from the water while reducing unwanted signals from other directions. We will evaluate whether this stronger directional response can improve the accuracy and stability of GNSS-IR water-level retrievals.

We also carried out our first dual-antenna GNSS-IR experiment at the site. The system combines a custom left-hand circularly polarized (LHCP) antenna with a conventional right-hand circularly polarized (RHCP) GNSS antenna. Both antennas are connected to an Allystar UM982 high-precision GNSS receiver for synchronized observations. Because signals reflected from a water surface often undergo polarization reversal, the LHCP antenna is expected to receive the reflected component more effectively. The dual-polarization configuration may therefore provide richer reflection information and new data for GNSS-IR algorithm development.

</div>

<div data-lang-zh markdown="1">

## 新的观测方案

去年，我们已经在该站点完成了 GNSS-IR 海（水）面高反演实验，并取得了较好的实验效果。本次再次来到宁波，主要是在原有实验平台基础上开展更加多样化的观测方案验证。

首先，我们新增了一副面向水面的侧视小型螺旋天线。与传统测量型天线相比，这种低成本定向天线专门面向水面方向设计，能够增强水面反射信号的接收，同时减少其他方向信号的干扰。后续实验将重点验证，更强的方向性是否能够进一步提升 GNSS-IR 海（水）面高反演的精度和稳定性。

与此同时，本次实验首次尝试了双天线 GNSS-IR 观测模式。我们定制了一副左旋圆极化（LHCP）天线，与常规右旋圆极化（RHCP）GNSS 天线组成双天线观测系统，并连接至和芯星通 UM982 高精度 GNSS 接收机开展同步观测。由于水面反射信号通常会发生极化翻转，LHCP 天线理论上能够更加有效地接收反射信号。因此，双极化观测有望提供更加丰富的反射信息，为 GNSS-IR 算法研究提供新的数据来源。

</div>

<figure class="blog-figure">
  <img src="/assets/img/blog/0617-final-gnss-ir-deployment.png" alt="The final GNSS-IR deployment with the upward-looking RHCP antenna and downward-looking LHCP antenna" loading="lazy">
  <figcaption><span data-lang-en>The final deployment at the hydrological station.</span><span data-lang-zh>最终部署完成的 GNSS-IR 观测平台。</span></figcaption>
</figure>

<div data-lang-en markdown="1">

## Real-time data acquisition and edge computing

The field data-acquisition platform uses a Raspberry Pi as its edge-computing controller. It manages the GNSS receiver and collects the raw observations locally. A SIM7600CE 4G module provides real-time wireless transmission, allowing the station to operate without a permanent wired network connection.

</div>

<div data-lang-zh markdown="1">

## 实时数据采集与边缘计算

本次实验的数据采集设备以树莓派作为边缘计算平台，负责 GNSS 接收机控制和原始观测数据采集。通信部分采用 SIM7600CE 4G 模块，实现观测数据的远程实时传输，使整套设备不依赖固定的有线网络即可运行。

</div>

<figure class="blog-figure">
  <img src="/assets/img/blog/0617-gnss-data-platform.png" alt="The GNSS data-acquisition equipment, including the Raspberry Pi, UM982 receiver, and communication hardware" loading="lazy">
  <figcaption><span data-lang-en>The field GNSS data-acquisition platform.</span><span data-lang-zh>本次实验使用的 GNSS 数据采集设备。</span></figcaption>
</figure>

<div data-lang-en markdown="1">

Instead of transmitting standard RINEX files, the system streams Allystar's proprietary raw observation format to a remote server. The observations are decoded and processed in real time on the server, establishing a complete data link for future real-time GNSS-IR water-level monitoring and algorithm testing. This architecture connects field instruments, wireless communication, server-side processing, and remote research workflows into one continuous system.

This field campaign further improved the GNSS-IR observation platform at the Ningbo Hydrological Station and produced valuable datasets for evaluating low-cost directional antennas, dual-polarization GNSS-IR methods, and real-time edge-computing systems. These experiments provide a strong foundation for continuous, real-time, and high-precision water-level monitoring based on GNSS-IR.

</div>

<div data-lang-zh markdown="1">

数据传输采用和芯星通自定义的原始观测数据格式，而不是先转换成标准 RINEX 文件。原始数据被实时发送至服务器，并在服务器端完成解析与计算，从而建立起一条完整的实时数据链路，为后续实时 GNSS-IR 海（水）面高监测算法和远程实验提供支持。这套架构将现场设备、无线通信、服务器处理和远程科研流程连接成一个连续运行的系统。

本次实验不仅进一步完善了宁波水文站的 GNSS-IR 观测平台，也为低成本定向天线、双极化 GNSS-IR 以及实时边缘计算系统等方向提供了宝贵的实测数据，为后续开展连续、实时、高精度水位监测研究奠定了基础。

</div>

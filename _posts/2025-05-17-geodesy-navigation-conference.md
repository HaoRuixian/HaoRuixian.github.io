---
layout: post
title: Delivering My First Academic Presentation at the 2025 Geodesy and Navigation Conference
title_zh: 在大地测量与导航 2025 综合学术年会上作首次学术口头报告
date: 2025-05-17
description: Reflections on my first academic oral presentation and our multi-observable GNSS-IR sea-level retrieval framework at the 2025 Geodesy and Navigation Conference in Qingdao.
tags: [GNSS-IR, sea-level monitoring, multi-observable GNSS, academic presentation]
categories: academic-events
thumbnail: /assets/img/blog/0517-geodesy-navigation-presentation.jpeg
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

On May 17, 2025, I attended the **2025 Comprehensive Academic Conference on Geodesy and Navigation and the Symposium on Geodetic Development** in Qingdao, Shandong Province, where I delivered my first formal academic oral presentation. As an undergraduate student, I felt honored to present my work at a high-level meeting in the field of geodesy.

## Moving beyond SNR-only sea-level retrieval

My presentation introduced a sea-level retrieval framework based on multiple types of GNSS observations. Conventional GNSS Interferometric Reflectometry (GNSS-IR) methods mainly use signal-to-noise ratio (SNR) observations. Our work instead explores how carrier phase, pseudorange, and SNR measurements can provide complementary information about reflected signals, making sea-level retrieval more accurate and robust.

For carrier-phase and pseudorange observations, I designed single- and multi-frequency multipath combinations and combined them with Lomb–Scargle periodogram (LSP) retrieval and inverse modeling. I then compared the strengths and limitations of the different observables using data from the **SC02 station**. A multi-source observation fusion strategy achieved sea-level retrieval accuracy of **better than 3 cm**, the highest level I had reached at that stage of the research.

## Introducing GMR-Water

I also demonstrated **GMR-Water**, the GNSS-IR processing software I developed independently and used to produce the results in the presentation. The software supports multi-constellation, multi-frequency, and multi-observable processing, and integrates spectral analysis, inverse modeling, multipath combinations, and automated workflows. Its demonstration attracted considerable interest from researchers at the conference.

I plan to keep improving GMR-Water and advance its open-source development so that it can become a practical and efficient tool for the GNSS-IR community. I also hope to share the associated research more widely through international journals such as _GPS Solutions_.

## A meaningful first presentation

From organizing the research story and preparing the slides to answering questions from specialists, every part of this first conference presentation was valuable training. The experience strengthened my academic communication skills and confirmed my determination to continue exploring GNSS-IR technologies and their applications in environmental monitoring.

</div>

<div data-lang-zh markdown="1">

2025 年 5 月 17 日，我前往山东青岛参加了**大地测量与导航 2025 综合学术年会暨大地测量发展研讨会**，并受邀进行口头报告。这是我第一次在正式学术会议上汇报研究成果。能够以本科生身份在高水平的大地测量领域会议上展示自己的工作，我感到十分荣幸。

## 从单一 SNR 走向多类型观测值融合

本次报告主要介绍了我近期围绕**多类型 GNSS 观测值融合的海（水）面高反演方法**开展的研究。传统 GNSS 干涉反射（GNSS-IR）方法主要依赖信噪比（SNR）观测量，而我们的工作进一步探索载波相位、伪距和 SNR 等不同观测值中反射信号信息的互补性，以提升海面高反演的精度与稳定性。

针对载波相位和伪距观测值，我分别设计了单频与多频多路径组合模型，并结合 Lomb–Scargle 谱分析（LSP）反演模型和逆向建模方法开展海面高估计。在 **SC02 测站**的实验中，我比较了不同观测值的优势与局限，并提出多源观测融合策略。实验结果表明，该策略实现了**优于 3 cm 的海面高反演精度**，也是当时我在 GNSS-IR 海面高反演中取得的最高精度。

## 展示 GMR-Water 软件

除算法研究外，我还在会上展示了自主开发的 GNSS-IR 处理软件 **GMR-Water**，报告中的研究结果均基于该平台完成。GMR-Water 支持多系统、多频率和多类型 GNSS 观测值处理，并集成了谱分析、逆向建模、多路径组合和自动化处理等功能。软件展示也得到了现场专家和同行的广泛关注。

未来，我计划继续完善 GMR-Water 并推进开源工作，希望为 GNSS-IR 研究者提供更加方便、高效的科研工具。同时，我也期待相关成果能够通过 _GPS Solutions_ 等国际期刊得到更广泛的交流与认可。

## 一次重要的学术起点

从准备 PPT、梳理研究逻辑，到现场面对专家提问和交流，每一个环节都让我获得了宝贵经验。这次首次学术会议报告不仅提升了我的表达能力，也让我更加明确了继续深耕 GNSS-IR 技术及其环境监测应用的方向。

</div>

## <span data-lang-en>Conference photo</span><span data-lang-zh>会议照片</span>

![Ruixian Hao delivering his first academic oral presentation at the 2025 Geodesy and Navigation Conference.](/assets/img/blog/0517-geodesy-navigation-presentation.jpeg)

<span data-lang-en>_Delivering my first formal academic oral presentation in Qingdao._</span><span data-lang-zh>_在青岛进行首次正式学术口头报告。_</span>

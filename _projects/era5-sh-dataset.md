---
layout: page
title: ERA5-SH Dataset
description: Global gridded scale-height dataset for tropospheric parameters derived from ERA5 reanalysis.
description_zh: 基于 ERA5 再分析资料构建的全球格网化对流层参量尺度高度数据集。
img: assets/img/projects/project-era5-sh.png
importance: 1
category: data
featured: true
github: https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis
---

<div data-lang-en markdown="1">

ERA5-SH is a global gridded scale-height dataset for key tropospheric parameters, including ZTD, ZHD, ZWD, Tm, PWV, and WVD. It was built from ERA5 pressure-level reanalysis profiles and validated with global radiosonde observations.

The project supports research in GNSS meteorology, atmospheric water vapor modeling, tropospheric delay correction, and water vapor tomography by turning vertical atmospheric structure into reusable scale-height products.

</div>

<div data-lang-zh markdown="1">

ERA5-SH 是一个数据集项目，面向 ZTD、ZHD、ZWD、Tm、PWV 和 WVD 等对流层关键参量，提供基于 ERA5 pressure-level 再分析资料构建的全球格网化尺度高度产品。

该数据集将垂直大气结构转化为可复用的尺度高度产品，并结合全球无线电探空观测进行精度验证，可服务于 GNSS 气象学、对流层延迟修正、大气水汽建模和水汽层析等研究。

</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/project-era5-sh.png" title="ERA5-SH dataset overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**<span data-lang-en>Dataset access</span><span data-lang-zh>数据下载</span>**

<div data-lang-en markdown="1">

- Zenodo Part I: [record 14676025](https://zenodo.org/records/14676025), 1,684 total downloads as of 2026-07-09.
- Zenodo Part II: [record 14679394](https://zenodo.org/records/14679394), 1,189 total downloads as of 2026-07-09.
- Combined Zenodo downloads: 2,873 as of 2026-07-09.

</div>

<div data-lang-zh markdown="1">

- Zenodo Part I：[record 14676025](https://zenodo.org/records/14676025)，截至 2026-07-09 页面显示总下载 1,684 次。
- Zenodo Part II：[record 14679394](https://zenodo.org/records/14679394)，截至 2026-07-09 页面显示总下载 1,189 次。
- 两部分合计下载量：截至 2026-07-09 为 2,873 次。

</div>

**<span data-lang-en>Key points</span><span data-lang-zh>项目要点</span>**

<div data-lang-en markdown="1">

- Computes scale heights from ERA5 reanalysis profiles using exponential fitting.
- Covers multiple tropospheric and water-vapor parameters relevant to GNSS meteorology.
- Uses radiosonde-derived scale heights as reference for product evaluation.
- Connects directly to the Scientific Data publication on ERA5-SH.

</div>

<div data-lang-zh markdown="1">

- 使用指数拟合方法从 ERA5 垂直廓线中计算尺度高度。
- 覆盖 GNSS 气象学常用的对流层延迟、水汽和加权平均温度相关参量。
- 以无线电探空数据计算结果作为参考，对产品精度进行评估。
- 对应论文发表于 Scientific Data，并同步开放代码与数据入口。

</div>

**<span data-lang-en>Links</span><span data-lang-zh>链接</span>**

- [GitHub repository](https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis)
- [Scientific Data article](https://doi.org/10.1038/s41597-025-04714-5)

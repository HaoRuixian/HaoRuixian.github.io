---
layout: page
title: ERA5-SH Dataset
description: Global gridded scale-height dataset for tropospheric parameters derived from ERA5 reanalysis.
img: assets/img/projects/project-era5-sh.png
importance: 1
category: data
featured: true
github: https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis
---

ERA5-SH is a global gridded scale-height dataset for key tropospheric parameters, including ZTD, ZHD, ZWD, Tm, PWV, and WVD. It was built from ERA5 pressure-level reanalysis profiles and validated with global radiosonde observations.

The project supports research in GNSS meteorology, atmospheric water vapor modeling, tropospheric delay correction, and water vapor tomography by turning vertical atmospheric structure into reusable scale-height products.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/project-era5-sh.png" title="ERA5-SH dataset overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**Key points**

- Computes scale heights from ERA5 reanalysis profiles using exponential fitting.
- Covers multiple tropospheric and water-vapor parameters relevant to GNSS meteorology.
- Uses radiosonde-derived scale heights as reference for product evaluation.
- Connects directly to the Scientific Data publication on ERA5-SH.

**Links**

- [GitHub repository](https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis)
- [Scientific Data article](https://doi.org/10.1038/s41597-025-04714-5)

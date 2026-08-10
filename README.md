# Ruixian Hao's Academic Website

[![Website](https://img.shields.io/badge/website-haoruixian.github.io-0b5d7a)](https://haoruixian.github.io)
[![Deploy](https://github.com/HaoRuixian/HaoRuixian.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/HaoRuixian/HaoRuixian.github.io/actions/workflows/deploy.yml)

This repository contains the source code for my personal academic website:
[haoruixian.github.io](https://haoruixian.github.io).

I am an M.S. researcher at the College of Geoscience and Surveying Engineering,
China University of Mining and Technology - Beijing. My work focuses on GNSS
remote sensing and environmental monitoring, combining scientific algorithms,
low-cost observation hardware, field experiments, and reproducible research
software and data.

## Research Focus

- GNSS meteorology and tropospheric parameter modeling
- GNSS interferometric and multipath reflectometry (GNSS-IR/GNSS-MR)
- Water-level and sea-surface-height monitoring
- Low-cost GNSS receivers, embedded Linux, and wireless telemetry
- Multi-source GNSS, ERA5 reanalysis, and radiosonde validation

## Featured Work

- [ERA5-SH](https://github.com/HaoRuixian/ERA5-SH-dataset-for-troposphere-parameters-code-for-estimate-and-analysis):
  a global tropospheric scale-height dataset derived from ERA5 pressure-level
  profiles and validated with 591 radiosonde stations.
- [GMR-Water](https://github.com/HaoRuixian/GNSS-IR-Kit): open-source MATLAB
  software for multi-GNSS, multi-frequency, and multi-observation water-level
  retrieval.
- [Low-cost near-real-time GNSS-IR monitoring](https://haoruixian.github.io/blog/2026/ningbo-gnss-ir-field-experiment/):
  an end-to-end system integrating GNSS acquisition, edge computing, 4G
  telemetry, and continuous water-level estimation.

## Website Content

The site includes my research profile, publications, open-source projects,
fieldwork and conference notes, and a web-formatted curriculum vitae. The
latest two-page PDF CV is available from the [CV page](https://haoruixian.github.io/cv/)
or as a [direct download](https://haoruixian.github.io/assets/pdf/Ruixian_Hao_CV.pdf).

## Local Development

The site is built with [Jekyll](https://jekyllrb.com/) and the
[al-folio](https://github.com/alshedivat/al-folio) academic theme.

```bash
git clone https://github.com/HaoRuixian/HaoRuixian.github.io.git
cd HaoRuixian.github.io
docker compose pull
docker compose up
```

The local preview is available at `http://localhost:8080`.

## License and Credits

The site is based on al-folio and retains its MIT license. See [LICENSE](LICENSE)
for details.

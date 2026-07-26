---
layout: page
title: Projects
nav_title_zh: 项目
permalink: /projects/
description: Selected research datasets, GNSS software, and open-source engineering projects.
nav: true
nav_order: 3
display_categories: [data, software]
horizontal: true
---

<!-- pages/projects.md -->

<div data-lang-en markdown="1">

This page highlights research datasets, GNSS reflectometry software, and practical GNSS engineering projects released through GitHub and Zenodo. The two primary projects are ERA5-SH, a dataset project for global tropospheric-parameter scale heights, and GMR-Water, software for GNSS-MR water-level retrieval.

</div>

<div data-lang-zh markdown="1">

本页集中展示已通过 GitHub 和 Zenodo 开放的研究数据集、GNSS 反射测量软件与实用 GNSS 工程项目。重点项目包括 ERA5-SH 全球对流层参量尺度高度数据集，以及 GMR-Water GNSS-MR 水位反演软件。

</div>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid wide=true %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid wide=true %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

---
layout: page
title: GSMF
description: Galaxy Stellar Mass Functions
img: assets/img/publication_preview/star_bursts.jpg
importance: 1
category: Astronomy
related_publications: true
---

This is an intersting ongoing project! We are developing a **forward-modeling bayesian method** to fit galaxy stellar mass functions using all galaxies at once, incorporating their **full redshift and stellar mass posteriors** — all **without any binning** in redshift or stellar mass. This allows us to trace **Evolving Stellar Mass Functions** with unprecedented continuity and precision. More interestingly, the Schechter function parameters — $$\Phi^*$$, $$M^*$$, and $$\alpha$$ — are now modeled as smooth functions of redshift: $$\mathbf{\Phi^*(z)}$$, $$\mathbf{M^*(z)}$$, and $$\mathbf{\alpha(z)}$$. This means that parameter values across different epochs are no longer independent, but **correlated through cosmic time**!  
Below we show our latest results 💫.

We use **linear parameterizations** to model the redshift evolution of our Schechter parameters as:

$$
\boldsymbol{\theta}(z) = \boldsymbol{\theta}_0 + \boldsymbol{\theta}_{\eta} \, (z - z_\mathrm{ref}),
$$

where $$\boldsymbol{\theta}(z) \in \{\Phi^*(z), \mathcal{M}^*(z), \alpha(z)\}$$.  
The **top-left plots** show the redshift evolution of $$\Phi^*(z)$$, $$\mathcal{M}^*(z)$$, and $$\alpha(z)$$. Schechter parameters’ evolution is fitted using **nested sampling** via **Nautilus**, with the corresponding **corner plots** shown on the right. The resulting **evolving stellar mass functions (SMFs)** are displayed on the left.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project_2_pictures/smfs.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  Evolving Stellar Mass Functions
</div>

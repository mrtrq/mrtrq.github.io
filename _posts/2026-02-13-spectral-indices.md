---
layout: post
title: Satellite Imagery Analysis - Spectral Indices Explained
date: 2026-02-13 10:00:00
description: Deep dive into vegetation, water, and urban indices for satellite image analysis
tags: remote-sensing spectral-indices ndvi ndwi satellite-analysis
categories: published-posts
chart:
  chartjs: true
  vega_lite: true
featured: true
tabs: true
pretty_table: true
---

## Understanding Spectral Indices

Spectral indices are mathematical combinations of spectral bands that enhance specific features in satellite imagery. By leveraging the unique reflectance properties of different materials, these indices help us quantify vegetation health, water content, urban density, and more.

The power of spectral indices lies in their simplicity and effectiveness. A single index value can tell us more about a pixel than examining individual bands separately.

---

## Vegetation Indices

### NDVI - Normalized Difference Vegetation Index

**The Formula:**

$$
NDVI = \frac{NIR - Red}{NIR + Red}
$$

NDVI is the most widely used vegetation index, exploiting the fact that healthy vegetation:
- **Absorbs** red light (for photosynthesis)
- **Reflects** near-infrared light (due to leaf cell structure)

**Value Interpretation:**

| NDVI Range | Interpretation | Typical Land Cover |
|:-----------|:---------------|:-------------------|
| -1.0 to 0.0 | Water, snow, clouds | Water bodies, ice, bare rock |
| 0.0 to 0.2 | Bare soil, sand | Deserts, urban areas, barren land |
| 0.2 to 0.4 | Sparse vegetation | Grasslands, shrublands, degraded areas |
| 0.4 to 0.6 | Moderate vegetation | Croplands, mixed vegetation |
| 0.6 to 0.8 | Dense vegetation | Forests, healthy crops, wetlands |
| 0.8 to 1.0 | Very dense vegetation | Tropical rainforests, peak crop growth |

{% tabs ndvi-applications %}

{% tab ndvi-applications Agriculture %}

**Crop Health Monitoring**

```python
# Calculate NDVI using Python
import rasterio
import numpy as np

# Read NIR (Band 8) and Red (Band 4) from Sentinel-2
with rasterio.open('B08.tif') as nir:
    nir_band = nir.read(1).astype(float)
    
with rasterio.open('B04.tif') as red:
    red_band = red.read(1).astype(float)

# Calculate NDVI
ndvi = (nir_band - red_band) / (nir_band + red_band)

# Mask out non-vegetation areas
ndvi_vegetation = np.where(ndvi > 0.2, ndvi, np.nan)
```

**Use Cases:**
- Identify stressed crops before visible symptoms
- Optimize variable-rate fertilizer application
- Estimate biomass and yield potential
- Monitor crop phenology throughout growing season

{% endtab %}

{% tab ndvi-applications Forestry %}

**Forest Health Assessment**

NDVI time-series analysis reveals:
- **Deforestation events**: Sharp drops in NDVI values
- **Seasonal patterns**: Deciduous vs. evergreen forests
- **Pest infestations**: Gradual NDVI decline over weeks/months
- **Fire damage**: Immediate NDVI reduction in burned areas

**Example Workflow:**
1. Download 5 years of Sentinel-2 imagery
2. Calculate NDVI for each image
3. Create median composite for each season
4. Detect anomalies using statistical thresholds
5. Generate alerts for areas with >20% NDVI decrease

{% endtab %}

{% tab ndvi-applications Environmental %}

**Ecosystem Monitoring**

- **Wetland mapping**: NDVI helps distinguish vegetated wetlands from open water
- **Desertification tracking**: Monitor vegetation loss in arid regions
- **Carbon sequestration**: NDVI correlates with biomass and carbon storage
- **Biodiversity assessment**: Vegetation structure indicates habitat quality

{% endtab %}

{% endtabs %}

### Seasonal NDVI Trends

This chart shows typical NDVI patterns for different vegetation types throughout the year:

```chartjs
{
  "type": "line",
  "data": {
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "datasets": [
      {
        "label": "Deciduous Forest (Temperate)",
        "data": [0.25, 0.28, 0.45, 0.68, 0.78, 0.82, 0.80, 0.75, 0.65, 0.48, 0.32, 0.26],
        "borderColor": "#27ae60",
        "backgroundColor": "rgba(39, 174, 96, 0.1)",
        "fill": true,
        "tension": 0.4
      },
      {
        "label": "Evergreen Forest (Tropical)",
        "data": [0.75, 0.76, 0.77, 0.78, 0.79, 0.80, 0.81, 0.80, 0.79, 0.78, 0.77, 0.76],
        "borderColor": "#229954",
        "backgroundColor": "rgba(34, 153, 84, 0.1)",
        "fill": true,
        "tension": 0.4
      },
      {
        "label": "Wheat (Northern Hemisphere)",
        "data": [0.15, 0.18, 0.35, 0.55, 0.72, 0.78, 0.45, 0.22, 0.15, 0.15, 0.15, 0.15],
        "borderColor": "#f39c12",
        "backgroundColor": "rgba(243, 156, 18, 0.1)",
        "fill": true,
        "tension": 0.4
      },
      {
        "label": "Grassland (Semi-Arid)",
        "data": [0.20, 0.22, 0.28, 0.42, 0.55, 0.48, 0.38, 0.32, 0.28, 0.25, 0.22, 0.20],
        "borderColor": "#d4ac0d",
        "backgroundColor": "rgba(212, 172, 13, 0.1)",
        "fill": true,
        "tension": 0.4
      }
    ]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "title": {
        "display": true,
        "text": "Seasonal NDVI Patterns by Vegetation Type",
        "font": {
          "size": 16
        }
      },
      "legend": {
        "position": "bottom"
      }
    },
    "scales": {
      "y": {
        "beginAtZero": true,
        "max": 1.0,
        "title": {
          "display": true,
          "text": "NDVI Value"
        }
      },
      "x": {
        "title": {
          "display": true,
          "text": "Month"
        }
      }
    }
  }
}
```

---

## Water Indices

### NDWI - Normalized Difference Water Index

**The Formula:**

$$
NDWI = \frac{Green - NIR}{Green + NIR}
$$

NDWI enhances water features by exploiting water's high absorption in NIR wavelengths.

**Alternative SWIR-based NDWI:**

$$
NDWI_{SWIR} = \frac{NIR - SWIR}{NIR + SWIR}
$$

This version is better for vegetation water content assessment.

{% tabs water-indices %}

{% tab water-indices Flood Mapping %}

**Rapid Flood Assessment**

```python
# Calculate NDWI for flood detection
import rasterio
import numpy as np

# Read Green (Band 3) and NIR (Band 8)
with rasterio.open('B03.tif') as green:
    green_band = green.read(1).astype(float)
    
with rasterio.open('B08.tif') as nir:
    nir_band = nir.read(1).astype(float)

# Calculate NDWI
ndwi = (green_band - nir_band) / (green_band + nir_band)

# Threshold for water detection
water_mask = ndwi > 0.3
```

**Applications:**
- Emergency response during flood events
- Compare pre-flood and post-flood imagery
- Estimate affected area and population
- Monitor water recession over time

{% endtab %}

{% tab water-indices Water Quality %}

**Lake and Reservoir Monitoring**

NDWI combined with other indices reveals:
- **Turbidity levels**: Sediment-laden water has different NDWI
- **Algal blooms**: Chlorophyll affects green band reflectance
- **Water extent changes**: Drought monitoring in reservoirs
- **Wetland dynamics**: Seasonal water level fluctuations

**Monitoring Workflow:**
1. Monthly NDWI calculation for water body
2. Extract water extent polygon
3. Calculate area and compare to historical baseline
4. Generate alerts if area drops below threshold

{% endtab %}

{% tab water-indices Irrigation %}

**Agricultural Water Management**

SWIR-based NDWI for crop water stress:
- Values > 0.5: Well-watered vegetation
- Values 0.2-0.5: Moderate water stress
- Values < 0.2: Severe water stress

Helps optimize irrigation scheduling and detect leaks in irrigation systems.

{% endtab %}

{% endtabs %}

---

## Urban and Built-up Indices

### NDBI - Normalized Difference Built-up Index

**The Formula:**

$$
NDBI = \frac{SWIR - NIR}{SWIR + NIR}
$$

NDBI highlights built-up areas, as urban surfaces reflect more SWIR than NIR.

### UI - Urban Index

**The Formula:**

$$
UI = \frac{SWIR2 - NIR}{SWIR2 + NIR}
$$

Similar to NDBI but uses SWIR2 band for better discrimination.

---

## Comprehensive Index Comparison

<table
  data-toggle="table"
  data-search="true"
  data-show-columns="true"
  data-pagination="true"
  data-page-size="10">
  <thead>
    <tr>
      <th data-field="index" data-sortable="true">Index</th>
      <th data-field="formula" data-sortable="false">Formula</th>
      <th data-field="range" data-sortable="true">Value Range</th>
      <th data-field="application" data-sortable="true">Primary Application</th>
      <th data-field="bands" data-sortable="true">Required Bands</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NDVI</td>
      <td>(NIR - Red) / (NIR + Red)</td>
      <td>-1 to +1</td>
      <td>Vegetation health</td>
      <td>Red, NIR</td>
    </tr>
    <tr>
      <td>EVI</td>
      <td>2.5 × ((NIR - Red) / (NIR + 6×Red - 7.5×Blue + 1))</td>
      <td>-1 to +1</td>
      <td>Enhanced vegetation (reduces saturation)</td>
      <td>Blue, Red, NIR</td>
    </tr>
    <tr>
      <td>SAVI</td>
      <td>((NIR - Red) / (NIR + Red + L)) × (1 + L)</td>
      <td>-1 to +1</td>
      <td>Vegetation in sparse/arid areas</td>
      <td>Red, NIR</td>
    </tr>
    <tr>
      <td>NDWI</td>
      <td>(Green - NIR) / (Green + NIR)</td>
      <td>-1 to +1</td>
      <td>Water body mapping</td>
      <td>Green, NIR</td>
    </tr>
    <tr>
      <td>MNDWI</td>
      <td>(Green - SWIR) / (Green + SWIR)</td>
      <td>-1 to +1</td>
      <td>Water extraction (better than NDWI)</td>
      <td>Green, SWIR</td>
    </tr>
    <tr>
      <td>NDBI</td>
      <td>(SWIR - NIR) / (SWIR + NIR)</td>
      <td>-1 to +1</td>
      <td>Built-up area detection</td>
      <td>NIR, SWIR</td>
    </tr>
    <tr>
      <td>NDSI</td>
      <td>(Green - SWIR) / (Green + SWIR)</td>
      <td>-1 to +1</td>
      <td>Snow and ice mapping</td>
      <td>Green, SWIR</td>
    </tr>
    <tr>
      <td>NBR</td>
      <td>(NIR - SWIR2) / (NIR + SWIR2)</td>
      <td>-1 to +1</td>
      <td>Burn severity assessment</td>
      <td>NIR, SWIR2</td>
    </tr>
    <tr>
      <td>NDMI</td>
      <td>(NIR - SWIR) / (NIR + SWIR)</td>
      <td>-1 to +1</td>
      <td>Vegetation moisture content</td>
      <td>NIR, SWIR</td>
    </tr>
    <tr>
      <td>BSI</td>
      <td>((SWIR + Red) - (NIR + Blue)) / ((SWIR + Red) + (NIR + Blue))</td>
      <td>-1 to +1</td>
      <td>Bare soil mapping</td>
      <td>Blue, Red, NIR, SWIR</td>
    </tr>
  </tbody>
</table>

---

## Multi-Year NDVI Analysis

This interactive visualization shows NDVI trends for a hypothetical agricultural region over 5 years:

```vega_lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Multi-year NDVI trends showing seasonal patterns and long-term changes",
  "width": 700,
  "height": 400,
  "data": {
    "values": [
      {"date": "2019-01", "ndvi": 0.35, "year": "2019"},
      {"date": "2019-04", "ndvi": 0.62, "year": "2019"},
      {"date": "2019-07", "ndvi": 0.78, "year": "2019"},
      {"date": "2019-10", "ndvi": 0.48, "year": "2019"},
      {"date": "2020-01", "ndvi": 0.32, "year": "2020"},
      {"date": "2020-04", "ndvi": 0.58, "year": "2020"},
      {"date": "2020-07", "ndvi": 0.72, "year": "2020"},
      {"date": "2020-10", "ndvi": 0.45, "year": "2020"},
      {"date": "2021-01", "ndvi": 0.28, "year": "2021"},
      {"date": "2021-04", "ndvi": 0.55, "year": "2021"},
      {"date": "2021-07", "ndvi": 0.68, "year": "2021"},
      {"date": "2021-10", "ndvi": 0.42, "year": "2021"},
      {"date": "2022-01", "ndvi": 0.38, "year": "2022"},
      {"date": "2022-04", "ndvi": 0.65, "year": "2022"},
      {"date": "2022-07", "ndvi": 0.82, "year": "2022"},
      {"date": "2022-10", "ndvi": 0.52, "year": "2022"},
      {"date": "2023-01", "ndvi": 0.40, "year": "2023"},
      {"date": "2023-04", "ndvi": 0.68, "year": "2023"},
      {"date": "2023-07", "ndvi": 0.85, "year": "2023"},
      {"date": "2023-10", "ndvi": 0.55, "year": "2023"}
    ]
  },
  "mark": {
    "type": "line",
    "point": true,
    "tooltip": true
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "title": "Date",
      "axis": {
        "format": "%Y-%m"
      }
    },
    "y": {
      "field": "ndvi",
      "type": "quantitative",
      "title": "NDVI Value",
      "scale": {
        "domain": [0, 1]
      }
    },
    "color": {
      "field": "year",
      "type": "nominal",
      "title": "Year",
      "scale": {
        "scheme": "category10"
      }
    }
  }
}
```

**Interpretation**: This data shows improving vegetation health over the 5-year period, with peak NDVI values increasing from 0.78 (2019) to 0.85 (2023), suggesting successful agricultural practices or favorable climate conditions.

---

## Best Practices

### 1. Choose the Right Index

- **Dense vegetation**: Use EVI instead of NDVI to avoid saturation
- **Sparse vegetation**: Use SAVI with appropriate soil adjustment factor
- **Water mapping**: MNDWI performs better than NDWI in most cases
- **Urban areas**: Combine NDBI with NDVI for better discrimination

### 2. Account for Atmospheric Effects

Always apply atmospheric correction before calculating indices. Uncorrected imagery can lead to:
- Underestimated NDVI in hazy conditions
- False water detection due to cloud shadows
- Inconsistent time-series analysis

### 3. Validate with Ground Truth

- Collect field measurements when possible
- Compare index values with known land cover types
- Use high-resolution imagery for validation
- Consider seasonal variations in interpretation

### 4. Time-Series Analysis

Single-date indices have limitations. Multi-temporal analysis reveals:
- Phenological patterns
- Long-term trends
- Anomaly detection
- Change events

---

## Practical Example: Drought Monitoring

Combining multiple indices provides comprehensive drought assessment:

1. **NDVI**: Detect vegetation stress
2. **NDWI (SWIR)**: Measure vegetation water content
3. **LST (Land Surface Temperature)**: Identify heat stress
4. **Precipitation data**: Correlate with index changes

**Workflow:**
```python
# Pseudo-code for drought monitoring
for each_month in time_series:
    ndvi = calculate_ndvi(month)
    ndwi = calculate_ndwi_swir(month)
    
    # Drought indicator
    drought_index = (1 - ndvi) + (1 - ndwi)
    
    if drought_index > threshold:
        flag_as_drought_affected()
```

---

## Conclusion

Spectral indices transform raw satellite imagery into actionable information. By understanding the principles behind each index and applying them appropriately, you can:

- Monitor vegetation health at field to continental scales
- Map water resources and track changes over time
- Identify urban expansion and infrastructure development
- Detect environmental changes and anomalies

In the next article, we'll explore **land cover classification** using machine learning to automatically categorize every pixel in satellite imagery.

---

*Questions about spectral indices? Want to see specific applications? Let me know!*

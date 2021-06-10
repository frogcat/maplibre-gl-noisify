# maplibre-gl-noisify
A maplibre-gl-js plugin to add noise effect to fill &amp; fill-extrusion

# demo

- <https://frogcat.github.io/maplibre-gl-noisify/fill.html>

- <https://frogcat.github.io/maplibre-gl-noisify/fill-extrusion.html>

# usage

```
<html>
<head>
  <meta charset="UTF-8">
  <title>maplibre-gl-noisify: fill-extrusion</title>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
  <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.css" />
  <script src="https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.js"></script>
  <!-- import maplibre-gl-noisify.js -->
  <script src="https://frogcat.github.io/maplibre-gl-noisify/maplibre-gl-noisify.js"/>
</head>
<body>
    // initialize Map
    const map = new maplibregl.Map({
      "container": "map",
      "center": [139.68786, 35.68355],
      "zoom": 14.65,
      "pitch": 60,
      "bearing": 22,
      "hash": true,
      "style": "url_of_style"
    });

    // bind load event handler
    map.on("load", function() {
      // call map.noisify(layerId) to noisify
      map.noisify("bldg");
    });
</body>
</html>
```

# ToDo

- add API
- add Limitation
- add Screenshots

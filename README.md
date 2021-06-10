# maplibre-gl-noisify
A maplibre-gl-js plugin to add noise effect to fill &amp; fill-extrusion

[![maplibre-gl-noisify](https://repository-images.githubusercontent.com/375623742/8dafc800-ca1a-11eb-9e50-697c12006168)](https://frogcat.github.io/maplibre-gl-noisify/noisify.html)


# demo

- <https://frogcat.github.io/maplibre-gl-noisify/noisify.html>

- <https://frogcat.github.io/maplibre-gl-noisify/fill.html>

- <https://frogcat.github.io/maplibre-gl-noisify/fill-extrusion.html>

# usage

```index.html
<html>
<head>
  <meta charset="UTF-8">
  <title>maplibre-gl-noisify: fill-extrusion</title>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
  <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.css" />
  <script src="https://unpkg.com/maplibre-gl@1.14.0/dist/maplibre-gl.js"></script>
  <!-- import maplibre-gl-noisify.js -->
  <script src="https://frogcat.github.io/maplibre-gl-noisify/maplibre-gl-noisify.js"></script>
</head>
<body>
  <div id="map" style="position:absolute;top:0;left:0;bottom:0;right:0;"></div>
  <script>  
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
  </script>
</body>
</html>
```

# ToDo

- add API
- add Limitation
- add Screenshots

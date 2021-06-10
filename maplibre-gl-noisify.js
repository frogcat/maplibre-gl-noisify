(function(target) {
  if (!target || !target.Map || !target.Map.prototype || target.Map.prototype.noisify) return;

  const createImageData = function(baseColor, noiseColors, size, unit, repeat, randomization) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const context = canvas.getContext("2d");
    context.fillStyle = baseColor;
    context.fillRect(0, 0, size, size);

    noiseColors.forEach(color => {
      context.fillStyle = color;
      for (let i = 0; i < repeat; i++)
        for (let y = 0; y < size; y += unit)
          for (let x = 0; x < size; x += unit)
            if (Math.random() < randomization) context.fillRect(x, y, unit, unit);
    });
    return context.getImageData(0, 0, size, size);
  };

  target.Map.prototype.noisify = function(id, options) {

    const params = {
      size: 128,
      unit: 2,
      repeat: 4,
      randomization: 0.2,
      colors: ["rgba(0,0,0,0.1)"]
    };
    if (options) Object.assign(params, options);

    const map = this;
    const layers = this.getStyle().layers;
    const index = layers.findIndex(a => a.id === id);
    if (index === -1) return;
    const layer = layers[index];

    const dig = function(e) {
      if (Array.isArray(e)) {
        e.forEach(dig);
      } else if (typeof e === 'string' && e.indexOf("#") === 0 && !map.hasImage(e)) {
        map.addImage(e, createImageData(e, params.colors, params.size, params.unit, params.repeat, params.randomization));
      }
    };
    if (layer.type === "fill" && layer.paint && layer.paint["fill-color"]) {
      dig(layer.paint["fill-color"]);
      layer.paint["fill-pattern"] = layer.paint["fill-color"];
      delete layer.paint["fill-color"];
    } else if (layer.type === "fill-extrusion" && layer.paint && layer.paint["fill-extrusion-color"]) {
      dig(layer.paint["fill-extrusion-color"]);
      layer.paint["fill-extrusion-pattern"] = layer.paint["fill-extrusion-color"];
      delete layer.paint["fill-extrusion-color"];
    }
    const next = layers[index + 1];
    if (next) {
      map.removeLayer(id);
      map.addLayer(layer, next.id);
    } else {
      map.removeLayer(id);
      map.addLayer(layer);
    }
  };
})(maplibregl || mapboxgl);

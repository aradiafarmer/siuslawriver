var layers = {
    layer1: {
        layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
        legend: '<i style="background: black; opacity: 0.5"></i><p><b>legend 1</b></p>'
    },
    layer2: {
        layer: L.geoJson.ajax('http://mapious.ceoas.oregonstate.edu/geoserver/mapious/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ore_counties&outputFormat=application%2Fjson', {
            color: 'orange',
            weight: 5
        }),
        legend: '<i style="background: orange; opacity: 0.5"></i><p><b>legend 2</b></p>'
    },
    layer3: {
        layer: L.tileLayer('http://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png')
    }
};

var scenes = {
    scene1: {lat: 44.049029,  lng:-123.742640, zoom: 8,  layers: [layers.layer1], name: "scene 1"},
    // scene2: {lat: 44.049029,  lng:-123.742640, zoom: 10, layers: [layers.layer1], name: "scene 2"},
    // scene3: {lat: 44.049029,  lng:-123.742640, zoom: 12, layers: [layers.layer1, layers.layer2], name: "scene 3"},
    // scene4: {lat: 44.049029,  lng:-123.742640, zoom: 14, layers: [layers.layer1, layers.layer2], name: "scene 4"},
    // scene5: {lat: 44.049029,  lng:-123.742640, zoom: 16, layers: [layers.layer1, layers.layer2], name: "scene 5"},
};

scene = {
    lat: `float number`,  // the latitude of the center point of the scene.
    lng: `float number`,  // the longitude of the center point of the scene.
    zoom: `integer`,      // the zooming level of the map scene.
    layers: `array`,      // the array of layers to add on.
    name: `string`,       // the name of the scene. This name will be used in the navwidget and/or navbar if any
    script: `function`    // the function to execute at the associated scene.
}
layer = {
    layer: `Leaflet Layer`,
    legend: `A legend patch html`
}

$('#storymap').storymap({
    scenes: scenes,
    layers: layers,
    baselayer: layers.layer3,
    legend: true,
    loader: true,
    flyto: false,
    credits: "Built with <i class='material-icons' style='color: red; font-size: 10px;'>favorite</i> from Bo Zhao",
    scalebar: true,
    scrolldown: false,
    progressline: true,
    navwidget: true,
    createMap: function () {
    var map = L.map($(".storymap-map")[0], {zoomControl: false}).setView([44, -120], 7);
    basemap = this.baselayer.layer.addTo(map);
    return map;
}
});
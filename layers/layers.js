ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32618").setExtent([492324.066499, 1095403.252234, 498633.462230, 1098420.257177]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Predios_10_Ha_1 = new ol.format.GeoJSON();
var features_Predios_10_Ha_1 = format_Predios_10_Ha_1.readFeatures(json_Predios_10_Ha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Predios_10_Ha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_10_Ha_1.addFeatures(features_Predios_10_Ha_1);
var lyr_Predios_10_Ha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_10_Ha_1, 
                style: style_Predios_10_Ha_1,
                popuplayertitle: 'Predios_10_Ha',
                interactive: true,
                title: '<img src="styles/legend/Predios_10_Ha_1.png" /> Predios_10_Ha'
            });
var format_Predio_Tolima_Medida_2 = new ol.format.GeoJSON();
var features_Predio_Tolima_Medida_2 = format_Predio_Tolima_Medida_2.readFeatures(json_Predio_Tolima_Medida_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Predio_Tolima_Medida_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_Tolima_Medida_2.addFeatures(features_Predio_Tolima_Medida_2);
var lyr_Predio_Tolima_Medida_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_Tolima_Medida_2, 
                style: style_Predio_Tolima_Medida_2,
                popuplayertitle: 'Predio_Tolima_Medida',
                interactive: true,
                title: '<img src="styles/legend/Predio_Tolima_Medida_2.png" /> Predio_Tolima_Medida'
            });
var group_Tolima = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Tolima'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Predios_10_Ha_1.setVisible(true);lyr_Predio_Tolima_Medida_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Predios_10_Ha_1,lyr_Predio_Tolima_Medida_2];
lyr_Predios_10_Ha_1.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'Nombre': 'Nombre', });
lyr_Predio_Tolima_Medida_2.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', });
lyr_Predios_10_Ha_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Nombre': '', });
lyr_Predio_Tolima_Medida_2.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', });
lyr_Predios_10_Ha_1.set('fieldLabels', {'id': 'no label', 'Área': 'inline label - always visible', 'Nombre': 'inline label - visible with data', });
lyr_Predio_Tolima_Medida_2.set('fieldLabels', {'Id': 'hidden field', 'Area': 'inline label - always visible', });
lyr_Predio_Tolima_Medida_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
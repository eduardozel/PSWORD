var jpegConfig = new JPEGSaveOptions();
//jpegConfig.quality = 10;
jpegConfig.optimized = true;

var options = new ExportOptionsSaveForWeb();
options.quality = 100;
options.format = SaveDocumentType.JPEG;
options.optimized = true;


var L0 = app.activeDocument.layers.getByName('L0');
var grpFace = app.activeDocument.layerSets.getByName('face');
var layerRef = grpFace.artLayers;
for ( i=0; i<layerRef.length;i++) {
  layerRef[i].visible = false;
};
for ( i=0; i<layerRef.length;i++) {
  app.activeDocument.activeLayer = L0;
  var savedState = app.activeDocument.activeHistoryState;
  layerRef[i].visible = true;
  activeDocument.mergeVisibleLayers();

  var filename = 'H:\\des\\img\\'+'monetka'+('0'+i).slice(-2)+'.jpg';
  var file = File(filename);
  app.activeDocument.exportDocument(  file, ExportType.SAVEFORWEB, options );

 
  var jfilename = 'H:/des/img/'+'jetka'+('0'+i).slice(-2)+'.jpg';
  var file = File(jfilename);
  app.activeDocument.saveAs( file, jpegConfig,  true );

  app.activeDocument.activeHistoryState = savedState;
  layerRef[i].visible = false;
}; // for
import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function(context) {
  var document = sketch.getSelectedDocument();
  var selection = document.selectedLayers;
  selection.forEach(layer => {
    console.log("type ===",layer.type ,layer);
    if (layer.type === "SymbolInstance") {
      var group = layer.detach({
        recursively: true,
      })
      console.log("完成！！！");
      
    }
  })
 
}
// Select color input
// Select size input
var h =1;
var w =1;
var c;
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(ev){
  h =$('#inputHeight').val();
  w =$('#inputWeight').val();
  ev.preventDefault();

  makeGrid();
})
function makeGrid(){
  clearGrid();
  var table=document.getElementById('pixelCanvas');

  for(var i=0; i<h;i++){
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML="_";
    for(var j=0;j<w;j++){
      var cell =row.insertCell(0);
    }


};
function clearGrid(){
  for(var i=0;i<h;i++){

      if($('#pixelCanvas tr').length>0){
    var table=document.getElementById('pixelCanvas').deleteRow(0);
};
};
};

};

$('#pixelCanvas').click(function(evt){
  let color = $('#colorPicker').val();
  $(evt.target).css('background-color', color);

});

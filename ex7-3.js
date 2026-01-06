function calcBMI(){
  var h = Number(document.getElementById('input1').value) / 100;
  var w = Number(document.getElementById('input2').value);
  alert(w / (h * h));
}

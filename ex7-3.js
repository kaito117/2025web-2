function BMI(){
  var h = Number(document.getElementById('input3').value) / 100;
  var w = Number(document.getElementById('input4').value);
  alert(w / (h * h));
}

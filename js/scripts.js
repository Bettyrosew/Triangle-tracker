function measurements() {
  var side1=document.getElementById("length1").value;
  var side2=document.getElementById("length2").value;
  var side3=document.getElementById("length3").value;
  var inputArray=[parseInt(side1),parseInt(side2),parseInt(side3)]
  if(inputArray[0]==inputArray[1]&&inputArray[1]==inputArray[2]) {
    alert('Equilateral Triangle');
  }else if(inputArray[0]==inputArray[1]||inputArray[1]==inputArray[2]||inputArray[0]==inputArray[2]) {
    alert('Isosceles Triangle');
  }
}

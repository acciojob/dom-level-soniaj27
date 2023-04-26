//your JS code here. If required.
var c = document.getElementbyId('level').value;
var c = document.getElementById("level");
var level = 0;
while (c.parentNode) {
  level++;
  c = c.parentNode;
}
alert("DOM level of #level:",level);
var message = "The level of the element is: " + level;
alert(message);
var name;
var today = new Date();
var christmas = new Date("12/25/2020");

function results () {
  name = document.getElementById('input').value;
  console.log(name);
  var count = name.length;
  var difference = christmas.getTime() - today.getTime();
  var daysDifference = difference  / (1000 * 3600 * 24);
  var names = ["John","Calvin", "Lebron", "Chris", "Nyjah","Busta", "Huey", "Riley", "Goku", "Bloop"];
  var ranName = names[Math.floor(Math.random() * names.length)]; 
  var total = 0;
    for(var i = 0; i < name.length; i++) {
          total = total + (name.toLowerCase().charCodeAt(i) - 96);
    }
  console.log(total);
  var newEl = document.getElementById("display").innerHTML = '<p> Welome ' + name + '</p> <p> Letters in name: ' + count + '</p> <p> Days Until Christmas: ' + daysDifference.toPrecision(3) + '</p><p> Random Name: ' + ranName + '</p><p> Sum of Letters: ' + total + '</p>';
}

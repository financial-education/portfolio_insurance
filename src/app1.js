function myJsFunction()
{
    var y1 = parseFloat(document.getElementById('myRange').value);
    var d1 = (Math.log(y1 / 50) + (.01 + (.2 * .2) / 2) * 1) / (.2 * 1)
    var delta =  // need js equiv of delta.p <- function(){pnorm(d1()) - 1}
    var gamma =   //gamma <- function(){dnorm(d1()) / (stock * vol * sqrt(time))}
    document.getElementById("out1").innerHTML = Value.toFixed(2);
    document.getElementById("out2").innerHTML = CFs.toFixed(2);
    // document.getElementById("out0").innerHTML = y1.toFixed(2);

}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 

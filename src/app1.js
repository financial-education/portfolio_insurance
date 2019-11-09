//the below cdf and erf functions are from stackoverflow here: https://stackoverflow.com/questions/14846767/std-normal-cdf-normal-cdf-or-error-function
function cdf(x, mean, variance) {
  return 0.5 * (1 + erf((x - mean) / (Math.sqrt(2 * variance))));
}

function erf(x) {
  // save the sign of x
  var sign = (x >= 0) ? 1 : -1;
  x = Math.abs(x);

  // constants
  var a1 =  0.254829592;
  var a2 = -0.284496736;
  var a3 =  1.421413741;
  var a4 = -1.453152027;
  var a5 =  1.061405429;
  var p  =  0.3275911;

  // A&S formula 7.1.26
  var t = 1.0/(1.0 + p*x);
  var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y; // erf(-x) = -erf(x);
}




function myJsFunction()
{
    var y1 = parseFloat(document.getElementById('myRange').value);
    var d1 = (Math.log(y1 / 50) + (.01 + (.2 * .2) / 2) * 1) / (.2 * 1);
    var delta =  (1 + erf(d1 / Math.sqrt(2))) / 2 - 1; // need js equiv of delta.p <- function(){pnorm(d1()) - 1}
    var gamma =   //gamma <- function(){dnorm(d1()) / (stock * vol * sqrt(time))}
    document.getElementById("out1").innerHTML = delta.toFixed(2);
//    document.getElementById("out2").innerHTML = CFs.toFixed(2);
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

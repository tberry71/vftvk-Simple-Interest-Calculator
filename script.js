function compute() {
    var principal = document.getElementById("principal").value;
    if (principal == "" || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
      }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var result=document.getElementById("result");
    result.innerHTML =
    "If you deposit " +
    "<mark class='highlight'>" +
    principal +
    "</mark>." +
    ", <br> at an interest rate of " +
    "<mark class='highlight'>" +
    rate +
    "</mark>%." +
    "<br> You will receive an amount of " +
    "<mark class='highlight'>" +
    interest +
    "</mark>" +
    ", <br> in the year " +
    "<mark class='highlight'>" +
    year +
    "</mark>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
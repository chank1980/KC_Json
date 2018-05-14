/* ----------------------------------------------------------------------------------------
    THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

var manufacturer = document.getElementById("manufacturer").addEventListener('change', loadData);

function loadData(){
    // var xhr = new XMLHttpRequest();
    //xhr.open("GET", github link);
    //xhr

   // var manufactureStored = manufacturer.options[manufacturer.selectIndex].value;
    var o = document.getElementById("manufacturer");
    var optionInd = o.options[o.selectedIndex].value;

    console.log(optionInd);
    //console.log(o);

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", "https://raw.githubusercontent.com/Auwais/JSON-AJAX-API-/master/LuxuryCarsLearner/expensiveLuxuryCars.json", true);

    //AJAX response
    ourRequest.onload = function() {

        if(ourRequest.readyState ==4 && ourRequest.status == 200){
            //parsing our data once the page is ready
            var myData = JSON.parse(ourRequest.responseText);

            if(optionInd===""){

                var hideText = document.getElementsByClassName("data");

                for (var i=0; i<hideText.length; i++) {
                    hideText[i].innerHTML = "";
                }

            } else {

                document.getElementById("manufacturerC").innerHTML =myData.data[optionInd].manufacturer;
                document.getElementById("modelC").innerHTML =myData.data[optionInd].model;
                document.getElementById("priceC").innerHTML =myData.data[optionInd].price;
                document.getElementById("descriptionC").innerHTML =myData.data[optionInd].description;
                document.getElementById("videoC").innerHTML ='<iframe width="auto" height ="auto" src="' +myData.data[optionInd].video + '" frameborder =0> </iframe>';
                document.getElementById("imgC").innerHTML = '<img src=' +myData.data[optionInd].img+ ' alt="carImage" />'

            }


        } else {

            document.getElementById("messageAlert").innerHTML = "We have successfully connected to the server however, there is an ERROR";
        };



    }


         ourRequest.send();
}














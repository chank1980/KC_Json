var APIkey="d87db2504613d2f495e9058b1125a97f";

var _button = document.getElementById("myButton");
_button.addEventListener('click' getWeather);

function getWeather(){
    var userCity = document.getElementById("theCity").value;

    var APICall = "api.openweathermap.org/data/2.5/forecast/daily?q" +userCity+,{country code}&cnt={cnt}"
    //"&units=metric&cnt=7&APPID="my key"

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET",  APICall, true);

    ourRequest.send();

    ourRequest.onload = function(){

        if(ourRequest.readyState==4 && ourRequest.status==200){

            var myData = JSON.parse(ourRequest.responseText);

            document.getElementById("highToday").innerHTML = myData.list[0].temp_max;
            document.getElementById("lowToday").innerHTML = myData.list[0].temp_min;
            document.getElementById("dayToday").innerHTML = myData.list[0].weather[0].description;
        }
    }
}

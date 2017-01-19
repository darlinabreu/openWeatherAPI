$(document).ready(function() {
    $("#go").click(function() {
        var name = $("#search").val();
        var part1 = "https://api.apixu.com/v1/current.json?key=2cd86bbae0d64758aa6131339171201&q=";
        var url = part1 + name;
        $.getJSON(url, function(response) {
            $("#weather-results").append('The temp is' + " " + response.current.temp_f + "<br>");
            $("#weather-results").append("The wind speed is" + ' '+ response.current.wind_mph + "<br>");
            $("#weather-results").append("The humidity is" + " " + response.current.humidity + "<br>");
         $("#weather-results").css('background-color', 'red');
        });
    });
});





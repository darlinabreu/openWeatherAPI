$(document).ready(function() {
    $("#go").click(function() {
        var name = $("#search").val();
        var part1 = "https://api.apixu.com/v1/current.json?key=2cd86bbae0d64758aa6131339171201&q=";
        var url = part1 + name;
        $.getJSON(url, function(response) {
            //$("#weather-results").append(response.current.temp_f);
            //$("#weather-results").append(response.current.wind_mph);
            //$("#weather-results").append(response.current.humidity);
            var humidity = response.current.humidity;
            //console.log(humid)
            var temp = response.current.temp_f
            //console.log(weather)
            var wind = response.current.wind_mph
            //console.log(wind)
            $("#weather-results").append("<li>" + "The wind speed is" + " " + wind + "</li>")
            $("#weather-results").append("<li>" + "The weather is" + " " + temp + "</li>")
            $("#weather-results").append("<li>" + "The humidity is" + " " + humidity + "</li>")

        });
    });
});
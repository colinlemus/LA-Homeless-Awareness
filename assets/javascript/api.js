var $zipCode = $("#zipCode");
var $houseIncome = $("#houseIncome");
var containZip_Code = false;
var averageIncome;
var LADIPScore;
var averageAmount = 0;
var averageScore = 0;

function pullInformation() {
    var arcQueryURL = "https://services5.arcgis.com/7nsPwEMP38bSkCjy/arcgis/rest/services/LAIDP/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Zip_Code%2C+F7indicato&returnGeometry=false&returnCentroid=false&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    var censusQueryURL = "https://api.census.gov/data/2014/acs5?get=B19013_001E&for=zip%20code%20tabulation%20area:" + $zipCode.val() + "&key=0b143a7eba1f8162e05b434ad926bc86a293e59b";
    
    $.ajax({
        url: censusQueryURL,
        method: "GET",
        async: false
    }).then(function(response) {
        averageIncome = response[1][0];
        console.log(response);
    });

    $.ajax({
        url: arcQueryURL,
        method: "GET",
        async: false
    }).then(function(response) {
        response = JSON.parse(response);
        zipCode(response);
    });

    LADIPScore = (averageScore / averageAmount);
    console.log(averageAmount);
    console.log(averageScore);
    console.log(LADIPScore);
    console.log(averageIncome);
    console.log(isNaN(LADIPScore));
    if(isNaN(LADIPScore)) {
        $(".level-risk").removeClass("display-none");
        $("#total-risk-level").append("There is not enough data to accurately calculate your LADIP Score with your zip code.");
    }
}

function zipCode(response) {
    for(var i = 0; i < response.features.length; i++) {
        var LADIP = response.features[i];
        if($zipCode.val() == LADIP.attributes.Zip_Code) {
            containZip_Code = true;
            if(LADIP.attributes.F7indicato == 0) {
                return;
            }
            
            averageScore = averageScore + LADIP.attributes.F7indicato;
            averageAmount++;
        } 
    }
}

//.377> + 4
//.284 - .377 + 3
//.203 - .284 + 2
//.162 - .203 + 1
//.162< 0
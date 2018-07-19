var $zipCode = $("#zipCode");
var $houseIncome = $("#houseIncome");

function pullInformation() {
    var arcQueryURL = "https://services5.arcgis.com/7nsPwEMP38bSkCjy/arcgis/rest/services/LAIDP/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Zip_Code%2C+F7indicato&returnGeometry=false&returnCentroid=false&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
    var censusQueryURL = "https://api.census.gov/data/2014/acs5?get=B19013_001E&for=zip%20code%20tabulation%20area:" + $zipCode.val() + "&key=0b143a7eba1f8162e05b434ad926bc86a293e59b";
    
    $.ajax({
        url: arcQueryURL,
        method: "GET"
    }).then(function(response) {
        response = JSON.parse(response);
        console.log(response);
    });
    
    $.ajax({
        url: censusQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
}
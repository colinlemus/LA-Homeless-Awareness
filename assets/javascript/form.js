var $zipCode = $("#zipCode");
var $houseIncome = $("#houseIncome");
var $militaryService = $("#militaryService");
var $PTSD = $("#PTSD");
var $areaHelp = $("#areaHelp");
var $healthIssues = $("#healthIssues");
var $debtAmount = $("#debtAmount");
var $rent = $("#rent");
var $addiction = $("#addiction");
var $jobLoss = $("#jobLoss");
var $mentalHealthIssues = $("#mentalHealthIssues");
var $homeless = $("#homeless");
var $fosterCare = $("#fosterCare");
var $victimCrime = $("#victimCrime");
var $submitButton = $("#submitButton");
var totalRiskScore;

$submitButton.on("click", function(event) {
    event.preventDefault();
    if($militaryService.val() === "Yes") {
        totalRiskScore++;
    }

    if($areaHelp.val() === "") {
        totalRiskScore++;
    }
    if($healthIssues.text() === "Yes") {
        totalRiskScore++;
    }
    if($fosterCare.val() === "Yes") {
        totalRiskScore++;
    }
    if($victimCrime.val() === "Yes") {
        totalRiskScore++;
    }

    if($PTSD.val() === "Yes") {
    	totalRiskScore = totalRiskScore + 2;
    }

    if($debtAmount.val() === "Yes") {
        totalRiskScore = totalRiskScore + 2;
    }

    if($rent.val() === "Yes") {
        totalRiskScore = totalRiskScore + 2;
    }

    if($addiction.val() === "Yes") {
        totalRiskScore = totalRiskScore + 2;
    }

    if($jobLoss.val() === "Yes") {
        totalRiskScore = totalRiskScore + 2;
    }

    if($mentalHealthIssues.val() === "Yes") {
        totalRisk = totalRisk + 2;
    }

    if($homeless.val() === "Yes") {
        totalRiskScore = totalRiskScore + 2;
	}

	var zipCodeQueryURL = "https://services5.arcgis.com/7nsPwEMP38bSkCjy/arcgis/rest/services/LAIDP/FeatureServer/0/query?outFields=F7indicato&where=Zip_Code=" + $zipCode.val();
	var censusQueryURL = "https://api.census.gov/data/2014/acs5?get=B19013_001E&for=zip%20code%20tabulation%20area:" + $zipCode.val() + "&key=0b143a7eba1f8162e05b434ad926bc86a293e59b";
   
	$.ajax({
		url: zipCodeQueryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response);
	});

	$.ajax({
		url: censusQueryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response);
	});
});


function onStart() {
    totalRiskScore = 0;
}

onStart();
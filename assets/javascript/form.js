var $zipCode = $("#zipCode");
var $houseIncome = $("#houseIncome");
var $militaryExpierence = $("#militaryExpierence");
var $PTSD = $("#PTSD");
var $areaHelp = $("#areaHelp");
var $healthIssues = $("#healthIssues");
var $debt = $("#debt");
var $rent = $("#rent");
var $addiction = $("#addiction");
var $jobLoss = $("#jobLoss");
var $mentalHealthIssues = $("#mentalHealthIssues");
var $homeless = $("#homeless");
var $fosterCare = $("#fosterCare");
var $victimCrime = $("#victimCrime");
var $submitButton = $("#submitButton");
var totalRiskScore;

$submitButton.on("click", function() {
    if($militaryExpierence.val() === "Yes") {
        totalRisk++;
    }

    if($areaHelp.val() === "") {
        totalRisk++;
    }
    if($healthIssues.val() === "Yes") {
            totalRisk++;
    }
    if($fosterCare.val() === "Yes") {
            totalRisk++;
    }
    if($victimCrime.val() === "Yes") {
            totalRisk++;
    }

    if($PTSD.val() === "Yes") {
        totalRisk = totalRisk + 2;
    }

    if($debt.val() === "Yes") {
        totalRisk = totalRisk + 2;
    }

    if($rent.val() === "Yes") {
            totalRisk = totalRisk + 2;
    }

    if($addiction.val() === "Yes") {
            totalRisk = totalRisk + 2;
    }

    if($jobLoss.val() === "Yes") {
            totalRisk = totalRisk + 2;
    }

    if($mentalHealthIssues.val() === "Yes") {
            totalRisk = totalRisk + 2;
    }

    if($homeless.val() === "Yes") {
            totalRisk = totalRisk + 2;
        }
});


function onStart() {
    totalRiskScore = 0;
}

onStart();
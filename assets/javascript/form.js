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

$submitButton.on("click", function (event) {
    event.preventDefault();
    if ($militaryService.val() == 0) {
        totalRiskScore++;
    }

    if ($areaHelp.val() == 0) {
        totalRiskScore++;
    }

    if ($healthIssues.val() == 0) {
        totalRiskScore++;
    }

    if ($fosterCare.val() == 0) {
        totalRiskScore++;
    }

    if ($victimCrime.val() == 0) {
        totalRiskScore++;
    }

    if ($PTSD.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    if ($debtAmount.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    if ($rent.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    if ($addiction.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    if ($jobLoss.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    if ($mentalHealthIssues.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    if ($homeless.val() == 0) {
        totalRiskScore = totalRiskScore + 2;
    }

    pullInformation();
});

function onStart() {
    totalRiskScore = 0;
}

onStart();
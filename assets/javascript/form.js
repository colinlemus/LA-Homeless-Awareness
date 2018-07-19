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

<<<<<<< HEAD
$submitButton.on("click", function(event) {
    event.preventDefault();
    pullInformation();
    
    if($militaryService.val() == 0) {
=======
$submitButton.on("click", function (event) {
    event.preventDefault();
    if ($militaryService.val() == 0) {
>>>>>>> f6ee7252e7dc5b219e0bcb42cac02d36af75f258
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
<<<<<<< HEAD

    if($houseIncome.val() < averageIncome) {
        totalRiskScore = totalRiskScore + 3;
    }

    if(LADIPScore > .377) {
        totalRiskScore = totalRiskScore + 4;
    }

    if(LADIPScore <= .377 && LADIPScore > .284) {
        totalRiskScore = totalRiskScore + 3;
    }

    if(LADIPScore <= .284 && LADIPScore > .203) {
        totalRiskScore = totalRiskScore + 2;
    }

    if(LADIPScore <= .203 && LADIPScore > .162) {
        totalRiskScore = totalRiskScore + 1;
    }

    if(totalRiskScore >= 20) {

    }

    if(totalRiskScore < 20 && totalRiskScore >= 15) {

    }    
    
    if(totalRiskScore < 15 && totalRiskScore >= 10) {

    }

    if(totalRiskScore < 10 && totalRiskScore >= 4) {

    }

    if(totalRiskScore < 4) {

    }

    console.log(totalRiskScore);
=======

    pullInformation();
>>>>>>> f6ee7252e7dc5b219e0bcb42cac02d36af75f258
});

// 20-26 Very High
// 15-19 High
// 10-14 Moderate
// 4-9 Low
// 0-3 Very Low 

function onStart() {
    totalRiskScore = 0;
}

onStart();
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

    if(totalRiskChecks() == true) {
        pullInformation();
        totalRiskValues();
        answeredYes();

        if(totalRiskScore >= 20) {
            $(".level-risk").removeClass("display-none");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv1.html("Please refer to any links provided as they will help protect you from displacement by getting you the help you need for any of the questions you answered 'Yes' to.");
            $newDiv2.html("You have a very high risk of being displaced from you home.").css({
                "color": "red"
            });
            $("#total-risk-level").append($newDiv1, $newDiv2);
        }

        if(totalRiskScore < 20 && totalRiskScore >= 15) {
            $(".level-risk").removeClass("display-none");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv1.html("Please refer to any links provided as they will help protect you from displacement by getting you the help you need for any of the questions you answered 'Yes' to.");
            $newDiv2.html("You have a high risk of being displaced from you home.").css({
                "color": "#F08080"
            });
            $("#total-risk-level").append($newDiv1, $newDiv2);
        }    

        if(totalRiskScore < 15 && totalRiskScore >= 10) {
            $(".level-risk").removeClass("display-none");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv1.html("Please refer to any links provided as they will help protect you from displacement by getting you the help you need for any of the questions you answered 'Yes' to.");
            $newDiv2.html("You have a moderate risk of being displaced from you home.").css({
                "color": "#ECDD00"
            });
            $("#total-risk-level").append($newDiv1, $newDiv2);
        }

        if(totalRiskScore < 10 && totalRiskScore >= 4) {
            $(".level-risk").removeClass("display-none");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv1.html("Please refer to any links provided as they will help protect you from displacement by getting you the help you need for any of the questions you answered 'Yes' to.");
            $newDiv2.html("You have a low risk of being displaced from you home.").css({
                "color": "green"
            });
            $("#total-risk-level").append($newDiv1, $newDiv2);
        }

        if(totalRiskScore < 4) {
            $(".level-risk").removeClass("display-none");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv1.html("Please refer to any links provided as they will help protect you from displacement by getting you the help you need for any of the questions you answered 'Yes' to.");
            $newDiv2.html("You have a very low risk of being displaced from you home.").css({
                "color": "#98FB98"
            });
            $("#total-risk-level").append($newDiv1, $newDiv2);
        }

        $submitButton.addClass("display-none");
        console.log(totalRiskScore);
    }
});

// 20-26 Very High
// 15-19 High
// 10-14 Moderate
// 4-9 Low
// 0-3 Very Low 

function totalRiskValues() {
    if($militaryService.val() == 0) {
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
}

function totalRiskChecks() {
    console.log($zipCode.val() == "null");
    console.log($zipCode.val()[0] != "9");
    console.log($zipCode.val().length);
    console.log(($zipCode.val().substr(1, 1)));
    console.log(($zipCode.val().substr(1, 1) == 1) || $zipCode.val().substr(1, 1) == 0);
    if($zipCode.val() == "null"
    || $zipCode.val().length != "5" 
    || $zipCode.val()[0] != "9" 
    // || ($zipCode.val()[1] >= "0" && $zipCode.val()[1] <= "1")) {
    ) {
        $("#zipCodeDiv").html("* You must fill out this part of the form, or enter a zip code in Los Angeles.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#zipCodeDiv").html("");
    }

    if($houseIncome.val() == "null") {
        $("#houseIncomeDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#houseIncomeDiv").html("");
    }

    if($militaryService.val() == "null") {
        $("#militaryServiceDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });

        return false;
    } else {
        $("#militaryServiceDiv").html("");
    }

    if($PTSD.val() == "null") {
        $("#PTSDDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });

        return false;
    } else {
        $("#PTSDDiv").html("");
    }

    if($areaHelp.val() == "null") {
        $("#areaHelpDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });

        return false;
    } else {
        $("#areaHelpDiv").html("");
    }

    if($healthIssues.val() == "null") {
        $("#healthIssuesDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#healthIssuesDiv").html("");
    }

    if($debtAmount.val() == "null") {
        $("#debtAmountDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#debtAmountDiv").html("");
    }

    if($rent.val() == "null") {
        $("#rentDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#rentDiv").html("");
    }

    if($addiction.val() == "null") {
        $("#addictionDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#addictionDiv").html("");
    }

    if($jobLoss.val() == "null") {
        $("#jobLossDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#jobLossDiv").html("");
    }

    if($mentalHealthIssues.val() == "null") {
        $("#mentalHealthIsssuesDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#mentalHealthIsssuesDiv").html("");
    }

    if($homeless.val() == "null") {
        $("#homelessDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#homelessDiv").html("");
    }

    if($fosterCare.val() == "null") {
        $("#fosterCareDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#fosterCareDiv").html("");
    }

    if($victimCrime.val() == "null") {
        $("#victimCrimeDiv").html("* You must fill out this part of the form.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    } else {
        $("#victimCrimeDiv").html("");
    }

    return true;
}

function answeredYes() {
    if($militaryService.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv3 = $("<div>");
        $newDiv1.html("<a href='https://www.211la.org/veteran-services'>https://www.211la.org/veteran-services</a>");
        $newDiv2.html("<a href='http://dpss.lacounty.gov/wps/portal/dpss/main/programs-and-services/veterans-and-us-military-resources/'>http://dpss.lacounty.gov/wps/portal/dpss/main/programs-and-services/veterans-and-us-military-resources/</a>");
        $newDiv3.html("<a href='http://mva.lacounty.gov/'>http://mva.lacounty.gov/</a>");
        $("#militaryServiceDiv").append($newDiv1, $newDiv2, $newDiv3).css({
            "color": "green",
            "margin-bottom": 12
        });
    } else {
        $("#militaryServiceDiv").html("");
    }

    if($PTSD.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv1.html("<a href='https://www.va.gov/directory/guide/state_ptsd.cfm?STATE=CA'>https://www.va.gov/directory/guide/state_ptsd.cfm?STATE=CA</a>");
        $newDiv2.html("<a href='https://www.psychologytoday.com/us/therapists/trauma-and-ptsd/ca/los-angeles'>https://www.psychologytoday.com/us/therapists/trauma-and-ptsd/ca/los-angeles</a>");
        $("#PTSDDiv").append($newDiv1, $newDiv2).css({
            "color": "green",
            "margin-bottom": 12
        });
    } else {
        $("#PTSDDiv").html("");
    }

    if($areaHelp.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv1.html("<a href='https://connect2affect.org/'>https://connect2affect.org/</a>");
        $newDiv2.html("<a href='https://www.mptf.com/help/'>https://www.mptf.com/help/</a>");
        $("#areaHelpDiv").append($newDiv1, $newDiv2).css({
            "margin-bottom": 12
        });
    } else {
        $("#areaHelpDiv").html("");
    }

    if($healthIssues.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv1.html("<a href='http://dhs.lacounty.gov/wps/portal/dhs'>http://dhs.lacounty.gov/wps/portal/dhs</a>");
        $newDiv2.html("<a href='http://dpss.lacounty.gov/wps/portal/dpss/main/programs-and-services/health-care/'>http://dpss.lacounty.gov/wps/portal/dpss/main/programs-and-services/health-care/</a>");
        $("#healthIssuesDiv").append($newDiv1, $newDiv2).css({
            "margin-bottom": 12
        });
    } else {
        $("#healthIssuesDiv").html("");
    }

    if($debtAmount.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv1.html("<a href='https://www.fdic.gov/consumers/consumer/moneysmart/adult.html'>https://www.fdic.gov/consumers/consumer/moneysmart/adult.html</a>");
        $("#debtAmountDiv").append($newDiv1).css({
            "margin-bottom": 12
        });
    } else {
        $("#debtAmountDiv").html("");
    }

    if($rent.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv3 = $("<div>");
        $newDiv1.html("<a href='https://www.nfcc.org/'>https://www.nfcc.org/</a>");
        $newDiv2.html("<a href='https://www.consumer.ftc.gov/articles/0150-coping-debt#self-help'>https://www.consumer.ftc.gov/articles/0150-coping-debt#self-help</a>");
        $newDiv3.html("<a href='http://articles.latimes.com/2008/dec/28/business/fi-consumer28'>http://articles.latimes.com/2008/dec/28/business/fi-consumer28</a>");
        $("#rentDiv").append($newDiv1, $newDiv2, $newDiv3).css({
            "margin-bottom": 12
        });
    } else {
        $("#rentDiv").html("");
    }

    if($addiction.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv3 = $("<div>");
        $newDiv1.html("<a href='https://training4aod.org/'>https://training4aod.org/</a>");
        $newDiv2.html("<a href='https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/social-inclusion'>https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/social-inclusion</a>");
        $newDiv3.html("<a href='https://www.samhsa.gov/find-help/national-helpline'>https://www.samhsa.gov/find-help/national-helpline</a>");
        $("#addictionDiv").append($newDiv1, $newDiv2, $newDiv3).css({
            "margin-bottom": 12
        });
    } else {
        $("#addictionDiv").html("");
    }

    if($jobLoss.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv1.html("<a href='http://ewddlacity.com/index.php/employment-services/adults-age-24-and-older/worksource-centers'>http://ewddlacity.com/index.php/employment-services/adults-age-24-and-older/worksource-centers</a>");
        $newDiv2.html("<a href='http://www.letc.com/'>http://www.letc.com/</a>");
        $("#jobLossDiv").append($newDiv1, $newDiv2).css({
            "margin-bottom": 12
        });
    } else {
        $("#jobLossDiv").html("");
    }

    if($mentalHealthIssues.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv3 = $("<div>");
        $newDiv1.html("<a href='http://dmh.lacounty.gov/wps/portal/dmh'>http://dmh.lacounty.gov/wps/portal/dmh</a>");
        $newDiv2.html("<a href='https://www.mentalhealth.gov/get-help/immediate-help'>https://www.mentalhealth.gov/get-help/immediate-help</a>");
        $newDiv3.html("<a href='https://www.mentalhealth.gov/talk/people-mental-health-problems'>https://www.mentalhealth.gov/talk/people-mental-health-problems</a>");
        $("#mentalHealthIsssuesDiv").append($newDiv1, $newDiv2, $newDiv3).css({
            "margin-bottom": 12
        });
    } else {
        $("#mentalHealthIsssuesDiv").html("");
    }

    if($homeless.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv2 = $("<div>");
        $newDiv1.html("<a href='https://www.lahsa.org/get-help'>https://www.lahsa.org/get-help</a>");
        $newDiv2.html("<a href='https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/housing-shelter'>https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/housing-shelter</a>");
        $("#homelessDiv").append($newDiv1, $newDiv2).css({
            "margin-bottom": 12
        });
    } else {
        $("#homelessDiv").html("");
    }

    if($fosterCare.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv1.html("<a href='https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/mentoring-foster-care-youth'>https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/mentoring-foster-care-youth</a>");
        $("#fosterCareDiv").append($newDiv1).css({
            "margin-bottom": 12
        });
    } else {
        $("#fosterCareDiv").html("");
    }

    if($victimCrime.val() == 0) {
        $newDiv1 = $("<div>");
        $newDiv1.html("<a href='https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/trauma'>https://www.samhsa.gov/homelessness-programs-resources/hpr-resources/trauma</a>");
        $("#victimCrimeDiv").append($newDiv1).css({
            "margin-bottom": 12
        });
    } else {
        $("#victimCrimeDiv").html("");
    }
}

function onStart() {
    totalRiskScore = 0;
}

onStart();
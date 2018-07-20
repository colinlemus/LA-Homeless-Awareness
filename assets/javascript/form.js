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
        if(averageScore == "") {
            return
        }
        totalRiskValues();
        answeredYes();

        if(totalRiskScore >= 20) {
            $(".level-risk").removeClass("display-none");
            $("#total-risk-level").html("");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv3 = $("<div>");
            $newDiv1.html("Based on the information provided, the risk of displacement from your home is:");
            $newDiv2.html("VERY HIGH").css({
                "color": "red"
            });
            $newDiv3.html("Please refer to any of the following links to connect with helpful resources available in your area.");
            $("#total-risk-level").append($newDiv1, $newDiv2, $newDiv3);
        }

        if(totalRiskScore < 20 && totalRiskScore >= 15) {
            $(".level-risk").removeClass("display-none");
            $("#total-risk-level").html("");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv3 = $("<div>");
            $newDiv1.html("Based on the information provided, the risk of displacement from your home is:");
            $newDiv2.html("HIGH").css({
                "color": "#F08080"
            });
            $newDiv3.html("Please refer to any of the following links to connect with helpful resources available in your area.");
            $("#total-risk-level").append($newDiv1, $newDiv2, $newDiv3);
        }    

        if(totalRiskScore < 15 && totalRiskScore >= 10) {
            $(".level-risk").removeClass("display-none");
            $("#total-risk-level").html("");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv3 = $("<div>");
            $newDiv1.html("Based on the information provided, the risk of displacement from your home is:");
            $newDiv2.html("MODERATE").css({
                "color": "#ECDD00"
            });
            $newDiv3.html("Please refer to any of the following links to connect with helpful resources available in your area.");
            $("#total-risk-level").append($newDiv1, $newDiv2, $newDiv3);
        }

        if(totalRiskScore < 10 && totalRiskScore >= 4) {
            $(".level-risk").removeClass("display-none");
            $("#total-risk-level").html("");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv3 = $("<div>");
            $newDiv1.html("Based on the information provided, the risk of displacement from your home is:");
            $newDiv2.html("LOW").css({
                "color": "green"
            });
            $newDiv3.html("Please refer to any of the following links to connect with helpful resources available in your area.");
            $("#total-risk-level").append($newDiv1, $newDiv2, $newDiv3);
        }

        if(totalRiskScore < 4) {
            $(".level-risk").removeClass("display-none");
            $("#total-risk-level").html("");
            $newDiv1 = $("<div>");
            $newDiv2 = $("<div>");
            $newDiv3 = $("<div>");
            $newDiv1.html("Based on the information provided, the risk of displacement from your home is:");
            $newDiv2.html("VERY LOW").css({
                "color": "#98FB98"
            });
            $newDiv3.html("Please refer to any of the following links to connect with helpful resources available in your area.");
            $("#total-risk-level").append($newDiv1, $newDiv2, $newDiv3);
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
    console.log($zipCode.val().length);
    console.log(($zipCode.val().substr(1, 1)));
    console.log(($zipCode.val().substr(1, 1) == 1) || $zipCode.val().substr(1, 1) == 0);
    if($zipCode.val() == "90001"
    || $zipCode.val() == "90002" 
    || $zipCode.val() == "90003"
    || $zipCode.val() == "90004"
    || $zipCode.val() == "90005"
    || $zipCode.val() == "90006"
    || $zipCode.val() == "90007"
    || $zipCode.val() == "90008"
    || $zipCode.val() == "90009"
    || $zipCode.val() == "90010"
    || $zipCode.val() == "90011"
    || $zipCode.val() == "90012"
    || $zipCode.val() == "90013"
    || $zipCode.val() == "90014"
    || $zipCode.val() == "90015"
    || $zipCode.val() == "90016"
    || $zipCode.val() == "90017"
    || $zipCode.val() == "90018"
    || $zipCode.val() == "90019"
    || $zipCode.val() == "90020"
    || $zipCode.val() == "90021"
    || $zipCode.val() == "90022"
    || $zipCode.val() == "90023"
    || $zipCode.val() == "90024"
    || $zipCode.val() == "90025"
    || $zipCode.val() == "90026"
    || $zipCode.val() == "90027"
    || $zipCode.val() == "90028"
    || $zipCode.val() == "90029"
    || $zipCode.val() == "90030"
    || $zipCode.val() == "90031"
    || $zipCode.val() == "90032"
    || $zipCode.val() == "90033"
    || $zipCode.val() == "90034"
    || $zipCode.val() == "90035"
    || $zipCode.val() == "90036"
    || $zipCode.val() == "90037"
    || $zipCode.val() == "90038"
    || $zipCode.val() == "90039"
    || $zipCode.val() == "90040"
    || $zipCode.val() == "90041"
    || $zipCode.val() == "90042"
    || $zipCode.val() == "90043"
    || $zipCode.val() == "90044"
    || $zipCode.val() == "90045"
    || $zipCode.val() == "90046"
    || $zipCode.val() == "90047"
    || $zipCode.val() == "90048"
    || $zipCode.val() == "90049"
    || $zipCode.val() == "90050"
    || $zipCode.val() == "90051"
    || $zipCode.val() == "90052"
    || $zipCode.val() == "90053"
    || $zipCode.val() == "90054"
    || $zipCode.val() == "90055"
    || $zipCode.val() == "90056"
    || $zipCode.val() == "90057"
    || $zipCode.val() == "90058"
    || $zipCode.val() == "90059"
    || $zipCode.val() == "90060"
    || $zipCode.val() == "90061"
    || $zipCode.val() == "90062"
    || $zipCode.val() == "90063"
    || $zipCode.val() == "90064"
    || $zipCode.val() == "90065"
    || $zipCode.val() == "90066"
    || $zipCode.val() == "90067"
    || $zipCode.val() == "90068"
    || $zipCode.val() == "90069"
    || $zipCode.val() == "90070"
    || $zipCode.val() == "90071"
    || $zipCode.val() == "90072"
    || $zipCode.val() == "90073"
    || $zipCode.val() == "90074"
    || $zipCode.val() == "90075"
    || $zipCode.val() == "90076"
    || $zipCode.val() == "90077"
    || $zipCode.val() == "90078"
    || $zipCode.val() == "90079"
    || $zipCode.val() == "90080"
    || $zipCode.val() == "90081"
    || $zipCode.val() == "90082"
    || $zipCode.val() == "90083"
    || $zipCode.val() == "90086"
    || $zipCode.val() == "90087"
    || $zipCode.val() == "90089"
    || $zipCode.val() == "90091"
    || $zipCode.val() == "90093"
    || $zipCode.val() == "90094"
    || $zipCode.val() == "90095"
    || $zipCode.val() == "90099"
    || $zipCode.val() == "90201"
    || $zipCode.val() == "90202"
    || $zipCode.val() == "90209"
    || $zipCode.val() == "90210"
    || $zipCode.val() == "90211"
    || $zipCode.val() == "90212"
    || $zipCode.val() == "90213"
    || $zipCode.val() == "90220"
    || $zipCode.val() == "90221"
    || $zipCode.val() == "90222"
    || $zipCode.val() == "90223"
    || $zipCode.val() == "90224"
    || $zipCode.val() == "90230"
    || $zipCode.val() == "90231"
    || $zipCode.val() == "90232"
    || $zipCode.val() == "90233"
    || $zipCode.val() == "90239"
    || $zipCode.val() == "90240"
    || $zipCode.val() == "90241"
    || $zipCode.val() == "90242"
    || $zipCode.val() == "90245"
    || $zipCode.val() == "90247"
    || $zipCode.val() == "90248"
    || $zipCode.val() == "90249"
    || $zipCode.val() == "90250"
    || $zipCode.val() == "90251"
    || $zipCode.val() == "90254"
    || $zipCode.val() == "90255"
    || $zipCode.val() == "90260"
    || $zipCode.val() == "90261"
    || $zipCode.val() == "90262"
    || $zipCode.val() == "90263"
    || $zipCode.val() == "90264"
    || $zipCode.val() == "90265"
    || $zipCode.val() == "90266"
    || $zipCode.val() == "90267"
    || $zipCode.val() == "90270"
    || $zipCode.val() == "90272"
    || $zipCode.val() == "90274"
    || $zipCode.val() == "90275"
    || $zipCode.val() == "90277"
    || $zipCode.val() == "90278"
    || $zipCode.val() == "90280"
    || $zipCode.val() == "90290"
    || $zipCode.val() == "90291"
    || $zipCode.val() == "90292"
    || $zipCode.val() == "90293"
    || $zipCode.val() == "90294"
    || $zipCode.val() == "90295"
    || $zipCode.val() == "90296"
    || $zipCode.val() == "90301"
    || $zipCode.val() == "90302"
    || $zipCode.val() == "90303"
    || $zipCode.val() == "90304"
    || $zipCode.val() == "90305"
    || $zipCode.val() == "90306"
    || $zipCode.val() == "90307"
    || $zipCode.val() == "90308"
    || $zipCode.val() == "90309"
    || $zipCode.val() == "90310"
    || $zipCode.val() == "90311"
    || $zipCode.val() == "90312"
    || $zipCode.val() == "90401"
    || $zipCode.val() == "90402"
    || $zipCode.val() == "90403"
    || $zipCode.val() == "90404"
    || $zipCode.val() == "90405"
    || $zipCode.val() == "90406"
    || $zipCode.val() == "90407"
    || $zipCode.val() == "90408"
    || $zipCode.val() == "90409"
    || $zipCode.val() == "90410"
    || $zipCode.val() == "90411"
    || $zipCode.val() == "90501"
    || $zipCode.val() == "90502"
    || $zipCode.val() == "90503"
    || $zipCode.val() == "90504"
    || $zipCode.val() == "90505"
    || $zipCode.val() == "90506"
    || $zipCode.val() == "90507"
    || $zipCode.val() == "90508"
    || $zipCode.val() == "90509"
    || $zipCode.val() == "90510"
    || $zipCode.val() == "90601"
    || $zipCode.val() == "90602"
    || $zipCode.val() == "90603"
    || $zipCode.val() == "90604"
    || $zipCode.val() == "90605"
    || $zipCode.val() == "90606"
    || $zipCode.val() == "90607"
    || $zipCode.val() == "90608"
    || $zipCode.val() == "90609"
    || $zipCode.val() == "90610"
    || $zipCode.val() == "90623"
    || $zipCode.val() == "90630"
    || $zipCode.val() == "90631"
    || $zipCode.val() == "90637"
    || $zipCode.val() == "90638"
    || $zipCode.val() == "90639"
    || $zipCode.val() == "90640"
    || $zipCode.val() == "90650"
    || $zipCode.val() == "90651"
    || $zipCode.val() == "90652"
    || $zipCode.val() == "90660"
    || $zipCode.val() == "90661"
    || $zipCode.val() == "90662"
    || $zipCode.val() == "90670"
    || $zipCode.val() == "90671"
    || $zipCode.val() == "90701"
    || $zipCode.val() == "90702"
    || $zipCode.val() == "90703"
    || $zipCode.val() == "90704"
    || $zipCode.val() == "90706"
    || $zipCode.val() == "90707"
    || $zipCode.val() == "90710"
    || $zipCode.val() == "90711"
    || $zipCode.val() == "90712"
    || $zipCode.val() == "90713"
    || $zipCode.val() == "90714"
    || $zipCode.val() == "90715"
    || $zipCode.val() == "90716"
    || $zipCode.val() == "90717"
    || $zipCode.val() == "90723"
    || $zipCode.val() == "90731"
    || $zipCode.val() == "90732"
    || $zipCode.val() == "90733"
    || $zipCode.val() == "90734"
    || $zipCode.val() == "90744"
    || $zipCode.val() == "90745"
    || $zipCode.val() == "90746"
    || $zipCode.val() == "90747"
    || $zipCode.val() == "90748"
    || $zipCode.val() == "90749"
    || $zipCode.val() == "90755"
    || $zipCode.val() == "90801"
    || $zipCode.val() == "90802"
    || $zipCode.val() == "90803"
    || $zipCode.val() == "90804"
    || $zipCode.val() == "90805"
    || $zipCode.val() == "90806"
    || $zipCode.val() == "90807"
    || $zipCode.val() == "90808"
    || $zipCode.val() == "90809"
    || $zipCode.val() == "90810"
    || $zipCode.val() == "90813"
    || $zipCode.val() == "90814"
    || $zipCode.val() == "90815"
    || $zipCode.val() == "90822"
    || $zipCode.val() == "90831"
    || $zipCode.val() == "90832"
    || $zipCode.val() == "90833"
    || $zipCode.val() == "90834"
    || $zipCode.val() == "90835"
    || $zipCode.val() == "90840"
    || $zipCode.val() == "90846"
    || $zipCode.val() == "90853"
    || $zipCode.val() == "91001"
    || $zipCode.val() == "91003"
    || $zipCode.val() == "91006"
    || $zipCode.val() == "91007"
    || $zipCode.val() == "91008"
    || $zipCode.val() == "91009"
    || $zipCode.val() == "91010"
    || $zipCode.val() == "91011"
    || $zipCode.val() == "91012"
    || $zipCode.val() == "91016"
    || $zipCode.val() == "91017"
    || $zipCode.val() == "91020"
    || $zipCode.val() == "91021"
    || $zipCode.val() == "91023"
    || $zipCode.val() == "91024"
    || $zipCode.val() == "91025"
    || $zipCode.val() == "91030"
    || $zipCode.val() == "91031"
    || $zipCode.val() == "91040"
    || $zipCode.val() == "91041"
    || $zipCode.val() == "91042"
    || $zipCode.val() == "91043"
    || $zipCode.val() == "91046"
    || $zipCode.val() == "91066"
    || $zipCode.val() == "91077"
    || $zipCode.val() == "91101"
    || $zipCode.val() == "91102"
    || $zipCode.val() == "91103"
    || $zipCode.val() == "91104"
    || $zipCode.val() == "91105"
    || $zipCode.val() == "91106"
    || $zipCode.val() == "91107"
    || $zipCode.val() == "91108"
    || $zipCode.val() == "91109"
    || $zipCode.val() == "91114"
    || $zipCode.val() == "91115"
    || $zipCode.val() == "91116"
    || $zipCode.val() == "91117"
    || $zipCode.val() == "91118"
    || $zipCode.val() == "91125"
    || $zipCode.val() == "91126"
    || $zipCode.val() == "91201"
    || $zipCode.val() == "91202"
    || $zipCode.val() == "91203"
    || $zipCode.val() == "91204"
    || $zipCode.val() == "91205"
    || $zipCode.val() == "91206"
    || $zipCode.val() == "91207"
    || $zipCode.val() == "91208"
    || $zipCode.val() == "91209"
    || $zipCode.val() == "21210"
    || $zipCode.val() == "91214"
    || $zipCode.val() == "91221"
    || $zipCode.val() == "91222"
    || $zipCode.val() == "91224"
    || $zipCode.val() == "91225"
    || $zipCode.val() == "91226"
    || $zipCode.val() == "91301"
    || $zipCode.val() == "91302"
    || $zipCode.val() == "91303"
    || $zipCode.val() == "91304"
    || $zipCode.val() == "91305"
    || $zipCode.val() == "91306"
    || $zipCode.val() == "91307"
    || $zipCode.val() == "91308"
    || $zipCode.val() == "91309"
    || $zipCode.val() == "91310"
    || $zipCode.val() == "91311"
    || $zipCode.val() == "91313"
    || $zipCode.val() == "91316"
    || $zipCode.val() == "91321"
    || $zipCode.val() == "91322"
    || $zipCode.val() == "91324"
    || $zipCode.val() == "91325"
    || $zipCode.val() == "91326"
    || $zipCode.val() == "91327"
    || $zipCode.val() == "91328"
    || $zipCode.val() == "91330"
    || $zipCode.val() == "91331"
    || $zipCode.val() == "91333"
    || $zipCode.val() == "91334"
    || $zipCode.val() == "91335"
    || $zipCode.val() == "91337"
    || $zipCode.val() == "91340"
    || $zipCode.val() == "91341"
    || $zipCode.val() == "91342"
    || $zipCode.val() == "91343"
    || $zipCode.val() == "91344"
    || $zipCode.val() == "91345"
    || $zipCode.val() == "91346"
    || $zipCode.val() == "91350"
    || $zipCode.val() == "91351"
    || $zipCode.val() == "91352"
    || $zipCode.val() == "91353"
    || $zipCode.val() == "91354"
    || $zipCode.val() == "91355"
    || $zipCode.val() == "91356"
    || $zipCode.val() == "91357"
    || $zipCode.val() == "91361"
    || $zipCode.val() == "61362"
    || $zipCode.val() == "91364"
    || $zipCode.val() == "91365"
    || $zipCode.val() == "91367"
    || $zipCode.val() == "91372"
    || $zipCode.val() == "91376"
    || $zipCode.val() == "91380"
    || $zipCode.val() == "91381"
    || $zipCode.val() == "91382"
    || $zipCode.val() == "91383"
    || $zipCode.val() == "91384"
    || $zipCode.val() == "91385"
    || $zipCode.val() == "91386"
    || $zipCode.val() == "91387"
    || $zipCode.val() == "91390"
    || $zipCode.val() == "91392"
    || $zipCode.val() == "91393"
    || $zipCode.val() == "91394"
    || $zipCode.val() == "91395"
    || $zipCode.val() == "91396"
    || $zipCode.val() == "91401"
    || $zipCode.val() == "91402"
    || $zipCode.val() == "91403"
    || $zipCode.val() == "91404"
    || $zipCode.val() == "91405"
    || $zipCode.val() == "91406"
    || $zipCode.val() == "91407"
    || $zipCode.val() == "91408"
    || $zipCode.val() == "91409"
    || $zipCode.val() == "91410"
    || $zipCode.val() == "91411"
    || $zipCode.val() == "91412"
    || $zipCode.val() == "91413"
    || $zipCode.val() == "91416"
    || $zipCode.val() == "91423"
    || $zipCode.val() == "91426"
    || $zipCode.val() == "91436"
    || $zipCode.val() == "91501"
    || $zipCode.val() == "91502"
    || $zipCode.val() == "91503"
    || $zipCode.val() == "91504"
    || $zipCode.val() == "91505"
    || $zipCode.val() == "91506"
    || $zipCode.val() == "91507"
    || $zipCode.val() == "91508"
    || $zipCode.val() == "91509"
    || $zipCode.val() == "91510"
    || $zipCode.val() == "91521"
    || $zipCode.val() == "91522"
    || $zipCode.val() == "91523"
    || $zipCode.val() == "91601"
    || $zipCode.val() == "91602"
    || $zipCode.val() == "91603"
    || $zipCode.val() == "91604"
    || $zipCode.val() == "91605"
    || $zipCode.val() == "61606"
    || $zipCode.val() == "61607"
    || $zipCode.val() == "91608"
    || $zipCode.val() == "91609"
    || $zipCode.val() == "91610"
    || $zipCode.val() == "91614"
    || $zipCode.val() == "91615"
    || $zipCode.val() == "91616"
    || $zipCode.val() == "91617"
    || $zipCode.val() == "91618"
    || $zipCode.val() == "91702"
    || $zipCode.val() == "91706"
    || $zipCode.val() == "91709"
    || $zipCode.val() == "91710"
    || $zipCode.val() == "91711"
    || $zipCode.val() == "91714"
    || $zipCode.val() == "91715"
    || $zipCode.val() == "91716"
    || $zipCode.val() == "91722"
    || $zipCode.val() == "91723"
    || $zipCode.val() == "91724"
    || $zipCode.val() == "91731"
    || $zipCode.val() == "91732"
    || $zipCode.val() == "91733"
    || $zipCode.val() == "91734"
    || $zipCode.val() == "91740"
    || $zipCode.val() == "91741"
    || $zipCode.val() == "91744"
    || $zipCode.val() == "91745"
    || $zipCode.val() == "91746"
    || $zipCode.val() == "91747"
    || $zipCode.val() == "91748"
    || $zipCode.val() == "91749"
    || $zipCode.val() == "91750"
    || $zipCode.val() == "91754"
    || $zipCode.val() == "91755"
    || $zipCode.val() == "91759"
    || $zipCode.val() == "91765"
    || $zipCode.val() == "91766"
    || $zipCode.val() == "91767"
    || $zipCode.val() == "91768"
    || $zipCode.val() == "91769"
    || $zipCode.val() == "91770"
    || $zipCode.val() == "91773"
    || $zipCode.val() == "91775"
    || $zipCode.val() == "91776"
    || $zipCode.val() == "91778"
    || $zipCode.val() == "91780"
    || $zipCode.val() == "91788"
    || $zipCode.val() == "91789"
    || $zipCode.val() == "91790"
    || $zipCode.val() == "91791"
    || $zipCode.val() == "91792"
    || $zipCode.val() == "91793"
    || $zipCode.val() == "91801"
    || $zipCode.val() == "91802"
    || $zipCode.val() == "91803"
    || $zipCode.val() == "91804"
    || $zipCode.val() == "91896"
    || $zipCode.val() == "91899"
    || $zipCode.val() == "92397"
    || $zipCode.val() == "92821"
    || $zipCode.val() == "92823"
    || $zipCode.val() == "93243"
    || $zipCode.val() == "93510"
    || $zipCode.val() == "93523"
    || $zipCode.val() == "93532"
    || $zipCode.val() == "93534"
    || $zipCode.val() == "93535"
    || $zipCode.val() == "93536"
    || $zipCode.val() == "93539"
    || $zipCode.val() == "93543"
    || $zipCode.val() == "93544"
    || $zipCode.val() == "93550"
    || $zipCode.val() == "93551"
    || $zipCode.val() == "93552"
    || $zipCode.val() == "93553"
    || $zipCode.val() == "93560"
    || $zipCode.val() == "93563"
    || $zipCode.val() == "93584"
    || $zipCode.val() == "93586"
    || $zipCode.val() == "93590"
    || $zipCode.val() == "93591") {
        $("#zipCodeDiv").html("");
    } else {
        $("#zipCodeDiv").html("* You must fill out this part of the form, or enter a zip code in Los Angeles.").css({
            "color": "red",
            "margin-bottom": 12
        });
        return false;
    }

    if($houseIncome.val().length < 1) {
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
        $("#mentalHealthIssuesDiv").append($newDiv1, $newDiv2, $newDiv3).css({
            "margin-bottom": 12
        });
    } else {
        $("#mentalHealthIssuesDiv").html("");
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
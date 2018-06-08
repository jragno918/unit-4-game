$(document).ready(function () {

    var thanosScore = 0; 
    var avengerScore = 0; 
    var wins = 0; 
    var losses = 0;
    var oldscore = 0;
    var youroldscore = 0;



    function reset() { 
        avengerScore = 0; 
        thanosScore = Math.floor((Math.random() * 101) + 19);
        stones=[];
        for (i = 0; i < 6; i++) {
            stones.push(Math.floor((Math.random() * 11) + 1));
        };
        $("#targetScore").text(thanosScore);    //Print the new value for thanosScore
        $("#currentScore").text(avengerScore);  //Print the new value for avengerScore
        $("#wins").text("Wins: "+ wins);        //Print the new value for Score - Wins
        $("#losses").text("Losses: " + losses); //Print the new value for Score - Losses]
        $("#yourScore").hide();

        console.log(thanosScore, stones[0], stones[1], stones[2], stones[3], stones[4], stones[5]); //Cheating
    };

    reset();

    function playGame() { 
        $("#currentScore").text(avengerScore);
        if (avengerScore === thanosScore) {
            wins++;
            oldscore = thanosScore;
            youroldscore = avengerScore;
            $("#result").html('<hr>"YOU HAVE DEFEATED THE MAD TITAN AND SAVED THE UNIVERSE"');
            $("#results2").text("Thanos Score:  " + oldscore + "  Avengers Score: " + youroldscore);
            reset();

        }
        else if (avengerScore > thanosScore) { 
            oldscore = thanosScore;
            youroldscore = avengerScore;
            $("#result").html('<hr>"YOU\'VE BEEN CRUSHED BY THE MAD TITAN"');
            $("#results2").text("Thanos Score:  " + oldscore + "  Avengers Score: " + youroldscore);
            losses++;
            reset();
        }
        else if (avengerScore > 0){
            $("#result").text("");
            $("#results2").text("");
            $("#yourScore").show();
        };


        
    };

    //On click events asigned to each crystal.

    $("#realityStone").on('click', function () {
        avengerScore += stones[0];
        playGame();
    });

    $("#spaceStone").on('click', function () {
        avengerScore += stones[1];
        playGame();
    });

    $("#mindStone").on('click', function () {
        avengerScore += stones[2];
        playGame();
    });

    $("#powerStone").on('click', function () {
        avengerScore += stones[3];
        playGame();
    });
    
    $("#timeStone").on('click', function () {
        avengerScore += stones[4];
        playGame();
    });

    $("#soulStone").on('click', function () {
        avengerScore += stones[5];
        playGame();
    });

});
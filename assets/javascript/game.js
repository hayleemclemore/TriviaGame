$(document).ready(function () {

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var intervalId;
    var running = false;
    var timer = 15;
    var questionIndex = 0;
    var select;
    var index;
    var newArray = [];
    var holder = [];
    var scoreCount = wrong + correct + unanswered;


    var triviaQs = [
        {
            question: 'What year was the very first model of the iPhone released?',
            choices: ['2005', '2007', '2004', '2009'],
            images: "./assets/images/phone.jpeg",
            correct: '2007'
        },
        {
            question: 'What is often seen as the smallest unit of memory?',
            choices: ['microbyte', 'millabyte', 'kilobyte', 'gigabyte'],
            images: "./assets/images/byte.png",
            correct: 'kilobyte'
        },
        {
            question: 'What was Twitter’s original name?',
            choices: ['twttr', 'twitters', 'chirrup', 'tweeter'],
            images: "./assets/images/twitter_512.png",
            correct: 'twttr'
        },
        {
            question: 'The TITLE tag must be within the ________ tags in the HTML.',
            choices: ['title', 'form', 'head', 'body'],
            images: "./assets/images/head.gif",
            correct: 'head'
        },

    ];

    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answersGoHere").empty();
        $("#questionsGoHere").empty();
        for(var i = 0; i < holder.length; i++) {
            triviaQs.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    
    });

    $("#reset").hide();

    //click start button to start game
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < triviaQs.length; i++) {
        holder.push(triviaQs[i]);
    }
        })
    //start timer
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    //timer decrement
    function decrement() {
        $("#show-timer").html("<h4>Time remaining: " + timer + "</h4>");
        timer --;
    
        //at 0, stop the timer
        if (timer === 0) {
            unanswered++;
            scoreCount++;
            stop();
            $("#answersGoHere").html("<p>Time is up! The correct answer is: " + triviaQs[questionIndex].correct + "</p>");
            picture();
        }	
    }
    
    //stop the timer
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
   
    function displayQuestion() {
        $('#questionsGoHere').empty()     

        var containerDiv = $('<div>');
        var h4Question = $('<h4>');

        h4Question.text(triviaQs[questionIndex].question)
        containerDiv.append(h4Question)

        for(var i = 0; i < triviaQs[questionIndex].choices.length; i++) {
            console.log('each single dude in the loop!!!',triviaQs[questionIndex].choices[i])
            var choiceBtn = $('<button>')
            choiceBtn.text(triviaQs[questionIndex].choices[i])
            choiceBtn.attr('class', 'btnChoice')
            choiceBtn.attr('name', triviaQs[questionIndex].choices[i])
            containerDiv.append(choiceBtn)
        }

        $('#questionsGoHere').append(containerDiv)
    }

    
    
    
    //clicking the choices of each question
    $(document).on('click', '.btnChoice', function() {
 
        //if the answer chosen by user is correct
        if ($(this).attr('name') === triviaQs[questionIndex].correct) {
            stop();
            correct++;
            scoreCount++;
            $("#answersGoHere").html("<p>Correct!</p>");
            picture();
            
        //if the answer chosen by user is wrong
        } else {
            stop();
            wrong++;
            scoreCount++;
            $("#answersGoHere").html("<p>Wrong! The correct answer is: " + triviaQs[questionIndex].correct + "</p>");
            picture();
        }
    });
    
    
    function picture(hidepic) {
        $("#answersGoHere").append("<img src=" + triviaQs[questionIndex].images + ">");
        newArray.push(select);
        triviaQs.splice(index,1);
    
        var hidepic = setTimeout(function() {
            $("#answersGoHere").empty();
            timer= 15;
    
        //run the score screen if all questions answered
        if ((correct + wrong + unanswered) === 4) {
            $("#questionsGoHere").empty();
            $("#questionsGoHere").html("<h3>Game Over! Here are your results: </h3>");
            $("#answersGoHere").append("<h4> Correct: " + correct + "</h4>" );
            $("#answersGoHere").append("<h4> Wrong: " + wrong + "</h4>" );
            $("#answersGoHere").append("<h4> Unanswered: " + unanswered + "</h4>" );
            $("#show-timer").hide();
            $("#reset").show();
            wrong = 0;
            correct = 0;
            unanswered = 0;
        } 
        else {
            runTimer();
            displayQuestion();
        }
        }, 2000);
    
    
    }
    
    });
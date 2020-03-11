$(document).ready(function() {

    $("#correct").hide()
    $("#wrong").hide()
    $("#unanswered").hide()
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var questionIndex = 0;
    var number = 10;
    var intervalId;
    var scoreCount = wrong + correct + unanswered;

    var triviaQs = [
        {
            question: 'What year was the very first model of the iPhone released?',
            choices: ['2005', '2007', '2004', '2009'],
            images: "../images/coding.webp",
            correct: '2007'
        },
        {
            question: 'What is often seen as the smallest unit of memory?',
            choices: ['microbyte', 'millabyte', 'kilobyte', 'byte'],
            images: "../images/coding.webp",
            correct: 'kilobyte'
        },
        {
            question: 'What was Twitter’s original name?',
            choices: ['twttr', 'twitters', 'chirrup', 'tweeter'],
            images: "../images/coding.webp",
            correct: 'twttr'
        },
        {
            question: 'The TITLE tag must be within the ________ tags in the HTML.',
            choices: ['title', 'form', 'head', 'body'],
            images: "../images/coding.webp",
            correct: 'head'
        },

    ]



    function runTimer() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    };


    function decrement() {
        number--;
        $("#show-timer").html("<h3>Time Remaining: " + number + "</h3>");
  
        if (number === 0) {
  
          stop();
          unanswered ++
          scoreCount ++
          checkScoreCount();
          $('#unanswered').text('Unanswered: ' + unanswered)
        //   alert("Time Up!");
          alert("The correct answer is " + triviaQs[questionIndex].correct)
        }
      };
    

    function stop() {
        clearInterval(intervalId)
      };
      
    function reset() {
        clearInterval(intervalId)
        number = 10;
        displayQuestion();
        runTimer();
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

    // console.log('is this my first question! ????', triviaQs[0])

    startGame();

    function startGame() {

    $("#start").on("click", function(){
        displayQuestion()
        $("#start").hide()
        $("#correct").show()
        $("#wrong").show()
        $("#unanswered").show()
        runTimer();
        

      });

    }


      $(document).on('click', '.btnChoice', function() {
          console.log('U CLICKED A CHOICE!!!!!!', $(this).attr('name'))

          if($(this).attr('name') === triviaQs[questionIndex].correct) {
              alert('U GOT IT RIGHT!!!')
              correct ++
              scoreCount++
              checkScoreCount();
            //   questionIndex ++
            // $('#correct').text('Correct: ' + correct)
            
            // $('#answersGoHere').text("That's correct!")
            // displayQuestion()
            // reset();
            // runTimer();

            } 
            
          else if($(this).attr('name') !== triviaQs[questionIndex].correct)  {
            alert("The correct answer is " + triviaQs[questionIndex].correct);
            // $('#questionsGoHere').hide()
            // $('#answersGoHere').append("The correct answer is " + triviaQs[questionIndex].correct)
              wrong ++
              scoreCount++
              checkScoreCount();
            //   questionIndex ++
            //   $('#wrong').text('Wrong: ' + wrong)
            //   displayQuestion()
            //   reset();
            //   runTimer();
          }

        
      })




      function checkScoreCount() {
        if (scoreCount === 4) {

            var scoreResults = $('<p>');
            var containerDiv = $('<div>');

            scoreResults.html("Game Over")
            containerDiv.append(scoreResults)
            console.log(scoreResults)

            $('#wrong').text('Wrong: ' + wrong)
            $('#correct').text('Correct: ' + correct)
            $('#unanswered').text('Unanswered: ' + unanswered)
            stop();
            $('#questionsGoHere').hide()
            $("#show-timer").hide()
            startGame();

            }
        else {
            questionIndex ++
            reset();
        }
    
      }
     



})


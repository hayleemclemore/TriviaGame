$(document).ready(function() {

    $("#correct").hide()
    $("#wrong").hide()
    $("#unanswered").hide()
    var correct = 0
    var wrong = 0
    var unanswered = 0
    var questionIndex = 0

    var triviaQs = [
        {
            question: 'What year was the very first model of the iPhone released?',
            choices: ['2005', '2007', '2004', '2009'],
            correct: '2007'
        },
        {
            question: 'What is often seen as the smallest unit of memory?',
            choices: ['microbyte', 'millabyte', 'kilobyte', 'byte'],
            correct: 'kilobyte'
        },
        {
            question: 'What was Twitter’s original name?',
            choices: ['twttr', 'twitters', 'chirrup', 'tweeter'],
            correct: 'twttr'
        },
        {
            question: 'The TITLE tag must be within the ________ tags in the HTML.',
            choices: ['title', 'form', 'head', 'body'],
            correct: 'kilobyte'
        },

    ]

    function displayQuestion() {
        $('#questionsGoHere').empty()
      

        var containerDiv = $('<div>')
        var h4Question = $('<h4>')

        h4Question.text(triviaQs[questionIndex].question)
        containerDiv.append(h4Question)

        for(var i = 0; i< triviaQs[questionIndex].choices.length; i++) {
            console.log('each single dude in the loop!!!',triviaQs[questionIndex].choices[i])
            var choiceBtn = $('<button>')
            choiceBtn.text(triviaQs[questionIndex].choices[i])
            choiceBtn.attr('class', 'btnChoice')
            choiceBtn.attr('name', triviaQs[questionIndex].choices[i])
            containerDiv.append(choiceBtn)
        }

        $('#questionsGoHere').append(containerDiv)
    }

    console.log('is this my first question! ????', triviaQs[0])

    $("#start").on("click", function(){
        displayQuestion()
        $("#start").hide()
        $("#correct").show()
        $("#wrong").show()
        $("#unanswered").show()
      });


      $(document).on('click', '.btnChoice', function() {
          console.log('U CLICKED A CHOICE!!!!!!', $(this).attr('name'))

          if($(this).attr('name') === triviaQs[0].correct) {
              alert('U GOT IT RIGHT!!!')
              correct ++
              questionIndex ++
            $('#correct').text('Correct: ' + correct)
            displayQuestion()
          } else {
              alert('wrong try again :(')
              wrong ++
              questionIndex ++
              $('#wrong').text('Wrong: ' + wrong)
              displayQuestion()
          }
      })




})



$(document).ready(function(){
//Page 2 magic 8 ball code below:
console.log('here');

var answers = ['Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Yup yup', 'No','nah nah nah.', 'The future is bleak.',
  'The future is uncertain.', 'I would rather not say.','Possibly.',
   'Not once, not ever.', 'There is a small chance.', 'Yes!'];


$('#answerQ').click(function(){
  var answer = answers[Math.floor(Math.random()*answers.length)];
    $('#show').html(answer);
});
});

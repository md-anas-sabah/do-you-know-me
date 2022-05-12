import chalk from 'chalk';
import readlineSync from 'readline-sync';


var person = readlineSync.question('What is your name?');

console.log(`Welcome ${person} to ${chalk.bgBlue('DO YOU KNOW Anas')}`);

var score = 0;

const questionBank = [
  {
    question: 'Where do i live?',
    answer: 'Patna'
  },
  {
    question: 'Where do i study?',
    answer: 'Chandigarh University'
  },
  {
    question: 'Which one i like more? The Big Bang Theory OR F.R.I.E.N.D.S? ',
    answer: 'The Big Bang Thoery'
  },
  {
    question: 'Who is my favourite Comic-book Character?',
    answer: 'Tony Stark'
  },
{
  question: 'What is my favourite anime?',
    answer: 'One Piece'
},
{
  question: 'Which is my favourite programming language?',
  answer: 'JavaScript'
},

]

function quiz(question,answer){
  var personAnswer = readlineSync.question(question);
  if(personAnswer == answer){
    console.log(chalk.bgGreen('Yay! Correct Answer'))
    score++;
  }else{
    console.log(chalk.bgRed('Oops! Incorrect Answer'))
  }
  console.log(`Score: ${score}`)
}

for(let i=0;i<questionBank.length;i++){
  quiz(questionBank[i].question, questionBank[i].answer);
}
console.log(`Total Score: ${score}`);
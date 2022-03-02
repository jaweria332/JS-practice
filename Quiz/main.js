const correctAnswer = ['C', 'A', 'B', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//The preventDefault() method cancels the event if it is cancelable, 
//meaning that the default action that belongs to the event will not occur

//

form.addEventListener('submit', e => {
    e.preventDefault();

    //getting thee user responses
    let score = 0;
    const userAnswer = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value];

    //check answers of user
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 25;
        }
    });
    
    //show result percentage
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove(`d-none`);
});
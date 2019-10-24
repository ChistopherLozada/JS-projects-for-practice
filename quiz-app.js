// the correct answers
const correctAnswers = ['A', 'A', 'A', 'A'];

// Form element 
const form = document.querySelector('.quiz-form');

// form event listener
form.addEventListener('submit', e => {
    // prevent refresh
    e.preventDefault()

    // add score
    let score = 0;

    // add user answers
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // loop user answer
    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })
    

    // set interval for animation
    scrollTo(0,0)

    // remove element form display

    scrollTo(0,0)
    const results = document.querySelector('.first-div');
    
    let h1 = document.querySelector('#h1');
    h1.classList.remove('display')

    let output = 0;
    let finalResults = setInterval(() => {
        results.querySelector('span').textContent = `${output}%`
        if (output === score) {
            clearInterval(finalResults)
        } else{
            output++
        }
    }, 10)
});

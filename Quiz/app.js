const correctAnswers = ['B', 'B', 'B', 'B', 'B', 'B', 'B']
const result = document.querySelector('.result')

const form = document.querySelector('.quiz-form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0;
    userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value]
     userAnswers.forEach((answer, index) => {
         if(answer === correctAnswers[index]){
             score += ((1/correctAnswers.length)*100)
             console.log(score)
         }

     });
    scrollTo(0, 0)

     
     result.classList.remove('d-none')

     
    let i = 0;
     const animateScore = setInterval(() => {
        result.querySelector('span').textContent = `${i}%`
        if(i === Math.ceil(score)){
            result.querySelector('span').textContent = `${i}%`
            clearInterval(animateScore)
        }else{
            i ++
        }
    
    }, 50)
})




// show the score



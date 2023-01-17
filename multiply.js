const num1 = Math.ceil(Math.random()*12);
// console.log(num1)
const num2 = Math.ceil(Math.random()*12);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")


let score = JSON.parse(localStorage.getItem("Score"));
if (!score) {
    score=0;
}
scoreEl.innerText = `score : ${score}`
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value 
// })
    // console.log(userAns, typeof userAns);
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
});
function updateLocalStorage(){
    localStorage.setItem("Score", JSON.stringify(score))
}
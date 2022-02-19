var btnStart = document.querySelector('.btn-start');
var quizCont = document.querySelector('.quiz-container');
var rules = document.querySelector(".rule");

btnStart.addEventListener('click',()=>{
    quizCont.style.display="block";
    btnStart.style.display="none";
    rules.style.display="none";
});
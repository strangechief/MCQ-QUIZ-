const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Language",
        b: "Hey Text Markup Language",
        c: "Hyper Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
       question: "Q2: Which of the following tag is used for inserting the largest heading in HTML?",
       a: "<h4>",
       b: "<h2>",
       c: "<h1>",
       d: "<h3>",
       ans: "ans3"
    },
     
    {
       question: "Q3: Which character is used to represent the closing of a tag in HTML?",
       a: "!",
       b: "#",
       c: ".",
       d: "/",
       ans: "ans4"
    },
   
    {
       question: "Q4:Which of the following tag is used to make the underlined text?",
       a: "<i>",
       b: "<ul>",
       c: "<u>",
       d: "<pre>",
       ans: "ans3"
    },
    
    {
       question: "Q5: The <hr> tag in HTML is used for -",
       a: "new line",
       b: "vertical ruler",
       c: "new paragraph",
       d: "horizontal ruler",
       ans: "ans4"
    },
   
    {
       question : "Q6: Where is the correct place to insert a JavaScript? ",
       a: "The <body> section",
       b: "The <head> section ",
       c: "Both a and b",
       d: "None of the above",
       ans: "ans3"
   },
   {
       question : "Q7: What is the correct syntax for referring to an external script called xxx.js? ",
       a: "<script href = xxx.js>",
       b: "<script src = xxx.js>",
       c: "<script name = xxx.js>",
       d: "<script url = xxx.js>",
       ans: "ans2"
   },
   {
       question : "Q8: Wow do you write Hello World in an alert box?",
       a: "alertBox(Hello World)",
       b: "msgBox(Hello World)",
       c: "msg(Hello World)",
       d: "alert(Hello World)",
       ans: "ans4"
   },
   {
       question : "Q9: How do you create a function in JavaScript? ",
       a: "function:myFunction()",
       b: "function = myFunction()",
       c: "function myFunction()",
       d: "None of the above",
       ans: "ans3"
   },
   {
       question : "10: What is the full form of CSS? ",
       a: "Cascading Style Sheet",
       b: "Cascading Style Sheep",
       c: "Cartoon Style Sheets",
       d: "Cascading Super Sheets",
       ans: "ans1"
   }
   
   ];
   
   const question = document.querySelector('.question');
   const option1 = document.querySelector('#option1');
   const option2 = document.querySelector('#option2');
   const option3 = document.querySelector('#option3');
   const option4 = document.querySelector('#option4');
   const submit = document.querySelector('#submit');
   
   const answers = document.querySelectorAll('.answer');
   
   const showScore = document.querySelector('#showScore');
   
   let questionCount = 0;
   let score = 0;
   const loadQuestion = () => {
      const questionList = quizDB[questionCount];
   
       question.innerText = questionList.question;
   
       option1.innerText = questionList.a;
       option2.innerText = questionList.b;
       option3.innerText = questionList.c;
       option4.innerText = questionList.d;
   }
   loadQuestion();
   
   const getCheckAnswer = () => {
       let answer;
   
       answers.forEach((curAnsElem) => {
           if(curAnsElem.checked) {
               answer = curAnsElem.id;
           }
       });
       return answer;
   }; 
   
   const deselectAll = () => {
       answers.forEach((curAnsElem) => curAnsElem.checked = false );
   }  
   
   submit.addEventListener('click', () =>{
       const  checkedAnswer = getCheckAnswer();
       console.log(checkedAnswer);
   
       if(checkedAnswer === quizDB[questionCount].ans){
           score++;
       };
   
       questionCount++;
   
       deselectAll();
       
       if(questionCount < quizDB.length){
           loadQuestion();
       }else{
           showScore.innerHTML = `
           <h3> You scored ${score}/${quizDB.length} </h3>
           <button class = "btn" onclick = "location.reload()">Play Again</button>
           `;
   
           showScore.classList.remove('scoreArea');
       }
   });
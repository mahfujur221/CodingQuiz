// Quiz data - simpler structure
const quizData = {
  easy: [
    {
      question: "What's wrong with this HTML code?",
      category: "HTML",
      code: `<div class="container">
<h1>Welcome</h1>
<p>This is a paragraph
<button>Click me</button>
</div>`,
      options: [
        "Missing closing </p> tag",
        "The div should have an ID, not a class",
        "The button needs a type attribute",
        "Nothing is wrong",
      ],
      correctAnswer: 0,
      explanation:
        "The paragraph tag <p> is not closed with </p>. HTML elements should always be properly closed.",
    },
    {
      question: "Debug this CSS that's not centering content:",
      category: "CSS",
      code: `.centered {
text-align: center
margin: 0 auto;
width: 300px;
}`,
      options: [
        "Missing semicolon after 'text-align: center'",
        "Should use 'margin: auto' instead",
        "The width should be 100%",
        "Missing display: flex",
      ],
      correctAnswer: 0,
      explanation:
        "CSS requires a semicolon after each property. The missing semicolon after 'text-align: center' breaks the CSS rule.",
    },
    {
      question: "Fix this JavaScript function:",
      category: "JavaScript",
      code: `function add(a, b) {
return
a + b;
}`,
      options: [
        "Automatic semicolon insertion makes it return undefined",
        "Missing parentheses around a + b",
        "Should use arrow function instead",
        "Parameters should have default values",
      ],
      correctAnswer: 0,
      explanation:
        "JavaScript automatically inserts semicolons, so 'return' on its own line ends the function. Put 'return a + b;' on one line.",
    },
    {
      question: "Why won't this button work?",
      category: "HTML/JS",
      code: `<button onclick="alert('Clicked')">Click me</button>`,
      options: [
        "The code is actually correct",
        "Missing parentheses in alert function",
        "Should use addEventListener instead",
        "The quotes are wrong",
      ],
      correctAnswer: 0,
      explanation:
        "This is actually correct HTML! The onclick attribute with alert() works fine. Sometimes code looks suspicious but is actually valid.",
    },
    {
      question: "What's wrong with this loop?",
      category: "JavaScript",
      code: `for (let i = 0; i < 5; i++) {
console.log(i)
}`,
      options: [
        "Missing semicolon after console.log(i)",
        "Variable i should be declared with var",
        "The loop will run 6 times, not 5",
        "Nothing is wrong",
      ],
      correctAnswer: 0,
      explanation:
        "JavaScript statements should end with semicolons. While not always required, it's good practice to include them.",
    },
  ], 

    medium: [
    {
      question: "Why does this code log 5 five times?",
      category: "JavaScript",
      code: `for (var i = 0; i < 5; i++) {
setTimeout(() => {
console.log(i);
}, 100);
}`,
      options: [
        "var has function scope, not block scope",
        "setTimeout is asynchronous",
        "Need to use let instead of var",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "var has function scope, so all timeouts share the same i variable (which becomes 5). Use let to create block scope and capture each i value.",
    },
    {
      question: "Debug this array filter function:",
      category: "JavaScript",
      code: `const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => {
return num % 2 = 0;
});`,
      options: [
        "Should use == instead of =",
        "Should use === instead of =",
        "Missing parentheses around condition",
        "Arrow function syntax is wrong",
      ],
      correctAnswer: 1,
      explanation:
        "= is assignment operator, not comparison. Use === for equality check, or == for loose equality (but === is preferred).",
    },
    {
      question: "What's wrong with this CSS grid?",
      category: "CSS",
      code: `.grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
}`,
      options: [
        "The CSS is actually correct",
        "Missing grid-template-rows",
        "Should use flexbox instead",
        "Need to define grid areas",
      ],
      correctAnswer: 0,
      explanation:
        "This CSS grid code is perfectly valid! It creates a 2-column grid with equal fractional units and 10px gap between items.",
    },
    {
      question: "Why won't this React component update?",
      category: "React",
      code: `function Counter() {
let count = 0;

return (
<div>
    <p>{count}</p>
    <button onClick={() => count++}>
        Increment
    </button>
</div>
);
}`,
      options: [
        "React needs useState hook for state",
        "Direct variable mutation doesn't trigger re-render",
        "Both 1 and 2",
        "The onClick syntax is wrong",
      ],
      correctAnswer: 2,
      explanation:
        "In React, you need to use the useState hook to create reactive state. Direct variable mutation doesn't trigger component updates.",
    },
    {
      question: "Fix this async function:",
      category: "JavaScript",
      code: `async function getData() {
const response = fetch('/api/data');
return response.json();
}`,
      options: [
        "Missing await before fetch()",
        "Missing try-catch block",
        "Should use .then() instead of async/await",
        "Nothing is wrong",
      ],
      correctAnswer: 0,
      explanation:
        "fetch() returns a Promise, so you need to await it or use .then(). Without await, response.json() will fail.",
    },
  ],
  
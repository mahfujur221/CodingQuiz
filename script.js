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

  hard: [
    {
      question: "Memory leak in this event listener:",
      category: "JavaScript",
      code: `element.addEventListener('click', () => {
console.log('Clicked');
});

// Later...
element.remove();`,
      options: [
        "Event listener keeps element in memory",
        "Need to remove event listener first",
        "Use weak references",
        "All of the above",
      ],
      correctAnswer: 1,
      explanation:
        "Event listeners create references that prevent garbage collection. Always remove listeners before removing elements from DOM.",
    },
    {
      question: "Race condition in this code:",
      category: "JavaScript",
      code: `let count = 0;

async function increment() {
const current = count;
await someAsyncTask();
count = current + 1;
}`,
      options: [
        "Race condition between reads and writes",
        "Should use atomic operations",
        "Need mutex or lock",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Multiple calls can read same count value before any writes complete. Need proper concurrency control for shared state.",
    },
    {
      question: "CSS performance issue:",
      category: "CSS",
      code: `.animated {
left: 0;
transition: left 1s;
}

.animated:hover {
left: 500px;
}`,
      options: [
        "Animating left causes layout recalculations",
        "Use transform: translateX() instead",
        "Both 1 and 2",
        "Nothing is wrong",
      ],
      correctAnswer: 2,
      explanation:
        "Animating left/top triggers expensive layout recalculations. Use transform for better performance as it uses the GPU.",
    },
    {
      question: "TypeScript type safety issue:",
      category: "TypeScript",
      code: `function merge(a: any, b: any) {
return { ...a, ...b };
}`,
      options: [
        "any type loses type safety",
        "Should use generics",
        "Return type should be intersection",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "Using any defeats TypeScript's type checking. Use generics <T, U> and return type T & U for type safety.",
    },
    {
      question: "Closure scope issue:",
      category: "JavaScript",
      code: `for (var i = 0; i < 3; i++) {
setTimeout(function() {
console.log(i);
}, i * 1000);
}`,
      options: [
        "All closures share same i variable",
        "Will log 3, 3, 3 instead of 0, 1, 2",
        "Use let or IIFE to fix",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "var has function scope, so all closures reference the same i. Use let (block scope) or IIFE to capture each value.",
    },
  ],
};

// App state
const state = {
  currentScreen: "welcome",
  difficulty: "easy",
  currentQuestion: 0,
  score: 0,
  selectedOption: null,
  timeLeft: 60,
  timer: null,
  startTime: null,
  answers: [],
};

// DOM elements
const screens = {
  welcome: document.getElementById("welcome-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen"),
};
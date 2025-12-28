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
  
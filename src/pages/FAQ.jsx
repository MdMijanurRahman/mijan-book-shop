// // src/pages/FAQ.jsx
// const FAQ = () => {
//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-4">FAQ</h2>
//       <div className="space-y-4">
//         <div>
//           <h3 className="font-semibold">What is React.js and Explain the concept of "components" in React?</h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//           <h3 className="font-semibold">What is JSX in React, and how does it work? </h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//           <h3 className="font-semibold">What is the Virtual DOM, and how does React use it to optimize performance? </h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//           <h3 className="font-semibold">Explain the concept of "props" in React and how they are used. </h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//           <h3 className="font-semibold">What is "state" in React, and how does it differ from props? </h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//           <h3 className="font-semibold">Explain the useState hook and provide an example of how it is used. </h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//           <h3 className="font-semibold">What is the purpose of the useEffect hook in React, and when would you use it? </h3>
//           <p>React.js is a JavaScript library for building user interfaces.</p>
//         </div>
//         {/* Repeat for other questions */}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is React.js and Explain the concept of 'components' in React?",
      answer: "React.js is a JavaScript library for building user interfaces. Components are the building blocks of React; they are reusable, independent pieces of UI that can be combined to create complex UIs."
    },
    {
      question: "What is JSX in React, and how does it work?",
      answer: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that looks similar to HTML and allows us to write HTML elements in React. It is then transpiled into regular JavaScript."
    },
    {
      question: "What is the Virtual DOM, and how does React use it to optimize performance?",
      answer: "The Virtual DOM is an in-memory representation of the real DOM. React uses it to track changes and efficiently update only the parts of the DOM that have changed, improving performance."
    },
    {
      question: "Explain the concept of 'props' in React and how they are used.",
      answer: "Props (short for properties) are used to pass data from one component to another. They are immutable, meaning a component cannot modify its own props."
    },
    {
      question: "What is 'state' in React, and how does it differ from props?",
      answer: "State is a local data storage that is mutable and managed within a component. Props, on the other hand, are read-only and passed down from parent components."
    },
    {
      question: "Explain the useState hook and provide an example of how it is used.",
      answer: "The useState hook allows you to add state to functional components. Example: `const [count, setCount] = useState(0);` initializes `count` to 0 and provides `setCount` to update it."
    },
    {
      question: "What is the purpose of the useEffect hook in React, and when would you use it?",
      answer: "The useEffect hook allows you to perform side effects, such as data fetching or DOM manipulation, in a component. It runs after every render by default, but can be configured to run only on specific state changes."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-4 text-left bg--100 font-medium text-lg flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-black-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


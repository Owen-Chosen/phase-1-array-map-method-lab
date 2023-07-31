// Function to split a string into an array of single characters
const stringTochar = (string) => string.split ("");

// function to return the splited array back to string
const backToString = (arrStrToTtlCase) => arrStrToTtlCase.join("");

// function that takes array of characters and turns first letter of every word into uppercase
const  arrStrToTtlCase = (arrayOfChars) => {
  return arrayOfChars.map ((letter, i) => {
    if (i === 0 || arrayOfChars[i-1] === ' ') {
      return letter.toUpperCase(); 
    } else {return letter;}
  });
}

// function that returns the completely processed array of title cased strings (sentences)
const titleCased = () => {
  return tutorials.map ((topic) => {
    return backToString(arrStrToTtlCase(stringTochar(topic)));
  });
}

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// to test our work
console.log (titleCased());
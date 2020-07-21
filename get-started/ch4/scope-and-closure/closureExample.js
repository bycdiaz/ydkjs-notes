// Example of closure
// Despite being called outside of aCoolFunction, the someVaraible() call maintained
// awareness of the aCoolWord varaible from inside aCoolFunction.

function aCoolFunction() {
  const aCoolWord = "wow"
  return function wowMe() {
    console.log(aCoolWord);
  }
}

const someVariable = aCoolFunction();
someVariable();
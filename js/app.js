const firstWord = document.querySelector("#first-word");
const secondWord = document.querySelector("#second-word");
const thirdWord = document.querySelector("#third-word");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const firstSymbol = document.querySelector("#first-symbol");
const secondSymbol = document.querySelector("#second-symbol");

const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', generatePassword);

function generatePassword(e) {
    e.preventDefault();
    try {
            //check if the words entered are not the same
    compareWords(firstWord, secondWord, thirdWord);

    //check if the numbers entered are not the same
    compareNumbers(firstNumber, secondNumber);

    //check if the symbols entered are not the same
    compareSymbols(firstSymbol, secondSymbol);

    } catch (error) {
        console.log(error);
    }

    //create a string of the combination of letters
    generateString(firstWord, secondWord, thirdWord);

    //add one number

    //add symbol

    //run 3 times

    //output to user 

    //clear form


    console.log('button clicked');
};

//display generated passwords

function compareWords (word1, word2, word3){
    word1 = firstWord.value;
    word2 = secondWord.value;
    word3 = thirdWord.value;

    let result1 = word1.localeCompare(word2);
    console.log(result1);
    let result2 = word1.localeCompare(word3);
    let result3 = word2.localeCompare(word3);

    if (result1 == 0) {console.log('equal1'); return}
    if (result2 == 0) {console.log('equal2'); return}
    if (result3 == 0) {console.log('equal3'); return}

    else{
        const word = firstWord.value + secondWord.value;
        console.log(word);
    }
}

function compareNumbers (num1 ,num2) {
    num1 = firstNumber.value.toString();
    num2 = secondNumber.value.toString();

    let result = num1.localeCompare(num2);

    if (result == 0) {
        console.log('numbers equal');
        return;
    } else {
        const newNum = firstNumber.value + secondNumber.value;
        console.log(newNum);
    }
}
function compareSymbols (sym1 ,sym2) {
    sym1 = firstSymbol.value.toString();
    sym2 = secondSymbol.value.toString();

    let result = sym1.localeCompare(sym2);

    if (result == 0) {
        console.log('symbols equal');
        return;
    } else {
        const newSym = firstSymbol.value + secondSymbol.value;
        console.log(newSym);
    }
}

function generateString (word1, word2, word3) {
    word1 = firstWord.value.toString();
    word2 = secondWord.value.toString();
    word3 = thirdWord.value.toString();
    let passWord = ' '
    const wordLength = 15;
    for (let i = 0; i < wordLength; i++) {
     passWord += word1.charAt(Math.floor(Math.random() * wordLength)) + 
     word2.charAt(Math.floor(Math.random() * wordLength)) +
     word3.charAt(Math.floor(Math.random() * wordLength));  
    } 
    console.log(passWord);

}

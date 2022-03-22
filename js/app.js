const firstWord = document.querySelector("#first-word");
const secondWord = document.querySelector("#second-word");
const thirdWord = document.querySelector("#second-word");
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const firstSymbol = document.querySelector("#first-symbol");
const secondSymbol = document.querySelector("#second-symbol");

const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', generatePassword);

function generatePassword(e) {
    e.preventDefault();

    //check if the words entered are not the same
    
        const word = firstWord.value + secondWord.value;
        console.log(word);

    //check if the numbers entered are not the same

    //check if the symbols entered are not the same

    //create a string of the combination of letters
    

    //add one number

    //add symbol

    //run 3 times

    //output to user 

    //clear form


    console.log('button clicked');
};

//display generated passwords

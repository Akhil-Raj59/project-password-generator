// Data 

const uppercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const lowercaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const numbers = Array.from({ length: 10 }, (_, i) => String(i));
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'];
console.log(numbers);
// selectors

const generate = document.querySelector("#generateb")
const copy = document.querySelector("#copyb")
const answerBox = document.querySelector("#answerBox")

// generate button
generate.addEventListener("click",()=>{
    // getting input from user
    const passwordLength = document.querySelector("#password_length").value
    const uppercase = document.querySelector("#uppercase").checked
    const lowercase = document.querySelector("#Lowercase").checked
    const number = document.querySelector("#numbers").checked
    const symbol = document.querySelector("#symbols").checked
    
    // Required Array
    let reqArray = []
    function generatereReqArray(){
        if(uppercase == true) {uppercaseLetters.forEach(element => { reqArray.push(element)});}
        if(lowercase == true) {lowercaseLetters.forEach(element => { reqArray.push(element)});}
        if(number == true) {numbers.forEach(element => { reqArray.push(element)});}
        if(symbol == true) {symbols.forEach(element => { reqArray.push(element)});}
        return reqArray;
    }
    generatereReqArray()
    // Generate Random number
    function generateRanNumber(min=0,max=reqArray.length){
        let random =  Math.floor(Math.random() * (max - min) + min)
        return random;
    }

    // Generate Answer
    let ans = ""
    function generateAnswer(){
        for (let i = 0; i < passwordLength; i++) {
            ans += reqArray[generateRanNumber()];       
        }
    }
    generateAnswer()
    
    // putting answer in answer box
    console.log(ans);
    console.log(answerBox);
    answerBox.value = `${ans}`
    answerBox.style.color = "grey"
    answerBox.style.fontWeight = "600"
    answerBox.style.paddingLeft = "30px"

    // copy button
    copy.addEventListener("click",()=>{
        navigator.clipboard.writeText(answerBox.value)
        // give alert
        alert("Copied the text: " + answerBox.value)
    })
})



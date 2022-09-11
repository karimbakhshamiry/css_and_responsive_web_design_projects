characters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    "a",
    "s",
    "d",
    "f",
    "g", 
    "h",
    "j", 
    "k",
    "l",
    ":",
    ";",
    '"',
    "'",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "<",
    ",",
    ">",
    ".",
    "?",
    "/",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "_",
    "=",
    "+",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y", 
    "U",
    "I", 
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M"
]

let passLength = document.getElementById('length')
function generatePassword() {
    let passwordLength = passLength.value

    for (let counter = 1; counter <= 4; counter+=1){
    let password = ''
        if (passwordLength >= 8) {
            for (let counter = 0; counter < passwordLength; counter+=1) {
                password = password + characters[Math.floor(Math.random()*characters.length)]
            }
            
            let genPasswordBox = document.getElementById("password"+counter)
            genPasswordBox.textContent = password
        }
        
    }
}
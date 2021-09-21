let censoredWord= ""
let censoredCount = 4
let characterArray = []
let indexArray = []
let attempts = 0

const words = JSON.parse(readTextFile("words.json"))
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
function getRandomlnt(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
    }
document.querySelector(".paly").onclick=function( ){
    censoredWord = words[getRandomlnt(0,words.length-1)]
    characterArray = []
    indexArray = []
    attempts = 10
    document.querySelector(".attempts").innerHTML = attempts
    document.querySelector(".check").disabled = false
    let count = 0
    while(count < censoredCount){
        let randomNum = getRandomlnt(0,word.length - 1)
        if(censoredWord[randomNum] != "*"){
            characterArray.push(censoredWord[randomNum])
            indexArray.push(randomNum)
            censoredWord = censoredWord.replaceAt(randomNum,"*")
            count++ 
        }

    }
    document.querySelector(".world").value = censoredWord
}
document.querySelector(".check").onclick=function( ){
    let input = document.querySelector(".letter").value
    if(characterArray.includes(input)){
        let ind = characterArray.indexOf(input)
        censoredWord = censoredWord.replaceAt(indexArray[ind],characterArray[ind])
        characterArray.splice(ind,1)
        indexArray.splice(ind,1)
        if(characterArray.length == 0){
            alert("ez win")
        }
    }
    else{
        attempts--
        document.querySelector(".attempts").innerHTML = attempts
        if(attempts == 0){
            document.querySelector(".check").disabled = true
            alert("proigral LOSHARA")
        }
    }
    document.querySelector(".world").value = censoredWord
}
var sentences = [
    "My passion is design",
    "My passion is artificial intelligence",
    "My passion is product creation",
    "My passion is psychology"
];

var currentSentence = 0;
var currentIndex = 0;
var intervalVal;
var element = document.querySelector("#catchphrase");
var cursor = document.querySelector("#cursor");




function Type(){
    var text = sentences[currentSentence].substring(0,currentIndex+1);
    element.innerHTML = text;
    currentIndex++;

    if(text === sentences[currentSentence]){
        cursor.style.display = 'none';

        clearInterval(intervalVal);
        setTimeout(function(){
            intervalVal = setInterval(Delete, 50);
        },1000);
    }
}

function Delete(){
    var text = sentences[currentSentence].substring(0,currentIndex - 1);
    element.innerHTML = text;
    currentIndex--; 

    if(text === ''){
        clearInterval(intervalVal);

        if(currentSentence == (sentences.length - 1))
            currentSentence = 0;
        
        else
            currentSentence++;
        
        currentIndex = 0;

        setTimeout(function(){
            cursor.style.display = 'inline-block';
            intervalVal = setInterval(Type, 100);
        }, 200);
    }
}

intervalVal = setInterval(Type, 100);




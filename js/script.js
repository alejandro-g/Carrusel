

function previousButton(){
    let currentPos;
    var nuevoArray;

    for(var i = 0; i < 5; i++){ 
        currentPos = document.getElementById(i + 1).getAttribute("ImageIndex");
        if(currentPos < 2){
            currentPos = 16;
        }
        currentPos--;
        nuevoArray = "./images/image" + currentPos + ".jpg"

        if (i == 2){
            document.getElementById("centerPic").src = nuevoArray;
        }
        document.getElementById(i + 1).setAttribute("ImageIndex" , currentPos);
        document.getElementById(i + 1).src = nuevoArray;
    }
}

function nextButton(){
    let currentPos;
    var nuevoArray;

    for(var i = 1; i <= 5; i++){
        currentPos = document.getElementById(i).getAttribute("ImageIndex");
        if(currentPos == 15){
            currentPos = 0;
        }
        currentPos++;
        nuevoArray = "./images/image" + currentPos + ".jpg"

        if (i == 3){
            document.getElementById("centerPic").src = nuevoArray;
        }
        document.getElementById(i).setAttribute("ImageIndex" , currentPos);
        document.getElementById(i).src = nuevoArray;
    }
}

function whenClicked(e){
    document.getElementById("centerPic").src = document.getElementById(e).src;
    if (n == 5){
        nextButton();
        previousButton();
    }

    if (n == 4){
        nextButton();
    }

    if(n == 2){
        previousButton();
    }

    if(n == 1){
        previousButton();
        nextButton();
    }
}





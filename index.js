var buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<buttons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
        if(this.innerText=="w"){
            var audio=new Audio("/sounds/crash.mp3");
            audio.play();
        }
        else if(this.innerText=="a"){
            var audio=new Audio("/sounds/kick-bass.mp3")
            audio.play();
        }
        else if(this.innerText=="s"){
            var audio=new Audio("/sounds/snare.mp3")
            audio.play();
        }
        else if(this.innerText=="d"){
            var audio=new Audio("/sounds/tom-1.mp3")
            audio.play();
        }
        else if(this.innerText=="j"){
            var audio=new Audio("/sounds/tom-2.mp3")
            audio.play();
        }
        else if(this.innerText=="k"){
            var audio=new Audio("/sounds/tom-3.mp3");
            audio.play();
        }
        else if(this.innerText=="l"){
            var audio=new Audio("/sounds/tom-4.mp3");
            audio.play();
        } 
        
});

}
document.addEventListener("keypress",function(element){
    // console.log(element);
    // alert("key is pressed");
    if(element.key=="d"){
        var audio=new Audio("/sounds/tom-1.mp3")
        audio.play();
    }
    else if(element.key=="l"){
        var audio=new Audio("/sounds/tom-4.mp3");
            audio.play();
    }
    else if(element.key=="k"){
        var audio=new Audio("/sounds/tom-3.mp3");
            audio.play();
    }
    else if(element.key=="j"){
        var audio=new Audio("/sounds/tom-2.mp3")
            audio.play();
         }
    else if(element.key=="s"){
        var audio=new Audio("/sounds/snare.mp3")
        audio.play();

    }
    else if(element.key=="a"){
        var audio=new Audio("/sounds/kick-bass.mp3")
            audio.play();
        }
    else if(element.key=="w"){
        var audio=new Audio("/sounds/crash.mp3");
        audio.play();
    }
});


// var audio=new Audio("/sounds/tom-1.mp3");
// audio.play();
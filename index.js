var playSong;
var playTime;
function dropdownMenu() {
                var x = document.getElementById("dropdownClick");
                if (x.className === "topnav") {
                    x.className += " responsive";
                    /*change topnav to topnav.responsive*/
                } else {
                    x.className ="topnav";
                }
            }

function getSong(){
    var song = document.getElementById("songs");
    localStorage.setItem("song", song.value);
}

function getTime(){
    var hours = document.getElementById("hrs");
    var mins = document.getElementById("mins");
    playTime = hours.value * 3600 + mins.value*60;
    localStorage.setItem("time", playTime);
    
}
//function mesg(){
//    playSong = localStorage.getItem("song");
//    var x = document.getElementById("audio");
//    if(playSong == "Rain")
//        x.src = "rainsound.mp3"
//    else if(playSong == "Forest" )
//        x.src = "light.mpeg";
//    alert("playing.."+x.src);
//}

function getCurrenttime(){
    var aud = document.getElementById("audio");
    aud.currentTime;
    if(aud.currentTime>5){
        aud.pause();
    }
}
function updateTrack(){
    playSong = localStorage.getItem("song");
    console.log(playSong);
    if(playSong == "rain")
        return "./data/rainsound.mp3";
    else if(playSong == "light")
        return "./data/light.mpeg";
    else if(playSong == "forest")
        return "./data/forest.m4a";
    else if(playSong == "waterflow")
        return "./data/waterflow.m4a";
    else
        alert("selected song may have been removed or is unavailable");
}
function play(){
    var stopTime = localStorage.getItem("time");
    var audio= document.getElementById("audio");
    audio.src = updateTrack();
    audio.load();
    if(audio.duration < stopTime){
        alert("The time limit exceeds music duration!!");
        return 0;
    }
      audio.currentTime=0;
      audio.play();
      console.log(audio.currentTime);
      setInterval(function(){
        
        if(audio.currentTime>stopTime){
          
          audio.pause();
        }
      },1000);

}
function pause(){
    var aud = document.getElementById("audio");
    aud.pause();
}
    
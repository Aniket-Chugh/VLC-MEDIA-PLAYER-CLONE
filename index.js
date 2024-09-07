const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoinputbtn = document.querySelector("#videoinputbtn");
const videoinput = document.querySelector("#video-input");
const videoPlayer = document.getElementById("main");
const toast = document.querySelector(".toast");
const play = document.querySelector("#icon-pp");
const pause = document.querySelector("#pause");
const fullScreen = document.querySelector("#fullScreen");
const duration = document.querySelector("#duration");
const durationStart = document.querySelector("#durationStart");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progressbar = document.querySelector(".progressBar");



backward.addEventListener("click",()=>{
    const video = document.querySelector("video");
video.currentTime -= 5;

})



forward.addEventListener("click",()=>{
    const video = document.querySelector("video");
video.currentTime += 5;

})




fullScreen.addEventListener("click", ()=>{
    videoPlayer.requestFullscreen();
})

pause.addEventListener("click", ()=>{
    const video = document.querySelector("video");
video.pause();
})

play.addEventListener("click", ()=> {
    const video = document.querySelector("video");
video.play();

})


const inputEventHandler = () => {
    console.log("input button is clicked !")
    videoinput.click();

}





videoinputbtn.addEventListener("click", inputEventHandler)
videoinput.addEventListener("change",(obj)=>{
const selectedfile = obj.target.files[0];


console.log(selectedfile)
const link = URL.createObjectURL(selectedfile);
const video = document.createElement("video");
video.src = link;
video.play();
// video.controls=true; , to get default controls.
// change the current volume
video.volume = 0.3;




setTimeout(() => {
    if (video.duration > 60) {
        duration.innerHTML = Math.round(video.duration / 60);

    }
    else{
        duration.innerHTML = Math.round(video.duration);

    }
}, 2000);


video.addEventListener('timeupdate',()=>{
    const percent = (video.currentTime / video.duration) * 100;
progressbar.style.width = percent + '%';
const minutes = Math.floor(video.currentTime / 60);
const seconds = Math.floor(video.currentTime % 60);
const formattedTime = `${minutes} : ${seconds}`;

durationStart.innerHTML = formattedTime;
}
);




video.setAttribute("class" , "video");
videoPlayer.appendChild(video);
})

const speedUpHandler = () => {


    const video = document.querySelector("video");
    console.log("speed up button is clicked")
    if (video == null) {
        alert("please add a video first ");
        return;

    }
     console.log("current speed : " , video.playbackRate);
     const increasedSpeed =  video.playbackRate + 0.5 ;
     video.playbackRate = increasedSpeed;
     console.log("increasedSpeed: " , increasedSpeed);
     if (increasedSpeed>3) {
        alert("3x speed is maxmum !")
        return;
    }

    if (increasedSpeed) {

        toast.innerHTML= "speed : " + increasedSpeed + "x";
        toast.style.display="block";

        setTimeout(() => {
            toast.style.display="none";

        }, 1000);
    }

}

const speedDownHandler = () => {


    const video = document.querySelector("video");
    console.log("speed down button is clicked")
    if (video == null) {
        alert("please add a video first ");
        return;

    }

    console.log("current speed : " , video.playbackRate);
    const decresedSpeed =  video.playbackRate - 0.5 ;

     if (decresedSpeed > 0) {

        video.playbackRate = decresedSpeed;
        console.log("decresedSpeed: " , decresedSpeed);
    }
    else{
        alert("more can not be possible !")
    }

    if (decresedSpeed) {

        toast.innerHTML= "speed : " + decresedSpeed + "x";
        toast.style.display="block";

        setTimeout(() => {
            toast.style.display="none";

        }, 1000);
    }

}


const volumeUpHandler = () => {
    const video = document.querySelector("video");
    if (video == null) {

        return;

    }
    console.log("current volume" , video.volume);
    const incresedVolume = video.volume + 0.1;
    if (incresedVolume) {
        toast.innerHTML="volume : " + Math.round((incresedVolume*100))+"%";
        toast.style.display="block";
        setTimeout(() => {
            toast.style.display="none";

        }, 1000);
    }
    if (incresedVolume>1) {
        return;
    }
    video.volume = incresedVolume;
    console.log("increasedVolume: " , incresedVolume);

}


const volumeDownHandler = () => {
    const video = document.querySelector("video");
    if (video == null) {

        return;

    }
    console.log("current volume" , video.volume);
    const decresedVolume = video.volume - 0.1;
    if (decresedVolume < 0.1) {
        video.volume = 0;
        toast.innerHTML="Mute";
        toast.style.display="block";
        setTimeout(() => {
            toast.style.display="none";

        }, 1000);
        return;
    }
    video.volume = decresedVolume;
    console.log("decresedVolume: " , decresedVolume);
    if (decresedVolume) {

            toast.innerHTML="volume : " + Math.round((decresedVolume*100))+"%";
            toast.style.display="block";
            setTimeout(() => {
                toast.style.display="none";

            }, 1000);
    }
}

speedUp.addEventListener("click" , speedUpHandler);
speedDown.addEventListener("click" ,speedDownHandler )
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);

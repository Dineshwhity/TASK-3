let mySong=document.getElementById("mySong");
let icon=document.getElementById("icon");

icon.onclick=function(){
    if(mySong.paused){
        mySong.play();
        icon.src="https://res.cloudinary.com/dogjnjbbc/image/upload/v1691734015/pause.png_czdzzu.jpg";

    }else{
        mySong.pause();
        icon.src="https://res.cloudinary.com/dogjnjbbc/image/upload/v1691733377/play.png_u3mjck.png";
    }
}
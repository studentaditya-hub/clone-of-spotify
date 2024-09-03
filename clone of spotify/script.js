console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex =0;
let audioElememt = new Audio ('song/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let giff = document.getElementById('giff');
let masterSongName = document.getElementById('masterSongName');
let songItem =Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName: "Aaj Ki Raat", filePath:"song/1.mp3", coverPath :"cover/1.webp"},
    {songName: "Millionaire", filePath:"song/2.mp3", coverPath :"cover/1.webp"},
    {songName: "Aayi nahi", filePath:"song/3.mp3", coverPath :"cover/1.webp"},
    {songName: "Blue Eyes", filePath:"song/4.mp3", coverPath :"cover/1.webp"},
    {songName: "Agar tum sath ho", filePath:"song/5.mp3", coverPath :"cover/1.webp"},
    {songName: "Apna Bana le", filePath:"song/6.mp3", coverPath :"cover/1.webp"},
    
]   

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})


// audioElememt.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElememt.paused || audioElememt.currentTime<=0){
        audioElememt.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        giff.style.opacity = '1';
    }
    else{
        audioElememt.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        giff.style.opacity = '0';
    }
});
// Listen to Events
audioElememt.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    // Update Seekbar
    progress = parseInt((audioElememt.currentTime/audioElememt.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change' ,()=>{
    audioElememt.currentTime = myProgressBar.value*audioElememt.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play') ;  
    })  
  
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e.target);   
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play') ;    
        e.target.classList.add('fa-circle-pause') ;  
        audioElememt.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElememt.currentTime = 0;
        audioElememt.play(); 
        giff.style.opacity = '1';
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
    songIndex += 0;
    }
    else{
        songIndex+=1;
    }
    audioElememt.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElememt.currentTime = 0;
    audioElememt.play(); 
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
    songIndex += 0;
    }
    else{
        songIndex -=1;
    }
    audioElememt.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElememt.currentTime = 0;
    audioElememt.play(); 
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})
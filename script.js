const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pauseBtn = document.getElementById('pause');
const image = document.getElementById('img-cover');
const title = document.getElementById('title');
const progres = document.getElementById('progres');
const audio = document.getElementById('audio');
const timeCurr = document.getElementById('time');
const arrMusic = ['meysamEbrahimi-Baroon', 'meysamEbrahimi-Del', 'RezaBahram-Atash'];
let num = 0;
let song = arrMusic[num];
playBtn.addEventListener('click', (e) => {
    audio.src = `./music/${arrMusic[num]}.mp3`;
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    image.classList.add('animation-image');
    title.textContent = arrMusic[num]
    audio.play()
    
});
pauseBtn.addEventListener('click', () => {
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    image.classList.remove('animation-image');
    
    audio.pause();
});
nextBtn.addEventListener('click', () => {
 num += 1
    audio.src= `./misic/${num}.mp3`;
    image.src = `./image/${arrMusic[num]}.jpg`;
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    image.classList.remove('animation-image');
    progres.style.width = 0
    audio.play();
    if(num >= arrMusic.length){
        num = 0
        image.src = `./image/${arrMusic[num]}.jpg`;
        audio.src= `./misic/${num}.mp3`;
        title.textContent = arrMusic[num]
        audio.play()
    }else{
        audio.src= `./misic/${num}.mp3`;
        image.src = `./image/${arrMusic[num]}.jpg`;
        title.textContent = arrMusic[num]
        audio.play()
    }
});
prevBtn.addEventListener('click', () => {
   num -= 1;
    image.src = `./image/${arrMusic[num]}.jpg`;
    audio.src= `./misic/${num}.mp3`;
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    image.classList.remove('animation-image');
    progres.style.width = 0
    audio.play();
    if(num < 0){
        num = arrMusic.length -1
        audio.src= `./misic/${num}.mp3`;
        image.src = `./image/${arrMusic[num]}.jpg`;
        title.textContent = arrMusic[num]
        audio.play()
    }else{
        audio.src= `./misic/${num}.mp3`;
        title.textContent = arrMusic[num]
        audio.play()
    }  
});
audio.addEventListener('timeupdate', () => {
   
   progres.style.width = (audio.currentTime * 100 / audio.duration) + '%';
   timeCurr.innerText = change(audio.currentTime)
   
    
})

function change(time){
    let minute = parseInt(time / 60);
    let second = parseInt(time - (minute * 60));
    if(second > 9){
        return minute.toString() + ":" + second.toString()
        }else{
        return minute.toString() + ':0' + second.toString()
        }
}


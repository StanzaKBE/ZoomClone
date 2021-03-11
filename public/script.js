const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');

myVideo.muted = true;

let myVideoStream;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream =>{
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
}).catch(function(err){
    console.log('Caught Error.')
})

const addVideoStream = (video,stream) =>{
    video.srcObject = stream;
    video.addEventListener('loadmetadata',()=>{
        video.play().catch(function() {
            // do something
            console.log('Issue Resolved Using a catch after play() funtion.');
        });
    })

    videoGrid.append(video);
}
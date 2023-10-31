function video_playback_rate(){
    let video = document.querySelector('video')
    video.defaultPlaybackRate = -150;
    video.load()
}
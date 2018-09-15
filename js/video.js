var video = document.getElementById("video");

function playPause()
{
    if(video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
}
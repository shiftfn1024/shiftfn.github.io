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
function videoCheck()
{
    if(video.paused === false)
    {
        video.pause();
    }
}
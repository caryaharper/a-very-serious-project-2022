const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const htmlBodyNode = document.querySelector('body');
const firstScript = document.querySelector('script');
htmlBodyNode.insertBefore(tag, firstScript);

let player;

//CANNOT BE AN ES6 ARROW FUNCTION, CAN HOWEVER BE A FUNCTION EXPRESSION OTHERWISE
function onYouTubeIframeAPIReady ()  {
    player = new YT.Player('rick-roll', {
        events: {
            onReady: onPlayerReady,
        }
    });
}

const onPlayerReady = (e) => {
    console.log(e.target);
    e.target.mute();
    e.target.playVideo();
}

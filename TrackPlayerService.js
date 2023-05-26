import TrackPlayer from "react-native-track-player";


module.exports = async function () {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
    TrackPlayer.addEventListener('remote-duck', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-unduck', () => TrackPlayer.play());
}
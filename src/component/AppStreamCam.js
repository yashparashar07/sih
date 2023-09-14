import React from 'react';

class AppStreamCam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          videoSrc: 'https://192.168.43.1:8080', // Initialize with an empty string
        };
        this.streamCamVideo = this.streamCamVideo.bind(this);
      }

  streamCamVideo() {
    var constraints = { audio: true, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
  }

  render() {
    return (
      <div>
        <div id="container">
          <video autoPlay={true} id="videoElement" controls></video>
        </div>
        <br />
        <button onClick={this.streamCamVideo}>Start streaming</button>
      </div>
    );
  }
}

export default AppStreamCam;

import { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

const PoseDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [sitUpCount, setSitUpCount] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const sitUpPhaseRef = useRef("down");
  const prevYRef = useRef(null);

  useEffect(() => {
    const loadPosenet = async () => {
      await tf.setBackend("webgl");
      const net = await posenet.load();
      setIsModelLoaded(true);
      detectPose(net);
    };

    const detectPose = async (net) => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        video.width = videoWidth;
        video.height = videoHeight;

        const pose = await net.estimateSinglePose(video, {
          flipHorizontal: false,
          decodingMethod: "single-person",
        });

        trackSitUps(pose);
        drawPose(pose, videoWidth, videoHeight);
      }
      requestAnimationFrame(() => detectPose(net));
    };

    const trackSitUps = (pose) => {
      const minConfidence = 0.5;
      const keypoints = pose.keypoints;
      const nose = keypoints.find((kp) => kp.part === "nose" && kp.score > minConfidence);

      if (!nose) return;

      const noseY = nose.position.y;

      if (prevYRef.current === null) {
        prevYRef.current = noseY;
        return;
      }

      const threshold = 30;

      if (noseY < prevYRef.current - threshold && sitUpPhaseRef.current === "down") {
        sitUpPhaseRef.current = "up";
      } else if (noseY > prevYRef.current + threshold && sitUpPhaseRef.current === "up") {
        sitUpPhaseRef.current = "down";
        setSitUpCount((prevCount) => prevCount + 1);
      }

      prevYRef.current = noseY;
    };

    const drawPose = (pose, width, height) => {
      const ctx = canvasRef.current.getContext("2d");
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      ctx.clearRect(0, 0, width, height);

      pose.keypoints.forEach(({ position, score }) => {
        if (score > 0.5) {
          ctx.beginPath();
          ctx.arc(position.x, position.y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "red";
          ctx.fill();
        }
      });
    };

    loadPosenet();
  }, []);

  const resetCounter = () => {
    setSitUpCount(0);
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <h1>Instructions - Step back and make about 2 meters  distance from the webcam. Stand facing the camera and slowly start doing squat</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", textAlign: "center", margin: "10px 0" }}>Total Squats: {sitUpCount}</h2>
      {!isModelLoaded && <p>Loading model...</p>}
      <div style={{ display: "inline-block", position: "relative" }}>
        <Webcam 
          ref={webcamRef} 
          mirrored={true}
          style={{
            width: 640,
            height: 480,
            borderRadius: "10px",
            border: "2px solid black",
            zIndex: 1,
          }} 
        />
        <button 
  onClick={resetCounter} 
  style={{ 
    padding: "10px 20px", 
    fontSize: "16px", 
    margin: "10px", 
    cursor: "pointer", 
    backgroundColor: "#ff4757", 
    color: "white", 
    border: "none", 
    borderRadius: "5px" 
  }}
>
  Reset
</button>

        <canvas 
          ref={canvasRef} 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 640,
            height: 480,
            zIndex: 2,
          }} 
        />
      </div>
    </div>
  );
};

export default PoseDetection;

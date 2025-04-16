import { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

const DumbbellCurlCounter = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [curlCount, setCurlCount] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const curlPhaseRef = useRef("down");
  const prevWristYRef = useRef(null);

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

        trackCurls(pose);
        drawPose(pose, videoWidth, videoHeight);
      }
      requestAnimationFrame(() => detectPose(net));
    };

    const trackCurls = (pose) => {
      const minConfidence = 0.5;
      const keypoints = pose.keypoints;
      const wrist = keypoints.find((kp) => kp.part === "rightWrist" && kp.score > minConfidence);

      if (!wrist) return;

      const wristY = wrist.position.y;

      if (prevWristYRef.current === null) {
        prevWristYRef.current = wristY;
        return;
      }

      const threshold = 30;

      if (wristY > prevWristYRef.current + threshold && curlPhaseRef.current === "up") {
        curlPhaseRef.current = "down";
        setCurlCount((prevCount) => prevCount + 1);
      } else if (wristY < prevWristYRef.current - threshold && curlPhaseRef.current === "down") {
        curlPhaseRef.current = "up";
      }

      prevWristYRef.current = wristY;
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
    setCurlCount(0);
  };

  return (
    <div style={{ textAlign: "center", position: "relative", marginTop: "20px" }}>
      <h1>Instructions -Put your arms in front of the webCam, then step back about 2 meters (or 2 steps). Slowly start doing arm curls.  </h1>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", textAlign: "center", margin: "10px 0" }}>
        Total Arm Curls: {curlCount}
      </h2>
     
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
          fontWeight: "bold",
          backgroundColor: "#ff4757",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
          marginTop:"10px"
        }}
      >
        Reset Counter
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

export default DumbbellCurlCounter;

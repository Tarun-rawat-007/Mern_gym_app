import { useState, useEffect, useRef } from "react";

const asanas = [
  { 
      name: "Pranamasana", 
      instructions: "Feet together, Join your palms in front of the chest in a prayer position. Breathe deeply and focus.",
      image: "https://media.istockphoto.com/id/1327257268/photo/fit-young-girl-practicing-yoga-at-sunset.jpg?s=612x612&w=0&k=20&c=xcrRVaVkeN8GngV1aOvGf2IXOFDcOmMO90hWaiCF5IM=" 
  },
  { 
      name: "Hastauttanasana", 
      instructions: "Inhale and raise your arms, stretch your whole body upward.", 
      image: "https://media.istockphoto.com/id/1327257278/photo/fit-young-girl-practicing-yoga-at-sunset.jpg?s=612x612&w=0&k=20&c=hy7ANxcMY2Zjq3DZ-NBDI6zEuTwkKtF2vA-BDlXO6Dg=" 
  },
  { 
      name: "Hastapadasana", 
      instructions: "Exhale and bend forward, touch your toes, or place hands on the floor.", 
      image: "https://media.istockphoto.com/id/1327257276/photo/fit-young-girl-practicing-yoga-at-sunset.jpg?s=612x612&w=0&k=20&c=SE249R3z1Vav1xntoOKUob6F7Ja1jHxyIM1DOFQYvFE=" 
  },
  { 
      name: "Ashwa Sanchalanasana", 
      instructions: "Step left foot back and bent Your right leg, look up. Inhale deeply.", 
      image: "https://media.istockphoto.com/id/1327257291/photo/fit-young-girl-practicing-yoga-at-sunset.jpg?s=612x612&w=0&k=20&c=EVl-HBOBUIjG7ZJRrTDoSUrJEwy-YGfHxYN-gRC5M9M=" 
  },
  { 
      name: "Dandasana", 
      instructions: "Step right foot back and Lay down to form a plank. Keep core tight.", 
      image: "https://media.istockphoto.com/id/1813104637/photo/morning-yoga-at-home.jpg?s=612x612&w=0&k=20&c=5j68VK_0rOlsqzzyycZZXeZymM8TH-Vk_kCTVKkKpao=" 
  },
  { 
      name: "Bhujangasana", 
      instructions: "Lift chest up, stretch spine. Inhale deeply.", 
      image: "https://media.istockphoto.com/id/1327258440/photo/fit-young-girl-practicing-yoga-at-sunset.jpg?s=612x612&w=0&k=20&c=kP0xUuksFai0TrNefyRVPlBEFvGmSI9GeD3Ydh0wKNE=" 
  },
  { 
      name: "Adho Mukha Svanasana", 
      instructions: "Hips up, heels down. Exhale fully.", 
      image: "https://media.istockphoto.com/id/1327257301/photo/fit-young-girl-practicing-yoga-at-sunset.jpg?s=612x612&w=0&k=20&c=IxUunXhsyEQ4gLTM907VGGYE9NnGNKNTFD9CNstnXAQ=" 
  },
  { 
      name: "Hastauttanasana", 
      instructions: "Inhale and raise your arms. Stretch your whole body upward.", 
      image: "https://media.istockphoto.com/id/500203020/photo/caucasian-woman-is-practicing-yoga-at-studio.jpg?s=612x612&w=0&k=20&c=5jrwOoB2tt2YLyAVKxt2p3Qnqzp7F1BN393nQItWraE=" 
  },
  { 
      name: "Tadasana", 
      instructions: "Stand tall, arms Side ways. Inhale and relax. ", 
      image: "https://media.istockphoto.com/id/546801266/photo/beautiful-sporty-young-woman-doing-tadasana-pose-in-white-loft.jpg?s=612x612&w=0&k=20&c=htrTLIzR3M6rJHiZUln2lCLN-2iNaChqQtcXSO82aNA=" 
  }
];

const YogaPose = () => {
  const [currentAsana, setCurrentAsana] = useState(0);
  const [isGuiding, setIsGuiding] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const speechRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isGuiding || isPaused) return;

    const speakInstruction = (text, callback) => {
      if (speechRef.current) speechSynthesis.cancel();
      speechRef.current = new SpeechSynthesisUtterance(text);
      speechRef.current.rate = 1;   // voice speed
      speechRef.current.onend = callback;
      speechSynthesis.speak(speechRef.current);
    };

    if (currentAsana < asanas.length) {
      speakInstruction(`${asanas[currentAsana].name}. ${asanas[currentAsana].instructions}`, () => {
        timerRef.current = setTimeout(() => {
          setCurrentAsana((prev) => prev + 1);
        }, 2000);
      });
    } else {
      setIsGuiding(false);
    }

    return () => clearTimeout(timerRef.current);
  }, [currentAsana, isGuiding, isPaused]);

  const startGuidance = () => {
    setCurrentAsana(0);
    setIsGuiding(true);
    setIsPaused(false);
  };

  const stopGuidance = () => {
    setIsGuiding(false);
    setIsPaused(false);
    speechSynthesis.cancel();
    clearTimeout(timerRef.current);
  };

  const pauseGuidance = () => {
    setIsPaused(true);
    speechSynthesis.pause();
    clearTimeout(timerRef.current);
  };

  const resumeGuidance = () => {
    setIsPaused(false);
    speechSynthesis.resume();
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#333" }}>Surya Namaskar - Guided Yoga Session with Voice Assistance</h1>
      {currentAsana < asanas.length ? (
        <>
          <h2 style={{ fontSize: "28px", color: "#444" }}>{asanas[currentAsana].name}</h2>
          <img src={asanas[currentAsana].image} alt={asanas[currentAsana].name} 
            style={{ width: "950px", height: "400px", borderRadius: "10px", display: "block", margin: "20px auto" }} />
          <p style={{ fontSize: "18px", color: "#555", marginBottom: "15px" }}>Directions: {asanas[currentAsana].instructions}</p>
        </>
      ) : (
        <h2 style={{ fontSize: "28px", color: "#dc3545",margin:"20px" }}>Session Completed</h2>
      )}
      <div>
        <button onClick={startGuidance} style={{ ...buttonStyle, backgroundColor: isGuiding ? "#aaa" : "green" }}>Start</button>
        <button onClick={pauseGuidance} disabled={!isGuiding || isPaused} style={{ ...buttonStyle, backgroundColor: isGuiding ? "blue" : "#aaa" }}>&#10074;&#10074;</button>
        <button onClick={resumeGuidance} disabled={!isPaused} style={{ ...buttonStyle, backgroundColor: isGuiding ? "blue" : "#aaa" }}>&#9658;</button>
        <button onClick={stopGuidance} disabled={!isGuiding} style={{ ...buttonStyle, backgroundColor: isGuiding ? "#dc3545" : "#dc3545" }}>Stop</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "6px",
  padding: "12px 20px",
  fontSize: "18px",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer"
};

export default YogaPose;

import DumbbellCurlCounter from "../asserts/DumbbellCurlCounter";
import PoseDetection from "../asserts/PoseDetection";
const TrackPro = () => {
  return (
    <>
    {/* Arm Curl Counter */}
   <div style={{ marginTop: "100px" }}>
   <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "20px", textTransform: "uppercase" }}>
  Dumbbell Curl Counter
</h1>
   <DumbbellCurlCounter />
</div>

<hr style={{ 
  margin: "20px ", 
  border: "none", 
  borderTop: "2px solid #ccc" 
}} />

{/* Pose Sit up  Counter */}
<div style={{ marginTop: "40px" }}>
<h1 style={{ fontSize: "32px", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "20px", textTransform: "uppercase" }}>
Squats  Counter
</h1>
    <PoseDetection></PoseDetection>
</div>

        
    </>
  )
}

export default TrackPro
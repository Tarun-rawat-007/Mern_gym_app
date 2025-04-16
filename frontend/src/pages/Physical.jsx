import { useState } from "react";
import "./Physical.css";
import Training from "./Training";



export default function BMICalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
  
          
            let categoryValue = "";
            if (bmiValue < 18.5) {
                categoryValue = "Underweight";
            } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
                categoryValue = "Normal weight";
            } else if (bmiValue >= 25 && bmiValue <= 29.9) {
                categoryValue = "Overweight";
            } else {
                categoryValue = "Obese";
            }
    
            setCategory(categoryValue);
        }
  
    };

    return (
        <>
     
        {/* <h1 className="physical-title mt-10">Physical Fitness</h1> */}
        {/* Exercise Gallery Section */}
        <section className="exercise-section ">
    <h2 className="section-title">Gym Workout Exercises</h2>
    <div className="exercise-grid">

        {/* Chest Card */}
        <div className="exercise-card">
            <img src="https://media.istockphoto.com/id/1028273740/photo/man-during-bench-press-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=nRDhcBGHVzZYFHZP7w_gs1chyTlHLmoXAP9CXWncy7A=" alt="Chest Workout" className="exercise-image"/>
            <h3 className="exercise-name">Chest</h3>
            <ul className="exercise-list">
                <li>Bench Press</li>
                <li>Incline Bench Press</li>
                <li>Dumbbell Fly</li>
                <li>Push-ups</li>
             
            </ul>
        </div>

        {/* Back Card */}
        <div className="exercise-card">
            <img src="https://plus.unsplash.com/premium_photo-1726711280313-2216553ee8aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGJhY2t8ZW58MHx8MHx8fDA%3D" alt="Back Workout" className="exercise-image"/>
            <h3 className="exercise-name">Back</h3>
            <ul className="exercise-list">
                <li>Pull-ups</li>
                <li>Deadlifts</li>
                <li>Lat Pulldown</li>
                <li>Seated Row</li>
        
            </ul>
        </div>

        {/* Shoulders Card */}
        <div className="exercise-card">
            <img src="https://images.unsplash.com/photo-1737601846456-12b0c13b2178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwYXJtfGVufDB8fDB8fHww" alt="Shoulders Workout" className="exercise-image"/>
            <h3 className="exercise-name">Shoulders</h3>
            <ul className="exercise-list">
                <li>Overhead Press</li>
                <li>Lateral Raises</li>
                <li>Front Raises</li>
                <li>Face Pulls</li>
            </ul>
        </div>

        {/* Arms Card */}
        <div className="exercise-card">
            <img src="https://plus.unsplash.com/premium_photo-1674059548485-808fc674463a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwYXJtc3xlbnwwfHwwfHx8MA%3D%3D" alt="Arms Workout" className="exercise-image"/>
            <h3 className="exercise-name">Arms</h3>
            <ul className="exercise-list">
                <li>Bicep Curls</li>
                <li>Triceps Dips</li>
                <li>Hammer Curls</li>
                <li>Skull Crushers</li>

            </ul>
        </div>

        {/* Legs Card */}
        <div className="exercise-card">
            <img src="https://images.unsplash.com/photo-1597341790240-8c6c568df852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMGxlZ3N8ZW58MHx8MHx8fDA%3D" alt="Leg Workout" className="exercise-image"/>
            <h3 className="exercise-name">Legs</h3>
            <ul className="exercise-list">
                <li>Squats</li>
                <li>Leg Press</li>
                <li>Lunges</li>
                <li>Hamstring Curls</li>
      
            </ul>
        </div>

        {/* Abs Card */}
        <div className="exercise-card">
            <img src="https://media.istockphoto.com/id/1288930279/photo/an-young-and-handsome-indian-bengali-brunette-man-with-muscular-body-doing-exercise-in-a-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=qBSy9l5hfMt5Fx93vf2FKryUxMgMQ4PI-ePaXZV_Gg8=" alt="Abs Workout" className="exercise-image"/>
            <h3 className="exercise-name">Abs</h3>
            <ul className="exercise-list">
                <li>Crunches</li>
                <li>Leg Raises</li>
                <li>Planks</li>    
                <li>Russian Twists</li>
            </ul>
        </div>

        {/* Glutes Card */}
        <div className="exercise-card">
            <img src="https://plus.unsplash.com/premium_photo-1664301504272-e6e4454d80b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwaGlwJTIwZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D" alt="Glutes Workout" className="exercise-image"/>
            <h3 className="exercise-name">Glutes</h3>
            <ul className="exercise-list">
                <li>Hip Thrusts</li>
                <li>Glute Bridges</li>
                <li>Bulgarian Split Squats</li>
                <li>Sumo Deadlifts</li>

            </ul>
        </div>

        {/* Cardio Card */}
        <div className="exercise-card">
            <img src="https://plus.unsplash.com/premium_photo-1661420093754-3be6a5338d65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bSUyMGdsdXRlcyUyMGV4ZXJjaXNlfGVufDB8fDB8fHww" alt="Cardio Workout" className="exercise-image"/>
            <h3 className="exercise-name">Cardio</h3>
            <ul className="exercise-list">
                <li>Running</li>
                <li>Rowing</li>
                <li>Burpees</li>
                <li>Mountain Climbers</li>
            </ul>
        </div>

    </div>
</section>


        {/* bmi section */}
        <div className="bmibody">
            <div className="bmi-card">
                {/* Left Section - BMI Calculator */}
                <div className="bmi-content">
                    <h2 className="bmihead">BMI Calculator</h2>
                    <div className="input-group">
                        <label className="bmilabel">Weight (kg)</label>
                        <input className="bmiinp"
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter your weight"
                        />
                    </div>
                    <div className="input-group">
                        <label className="bmilabel">Height (cm)</label>
                        <input className="bmiinp"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Enter your height"
                        />
                    </div>
                    <button className="btn-calculator" onClick={calculateBMI}>Calculate BMI</button>

                    {bmi && (
                        <div className="result">
                            <h3>Your BMI: {bmi}</h3>
                            <h4>Category: {category}</h4>
                        </div>
                    )}
                </div>
              
                {/* Right Section - image */}
                <div className="bmi-img">
                   <img src="https://plus.unsplash.com/premium_photo-1726769138252-77c7498b93d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keSUyMG1hc3MlMjBpbmRleHxlbnwwfHwwfHx8MA%3D%3D"  alt="bmi"  />
                </div>
            </div>
        </div>

        {/* No gym workout section */}
        <Training></Training>
         {/* end */}
    <section className="pending-section">
    <div className="poverlay">
        <div className="pquote-box">
        <p>&ldquo;Take care of your body. It’s the only place you have to live.&rdquo;</p>
<p>Regular exercise and a healthy lifestyle are the keys to a strong and energetic life!</p>
</div>
<div className="pquote-image">
    <img src="https://media.istockphoto.com/id/1129798528/photo/everything-you-ve-ever-wanted-is-on-the-other-side-of-fear-dark-skinned-sportsman-jumping.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Mu0LklIQyP4s_iHfSbQNBlrQ-wPjRF5cWUVjZZROqw=" alt="Fitness Lifestyle"/>
</div>

    </div>

</section>

        </>
    );
    
}


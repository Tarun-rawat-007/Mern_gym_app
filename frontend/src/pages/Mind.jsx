import { useState } from "react";
import "./Mind.css"
import YogaPose from "../asserts/YogaPose"

const affirmations = [
  "You are enough just as you are.",
  "Every day is a new opportunity to grow.",
  "Your mind is strong, and your heart is kind.",
  "Taking a deep breath helps reset your mind.",
  "You deserve love, peace, and happiness."
];

const tips = [
  "Practice mindfulness daily.",
  "Take short breaks to relax your mind.",
  "Keep a gratitude journal.",
  "Stay hydrated and eat nutritious food.",
  "Get at least 7-8 hours of sleep."
];

const Mind = () => {
  const [affirmation, setAffirmation] = useState(affirmations[0]);
  const [tip, setTip] = useState(tips[0]);

  const changeAffirmation = () => {
    setAffirmation(affirmations[Math.floor(Math.random() * affirmations.length)]);
  };

  const changeTip = () => {
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  return (
    <>
   <div className="hero-section text-center px-6 py-16 sm:px-8 md:px-16 lg:px-32 text-gray-900">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
    Unlock Mental Wellness
  </h2>
  <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-8 max-w-2xl mx-auto">
    Strengthen your mind and embrace a stress-free, balanced life with guided care and support.
  </p>
  <button className="bg-gray-900 text-white hover:bg-gray-700 font-medium text-lg py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
    Start Your Journey
  </button>
</div>


{/* Health & Mind Care Section */}
<div className="health-mind-section px-4 py-12 bg-gray-100">
  <div className="health-mind-content max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Health & Mind Care</h2>
    <p className="text-center text-gray-700 mb-8">
      Taking care of both your body and mind is essential for a balanced and fulfilling life.
    </p>

    <div className="health-mind-container grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Physical Health */}
      <div className="health-box bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Physical Health</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Exercise for at least 30 minutes daily</li>
          <li>Eat a balanced diet with proteins, vitamins, and minerals</li>
          <li>Stay hydrated and drink plenty of water</li>
          <li>Get at least 7-8 hours of sleep</li>
          <li>Maintain a proper posture to avoid back pain</li>
        </ul>
      </div>

      {/* Mental Wellness */}
      <div className="mind-box bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Mental Wellness</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Practice meditation and deep breathing</li>
          <li>Take breaks and manage stress effectively</li>
          <li>Stay connected with friends and family</li>
          <li>Engage in hobbies and activities you enjoy</li>
          <li>Seek professional help if needed</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    {/* <!-- Overcoming Stress & Anxiety Section --> */}
    <div className="stress-anxiety-section">
      <div className="stress-anxiety-content">
        <h2>Overcoming Stress & Anxiety in Todays World</h2>
        <p>
          Modern life is filled with stress, anxiety, and frustration. But with
          the right approach, we can overcome these challenges and live a
          peaceful life.
        </p>
        <div className="stress-tips">
          <div className="stress-item">
            <img
              src="https://media.istockphoto.com/id/1311740272/photo/man-meditating-in-lotus-position.jpg?s=612x612&w=0&k=20&c=68FKmwjEU0q0NDTXCIWbI_Lb9QrJ7B0RePXN_ENQrxY="
              alt="Meditation"
            />
            <h3>Meditation</h3>
            <p>
              Daily meditation helps reduce anxiety, increases focus, and brings
              mental clarity.
            </p>
          </div>
          <div className="stress-item">
            <img
              src="https://media.istockphoto.com/id/879180126/photo/picture-of-people-running-on-treadmill-in-gym.jpg?s=612x612&w=0&k=20&c=tib9Gcia2KkXmzPAgdFlyhsN3uBV0_7mMEpbJHObIaA="
              alt="Exercise"
            />
            <h3>Regular Exercise</h3>
            <p>
              Physical activity releases endorphins, which improve mood and
              reduce stress.
            </p>
          </div>
          <div className="stress-item">
            <img
              src="https://media.istockphoto.com/id/2151244399/photo/happy-senior-couple-spending-leisure-time-in-park.jpg?s=612x612&w=0&k=20&c=Y9usXz064JB5FifSwa_20fU38RIbT7W5VGMprnxR15A="
              alt="Social Connection"
            />
            <h3>Social Connection</h3>
            <p>
              Talking to friends and family provides emotional support and
              reduces stress.
            </p>
          </div>
          <div className="stress-item">
            <img
              src="https://media.istockphoto.com/id/1308574122/photo/fitness-woman-exercising-outdoors.jpg?s=612x612&w=0&k=20&c=qt-6sbKERJmS1m9fsZTdySkwfYF4P9Fpsbjdf4mStvE="
              alt="Relaxation"
            />
            <h3>Relaxation & Hobbies</h3>
            <p>
              Engaging in hobbies like music, reading, or painting helps in
              relaxation and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Affermations */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black
 p-6 pt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Mental Health & Fitness</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        A healthy mind is just as important as a healthy body. Take time for yourself,
        practice self-care, and prioritize mental well-being.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🌿 Daily Affirmation</h2>
          <p className="text-gray-600 italic">{affirmation}</p>
          <button 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={changeAffirmation}
          >
            New Affirmation
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">💡 Wellness Tip</h2>
          <p className="text-gray-600">{tip}</p>
          <button 
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={changeTip}
          >
            New Tip
          </button>
        </div>
      </div>

      
    </div>
    {/* <!-- Yoga Importance Section --> */}
<div className="yogai-section">
    <div className="yogai-content">
        <h2>Importance of Yoga</h2>
        <p>Yoga is a powerful practice that enhances both physical and mental well-being. It helps in stress reduction, improves flexibility, and promotes mindfulness.</p>
        <h3>How Yoga Helps in Relaxing the Mind:</h3>
        <ul>
            <li>Reduces stress and anxiety</li>
            <li>Enhances focus and concentration</li>
            <li>Improves breathing and relaxation</li>
            <li>Encourages mindfulness and inner peace</li>
            <li>Boosts overall emotional balance</li>
        </ul>
    </div>
    <div className="yogai-image">
        <img src="https://media.istockphoto.com/id/502937834/photo/young-woman-practicing-yoga-on-the-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=HoeripjoBnomphBj9Qsub4ZA2yLZx4qJD7kdtaPkq28=" alt="Yoga Relaxation"/>
    </div>
</div>

    {/* <!-- Yoga for Mind Relaxation Section --> */}
    <div className="yoga-section">
      <div className="yoga-content">
        <h2>Yoga poses for Mind Relaxation</h2>
        <p>
          Yoga is a great way to relax your mind, relieve stress, and improve
          mental clarity.
        </p>
        <div className="yoga-poses">
          <div className="yoga-item">
            <img
              src="https://media.istockphoto.com/id/2186939075/photo/mid-adult-woman-doing-yoga-exercise-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=ZVtplqzBzs_qc4kwkw10Ckg6-A4wuyR-34HbZZ9vJ3U="
              alt="Meditation Pose"
            />
            <p>
              Meditation Pose (Sukhasana) - Focuses on deep breathing and
              calmness
            </p>
          </div>
          <div className="yoga-item">
            <img
              src="https://media.istockphoto.com/id/1457610783/photo/asian-housewife-doing-childs-pose-exercise-during-home-workout-female-practicing-yoga-in.jpg?s=612x612&w=0&k=20&c=bpN6sKgJ-Jz-ltPYIXi53jZM3MRAJ2WEC8jh-lhruMM="
              alt="Child’s Pose"
            />
            <p>
              Child’s Pose (Balasana) - Relieves stress and soothes the nervous
              system
            </p>
          </div>
          <div className="yoga-item">
            <img
              src="https://media.istockphoto.com/id/517339050/photo/woman-relaxes-in-yoga-asana-savasana-outdoors.jpg?s=612x612&w=0&k=20&c=UupW78kTYLTTpt_UVyMI9zyIYbOnq_7SJZbv9qGnQbY="
              alt="Corpse Pose"
            />
            <p>
              Corpse Pose (Savasana) - Helps in complete relaxation and mental
              clarity
            </p>
          </div>
          <div className="yoga-item">
            <img
              src="https://media.istockphoto.com/id/1309835028/photo/side-view-of-a-young-man-practicing-yoga-at-home-and-doing-a-standing-forward-bend-pose.jpg?s=612x612&w=0&k=20&c=A02eivducLbcniQ0VW9W72WBcpXQ92m2896PFhijP4k="
              alt="Forward Bend"
            />
            <p>
              Standing Forward Bend (Uttanasana) - Reduces anxiety and improves
              blood flow
            </p>
          </div>
        </div>
      </div>
    </div>
    <YogaPose></YogaPose>
   </>
  );
};

export default Mind;
import "./Training.css";

const trainingData = [
    {
      title: "Push-ups",
      description: "A fundamental upper-body exercise that strengthens the chest, shoulders, and triceps while engaging the core.",
      steps: [
        "Start in a plank position with hands slightly wider than shoulder-width.",
        "Keep your body straight from head to heels.",
        "Lower your body until your chest nearly touches the floor.",
        "Push back up to the starting position.",
        "Repeat for the desired number of reps."
      ],
      image: "https://media.post.rvohealth.io/wp-content/uploads/2024/06/HL-03.07.Pushup.gif",
    },
    {
      title: "Sit-ups",
      description: "An effective core exercise that strengthens the abdominal muscles and improves overall core stability.",
      steps: [
        "Lie on your back with your knees bent and feet flat on the floor.",
        "Place your hands behind your head or cross them on your chest.",
        "Engage your core and lift your upper body towards your knees.",
        "Slowly lower yourself back down to the starting position.",
        "Repeat for the desired number of reps."
      ],
      image: "https://media2.giphy.com/media/35EH7kLQiMM1YWYmUI/200.webp?cid=ecf05e47u5ht5jfanord5jxu6mq1cn7b4g5gy2urc8umgm53&ep=v1_gifs_search&rid=200.webp&ct=g",
    },
    {
      title: "Leg Raises",
      description: "A lower abdominal exercise that strengthens the core and hip flexors.",
      steps: [
        "Lie flat on your back with legs straight.",
        "Keep your hands by your sides or under your lower back for support.",
        "Lift your legs up towards the ceiling while keeping them straight.",
        "Slowly lower them back down without touching the floor.",
        "Repeat for the desired reps."
      ],
      image: "https://media1.giphy.com/media/uOhYjZ6JpY3yRdawOS/giphy.webp?cid=790b7611tqa5gq8y92apvba8mrzzujlic8ypp9rgketm2u5i&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    },
    {
      title: "Squats",
      description: "A compound lower-body exercise that strengthens the legs, glutes, and core.",
      steps: [
        "Stand with feet shoulder-width apart.",
        "Lower your body by bending your knees and pushing your hips back.",
        "Keep your chest up and back straight.",
        "Lower until your thighs are parallel to the floor.",
        "Push through your heels to return to the starting position."
      ],
      image: "https://media0.giphy.com/media/P6Q7qAdAbrlXTJ488T/giphy.webp?cid=790b76119x6u9keg1tadvrdkbo309e4fxsrzncrshofw3ars&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    },
    {
      title: "Lunges",
      description: "A great unilateral exercise for improving leg strength, balance, and coordination.",
      steps: [
        "Stand with your feet hip-width apart.",
        "Step forward with one leg and lower your hips until both knees form a 90-degree angle.",
        "Keep your back straight and core engaged.",
        "Push off your front foot to return to the starting position.",
        "Repeat on the other leg and continue alternating."
      ],
      image: "https://media3.giphy.com/media/1ncuQASTajJ0lx6Nix/200.webp?cid=ecf05e47vbgvaqu9lzk1wn3udbrgf7bg3b9ten3xgmg5qtzc&ep=v1_gifs_search&rid=200.webp&ct=g",
    },
    {
      title: "Plank",
      description: "A core stability exercise that strengthens the abs, lower back, and shoulders.",
      steps: [
        "Start in a forearm plank position with your elbows under your shoulders.",
        "Keep your body straight from head to heels.",
        "Engage your core and hold the position without sagging or raising your hips.",
        "Maintain for 30-60 seconds or as long as possible."
      ],
      image: "https://media4.giphy.com/media/UgT7TnjU8u1g8XU7Yi/giphy.webp?cid=790b76118hdrvghgp9q3qlyhfou1vkly2m6sswaift7z1leh&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    },
    {
      title: "Jumping Jacks",
      description: "A cardio exercise that increases heart rate, improves stamina, and engages the whole body.",
      steps: [
        "Stand with feet together and hands at your sides.",
        "Jump and spread your legs while raising your arms overhead.",
        "Quickly jump back to the starting position.",
        "Repeat continuously at a steady pace."
      ],
      image: "https://media4.giphy.com/media/ckMk3RKUK29lziaspI/giphy.webp?cid=790b7611danmaaz6rn0qztjsdkp30x1ugabj7t447lv8ak32&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    },
    {
      title: "Burpees",
      description: "A full-body exercise that builds strength and endurance while improving coordination.",
      steps: [
        "Start standing with feet shoulder-width apart.",
        "Drop into a squat and place your hands on the floor.",
        "Kick your legs back into a plank position.",
        "Do a push-up, then jump your feet back to your hands.",
        "Explosively jump into the air and repeat."
      ],
      image: "https://media4.giphy.com/media/2TfCCfMdDbGTe/200.webp?cid=ecf05e47wudgb271mszk00xzbmqrwp2eab98dxc7jv8v2xt8&ep=v1_gifs_search&rid=200.webp&ct=g",
    },
   
    {
      title: "Wall Sit",
      description: "A lower-body endurance exercise that strengthens the quads and improves stability.",
      steps: [
        "Stand with your back against a wall.",
        "Slide down until your knees form a 90-degree angle.",
        "Keep your back flat against the wall and hold the position.",
        "Maintain for 30-60 seconds or as long as possible."
      ],
      image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzA1OHZ0ZXMya2FtNmNxdDZpY2h2Z213a2J4eHUxMjJkN3E3Z25sYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wiRXDJkS5rcMQ2oSJG/giphy.webp",
    },
    {
      title: "Mountain Climbers",
      description: "A high-intensity exercise that strengthens the core while improving cardiovascular endurance.",
      steps: [
        "Start in a plank position with hands under your shoulders.",
        "Quickly drive one knee towards your chest while keeping the other leg extended.",
        "Switch legs rapidly as if running in place.",
        "Keep your core engaged and maintain a steady pace."
      ],
      image: "https://media2.giphy.com/media/Rqn2jP5vJNebJ8nHqy/giphy.webp?cid=790b76118hdrvghgp9q3qlyhfou1vkly2m6sswaift7z1leh&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    }
  ];
  

const Training = () => {
  return (
    <>
<div className="thero-container ">
  <h1 className="thero-title">Home Workout Session</h1>
  <div className="thero-image"></div>
  <p className="thero-text">
    Stay fit and active with simple yet effective home workouts. No equipment needed—just your dedication and consistency!
    Build muscle and increase endurance with structured training routines. 
  </p>
</div>



   
    <div className="training-section">
      {trainingData.map((item, index) => (
        <div key={index} className="training-sec">
          {/*  left side */}
          <div className="training-image">
          <img src={item.image} alt="exercise"></img>
          </div>

          {/* Content on the right side */}
          <div className="training-content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h2 className="direc">Directions:</h2>
            <ol className="training-steps">
              {item.steps.map((step, i) => (
                <li key={i}>
                  <span>{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Training;

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    <div className="about-container mt-4">
      <h1 className="about-title">About Us</h1>
{/* Tarun */}
<div className="about-section">
      <img
  src="https://github.com/Tarun-rawat-007/Documents/blob/main/ppic.jpg?raw=true"
  alt="Person 3"
  className="profile-pic"
/>

        <div className="text-content">
          <div className="info">
            <div className="basic-details">
              <h2>Tarun Rawat</h2>
              <p className="role">Full Stack Web Devloper</p>
              <p>SAP ID: 1000019128 | Roll No: 221279104</p>
              <p>Dit University | BCA (Bachelor of Computer Applications)</p>
            </div>
            <div className="contact-details">
              <p>📧 1000019128@dit.edu.in</p>
              <p>📞 +456 123 7890</p>
             
            </div>
          </div>
          <p>Tarun is a passionate Full-Stack Web Developer with hands-on experience in building dynamic and responsive web applications. </p>
           <p>I specialize in full-stack development using the MERN stack (MongoDB, Express, React, Node.js). I build responsive, scalable web applications with React for the front end, Node and Express for the back end, and MongoDB for data management, focusing on performance and seamless user experiences.</p>
        </div>




      </div>

{/* person2  */}
      <div className="about-section reverse">
        <img
          src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww"
          alt="Tarun Rawat"
          className="profile-pic"
        />
        <div className="text-content">
          <div className="info">
            <div className="basic-details">
              <h2>person 2</h2>
              <p className="role">Frontend Developer</p>
              <p>SAP ID: 1000019128 | Roll No: 221279104</p>
              <p>Dit University | BCA (Bachelor of Computer Applications)</p>
            </div>
            <div className="contact-details">
              <p>📧 100001008@dit.edu.in</p>
              <p>📞 +91-12345 6789</p>
            </div>
          </div>
          <p>he specializes in front-end development, focusing on designing and implementing user-friendly interfaces to enhance the overall user experience. He works with React.js, HTML, CSS, and JavaScript to create responsive and interactive web applications.
</p>
<p>His responsibilities include developing reusable components and optimizing performance for smooth rendering. </p>

        </div>
      </div>
      <div className="about-section">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww"
          alt="Person 1"
          className="profile-pic"
        />
        <div className="text-content">
          <div className="info">
            <div className="basic-details">
              <h2>John Doe</h2>
              <p className="role">backend</p>
              <p>SAP ID: 123456 | Roll No: 01</p>
              <p>Dit University | BCA (Bachelor of Computer Applications)</p>
            </div>
            <div className="contact-details">
              <p>📧 john.doe@example.com</p>
              <p>📞 +123 456 7890</p>
            </div>
          </div>
          <p>John specializes in backend-end development, focusing on designing and implementing backend code  to enhance mobality. He works with Node.js, Express.js,  to create responsive and interactive web applications.
</p>
<p>His responsibilities include developing reusable components and optimizing performance for smooth rendering. </p>
        </div>
      </div>
      
    </div>
    {/* Thank You Section */}
    <div className="thank-you-section">
        <div className="thank-you-text">
          <h2>Thank You for Visiting!</h2>
          <p>We appreciate your time and interest in our project.</p>
          <h3>Project Name: Train With Us</h3>
        </div>
        <img
          src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
          alt="Thank You"
          className="thank-you-img"
        />
      </div>
    </>
  );
};

export default AboutUs;

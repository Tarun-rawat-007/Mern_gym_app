import "./SelfCare.css"

const SelfCare = () => {
  return (
    <>
        {/* <!-- Self-Care Section --> */}
<div className="self-care-section">
    <div className="self-care-content">
        <h2>Self-Care</h2>
        <p>Taking care of yourself is the first step toward maintaining good health and hygiene. Here are some essential self-care tips:</p>
        <div className="self-care-tips">
            <div className="self-care-item">
                <img src="https://media.istockphoto.com/id/658408466/photo/just-add-water.jpg?s=612x612&w=0&k=20&c=m6eaeOppq5rFlvuMluZX0smNoXl8YO480EZglCxknPQ=" alt="Hydration"/>
                <h3>Stay Hydrated</h3>
                <p>Drink plenty of water to keep your body hydrated and energized.</p>
            </div>
            <div className="self-care-item">
                <img src="https://media.istockphoto.com/id/812997516/photo/selection-of-healthy-rich-fiber-sources-vegan-food-for-cooking.jpg?s=612x612&w=0&k=20&c=ZOhazLNxjTHWDwBGeIQDJtIE2ZwWwhKHCl-6ywKEenM=" alt="Healthy Diet"/>
                <h3>Eat a Balanced Diet</h3>
                <p>Include fruits, vegetables, and proteins to maintain overall well-being.</p>
            </div>
            <div className="self-care-item">
                <img src="https://media.istockphoto.com/id/1365381889/photo/child-is-sleeping-in-the-bed.jpg?s=612x612&w=0&k=20&c=aty-aSihImmU2ebgK3VfEK1AIAb9mxyB2OrFraVII1o=" alt="Sleep"/>
                <h3>Get Enough Sleep</h3>
                <p>Aim for 7-8 hours of quality sleep to refresh your body and mind.</p>
            </div>
            <div className="self-care-item">
                <img src="https://media.istockphoto.com/id/1246244869/photo/close-up-of-laces-on-white-sneakers-at-home-guy-get-ready-for-workout-at-home.jpg?s=612x612&w=0&k=20&c=5LVSycAOzasTu_NCpmZ_egNqZV2xtYx45LsEJ1_KmBw=" alt="Exercise"/>
                <h3>Regular Exercise</h3>
                <p>Stay active to boost immunity and improve overall health.</p>
            </div>
        </div>
    </div>
</div>

    
    
    {/* <!-- Regular Check-Up Section --> */}
<div className="checkup-section">
    <div className="checkup-content">
        <h2>Regular Medical Check-Ups</h2>
        <p>
            Regular health check-ups help in early detection of potential health risks. 
            By keeping track of your health, you can prevent complications and lead a healthy life.
        </p>
        <ul>
            <li>Early detection of diseases</li>
            <li>Improved chances of treatment</li>
            <li>Better overall health management</li>
        </ul>
    </div>
    <div className="checkup-image">
        <img src="https://media.istockphoto.com/id/2165920617/photo/the-concept-of-financial-planning-in-medicine.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ob2DU_KGX443C32JbxTXe0ptS_STq9RQyen87SZ-Gqc=" alt="Regular Checkup"/>
    </div>
</div>
{/* <!-- Medical Hygiene Section --> */}
<div className="hygiene-section">
    <div className="hygiene-content">
        <h2>Essential Medical Hygiene Practices</h2>
        <p>
            Maintaining proper hygiene is crucial for preventing infections and staying healthy. 
            Here are some daily habits to follow:
        </p>
        <div className="hygiene-list">
            <div className="hygiene-item">
                <img src="https://media.istockphoto.com/id/182511400/photo/washing-hands.jpg?s=612x612&w=0&k=20&c=TLpsYp-_8v09_2F6sGTLOvKRB_37jfecUoZHDiywY2s=" alt="Hand Washing"/>
                <p>Wash hands regularly</p>
            </div>
            <div className="hygiene-item">
                <img src="https://media.istockphoto.com/id/1310251672/photo/mother-putting-protective-face-mask-on-her-daughters-face.jpg?s=612x612&w=0&k=20&c=iUvVbGEgyJ55X1xZehHxeHOX75ryDX4nlfS5oucsZBo=" alt="Wear Mask"/>
                <p>Wear a mask in crowded places</p>
            </div>
            <div className="hygiene-item">
                <img src="https://media.istockphoto.com/id/532170854/photo/open-female-mouth-during-oral-checkup-at-the-dentist-selective.jpg?s=612x612&w=0&k=20&c=YAA3Vr87bvypHCQI6K1rlcsSJAd5fMiXwqI7Jc3DDKo=" alt="Oral Hygiene"/>
                <p>Maintain oral hygiene</p>
            </div>
            <div className="hygiene-item">
                <img src="https://media.istockphoto.com/id/1132360364/vector/vector-green-emblem-farm-fresh-with-decorative-leaves-bright-alphabet-letters-numbers-and.jpg?s=612x612&w=0&k=20&c=yuP7voBbjFUpLfyuKijzSgVqIsr30tq3ADz8RSvFJas=" alt="Healthy Eating"/>
                <p>Eat fresh and clean food</p>
            </div>
        </div>
    </div>
</div>

    
    
    </>
  )
}

export default SelfCare
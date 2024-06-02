
import "./home.css";
import { Link } from 'react-router-dom';



const Home=()=>{
    return(
       <div className="home">
        <section className="home-items">
        <h2>coming in you may be, but living is a must</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis fugit soluta mollitia quaerat quasi pariatur modi libero ea facere!</p>
        <p>visit us</p>
       
        <div className="buton">
        <button id="but" className="header-li"><Link to="/tracks">Tracks</Link></button>
        <button id="but" className="header-li"><Link to="/events">Events</Link></button>
        </div>
    </section>
    <h1 className="main-title">about us</h1>
    <section className="about">
        <div id="about-item">
        <h1 id="title">our mission</h1>
        <p>Welcome to the MUTC! We are a dynamic club committed to fostering technological learning and innovation among our members. Our mission is to provide a collaborative environment where enthusiasts can explore and advance their knowledge in various tech fields. We value creativity, continuous learning, and community support, aiming to empower our members to become leaders in technology. Our objectives include organizing workshops, hosting tech talks, and offering hands-on projects to ensure practical experience. Join us in our journey to drive technological excellence and make impactful contributions to the tech community.</p>
        </div>
        <div id="about"></div>
    </section>
    <div className="testimonial">
    <h1 id="title">Testimonials</h1>
    <h2> what people say about us</h2>
    </div>
   
    <section className="test">
<button className="card">
<button id="closet"></button>
    <h2>John Doe, Software Engineer at TechCorp</h2>
    <p>"Joining MUTC was a turning point in my career. The hands-on workshops and collaborative projects honed my skills and gave me the confidence to tackle real-world challenges. The network and friendships I built here continue to support me in my professional journey."</p>   
</button>
<button className="card">
<button id="closeti"></button>
    <h2>Mike Johnson, Product Manager at WebSolutions</h2>
    <p>
"As a member of MUTC, I learned more than just technical skills. The emphasis on innovation and leadership prepared me for my current role as a product manager. The club’s environment is both inspiring and supportive, making it an ideal place for growth."</p>   
</button>
<button className="card">
<button id="close"></button>
    <h2>Jane Smith, Data Scientist at InnovateX</h2>
    <p>"MUTC provided a platform to explore my passion for data science. The mentorship and resources available were unparalleled. I graduated with a robust portfolio and landed my dream job soon after. I highly recommend MUTC to anyone serious about a tech career."</p>   
</button>
<button className="card">
<button id="closee"></button>
    <h2>Emily Davis, Full Stack Developer at CodeMasters</h2>
    <p>
"MUTC's projects and events were instrumental in shaping my coding abilities. The opportunity to work on real projects with peers was invaluable. I attribute much of my professional success to the experiences and knowledge I gained at MUTC."</p>   
</button>


    </section>
       
       </div>
    )
}

export default Home;
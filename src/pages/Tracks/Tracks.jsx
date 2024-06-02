import "./tracks.css";
import Track from "./Track";

const Tracks=()=>{
    return(
       <div>
        <section>
        <h1 className="main-title">our tracks</h1>
        <p id="par">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, praesentium? Totam, a impedit corporis laudantium autem aperiam minima eos repellendus incidunt necessitatibus voluptas, sed voluptatem suscipit consectetur obcaecati tempore laboriosam ducimus quod. Ex modi exercitationem dignissimos, qui doloremque ipsum odio.</p>
        </section>

        <section className="cos">
            <section className="coso">
            <div className="track"></div>
            <div id="details">
                <h2>Cyber Security</h2>
                <p>

Focus: Protecting systems, networks, and data from cyber threats.
Skills: Security protocols, ethical hacking, encryption, threat analysis.
Activities: Hands-on projects, real-world scenarios.
Outcome: Ability to safeguard digital environments, conduct security audits, and implement robust security measures.</p>
            </div>
            </section >
            <section className="coso">
            <div className="track2"></div>
            <div id="details">
                <h2>UI/UX Design</h2>
                <p>

Focus: Creating user-friendly and visually appealing interfaces.
Skills: User research, wireframing, prototyping, usability testing.
Activities: Practical projects, interactive workshops.
Outcome: Proficiency in design tools and techniques, creating effective user-centric designs for websites and apps.</p>
            </div>
            </section>
            <section className="coso">
            <div className="track3"></div>
            <div id="details">
                <h2>Web Development</h2>
                <p>

Focus: Building dynamic and responsive websites.
Skills: Front-end (HTML, CSS, JavaScript), back-end (Node.js, Express, databases).
Activities: Hands-on projects, collaborative coding.
Outcome: Ability to design, develop, and deploy full-stack web applications.</p>
            </div>
            </section>
            <section className="coso">
            <div className="track4" ></div>
            <div id="details">
                <h2>Mobile Apps Development</h2>
                <p>Focus: Designing and building applications for mobile devices.
Skills: Android and iOS development, languages like Java, Kotlin, Swift, Dart.
Activities: Hands-on projects, interactive sessions.
Outcome: Proficiency in building, testing, and deploying mobile apps.</p>
            </div>
            </section>
            <section className="coso">
            <div className="track5"></div>
            <div id="details">
                <h2>Cloud Engineering</h2>
                <p>Focus: Cloud computing and its applications.
Skills: Cloud service providers (AWS, Google Cloud, Azure), cloud architecture, virtualization, containerization, DevOps.
Activities: Practical projects, hands-on labs.
Outcome: Ability to build and maintain robust cloud-based solutions.</p>
            </div>
            </section >
            <section className="coso">
            <div className="track6"></div>
            <div id="details">
                <h2>Power Platform</h2>
                <p>

Focus: Leveraging Microsoft's Power Platform.
Skills: Creating custom business apps, automating workflows, analyzing data, building chatbots.
Activities: Hands-on projects, interactive workshops.
Outcome: Proficiency in developing integrated solutions using Power Platform tools to enhance business processes.</p>
            </div>
            </section>  
        </section>

        <section className="main">
    <div className="map">
        <h1>location</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507567541968!2d37.14447627372415!3d-0.7151076352659999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828996ce41f9c39%3A0xe9bd5117f20559ee!2sMuranga%20University%20Main%20Gate!5e0!3m2!1sen!2ske!4v1717345113470!5m2!1sen!2ske" width="600" height="450" style={{border:"0"}} loading="lazy" ></iframe>
    </div>
    <div className="form">
      <Track />
    </div>
    
        </section>
       </div>  
    )
}


export default Tracks;
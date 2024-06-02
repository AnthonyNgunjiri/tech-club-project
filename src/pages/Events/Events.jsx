import "./events.css";

const Details=({image,title,description})=>{
    return(
      <div>
        <section className="event"> 
        <section id="img">{image}</section>
<section>
<h1 id="details">{title}</h1>
        <p>{description}</p>
</section>
</section>
        
        
      </div>  
    )
}

const Events=()=>{
    return(
    <section>
        <h1 className="main-title">our weekly schedule</h1>
        <p id="par">
        here is our weekly programs 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum cupiditate voluptas a vitae sapiente officiis molestiae itaque nisi, voluptatibus nemo, corporis, eius quo sit! Iste quaerat maiores dolore doloribus error. Earum, fugit eaque. Atque magni corporis, ipsum porro fugit vero!</p>
        <section className="events">
        <Details image={<img src="/src/assets/cybo.jpeg" alt=""className="img"/>} title="Cyber security " description="- Every Monday from 4pm to 7pm at computer lab F04, led by Webster Ifedha." />
        <Details image={<img src="/src/assets/ui.jpeg" alt=""className="img" />} title="UI/UX" description=" - Every Tuesday from 5pm to 8pm at computer lab F04, led by Manase Gunga." />
        <Details image={<img src="/src/assets/bi.jpeg" alt=""className="img" />} title="Web development" description=" - Every Wednesday from 6pm to 9pm at computer lab F04, led by Carolyne Githenduka." />
        <Details image={< img src="/src/assets/mobile.jpeg" alt=""className="img" />} title="Mobile apps development" description=" - Every Thursday from 4pm to 7pm led by Stanley Amunze." />
        <Details image={<img src="/src/assets/clou.jpeg"alt=""className="img" />} title="Cloud engineering" description=" - Every Friday from 3pm to 6pm at computer lab F04, led by Paul Karanja." />
        <Details image={<img src="/src/assets/pow.jpeg" alt=""className="img" />} title="Power Platform" description="  Every Saturday from 1pm to 4pm at computer lab F04, led by Evyonn Mbithe." />
        </section>
        
    </section>
    
    )
}

export default Events;
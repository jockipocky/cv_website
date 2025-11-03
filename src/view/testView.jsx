import { observer } from "mobx-react-lite";
import "../css/test.css"
import { Roadmap } from "../component/roadMap";
export const TestView = observer(function TestView(props) {


    return (
            
<div className="pageRoot">
{/* Full-screen landing */}
<section className="landingPage" aria-label="Intro">
<div className="landingInner">
<h1 className="title">Hello! I am <span className="accent">Jacob Emanuelsson</span></h1>
<p className="subtitle">Full‑stack developer · Software student · Gamer</p>
<div className="ctaRow">
<a className="btnPrimary" href="/projects">Projects</a>
<a className="btnGhost" href="#contact" aria-label="Scroll to contact section">Contact me</a>
</div>
</div>
<div className="scrollCue" aria-hidden>
<a href="#contact" className="scrollLink">Scroll</a>
</div>
</section>


{/* Contact + Socials */}
<section id="contact" className="section" aria-label="Contact">
<div className="container">
<h2 className="sectionTitle">Get in touch</h2>


<div className="contactLayout">
<nav className="socialCard" aria-label="Social links">
<h3 className="cardTitle">Socials</h3>
<ul className="socialList">
<li>
<a className="socialItem linkedin" href="#" target="_blank" rel="noreferrer noopener" title="LinkedIn">
<span className="socialText">LinkedIn</span>
</a>
</li>
<li>
<a className="socialItem instagram" href="#" target="_blank" rel="noreferrer noopener" title="Instagram">
<span className="socialText">Instagram</span>
</a>
</li>
<li>
<a className="socialItem discord" href="#" target="_blank" rel="noreferrer noopener" title="Discord">
<span className="socialText">Discord</span>
</a>
</li>
<li>
<a className="socialItem x" href="#" target="_blank" rel="noreferrer noopener" title="X / Twitter">
<span className="socialText">X</span>
</a>
</li>
</ul>
</nav>


<form className="formCard" onSubmit={props.onSubmit} noValidate>
<h3 className="cardTitle">Send me a message</h3>
<div className="formGrid">
<div className="fieldRow two">
<label className="label" htmlFor="firstName">First name</label>
<input className="input" id="firstName" name="firstName" type="text" placeholder="First name" required />


<label className="label" htmlFor="lastName">Last name</label>
<input className="input" id="lastName" name="lastName" type="text" placeholder="Last name" required />
</div>


<div className="fieldRow">
<label className="label" htmlFor="email">Email</label>
<input className="input" id="email" name="email" type="email" placeholder="email@example.com" required />
</div>


<div className="fieldRow">
<label className="label" htmlFor="message">Message</label>
<textarea className="textarea" id="message" name="message" placeholder="Write your message..." rows={5} required />
</div>


<div className="actions">
<button className="btnPrimary" type="submit">Send</button>
</div>
</div>
</form>
</div>
</div>
</section>


{/* About / History / Education */}
<section id="about" className="section" aria-label="About">
<div className="container">
<h2 className="sectionTitle">My life</h2>
<Roadmap />
</div>
</section>
</div>
    );
});
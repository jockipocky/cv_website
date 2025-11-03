import { observer } from "mobx-react-lite";
import "../css/main.css"
import { Footer } from "../component/footer";
import { ContactForm } from "../component/contactForm";
import { SocialForm } from "../component/socialForm";


export const MainView = observer(function MainView(props) {

    function scrollToContact(event){
        if (event && event.preventDefault) event.preventDefault();
        var el = document.getElementById("contact");
        if (el && el.scrollIntoView) {
            el.scrollIntoView({ behavior: "smooth", block: "start"})
        }
    }
    return (
            
            <div className="pageRoot">
            {/* Full-screen landing */}
                <section className="landingPage" aria-label="Intro">
                    <div className="landingInner">
                        <h1 className="title">Hello! I am <span className="accent">Jacob Emanuelsson</span></h1>
                        <p className="subtitle">Full‑stack developer · Software student · Gamer</p>
                        <div className="ctaRow">
                            <a className="btnPrimary" href="/projects">Projects</a>
                            <a className="btnGhost" href="#contact" onClick={scrollToContact} aria-label="Scroll to contact section" >Contact me</a>
                        </div>
                    </div>

                </section>


                {/* Contact + Socials */}
                <section id="contact" className="section" aria-label="Contact">
                    <div className="container">
                        
                        <h2 className="sectionTitle">Get in touch</h2>


                        <div className="contactLayout">
                            {/* Socials */}
                            <SocialForm />


                            {/* Mail form */}
                            <ContactForm />
                        </div>
                    </div>
                </section>


                {/* About / History / Education */}
                <section id="about" className="section" aria-label="About">
                    <div className="container">
                        <h2 className="sectionTitle">My life</h2>
                        <p className="prose">
                            I have always had an interest in technology for as long as I can remember. Frontend, backend and databases, it’s all fun. I am studying for a bachelor’s degree in Computer Engineering.
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
            
    );
});
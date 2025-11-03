
export function SocialForm() {
  return (
    <nav className="socialCard" aria-label="Social links">
      <h3 className="cardTitle">Socials</h3>
      <ul className="socialList">
        <li>
          <a
            className="socialItem linkedin"
            href="https://www.linkedin.com/in/jacob-emanuelsson-b48459386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn"
          >
            <span className="socialText">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="socialItem instagram"
            href="https://www.instagram.com/jockypocky?igsh=MWFudWx1bGp4dXNlMQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer noopener"
            title="Instagram"
          >
            <span className="socialText">Instagram</span>
          </a>
        </li>
        <li>
          <a
            className="socialItem discord"
            href="https://discord.com/users/323795575986454529"
            target="_blank"
            rel="noreferrer noopener"
            title="Discord"
          >
            <span className="socialText">Discord</span>
          </a>
        </li>
        <li>
          <a
            className="socialItem x"
            href="https://x.com/jockipocky?s=21"
            target="_blank"
            rel="noreferrer noopener"
            title="X / Twitter"
          >
            <span className="socialText">X</span>
          </a>
        </li>
      </ul>

      <div className="socialPhone">
        <h3 className="cardTitle">Phone</h3>
        <a href="tel:0704208360" className="phoneLink">070-420 83 60</a>
      </div>
    </nav>
  );
}

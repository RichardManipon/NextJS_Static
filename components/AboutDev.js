import stylehome from "../styles/Home.module.css";
import styledev from "../styles/Dev.module.css";
import styleglobals from "../styles/Globals.module.css";
import Dev from "./Dev";
import { useState, useEffect } from "react";

const AboutDev = () => {
  const [carousel, setCarousel] = useState(1);
  const [quote, setQuote] = useState("");
  const [intro, setIntro] = useState(
    '"I will take responsibility for what I have done. If I must fall, I will rise each time a better man" -Brandon Sanderson, Oathbringer'
  );
  const [name, setName] = useState("Richard Manipon");
  const [role, setRole] = useState("Designer");
  const [image, setImage] = useState("manipon.svg");

  return (
    <div className={styleglobals.padd2} id="about">
      <Dev
        stylehome={stylehome}
        styledev={styledev}
        carousel={carousel}
        setCarousel={setCarousel}
        quote={quote}
        setQuote={setQuote}
        intro={intro}
        setIntro={setIntro}
        name={name}
        setName={setName}
        role={role}
        setRole={setRole}
        image={image}
        setImage={setImage}
      />
    </div>
  );
};

export default AboutDev;

import { useEffect } from "react";
import Image from "next/image";

const Dev = ({
  stylehome,
  styledev,
  carousel,
  setCarousel,
  name,
  setName,
  role,
  setRole,
  quote,
  setQuote,
  intro,
  setIntro,
  image,
  setImage,
}) => {
  useEffect(() => {
    if (carousel == 0) {
      setName("Daryl Magpantay");
      setRole("Manager");
      setImage("daryl.svg");
      setIntro("I am a student of Technological University of the Philippines"); // LAGAY NIYO DITO ABOUT SAINYO
      setCarousel(5);
    }
    if (carousel == 1) {
      setName("Richard Manipon");
      setRole("Designer");
      setImage("manipon.svg");
      setQuote(
        "I will take responsibility for what I have done. If I must fall, I will rise each time a better man -Brandon Sanderson, Oathbringer"
      ); // LAGAY QUOTE
      setIntro(
        "I am a student at the Technological University of the Philippines - Cavite Campus, and I often play videogames to relieve my stress."
      ); // LAGAY NIYO DITO ABOUT SAINYO
    }
    if (carousel == 2) {
      setName("Louise Yagi");
      setRole("Developer");
      setImage("yagi.svg");
      setQuote(
        '"If you are not a good shot today, don’t worry. There are other ways to be useful." - Sova'
      ); // LAGAY QUOTE
      setIntro(
        "I am a passionate student that excel in coding and designing using Java, C, C++, C#, PHP, Ruby, and most especially Python."
      ); // LAGAY NIYO DITO ABOUT SAINYO
    }
    if (carousel == 3) {
      setName("Justine Upano");
      setRole("Developer");
      setImage("justine.svg");
      setQuote(
        '"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code." - Dan Salomon'
      );
      setIntro(
        "I am a student, and a passionate front-end developer with a sharp eye for details."
      );
    }
    if (carousel == 4) {
      setName("James Matthew Ferrer");
      setRole("Designer");
      setImage("james.svg");
      setQuote('"It is what it is."');
      setIntro(
        "22 years old computer engineering student at Technological University of the Philippines – Cavite."
      );
    }
    if (carousel == 5) {
      setName("Daryl Magpantay");
      setRole("Manager");
      setImage("daryl.svg");
      setQuote("Tres is goods!!"); // LAGAY QUOTE
      setIntro("I am a student of Technological University of the Philippines"); // LAGAY NIYO DITO ABOUT SAINYO
    }
    if (carousel == 6) {
      setName("Richard Manipon");
      setRole("Designer");
      setImage("manipon.svg");
      setQuote(
        '"I will take responsibility for what I have done. If I must fall, I will rise each time a better man". -Brandon Sanderson, Oathbringer'
      ); // LAGAY QUOTE
      setIntro(""); // LAGAY NIYO DITO ABOUT SAINYO
      setCarousel(1);
    }
  });

  const handleNextPrevBtn = (bool) => {
    setTimeout(() => {
      if (bool == true) {
        setCarousel(carousel + 1);
      } else {
        setCarousel(carousel - 1);
      }
    }, 300);
  };
  return (
    <div className={styledev.dev}>
      <div className={styledev.text}>
        <h2 className={styledev.h2}>Our members</h2>
        <p className={styledev.p}>{intro}</p>
        <p className={styledev.p}>{quote}</p>
        <div>
          <span className={styledev.name}>{name} </span>
          <span className={styledev.role}>{role}</span>
        </div>
      </div>
      <div className={styledev.imgdiv}>
        <Image className={styledev.img} src={"/" + image} alt="" />
        <div className={styledev.btngroup}>
          <Image
            src="/prev-btn.svg"
            alt=""
            onClick={() => handleNextPrevBtn(false)}
          />
          <Image
            src="/next-btn.svg"
            alt=""
            onClick={() => handleNextPrevBtn(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;

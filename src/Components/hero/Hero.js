import HERO from "../../images/illustration-hero.svg";
import Button from "../navbar/Button";
const Hero = () => {
  return(
    <section className="hero">
    <div className="container">
      <div className="round-bg" />
      <div className="hero__content">
        <h1 className="hero__title">A Simple Bookmark Manager</h1>
        <p className="hero__desc">
          A clean and simple interface to organize your favourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </p>
        <div className="hero__btns">
          <Button className="btn-primary" content='Get it on Chrome' />
          <Button className="btn-secondary" content='Get it on Firefox' />
        </div>
      </div>
      <div className="hero__image">
        <img src={HERO} alt="hero-image" aria-hidden />
      </div>
    </div>
  </section>
  );
};
export default Hero;

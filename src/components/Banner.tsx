import style from "./banner.module.css";

export default function Banner() {
  return (
    <div className={style.bannerContainer}>
      <img
        src="https://www.nysac.org/media/2y0jirkg/crowd-event-hero.jpg"
        alt="banner"
        className={style.bannerImage}
      />

      <div className={style.bannerOverlay}></div>

      <section className={style.bannerContent}>
        <p className={style.bannerTitle}>where every event finds its venue</p>
        <p className={style.bannerDescription}>
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </p>
      </section>
    </div>
  );
}

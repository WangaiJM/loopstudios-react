import "./App.scss";

import Nav from "./components/Nav";
import ImageCard from "./components/ImageCard";

import aboutImageMobile from "./assets/mobile/image-interactive.jpg";
import aboutImageDesktop from "./assets/desktop/image-interactive.jpg";

// grid desktop Images
import imageCuriosityD from "./assets/desktop/image-curiosity.jpg";
import imageDeepEarthD from "./assets/desktop/image-deep-earth.jpg";
import imageFishEyeD from "./assets/desktop/image-fisheye.jpg";
import imageFromAboveD from "./assets/desktop/image-from-above.jpg";
import imageGridD from "./assets/desktop/image-grid.jpg";
import imageNightArcadeD from "./assets/desktop/image-night-arcade.jpg";
import imagePocketD from "./assets/desktop/image-pocket-borealis.jpg";
import imageSoccerD from "./assets/desktop/image-soccer-team.jpg";
// grid Mobile Images
import imageCuriosityM from "./assets/Mobile/image-curiosity.jpg";
import imageDeepEarthM from "./assets/Mobile/image-deep-earth.jpg";
import imageFishEyeM from "./assets/Mobile/image-fisheye.jpg";
import imageFromAboveM from "./assets/Mobile/image-from-above.jpg";
import imageGridM from "./assets/Mobile/image-grid.jpg";
import imageNightArcadeM from "./assets/Mobile/image-night-arcade.jpg";
import imagePocketM from "./assets/Mobile/image-pocket-borealis.jpg";
import imageSoccerM from "./assets/Mobile/image-soccer-team.jpg";
// grid ALt Text Images
const imageCuriosityAlt = "A curious machine";
const imageDeepEarthAlt = "An Image of earth from the sky";
const imageFishEyeAlt = "Panoramic view from a camera";
const imageFromAboveAlt = "A road image taken from above";
const imageGridAlt = "Tyre and side of a car";
const imageNightArcadeAlt = "A night archade";
const imagePocketAlt = "Borealis";
const imageSoccerAlt = "A soccer player with number 9 red jeysey dribling";

const App = () => {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <Nav />
          <h1 id="hero-title">Immersive experiences that deliver</h1>
        </div>
      </section>
      <section className="about" aria-labelledby="about-title">
        <div className="about-head">
          <picture>
            <source media="(min-width:40rem)" srcSet={aboutImageDesktop} />
            <img src={aboutImageMobile} alt="A man using VR headsets" />
          </picture>
        </div>
        <div className="about-content">
          <h2 id="about-title">The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="creations">
        <div className="creations-head">
          <h2>Our Creations</h2>
          <a href="#!"> See All</a>
        </div>
        <div className="creations-body">
          <ImageCard
            imageDesktop={imageDeepEarthD}
            imageMobile={imageDeepEarthM}
            alt={imageDeepEarthAlt}
            imageTitle={"Deep Earth"}
          />
          <ImageCard
            imageDesktop={imageNightArcadeD}
            imageMobile={imageNightArcadeM}
            alt={imageNightArcadeAlt}
            imageTitle={"Night Arcade"}
          />
          <ImageCard
            imageDesktop={imageSoccerD}
            imageMobile={imageSoccerM}
            alt={imageSoccerAlt}
            imageTitle={"Soccer Team VR"}
          />
          <ImageCard
            imageDesktop={imageGridD}
            imageMobile={imageGridM}
            alt={imageGridAlt}
            imageTitle={"The grid"}
          />
          <ImageCard
            imageDesktop={imageFromAboveD}
            imageMobile={imageFromAboveM}
            alt={imageFromAboveAlt}
            imageTitle={"Up From Above"}
          />
          <ImageCard
            imageDesktop={imagePocketD}
            imageMobile={imagePocketM}
            alt={imagePocketAlt}
            imageTitle={"Pocket Borealis"}
          />
          <ImageCard
            imageDesktop={imageCuriosityD}
            imageMobile={imageCuriosityM}
            alt={imageCuriosityAlt}
            imageTitle={"The curiosity"}
          />
          <ImageCard
            imageDesktop={imageFishEyeD}
            imageMobile={imageFishEyeM}
            alt={imageFishEyeAlt}
            imageTitle={"Make it fisheye"}
          />
        </div>
      </section>
    </>
  );
};
export default App;

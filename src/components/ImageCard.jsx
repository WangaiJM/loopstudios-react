import "./ImageCard.scss";

const ImageCard = ({ imageDesktop, imageMobile, alt, imageTitle }) => {
  return (
    <div className="imageCard">
      <picture>
        <source media="(min-width:68.75rem)" srcSet={imageDesktop} />
        <img src={imageMobile} alt={alt} />
      </picture>
      <h2>{imageTitle}</h2>
    </div>
  );
};
export default ImageCard;

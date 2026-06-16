import "./ImageCard.scss";

const ImageCard = ({ imageDesktop, imageMobile, alt, imageTitle }) => {
  return (
    <>
      <picture>
        <source media="(min-width:40rem)" srcSet={imageDesktop} />
        <img src={imageMobile} alt={alt} />
      </picture>
      <h2>{imageTitle}</h2>
    </>
  );
};
export default ImageCard;

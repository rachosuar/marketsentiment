import LogoImage from "../../../assets/images/ewol_logo.png";

const Logo = ({ width = 100 }) => (
  <img src={LogoImage} width={width} alt="Ewol logo" />
);

export default Logo;

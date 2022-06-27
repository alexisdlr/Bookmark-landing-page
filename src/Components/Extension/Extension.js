import dots from "../../images/bg-dots.svg";
import Button from "../navbar/Button";

const Extension = ({ image, title, version, index }) => {
  const style = { "--offset-top": `${index * 40}px` };
  return(
    <div className="extension__card" style={style}>
			<div className="extension__image">
				<img src={image} alt="extension" />
			</div>
			<div className="extension__card__content">
				<h3 className="extension__card__title">{title}</h3>
				<p className="extension__card__version">{version}</p>
				<img src={dots} aria-hidden className="dots" alt="dots-bg" />
				<Button className="btn-primary" content='Add & Install Extension' />
			</div>
		</div>
  )
}

export default Extension;
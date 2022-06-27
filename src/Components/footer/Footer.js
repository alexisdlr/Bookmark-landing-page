import { ReactComponent as LOGO } from "../../images/logo-bookmark.svg";
import { ReactComponent as Fb } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="navbar">
					<div className="navbar-brand">
						<a href="/" aria-label="home">
							<LOGO />
						</a>
					</div>
					<ul className="footer__navlinks">
						<li className="navlink">
							<a href="/">FEATURES</a>
						</li>
						<li className="navlink">
							<a href="/">PRICING</a>
						</li>
						<li className="navlink">
							<a href="/">CONTACT</a>
						</li>
					</ul>
					<div className="social-links">
						<Fb />
						<Twitter />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

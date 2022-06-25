import { ReactComponent as LOGO } from "../../images/logo-bookmark.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../images/icon-close.svg";
import { useLayoutEffect, useState } from "react";
import Button from "./Button";


const NavLink = ({text}) => {
	return(
		<li className="navlink">
						<a href="/">{text}</a>
		</li>
	)
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	useLayoutEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<header className="container">
			<nav className={isOpen ? "navbar open" : "navbar"}>
				<div className="navbar-brand">
					<a href="/" aria-label="home">
						<LOGO />
					</a>
				</div>
				<ul className="navlinks">
					{
						['FEATURES', 'PRICING', 'CONTACT'].map(link => (
							<NavLink 
							key={link}
							text={link}
							className='navlink'
							/>
						))
					}
					<li className="navlink">
						<Button
						content='LOGIN'
						className='btn-login'
						/>
					</li>
				</ul>
				<div>
					
				</div>
				<Button className="hamburger"
					content={isOpen ? (
						<Close onClick={() => setIsOpen(false)} />
					) : (
						<Hamburger onClick={() => setIsOpen(true)} />
					)}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
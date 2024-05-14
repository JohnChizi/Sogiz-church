import { } from "react";

const Header: React.FC = () => {
    return (
        <header>
            <h2><a href="#">SOGIZ BERLIN</a></h2>
            <ul className="nav">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </header>
    )
}

export default Header 
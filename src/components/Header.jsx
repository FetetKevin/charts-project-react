import logo from "../assets/images/logo.svg";

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <h1>My balance</h1>
                <h2>$921.48</h2>
            </div>
            <img src={logo} alt="" />
        </header>
    );
}

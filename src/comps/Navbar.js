import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const nav = useNavigate();

    const navMain = () => {
        console.log("navigate to main");
        nav("/");
    }
    const navDouble = () => {
        console.log("navigate to double");
        nav("/double");
    }

    return(
        <>
        <div className="navbar">
            <button className="navbarElement" onClick={navMain}>main</button>
            <button className="navbarElement" onClick={navDouble}>double page</button>
        </div>
        </>
    )
}

export default Navbar;
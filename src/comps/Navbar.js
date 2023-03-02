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
        <div className="navbarDem">
            <button className="navbarElementDem" onClick={navMain}>main</button>
            <button className="navbarElementDem" onClick={navDouble}>double page</button>
        </div>
        </>
    )
}

export default Navbar;
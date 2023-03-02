import {HashRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Title from "./Title"
import Double from "./Double"

const Menu = () => {
    return(
        <>
        <HashRouter>
            <Navbar></Navbar>
            <Routes>
                <Route exact-path = '/' element = {<Title></Title>}></Route>
                <Route path = 'double' element = {<Double></Double>}></Route>
            </Routes>
        </HashRouter>
        </>
    )
}

export default Menu;
import { useEffect } from "react";

const Double = () => {
    const [begin, setBegin] = useState();
    const [end, setEnd] = useState();
    const [double1s, setDouble1s] = useState();
    const [double2s, setDouble2s] = useState();
    const [btnClass, setBtnClass] = useState();
    useEffect( () => {
        setBtnClass("buttonDem")
    })
    const calculate = () => {
        //calcular para imprimir a doble cara en js

        var i = 234
        var f = 274

        var s = ""

        for(var p = i; p <= f; p+=2){
            s += p + ","
        }
        console.log("1, 3, 5, ...")
        console.log(s)
        setDouble1s("1, 3, 5, ... \n" + s)
        i++
        f++
        s = ""

        for(var p = i; p <= f; p+=2){
            s += p + ","
        }
        console.log("2, 4, 6, ...")
        console.log(s)
        setDouble2s("2, 4, 6, ... \n" + s)
    }
    const hoverBtn = () => {
        setBtnClass("buttonHoverDem")
    }
    return(
        <>
        <input type="number" placeholder="begin at"
            onChange={(e) => setBegin(e.target.value)}
                    value={begin}></input>
        <br></br>
        <input type="number" placeholder="end at"
            onChange={(e) => setEnd(e.target.value)}
            value={end}></input>
        <br></br>
        <button onClick={calculate} className={btnClass} onMouseOver={hoverBtn}>calculate</button>
        <br></br>
        <p id="double1s">{double1s}</p>
        <p id="double2s">{double2s}</p>
        </>
    )
}

export default Double;
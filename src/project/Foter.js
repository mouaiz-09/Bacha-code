import "./style/ContectFlew.css"
import Logo from "./icons/logobacha.svg"
export default function Foter(params) {
    return (<>

        <div className="foter">

            <div className="fotereContetn">
                <div className="logoFoter">
                    <img src={Logo} alt="logo " ></img>


                </div>
                <div className="Contact">
                    <div className="links">
                        <div className="links-ul">
                            <ul style={{ gap: '20px' }}>

                                <li> <a href="./"><i class="fi fi-brands-facebook"></i></a> </li>
                                <li> <a href="./"><i class="fi fi-brands-instagram"></i></a> </li>
                                <li> <a href="./"><i class="fi fi-brands-github"></i></a> </li>
                            </ul>
                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
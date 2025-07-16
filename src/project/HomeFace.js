
import "./style/GlobelStyle.css"
import logo from "./icons/undraw_programming_65t2.svg";
import ConetctFlew from "./ContectFlew"
export default function HomeFace(params) {


    return (
        <>
            <div className="HomeFace"  id="HomeFace">
                <div className="HomeFaceContent">
                    <div className="HomeLogo">
                        <img alt="logo home face" style={{ width: "400px" }} src={logo}></img>

                    </div>
                    <div className="HomeTxt">
                        <h1>أبني موقع يعبر عن شركتك  ويميزها عن غيرها</h1>

                        <div className="HometxtSecend">
                            <p>
                                : شركة برمجيات تقدم
                            </p>
                            <span>   تحسين محركات البحث</span>
                            , <span>    تطوير مواقع  </span>
                            ,    <span>   تصميم مواقع  </span>
                        </div>
                        <div className="buutonHomeFace">


                            <a  href="#Contects">

                                <p>أحصل على عرض</p>
                            </a>
                        </div>




                    </div>
                </div>
                <ConetctFlew></ConetctFlew>
            </div>
        </>
    )
}
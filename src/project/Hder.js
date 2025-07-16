import BchacodeLogo from "./icons/logobacha.svg"
import "./style/GlobelStyle.css";
import { useEffect, useState } from 'react';

import MenuListPage from "./MenuListPage";
export default function Hder() {
    // function  change background nav bar in scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    //  men
    const [menuVew, SetMenuVew] = useState(false)

    //func   set vew

    function Change(params) {
        if (menuVew) {
            SetMenuVew(false)
        }
        else {
            SetMenuVew(true)
        }   
    }

    return (
        <>

            <div className={`navbar ${scrolled ? 'scrolled' : ''}`} >
                <div className="logo-navbar">
                    <img src={BchacodeLogo} alt="logo " ></img>


                </div>
                <div className="links">
                    <div className="links-ul">
                        <ul>
                            <li><a href="#HomeFace"> الصفحة الرئيسية</a></li>
                            <li><a href="#Projects"> الخدمات  </a></li>
                            <li><a href="#About">نحن</a></li>
                            <li><a href="#Contects">تواصل معنا</a></li>
                        </ul>
                    </div>


                    {menuVew ? <button><i class="fi fi-sr-apps" onClick={() => { Change() }}  ></i></button> :

                        (<button><i class="fi fi-rr-apps" onClick={() => { Change() }} ></i></button>)}




                </div>
            </div>
            <MenuListPage Statue={menuVew} ></MenuListPage>

        </>

    );


}
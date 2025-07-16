import Logo from "./icons/logobacha.svg"

export default function About(params) {

    return (
        <>
            <div className="About" id="About">
               
                <div className="AboutContent">
                    <div className="AboutImg">
                        <object type="image/svg+xml" data={Logo}  >
                            no data
                        </object>

                    </div>
                    <div className="AboutTxt">
                      
                        <h2>

                            شركة جزائرية متخصصة في تصميم وتطوير المواقع. ندمج الإبداع بالتقنية لنمنحك تجربة رقمية لا تُنسى


                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
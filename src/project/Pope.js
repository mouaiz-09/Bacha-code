import "./style/GlobelStyle.css"
export default function Pope({ alt, text, src, statue, fuction, color ,box }) {
    return (<>

        {statue ? (<div className="Ppoe">
            <div className="PopeContent"  style={{boxShadow:`0px 0px 20px ${box}`}}>
                <div className="Ppoeimg">

                    <img alt={alt} src={src} ></img>
                </div>
                <div className="Popetext">

                    <h3 style={{ color: (color) }}>{text}</h3>
                </div>
                <b>Bacha Code</b>
                <button onClick={() => fuction()}>alert</button>
            </div>

        </div>) : ""}

    </>)
}
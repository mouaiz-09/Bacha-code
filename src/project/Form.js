import { useState } from "react"
import imglogo from "./icons/Coding.gif"
import Pope from "./Pope";

export default function Form(params) {
    const [vewstate, setvew] = useState({
        VewKey: false,
        Message: "جاري ارسال طلبكم",
        color: "rgb(255, 230, 0)",
        boxShadow: "rgb(255, 230, 0)",
        background: "#0b1120"
    });

    const realform = {
        VewKey: false,
        Message: "جاري ارسال طلبكم",
        color: "rgb(255, 230, 0)",
        boxShadow: "",
           background: "#0b1120"
    }

    //state for datat form
    const [FormDtat, SetFormDatat] = useState({
        Name: "",
        Phone: "",
        Email: "",
        Message: ""
    })
    const { Name, Phone, Email, Message } = FormDtat;

    //very dtat :
    const PushDtat = async () => {
        if (Name.length > 3 && Message.length > 5 && Phone.length === 10) {
            //ftech 
            setvew({ ...vewstate, VewKey: true })

            await fetch("https://script.google.com/macros/s/AKfycbwdSbpzdCx9qJNWc2BtYPB8wprcXHNGWVWYnWeD-PLRKHF9He09vOpgRqx_GpxWVOM2/exec", {
                method: 'POST',
                body: JSON.stringify(FormDtat)
            })
                .then(res => res.text())
                .then(response => {
                    SetFormDatat({ Name: '', Phone: '', Email: '', Message: '' });
                    setvew({ ...vewstate, Message: "تم الإرسال بنجاح", color: 'rgb(12, 201, 69)', VewKey: true, boxShadow: "rgb(12, 201, 69)" })

                })
                .catch(err => {
                    setvew({ ...vewstate, Message: "حدث خطا   لم يتم الارسال ", color: "red", VewKey: true, boxShadow: "red" })
                });

        }
        else {
            setvew({ ...vewstate, Message: 'معلومات التسجيل خاطئة', VewKey: true, boxShadow: "red" })
        }

    }


    function HendelPopePage(value) {

        setvew({...realform})
    }


    return (<>
        <div className="formsection">
            <h1 style={{ textAlign: "center" }}>أحصل على عرض </h1>
            <form onSubmit={(ev) => {
                ev.preventDefault();
            }}>

                <div className="FormInputs" id="Contects">
                    <div>
                        <label>Full Name</label>
                        <input type="txt" value={Name}
                            onChange={(ev) => SetFormDatat({ ...FormDtat, Name: ev.target.value })} ></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="number" value={Phone} onChange={(ev) => SetFormDatat({ ...FormDtat, Phone: ev.target.value })} ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={Email} onChange={(ev) => SetFormDatat({ ...FormDtat, Email: ev.target.value })} ></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea style={{ width: "400px", height: "50px" }}
                            value={Message}
                            onChange={(ev) => SetFormDatat({ ...FormDtat, Message: ev.target.value })} >
                        </textarea>
                    </div>
                    <div className="buutonHomeFace"  >
                        <input type="submit" value={"submit"} className="submitinput"
                            onClick={() => PushDtat()}
                        />

                    </div>
                </div>
            </form>
        </div>
        <Pope statue={vewstate.VewKey} fuction={HendelPopePage} src={imglogo} alt={"img"} text={vewstate.Message}
         key={1} color={vewstate.color}   box={vewstate.boxShadow} >


        </Pope>


    </>)
}

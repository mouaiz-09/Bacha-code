import { useState } from "react"
import LoadingCircleSpinner from "./LoadingCircleSpinner";

export default function Form(params) {
    const [vewstate, setvew] = useState(true);

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

            await fetch("https://script.google.com/macros/s/AKfycbwdSbpzdCx9qJNWc2BtYPB8wprcXHNGWVWYnWeD-PLRKHF9He09vOpgRqx_GpxWVOM2/exec", {
                method: 'POST',
                body: JSON.stringify(FormDtat)
            })
                .then(res => res.text())
                .then(response => {
                    alert('✅ تم إرسال الرسالة بنجاح!');
                    SetFormDatat({ Name: '', Phone: '', Email: '', Message: '' });
                    setvew(false)
                })
                .catch(err => {
                    console.error('❌ خطأ في الإرسال:', err);
                    alert('⚠️ صار خطأ أثناء الإرسال');
                    setvew(false)
                });




        }
        else {
            alert("erro")
        }

    }



    return (<>
        <div className="formsection">
            <h1 style={{ textAlign: "center" }}>أحصل على عرض </h1>
            <form onSubmit={(ev) => {
                ev.preventDefault();
                setvew(true)



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
        <LoadingCircleSpinner statae={vewstate}  ></LoadingCircleSpinner>


    </>)
}

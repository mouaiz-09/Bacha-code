export default function Form(params) {
    return (<>
        <div className="formsection">
            <h1 style={{ textAlign: "center" }}>أحصل على عرض </h1>
            <form onSubmit={(ev) => {
                ev.preventDefault()
            }}>

                <div className="FormInputs"   id="Contects">
                    <div>
                        <label>Full Name</label>
                        <input type="txt"></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="number"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea style={{ width: "400px", height: "50px" }}></textarea>
                    </div>
                    <div className="buutonHomeFace"  >
                        <input type="submit"  value={"submit"}   className="submitinput" />

                    </div>
                </div>
            </form>
        </div>
    </>)
}
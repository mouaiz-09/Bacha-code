import CardProject from "./CradProject"
/* icons  */
import DEV from "./icons/Coding.gif"
import dising from "./icons/Web Design.gif";
import server from "./icons/customer-service.png"
import seo from "./icons/seo.png"

export default function Projects(params) {
    const ContenProjects = {
        seo: "نُحسّن موقعك للظهور في نتائج البحث الأولى وجذب المزيد من الزوار.",
        TecSPPORT: "فريقنا جاهز لمساعدتك في أي وقت لضمان استمرار موقعك دون انقطاع.",
        dising: "نبتكر تصاميم واجهات جذابة وسهلة الاستخدام تعكس هوية مشروعك.",
        dev: "نستخدم أحدث التقنيات لبناء مواقع سريعة وآمنة تعمل على جميع الأجهزة."

    }
    return (<>
        <div
      id="Projects"
            className="Projects"
        >
            <div className="ProjectContetn">


                <h1>خدماتنا</h1>

                <div className="ProjectsCrads">
                    <CardProject ImgSrc={seo} Titel="Seo" spanContetn={ContenProjects.seo} Altimg="seo img" >  </CardProject>
                    <CardProject ImgSrc={server} Titel="SPPORT" spanContetn={ContenProjects.TecSPPORT} Altimg="seo img" >  </CardProject>
                    <CardProject ImgSrc={dising} Titel="dising" spanContetn={ContenProjects.dising} Altimg="seo img" >  </CardProject>
                    <CardProject ImgSrc={DEV} Titel="dev" spanContetn={ContenProjects.dev} Altimg="seo img" >  </CardProject>

                </div>
            </div>
        </div>
    </>)
}
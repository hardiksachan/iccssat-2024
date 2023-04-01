import styles from "@/styles/pages/Index.module.scss"
import {BsArrowRight} from "react-icons/bs"
import Image from "next/image"
import img1 from "@/assets/img/tracks-intro-img-01.jpg"
import img2 from "@/assets/img/tracks-intro-img-02.jpg"
import img3 from "@/assets/img/tracks-intro-img-03.jpg"
import IccssatLogo from "@/assets/iccssat-logo.png"
import {BsFillCalendarEventFill} from "react-icons/bs";
import {FaLocationArrow} from "react-icons/fa";
import HomeGallery from "@/components/HomeGallery";
import Subcommittee from "@/components/Subcommittee";
import committee from "@/app/committee";
import Tracks from "@/components/Tracks";


const IndexPage = () => {
    return (<>
        <div className={styles.section_hero}>
            <Image src={IccssatLogo} alt="ICCSSAT" className={styles.Hero_logo}/>
            <p className={styles.Hero_pretext}>I<sup>st</sup> International Conference on</p>
            <h1 className={styles.Hero_name}>Computationally Smart Systems &amp; Advanced Technologies</h1>
            <div className={`${styles.Hero_date}`}><BsFillCalendarEventFill/> 24 - 26 March 2024</div>
            <div className={styles.Hero_place}><FaLocationArrow/>NIT Delhi, India</div>
            <div className={styles.Hero_gallery}>
                <HomeGallery/>
            </div>
        </div>
        <div className={styles.section_tracks}>
            <h1 className="h1 mb-sm">WELCOME TO <span id="heading_span"> ICCSSAT 2024</span></h1>
            <div className={styles.Intro}>
                <div className={styles.Intro_content}>

                    <p className="p mb-md">
                        The area of computing and communication has grown evidently since past two decades with wide
                        ranging aspects. Computing includes designing, developing and building hardware and software
                        systems; processing, structuring, and managing various kinds of information; doing
                        scientific research on and with computers; making computer systems behave intelligently; and
                        creating and using communications and entertainment media. <br/>
                        <br/> The field of computing includes computer engineering, software engineering, computer
                        science, information systems, information technology and the list is virtually endless, and
                        the possibilities are vast. Communication means to share, it is the act of conveying
                        intended meanings from one entity or group to another through the use of mutually understood
                        signs and semiotic rules. It also has wide ranging applied areas which includes Network
                        communication, Security etc. <br/> <br/>
                    </p>

                    <a href="" className={`${styles.Intro_learnMore} mb-lg`}>Find out more about the
                        event <BsArrowRight/></a>
                </div>
                <div className={styles.IntroComposition}>
                    <Image src={img1}
                           className={`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p1}`}/>
                    <Image src={img2}
                           className={`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p2}`}/>
                    <Image src={img3}
                           className={`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p3}`}/>
                </div>
            </div>
            <h2 className="h2">Tracks</h2>
            <Tracks />
        </div>
        {/* TODO: <div className={styles.section_rules}>RULES</div>*/}
        <div className={styles.OrganisingCommittee}>
            <h2 className={`h2 ${styles.OrganisingCommittee_heading}`}>Organising Committee</h2>
            {committee.map(function (subcommittee) {
                return <Subcommittee title={subcommittee.title} members={subcommittee.members}/>
            })}
        </div>
    </>)
}

export default IndexPage
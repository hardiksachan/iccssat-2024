import styles from "@/styles/pages/Index.module.scss"
import {BsArrowRight} from "react-icons/bs"
import Image from "next/image"
import img1 from "@/assets/img/tracks-intro-img-01.jpg"
import img2 from "@/assets/img/tracks-intro-img-02.jpg"
import img3 from "@/assets/img/tracks-intro-img-03.jpg"
import NitdLogo from "@/assets/nitd-logo-labeled-blue.png"


const IndexPage = () => {
    return (
        <>
          <div className={styles.section_hero}>
                <p className={styles.ConferenceHeading_pretext}>First International Conference on</p>
                <h1 className={styles.ConferenceHeading_title}>Computationally Smart Systems &amp; Advanced
                    Technologies</h1>
                <h3 className={styles.ConferenceHeading_date}>March 2024</h3>
                <figure className={styles.OrganisedBy}>
                    <p className={styles.OrganisedBy_pretext}>Organised By</p>
                    <Image src={NitdLogo} className={styles.OrganisedBy_logo}></Image>
                </figure>
            </div>
            <div className={styles.section_tracks}>
                <h1 className="h1">WELCOME TO <span id="heading_span"> ICCSSAT 2024</span></h1>              
                <div className={styles.Intro}>
                    <div className={styles.Intro_content}>

                        <p className="p">
                        The area of computing and communication has grown evidently since past two decades with wide ranging aspects. Computing includes designing, developing and building hardware and software systems; processing, structuring, and managing various kinds of information; doing scientific research on and with computers; making computer systems behave intelligently; and creating and using communications and entertainment media. <br />
                        <br/> The field of computing includes computer engineering, software engineering, computer science, information systems, information technology and the list is virtually endless, and the possibilities are vast. Communication means to share, it is the act of conveying intended meanings from one entity or group to another through the use of mutually understood signs and semiotic rules. It also has wide ranging applied areas which includes Network communication, Security etc. <br /> <br/>
                        </p>

                        <a href="" className={styles.Intro_learnMore}>Find out more about the event <BsArrowRight /></a> 
                    </div>
                    <div className={styles.IntroComposition} >
                    <Image src = {img1} className= {`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p1}`} />    
                    <Image src = {img2} className= {`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p2}`} />    
                    <Image src = {img3} className= {`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p3}`} />
                    </div>
                </div>
                <h2 className="h2">Tracks</h2>
            </div>
            <div className={styles.section_rules}>RULES</div>
            <div className={styles.section_organisingCommittee}>ORGANISING COMMITTEE</div>
        </>
    )
}

export default IndexPage
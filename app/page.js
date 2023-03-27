import styles from "@/styles/pages/Index.module.scss"
import {BsArrowRight} from "react-icons/bs"
import Image from "next/image"
import img1 from "@/assets/img/tracks-intro-img-01.jpg"
import img2 from "@/assets/img/tracks-intro-img-02.jpg"
import img3 from "@/assets/img/tracks-intro-img-03.jpg"
import NitdLogo from "@/assets/nitd-logo-labeled-blue.png"
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";


const IndexPage = () => {
    return (
        <>
          <div className={styles.section_hero}>
                <p className={styles.ConferenceHeading_pretext}>First International Conference on</p>
                <h1 className={styles.ConferenceHeading_title}>Computationally Smart Systems &amp; Advanced
                    Technologies</h1>
                <h3 className={styles.ConferenceHeading_date}><BsFillCalendarEventFill/> 24 - 26 March 2024</h3>
                <h3 className={styles.ConferenceHeading_place}><FaLocationArrow/> NIT Delhi, India</h3>
                <figure className={styles.OrganisedBy}>
                    <p className={styles.OrganisedBy_pretext}>Organised By</p>
                    <Image src={NitdLogo} className={styles.OrganisedBy_logo}></Image>
                </figure>
            </div>
            <div className={styles.section_tracks}>
                <h1 className="h1 mb-sm">WELCOME TO <span id="heading_span"> ICCSSAT 2024</span></h1>              
                <div className={styles.Intro}>
                    <div className={styles.Intro_content}>

                        <p className="p mb-md">
                        The area of computing and communication has grown evidently since past two decades with wide ranging aspects. Computing includes designing, developing and building hardware and software systems; processing, structuring, and managing various kinds of information; doing scientific research on and with computers; making computer systems behave intelligently; and creating and using communications and entertainment media. <br />
                        <br/> The field of computing includes computer engineering, software engineering, computer science, information systems, information technology and the list is virtually endless, and the possibilities are vast. Communication means to share, it is the act of conveying intended meanings from one entity or group to another through the use of mutually understood signs and semiotic rules. It also has wide ranging applied areas which includes Network communication, Security etc. <br /> <br/>
                        </p>

                        <a href="" className={`${styles.Intro_learnMore} mb-lg`}>Find out more about the event <BsArrowRight /></a> 
                    </div>
                    <div className={styles.IntroComposition} >
                    <Image src = {img1} className= {`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p1}`} />    
                    <Image src = {img2} className= {`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p2}`} />    
                    <Image src = {img3} className= {`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p3}`} />
                    </div>
                </div>
                <h2 className="h2">Tracks</h2>
                <div className={styles.TracksPath}>
                    <ul className={styles.TracksPath_Timeline}>
                        <li className={styles.TracksPath_events} data-date="Track - 01">
                            <h3 className="h3">Data Analytics and Mining</h3>
                            <p className="p-track">Prof. Vikram Goyal , Professor  IIIT Delhi</p>
                        </li>
                        <li className={styles.TracksPath_events} data-date="Track - 02">
                            <h3 className="h3">Cryptography and Network Security</h3>
                            <p className="p-track">Prof. Harsh K. Verma , Professor , Department Of Computer Science <br/>  NIT Jalandhar</p>    
                        </li>
                        <li className={styles.TracksPath_events} id="date" data-date="Track - 03">
                            <h3 className="h3">Cloud Computing ans IoT</h3>
                            <p className="p-track"></p> <p className="p-track">Dr. Mashtaq Ahmed , Associate Professor <br/> MNIT Jaipur</p>    
                        </li>
                            
                        <li className={styles.TracksPath_events}  id="date" data-date="Track - 04">
                            <h3 className="h3">Artificial Intelligence and Machine Learning</h3>
                            <p className="p-track"></p> <p className="p-track">Dr. Shailender Kumar , Associate Professor <br/> DTU , New Delhi</p>    
                        </li>
                            
                        <li className={styles.TracksPath_events}  id="date" data-date="Track - 05">
                            <h3 className="h3">Cyber Security Security</h3>
                            <p className="p-track"></p> <p className="p-track">Dr. Deepak Singh Tomar , Associate Professor <br/> NIT Bhopal</p>    
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className={styles.section_rules}>RULES</div>
            <div className={styles.section_organisingCommittee}>ORGANISING COMMITTEE</div>
        </>
    )
}

export default IndexPage
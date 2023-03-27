import styles from "@/styles/pages/Index.module.scss"
import Image from "next/image"
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
            <div className={styles.section_tracks}>TRACKS</div>
            <div className={styles.section_rules}>RULES</div>
            <div className={styles.section_organisingCommittee}>ORGANISING COMMITTEE</div>
        </>
    )
}

export default IndexPage
import styles from "@/styles/pages/Index.module.scss"

const IndexPage = () => {
    return (
        <>
            <div className={styles.section_hero}>HERO</div>
            <div className={styles.section_tracks}>TRACKS</div>
            <div className={styles.section_rules}>RULES</div>
            <div className={styles.section_organisingCommittee}>ORGANISING COMMITTEE</div>
        </>
    )
}

export default IndexPage
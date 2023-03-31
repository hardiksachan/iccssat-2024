import styles from "@/styles/components/CommitteeMember.module.scss"
import Image from "next/image"

const CommitteeMember = (props) => {
    return (
        <figure className={`${props.className} ${styles.CommitteeMember}`}>
            <Image className={styles.CommitteeMember_img} alt={props.member.name} src={props.member.img} />
            <figcaption className={styles.CommitteeMember_name}>{props.member.name}</figcaption>
            <p className={styles.CommitteeMember_designation}>{props.member.designation}</p>
            <p className={styles.CommitteeMember_affiliation}>{props.member.affiliation}</p>
        </figure>
    )
}

export default CommitteeMember
"use client";

import styles from "@/styles/components/Tracks.module.scss"
import Image from "next/image";
import {useState} from "react";
import trackImg from "@/assets/img/Data-mining.jpg";

const Tracks = () => {
    const [activeTrack, setActiveTrack] = useState(-1)

    const tracks = [
        {
            id: 1,
            name: "Data Analytics & Mining",
            img: trackImg,
            shortDescription: "All over the world, organizations are harnessing the true power of data and analytics strategies to optimize decision-making during this time of ever-present disruption. As a data analytics track, it scales cohesive ecosystems across the organization to enhance skills while using AI for ethical management of data and privacy.",
            longDescription: ["All over the world, organizations are harnessing the true power of data and analytics strategies to optimize decision-making during this time of ever-present disruption. As a data analytics track, it scales cohesive ecosystems across the organization to enhance skills while using AI for ethical management of data and privacy.", "Implement strategies and innovations backed by data, analytics, and data science to navigate disruption. Lead purposefully by balancing trust, accountability, governance, and security with adaptability and responsiveness. Scale the purpose beyond organizational silos, across value chains, and ecosystems to foster societal perseverance. Leverage cloud-based data management to optimize costs in the current economic environment."]
        }, {
            id: 2,
            name: "Cryptography & Network Security",
            img: trackImg,
            shortDescription: "Computer network security consists of measures taken by organizations or businesses to monitor and prevent unauthorized access from outside attackers. In the early days of the internet, its use was limited to development purposes.",
            longDescription: ["Computer network security consists of measures taken by organizations or businesses to monitor and prevent unauthorized access from outside attackers. In the early days of the internet, its use was limited to development purposes.", "The topics covered in this track include, but are not limited to, the design and security analysis of cryptographic primitives and protocols, novel applications of cryptography, formal verification of cryptographic security properties, cryptographic standards, post-quantum cryptography, hardware and software implementations, cryptographic aspects of blockchains and cryptocurrencies, cryptanalysis, side-channel attacks, and defenses.", "This track provides an important new viewpoint on an established, major research area; supports or challenges long-held beliefs in such an area with compelling evidence; or presents a convincing, comprehensive new taxonomy of such an area."]
        }, {
            id: 3,
            name: "Cloud Computing & IoT",
            img: trackImg,
            shortDescription: "This track covers a vast expanse of fields, including data analytics, distributed and parallel computing, high-performance computing, cloud quality management and service level agreement, cluster, cloud, and grid computing, mobile computing, edge computing, fog computing, and cognitive computing.",
            longDescription: ["This track covers a vast expanse of fields, including data analytics, distributed and parallel computing, high-performance computing, cloud quality management and service level agreement, cluster, cloud, and grid computing, mobile computing, edge computing, fog computing, and cognitive computing.", "Implementing and complementing AI into your cloud strategy promises to unlock business potential and enable greater agility and efficiency. Cost savings and enhanced data management are just some of the added bonuses that come with investing in the right technology and digital transformation roadmap.", "While the benefits are abundant, the obstacles in execution can be detrimental. Integration challenges, data privacy, and concerns around connectivity can be major setbacks to your strategy. Hear from our experts on how you can successfully revolutionize your cloud computing solutions with AI and cover new paths of development."]
        }, {
            id: 4,
            name: "AI & Machine Learning",
            img: trackImg,
            shortDescription: "The vast field of Artificial Intelligence and Machine Learning deals with aspects of Signal Processing, Audio and Speech Processing, Computer Vision, Natural Language Processing, Supervised and Unsupervised Learning, Deep Learning, Data Mining, Generative Models, Reinforcement Learning, and Optimization Algorithms.",
            longDescription: ["The vast field of Artificial Intelligence and Machine Learning deals with aspects of Signal Processing, Audio and Speech Processing, Computer Vision, Natural Language Processing, Supervised and Unsupervised Learning, Deep Learning, Data Mining, Generative Models, Reinforcement Learning, and Optimization Algorithms.", "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction. Neuromorphic computing, which mimics the human brain, is one such wave towards AI capabilities.", "This course will help participants gain knowledge about the design of artificially intelligent systems from the bottom to the top level. Hardware implementation of such systems with emerging devices will also be covered."]
        }, {
            id: 5,
            name: "Cyber Security Security",
            img: trackImg,
            shortDescription: "This track emphasizes on emerging research areas in cyber security and privacy. It includes cyber security concepts, threats in cyberspace, security standardization, security and privacy regulations and laws, cyber hacking, digital forensics.",
            longDescription: ["This track emphasizes on emerging research areas in cyber security and privacy. It includes cyber security concepts, threats in cyberspace, security standardization, security and privacy regulations and laws, cyber hacking, digital forensics, Trust management, security and privacy in blockchain technologies, intrusion detection and prevention, cyberspace protection and anti-malware, network traffic analysis, identity and access management in cyber systems, cyber threat intelligence, cryptography trends, steganography, security of cyber-physical systems and IoT, secure cloud and edge computing architectures, security of web-based applications, and cyber harmony and cyber welfare."]
        }]


    return (
        <section className={styles.Tracks}>
            {tracks.map(function (track) {
                return <TrackCard
                    name={track.name}
                    img={track.img}
                    description={track.shortDescription}
                    showDetails={() => {
                        setActiveTrack(track.id)
                    }}
                />
            })}
            {tracks.filter(function (track) {
                return track.id === activeTrack
            }).map(function (track) {
                return <TrackPopup name={track.name} closePopup={() => {
                    setActiveTrack(-1)
                }}/>
            })}
        </section>
    )
}

const TrackCard = (props) => {
    return (<div className={styles.Track}>
        <Image src={props.img} alt={props.name} className={styles.Track_img}/>
        <h3 className={styles.Track_name}>{props.name}</h3>
        <p className={styles.Track_description}>{props.description}</p>
        <button className={styles.Track_learnMore} onClick={() => {
            props.showDetails()
        }}>Learn More &rarr;</button>
    </div>)
}

const TrackPopup = (props) => {
    const handlePopupClose = (e) => {
        if (e.currentTarget === e.target) {
            props.closePopup()
        }
    }

    return (
        <div className={styles.Popup} onClick={handlePopupClose}>
            <div className={styles.Popup_content}>
                <h3 className="h1">{props.name}</h3>
            </div>
        </div>
    )
}

export default Tracks
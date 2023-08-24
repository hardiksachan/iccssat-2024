import committee from "@/app/committee";
import keynoteSpeakers from "@/app/keynoteSpeakers";
import chiefguest from "@/app/chiefguest";
import IccssatLogo from "@/assets/ICSCCAT logo.png";
import img1 from "@/assets/img/tracks-intro-img-01.jpg";
import img2 from "@/assets/img/tracks-intro-img-02.jpg";
import img3 from "@/assets/img/tracks-intro-img-03.jpg";
import HomeGallery from "@/components/HomeGallery";
import Subcommittee from "@/components/Subcommittee";
import Keynote from "@/components/Keynote";
import styles from "@/styles/pages/Index.module.scss";
import Image from "next/image";
import { BsArrowRight, BsFillCalendarEventFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
//ushing to branch dev
const IndexPage = () => {
  return (
    <>
      <div className={styles.section_hero}>
        <Image src={IccssatLogo} alt="ICSCCAT" className={styles.Hero_logo} />
        <p className={styles.Hero_pretext}>
          I<sup>st</sup> International Conference on
        </p>
        <h1 className={styles.Hero_name}>
          Secure Cyber Computing &amp; Advanced Technologies
        </h1>
        <div className={`${styles.Hero_date}`}>
          <BsFillCalendarEventFill /> 26 - 28 April 2024
        </div>
        <div className={styles.Hero_place}>
          <FaLocationArrow />
          NIT Delhi, India
        </div>
        <div className={styles.Hero_gallery}>
          <HomeGallery />
        </div>
      </div>
      <div className={styles.section_tracks}>
        <h1 className="h1 mb-sm">
          WELCOME TO <span id="heading_span"> ICSCCAT 2024</span>
        </h1>
        <div className={styles.Intro}>
          <div className={styles.Intro_content}>
            
            <p className={`p mb-md ${styles.Intro_paragraph}`}>
            Over the last two decades, the realm of computing and communication has notably expanded, 
            encompassing a diverse array of facets. Computing involves designing, developing and building 
            hardware and software systems; processing, structuring, and managing various kinds of information; 
            doing scientific research on and with computers; making computer systems behave intelligently; 
            and creating and using communications and entertainment media.<br />
              <br />
            Secure cyber computing refers to the practice of ensuring the security, confidentiality, integrity,
             and availability of computing systems, networks, and data in the digital realm. 
             It involves a comprehensive set of strategies, practices, and technologies aimed at safeguarding 
             digital assets from various cyber threats, attacks, and vulnerabilities. It includes a range of 
             measures designed to protect information, systems, and users from unauthorized access, data breaches, 
             cyberattacks, and other security risks.
             <br /> <br />
            "Advanced technology" refers to cutting-edge, highly developed, and innovative tools, techniques, or systems 
            that represent the forefront of scientific and technological progress in a particular field. These technologies 
            often involve a significant departure from traditional methods and bring about new capabilities, efficiencies, 
            and possibilities that were previously not achievable. The integration of AI in various area of research including 
            data analysis, security, computing environment and healthcare brings about innovative solutions and capabilities 
            that were previously not possible using traditional methods.

            <br /> <br />
            </p>

            <a href="" className={`${styles.Intro_learnMore} mb-lg`}>
              Find out more about the event <BsArrowRight />
            </a>
          </div>
          <div className={styles.IntroComposition}>
            <Image
              src={img1}
              className={`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p1}`}
            />
            <Image
              src={img2}
              className={`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p2}`}
            />
            <Image
              src={img3}
              className={`${styles.IntroComposition_photo} ${styles.IntroComposition_photo___p3}`}
            />
          </div>
        </div>
        <h2 className="h2">Tracks</h2>
        <div className={styles.cardContainer} id="cards">
          <div className={styles.card}>
            <div className={styles.card_front}>
              <h2 className="card-h2-front">Data Analytics and Mining</h2>
            </div>
            <div className={styles.card_back}>
              <h2 className="card-h2">Data Analytics and Mining</h2>
              <p className="card-p">
              All overtheworld, organizations are harnessing the true power of
                  data and analytics strategies to
                  optimize decision-making during this
                  time of ever-present disruption. As a data analytics the track scales
                  cohesive ecosystems across the organization to enhance
                  skills while using AI for ethically managing data and privacy...
              </p>
              <button id="card-btn">
                <a href="#popup-article-card01" id="card-a">
                  Read more
                </a>
              </button>
            </div>
          </div>

          <div id="popup-article-card01" class={styles.popup}>
            <div class={styles.popup_container}>
              <a href="#cards" class={styles.popup_close}>
                <span class={styles.screen_reader}>close</span>
              </a>
              <div class={styles.popup__content}>
                <h1 class={`${styles.popup_title} ${styles.r_title}`}>
                  Data Analytics and Mining
                </h1>
                <p className="p-track">
                  Prof. Vikram Goyal, Professor IIIT Delhi
                </p>
                <p className="p-track">
                  Prof. Mayank Vasta and Prof. Richa Singh , IIT Jodhpur
                </p>
                <p className="p-popup">
                  All overtheworld, organizations are harnessing the true power of
                  data and analytics strategies to
                  optimize decision-making during this
                  time of ever-present disruption. As a data analytics the track scales
                  cohesive ecosystems across the organization to enhance
                  skills while using AI for ethically managing data and privacy
                </p>
                <p className="p-popup">
                  Implement strategies and innovationsbacked by data, analytics
                  and data science to navigate disruption. Lead purposefully by
                  balancing trust, accountability, governance and security with
                  adaptability and responsiveness. Scale the purpose beyond
                  organizational silos, across value chains and ecosystems to
                  foster societal perseverance. Leverage cloud-based
                  data management to optimize costs in the current economic
                  environment{" "}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_front}>
              <h2 className="card-h2-front">
                Cryptography, Cyber Security and Network Security
              </h2>
            </div>
            <div className={styles.card_back}>
              <h2 className="card-h2">Cryptography, Cyber Security and Network Security</h2>
              <p className="card-p">
                Computer network security consists of measures taken by some
                organizations or businesses to monitor and avoid unauthorized
                access from outside attackers. In the initial days of the
                internet, its use was limited to development purposes...
              </p>
              <button id="card-btn">
                <a href="#popup-article-card02" id="card-a">
                  Read more
                </a>
              </button>
            </div>
          </div>

          <div id="popup-article-card02" class={styles.popup}>
            <div class={styles.popup_container}>
              <a href="#cards" class={styles.popup_close}>
                <span class={styles.screen_reader}>close</span>
              </a>
              <div class={styles.popup__content}>
                <h1 class={`${styles.popup_title} ${styles.r_title}`}>
                  Cryptography, Cyber Security and Network Security
                </h1>
                <p className="p-track">
                  Prof. Harsh K. Verma, Professor, Department Of Computer
                  Science Engineering<br /> NIT Jalandhar
                </p>
                <p className="p-track">
                  Prof. Manoj Kumar, Professor, Computer Science Engineering{" "}
                  <br /> NIT Jalandhar
                </p>
                <p className="p-popup">
                  Computer network security consists of measures taken by some
                  organizations or businesses to monitor and avoid unauthorized
                  access from outside attackers. In the initial days of the
                  internet, its use was limited to development purposes.
                </p>
                <p className="p-popup">
                  The topics in the track include but are not limited to Design
                  and security analysis of cryptographic primitives and
                  protocols, Novel applications of cryptography, Formal
                  verification of cryptographic security properties,
                  Cryptographic standards, Post-quantum cryptography, Hardware &
                  software implementations, Cryptographic aspects of blockchains
                  & cryptocurrencies, Cryptanalysis, Side-channel attacks and
                  defenses.
                </p>
                <p className="p-popup">
                  This track also
                  emphasizes on emerging research areas in cyber security and privacy. It
                  includes cyber security concepts, threats in cyberspace, security
                  standardization, security and privacy regulations and laws, cyber hacking,
                  digital forensics, Trust management, security and privacy in block chain
                  technologies, intrusion detection and prevention, cyberspace protection and
                  anti-malware, network traffic analysis, identity and access management in
                  cyber systems, cyber threat intelligence, cryptography trends, steganography,
                  security of cyber-physical systems and IoT, secure cloud and edge computing
                  architectures, security of web-based applications, and cyber harmony and
                  cyber welfare. The track provides an important new viewpoint on an
                  established, major research area; support or challenge long-held beliefs in
                  such an area with compelling evidence; or present a convincing,
                  comprehensive new taxonomy of such an area.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_front}>
              <h2 className="card-h2-front">Cloud Computing and IoT</h2>
            </div>
            <div className={styles.card_back}>
              <h2 className="card-h2">Cloud Computing and IoT</h2>
              <p className="card-p">
                The track has a vast expanse in the field Data Analytics,
                Distributed & Parallel Computing, High Performance
                Computing, Cloud Quality Management & Service level
                agreement, Cluster, Cloud & Grid Computing, Mobile Computing, Edge
                Computing, Fog Computing, Cognitive Computing...
              </p>
              <button id="card-btn">
                <a href="#popup-article-card03" id="card-a">
                  Read more
                </a>
              </button>
            </div>
          </div>

          <div id="popup-article-card03" class={styles.popup}>
            <div class={styles.popup_container}>
              <a href="#cards" class={styles.popup_close}>
                <span class={styles.screen_reader}>close</span>
              </a>
              <div class={styles.popup__content}>
                <h1 class={`${styles.popup_title} ${styles.r_title}`}>
                  Cloud Computing and IoT
                </h1>
                <p className="p-track"></p>{" "}
                <p className="p-track">
                  Dr. Mashtaq Ahmed, Associate Professor <br /> MNIT Jaipur
                </p>
                <p className="p-popup">
                  The track has a vast expanse in the field Data Analytics,
                  Distributed & Parallel Computing, High Performance
                  Computing, Cloud Quality Management & Service level
                  agreement, Cluster, Cloud & Grid Computing, Mobile Computing,
                  Edge Computing, Fog Computing, Cognitive Computing.
                </p>
                <p className="p-popup">
                  Implementing and complementing AI into your cloud strategy
                  promises a journey of unlocking business potential and
                  operating at greater agility and efficiency. Cost savings and
                  enhanced data management are just some of the added bonuses
                  that come with investing in the right technology and digital
                  transformation roadmap.
                </p>
                <p className="p-popup">
                  While the benefits are abundant, the obstacles in execution are
                  as detrimental. Integration challenges, data privacy
                  andconcerns around connectivity can be major setbacks to your
                  strategy. Hear from our experts on how you can successfully
                  revolutionize your cloud computing solutions with AI andd is
                  cover new paths of development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.card_front}>
              <h2 className="card-h2-front">
                Artificial Intelligence and Machine Learning
              </h2>
            </div>
            <div className={styles.card_back}>
              <h2 className="card-h2">
              Artificial Intelligence and Machine Learning
              </h2>
              <p className="card-p">
                The vast field of AI 
                deals with aspects of Signal Processing, Audio and Speech
                Processing, Computer Vision, Natural Language Processing,
                Supervised and unsupervised learning, Deep Learning, Data
                Mining, Generative Models, Reinforcement Learning and
                Optimization algorithm...
              </p>
              <button id="card-btn">
                <a href="#popup-article-card04" id="card-a">
                  Read more
                </a>
              </button>
            </div>
          </div>

          <div id="popup-article-card04" class={styles.popup}>
            <div class={styles.popup_container}>
              <a href="#cards" class={styles.popup_close}>
                <span class={styles.screen_reader}>close</span>
              </a>
              <div class={styles.popup__content}>
                <h1 class={`${styles.popup_title} ${styles.r_title}`}>
                Artificial Intelligence and Machine Learning
                </h1>
                <p className="p-track"></p>{" "}
                <p className="p-track">
                  Dr. Deepak Kumar Jain, Associate Professor <br />
                  Chongqing University of Posts and Telecommunications, China
                </p>
                <p className="p-track"></p>{" "}
                <p className="p-track">
                  Dr. Deepak Ranjan Nayak, Assistant Professor <br />
                  MNNIT Jaipur, India
                </p>
                <p className="p-popup">
                The vast field of Artificial Intelligence and Machine learning deals with 
                aspects of Signal Processing, Audio and Speech Processing, Computer Vision, 
                Natural Language Processing, Supervised and unsupervised learning, 
                Deep Learning, Data Mining, Generative Models, Reinforcement Learning 
                and Optimization algorithm. Artificial intelligence (AI) is the simulation 
                of human intelligence processes by machines, especially computer systems. 
                These processes include learning (the acquisition of information and rules 
                for using the information), reasoning (using rules to reach approximate or 
                definite conclusions) and self-correction. Neuromorphic computing mimicking 
                the human brain is one such wave towards AI capabilities. This course will help 
                participant gain knowledge about the design of artificially intelligent systems 
                from the bottom to the top level. Hardware implementation of such systems with 
                emerging devices will also be dealt.

                </p>
                <p className="p-popup">
                 
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_front}>
              <h2 className="card-h2-front">Healthcare 4.0</h2>
            </div>
            <div className={styles.card_back}>
              <h2 className="card-h2">Healthcare 4.0</h2>
              <p className="card-p">
                The goal of accelerating medical innovation while enhancing the effectiveness
                of patient care becomes a reality in Healthcare 4.0, the fourth healthcare
                revolution. Smart healthcare has steadily gained attention as information
                technology has advanced. Utilizing a new generation of information
              </p>
              <button id="card-btn">
                <a href="#popup-article-card04" id="card-a">
                  Read more
                </a>
              </button>
            </div>
          </div>

          <div id="popup-article-card05" class={styles.popup}>
            <div class={styles.popup_container}>
              <a href="#cards" class={styles.popup_close}>
                <span class={styles.screen_reader}>close</span>
              </a>
              <div class={styles.popup__content}>
                <h1 class={`${styles.popup_title} ${styles.r_title}`}>
                  Cyber Security Security
                </h1>
                <p className="p-track"></p>{" "}
                <p className="p-track">
                  Dr. Deepak Singh Tomar, Associate Professor <br /> MANIT Bhopal
                </p>
                <p className="p-track"></p>{" "}
                <p className="p-track">
                  Prof. Mayank Dave, Professor <br /> NIT Kurukshetra
                </p>
                <p className="p-popup">
                  This track emphasizes on emerging research areas in cyber
                  security and privacy. It includes cyber security concepts,
                  threats in cyberspace, security standardization, security and
                  privacy regulations and laws, cyber hacking, digital forensics,
                  Trust management, security and privacy in blockchain
                  technologies, intrusion detection and prevention, cyberspace
                  protection and anti-malware, network traffic analysis,
                  identity and access management in cyber systems, cyber threat
                  intelligence, cryptography trends, steganography, security of
                  cyber-physical systems and IoT, secure cloud and edge
                  computing architectures, security of web-based applications,
                  and cyber harmony and cyber welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.OrganisingCommittee}>

        <h2 className={`h2 ${styles.OrganisingCommittee_heading}`}>
          Chief Guest
        </h2>
        {chiefguest.map(function (keynote) {
          return (
            <Keynote
              title={keynote.title}
              members={keynote.members}
            />
          );
        })}

        <h2 className={`h2 ${styles.OrganisingCommittee_heading}`}>
          Keynote Speakers
        </h2>
        {keynoteSpeakers.map(function (keynote) {
          return (
            <Keynote
              title={keynote.title}
              members={keynote.members}
            />
          );
        })}

        {/* <h2 className={`h2 ${styles.OrganisingCommittee_heading}`}>
          Organising Committee
        </h2>
        {committee.map(function (subcommittee) {
          return (
            <Subcommittee
              title={subcommittee.title}
              members={subcommittee.members}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default IndexPage;

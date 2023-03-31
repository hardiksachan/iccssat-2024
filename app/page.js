import styles from "@/styles/pages/Index.module.scss"
import {BsArrowRight} from "react-icons/bs"
import Image from "next/image"
import img1 from "@/assets/img/tracks-intro-img-01.jpg"
import img2 from "@/assets/img/tracks-intro-img-02.jpg"
import img3 from "@/assets/img/tracks-intro-img-03.jpg"
import IccssatLogo from "@/assets/iccssat-logo.png"
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import HomeGallery from "@/components/HomeGallery";
import Subcommittee from "@/components/Subcommittee";
import committee from "@/app/committee";


const IndexPage = () => {
    return (
        <>
          <div className={styles.section_hero}>
              <Image src={IccssatLogo} alt="ICCSSAT" className={styles.Hero_logo}/>
              <p className={styles.Hero_pretext}>I<sup>st</sup> International Conference on</p>
              <h1 className={styles.Hero_name}>Computationally Smart Systems &amp; Advanced Technologies</h1>
              <div className={`${styles.Hero_date}`}><BsFillCalendarEventFill/> 24 - 26 March 2024</div>
              <div className={styles.Hero_place}><FaLocationArrow/>NIT Delhi, India</div>
              <div className={styles.Hero_gallery}>
                  <HomeGallery />
              </div>
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
                
                <div className={styles.cardContainer} id="cards">
                    <div className={styles.card}>
                        <div className={styles.card_front}>
                        <h2 className="card-h2-front">Heading</h2>
                        </div>
                        <div className={styles.card_back}>
                            <h2 className="card-h2">Data Analytics and Mining</h2>
                            <p className="card-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aperiam ullam at in temporibus, facilis eos tenetur, molestiae perspiciatis ducimus illo recusandae. Enim ea, pariatur dignissimos similique fugiat sed deserunt!</p>
                            <button id="card-btn"><a href="#popup-article-card01" id="card-a">Read more</a></button>
                        </div>
                    </div>

                <div id="popup-article-card01" class={styles.popup}>
                    <div class={styles.popup_container}>
                    <a href="#cards" class={styles.popup_close}>
                        <span class={styles.screen_reader}>close</span>
                    </a>  
                    <div class={styles.popup__content}>
                        <h1 class={ `${styles.popup_title} ${styles.r_title}`}>Data Analytics and Mining</h1>
                        <p className="p-popup">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque optio vitae in explicabo recusandae sit id sapiente excepturi tempore, nemo, nulla odio deleniti rerum nisi perferendis aut molestias! Incidunt nesciunt iusto praesentium! In at maiores quibusdam enim quis, quam!</p>
                        <p className="p-popup">Architecto magni dolores cumque tenetur nemo id aperiam, ratione temporibus at, consectetur totam, fuga et illo rerum earum dicta. Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex accusantium architecto doloremque reprehenderit, asperiores vero dolor, esse inventore dolorem.</p>
                        <p className="p-popup">Excepturi eaque, reprehenderit dolores, cum molestias repellendus in expedita. Placeat totam, quos pariatur quidem explicabo id harum ab voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium excepturi cumque, hic iure impedit ullam accusantium error natus recusandae, quia fuga quo voluptates officiis?</p>    
                        <p className="p-popup">Dignissimos debitis eos necessitatibus accusantium natus voluptates illo blanditiis corporis minus. Repudiandae libero quae, illo error expedita consectetur possimus voluptate eum esse quam molestiae tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem voluptatem aliquid voluptatum deleniti necessitatibus provident.</p>
                        <p className="p-popup">Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus temporibus ut! Velit ducimus repellendus fuga repudiandae culpa voluptatibus delectus praesentium totam odit ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.</p>
                        <p className="p-popup">Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam labore sequi adipisci tempore exercitationem quos, libero, reprehenderit facere quasi soluta, itaque at eum cum possimus! Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex odit, sequi eveniet quibusdam, dolores?</p>
                        <p className="p-popup">Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia, delectus provident, illum aperiam, atque molestiae. Cum delectus, doloribus expedita eius veritatis assumenda deleniti veniam reprehenderit animi ut, eaque asperiores, dicta incidunt omnis repellendus dolorum enim inventore rerum voluptatem saepe error id.</p>
                    </div>
                    </div>
                </div>

                    <div className={styles.card}>
                        <div className={styles.card_front}>
                        <h2 className="card-h2-front">Heading</h2>
                        </div>
                        <div className={styles.card_back}>
                            <h2 className="card-h2">Cryptography and Network Security</h2>
                            <p className="card-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aperiam ullam at in temporibus, facilis eos tenetur, molestiae perspiciatis ducimus illo recusandae. Enim ea, pariatur dignissimos similique fugiat sed deserunt!</p>
                            <button id="card-btn"><a href="#popup-article-card02" id="card-a">Read more</a></button>
                        </div>
                    </div>

                    <div id="popup-article-card02" class={styles.popup}>
                        <div class={styles.popup_container}>
                        <a href="#cards" class={styles.popup_close}>
                            <span class={styles.screen_reader}>close</span>
                        </a>  
                        <div class={styles.popup__content}>
                            <h1 class={ `${styles.popup_title} ${styles.r_title}`}>Cryptography and Network Security</h1>
                            <p className="p-popup">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque optio vitae in explicabo recusandae sit id sapiente excepturi tempore, nemo, nulla odio deleniti rerum nisi perferendis aut molestias! Incidunt nesciunt iusto praesentium! In at maiores quibusdam enim quis, quam!</p>
                            <p className="p-popup">Architecto magni dolores cumque tenetur nemo id aperiam, ratione temporibus at, consectetur totam, fuga et illo rerum earum dicta. Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex accusantium architecto doloremque reprehenderit, asperiores vero dolor, esse inventore dolorem.</p>
                            <p className="p-popup">Excepturi eaque, reprehenderit dolores, cum molestias repellendus in expedita. Placeat totam, quos pariatur quidem explicabo id harum ab voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium excepturi cumque, hic iure impedit ullam accusantium error natus recusandae, quia fuga quo voluptates officiis?</p>    
                            <p className="p-popup">Dignissimos debitis eos necessitatibus accusantium natus voluptates illo blanditiis corporis minus. Repudiandae libero quae, illo error expedita consectetur possimus voluptate eum esse quam molestiae tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem voluptatem aliquid voluptatum deleniti necessitatibus provident.</p>
                            <p className="p-popup">Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus temporibus ut! Velit ducimus repellendus fuga repudiandae culpa voluptatibus delectus praesentium totam odit ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.</p>
                            <p className="p-popup">Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam labore sequi adipisci tempore exercitationem quos, libero, reprehenderit facere quasi soluta, itaque at eum cum possimus! Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex odit, sequi eveniet quibusdam, dolores?</p>
                            <p className="p-popup">Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia, delectus provident, illum aperiam, atque molestiae. Cum delectus, doloribus expedita eius veritatis assumenda deleniti veniam reprehenderit animi ut, eaque asperiores, dicta incidunt omnis repellendus dolorum enim inventore rerum voluptatem saepe error id.</p>
                        </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.card_front}>
                        <h2 className="card-h2-front">Heading</h2>
                        </div>
                        <div className={styles.card_back}>
                            <h2 className="card-h2">Cloud Computing ans IoT</h2>
                            <p className="card-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aperiam ullam at in temporibus, facilis eos tenetur, molestiae perspiciatis ducimus illo recusandae. Enim ea, pariatur dignissimos similique fugiat sed deserunt!</p>
                            <button id="card-btn"><a href="#popup-article-card03" id="card-a">Read more</a></button>
                        </div>
                    </div>

                    <div id="popup-article-card03" class={styles.popup}>
                        <div class={styles.popup_container}>
                        <a href="#cards" class={styles.popup_close}>
                            <span class={styles.screen_reader}>close</span>
                        </a>  
                        <div class={styles.popup__content}>
                            <h1 class={ `${styles.popup_title} ${styles.r_title}`}>Cloud Computing ans IoT</h1>
                            <p className="p-popup">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque optio vitae in explicabo recusandae sit id sapiente excepturi tempore, nemo, nulla odio deleniti rerum nisi perferendis aut molestias! Incidunt nesciunt iusto praesentium! In at maiores quibusdam enim quis, quam!</p>
                            <p className="p-popup">Architecto magni dolores cumque tenetur nemo id aperiam, ratione temporibus at, consectetur totam, fuga et illo rerum earum dicta. Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex accusantium architecto doloremque reprehenderit, asperiores vero dolor, esse inventore dolorem.</p>
                            <p className="p-popup">Excepturi eaque, reprehenderit dolores, cum molestias repellendus in expedita. Placeat totam, quos pariatur quidem explicabo id harum ab voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium excepturi cumque, hic iure impedit ullam accusantium error natus recusandae, quia fuga quo voluptates officiis?</p>    
                            <p className="p-popup">Dignissimos debitis eos necessitatibus accusantium natus voluptates illo blanditiis corporis minus. Repudiandae libero quae, illo error expedita consectetur possimus voluptate eum esse quam molestiae tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem voluptatem aliquid voluptatum deleniti necessitatibus provident.</p>
                            <p className="p-popup">Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus temporibus ut! Velit ducimus repellendus fuga repudiandae culpa voluptatibus delectus praesentium totam odit ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.</p>
                            <p className="p-popup">Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam labore sequi adipisci tempore exercitationem quos, libero, reprehenderit facere quasi soluta, itaque at eum cum possimus! Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex odit, sequi eveniet quibusdam, dolores?</p>
                            <p className="p-popup">Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia, delectus provident, illum aperiam, atque molestiae. Cum delectus, doloribus expedita eius veritatis assumenda deleniti veniam reprehenderit animi ut, eaque asperiores, dicta incidunt omnis repellendus dolorum enim inventore rerum voluptatem saepe error id.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.card_front}>
                        <h2 className="card-h2-front">Heading</h2>
                        </div>
                        <div className={styles.card_back}>
                            <h2 className="card-h2">Artificial Intelligence and Machine Learning</h2>
                            <p className="card-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aperiam ullam at in temporibus, facilis eos tenetur, molestiae perspiciatis ducimus illo recusandae. Enim ea, pariatur dignissimos similique fugiat sed deserunt!</p>
                            <button id="card-btn"><a href="#popup-article-card04" id="card-a">Read more</a></button>
                        </div>
                    </div>

                    <div id="popup-article-card04" class={styles.popup}>
                        <div class={styles.popup_container}>
                        <a href="#cards" class={styles.popup_close}>
                            <span class={styles.screen_reader}>close</span>
                        </a>  
                        <div class={styles.popup__content}>
                            <h1 class={ `${styles.popup_title} ${styles.r_title}`}>Artificial Intelligence and Machine Learning</h1>
                            <p className="p-popup">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque optio vitae in explicabo recusandae sit id sapiente excepturi tempore, nemo, nulla odio deleniti rerum nisi perferendis aut molestias! Incidunt nesciunt iusto praesentium! In at maiores quibusdam enim quis, quam!</p>
                            <p className="p-popup">Architecto magni dolores cumque tenetur nemo id aperiam, ratione temporibus at, consectetur totam, fuga et illo rerum earum dicta. Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex accusantium architecto doloremque reprehenderit, asperiores vero dolor, esse inventore dolorem.</p>
                            <p className="p-popup">Excepturi eaque, reprehenderit dolores, cum molestias repellendus in expedita. Placeat totam, quos pariatur quidem explicabo id harum ab voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium excepturi cumque, hic iure impedit ullam accusantium error natus recusandae, quia fuga quo voluptates officiis?</p>    
                            <p className="p-popup">Dignissimos debitis eos necessitatibus accusantium natus voluptates illo blanditiis corporis minus. Repudiandae libero quae, illo error expedita consectetur possimus voluptate eum esse quam molestiae tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem voluptatem aliquid voluptatum deleniti necessitatibus provident.</p>
                            <p className="p-popup">Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus temporibus ut! Velit ducimus repellendus fuga repudiandae culpa voluptatibus delectus praesentium totam odit ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.</p>
                            <p className="p-popup">Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam labore sequi adipisci tempore exercitationem quos, libero, reprehenderit facere quasi soluta, itaque at eum cum possimus! Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex odit, sequi eveniet quibusdam, dolores?</p>
                            <p className="p-popup">Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia, delectus provident, illum aperiam, atque molestiae. Cum delectus, doloribus expedita eius veritatis assumenda deleniti veniam reprehenderit animi ut, eaque asperiores, dicta incidunt omnis repellendus dolorum enim inventore rerum voluptatem saepe error id.</p>
                        </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_front}>
                        <h2 className="card-h2-front">Heading</h2>
                        </div>
                        <div className={styles.card_back}>
                            <h2 className="card-h2">Cyber Security Security</h2>
                            <p className="card-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aperiam ullam at in temporibus, facilis eos tenetur, molestiae perspiciatis ducimus illo recusandae. Enim ea, pariatur dignissimos similique fugiat sed deserunt!</p>
                            <button id="card-btn"><a href="#popup-article-card04" id="card-a">Read more</a></button>
                        </div>
                    </div>

                    <div id="popup-article-card05" class={styles.popup}>
                        <div class={styles.popup_container}>
                        <a href="#cards" class={styles.popup_close}>
                            <span class={styles.screen_reader}>close</span>
                        </a>  
                        <div class={styles.popup__content}>
                            <h1 class={ `${styles.popup_title} ${styles.r_title}`}>Cyber Security Security</h1>
                            <p className="p-popup">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque optio vitae in explicabo recusandae sit id sapiente excepturi tempore, nemo, nulla odio deleniti rerum nisi perferendis aut molestias! Incidunt nesciunt iusto praesentium! In at maiores quibusdam enim quis, quam!</p>
                            <p className="p-popup">Architecto magni dolores cumque tenetur nemo id aperiam, ratione temporibus at, consectetur totam, fuga et illo rerum earum dicta. Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex accusantium architecto doloremque reprehenderit, asperiores vero dolor, esse inventore dolorem.</p>
                            <p className="p-popup">Excepturi eaque, reprehenderit dolores, cum molestias repellendus in expedita. Placeat totam, quos pariatur quidem explicabo id harum ab voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium excepturi cumque, hic iure impedit ullam accusantium error natus recusandae, quia fuga quo voluptates officiis?</p>    
                            <p className="p-popup">Dignissimos debitis eos necessitatibus accusantium natus voluptates illo blanditiis corporis minus. Repudiandae libero quae, illo error expedita consectetur possimus voluptate eum esse quam molestiae tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem voluptatem aliquid voluptatum deleniti necessitatibus provident.</p>
                            <p className="p-popup">Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus temporibus ut! Velit ducimus repellendus fuga repudiandae culpa voluptatibus delectus praesentium totam odit ratione, tenetur assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas, impedit? Magnam dolorum, iure repellendus vitae.</p>
                            <p className="p-popup">Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam labore sequi adipisci tempore exercitationem quos, libero, reprehenderit facere quasi soluta, itaque at eum cum possimus! Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex odit, sequi eveniet quibusdam, dolores?</p>
                            <p className="p-popup">Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia, delectus provident, illum aperiam, atque molestiae. Cum delectus, doloribus expedita eius veritatis assumenda deleniti veniam reprehenderit animi ut, eaque asperiores, dicta incidunt omnis repellendus dolorum enim inventore rerum voluptatem saepe error id.</p>
                        </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* TODO: <div className={styles.section_rules}>RULES</div>*/}
            <div className={styles.OrganisingCommittee}>
                <h2 className={`h2 ${styles.OrganisingCommittee_heading}`}>Organising Committee</h2>
                {committee.map(function (subcommittee) {
                    return <Subcommittee title={subcommittee.title} members={subcommittee.members} />
                })}
            </div>
        </>
    )
}

export default IndexPage
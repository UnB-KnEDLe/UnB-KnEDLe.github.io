// import minerLogo from '../../assets/img/logo_miner.png'
// import frame from '../../assets/img/hero-image-2.png'

// import './dodfminer.css'

// export default function DodfMiner(props){
//     var t = props.translationFunction

//     return (
//         <section className="dodfminer">
//             <div className="container dodfminer-content">
//                 <div className="miner-info">
//                     <div>
//                         <img className="miner-logo" src={minerLogo} alt="DodfMiner Logo"/>
//                         <h3>{t('Data Extraction Library')}</h3>
//                         <p>{t('Extraction of data from documents in PDF format referring to the publications of the Official Gazette of the Federal District.')}</p>
//                     </div>
//                     <div className="miner-btn">
//                         <a href="https://dodfminer.readthedocs.io/en/stable/"><button className="btn">{t('Documentation')}</button></a>
//                         <a href="https://github.com/UnB-KnEDLe/DODFMiner"><button className="btn">{t('Repository')}</button></a>
//                     </div>
//                 </div>
//                 <div className="miner-frame">
//                     <img className="frame-img" src={frame} alt="Frame"/>
//                 </div>
//             </div>
//         </section>
//     )
// }
import React, { useState } from "react";
import { toolsList } from "../../components/toolsList";
// import "./styles.css";
import "./dodfminer.css";
import Carousel from "../../components/carousel";

const DodfMiner = (props) => {
  var t = props.translationFunction

  return (
    <section className="tools">
        <h1>{t("Tools")}</h1>
        <Carousel translationFunction={props.translationFunction} tools={toolsList}/>
    </section>
  );
};

export default DodfMiner;

// import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

// import { toolsList } from "../../components/toolsList";
// import "./dodfminer.css";

// export default function Tools(props) {
//   var t = props.translationFunction;

//   const [slide, setSlide] = useState(0);


//   if (slide < 0)
//     setSlide(toolsList.length - 1)

//   if (slide >= toolsList.length)
//     setSlide(0)

//   return (
//     <section className="tools">
//       <div className="container tools-content">
//         <h1>{t("Tools")}</h1>
//         <div className="carousel">
//           <button
//             className="tools-action prev"
//             onClick={() => setSlide(slide - 1)}
//           >
//             <FontAwesomeIcon
//               className="tools-icon"
//               size="lg"
//               icon={faChevronLeft}
//             />
//           </button>
//           <ul>
//             {toolsList.map(function (tool, index) {
//               var next = toolsList[index+1];
//               return (
//                 <li
//                   className={index === slide ? "tool-item show" : "tool-item"}
//                   key={index}
//                 >

//                 </li>
//               );
//             })}
//           </ul>
//           <button
//             className="tools-action next"
//             onClick={() => setSlide(slide + 1)}
//           >
//             <FontAwesomeIcon
//               className="tools-icon"
//               size="lg"
//               icon={faChevronRight}
//             />
//           </button>
//         </div>
//         <div className="index-marker">
//           {toolsList.map((item, index) => {
//             return (
//               <div
//                 className={index === slide ? "marker-dot marked" : "marker-dot"}
//                 key={index}
//               ></div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

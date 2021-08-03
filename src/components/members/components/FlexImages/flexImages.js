import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEnvelope, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import githubIcon from '../../../../assets/img/iconGithub.png'
import linkedinIcon from '../../../../assets/img/iconLinkedIn.png'

import { useState } from 'react';

function FlexImage(props) {
    var item = props.item;

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className={ showInfo ? "flex-image active" : "flex-image" }>
            <div onClick={ setShowInfo } className="flex-image-info">
                <img src={item.avatar} alt={item.name}/>
                <h4>{item.name}</h4>
            </div>
            <div className="flex-image-description">
                <FontAwesomeIcon
                    onClick={ () => setShowInfo(false) }
                    className="close-image"
                    size="lg"
                    icon={faTimes}
                />
                {item.descr?.resume ? <h3>{item.descr?.resume}</h3> : null }
                {item.descr?.email ? <p><FontAwesomeIcon size="lg" icon={ faEnvelope }/> {item.descr?.email}</p> : null }
                {item.descr?.page ? <p><FontAwesomeIcon size="lg" icon={ faWindowMaximize }/> {item.descr?.email}</p> : null }
                {item.descr?.github ? <p><img src={githubIcon} className="members-icon" alt="github"/> {item.descr?.github}</p> : null }
                {item.descr?.linkedin ? <p><img src={linkedinIcon} className="members-icon" alt="linkedin"/> {item.descr?.linkedin}</p> : null }
            </div>
            
        </div>
    );

}

export default function FlexImages(props){
    return (
        <div className="flex-images">
            {props.list.map((item, index) => {
                return (
                    <FlexImage item={item} key={index}/>
                );
            })}
        </div>
    )
}
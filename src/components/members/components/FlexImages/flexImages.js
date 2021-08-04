import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEnvelope, faWindowMaximize, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import githubIcon from '../../../../assets/img/iconGithub.png'
import linkedinIcon from '../../../../assets/img/iconLinkedIn.png'

import { useState } from 'react';

import './flexImages.css'

function FlexImage(props) {
    var item = props.item;

    const [showInfo, setShowInfo] = useState(false);

    if(showInfo) {
        return (
            <>
            <div className="flex-image">
                <div onClick={ setShowInfo } className="flex-image-info">
                    <img src={item.avatar} alt={item.name}/>
                    <h4>{item.name}</h4>
                </div>
            </div>
            <div className="flex-image active">
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
                    {item.descr?.badge ? <p><FontAwesomeIcon size="lg" icon={faIdBadge} className="members-icon" alt="linkedin"/> {item.descr?.badge}</p> : null }
                    {item.descr?.page ? <a href={item.descr?.page}><FontAwesomeIcon size="lg" icon={ faWindowMaximize }/> {item.descr?.page}</a> : null }
                    <div className="media">
                        {item.descr?.lattes ? <a href={item.descr?.lattes}><button className="btn lattes-btn">Lattes</button></a> : null }
                        {item.descr?.github ? <a href={item.descr?.github}><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" className="media-icon" alt="github"/> </a> : null }
                        {item.descr?.linkedin ? <a href={item.descr?.linkedin}><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" className="media-icon" alt="linkedin"/> </a> : null }
                    </div>
                </div>
            </div>
            </>
        );
    } else {
        return (
            <div className="flex-image">
                <div onClick={ setShowInfo } className="flex-image-info">
                    <img src={item.avatar} alt={item.name}/>
                    <h4>{item.name}</h4>
                </div>
            </div>
        )
    }

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
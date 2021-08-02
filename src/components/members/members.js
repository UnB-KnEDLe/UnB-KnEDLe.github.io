import { teachers } from './membersList.js'

import './members.css'

export default function Members(){
    return (
        <section className="members">
            <div className="container">
                <h1>Members</h1>
                <div className="flex-images">
                    {teachers.map((teacherInfo, index) => {
                        return (
                            <div className="flex-image" key={index}>
                                <div className="flex-image-info">
                                    <img src={teacherInfo.avatar} alt={teacherInfo.name}/>
                                    <h3>{teacherInfo.name}</h3>
                                </div>
                                <div className="flex-image-description">
                                    <p>{teacherInfo.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
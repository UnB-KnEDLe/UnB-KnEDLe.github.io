import FlexImages from './components/FlexImages/flexImages'

import { teachers } from './membersList.js'

import './members.css'

export default function Members(){

    return (
        <section className="members">
            <div className="container">
                <h1>Members</h1>
                <FlexImages list={teachers}/>
            </div>
        </section>
    )
}
import FlexImages from './components/FlexImages/flexImages'

import { teachers, students, exStudents } from './membersList.js'

export default function Members(){

    return (
        <section className="members">
            <div className="container members-content">
                <h1>Members</h1>
                <FlexImages list={teachers}/>
                <FlexImages list={students}/>

                <h2>Ex-Members</h2>
                <FlexImages list={exStudents}/>
            </div>
        </section>
    )
}
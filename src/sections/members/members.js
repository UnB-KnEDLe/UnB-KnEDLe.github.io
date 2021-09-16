import FlexImages from './components/FlexImages/flexImages'

import { teachers, students, exStudents } from '../../components/membersList'

import './members.css'

export default function Members(props){
    var t = props.translationFunction

    return (
        <section className="members">
            <div className="container members-content">
                <h1>{t('Members')}</h1>
                <FlexImages list={teachers}/>
                <FlexImages list={students}/>

                <h2>Ex-Members</h2>
                <FlexImages list={exStudents}/>
            </div>
        </section>
    )
}
import { useEffect, useRef, useState } from 'react'

import Header from '../../components/header/header'
import FrontPage from '../../sections/frontpage/frontpage'
import About from '../../sections/about/about'
import Events from '../../sections/events/events'
import Publications from '../../sections/publications/publications'
import DodfMiner from '../../sections/dodfminer/dodfminer'
import Members from '../../sections/members/members'
import Partners from '../../sections/partners/partners'
import Contact from '../../sections/contact/contact'

import '../../App.css';
import '../../sections.css'

// the hoc
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n'

function Home({ t }) {
    const [withBg, setWithBg] = useState(false)
    
    const eventsRef = useRef(null)
    const publicationsRef = useRef(null)
    const dodfminerRef = useRef(null)
    const membersRef = useRef(null)
    const partnersRef = useRef(null)

    const goToEventsSection = () => {
        window.scrollTo({
            top: eventsRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight - 100
            setWithBg(window.scrollY >= windowHeight)
        })
    })

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className="App">
        <Header
            scrollFunctions={goToEventsSection}
            changeLangFunction={changeLang}
            translationFunction={t}
            bg={withBg}
        />
        <FrontPage translationFunction={t}/>
        <About translationFunction={t}/>
        <Events ref={eventsRef} translationFunction={t}/>
        <Publications ref={publicationsRef} translationFunction={t}/>
        <DodfMiner ref={dodfminerRef} translationFunction={t}/>
        <Members ref={membersRef} translationFunction={t}/>
        <Partners ref={partnersRef} translationFunction={t}/>
        <Contact translationFunction={t}/>
        </div>
    );
}

export default withNamespaces()(Home);

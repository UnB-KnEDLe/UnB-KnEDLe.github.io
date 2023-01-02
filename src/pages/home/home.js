import { useEffect, useState } from 'react'

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

import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n'

function Home({ t }) {
    const [withBg, setWithBg] = useState(false)

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
            changeLangFunction={changeLang}
            translationFunction={t}
            bg={withBg}
        />
        <FrontPage translationFunction={t}/>
        <About translationFunction={t}/>
        <Events translationFunction={t}/>
        <Publications translationFunction={t}/>
        <DodfMiner translationFunction={t}/>
        <Members translationFunction={t}/>
        <Partners translationFunction={t}/>
        <Contact translationFunction={t}/>
        </div>
    );
}

export default withNamespaces()(Home);

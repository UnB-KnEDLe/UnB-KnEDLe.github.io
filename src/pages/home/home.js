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

function Home() {
    const [withBg, setWithBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight - 100
            setWithBg(window.scrollY >= windowHeight)
        })
    })

    return (
        <div className="App">
        <Header bg={withBg}/>
        <FrontPage/>
        <About/>
        <Events/>
        <Publications/>
        <DodfMiner/>
        <Members/>
        <Partners/>
        <Contact/>
        </div>
    );
}

export default Home;

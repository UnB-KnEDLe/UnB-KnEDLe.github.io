import { useEffect, useState } from 'react'

import Header from './components/header/header'
import FrontPage from './components/frontpage/frontpage'
import About from './components/about/about'
import Events from './components/events/events'
import Publications from './components/publications/publications'
import DodfMiner from './components/dodfminer/dodfminer'
import Members from './components/members/members'
import Partners from './components/partners/partners'
import Contact from './components/contact/contact'

import './App.css';
import './sections.css'

function App() {
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

export default App;

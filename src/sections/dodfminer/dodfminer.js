import minerLogo from '../../assets/img/logo_miner.png'
import frame from '../../assets/img/hero-image-2.png'

import './dodfminer.css'

export default function DodfMiner(){
    return (
        <section className="dodfminer">
            <div className="container dodfminer-content">
                <div className="miner-info">
                    <div>
                        <img className="miner-logo" src={minerLogo} alt="DodfMiner Logo"/>
                        <h3>Data Extraction Library</h3>
                        <p>Extraction of data from documents in PDF format referring to the publications of the Official Gazette of the Federal District.</p>
                    </div>
                    <div className="miner-btn">
                        <a href="https://dodfminer.readthedocs.io/en/stable/"><button className="btn">Documentation</button></a>
                        <a href="https://github.com/UnB-KnEDLe/DODFMiner"><button className="btn">Repository</button></a>
                    </div>
                </div>
                <div className="miner-frame">
                    <img className="frame-img" src={frame} alt="Frame"/>
                </div>
            </div>
        </section>
    )
}
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { eventsList } from './eventsList'
import './events.css'

export default function Events(){

    const [slide, setSlide] = useState(0)

    function convertDate(date){
        const dateObj = new Date(date)
        const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        var dateArray = dateObj.toLocaleDateString().split('/')
        dateArray = dateArray.map( item => parseInt(item))
        dateArray[1] = months[dateArray[1]]

        return dateArray.join(' ')
    }

    if(slide < 0) {
        setSlide(eventsList.length - 1)
    }

    if(slide >= eventsList.length) {
        setSlide(0)
    }

    return (
        <section className="events">
            <div className="container events-content">
                <h1>Events</h1>
                <div className="carousel">
                    <button className="events-btn prev" onClick={() => setSlide(slide - 1)}>
                        <FontAwesomeIcon className="events-icon" size="lg" icon={faChevronLeft} />
                    </button>
                    <ul>
                        {eventsList.map(function(event, index){
                            return (
                                <li className={index === slide ? 'event-item show' : 'event-item'} key={index}>
                                    <div className="event-left">
                                        <h2>{event.title}</h2>
                                        <a href={event.button.url}>
                                            <button className="btn">
                                                <p>{event.button.title}</p>
                                            </button>
                                        </a>
                                        <h3 className="event-date">{convertDate(event.date)}</h3>
                                        <h4 className="description">{event.comment}</h4>
                                    </div>
                                    <ul>
                                        {event.schedule.map(function(event){
                                            return (
                                                <li key={event}>
                                                    <p>{event}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="events-btn next" onClick={() => setSlide(slide + 1)}>
                        <FontAwesomeIcon className="events-icon" size="lg" icon={faChevronRight} />
                    </button>
                </div>
                <div className="index-marker">
                    {eventsList.map((item, index) => {
                        return (
                            <div className={index === slide ? "marker-dot marked" : "marker-dot"} key={index}></div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
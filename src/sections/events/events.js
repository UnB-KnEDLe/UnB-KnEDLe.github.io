import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { eventsList } from "../../components/eventsList";
import "./events.css";

export default function Events(props) {
  var t = props.translationFunction;

  const [slide, setSlide] = useState(0);

  function convertDate(date) {
    const dateObj = new Date(date);
    const months = [
      t("January"),
      t("February"),
      t("March"),
      t("April"),
      t("May"),
      t("June"),
      t("July"),
      t("August"),
      t("September"),
      t("October"),
      t("November"),
      t("December"),
    ];

    var dateArray = dateObj.toLocaleDateString().split("/");
    dateArray = dateArray.map((item) => parseInt(item));
    dateArray[1] = months[dateArray[1] - 2];

    return dateArray.join(t(" / "));
  }

  if (slide < 0) 
    setSlide(eventsList.length - 1)

  if (slide >= eventsList.length) 
    setSlide(0)

  return (
    <section className="events">
      <div className="container events-content">
        <h1>{t("Events")}</h1>
        <div className="carousel">
          <button
            className="events-action prev"
            onClick={() => setSlide(slide - 1)}
          >
            <FontAwesomeIcon
              className="events-icon"
              size="lg"
              icon={faChevronLeft}
            />
          </button>
          <ul>
            {eventsList.map(function (event, index) {
              return (
                <li
                  className={index === slide ? "event-item show" : "event-item"}
                  key={index}
                >
                  <div className="event-left">
                    <h2>{event.title}</h2>
                    <div className="events-btn">
                      {event.button.map((button) => {
                        return (
                          <a href={button.url}>
                            <button className="btn">
                              <p>{t(button.title)}</p>
                            </button>
                          </a>
                        );
                      })}
                    </div>
                    <h3 className="event-date">{convertDate(event.date)}</h3>
                    <h4 className="description">{t(event.comment)}</h4>
                  </div>
                  <ul>
                    {event.schedule.map(function (event) {
                      return (
                        <li key={event}>
                          <p>{t(event)}</p>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <button
            className="events-action next"
            onClick={() => setSlide(slide + 1)}
          >
            <FontAwesomeIcon
              className="events-icon"
              size="lg"
              icon={faChevronRight}
            />
          </button>
        </div>
        <div className="index-marker">
          {eventsList.map((item, index) => {
            return (
              <div
                className={index === slide ? "marker-dot marked" : "marker-dot"}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

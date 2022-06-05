import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./journey.css";

function Journey() {
  return (
    <div className="journey-container">
      <VerticalTimeline lineColor="rgb(93,139,244)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
          iconStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            First Hello World App
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Samsun,Turkey - 2018
          </h4>
          {/* <p>Bachelor's Degree in computer engineering</p> */}
          {/* <TagsComp tags={["Flutter", "NodeJS","ReactJs"]} /> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
          iconStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Selcuk University</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Konya,Turkey - 2019 - 2023
          </h4>
          <p>Bachelor's Degree in computer engineering</p>
          {/* <TagsComp tags={["Flutter", "NodeJS","ReactJs"]} /> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
          iconStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Rise Rocket Club</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Konya,Turkey - 2019 - Present
          </h4>
          <p>
            Data visualization application for hybrid rocket engine and rover
          </p>
          <p>GPS tracker application for hybrid rocket</p>
          <TagsComp tags={["Flutter", "NodeJS", "ReactJs"]} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
          iconStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Horoscope Puzzle Game
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Samsun-Konya,Turkey - 2020
          </h4>
          <p>Horoscope puzzle game made by flutter</p>
          <TagsComp tags={["Flutter", "Firebase"]} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
          iconStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Accounting Application
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Konya,Turkey - 2021/2022
          </h4>
          <p>A very basic accounting application for Windows</p>
          <TagsComp tags={["Flutter", "Javascript"]} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(93,139,244)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(93,139,244)" }}
          dateClassName="timeline-date"
          iconStyle={{ background: "rgb(93,139,244)", color: "green" }}
        >
          <h3 className="vertical-timeline-element-title">Intern DevOps</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Istanbul,Turkey - 2022
          </h4>
          <p className="intern-p">
            Intership at <a href="https://snapbytes.com/">Snapbytes Limited</a>
          </p>
          <TagsComp tags={["DevOps"]} />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

function TagsComp(props) {
  const tagsNameList = props.tags;
  // const tagsItem = tagsNameList.map((tagName) => {});
  // console.log(tagsItem.toString());
  return (
    <div className="timeline-element-tags">
      {tagsNameList.map((tagName) => (
        <div className="timeline-element-tag">{tagName}</div>
      ))}
    </div>
  );
}

export default Journey;

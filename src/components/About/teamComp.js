import React from "react";
//import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import TeamCards from "./team-cards";


const steps = [
  {
    title: "Abhijeet",
    description: "Data is my playground, and APIs are my tools",
    image: "url-to-your-image-1",
  },
  {
    title: "Chit",
    description: "Wrangle data, craft models, and translate insights into action",
    image: "url-to-your-image-2",
  },
  {
    title: "Rishabh",
    description: "The invisible hand keeping the front-end afloat",
    image: "url-to-your-image-3",
  },
  {
    title: "Yash",
    description: "The web is my canvas, and code is my brush",
    image: "url-to-your-image-2",
  },
  {
    title: "Afzal",
    description: "Orchestrates the cloud, keeping your app up and running",
    image: "url-to-your-image-2",
  },
  {
    title: "Mitali",
    description: "My curiosity fuels the engine of discovery",
    image: "url-to-your-image-2",
  },
  {
    title: "Lavanya",
    description: "Turns data into stories, using visuals to paint a clear picture",
    image: "url-to-your-image-2",
  },
  {
    title: "Ayushi",
    description: "Builds the user experience, pixel by pixel",
    image: "url-to-your-image-2",
  },

];

const Team = () => {
  return (
    <div>
     
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>Conda Reddy Party</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Introducing Our Team
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                    Tech Trailblazers, Redefining Possibilities
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              {steps.map((step, index) => (
                <TeamCards
                    heading = {step.title}
                    subHeading={step.description}
                ></TeamCards>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

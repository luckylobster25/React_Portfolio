import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'mtt-tech-blog',
      description: 'Tech blog that required log-in',
      link: "https://thawing-peak-67886.herokuapp.com/",
      repo: "https://github.com/luckylobster25/Tech-Blog"
    },
    {
      name: 'weather-app',
      description: 'Weather App for any city in the world',
      link: "https://luckylobster25.github.io/weather/",
      repo: "https://github.com/luckylobster25/weather"
    },
    {
      name: 'ach-game-review',
      description: 'Project-2 collaborate with other classmate',
      link: "https://mighty-beyond-89277.herokuapp.com/",
      repo: "https://github.com/luckylobster25/Project_2"
    },
    {
      name: 'portfolio-2',
      description: 'Other portfolio not using REACT',
      link: "https://tranquil-forest-01942.herokuapp.com/",
      repo: "https://github.com/luckylobster25/My_Portfolio_2022"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

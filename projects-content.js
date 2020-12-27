const projects = [
  {
    name: "Bharat Band",
    poster: "project_1.png",
    playLink: "https://www.youtube.com/",
  },

  {
    name: "Battery",
    poster: "project_2.png",
    playLink: "https://www.youtube.com/",
  },

  {
    name: "Every Single Day",
    poster: "project_3.png",
    playLink: "https://www.youtube.com/",
  },

  {
    name: "Battery",
    poster: "project_2.png",
    playLink: "https://www.youtube.com/",
  },
];

function cardTemplate(card) {
  return `

    <div class="swiper-slide">
      <div class="img">
      <img src="./img/projects/${card.poster}" alt="">
        <div class="black-gradient">
          <a href="${card.playLink}"><img src="./img/arrows/play.svg" alt=""></a>
        </div>

        <div class="project-text">
          <h2 class="project-name">
            ${card.name}
          </h2>
          <a href="" class="case-study">Case Study</a>
        </div>
        
      </div>
    </div>  
    
`;
}

document.getElementById("add-projects-here").innerHTML = `
${projects.map(cardTemplate).join("")}
`;

const artists = [
  {
    name: "Ketan Chaudhari",
    work: "Musician",
  },

  {
    name: "Karan Patil",
    work: "Director",
  },

  {
    name: "Tanvi Manjrekar",
    work: "Writer",
  },

  {
    name: "Madhura Sawant",
    work: "Cinematographer",
  },

  {
    name: "Shubham Shinde",
    work: "Musician",
  },

  {
    name: "Shruti Kadam",
    work: "Musician",
  },
  {
    name: "Madhura Gosawi",
    work: "Writer",
  },
  {
    name: "Karan Patil",
    work: "Director",
  },

  {
    name: "Tanvi Manjrekar",
    work: "Writer",
  },

  {
    name: "Madhura Sawant",
    work: "Cinematographer",
  },


  
];

function cardTemplateTwo(card) {
  return `
  
    <div class="artist">
    <img src="/img/profile/all team/${card.name}.png" alt="">

    <div class="artist-text">
        <artist-name>
            ${card.name}
        </artist-name>

        <artist-work>
            ${card.work}
        </artist-work>
    </div>

</div> 
      
  `;
}

document.getElementById("artistsHere").innerHTML = `
  ${artists.map(cardTemplateTwo).join("")}
  `;

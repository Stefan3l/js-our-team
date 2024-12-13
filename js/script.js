const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// DOm Elements

const teamListElm = document.getElementById('team-list')
const imgElm = document.getElementById('img')
const nameMemberElm = document.getElementById('name')
const emailElm = document.getElementById('email')

// Stampo la card per ogni membro del team

let itemsList = "";
for(let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    itemsList += `
    <div class="col">
          <div class="card">
              <div class="image">
                  <img src="./${member.img}" alt="${member.name}">
              </div>
              <div class="dati">
                  <h3>${member.name}</h3>
                  <p>${member.role}</p>
                  <div class="email">
                      <span>${member.email}</span>
                  </div>
              </div>
          </div>
    </div>`
}
teamListElm.innerHTML = itemsList;
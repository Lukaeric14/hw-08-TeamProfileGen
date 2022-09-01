const teamHTML = require('./teamHTML');
const fs = require('fs');

const managerGen = (manager) => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="card-text">Phone: ${manager.phone}</p>
      <p class="card-text">Office: ${manager.office}</p>
    </div>
</div>
  `;
};

const engineerGen = (engineer) => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="card-text">Phone: ${engineer.phone}</p>
      <p class="card-text">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
    </div>
</div>
  `;
};

const internGen = (intern) => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="card-text">Phone: ${intern.phone}</p>
      <p class="card-text">School: ${intern.school}</p>
    </div>
</div>
  `;
};

const createTeam = (currentTeam) => {
    
  team = [];
  for (var i = 0; i < currentTeam.length; i++) {
    const role = currentTeam[i].getRole();

    if (role === 'Manager') {
      team.push(managerGen(currentTeam[i]));
    }
    if (role === 'Engineer') {
      team.push(engineerGen(currentTeam[i]));
    }
    if (role === 'Intern') {
      team.push(internGen(currentTeam[i]));
    }
  }
  let teamHTML = team.join('');
  let HTML = teamHTML(teamHTML);
  writeFile(HTML);
};

function writeFile(HTML) {
  fs.writeFileSync('./dist/team.html', HTML, (err) => {
    err ? console.error(err) : console.log('Created');
  });
}

module.exports = createTeam;
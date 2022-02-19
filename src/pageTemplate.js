//generates the Mangager, Engineer and Intern sections
const generateEmployee = (answers) => {
  return `
        ${answers
          .filter(({ role }) => role === "Manager")
          .map(({ name, id, email, officeNumber, role }) => {
            return `
      <section class="my-3" id="portfolio">
        <div class="flex-row justify-space-between">
          <h2 class="text-dark bg-primary p-2 display-inline-block">${role}</h2>
          <div class="col-12  mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <p>Id Number: ${id}</p>
            <p>Email Address: <a href="mailto:${email}">${email}</a></p>
            <p>Office Number: ${officeNumber}</p>
          </div>
        </div>
        `;
          })
          .join("")}

          ${answers
            .filter(({ role }) => role === "Engineer")
            .map(({ name, id, email, gitHub, role }) => {
              return `
        <section class="my-3" id="portfolio">
          <div class="flex-row justify-space-between">
            <h2 class="text-dark bg-primary p-2 display-inline-block">${role}</h2>
            <div class="col-12  mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <p>Id Number: ${id}</p>
              <p>Email Address: <a href="mailto:${email}">${email}</a></p>
              <a href="https://github.com/${gitHub}" target="_blank" class="btn"><i class="fab fa-github mr-2"></i>View ${name}'s GitHub</a>
            </div>
          </div>
          `;
            })
            .join("")}

            ${answers
              .filter(({ role }) => role === "Intern")
              .map(({ name, id, email, school, role }) => {
                return `
          <section class="my-3" id="portfolio">
            <div class="flex-row justify-space-between">
              <h2 class="text-dark bg-primary p-2 display-inline-block">${role}</h2>
              <div class="col-12  mb-2 bg-dark text-light p-3">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <p>Id Number: ${id}</p>
                <p>Email Address: <a href="mailto:${email}">${email}</a></p>
                <p>${school}</p>
              </div>
            </div>
            `;
              })
              .join("")}
      
    </section>
  `;
};

// export function to generate entire page
module.exports = (templateData) => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        <nav class="flex-row">
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateEmployee(templateData)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2022 by Johnny</h3>
    </footer>
  </body>
  </html>
  `;
};

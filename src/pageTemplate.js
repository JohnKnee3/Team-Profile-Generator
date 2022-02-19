const generateManager = (answers) => {
  // answers.map((employee) => {
  //   console.log(employee.getRole());
  // });

  console.log(answers);
  console.table(answers);
  return "Mira thinks it's dinner time";
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
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team</h1>
        <nav class="flex-row">
        </nav>
      </div>
    </header>
    <main class="container my-5">
      Hey there!!${generateManager(templateData)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by Johnny</h3>
    </footer>
  </body>
  </html>
  `;
};

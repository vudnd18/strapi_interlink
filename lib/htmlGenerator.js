const path = require("path");
const ejs = require("ejs-promise");

module.exports = {
  generator,
};

async function generator(template, params) {
  // Get the EJS fiel that will be used to generate the HTML
  const file = path.join(__dirname, `../templates/${template}.ejs`);

  if (!file) {
    throw new Error(`Could not find the ${template} in path ${file}`);
  }

  return new Promise((resolve, reject) => {
    ejs.renderFile(file, params, {}, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

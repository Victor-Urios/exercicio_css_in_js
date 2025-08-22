const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: { 
    reportDir: 'cypress/relatorio',
    overwrite: true, // as vezes é bom ter todos arquivos de testes! entao true e false é relativo
    html: true,
    json: false,
    timestamp: 'ddmmyyyyy_HHMMss' //relatorio_data.html
  }
});

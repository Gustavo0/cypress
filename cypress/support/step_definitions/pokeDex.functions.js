import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const pageObjects = require('../page_objects/homePage.js');
const functions = require('../functions/pokeDex.functions.js');

    Given('que eu acesso a pagina inicial', () => {
        functions.VisitaSite();
    });

    Then('deverei ver PokeDEX no titulo', () => {
        cy.get(pageObjects.titulo).should('have.text', 'PokeDEX');
    });

    When('eu cadastrar um novo pokemon', () =>{
        functions.InserePokemon();
    });

    Then('deverei ver o novo cadastro na página inicial', () =>{
        functions.ConsultaPokemon();
    });
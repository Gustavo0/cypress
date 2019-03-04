import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const pageObjects = require('../page_objects/homePage.js');
const functions = require('../functions/pokeDex.functions.js');
var nomeProxPokemon;

    Given('que eu acesso a pagina inicial', () => {
        functions.VisitaSite();
    });

    Then('deverei ver PokeDEX no titulo', () => {
        cy.get(pageObjects.titulo).should('have.text', 'PokeDEX');
    });

    When('eu cadastrar um novo pokemon', () =>{
        nomeProxPokemon = functions.InserePokemon();
        cy.log(nomeProxPokemon);
    });

    Then('deverei ver o novo cadastro na página inicial', () =>{
        functions.ConsultaPokemon(nomeProxPokemon);
    });
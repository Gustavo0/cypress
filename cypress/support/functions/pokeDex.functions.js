const pageObjects = require('../page_objects/homePage.js');

module.exports = {
    
    VisitaSite: function(){
        cy.visit("https://pokedex-angularjs.herokuapp.com/#!/list");
    },

    InserePokemon: function(){
        cy.get('button[ng-click="vm.showAdd($event)"]').click();
        cy.wait(2000);
        //cy.get('input[ng-model="pokemon.name"]').invoke('val').as('pokemon');
        cy.get('input[ng-model="pokemon.name"]').invoke('val').then(val => {
                cy.log(val);
                cy.setCookie('pokemon', val);
            });
        
        cy.get('input[ng-model="pokemon.attack"]').focus().type('150');
        cy.get('input[ng-model="pokemon.defense"]').focus().type('100');
        cy.get('input[ng-model="pokemon.hp"]').focus().type('100');
        cy.get('button[ng-click="salvar()"]').click();
    },

    ConsultaPokemon: function(){
        const nomePoke = cy.getCookie('pokemon');
        cy.get('input[id="input_0"]').focus().type(nomePoke);
        //cy.get(nomePoke).should('have.text', nomePoke);
    }
}

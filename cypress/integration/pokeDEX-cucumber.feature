Feature: Cadastra novo pokemon para combate

  Como um treinador pokemon eu quero inserir um novo pokemon para combate

    //Context: Deve acessar a página inicial
       // Given que eu acesso a pagina inicial

  Scenario: Devo visualizar o título PokeDEX no cabeçalho
    Given que eu acesso a pagina inicial
    Then deverei ver PokeDEX no titulo

Scenario: Devo inserir um novo pokemon
    Given que eu acesso a pagina inicial
    When eu cadastrar um novo pokemon
    Then deverei ver o novo cadastro na página inicial
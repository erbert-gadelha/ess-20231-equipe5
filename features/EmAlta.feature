Feature: Em Alta
    As an 'amante de animes'
    I want to 'acessar a página de animes em alta'
    So that 'eu posso ver os animes mais assistidos no dia, semana, trimestre ou ano'  


Scenario:Acessar a página Em Alta
    Given Eu estou na sessão "Análise de Tendencias"
    When Eu seleciono a opção "Em alta"
    Then Eu estou na página "Em alta"
    And Eu vejo a aba "Hoje" selecionada

Scenario: Selecionar outra aba
    Given Eu estou na página "Em alta"
    And A aba "Hoje" está selecionada
    And O anime "Boku no Hero" é mostrado com "60" assistidos no dia
    And O anime "One Piece" é mostrado com "55" assistidos no dia
    And O anime "Kimetsu no Yaiba" é mostrado com "52" assistidos no  dia
    When Eu seleciono a aba "Semana"
    Then Eu ejo a aba "Semana" selecionada
    And Eu vejo o anime "One Piece" com "385" assistidos na semana
    And Eu vejo o anime "Boku no Hero" com "320" assistidos na semana
    And Eu vejo o anime "Black Clover" com "270" assistidos na semana


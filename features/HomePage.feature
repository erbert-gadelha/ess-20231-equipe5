Scenario: Ir para página do Fórum
Given Eu estou na página "Inicial"
When Eu clico em "Fórum"
Then Eu sou redirecionado para página "Fórum"

Scenario: Ir para página de Animes
Given Eu estou na página "Inicial"
When Eu clico em "Tendências"
Then Eu sou redirecionado para página "Animes"
And É exibido a lista de animes

Scenario: Visualizar posts
Given Eu estou na página "Inicial"
And O post "Review episódio 2 de Jujutsu Kaisen" está no meu interesse
And O post "Easter Egg no episódio 5 de Kimetsu no yaiba" está no meu interesse
And O post "O porque Viland Saga é o melhor anime" está no meu interesse
And O post "Que plot horrivel que usaram em Naruto" está no meu interesse
When Eu clico em "Review episódio 2 de Jujutsu Kaisen"
Then Eu sou redirecionado para página "Fórum"
And O post "Review episódio 2 de Jujutsu Kaisen" é aberto
Scenario: Ir para página do Fórum
Given Eu estou na página "Inicial"
When Eu clico em "Fórum"
Then Eu sou redirecionado para página "Fórum"

Scenario: Ir para página de Animes
Given Eu estou na página "Inicial"
When Eu clico em "Tendências"
Then Eu sou redirecionado para página "Animes"

Scenario: Visualizar posts
Given Eu estou na página "Inicial"
And O post do usuário "pedro12" e título "Review do episódio 2 de Jujutsu Kaisen" está no meu interesse
And O post do usuário "almir" e título "Easter Egg no episódio 5 de Kimetsu no yaiba" está no meu interesse
And O post do usuário "jjunior" e título "O porquê Viland Saga é o melhor anime" está no meu interesse
And O post do usuário "erbert" e título "Que plot horrível que usaram em Naruto" está no meu interesse
When Eu clico em "Review do episódio 2 de Jujutsu Kaisen"
Then Eu sou redirecionado para página "Fórum"
And O post do usuário "pedro12", "Review do episódio 2 de Jujutsu Kaisen" é aberto

Scenario: Visualizar anime
Given Eu estou na página "Inicial"
And O anime "Kimetsu no Yaiba" com avaliação "8.5" e "62" assistindo está em lançamento
And O anime "One Piece" com avaliação "8.7" e "57" assistindo está em lançamento
And O anime "Ansatsu Kyoushitsu" com avaliação "9.5" e "78" assistindo está em lançamento
And O anime "Shingeki no Kyojin" com avaliação "8.5" e "84" assistindo está em lançamento
When Eu clico em "Kimetsu no Yaiba"
Then Eu sou redirecionado para página "Animes"
And As informações do anime "Kimetsu no Yaiba" são exibidas
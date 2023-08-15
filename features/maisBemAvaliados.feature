Feature: Animes mais bem avaliados
	As um usuário qualquer
	I want to ver a lista de animes mais bem avaliados


Scenario: Acessando a lista dos mais bem avaliados
	Given Estou na página “inicial”
	When Eu clico em “Mais Bem Avaliados”
	Then Eu vou para a página “Mais Bem Avaliados”
	And “Cowboy Bebop” é apresentado em “1o” lugar com a nota “8”
	And “Shingeki no Kyojin” é apresentado em “2o” lugar com a nota “6”
	And “One Piece” é apresentado em “3o” lugar com a nota “3”


Scenario: Alterar ordem da lista dos mais bem avaliados
	Given Eu estou na página “Mais Bem Avaliados”
	And O primeiro item da lista é “Cowboy Bebop: nota 8”
	And O segundo item da lista é “Shingeki no Kyojin: nota 6”
	And O terceiro item da lista é “One Piece: nota 3”
	When Eu clico em “Ordenar de forma ascendente”
	Then O primeiro item da lista é “One Piece: nota 3”
	And O segundo item da lista é “Shingeki no Kyojin: nota 6”
	And O terceiro item da lista é “Cowboy Bebop: nota 8”

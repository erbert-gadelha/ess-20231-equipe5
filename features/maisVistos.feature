Feature: Animes mais vistos
	As um usuário qualquer
	I want to ver a lista de animes mais visto em dado período de tempo


Scenario: Acessando a lista de Mais Vistos
	Given Estou na página “inicial”
	When Eu clico em “Mais Vistos”
	Then Eu vou para a página “Mais Vistos”


Scenario: Abrir janela de seleção de período de tempo
	Given Eu estou na página “Mais Vistos”
	And os elementos da lista estão ordenados baseado em dados do período de tempo “Desde o Início”
	When Eu clico em “Desde o Início”
	Then Eu vejo a opção “Hoje”
	And Eu vejo a opção “Nesta Semana”
	And Eu vejo a opção “Neste Mês”
	And Eu vejo a opção “Neste Ano”


Scenario: Mudar período de tempo
	Given A janela de seleção de período de tempo está aberta com “Desde o Início”	selecionado
	And O primeiro item da lista é “Cowboy Bebop: 337 visualizações”
	And O segundo item da lista é “Shingeki no Kyojin: 225 visualizações”
	And O terceiro item da lista é “One Piece: 49 visualizações”
	When Eu clico em  “Neste Mês” na janela de seleção
	Then O primeiro item da lista é “Shingeki no Kyojin: 87 visualizações”
	And O segundo item da lista é “Cowboy Bebop: 53 visualizações”
	And O terceiro item da lista é “One Piece: 2 visualizações”

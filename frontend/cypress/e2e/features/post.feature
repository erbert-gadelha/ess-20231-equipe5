Feature: Publicacao de Posts
  As a usuário
  I want postar reviews com titulo, tags e imagem
  so that outros usuarios possam interagir

    @ignore-this
    Scenario: Acessando a página de criação de post
      Given o usuário está na página "home"
      When o usuário pressionar o botão "new-post-button"
      Then o usuário deve ver redirecionado para página "post/new_post"

    Scenario: Criação de post simples
      Given eu sou o usuário "pedro12" e estou na página "/post/new_post"
      And o usuário preenche o campo "input-title" com "Review episódio 1 de Jujutsu Kaisen"
      And o usuário preenche o campo "input-tags" com "review" e clica no botão "button-add-tag"
      And o usuário preenche o campo "input-body" com "Episódio legal."
      When o usuário pressionar o botão "button-create-post"
      Then o usuário deve ver redirecionado para página "post/"
      And o usuário deve ver o post com título "Review episódio 1 de Jujutsu Kaisen"

    @ignore-this
    Scenario: Criação de post com imagem
      Given Eu sou o usuário "pedro12" e estou na página de criação de post "/post/new_post"
      When Eu monto o meu post com título "Review episódio 2 de Jujutsu Kaisen", tag "Review", corpo "Essa segunda temporada de Jujutsu Kaisen está muito boa! Episódio fantástico!"
      And Anexo o arquivo "screenshot.png"
      And Faço uma requisição de "POST" da minha publicação, para a rota atual
      Then O status da resposta deve ser "201"

Feature: Publicacao de Posts
  As a usuário
  I want postar reviews com titulo, tags e imagem
  so that outros usuarios possam interagir


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


    Scenario: Criação de post com imagem
      Given eu sou o usuário "pedro12" e estou na página "/post/new_post"
      And o usuário preenche o campo "input-title" com "Review episódio 1 de Jujutsu Kaisen"
      And o usuário preenche o campo "input-tags" com "review" e clica no botão "button-add-tag"
      And o usuário preenche o campo "input-body" com "Episódio legal."
      And o usuário anexa a imagem "jj14_2.png" no campo "input-image"
      When o usuário pressionar o botão "button-create-post"
      Then o usuário deve ver redirecionado para página "post/"
      And o usuário deve ver o post com título "Review episódio 1 de Jujutsu Kaisen"


    Scenario: Acessando posts 1
      Given o usuário acessa o post "5b39454d-2214-47cf-9b0f-8059218b690b"
      Then o usuário deve ver o componente "post-author" contendo o valor "pedro12"
      And o usuário deve ver o componente "post-title" contendo o valor "Review episódio 1071"
      And o usuário deve ver o componente "post-tags" contendo o valor "onepiece"
      And o usuário deve ver o componente "post-tags" contendo o valor "review"


    Scenario: Acessando posts 2
      Given o usuário acessa o post "4cdb9579-597e-43ca-8840-ce2c3ac4463d"
      Then o usuário deve ver o componente "post-author" contendo o valor "pedro12"
      And o usuário deve ver o componente "post-title" contendo o valor "Pixel Art"
      And o usuário deve ver o componente "post-tags" contendo o valor "pixelart"
      And o usuário deve ver o componente "post-tags" contendo o valor "pokeball"
      And o usuário deve ver o componente "post-tags" contendo o valor "pokemon"
      Then a imagem "pokeball.png" é exibida no componente "post-image"

      

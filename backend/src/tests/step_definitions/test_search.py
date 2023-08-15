from pytest_bdd import parsers, given, when, then, scenario
import pytest
import requests

url = 'http://127.0.0.1:8000/{0}?{1}={2}'

""" Scenario: Buscar por uma tag """
@scenario(scenario_name="Buscar por uma tag", feature_name="../features/search.feature")
def test_search_for_tag(context):
    """ Get items by tag """
    context = {}
    pass

@given(parsers.cfparse('estou na página "{page}"'))
def initial_page(context, page: str):
    context["initial_page"] = page

@given(parsers.cfparse('o post "{post_title}" tem a tag "{tag}"'))
def post_has_tag(context, post_title, tag):
    context[post_title] = {'tags': [tag]}

@given(parsers.cfparse('o post "{post_title}" tem as tags "{tag1}" e "{tag2}"'))
def post_has_tags(context, post_title, tag1, tag2):
    context[post_title] = {'tags': [tag1, tag2]}

@given(parsers.cfparse('a barra de pesquisa contém a tag "{tag}"'))
def get_search_bar_tag(context, tag):
    context['searched_tags'] = [tag]

@when('seleciono pesquisar')
def click_search(context):
    if(len(context['searched_tags']) == 1):
        context['response'] = requests.get(url.format('search', 'tags', context['searched_tags'][0]))
    else:
        context['response'] = requests.get(url.format('search', 'tags', ','.join(context['searched_tags'])))
    pass

@then(parsers.cfparse('eu vou para página "{page}"'))
def change_to_page(context, page):
    as_string = [str(num) for num in context['response'].json()['posts']]
    posts = requests.get(url.format('post', 'ids', ','.join(as_string)))
    context['posts'] = posts
    pass

@then(parsers.cfparse('a barra de pesquisa contém a tag "{tag}"'))
def verify_search_bar_tag(tag):
    # Implementação
    pass

@then(parsers.cfparse('o post "{post}" está no corpo da tela'))
def verify_post_in_body(context, post):
    posts = context['posts'].json()
    for post_data in posts:
        print(posts[post_data]['title'])

    found = False
    for post_data in posts:
        if posts[post_data]['title'] == post:
            found = True
            break

    assert found, f"Post de titulo '{post}' não encontrado no contexto"
    pass



###         ###         ###         ###         ###         ###         ###


""" Scenario: Busca por multiplas tags """
@scenario(scenario_name="Busca por multiplas tags", feature_name="../features/search.feature")
def test_search_for_tags(context):
    """ Get items by tags """
    context = {}
    pass

@given(parsers.cfparse('a barra de pesquisa contém as tags "{tag1}" e "{tag2}"'))
def get_search_bar_tags (context, tag1, tag2):
    context['searched_tags'] = [tag1, tag2]

@then(parsers.cfparse('a barra de pesquisa contém as tags "{tag1}" e "{tag2}"'))
def verify_search_bar_tags (context, tag1, tag2):
    # Implementação
    pass

@then(parsers.cfparse('apenas o post "{post}" estara no corpo da tela'))
def verify_unique_post(context, post):
    assert len(context['posts'].json()) == 1, f"Post de titulo '{post}' não encontrado no contexto"
    pass



###         ###         ###         ###         ###         ###         ###


""" Scenario: Busca sem correspondencias """
@scenario(scenario_name="Busca sem correspondencias", feature_name="../features/search.feature")
def test_unmatched_tag(context):
    """ Get none items cause unmatched tags """
    context = {}
    pass

@then('nenhum post é exibido no corpo da tela')
def verify_post_in_body2(context):
    assert len(context['response'].json()['posts']) == 0, f"({len(context['response'].json()['posts'])}) posts encontrados no contexto quando valor esperado era (0)."
    pass

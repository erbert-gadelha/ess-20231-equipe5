"""from pytest_bdd import parsers, given, when, then, scenario
from src.schemas.response import HTTPResponses, HttpResponseModel
from src.service.impl.item_service import ItemService

@scenario(scenario_name="Criação de post simples", feature_name="../features/posts.feature")
def test_create_post():
    '''Creating a new post'''

@given(parsers.cfparse('Eu estou na página "{page}"'))
def mock_initial_state_response(page: str):
    return page

@given(parsers.cfparse('Eu sou o usuário "{username}"'),
       target_fixture="context")
def present_username(client, context, username: str):
    context["username"] = username
    return context

@given(parsers.cfparse('A tag "Review" já existe no sistema'),
       target_fixture="context")
def existent_tag(client, context):
    '''Stating that the tag exists'''

@when(parsers.cfparse('Seleciono a opção de criar um novo post'),
       target_fixture="context")
def select_new_post(client, context):
    '''Requesition URL'''
    context["req_url"] = '/new_post'
    context["post"] = {}
    return context

@when(parsers.cfparse('Com o título de post "{title}}"'),
       target_fixture="context")
def choose_title(context, title: str):
    '''Choosing the title of the post'''
    context["post"]["title"] = title
    return context

@when(parsers.cfparse('Escolho a tag "{tag}"'),
       target_fixture="context")
def choose_tag(context, tag: str):
    '''Choosing the tag of the post'''
    context["post"]["tag"] = [tag]
    return context

@when(parsers.cfparse('Escrevo no corpo "{body}"'),
       target_fixture="context")
def write_body(context, body: str):
    '''Choosing the body of the post'''
    context["post"]["body"] = body
    return context

@then(parsers.cfparse('Minha review é publicada'),
       target_fixture="context")
def post_request(client, context):

    client.post()"""
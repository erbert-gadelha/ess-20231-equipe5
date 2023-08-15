
from fastapi.testclient import TestClient
from pytest_bdd import parsers, given, when, then, scenario
import pytest
import requests

'''
url = 'http://127.0.0.1:8000/{0}?{1}={2}'

def test_search_tags():
    response = requests.get(url.format('search', 'tags', 'pokemon'))
    print(response.json())

    assert response.status_code == 200
    assert 'posts' in response.json()
    assert (0) in response.json()['posts']
    assert (1) in response.json()['posts']
    assert (7) in response.json()['posts']

    
def test_search_post():
    response = requests.get(url.format('search', 'posts', '0,1,7'))
    print(response.json())

    assert response.status_code == 200

    assert len(response.json()) == 3
    assert '0' in response.json()
    assert '1' in response.json()
    assert '7' in response.json()
    assert response.json()['0']['user'] == 'vinicius13' 
    assert response.json()['1']['user'] == 'vinicius13' 
    assert response.json()['7']['user'] == 'pikachu'
'''
# Outros testes podem ser adicionados aqui

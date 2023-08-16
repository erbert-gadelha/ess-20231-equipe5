from fastapi import APIRouter, Query
from db.server import server_;
import json;

router = APIRouter()
#D:\Users\pbsl\Documents\GitHub\ess-20231-equipe5\backend
@router.get('/')
async def search(tags: str = Query(None)):
    if tags is not None:
        resposta = server_.searchForTags(tags.split(','))
        return {'posts': resposta}
    else:
        return {'None': 'Bem Vindo ao Search!'}

'''
@router.post('/post')
async def SetPost(data: dict):
    print(data);
    server_.publishPost(data);
    
    return {'resposta': 'post concluido'}
'''
    

@router.get('/settle')
async def get_data():
    retorno = 'povoou o banco' if(server_.settle()) else 'banco ja povoado'
    print(retorno)
    return retorno

@router.get('/all')
async def get_data():
    #retorno = str(a_db.getAllPosts()).replace('), (', '\n').replace('(', '').replace(')', '');
    retorno = server_.getAllPosts()
    print(retorno)
    return retorno
from fastapi import APIRouter
from banco_de_animes.classe_anime import lista_animes

banco_animes = lista_animes

router = APIRouter()

@router.get('/')
async def get_emAlta():
    return banco_animes
from fastapi import APIRouter
from banco_de_animes.classe_anime import lista_animes as anime_list

# Funções
def order_best_rated(order_by, max):

    descending = True

    if order_by == "crescente":
        descending = False

    best_rated_list = []

    for anime in anime_list:
        best_rated_list.append({"nome":anime.nome_anime,"nota":anime.avaliacao_anime})
    
    best_rated_list = sorted(best_rated_list, key=lambda x: x["nota"], reverse=descending)

    return best_rated_list[0:max]

# Router
router = APIRouter()

@router.get("/")
async def best_rated(order_by: str = "decrescente", max: int = 10):
    return {"GET": {"lista_de_animes" : order_best_rated(order_by, max)}}
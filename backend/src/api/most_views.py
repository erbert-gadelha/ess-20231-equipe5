from datetime import datetime, timedelta
from fastapi import APIRouter
from banco_de_animes.classe_anime import lista_animes as anime_list

# Funções
def select_dates_by_period(time_period, qtd_assistido_list):

    today_date = datetime.today().date()
    days_back = 0
    trimmed_list = []

    match time_period:
        case "dia":
            days_back = 1
        case "semana":
            days_back = 7
        case "mes":
            days_back = 30
        case "trimestre":
            days_back = 90
        case "ano":
            days_back = 365
    
    target_date = today_date - timedelta(days=days_back)

    if time_period != None:
        trimmed_list = [date for date in qtd_assistido_list if date > target_date and date <= today_date]
        return trimmed_list
    return qtd_assistido_list
    
    
def order_most_views(order_by, max, time_period):

    descending = True
    
    if order_by == "crescente":
        descending = False

    lista_mais_vistos = []

    for anime in anime_list:
        lista_mais_vistos.append({"name":anime.nome_anime,"views":len(select_dates_by_period(time_period, anime.qtd_assistido))})
    
    lista_mais_vistos = sorted(lista_mais_vistos, key=lambda x: x["views"], reverse=descending)

    return lista_mais_vistos[0:max]

# Router
router = APIRouter()

@router.get("/")
async def mais_vistos(order_by: str = "decrescente", max: int = 10, t: str | None = None):
    return {"GET" : {"anime_list": order_most_views(order_by, max, t)}}
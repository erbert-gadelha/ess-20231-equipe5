from src.config.database import Base
from sqlalchemy import Column, Integer, Boolean

class Anime(Base):
    __tablename__ = 'animes'
    
    nome_anime
    qtd_assistidos
    qtd_assistindo
    likes
    
    ##Vou pesquisar como utilizar o tipo List no sqlalchemy 
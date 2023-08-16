import sqlite3;
from src.db.CreatePost import CreatePost;
from src.db.SearchPost import SearchPost;
from uuid import uuid4

class server_bd():
    
    def __init__(self, url):
        self._con = sqlite3.connect(url)
        self._cur = self._con.cursor()
    
        try:        
            self._cur.execute('SELECT * FROM Post')
            self._cur.execute('SELECT * FROM Post_tag')
            self._cur.execute('SELECT * FROM Comments')
            print("[sucesso] Conectado ao banco com sucesso."); 
        except sqlite3.OperationalError:

            try:
                self._cur.execute('DROP TABLE post')
            except sqlite3.OperationalError:
                pass
            try:
                self._cur.execute('DROP TABLE post_tag')
            except sqlite3.OperationalError:
                pass
            try:
                self._cur.execute('DROP TABLE comments')
            except sqlite3.OperationalError:
                pass
            
            self._cur.execute('CREATE TABLE Post(id, user, title, body, image)')
            self._cur.execute('CREATE TABLE Post_tag (post, tag)')
            self._cur.execute('CREATE TABLE Comments(id, post, user, body)')
            
            print("[aviso] Tabelas 'Post', 'Comments' e 'Post_tag' foram criadas.")
            self.settle()
        
        self.c_post = CreatePost(self.cur)
        self.s_post = SearchPost(self.cur)
    
    def settle(self):
        self._cur.execute('SELECT * FROM Post')
        count = len(self._cur.fetchall())
        #print(count)
        if(count > 0):
            return False

        db = CreatePost(self._cur)
        db.criaPost( {'user': 'vinicius13', 'title': "pokemon eh massa", 'body': 'to gostando mto dos ultimos episodios. E vcs?', 'tags':['pokemon', 'anime']})
        db.criaPost( {'user': 'vinicius13', 'title': 'pokemon >> digimon', 'body': 'digimon eh paia dms kk', 'tags':['pokemon', 'digimon', 'humor']})
        db.criaPost( {'user': 'marquinh0s', 'title': 'one piece ta em hiato eh?', 'body': 'faz um tempo q n tem capitulo novo. Algm sabe?', 'tags':['one piece', 'op', 'gear 5', 'mangá']})
        db.criaPost( {'user': 'verona', 'title': 'party de genshin', 'body': 'alguma alma caridosa ta afim de me ajudar numa campnha nivel 8?', 'tags':['games', 'genshin impact', 'garena']})
        db.criaPost( {'user': 'aldebaram', 'title': 'esse seya eh um canalha', 'body': 'o bixo me atacou de costas,boy. isso n existe n. E olha q eu tava pegando leve com esse bixo visse', 'tags':['cdz']})
        db.criaPost( {'user': 'aiorus', 'title': 'counter pra ikki de fenix', 'body': 'tipo assim.. o cara sempre volta? alguem sabe alguma forma de causar morte morrida no cara?', 'tags':['cdz', 'cavaleiros do zodiaco']})
        db.criaPost( {'user': 'eren', 'title': 'tatakae', 'body': 'tatakae', 'tags':['aot', 'anime']})
        db.criaPost( {'user': 'pikachu', 'title': 'great ball', 'body': 'mais espacosa que a comum, menos confortavel que a ultra. Pelo preco acho que vale a pena', 'tags':['pokemon', 'humor']})
        self._con.commit()

        return True
    
    def getPost(self, post_id: str) -> dict | None:
        '''Get post by id

        Parameters
        - post_id: 
            The id of the comments original post    

        Returns
        - post: 
            A dictionary containing the posts info
        - None
            In case it doesn't find the post
        '''

        self._cur.execute(f"SELECT * FROM Post WHERE id = {post_id}")
        
        main_post = self._cur.fetchone()

        self._cur.execute(f"SELECT * FROM Post_tag")
    
        return {main_post[0]: 
                {'user': main_post[1],
                 'title': main_post[2],
                 'body': main_post[3]}}

    def createPost(self, post: dict, post_img: bytes | None = None) -> dict | None:
        '''
        Will try to choose a random id for the post, create and then store it (and its image) in the database.
        If it can't generate an unused id after 3 tries, it gives up. 

        Parameters
        - post:
            A dicitionary containing all of the posts data:
                - user
                - list of tags
                - title
                - body
                - images file name
        - post_img:
            Contains the bytes that make up the posts attached image

        Returns
        - new_post: 
            The id and the new post uploaded to the forum in a form of dictionary
        '''
        count = 0
        p_check = True
        self._cur.execute(f'SELECT id FROM Post')
        id_list = self._cur.fetchall()
        while(p_check and count<3):
            post_id = uuid4()
            p_check = post_id in id_list
            count += 1

        if(not p_check):
            self._cur.execute(f'INSERT INTO Post * VALUES ({post_id}, "{post["user"]}", "{post["title"]}", "{post["body"]}", {post["image"]})')
            for tag in post['tags']:
                self._cur.execute(f'INSERT INTO Post_tag (post, tag) VALUES ({post_id}, "{tag.capitalize()}")')
            
            if(type(post_img) == bytes):
                    img_file = open(f'src/db/images/{post["image"]}', 'wb')
                    img_file.write(post_img)
                    img_file.close()
            
            return {post_id: post}
    
    def searchForTags(self, tags):
        #self._cur.execute('SELECT tag FROM Post_tag GROUP BY tag')
        #tags_list = self._cur.fetchall()
        return self.s_post.getTags(tags, self.cur)

    def getAllPosts(self):
        aux = self.s_post.getAll(self.cur)
        return aux

    def getAllTags(self):
        self._cur.execute('SELECT tag FROM Post_tag GROUP BY tag')
        return self._cur.fetchall()
    
    def getComments(self, post_id: str) -> list | None:
        '''Get a list of comments by a posts id

        Parameters
        - post_id: 
            The id of the comments original post    

        Returns
        - A list of comments of the searched post
        '''

        post = self.getPost(post_id)

        if(not post):
            return None

        self._cur.execute(f'SELECT * FROM Comments WHERE post = {post_id}')

        post[post_id]['comments'] = self._cur.fetchall()

        return post

    def createComment(self, comment: dict, post_id: str) -> bool | None:
        '''Create a comment (explain more later)'''

        if(self.getPost(post_id)):
            count = 0
            c_check = True
            self._cur.execute(f'SELECT id FROM Comments WHERE post = {post_id}')
            id_list = self._cur.fetchall()
            while(c_check and count<3):
                comment_id = uuid4()
                c_check = comment_id in id_list
                count += 1

            if(not c_check):
                self._cur.execute(f'INSERT INTO Comment * VALUES ({comment_id}, {post_id}, "{comment["user"]}", "{comment["body"]}")')
                return True
            return False


    @property
    def con(self):
        return self._con

    @con.setter
    def con(self, param):
        return None

    @property
    def cur(self):
        return self._cur

    @cur.setter
    def cur(self, param):
        return None

server_ = server_bd("banco.db")

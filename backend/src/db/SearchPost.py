import sqlite3

class SearchPost:
    def __init__(self, cursor):
        temp = 0;
    
    def getTags(self, tags, cursor):
        
        tags_ = ' INNER JOIN post_tag TAG0 ON PT.post = TAG0.post AND TAG0.tag = "{0}"'.format(tags[0]);
        for index in range(1, len(tags)):
            tags_ = tags_ + (' INNER JOIN post_tag TAG{0} ON PT.post = TAG{0}.post AND TAG{0}.tag = "{1}"'.format(index, tags[index]));
        
        cursor.execute('SELECT PT.post FROM post_tag PT ' + tags_ + 'GROUP BY PT.post ORDER BY PT.post DESC');
        
        retorno = []
        for post in cursor.fetchall():
            retorno.append(post[0]);
        
        print(retorno)
        return retorno;

    def getPosts(self, ids, cursor):
        ids_ = 'id = {0}'.format(ids[0]);
        for index in range(1, len(ids)):
            ids_ = ids_ + (' OR id = {0}'.format(ids[index]));

        cursor.execute('SELECT * FROM post WHERE ' + ids_);
        return cursor.fetchall();

    def getAll(self, cursor):
        cursor.execute('SELECT * FROM post');
        return cursor.fetchall();

    def tags(self, cursor):
        cursor.execute('SELECT tag FROM post_tag GROUP BY tag ORDER BY tag ASC');
        return cursor.fetchall();

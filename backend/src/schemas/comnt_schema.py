from pydantic import BaseModel
from typing import Optional, List

class UserComment(BaseModel):
    og_post_id: str
    comm_id: str
    user: str
    body: str

class NewComment(BaseModel):
    user: str
    body: str
    def assemble(self):
        "Assembles the NewComment object into a dictionary"
        dictio = {}
        dictio['com_id'] = ""
        dictio['user'] = self.user
        dictio['body'] = self.body
        return dictio

'''
def assemble(post: NewPost) -> dict:
    "Assembles the NewPost object into a dictionary"
    dictio = {}
    dictio['user'] = post.user
    dictio['tags'] = post.tags
    dictio['title'] = post.title
    dictio['body'] = post.body
    dictio['image'] = img_name
    dictio['comments'] = []
    return dictio'''
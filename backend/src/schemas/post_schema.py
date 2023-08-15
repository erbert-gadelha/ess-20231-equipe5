from pydantic import BaseModel
from typing import Optional, List

class UserPost(BaseModel):
    post_id: str
    user: str
    tags: list
    title: str
    body: str
    img_name: str
    comments: list

class NewPost(BaseModel):
    user: str
    tags: list = [] #assim msm?
    title: str
    body: str
    def assemble(self, img_name: str = "") -> dict:
        "Assembles the NewPost object into a dictionary"
        dictio = {}
        dictio['user'] = self.user
        dictio['tags'] = self.tags
        dictio['title'] = self.title
        dictio['body'] = self.body
        dictio['image'] = img_name
        dictio['comments'] = []
        return dictio
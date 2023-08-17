from pydantic import BaseModel
import uuid
import base64

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
    tags: str
    title: str
    body: str
    img_base64: str = ""
    img_extension: str = ""
    def assemble(self) -> dict:
        "Assembles the NewPost object into a dictionary"
        dictio = {}
        dictio['user'] = self.user
        dictio['tags'] = self.tags.split(',')
        dictio['title'] = self.title
        dictio['body'] = self.body
        dictio['img_filename'] = generate_uuid() + self.img_extension
        dictio['img_bytes'] = base64_to_bytes(self.img_base64) if self.img_base64 != "" else None
        dictio['comments'] = []
        return dictio

def generate_uuid() -> str:
    return str(uuid.uuid4())

def base64_to_bytes(base64_string: str) -> bytes:
    return base64.b64decode(base64_string)
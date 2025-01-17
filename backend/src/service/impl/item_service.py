from schemas.response import HTTPResponses, HttpResponseModel, Optional
from service.meta.item_service_meta import ItemServiceMeta
from db.server import server_ as db
from banco_de_animes.classe_anime import lista_animes as animelist

class ItemService(ItemServiceMeta):

    @staticmethod
    def get_post(item_id: str) -> HttpResponseModel:
        """Get item by id and category method implementation"""
        item = db.getPostComments(item_id)
        if not item:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND().status_code,
                data=item,
            )
    
    @staticmethod
    def create_post(post: dict) -> HttpResponseModel:
        """Post a new post method implementation"""
        if(post['img_bytes']):
            f_name: str = post['img_filename']
            f_type = f_name[f_name.rfind('.'):]
            if(f_type not in ['.jpg', '.jpeg', '.png']):
                return HttpResponseModel(
                    message=HTTPResponses.UNSUPPORTED_MEDIA_TYPE().message,
                    status_code=HTTPResponses.UNSUPPORTED_MEDIA_TYPE().status_code,
                )
        post_response = db.createPost(post, post['img_bytes'])
        if not post_response:
            return HttpResponseModel(
                message=HTTPResponses.SERVER_ERROR().message,
                status_code=HTTPResponses.SERVER_ERROR().status_code,
            )
        
        return HttpResponseModel(
                message=HTTPResponses.ITEM_CREATED().message,
                status_code=HTTPResponses.ITEM_CREATED().status_code,
                data=post_response
            )
    
    @staticmethod
    def create_comment(comment: dict, post_id: str) -> HttpResponseModel:
        """Post a new comment method implementation"""
        response = db.createComment(comment, post_id)
        if not response:
            return HttpResponseModel(
                message=HTTPResponses.SERVER_ERROR().message,
                status_code=HTTPResponses.SERVER_ERROR().status_code,
            )
        
        return HttpResponseModel(
                message=HTTPResponses.ITEM_CREATED().message,
                status_code=HTTPResponses.ITEM_CREATED().status_code,
                data=response
            )

    @staticmethod
    def get_comments(post_id: str) -> HttpResponseModel:
        """Get all comments of a post via the post id"""
        post_commts = db.getComments(post_id)
        if not post_commts:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        else:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND().status_code,
                data=post_commts,
            )
            
    @staticmethod
    def get_animes():
        """Get all animes method implementation"""
        animes = animelist
        if not animes:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        
        return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND().status_code,
                data=animes,
            )       

    # TODO: implement other methods (create, update, delete)
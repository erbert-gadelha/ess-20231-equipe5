from src.schemas.response import HTTPResponses, HttpResponseModel, Optional
from src.service.meta.item_service_meta import ItemServiceMeta
from src.db.server import server_ as db

class ItemService(ItemServiceMeta):

    @staticmethod
    def get_post(item_id: str) -> HttpResponseModel:
        """Get item by id and category method implementation"""
        item = db.getPost(item_id)
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
    def create_post(post_main: dict, post_img: Optional[bytes] = None) -> HttpResponseModel:
        """Post a new post method implementation"""
        if(post_img):
            f_name: str = post_main['image']
            f_type = f_name[f_name.rfind('.'):]
            if(f_type not in ['.jpg', '.jpeg', '.png']):
                return HttpResponseModel(
                    message=HTTPResponses.UNSUPPORTED_MEDIA_TYPE().message,
                    status_code=HTTPResponses.UNSUPPORTED_MEDIA_TYPE().status_code,
                )
        post_response = db.create_post(post_main, post_img)
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
        response = db.create_comment(comment, post_id)
        if not response:
            return HttpResponseModel(
                message=HTTPResponses.SERVER_ERROR().message,
                status_code=HTTPResponses.SERVER_ERROR().status_code,
            )
        
        return HttpResponseModel(
                message=HTTPResponses.ITEM_CREATED().message,
                status_code=HTTPResponses.ITEM_CREATED().status_code,
            )
    # TODO: implement other methods (create, update, delete)
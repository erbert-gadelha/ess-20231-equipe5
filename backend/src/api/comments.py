from fastapi import APIRouter, status
from src.schemas.response import HttpResponseModel
from src.service.impl.item_service import ItemService
from src.schemas.comnt_schema import NewComment

router = APIRouter()

@router.post("/{post_id}/new_comment", 
            response_model=HttpResponseModel,
            status_code=status.HTTP_201_CREATED,
            description="Upload a new comment to a post",
            tags = ['comment'],
            responses={
                status.HTTP_201_CREATED:{
                    "model": HttpResponseModel,
                    "description": "Successfully created a new post"
                },
                status.HTTP_500_INTERNAL_SERVER_ERROR:{
                    "model": HttpResponseModel,
                    "description": "Error in creating post"
                }
            })
async def publish_comment(comment: NewComment, post_id: str) -> HttpResponseModel:
    '''
    Post a comment on a post from the forum
    Parameters:
    - comment: The comment and its contents.
    - post_id: The ID of the post being commented on.

    Returns:
    - A message confirming the creation and storage of the comment.

    Raises:
    - HTTPException 500: If the server can't generate a unique id for the comment.
    '''
    comnt_create_response = ItemService.create_comment(comment.assemble(), post_id)
    return comnt_create_response
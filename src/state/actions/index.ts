import {ActionType}  from '../action-type'
 
interface SearchrepositoriesAction{
    type:ActionType.SEARCH_REPOSITORIES;
}

interface SearchrepositoriesSuccessAction{
    type:ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload:string[];
}

interface SearchrepositoriesErrorAction{
    type:ActionType.SEARCH_REPOSITORIES_ERROR;
    payload:string;
}

export type Action =  | SearchrepositoriesAction 
| SearchrepositoriesSuccessAction 
| SearchrepositoriesErrorAction;
import fetch from 'cross-fetch';

export const REQUEST_TAGS   = 'REQUEST_TAGS';
export const SUCCESS_TAGS   = 'SUCCESS_TAGS';
export const SELECT_TAG     = 'SELECT_TAG';


export const requestTag     = ()    => ({ type: REQUEST_TAGS });
export const setTags        = items => ({ type: SUCCESS_TAGS, items });
export const setSelectedTag = id    => ({ type: SELECT_TAG, id });


const tagListRequest = () => fetch('public/data/tags.json');

export const getTagsList = () => (dispatch, getState) => {
    if (!getState().tags.items.length){
        dispatch(requestTag());
        return tagListRequest()
            .then(response => response.json())
            .then(json => dispatch(setTags(json)))
    }
};

export const getTagInfo = (id) => (dispatch, getState) => {
    if (!getState().tags.items.length){
        dispatch(requestTag());
        return tagListRequest()
            .then(response => response.json())
            .then(json => {
                dispatch(setTags(json));
                dispatch(setSelectedTag(id))
            })
    }

    return dispatch(setSelectedTag(id))
};
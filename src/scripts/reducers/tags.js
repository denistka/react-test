import { REQUEST_TAGS, SUCCESS_TAGS, SELECT_TAG } from "../actions";

const initialState = {
    isFetching: false,
    items: [],
    selectedItem: {
        label: '',
        mentions: {},
        pageType: {}
    }
};

const getMentions = (sentiment) => {
    let total = 0;
    Object.keys(sentiment).forEach(key => total += sentiment[key]);
    return {...sentiment, total}
};

const tags = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TAGS:
            return {
                ...state,
                isFetching: true
            };
        case SUCCESS_TAGS:
            return {
                ...state,
                items: action.items.map((el) => {
                    return {
                        ...el,
                        id: el.id.replace(/\s+|[,\/]/g, '_'),
                    }
                }),
                isFetching: false
            };
        case SELECT_TAG:
            const tagInfoById = state.items.filter(t => action.id === t.id)[0];
            return {
                ...state,
                selectedItem: {
                    ...tagInfoById,
                    mentions: getMentions(tagInfoById.sentiment)
                }
            };
        default:
            return state
    }
};

export default tags

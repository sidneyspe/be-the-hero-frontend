import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  pages: 0,
  total: 0,
  loading: false,
};

export default function ong(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@ong/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@ong/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@ong/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@ong/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@ong/SUCCESS': {
        draft.data = action.payload.data;
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.loading = false;
        break;
      }
      case '@ong/FAILURE':
        draft.loading = false;
        break;
      default:
    }
  });
}

import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  pages: 0,
  total: 0,
  loading: false,
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@profile/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@profile/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@profile/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@profile/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@profile/SUCCESS': {
        draft.data = action.payload.data;
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.loading = false;
        break;
      }
      case '@profile/FAILURE':
        draft.loading = false;
        break;
      default:
    }
  });
}

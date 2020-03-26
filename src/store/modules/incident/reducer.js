import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  pages: 0,
  total: 0,
  loading: false,
};

export default function incident(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@incident/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@incident/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@incident/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@incident/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@incident/SUCCESS': {
        draft.data = action.payload.data;
        draft.pages = action.payload.pages;
        draft.total = action.payload.total;
        draft.loading = false;
        break;
      }
      case '@incident/FAILURE':
        draft.loading = false;
        break;
      default:
    }
  });
}

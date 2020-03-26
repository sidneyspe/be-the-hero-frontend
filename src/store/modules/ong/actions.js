export function ongListRequest(search) {
  return {
    type: '@ong/LIST_REQUEST',
    payload: { search },
  };
}

export function ongCreateRequest(ong) {
  return {
    type: '@ong/CREATE_REQUEST',
    payload: { ong },
  };
}

export function ongEditRequest(id, ong) {
  return {
    type: '@ong/EDIT_REQUEST',
    payload: { id, ong },
  };
}

export function ongDeleteRequest(id) {
  return {
    type: '@ong/DELETE_REQUEST',
    payload: { id },
  };
}

export function ongSuccess(data, pages, total) {
  return {
    type: '@ong/SUCCESS',
    payload: { data, pages, total },
  };
}

export function ongFailure() {
  return {
    type: '@ong/FAILURE',
  };
}

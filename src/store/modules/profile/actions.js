export function profileListRequest(search) {
  return {
    type: '@profile/LIST_REQUEST',
    payload: { search },
  };
}

export function profileCreateRequest(name) {
  return {
    type: '@profile/CREATE_REQUEST',
    payload: { name },
  };
}

export function profileEditRequest(id, name) {
  return {
    type: '@profile/EDIT_REQUEST',
    payload: { id, name },
  };
}

export function profileDeleteRequest(id) {
  return {
    type: '@profile/DELETE_REQUEST',
    payload: { id },
  };
}

export function profileSuccess(data, pages, total) {
  return {
    type: '@profile/SUCCESS',
    payload: { data, pages, total },
  };
}

export function profileFailure() {
  return {
    type: '@profile/FAILURE',
  };
}

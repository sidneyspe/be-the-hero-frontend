export function incidentListRequest(search) {
  return {
    type: '@incident/LIST_REQUEST',
    payload: { search },
  };
}

export function incidentCreateRequest(incident) {
  return {
    type: '@incident/CREATE_REQUEST',
    payload: { incident },
  };
}

export function incidentEditRequest(id, incident) {
  return {
    type: '@incident/EDIT_REQUEST',
    payload: { id, incident },
  };
}

export function incidentDeleteRequest(id) {
  return {
    type: '@incident/DELETE_REQUEST',
    payload: { id },
  };
}

export function incidentSuccess(data, pages, total) {
  return {
    type: '@incident/SUCCESS',
    payload: { data, pages, total },
  };
}

export function incidentFailure() {
  return {
    type: '@incident/FAILURE',
  };
}

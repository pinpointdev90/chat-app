export const API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:6868/api";

export const REGISTER_URL = `${API_URL}/auth/register`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const ROOM_CREATE_URL = `${API_URL}/room/create`;
export const ROOM_UPDATE_URL = `${API_URL}/room/update`;
export const ROOM_REMOVE_URL = `${API_URL}/room/remove`;
export const ROOM_GETS_URL = `${API_URL}/room/gets`;

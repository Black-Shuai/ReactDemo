import http from '../utils/http'

export const api_login = (params) => http.post('/api/login',params);

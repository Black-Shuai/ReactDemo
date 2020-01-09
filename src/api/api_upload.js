import http from '../utils/http'

export const getmess=(params)=>http.post("/api/testparam/VideoResultMapByT_id",params);
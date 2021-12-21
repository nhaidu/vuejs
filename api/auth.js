import axios from '@/libs/axios';

export const register = (params) => axios.post('/register', params).then((_) => _.data);

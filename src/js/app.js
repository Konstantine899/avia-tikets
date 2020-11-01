// app.js
import api from './service/apiService';

api.countries().then((res) => console.log(res));
api.cities().then((res) => console.log(res));

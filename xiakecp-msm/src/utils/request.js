import axios from "axios";

const request = axios.create({
  baseURL: "/",
  timeout: 5000
});

// request.get("/db.json").then(response => {
//   const data = response.data;
// })
/* // 请求拦截
request.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error);
})
// 响应拦截
request.interceptors.request.response.use(response =>{
    return response
}, error => {
    return Promise.reject(error);
}) */

export default request;

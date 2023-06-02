import axios from "axios";
import store from "../../redux/store";


async function getApiData(url: string, method: string, body?: Object) {
    let response;
    switch (method) {
        case 'POST': {
            response = await axios.post(url,body)
            .then(res => {return res})
            // .catch(err => {throw err;})
            break;
        }
        case 'GET': {
             response = await axios.get(url)
            .then(res => {return res})
            // .catch(err => {throw err;})
            break;
        }
        case 'PUT': {
            response = await axios.put(url,body)
            .then(res => {return res})
            // .catch(err => {throw err;})
            break;
        }
        case 'DELETE': {
            response = await axios.delete(url)
            .then(res => {return res})
            // .catch(err => {throw err;})
            break;
        }
        case 'PATCH': {
            response = await axios.patch(url,body)
            .then(res => {return res})
            // .catch(err => {throw err;})
            break;
        }
    }
    return response;
}


axios.interceptors.request.use(function (config) {
  config.headers['request-context'] = 'appId=cid-v1:731bc473-3220-4d5a-a549-3391acb13416 '
    return config;
  }, 
  function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (config) {
    return config;
  }, 
  function (error) {
    
    // store.dispatch(showErrorPage(true));

    return Promise.reject(error);
  });

export { getApiData };
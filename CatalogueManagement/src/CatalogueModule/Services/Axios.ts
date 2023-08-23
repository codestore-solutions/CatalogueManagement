import axios from 'axios';
import store from '../../redux/store';

async function getApiData(url: string, method: string, body?: any) {
  let response;
  switch (method) {
    case 'POST': {
      response = await axios
        .post(url, body, {headers: body.headers})
        .then(res => {
          return res;
        });
      // .catch(err => {throw err;})
      break;
    }
    case 'GET': {
      response = await axios.get(url, body).then(res => {
        return res;
      });
      // .catch(err => {throw err;})
      break;
    }
    case 'PUT': {
      response = await axios.put(url, body).then(res => {
        return res;
      });
      // .catch(err => {throw err;})
      break;
    }
    case 'DELETE': {
      response = await axios.delete(url, body).then(res => {
        return res;
      });
      // .catch(err => {throw err;})
      break;
    }
    case 'PATCH': {
      response = await axios.patch(url, body).then(res => {
        return res;
      });
      // .catch(err => {throw err;})
      break;
    }
  }
  return response;
}

axios.interceptors.request.use(
  function (config) {
    console.log('Request sent to ', config.url);
    // config.headers['Authorization'] = `Bearer ${token}`
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    // store.dispatch(showErrorPage(true));
    console.log(error.toString());
    return Promise.reject(error);
  },
);

export {getApiData};

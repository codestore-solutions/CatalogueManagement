import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class Axios {
  protected static get(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return axios.get(url, config);
  }

  protected static post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return axios.post(url, data, config);
  }

  protected static put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return axios.put(url, data, config);
  }

  protected static delete(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    return axios.delete(url, config);
  }

  protected static all(values: any[]): Promise<any[]> {
    return axios.all(values);
  }
}

export default Axios;

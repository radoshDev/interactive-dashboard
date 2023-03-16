import axios, { AxiosResponse } from 'axios'

const baseURL = 'https://c8ba3234-0cd5-4176-8def-44f7b79b2f8c.mock.pstmn.io/'

export const apiInstance = axios.create({
  baseURL: baseURL,
})

export const apiGet = async <ResponseData = unknown>(
  url: string
): Promise<AxiosResponse<ResponseData>> => {
  return apiInstance.get(url)
}

import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random'
});

export async function findAll() {
  const { data } = await api.get('/jokes');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data
}

export async function createOne() {

}
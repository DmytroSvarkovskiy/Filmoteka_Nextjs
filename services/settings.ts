import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmZlYjMzMzI0ZjcyNTc0MTM2ZDFjZDE0YWU3NjliNSIsInN1YiI6IjYzNWMxMWVmZmQ2MzAwMDA3ZTNmZjZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnhuAxfoYoPBod_5WgbIPI3g61qdTUOJbAkoqlv9hFY';

export const apiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { common: { Authorization: `Bearer ${token}` } },
});

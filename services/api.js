import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b/',
  headers: {
    'X-Master-Key': '$2b$10$TOrHgWmk1zec7tmk3cNUIOqh3l0MhpHq9lDMPI90ujlICacjBKH4K'
  }
})

export default api
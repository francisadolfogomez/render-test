import axios from 'axios'

//const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const cors = require('cors')

app.use(cors())

// ...

export default { getAll, create, update }
import axios from 'axios'

const axCp = axios.create({
  baseURL: 'http://localhost:3000/api/company/'
})

const axEmp = axios.create({
  baseURL: 'http://localhost:3000/api/employees/'
})


export {
  axCp,
  axEmp
}
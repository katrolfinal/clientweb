import axios from 'axios'

const axCp = axios.create({
  baseURL: 'http://35.240.174.62/api/company/'
})

const axEmp = axios.create({
  baseURL: 'http://35.240.174.62/api/employees/'
})

// 35.240.174.62


export {
  axCp,
  axEmp
}
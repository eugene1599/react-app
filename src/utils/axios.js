import axios from 'axios'

function axiosHeaders(){
  return {
    headers: {
      'access-token': localStorage.getItem('access-token'),
      'token-type': localStorage.getItem('token-type'),
      'client': localStorage.getItem('client'),
      'expiry': localStorage.getItem('expiry'),
      'uid': localStorage.getItem('uid'),
    }
  }
}

// function refreshAxiosHeaders(){
//   axios.defaults.headers = { ...axios.defaults.headers, ...axiosHeaders().headers }
//   let axios2 = axios;
//   debugger;
// }

export { axiosHeaders }
export default axios.create(axiosHeaders())


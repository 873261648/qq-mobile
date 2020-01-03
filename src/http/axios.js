import Axios from 'axios'

Axios.defaults.transformResponse = (data) => {
    let res = JSON.parse(data)
    if (res.errno === -2) {
        // 会话超时重新登陆
        sessionStorage.removeItem('qq')
        sessionStorage.removeItem('homeActive')
        window.location.href = '/'
    }

    return res
}

export default Axios

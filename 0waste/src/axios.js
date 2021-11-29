import axios from 'axios'

export default (t, url) =>  {
    const p = axios.create({
        baseURL: url,
    })
    p.defaults.headers.common['token'] = t
    return p
}
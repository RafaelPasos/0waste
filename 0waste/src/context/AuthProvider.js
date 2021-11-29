import React from 'react'
import AuthContext from './context'
const _source = () => {return window.localStorage.getItem('token')}

export default ({source, ...rest}) => {
    const [auth, setAuth] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => setAuth(source?source(auth):_source()), [])
    React.useEffect(() => setLoading(false), [auth])
    return (
        <AuthContext.Provider value={{auth, loading}}>
            {rest.children}
        </AuthContext.Provider>
    )
}
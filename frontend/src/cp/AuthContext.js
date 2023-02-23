import { createContext , useState } from 'react'
export const AuthenticateContext= createContext()
export const AuthProvider= (props)=>{
    const [authInfo,setAuthInfo]=useState({
        token:'',
        isAuthenticated:false
    })
    return (
        <AuthenticateContext.Provider value={[authInfo,setAuthInfo]}>
            {props.children}
        </AuthenticateContext.Provider>
    )
}

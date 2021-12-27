// ** Router Import
import Router from './router/Router'
//Actualizar datos del store del usuario
import {useDispatch} from 'react-redux'
import {handleLogin} from '@store/actions/auth'

import React, { useEffect } from 'react'

const App = (props) => {
const dispatch = useDispatch()
    useEffect(() => {
       
        const datosUsuario = JSON.parse(localStorage.getItem('userData')) || {}
        dispatch(handleLogin(datosUsuario))
    }, [])

     return (
<Router />
)
}


export default App

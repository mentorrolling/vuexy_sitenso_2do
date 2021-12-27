import React from 'react'

//Traer datos de store del usuario
import {useSelector} from 'react-redux'
import { Code } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

import '../css/style.css'

const Perfil = () => {

    const usuario = useSelector(state => state.auth.userData)
    
    return (
        <div>
            <h1 className="text-center mb-3">Hola! soy tu perfil 😎</h1>

            <div className="col-12 col-md-4 offset-md-4">
            <Card className="h-100 text-center">
                <CardHeader className="justify-content-center">
                <CardImg className="card_img" src={usuario.imageUrl}></CardImg>
                </CardHeader>
                <CardBody>
                <CardTitle><Code size={20} /> {usuario.name}</CardTitle>
                <CardText className="d-none d-md-block">{usuario.email}</CardText>
              
                </CardBody>
                {/* <CardFooter>
                <a className="btn btn-primary btn-block" href={curso.url} target='_blank'>Ver mas..</a>
                </CardFooter> */}
            </Card>
            </div>
            
        </div>
    )
}

export default Perfil

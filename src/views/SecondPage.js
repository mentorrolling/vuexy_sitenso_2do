import { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import {getUsuarios} from '../helpers/usuariosFetch'
import '../css/style.css'

const SecondPage = () => {

  const [usuarios, setUsuarios] = useState({
    loading:true,
    datos:[]
  })

  useEffect(() => {

    getUsuarios().then(respuesta => {
      setUsuarios({
        loading:false,
        datos:respuesta
      })
    })
    
  }, [])

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3">
      {
      usuarios.loading ? <h3>Cargando..</h3> : usuarios.datos.map(user => (
     <div key={user.id} className="col text-center">
     <Card>
      <CardHeader>
        <CardTitle>{user.first_name} {user.last_name} 🙌</CardTitle>
      </CardHeader>
      <CardBody>
        <CardImg className="card_img mb-2" src={user.avatar}></CardImg>
        <CardText>{user.email}</CardText>
        
      </CardBody>
    </Card>
</div>

      ))
    }

      </div>
   
    </>
  )
}

export default SecondPage

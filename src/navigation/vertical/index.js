import { Users, Code, User } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Cursos',
    icon: <Code size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Equipo',
    icon: <Users size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'perfil',
    title: 'Perfil',
    icon: <User size={20} />,
    navLink: '/perfil'
  }
]

import {Routes,Route} from 'react-router-dom'
import UserForm from '../components/UserForm'
import AddressForm from '../components/AddressForm'
import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/userform' element={<UserForm/>} />
        <Route path='/addressform' element={<AddressForm/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Routing
import {Routes,Route} from 'react-router-dom'
import UserForm from '../components/UserForm'
import AddressForm from '../components/AddressForm'
import Home from '../components/Home'

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/userform' element={<UserForm/>} />
        <Route path='/addressform' element={<AddressForm/>}/>
    </Routes>
  )
}

export default Routing
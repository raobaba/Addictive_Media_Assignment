import {Routes,Route} from 'react-router-dom'
import UserForm from '../components/UserForm'
import AddressForm from '../components/AddressForm'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<UserForm/>} />
        <Route path='/address' element={<AddressForm/>}/>
    </Routes>
  )
}

export default Routing
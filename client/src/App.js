import Login from './Pages/Login'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Page1 from './Pages/Page1'
import About from './Pages/About'
import Types from './Pages/Types'
import Details from './Pages/Details'
import Profile from './Pages/Profile'
import Addrecipe from './Pages/Addrecipe'
import Diffcuisine from './Pages/Diffcuisine'
import Logout from './Pages/Logout'
import Viewrecipe from './Pages/Viewrecipe'
import Signup from './Pages/Signup'
import Contact from './Pages/Contact'
import Cuisinedetails from './Pages/Cuisinedetails'
const App = ()=> {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/types/:type' element={<Types/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addrecipe' element={<Addrecipe/>}/>
        <Route path='/diffcuisine/:cuisine' element={<Diffcuisine/>}/>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='viewrecipe' element={<Viewrecipe/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        {/* <Route path='/cuisinedetails/:cuisineid' element={<Cuisinedetails/>}></Route> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

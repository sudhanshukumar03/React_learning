import { use, useState } from 'react'
import{useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)//true cause useEffect will run after the first render and we want to show the loading screen before the first render is complete,so we set loading to true initially and then we set it to false after the first render is complete
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))//finally is used to set loading to false after the first render is complete,so that we can show the main content of the app after the first render is complete
  },[])
return !loading? (
     <div> </div>
):null

}

export default App

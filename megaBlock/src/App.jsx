import { useState, useEffect } from "react";
import{useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Header, Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true)//true cause useEffect will run after the first render and we want to show the loading screen before the first render is complete,so we set loading to true initially and then we set it to false after the first render is complete
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))//finally is used to set loading to false after the first render is complete,so that we can show the main content of the app after the first render is complete
  },[])
return !loading ? (
  <div>
   <Header />

    <main className="min-h-screen flex items-center justify-center">
      <h2 className="text-3xl font-bold text-green-500">
        Tailwind is Working 🚀
      </h2>
    </main>

    <Footer />
    </div>
  
) : null;

}

export default App

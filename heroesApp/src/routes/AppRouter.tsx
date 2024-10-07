import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../components/screens/Login/Login"
import { useAppSelector } from "../hooks/redux"
import ProtectedRoute from "./ProtectedRoute"

const AppRouter = () => {

    const isLogged = useAppSelector(state=>state.auth.isLogged)

  return (
    <>
    <Routes>
        {isLogged ? (
            <Route path= "/*" element={<ProtectedRoute/>}/>
        ):( 
            <Route path= "/*" element={<Navigate to={"/login"}/>}/>
        )}
        <Route path= "/login" element={<Login/>}/>

    </Routes>
    
    </>
  )
}

export default AppRouter

// npm modules 
import { useState,useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router";


// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MemesList from './pages/Memes/MemesList'
import NewMeme from './pages/NewMeme/NewMeme'
import EditMeme from './pages/EditMeme/EditMeme'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as memeService from './services/memeService'
import * as profileService from './services/profileService'
// stylesheets
import './App.css'

// types
import { Profile, User, Meme} from './types/models'
import { MemeFormData } from './types/forms'


function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())

  const [profiles, setProfiles] = useState<Profile[]>([])

  const [memes, setMemes] = useState<Meme[]>([])



  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])


const fetchMemes = async (): Promise<void> => {
      try {
        const memeData: Meme[] = await memeService.index()
        setMemes(memeData) 
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchMemes()
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddMeme = async (data: any): Promise<void> => {
    const newMeme: Meme = await memeService.createMeme(data)
    setMemes([newMeme, ...memes])
    navigate('/memes')
  }

  const handleUpdateMeme = async (updatedMeme: Meme): 
  Promise<void> => {
    try {
      const response = await memeService.updateMeme(updatedMeme);
      setMemes(memes.map((m: Meme) => (m.id === response.id ? response : m)));
      navigate('/memes');
    } catch (error) {
      console.error('Failed to update meme:', error);
    }
  };
  
  const handleDeleteMeme = async (id: number): Promise<void> => {
    try {
      await memeService.deleteMeme(id)
      setMemes(memes.filter(meme => meme.id !== id))
      navigate('/memes')
    } catch (error){
      console.log(error)
    }
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/memes" element={<MemesList memes={memes} handleDeleteMeme={handleDeleteMeme} user={user}/>} />
        <Route path='/memes/new' element={
          <NewMeme handleAddMeme={handleAddMeme} />
        } />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route path="/memes/:id/edit" 
        element={<ProtectedRoute user={user}>
          <EditMeme user={user} handleUpdateMeme={handleUpdateMeme} /></ProtectedRoute>} />
          
          <Route path="/memes"
          element={
            <ProtectedRoute user={user}>
              element={<MemesList user={user} memes={memes} handleDeleteMeme={handleDeleteMeme} />}
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}

export default App

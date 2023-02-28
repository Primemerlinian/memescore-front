// services
import * as tokenService from './tokenService'

// types
import { Meme } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/memes`

async function index(): Promise<Meme[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Meme[]
  } catch (error) {
    throw error
  }
}


async function createMeme(formData: any): Promise<any> {
  try {
    const res: Response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Meme
  } catch (error) {
    throw error
  }
}

async function updateMeme(memeData: Meme): Promise<Meme> {
  try {
    const res = await fetch(`${BASE_URL}/${memeData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memeData)
    })
    return res.json()
  } catch (error) {
    throw error
  }
}


const deleteMeme = async (id: number): Promise<Meme | undefined> => {
  try {
    const res = await fetch (`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export { 
  index,
  createMeme,
  updateMeme,
  deleteMeme,
}
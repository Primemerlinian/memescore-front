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

// const show = async (id: number): Promise<Meme> => { 
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
//     });
//     return res.json() as Meme
//   } catch (error) {
//     console.log(error)
//   }
// }

const create = async (memeData: Meme) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memeData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export { 
  index,
  // show,
  create,
}
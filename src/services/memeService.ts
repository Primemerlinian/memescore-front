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

export { index }
// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'

const Profiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [])

  if(!profiles.length) return <p>Loading...</p>

  return (
    <div className="profiles-container">
      <h1 className='profiles'>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <p key={profile.id}>{profile.name}</p>
      )}
    </div>
  )
}
  
export default Profiles

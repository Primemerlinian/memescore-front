import { Meme } from "../../types/models"

interface Profile {
  id: number
  name: string
}

interface MemeDetailsProps {
  meme: Meme;
  profile: Profile;
}

const MemeDetails = (props: MemeDetailsProps): JSX.Element => {
  const { meme, profile } = props

  return (
    <div className="memedetails">
      {meme.photo && (
        <img src={meme.photo} alt="Meme photo" />
      )}
      <h3>{meme.caption}</h3>
      <p>Posted by {profile.name}</p>
    </div>
  );
}

export default MemeDetails;

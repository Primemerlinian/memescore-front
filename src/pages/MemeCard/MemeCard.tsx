import { Meme } from "../../types/models"
import { Link } from 'react-router-dom';

interface MemeCardProps {
  meme: Meme;
}

const MemeCard = (props: MemeCardProps): JSX.Element => {
  const { meme } = props
  if (!meme) return <p>Loading...</p>
  console.log('memecard',meme);
  
  return (
    <>
        <div className="memecard" key={meme.id}>
          {meme.photo && (
            <img src={meme.photo} alt="Meme photo" />
            )}
            <h4>Caption: {meme.caption}</h4>
            <Link state={{meme}} to={`/memes/${meme.id}/edit`}>Edit Meme</Link>
        </div>
    </>
  );
}

export default MemeCard;

import { Meme } from "../../types/models"
import { Link } from 'react-router-dom';

interface MemeCardProps {
  memes: Meme[];
}

const MemeCard = (props: MemeCardProps): JSX.Element => {
  const { memes } = props
  if (!memes.length) return <p>Loading...</p>
  return (
    <>
      {memes.map((meme) =>
        <div className="memecard" key={meme.id}>
          {meme.photo && (
            <img src={meme.photo} alt="Meme photo" />
            )}
            <h4>Caption: {meme.caption}</h4>
            <Link to={`/memes/${meme.id}/edit`}>Edit Meme</Link>
        </div>
      )}
    </>
  );
}

export default MemeCard;

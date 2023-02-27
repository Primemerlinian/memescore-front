import { Meme } from "../../types/models"

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
            
            <h4>{meme.caption}</h4>
        </div>
      )}
    </>
  );
}

export default MemeCard;

import { Meme, User } from "../../types/models";
import { Link } from "react-router-dom";

interface MemeCardProps {
  meme: Meme;
  user: User | null;
  profileId: number;
  handleDeleteMeme: (id: number) => void;
}

const MemeCard = (props: MemeCardProps): JSX.Element => {
  const { meme, user, handleDeleteMeme } = props;

  if (!meme) return <p>Loading...</p>;

  return (
    <>
      <div className="memecard" key={meme.id}>
      {meme.photo && <img className="meme-photo" src={meme.photo} alt="Meme photo" />}
        <div>
          <h4>{meme.caption}</h4>
          {meme.profileId === user?.id && (
            <>
              <Link className="edit" state={{ meme }} to={`/memes/${meme.id}/edit`}>
                Edit Meme
              </Link>
              <button className="delete"onClick={() => handleDeleteMeme(meme.id)}>Delete</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MemeCard;

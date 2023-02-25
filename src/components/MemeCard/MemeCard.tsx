import { Meme } from "../../types/models"


interface MemeCardProps {
  memes: Meme[];
}

const MemeCard = (props: MemeCardProps): JSX.Element => {
  const { memes } = props
  if(!memes.length) return <p>Loading...</p>
  return (
    <>
    {memes.map((meme)=> 
    <>
    {console.log('memeCard', meme.caption)}
    <h1>Photo: {meme.photo}</h1>
    <h1>Caption: {meme.caption}</h1>
    </>
    )}
    </>
  );
}

export default MemeCard;
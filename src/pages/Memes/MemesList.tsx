import { Meme, User } from "../../types/models"
import MemeCard from "../MemeCard/MemeCard";


interface MemeProps {
  memes: Meme[];
  user: User | null;
  handleDeleteMeme: (id: number) => void
}

const MemesList = (props: MemeProps) => {
  const { memes, user, handleDeleteMeme } = props
  console.log('memeslistprops', props);
  
  
return (
  <>
  <section>
  {memes.map((meme: Meme) =>
        <MemeCard key={meme.id} meme={meme}  user={user} handleDeleteMeme={handleDeleteMeme}/>
      )}
  </section>

  </>
)
}
export default MemesList;
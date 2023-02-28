import { Meme } from "../../types/models"
import MemeCard from "../MemeCard/MemeCard";

interface MemeProps {
  memes: Meme[];
}

const MemesList = (props: MemeProps) => {
  const { memes } = props
  
return (
  <>
  <section>
  {memes.map((meme: Meme) =>
        <MemeCard key={meme.id} meme={meme}/>
      )}
  </section>

  </>
)
}
export default MemesList;
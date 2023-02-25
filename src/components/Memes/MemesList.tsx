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
    <h1> THIS IS A FEED OF ALL MEMES </h1>
    <MemeCard memes={memes}/>
  </section>

  </>
)
}
export default MemesList;
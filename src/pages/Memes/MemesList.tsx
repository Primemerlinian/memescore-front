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
    <h1> Your Meme Feed: </h1>
    <MemeCard memes={memes}/>
  </section>

  </>
)
}
export default MemesList;
import { Meme } from "../../types/models"

interface MemeProps {
  memes: Meme[];
}

const MemesList = (props: MemeProps) => {
  const { memes } = props
  console.log('memesList props', props)
  console.log('memes', memes);
  


return (
  <>
  <main>
    <h1> THIS IS A FEED OF ALL MEMES </h1>

  </main>
  </>
)
}
export default MemesList;
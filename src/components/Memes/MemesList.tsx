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
  <section>
    <h1> THIS IS A TEST MESSAGE </h1>

  </section>
  </>
)
}
export default MemesList;
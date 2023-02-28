import { useState } from "react"
import { useLocation } from "react-router";
import { MemeFormData } from "../../types/forms";

interface UpdateMemeFormProps {
  handleUpdateMeme: (formData: { photo: string; caption: string }) => Promise<void>
}

const EditMeme = (props: UpdateMemeProps): JSX.Element => {
  const location = useLocation();
  const { meme } = location.state || {};
  const { handleUpdateMeme } = props;
  const [formData, setFormData] = useState<MemeFormData>({
    photo: meme?.photo ?? '',
    caption: meme?.caption ?? '',
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }


  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    const updatedMeme = { ...meme, ...formData }
    await handleUpdateMeme(updatedMeme)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Photo: 
        <input 
          type="text"
          value={formData.photo}
          onChange={handleChange}
          name="photo"
        />
      </label>
      <label>Caption: 
        <input 
          type="text"
          value={formData.caption}
          onChange={handleChange}
          name="caption"
          />
      </label>

      <button type="submit">Update Meme</button>
    </form>
  )
}

export default EditMeme
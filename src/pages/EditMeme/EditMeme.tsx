import { useState } from "react"
import { useLocation } from "react-router-dom";
import { MemeFormData } from "../../types/forms";

interface UpdateMemeFormProps {
  handleUpdateMeme: (formData: MemeFormData) => void


}

const EditMeme = (props: UpdateMemeFormProps): JSX.Element => {
  const location = useLocation();
  const meme  = location.state.meme;
  const { handleUpdateMeme } = props;
  const [formData, setFormData] = useState<MemeFormData>({
    id: meme.id,
    photo: meme?.photo,
    caption: meme?.caption,
  });
  console.log('edit meme',meme);
  

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    handleUpdateMeme(formData)
  }



  return (
    <div>
      <h1>Edit Meme</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Photo:
          <input type="text" name="photo" value={formData.photo} onChange={handleChange} />
        </label>
        <label>
          Caption:
          <input type="text" name="caption" value={formData.caption} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}


export default EditMeme
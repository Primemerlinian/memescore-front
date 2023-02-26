import { useState } from "react";
import { MemeFormData } from "../../types/forms";

interface NewMemeProps {
  handleAddMeme: (meme: MemeFormData) => void
}

interface MemeFormData {
  photo: string;
  caption: string;
}

const NewMeme: React.FC<NewMemeProps> = (props) => {
  const [form, setForm] = useState<MemeFormData>({
    photo: '',
    caption: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleAddMeme(form)
    setForm({
      photo: '',
      caption: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input
          type="text"
          value={form.photo}
          onChange={handleChange}
          name="photo"
        />
      </label>
      <label>
        Caption:
        <input
          type="text"
          value={form.caption}
          onChange={handleChange}
          name="caption"
        />
      </label>
      <button type="submit">Create Meme</button>
    </form>
  );
};

export default NewMeme;

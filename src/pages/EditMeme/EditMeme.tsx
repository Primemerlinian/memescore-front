import { useState } from "react"
import { useLocation } from "react-router";

// types
import { MemeFormData } from "../../types/forms"

interface EditMemeFormProps {
  handleUpdateMeme: (formData: MemeFormData) => Promise<void>
}

const EditMeme = (props: EditMemeFormProps): JSX.Element => {
  const { state } = useLocation()

  const { handleUpdateMeme } = props

  const [formData, setFormData] = useState<MemeFormData>({
    description: state.description,
    photo: state.photo
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleUpdateMeme(formData)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h3>Update This Meme</h3>
        <label htmlFor="description-input">Caption:</label>
        <input
          type="text"
          id="description-input"
          name="description"
          value={formData.description}
          onChange={handleChange}
          autoComplete='off'
        />
        <label htmlFor="photo-input">Meme URL:</label>
        <input
          type="text"
          id="photo-input"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          autoComplete='off'
        />
        <button type="submit">Update Meme</button>
      </form>
    </main>
  )
}

export default EditMeme


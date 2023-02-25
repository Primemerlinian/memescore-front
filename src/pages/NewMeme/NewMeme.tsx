import React, { useState } from "react";

interface Meme {
  image: string;
  caption: string;
}

const NewMemeForm: React.FC = () => {
  const [meme, setMeme] = useState<Meme>({
    image: "",
    caption: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input
          type="text"
          value={meme.image}
          onChange={(event) =>
            setMeme({ ...meme, image: event.target.value })
          }
        />
      </label>
      <label>
        Caption:
        <input
          type="text"
          value={meme.caption}
          onChange={(event) =>
            setMeme({ ...meme, caption: event.target.value })
          }
        />
      </label>
      <button type="submit">Create Meme</button>
    </form>
  );
};

export default NewMemeForm;

import { useState } from "react";
import { useLocation } from "react-router-dom";

interface MemeForm {
  [key: string]: any;
}

const EditMeme = (props: any) => {
  const { state } = useLocation();
  const [form, setForm] = useState<MemeForm>(state);

  console.log(state);

  const handleChange = ({ target }: any) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleUpdateMeme(form);
  };
  

import React from "react";
import './Input.css'
import { useForm } from "react-hook-form";

const Input = ({ sendMessage }) => {

  const { register, handleSubmit, reset } = useForm()




  return (
    <div className="chatInput">
      <form onSubmit={handleSubmit((data) => sendMessage({data, reset}))}>
      <input 
      {...register('inputChat')}
      placeholder="Escribe algo..."
      autoComplete="none"
      />
      <button>Enviar</button>
      </form>

    </div>
  );
};

export default Input;

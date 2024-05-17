"use client";
import React from "react";
import { useForm } from "react-hook-form";
const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (userdata) => {
    console.log("Puedes registrar?...");
    //logica de permiso de authenticacion

    console.log("Registrando...");

    console.log("No autenticado");
  };
  return (
    <div>
      <h1>Formulario</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="username">Username:</label>
        <input
          defaultValue="user1"
          {...register("username", { required: true })}
        />
        <label htmlFor="email">Correo electrónico:</label>
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="email"
          placeholder="user@mail.com"
          {...register("email", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default page;

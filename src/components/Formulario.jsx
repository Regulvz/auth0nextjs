import React from "react";
import { useForm } from "react-hook-form";
const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((userdata) => {
    console.log("Puedes registrar?...");
    //logica de permiso de authenticacion
    if (res) {
      console.log("Registrando...");
    } else {
      console.log("No autenticado");
    }
  });
  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa tu nombre"
          {...register("email", {
            required: { value: true, message: "Field required" },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu email"
        />
        {...register("email", {
          required: { value: true, message: "Field required" },
        })}
        {errors.email && (
          <span className="text-red-700 block">{errors.email.message}</span>
        )}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

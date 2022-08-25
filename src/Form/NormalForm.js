import React from "react";
import { useForm } from "react-hook-form";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="FirstName"
          autoComplete="off"
        />
        <br />
        {errors.firstName?.type === "required" && "First name is required"}
        <br />
        <input
          type="number"
          {...register("age:", { min: 18, max: 25 })}
          placeholder="age.."
        />
        <br />
        <input
          placeholder="LastName.."
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default NormalForm;

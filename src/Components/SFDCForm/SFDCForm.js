import React from 'react'

import { useForm } from "react-hook-form";

import "./SFDCForm.scss";

import Header from "./Header/Header";
export default function SFDCForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="sfdc-form-page">
        <Header/>
        <h2>Application Form</h2>
         {/*  "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
    </div>
  )
}

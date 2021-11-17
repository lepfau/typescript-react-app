import React from "react";
import { useForm } from "react-hook-form";

type PersonScore = {
    name: string;
    email: string;
    score: number;
  };

const PersonScoreForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PersonScore>();
     
    const onSubmit = (data: PersonScore) => {
        console.log("data", data);
      };

 
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              
              {...register('name', { required: true })}
            />
               {errors.name && (
        <span role="alert">
          This field is required
        </span>
               )}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
        
              {...register('email', { required: true })}
            />
               {errors.email && (
        <span role="alert">
          This field is required
        </span>
               )}
          </div>
          <div className="field">
            <label htmlFor="score">Score</label>
            <input
              type="number"
              id="score"
             
              {...register('score', { required: true })}
            />
               {errors.score && (
        <span role="alert">
          This field is required
        </span>
               )}
          </div>
          <button type="submit">Save</button>
        </form>
      );
}

export default PersonScoreForm
import { SubmitHandler, useForm } from "react-hook-form";

export default function FishForm() {
  //make a form that takes in the following inputs  (name, weitgh length, image)       (use the react hookform library)
  //on submit, make a post request to a server endpoint that creates a new fish
  //if the post request is successful, redirect the user to the fish page
  interface FishData {
    name: string;
    weight: number;
    length: number;
    image: string;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FishData>();
  const onSubmit: SubmitHandler<FishData> = (fishData) => {
    console.log(fishData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <input
        defaultValue="Fish Name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <input
        defaultValue="Weight"
        {...register("weight", { required: true })}
      />
      {errors.weight && <span>This field is required</span>}
      <input
        defaultValue="Lenght"
        {...register("length", { required: true })}
      />
      {errors.length && <span>This field is required</span>}
      <input defaultValue="Image" {...register("image", { required: true })} />
      {errors.image && <span>This field is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
}

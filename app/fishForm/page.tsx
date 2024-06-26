"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createFishCard } from "../fishCardactions";

export interface FishData {
  name: string;
  weight: number;
  length: number;
  image: string;
}

export default function FishForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FishData>();

  const onSubmit = async (fishData: FishData) => {
    const parsedFishData = {
      ...fishData,
      weight: Number(fishData.weight),
      length: Number(fishData.length),
    };
    const newFishCard = await createFishCard(parsedFishData);
    if (!newFishCard) {
      return;
    }
    reset();
    router.push("/");
  };

  return (
    <>
      <h2 className="flex justify-center m-5 font-bold">
        Add your ugly fish to the collection
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4 m-6"
        data-cy="add-form"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm" data-cy="name-error">
              This field is required
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700"
          >
            Weight
          </label>
          <input
            type="number"
            id="weight"
            {...register("weight", { required: true, min: 1 })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.weight && errors.weight.type === "required" && (
            <span className="text-red-500 text-sm" data-cy="weight-error">
              This field is required.
            </span>
          )}
          {errors.weight && errors.weight.type === "min" && (
            <span className="text-red-500 text-sm" data-cy="weight-error">
              Must be greater than 0.
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-700"
          >
            Length
          </label>
          <input
            id="length"
            type="number"
            {...register("length", { required: true, min: 1 })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.length && errors.length.type === "required" && (
            <span className="text-red-500 text-sm" data-cy="length-error">
              This field is required
            </span>
          )}
          {errors.length && errors.length.type === "min" && (
            <span className="text-red-500 text-sm" data-cy="length-error">
              Must be greater than 0
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="image"
            {...register("image", { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.image && (
            <span className="text-red-500 text-sm" data-cy="image-error">
              This field is required
            </span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

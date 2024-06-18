import UglyButton from "@/app/components/UglyButton";
import { findUniqueFish } from "@/app/fishCardactions";
import Image from "next/image";

type FishPageProps = { params: { slug: string } };

export default async function FishPage({ params }: FishPageProps) {
  const fish = await findUniqueFish(params.slug);
  if (!fish) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h3 className="text-2xl font-bold">Fish not found</h3>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center p-4 sm:p-6 bg-gray-100 min-h-screen"
      data-cy="fish-card-page"
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-6 lg:mb-0 lg:mr-6">
        <Image
          src={fish.image}
          alt={fish?.name}
          width={800}
          height={800}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          data-cy="fish-name"
        >
          {fish.name}
        </h2>
        <h3
          className={`text-xl sm:text-2xl md:text-3xl font-bold ${
            fish.ugly ? "text-amber-700" : "text-pink-500"
          } mb-4`}
          data-cy="fish-boolean"
        >
          {fish.ugly ? "Ugliest" : "Kinda cute"}
        </h3>
        <h4
          className="text-base sm:text-lg text-gray-700 mb-1"
          data-cy="fish-weight"
        >
          Weight: {fish.weight} kg
        </h4>
        <h4
          className="text-base sm:text-lg text-gray-700 mb-6"
          data-cy="fish-length"
        >
          Length: {fish.length} dm
        </h4>
        <UglyButton id={fish.id} ugly={fish.ugly} />
      </div>
    </div>
  );
}

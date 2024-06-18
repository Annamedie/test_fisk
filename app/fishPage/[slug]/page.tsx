import UglyButton from "@/app/components/UglyButton";
import { findUniqueFish } from "@/app/fishCardactions";
import Image from "next/image";

type FishPageProps = { params: { slug: string } };

export default async function FishPage({ params }: FishPageProps) {
  const fish = await findUniqueFish(params.slug);
  if (!fish) {
    return (
      <div>
        <h3>Fish not found</h3>
      </div>
    );
  }

  return (
    <div data-cy="fish-card-page">
      <Image src={fish.image} alt={fish?.name} width={500} height={500} />
      <h2 data-cy="fish-name">{fish.name}</h2>
      <h2 data-cy="fish-boolean"> {fish.ugly ? "Ugliest" : "Kinda cute"} </h2>
      <h4 data-cy="fish-weight">Weight: {fish.weight} kg</h4>
      <h4 data-cy="fish-length">Length: {fish.length} dm</h4>
      <UglyButton id={fish.id} ugly={fish.ugly} />
    </div>
  );
}

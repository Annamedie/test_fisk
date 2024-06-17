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
    <div>
      <Image src={fish.image} alt={fish?.name} width={500} height={500} />
      <h1>{fish.name}</h1>
      <p> {fish.ugly ? "Ugliest" : "Kinda cute"}</p>
      <p>Weight: {fish.weight} kg</p>
      <p>Length: {fish.length} dm</p>
      <UglyButton id={fish.id} ugly={fish.ugly} />
    </div>
  );
}

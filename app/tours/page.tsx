import Image from "next/image";
import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchTours(): Promise<Tour[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(url);

  const data: Tour[] = await response.json();
  console.log(data);
  return data;
}

async function ToursPage() {
  const tours = await fetchTours();

  return (
    <div>
      <h1 className="my-4 text-2xl font-semibold">Tours</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {tours.map((tour) => {
          const { id, name, image } = tour;

          return (
            <Link
              key={id}
              href={`/tours/${id}`}
              className="hover:text-blue-300"
            >
              <div className="relative h-48 mb-2 ">
                <Image
                  src={image}
                  alt="tour"
                  fill
                  className="object-cover rounded"
                  sizes="33vw"
                  priority
                />
              </div>
              <h3>{name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default ToursPage;

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
      {tours.map((tour) => {
        return <h3 key={tour.id}>{tour.name}</h3>;
      })}
    </div>
  );
}
export default ToursPage;

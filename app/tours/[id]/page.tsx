import mapsImg from "@/images/pexels-andrew-2859169.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function Tour({ params }: { params: { id: string } }) {
  console.log(mapsImg);

  return (
    <div>
      <h2 className="text-2xl">ID: {params.id}</h2>
      <div className="flex gap-x-4">
        <div>
          {/* Local image */}
          <Image
            src={mapsImg}
            alt="maps"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded-sm"
            priority
          />
          <p>Local image</p>
        </div>
        <div>
          {/* Remote image */}
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded-sm"
            priority
          />
          <p>remote image</p>
        </div>
      </div>
    </div>
  );
}
export default Tour;

import { colleges } from "../../../data/colleges";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return <h1>College Not Found</h1>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p>Location: {college.location}</p>
      <p>Fees: ₹{college.fees}</p>
      <p>Rating: ⭐ {college.rating}</p>
      <p>Placements: {college.placements}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        Courses
      </h2>

      <ul>
        {college.courses.map((course) => (
          <li key={course}>• {course}</li>
        ))}
      </ul>
    </div>
  );
}
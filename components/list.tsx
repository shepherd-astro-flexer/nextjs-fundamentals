import { fetchData } from "@/utils/actions";
import DeleteButton from "./deleteButton";

async function List() {
  const users = await fetchData();

  return (
    <div className="max-w-lg">
      {users.length ? (
        users.map((user) => {
          const { firstName, lastName, id } = user;

          return (
            <div key={id} className="flex justify-between items-center mb-2">
              <p>
                {firstName} {lastName}
              </p>
              <DeleteButton id={id} />
            </div>
          );
        })
      ) : (
        <p className="text-2xl">No users found...</p>
      )}
    </div>
  );
}
export default List;

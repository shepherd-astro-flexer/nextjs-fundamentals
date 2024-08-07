import { deleteUserAction, fetchData } from "@/utils/actions";

async function List() {
  const users = await fetchData();

  return (
    <form action={deleteUserAction} className="max-w-lg">
      {users.map((user) => {
        const { firstName, lastName, id } = user;

        return (
          <div key={id} className="flex justify-between mb-2">
            <p>
              {firstName} {lastName}
            </p>
            <input type="hidden" name="id" value={id} />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-300 p-2 rounded"
            >
              delete
            </button>
          </div>
        );
      })}
    </form>
  );
}
export default List;

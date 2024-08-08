import { deleteUserAction } from "@/utils/actions";
function DeleteButton({ id }: { id: string }) {
  const deleteUserWithId = deleteUserAction.bind(null, id);

  return (
    <form action={deleteUserWithId}>
      <input type="hidden" name="name" value="astro" />
      <button type="submit" className="bg-red-500 p-2 rounded text-white">
        delete
      </button>
    </form>
  );
}
export default DeleteButton;

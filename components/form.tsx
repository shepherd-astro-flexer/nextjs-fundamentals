"use client";

import { createUserAction } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
}

function Form() {
  const [message, formAction] = useFormState(createUserAction, null);

  return (
    <form action={formAction} className={`${formStyle} mb-2`}>
      {message && <p>{message}</p>}
      <input
        type="text"
        className={inputStyle}
        defaultValue="astro"
        required
        name="firstName"
      />
      <input
        type="text"
        className={inputStyle}
        defaultValue="flexer"
        required
        name="lastName"
      />
      <SubmitButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
export default Form;

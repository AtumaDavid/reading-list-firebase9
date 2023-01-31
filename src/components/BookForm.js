import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

//firebase imports
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newBook);
    const ref = collection(db, "books");

    await addDoc(ref, {
      title: newBook,
      uid: user.uid,
    });

    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}

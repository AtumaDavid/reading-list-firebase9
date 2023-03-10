import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

//firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  //setup query. content visible to only the logged in uid user
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    //content visible to only the logged in uid user
    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    //cleanup function
    return () => unsub();
  }, [c, q]);
  return { documents };
};

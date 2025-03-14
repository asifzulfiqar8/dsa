"use client";
import useLocalStorage from "../hooks/useLocalStorage";

const GetLocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "Asif");
  return (
    <div>
      <p>Stored value: {name}</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default GetLocalStorage;

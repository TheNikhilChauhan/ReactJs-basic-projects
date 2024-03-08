import { useState } from "react";

function Friends() {
  const [friends, setFriends] = useState([
    "Joey",
    "Ross",
    "Chandler",
    "Monica",
  ]);
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const addOne = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name.trim !== "") {
      setFriends([...friends, name]);
      setName("");
      setShowForm(false);
    }
  };
  const removeOne = (index) => {
    setFriends(friends.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>Friends List</h2>
      {friends.map((f, index) => (
        <li key={index}>
          {f} <button onClick={() => removeOne(index)}>Remove</button>
        </li>
      ))}

      {!showForm && <button onClick={addOne}>Add One</button>}

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <h3>Enter a name: </h3>
          <input type="text" id="name" value={name} onChange={handleInput} />

          <button type="submit">Add</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}

      {/* <button onClick={updateOne}>Update One</button> */}
    </>
  );
}
export default Friends;

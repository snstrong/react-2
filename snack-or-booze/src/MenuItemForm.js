import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function MenuItemForm({ addMenuItem }) {
  const history = useHistory();
  const INITIAL_STATE = {
    type: "snacks",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addMenuItem({ ...formData });
    history.push(`/${formData.type}`);
  };

  return (
    <div
      style={{
        width: "40%",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "2rem",
        border: "1px solid white",
      }}
    >
      <h2>New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          required
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="type">Menu:</label>
        <select
          required
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="snacks">Snacks</option>
          <option value="drinks">Drinks</option>
        </select>
        <br />
        <label htmlFor="description">Description: </label>
        <input
          required
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="recipe">Recipe: </label>
        <input
          required
          id="recipe"
          type="text"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="serve">How to Serve: </label>
        <input
          required
          id="serve"
          type="text"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MenuItemForm;

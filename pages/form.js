import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Document successfully written!");
        const { id } = await response.json();
        console.log("Document ID: ", id);
        router.push("/"); // Navigate to landing page or a success page
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
        margin: "auto",
      }}
    >
      {/* Form fields */}
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        style={{
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <label htmlFor="apellido">Apellido</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        required
        style={{
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Guardar
      </button>
    </form>
  );
}

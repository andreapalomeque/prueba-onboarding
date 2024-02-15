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
        router.push("/");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 bg-white shadow-md rounded-lg w-full max-w-sm"
      >
        {/* Form fields */}
        <label htmlFor="nombre" className="font-semibold text-black">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded text-black"
        />
        <label htmlFor="apellido" className="font-semibold text-black">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded text-black"
        />
        <label htmlFor="email" className="font-semibold text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded text-black"
        />
        <button
          type="submit"
          className="mt-6 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { useBooks } from "../../context/BooksContext";
import s from "./styles.module.scss";
import bookFormIcon from "../../assets/images/book-form.png";

export default function QueroDoar() {
  const { addBook } = useBooks();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.category &&
      formData.author &&
      formData.imageUrl
    ) {
      addBook(formData);
      setFormData({ title: "", category: "", author: "", imageUrl: "" });
      alert("Livro doado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <section className={s.container}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>

      <section className={s.container__card}>
        <div>
          <img src={bookFormIcon} alt="book" />
          <p>Informações do Livro</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Categoria"
          />

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Autor"
          />

          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Link da Imagem"
          />

          <button type="submit">Doar</button>
        </form>
      </section>
    </section>
  );
}

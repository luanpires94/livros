import { useBooks } from "../../context/BooksContext";
import s from "./styles.module.scss";

export default function LivrosDoados() {
  const { books } = useBooks();

  return (
    <section className={s.container}>
      <h1>Livros Doados</h1>
      {books.length === 0 ? (
        <p>Nenhum livro doado ainda.</p>
      ) : (
        <div className={s.booksList}>
          {books.map((book, index) => (
            <div key={index} className={s.bookCard}>
              <img src={book.imageUrl} alt={book.title} />
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

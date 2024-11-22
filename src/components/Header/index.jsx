import LogoImg from "../../assets/images/book-logo.png";
import s from "./styles.module.scss";
import searchImg from "../../assets/images/search.png";

export default function Header() {
  return (
    <header>
      <section className={s.container}>
        <div>
          <img src={LogoImg} alt="book" />
          <p className={s.container__paragraph}>Livros Vai na Web</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Livros Doados</a>
            </li>
            <li>
              <a href="#">Quero Doar</a>
            </li>
          </ul>
        </nav>
        <div className={s.container__search}>
          <input type="search" placeholder="O que você procura?" />
          <img src={searchImg} alt="seach" />
        </div>
      </section>
    </header>
  );
}

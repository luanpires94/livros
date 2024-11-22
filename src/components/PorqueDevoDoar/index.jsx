import s from "./styles.module.scss";
import communityIcon from "../../assets/images/1community.png";
import readingIcon from "../../assets/images/2reading.png";
import transformIcon from "../../assets/images/3transform.png";
import balanceIcon from "../../assets/images/4balance.png";

import PropTypes from "prop-types";

function Card({ imageSrc, text }) {
  return (
    <div className={s.card}>
      <img src={imageSrc} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default function PorqueDevoDoar() {
  return (
    <section className={s.container}>
      <div>
        <h2>Por que devo doar?</h2>
      </div>
      <div className={s.cards}>
        <Card
          imageSrc={communityIcon}
          text="Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."
        />
        <Card
          imageSrc={readingIcon}
          text="Estimula o hábito da leitura e o aprendizado contínuo."
        />
        <Card
          imageSrc={transformIcon}
          text="Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."
        />
        <Card
          imageSrc={balanceIcon}
          text="Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."
        />
      </div>
    </section>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

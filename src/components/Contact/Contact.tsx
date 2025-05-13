import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { oneContact } from "../../App";

interface Props {
  contact: oneContact;
  onDelete: (numberId: string) => void;
}

const Contact:React.FC<Props> =({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={css.wrap}>
      <div>
        <div className={css.textPlusIcon}>
          <IoMdPerson />
          <p>{name}</p>
        </div>
        <div className={css.textPlusIcon}>
          <FaPhoneAlt className={css.noMargin} />
          <p className={css.noMargin}>{number}</p>
        </div>
      </div>

      <button className={css.button} type="button" onClick={() => id && onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
import { oneContact } from "../../App";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

interface Props {
  contArr: oneContact[];
  onDelete: (numberId: string) => void;
}

const ContactList:React.FC<Props> = ({ contArr, onDelete }) => {
  return (
    <ul>
      {contArr.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList
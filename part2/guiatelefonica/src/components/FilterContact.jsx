import { filterContact } from "../helpers/config";

/**
 * 
 * @param {*} props State properties of the contacts
 * @returns Rendered contact
 */
export const FilterContact = (props) => {
  const result = filterContact(props.persons, props.findname);
  return (
    <div>
      <h2>{props.title}</h2>
      <input
        value={props.findname}
        required
        onChange={props.onChange}
        placeholder="Contact"
      />

      <ol>
        {props.findname
          ? result.map((contact, index) => (
              <li key={index}>
                {contact.name}
                {"  :"}
                <span>{contact.phone}</span>
              </li>
            ))
          : ''}
      </ol>
    </div>
  );
};
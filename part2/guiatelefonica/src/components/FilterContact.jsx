
import { filterContact } from "../helpers/config";
/**
 *
 * @param {*} props State properties of the contacts
 * @returns Rendered contact
 */
export const FilterContact = ({findname, filterPerson }) => {
  // const result = filterContact(persons, findname);
  return (
    <div>
      <h2>{"Filter shown with"}</h2>
      <input
        value={findname}
        required
        onChange={filterPerson}
        placeholder="Contact"
      />
        {/* {findname
          ? result.map((contact, index) => (
              <li key={index}>
                {contact.name}
                {"  :"}
                <span>{contact.phone}</span>
              </li>
            ))
          : ""} */}
    </div>
  );
};
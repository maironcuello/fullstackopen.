import { getAllContact, deleteContact } from '../helpers/phone';


export const ShowContact = (props) => {
/**
 * 
 * @param {*} id to delete
 * @param {*} name  to delete
 */
const render = (id, name) => {
  deleteContact(id, name)
  getAllContact(props.state);
}

return (
    <div>
      <h2>{props.title}</h2>
      <ol>
        {props.persons.map((person, index) => 
                <li key={index}>{person.name}{"  : "}
                    <span>
                        {person.phone}
                        <button onClick={()=> render(person.id, person.name)}>Delete</button>
                    </span>
                </li>
        )}
      </ol>
    </div>
  );
};
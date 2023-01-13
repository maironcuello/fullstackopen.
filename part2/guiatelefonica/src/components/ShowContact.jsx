export const ShowContact = ({
  parametersShowContact: { personsFilter, deletePerson },
}) => {
  
  /**
   * @param {id} To use parameter for find contact and delete to server
   * @param {person.name}  Render on screen
   * @param {person.number}  Render on screen
  */
 
 return (
   <div>
      <h2>{"Numbers"}</h2>
      <ol>
        {personsFilter.map((person, index) => (
          <li key={index}>
            {person.name}
            {"  : "}
            <span>
              {person.number}
              <button onClick={() => deletePerson(person.id, person.name)}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
export const ShowContact = ({
  parametersShowContact: { personsFilter, setPersonsFilter, deleteContact, getAllContact, setPersons },
}) => {
  
  /**
   * @param {id} To use parameter for find contact and delete to server
   * @param {person.name}  Render on screen
   * @param {person.phone}  Render on screen
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
              {person.phone}
              <button
                onClick={() =>
                  deleteContact(person.id, person.name)
                  .then(() => {
                    getAllContact(setPersons)                 
                    setPersonsFilter(personsFilter.filter((ele) => ele.id !== person.id));
                  })
                  .catch(err => console.error('Error, contact not exists or was deleted '))
                }
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

/**
 * 
 * @param {newName, phoneNumber, addNewContactOrUpdate, setNewName, setPhoneNumber} 
 * @returns Render input to filter person name
 */
export const AddnewContact = ({
  parametersAddnewContact: { newName, phoneNumber, addNewContactOrUpdate, setNewName, setPhoneNumber }
}) => {
  return (
    <div>
      <h2>{"Phonebook"}</h2>
      <form onSubmit={addNewContactOrUpdate}>
        <div>
          <input
            value={newName}
            required
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Write a name"
          />
          <br />
          <input
            value={phoneNumber}
            required
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Write a phone number"
          />
        </div>
        <div>
          <button type="submit">add or Update</button>
        </div>
      </form>
    </div>
  );
};
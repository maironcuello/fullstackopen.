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
          <label>Name:</label>
          <br />
          <input
            value={newName}
            required
            onChange={(event) => setNewName(event.target.value)}
            placeholder="Write a name"
          />
          <br />
          <br />
          <label>Number:</label>
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
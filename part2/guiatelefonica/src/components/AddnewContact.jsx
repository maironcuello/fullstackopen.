import { Input } from './Input';

/**
 * 
 * @param {newName, phoneNumber, addNewContactOrUpdate, setNewName, setPhoneNumber} 
 * @returns Render input to filter person name
 */
export const AddnewContact = ({
  parametersAddnewContact: { 
    newName, 
    phoneNumber, 
    addNewContactOrUpdate, 
    setNewName, 
    setPhoneNumber }
}) => {
  return (
    <div>
      <h2>{"Phonebook"}</h2>
      <form onSubmit={addNewContactOrUpdate}>
        <div>
          <Input 
            newName={newName} 
            setState={setNewName} 
            placeholder='Write a name' />
          <br />
          <Input 
            newName={phoneNumber} 
            setState={setPhoneNumber} 
            placeholder='Write a phone number'/>
        </div>
        <div>
          <button type="submit">CREATE</button>
        </div>
      </form>
    </div>
  );
};
/**
 * 
 * @param {*} props Capture data from App Component 
 * @returns  Render component to add information of the contact
 */
export const AddnewContact = (props) => {

  return (
    <div>
        <h2>{props.title}</h2>
        <form onSubmit={props.setDataBase}>
            <div>
                <label>Name:</label><br/>
                <input value={props.newname} required onChange={props.onChangeName} placeholder='Write a name'/><br/><br/>
                <label>Number:</label><br/>
                <input value={props.phonenumber} required onChange={props.onChangePhone}placeholder='Write a phone number'/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>
  )
}
/**
 * 
 * @param {findname, filterPerson}  
 * @returns Render input to filter person name
 */
export const FilterContact = ({ findname, filterPerson }) => {
  return (
    <div>
      <h2>{"Filter shown with"}</h2>
      <input value={findname} required onChange={filterPerson} placeholder="Contact" />
    </div>
  );
};
import "../index.css";

export const Notification = ({ messege }) => {
  if (messege === null) return null;

  return (
    <div className={`styleMessage message-${messege.type}`} >
      {messege.nota}
    </div>
  );
};
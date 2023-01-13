import "../index.css";

export const Notification = ({ message }) => {
  if (message === null) return null;

  return (
    <div className={`styleMessage message-${message.type}`} >
      {message.nota}
    </div>
  );
};
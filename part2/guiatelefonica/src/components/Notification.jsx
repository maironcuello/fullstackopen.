import "../index.css";

export const Notification = ({ messege }) => {
  if (messege === null) return null;

  const styleMessage = {
    color: 'green',
    background: 'lightgrey',
    fontsize: 20,
    bordercolor: 'green',
    borderstyle: 'solid',
    borderradius: 5,
    padding: 10,
    marginbottom: 10
  }

  return <div style={styleMessage}>{messege}</div>;
};

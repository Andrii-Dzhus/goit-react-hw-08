const Contact = ({ name, number, onDelete }) => {
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;

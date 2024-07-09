const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact us...!</h1>
      <form>
        <input
          type="text"
          className="border border-black shadow-lg p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black shadow-lg p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 rounded-lg bg-green-100 shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

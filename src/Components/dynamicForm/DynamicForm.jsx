const formFields = {
  name: {
    type: "text",
    label: "What is your name",
    placeholder: "Jhon Doe",
  },
  email: {
    type: "email",
    label: "What is your email",
    placeholder: "abc@gmail.com",
  },
  phone: {
    type: "tel",
    label: "What is your phone",
    placeholder: "+8801...",
  },
};

const mapObjToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...formFields[key] }));
};

const DynamicForm = () => {
  const data = mapObjToArray(formFields);

  return (
    <>
      <h2>Dynamic Form</h2>
      <form>
        {data.map((item, key) => {
          return (
            <div key={key}>
              <label htmlFor="">{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default DynamicForm;

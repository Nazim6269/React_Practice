import { useState } from "react";

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

const transformData = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };

    return acc;
  }, {});
};

const mapObjToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

//components starts from here
const DynamicForm = () => {
  const [formState, setFormState] = useState(transformData(formFields));
  const data = mapObjToArray(formState);

  const handleChange = (e) => {
    setFormState({
      ...formState,

      [e.target.name]: {
        ...formState[e.target.name],
        value: e.target.value,
      },
    });
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {data.map((item, key) => {
          return (
            <div key={key}>
              <label>{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={item.value}
                onChange={handleChange}
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

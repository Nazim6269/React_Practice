import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import DynamicForm from "./Components/dynamicForm/DynamicForm";
import { products } from "./data";

library.add(fab);

const App = () => {
  return (
    <div>
      <h2 className="">APP component</h2>

      {/* {socialIcons.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: item.color,
            marginBottom: "1rem",
            padding: "12px 10px",
          }}
        >
          <FontAwesomeIcon icon={["fab", item.icon]} />
          <span>{item.tooltip}</span>
        </div>
      ))} */}
      <h1>Bread Crumb</h1>
      {products.breadCrumbs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <a href={item.link}>{item.text}</a>
            {index < products.breadCrumbs.length - 1 && <span>{" / "}</span>}
          </React.Fragment>
        );
      })}

      <DynamicForm />
    </div>
  );
};

export default App;

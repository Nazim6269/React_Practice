import React from "react";
import History from "./History";

const HistorySection = ({ histories }) => {
  return (
    <div>
      <h2>History</h2>
      {histories.length === 0 ? (
        <p>There is no history</p>
      ) : (
        histories.map((item) => <History key={item.id} />)
      )}
    </div>
  );
};

export default HistorySection;

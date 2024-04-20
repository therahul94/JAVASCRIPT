import React, { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);
  const [sample, setsample] = useState(0);
  // Your code starts here
  let totalValue = 0;
  totalValue = useMemo(() => {
    console.log("re-render");
    // let total=0;
    // items.forEach((obj)=>{
    //     total+=obj.value;
    // });
    // // setsample(total);
    // return total;

    let total = 0;
    total = items.reduce((acc, curr) => acc + curr.value, total);
    return total;
  }, [items]);
  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
      <button onClick={() => setsample(sample + 2)}>Counter({sample})</button>
    </div>
  );
};

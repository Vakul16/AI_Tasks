import React, { useState } from "react";
// import { treeData } from "./RecursiveData";

const RecursiveFilter = ({ data = [] }) => {
  // const [childVisible, setChildVisiblity] = useState(true);
  const hasChild = (data) => (data.children ? true : false);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((tree) => (
          <li>
            {tree.name}
            {hasChild(tree) && (
              <div>
                <ul>
                  <RecursiveFilter data={tree.children} />
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecursiveFilter;

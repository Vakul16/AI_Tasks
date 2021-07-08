import React, { useState } from "react";
// import { treeData } from "./RecursiveData";

const RecursiveFilter = ({ data = [] }) => {
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(true);
  const hasChild = node.children ? true : false;
  return (
    <li>
      {node.name} 
      {hasChild && childVisible && (
        <div>
          <ul>
            <RecursiveFilter data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default RecursiveFilter;

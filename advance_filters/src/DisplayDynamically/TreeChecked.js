import React, { useState } from "react";
import { Tree } from "react-rainbow-components";

const data = [
  {
    label: "User1",
    isChecked: false,
    children: [
      { label: "Property1", isChecked: false },
      { label: "Property2", isChecked: false },
      { label: "Property3", isChecked: false },
      { label: "Property4", isChecked: false },
      { label: "Property5", isChecked: false },
      { label: "Property6", isChecked: false },
    ],
  },
  { label: "User2", isChecked: false },
  { label: "User3", isChecked: false },
  {
    label: "Portfoil2",
    isExpanded: true,
    isChecked: false,
    children: [
      { label: "Tree Item", isChecked: false },
      { label: "Tree Item", isChecked: false },
      {
        label: "Tree Branch",

        isExpanded: true,
        isChecked: false,
        children: [
          { label: "Tree Item", isChecked: false },
          { label: "Tree Item", isChecked: false },
          {
            label: "Tree Branch",

            isExpanded: true,
            isChecked: false,
            children: [
              { label: "Tree Item", isChecked: false },
              { label: "Tree Item", isChecked: false },
              { label: "Tree Item", isChecked: false },
            ],
          },
          { label: "Tree Item", isChecked: false },
        ],
      },
      { label: "Tree Item", isChecked: false },
    ],
  },
  {
    label: "Level3",
    isLoading: false,
    isChecked: false,
    children: [
      { label: "Tree Item", isChecked: false },
      { label: "Tree Item", isChecked: false },
    ],
  },
];

// const initialState = {
//   data,
//   selectedNode: "",
// };

const TreeChecked2 = ({ initialState }) => {
  console.log(initialState);
  const initialstate = {
    data: initialState,
    selectedNode: "",
  };
  const [state, setState] = useState(initialstate);
  const openNode = ({ nodePath }) => {
    const child = Tree.getNode(state.data, nodePath);
    child.isExpanded = !child.isExpanded;
    setState({ data: state.data });
  };

  function getSiblingSelectionState(parent) {
    const siblings = parent.children;
    const maxSiblingsSelection = siblings.length;
    let selected = 0;
    let indeterminate = 0;

    siblings.forEach((sibling) => {
      if (sibling.isChecked === true) {
        selected += 1;
      }
      if (sibling.isChecked === "indeterminate") {
        indeterminate += 1;
      }
    });

    if (selected === 0 && indeterminate === 0) {
      return "none";
    }
    if (selected === maxSiblingsSelection) {
      return "all";
    }
    return "some";
  }

  const stateMap = { all: true, some: "indeterminate", none: false };

  function passChildState(tree, nodePath) {
    const parent = Tree.getNode(tree, nodePath.slice(0, nodePath.length - 1));
    const siblingsState = getSiblingSelectionState(parent);
    parent.isChecked = stateMap[siblingsState];

    if (nodePath.length === 2) {
      return parent;
    }

    return passChildState(tree, nodePath.slice(0, nodePath.length - 1));
  }

  function passParentState(node) {
    const { children } = node;

    children.forEach((child) => {
      child.isChecked = node.isChecked;
      if (child.children) {
        child.children = passParentState(child);
      }
    });

    return children;
  }

  const handleCheck = ({ nodePath }) => {
    const node = Tree.getNode(state.data, nodePath);
    node.isChecked = !node.isChecked;

    if (nodePath.length > 1) {
      passChildState(state.data, nodePath);
    }

    if (node.children) {
      node.children = passParentState(node);
    }
    setState({ data: state.data });
  };

  return (
    <Tree
      data={state.data}
      className="rainbow-m-around_xx-large"
      onNodeCheck={handleCheck}
      onNodeExpand={openNode}
      selectedNode={state.selectedNode}
      onNodeSelect={({ name }) => {
        setState({ selectedNode: name });
      }}
      ariaLabel="tree-icons"
    />
  );
};

export default TreeChecked2;

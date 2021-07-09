const PostData = [
  {
    id: 0,
    name: "Level_1",
    value: "id0",
    type: "Level_1",
    details: [
      {
        label: "User1",
        isChecked: false,
        children: [
          {
            label: "Property1",
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
          { label: "Property2", isChecked: false },
          { label: "Property3", isChecked: false },
          { label: "Property4", isChecked: false },
          { label: "Property5", isChecked: false },
          { label: "Property6", isChecked: false },
        ],
      },
      { label: "User2", isChecked: false },
      { label: "User3", isChecked: false },
    ],
  },
  {
    id: 1,
    name: "Level_2",
    value: "id1",
    type: "Level_2",
    details: [
      {
        label: "Portfolio",
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
    ],
  },
  {
    id: 2,
    name: "Portfolio",
    value: "id2",
    type: "Portfolio",
    details: [
      {
        label: "Level3",
        isLoading: false,
        isChecked: false,
        children: [
          { label: "Tree Item", isChecked: false },
          { label: "Tree Item", isChecked: false },
        ],
      },
    ],
  },
];
export default PostData;

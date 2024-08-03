import { useState } from "react";

type ListItem = {
  label: string;
  value: string | number;
};

const ListItems: ListItem[] = [
  { label: "id", value: "int" },
  { label: "type", value: "text_type" },
  { label: "content", value: "varchar" },
  { label: "visible", value: "true" },
];

export const BlockBuilder = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleSelect = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <div className="flex flex-col p-4 rounded-xl bg-[#2c2c2c]/90 shadow-md mx-4 w-fit h-full min-w-[400px]">
      <span className="text-lg font-bold mb-4 text-[#bdbdbd] uppercase">
        Block Builder
      </span>
      {ListItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between py-2 last:border-none cursor-pointer`}
          onClick={() => handleSelect(index)}
        >
          <div className="flex items-center">
            <span
              className={`w-4 h-4 mr-2 rounded-full border-2 ${
                selectedItemIndex === index
                  ? "bg-purple-500 border-purple-500"
                  : "border-gray-400"
              }`}
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white">{item.label}</span>
            </div>
          </div>
          <span className="text-purple-500 bg-purple-500/20 rounded-md px-1">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

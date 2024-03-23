import React, { useState } from "react";
import { JsonData } from "./Body";
import { useGlobalContent } from "./GlobalContent";

interface sidebarprops {
  selectedItems: Array<JsonData>;
}

const SideBar: React.FC<sidebarprops> = ({ selectedItems }) => {
  const { handleIncrement, handleDecrement } = useGlobalContent();
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleIncrease = () => {
    setItemQuantity(itemQuantity + 1);
    handleIncrement();
  };
  const handleDecrease = () => {
    setItemQuantity(itemQuantity - 1);
    if (itemQuantity <= 0) {
      setItemQuantity(0);
    }
    handleDecrement();
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      {selectedItems.map((item, index) =>
        itemQuantity > 0 ? (
          <div
            key={index}
            className="flex justify-between w-[300px] rounded bg-white border-2 px-3 py-2 items-center border-gray-300"
          >
            <div className="flex gap-3 items-center">
              <div className="overflow-hidden  w-[70px] h-[60px] rounded bg-black">
                <img
                  src={item.foodImage}
                  alt={item.foodName}
                  className="object-cover w-[70px] h-[60px]"
                />
              </div>
              <div>
                <h1 className="font-semibold">{item.foodName}</h1>
                <h3 className="text-red-600">
                  Rs.
                  <span>{item.foodPrice * itemQuantity}</span>
                </h3>
              </div>
            </div>
            <div className="">
              <h1 className="font-semibold">Quantity</h1>
              <div className="flex gap-3">
                <div
                  className="font-bold cursor-pointer"
                  onClick={() => {
                    handleDecrease();
                  }}
                >
                  -
                </div>
                <h1>{itemQuantity}</h1>
                <div
                  className="font-bold cursor-pointer"
                  onClick={() => {
                    handleIncrease();
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SideBar;

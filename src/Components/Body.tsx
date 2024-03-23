import resData from "../utils/utils.json";
import SideBar from "./SideBar";
import { useState } from "react";
import { useGlobalContent } from "./GlobalContent";

export interface JsonData {
  id: number;
  foodName: string;
  foodImage: string;
  foodPrice: number;
  time: string;
  star: number;
  rating: number;
  "discount-Availability": string | null;
  delievery: string;
}

const Body: React.FC = () => {
  const { handleIncrement, handleDecrement, cartClose } = useGlobalContent();
  const [selectedItems, setSelectedItems] = useState<Array<JsonData>>([]);

  const handleCart = (item: JsonData) => {
    setSelectedItems([...selectedItems, item]);
  };

  const menuItems = resData.map((items, index) => {
    return (
      <div
        key={index}
        className="shadow-xl shadow-gray-600 w-fit pb-5 rounded relative overflow-hidden "
      >
        <img
          className="w-[280px] h-[160px] object-cover"
          src={items.foodImage}
        />
        <div className="w-[280px] mt-4 px-3 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#723d46]">{items.foodName}</h3>

            {/* star rating========================== */}
            <div className="flex gap-2 items-center">
              <div className="bg-green-600 w-fit text-white flex gap-2 items-center px-2 py-[2px] rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.75em"
                  height="0.75em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  ></path>
                </svg>
                <p className="text-sm">{items.star}</p>
              </div>
              <span className="text-gray-500">({items.rating}+)</span>
            </div>
          </div>

          {/* ==============time and delievery===== */}
          <div className="flex items-center justify-between">
            {/*======== rupees=========================== */}
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="0.90em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z"
                ></path>
              </svg>

              <p className="font-bold text-[#723d46]">{items.foodPrice}</p>
            </div>

            {/* ==========time============= */}
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4z"
                ></path>
              </svg>
              <small className="text-gray-500">{items.time}</small>
            </div>
          </div>

          {/* free delievry */}
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-[#e31b72ff]"
            >
              <path
                fill="currentColor"
                d="M16 1a1 1 0 0 1 1 1v1h5v6h-2.019l2.746 7.544a4 4 0 1 1-7.6 2.456h-4.253a4.002 4.002 0 0 1-7.8-.226A2 2 0 0 1 2 17V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3h-3V1zM7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m12-.001a2 2 0 1 0 1.88 1.316l-.017-.044A2 2 0 0 0 19 16m-1.147-7H17v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3H4v3.354A4.002 4.002 0 0 1 10.874 17h4.252a4.002 4.002 0 0 1 4.568-2.94zM9 8H4v2h5zm11-3h-3v2h3z"
              ></path>
            </svg>
            <p className="text-[#e31b72ff] text-sm">{items.delievery}</p>
          </div>
        </div>
        {/* ===============================cart====================================== */}
        <div className=" bg-[#723d46] flex text-white px-2 py-1 absolute right-0 bottom-0 cursor-pointer hover:bg-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            onClick={() => {
              handleIncrement(), handleCart(items);
            }}
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22Zm-5-12l-1.4-1.4L12.175 7H8V5h4.175l-1.6-1.6L12 2l4 4ZM1 4V2h3.275l4.25 9h7l3.9-7H21.7l-4.4 7.95q-.275.5-.725.775q-.45.275-1.025.275H8.1L7 15h12v2H7q-1.125 0-1.7-.988q-.575-.987-.05-1.962L6.6 11.6L3 4Z"
            ></path>
          </svg>
        </div>
        {/* ===================================discount================================ */}
        {items["discount-Availability"] && (
          <div className="bg-[#e31b72ff]  text-white absolute left-0 px-3  top-1 rounded">
            <small>Hot seller</small>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="flex">
      {/* //=============================================body======================== */}
      <div
        className={
          cartClose
            ? "grid md:grid-cols-5 grid-cols-1 gap-3 gap-y-10 mb-10 place-items-center pt-16 px-5"
            : "md:grid-cols-4 grid gap-3 gap-y-10 mb-10 place-items-center pt-16 px-5"
        }
      >
        {menuItems}
      </div>
      <div
        className={
          cartClose ? "hidden" : "pt-10 bg-[#723d46] w-[350px] h-screen"
        }
      >
        <h2 className="text-white font-bold text-xl mb-4 ">Cart Items</h2>
        <SideBar selectedItems={selectedItems} />
        <div className="bg-white ml-1 absolute bottom-0 flex px-5 py-3 items-center justify-between w-[335px] rounded-sm">
          <h1 className="font-bold">TOTAL</h1>
          <h1 className="font-bold">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Body;

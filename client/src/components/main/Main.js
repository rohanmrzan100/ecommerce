import React from "react";

const Main = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="min-h-screen w-full">
      <div className="w-11/12 mx-auto h-screen bg-white p-5 mt-5">
        Main Page
        <div className="flex m-10">
          <button
            className="border border-b-2 bg-orange-500 w-[200px] h-[100px] hover:bg-orange-400 active:scale-110"
            onClick={handleClick}
          >
            Add To Cart
          </button>
          <button
            className="border border-b-2 bg-orange-500 w-[200px] h-[100px] hover:bg-orange-400 active:scale-110"
            onClick={handleClick}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

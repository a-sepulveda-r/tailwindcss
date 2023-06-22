import React from "react";

const Grid = () => {
  return (
    <div className="container mx-auto mt-5 text-center my-2">
      <h1 className="py-5">Teoria de Grid</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-400">A</div>
        <div className="bg-red-400">A</div>
        <div className="bg-red-400">A</div>
        <div className="bg-red-400">A</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        <div className="bg-blue-400">A</div>
        <div className="bg-blue-400">A</div>
        <div className="bg-blue-400">A</div>
        <div className="bg-blue-400">A</div>
      </div>
      <div className="grid grid-cols-4 gap-4 my-2">
        <div className="bg-pink-400 col-span-2">B</div>
        <div className="bg-pink-400">A</div>
        <div className="bg-pink-400">A</div>
        <div className="bg-pink-400 col-span-4">C</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-2 sm:grid-rows-2 gap-4">
        <div className="bg-green-400 col-span-1">A</div>
        <div className="bg-green-400 col-span-1">A</div>
        <div className="bg-green-400 sm:col-span-2 sm:row-span-2">A</div>
        <div className="bg-green-400 col-span-1">A</div>
        <div className="bg-green-400 col-span-1">A</div>
      </div>
    </div>
  );
};

export default Grid;

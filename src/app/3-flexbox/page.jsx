import React from "react";

const page = () => {
  return (
    <div className="container mx-auto mt-5 text-center">
      <h1 className="text-3xl py-5 text-cyan-400">Flex con Justify</h1>
      <div className="bg-gray-500 flex justify-between ">
        <div className="bg-orange-500 p-4 m-2">1</div>
        <div className="bg-orange-500 p-4 m-2">2</div>
        <div className="bg-orange-500 p-4 m-2">3</div>
      </div>
      <h1 className="text-3xl py-5 text-cyan-400">
        Flex con Justify y align items
      </h1>
      <div className="bg-gray-500 h-64 flex justify-between items-center ">
        <div className="bg-orange-500 p-4 m-2">1</div>
        <div className="bg-orange-500 p-4 m-2">2</div>
        <div className="bg-orange-500 p-4 m-2">3</div>
      </div>
      <h1 className="text-3xl py-5 text-cyan-400">
        Flex con Justify y align items y self(children)
      </h1>
      <div className="bg-gray-500 h-64 flex flex-wrap items-start ">
        <div className="bg-orange-500 p-4 m-2">1</div>
        <div className="bg-orange-500 p-4 m-2 self-center">2</div>
        <div className="bg-orange-500 p-4 m-2">3</div>
      </div>
      <h1 className="text-3xl py-5 text-cyan-400">
        Flex tamaño children, por defecto los hijos toman el contenido de la
        etiqueta
      </h1>
      <div className="bg-gray-500 h-64 flex flex-wrap items-start ">
        <div className="bg-orange-500 p-4 m-2">1</div>
        <div className="bg-orange-500 p-4 m-2 flex-1">
          Lorem ipsum dolor sit.
        </div>
        <div className="bg-orange-500 p-4 m-2">3</div>
      </div>
    </div>
  );
};

export default page;

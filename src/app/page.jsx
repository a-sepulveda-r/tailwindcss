import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        <button class="bg-blue-500 sm:bg-orange-400 lg:bg-green-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded ">
          Mi botón
        </button>
        <h1>Esto es un H1</h1>
        <h2>Esto es un H2</h2>
        <h3 className="uppercase">Esto es un H3</h3>
        <h4 className="w-48 rounded-lg bg-pink-500 text-white text-center py-10 px-5 mt-10 text-xl">
          Esto es un H4
        </h4>
        <h5>Esto es un H5</h5>
        <h6>Esto es un H6</h6>
        <div className="m-5 p-5 border">
          <p className="text-xl sm:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci
            consectetur est fugit hic quidem soluta temporibus deserunt
            incidunt. Soluta commodi, animi nihil quisquam minima esse sunt nisi
            dolorem blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

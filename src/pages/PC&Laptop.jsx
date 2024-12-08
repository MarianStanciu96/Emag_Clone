import { useContext } from "react";

import { ProdList } from "../App";

const PCLaptop = () => {
  const db = useContext(ProdList);
  return (
    <div>
      {db
        .filter((dbProd) => {
          return dbProd.type === "PC" || dbProd.type === "Laptop";
        })
        .map((dbProd) => {
          return (
            <div key={dbProd.id} className="product-card">
              <img src={dbProd.imageurl} alt="product image" />
              <h2>{dbProd.name}</h2>
              <p className="price">{dbProd.price}</p>
              <p>{dbProd.description}</p>
              <p>{dbProd.type}</p>
              <p>
                <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Adauga in Cos
                </button>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default PCLaptop;

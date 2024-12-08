import { useContext } from "react";
import { ProdList } from "../App";

const Contact = () => {
  const listOfProd = useContext(ProdList);

  return (
    <div>
      {listOfProd.map((prod) => {
        return (
          <div key={prod.id}>
            {prod.name}
            <br />
            <Link to={"/Product/" + prod.id}>Go to color page</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;

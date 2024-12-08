import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProdList } from "../App";

const ContactColor = () => {
  const [product, setProduct] = useState();
  const listOfProp = useContext(ProdList);
  const param = useParams();

  useEffect(() => {
    setProduct(() => listOfProd.find((p) => p.id === Number(param.id)));
  }, []);

  console.log(product);

  return <div>{product ? product.name : "Loading..."}</div>;
};

export default ContactColor;

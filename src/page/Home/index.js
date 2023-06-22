import { useEffect } from "react";
import Banner from "../../components/Banner";
import HomeListProduct from "../../components/HomeListProduct";

import { useDispatch } from "react-redux";
import { actFetchAllProductsAsync } from "../../store/products/action";

function Home() {
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(actFetchAllProductsAsync());
  }, []);
  return (
    <>
      <Banner />
      <HomeListProduct />
    </>
  );
}

export default Home;

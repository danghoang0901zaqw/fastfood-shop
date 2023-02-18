import { useEffect, useState } from "react";
import categoryFoods from "../../assets/fake-data/categoryFoods";
import productData from "../../assets/fake-data/products";
import ProductItem from "./ProductItem";
import { useDebounce } from "../../hooks";

const Products = () => {
  const [category, setCategory] = useState("All");
  const foods = productData.getAllProducts();
  const [products, setProducts] = useState(foods);
  const [loading, setLoading] = useState(false);
  const debounce = useDebounce(category, 500);
  useEffect(() => {
    switch (category) {
      case "All":
        setLoading(true);
        setTimeout(() => {
          setProducts(foods);
          setLoading(false);
        }, 100);
        break;
      case "Hamburger":
        setLoading(true);
        const burgers = foods.filter((x) => x.category === "burger");
        setTimeout(() => {
          setProducts(burgers);
          setLoading(false);
        }, 100);
        break;
      case "Pizza":
        setLoading(true);
        const pizzas = foods.filter((x) => x.category === "pizza");
        setTimeout(() => {
          setProducts(pizzas);
          setLoading(false);
        }, 100);
        break;
      case "Bread":
        setLoading(true);
        const breads = foods.filter((x) => x.category === "bread");
        setTimeout(() => {
          setProducts(breads);
          setLoading(false);
        }, 100);
        break;
      case "Hot Dog":
        setLoading(true);
        const hotdogs = foods.filter((x) => x.category === "hot-dog");
        setTimeout(() => {
          setProducts(hotdogs);
          setLoading(false);
        }, 100);
        break;
      case "Sandwich":
        setLoading(true);
        const sandwiches = foods.filter((x) => x.category === "sandwich");
        setTimeout(() => {
          setProducts(sandwiches);
          setLoading(false);
        }, 100);
        break;
      default:
        throw new Error("Category does not exist");
    }
  }, [debounce]);

  return (
    <div className="py-[50px]">
      <h5 className="text-5xl font-bold text-slate-900 text-center ">
        Popular Foods
      </h5>
      <div className="mt-10 h-16 bg-orange-600 rounded flex items-center justify-center gap-5 py-3 ">
        {categoryFoods.map((item, index) => (
          <button
            onClick={() => setCategory(item.name)}
            key={index}
            className={`flex h-full gap-2 py-2 items-center justify-center min-w-[150px]  ${
              category === item.name
                ? "bg-white px-5 rounded text-orange-600"
                : "text-slate-100"
            }`}
          >
            {item?.img && <img alt="" src={item?.img} className="w-5 h-5" />}
            {item.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 items-center justify-items-center gap-4 mt-10">
        {loading ? (
          <div className="relative top-0 right-[-150%] w-12 translate-x-[-50%] h-12 rounded-full border-[10px] border-bg-[#f3f3f3] border-t-[10px] border-t-orange-600 animate-spin  "></div>
        ) : (
          products.map((item, index) => <ProductItem key={index} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Products;

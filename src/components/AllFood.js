import { useCallback, useEffect, useState } from "react";
import { categories, colors, sizes } from "../assets/fake-data/filter";
import productData from "../assets/fake-data/products";
import ProductItem from "../components/ProductUI/ProductItem";
import { useDebounce } from "../hooks";

const AllFoods = () => {
  const [searchValue, setSearchValue] = useState("");
  const products = productData.getAllProducts();
  const [productList, setProductList] = useState(products);
  const [optionSort, setOptionSort] = useState("default");
  const debounce = useDebounce(searchValue, 300);
  useEffect(() => {
    const newProducts = products.filter((x) =>
      x.title.toLowerCase().includes(debounce.toLowerCase())
    );
    if (!debounce.trim()) {
      setProductList(productList);
    } else {
      setProductList(newProducts);
    }
  }, [debounce]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith(" ")) {
      setSearchValue(value);
    }
  };
  useEffect(() => {
    switch (optionSort) {
      case "default":
        setProductList(products);
        break;
      case "nameAsc":
        const newProductNameAsc = productList
          .filter((x) => x.title)
          .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          );
        setProductList(newProductNameAsc);
        break;
      case "nameDesc":
        const newProductNameDesc = productList
          .filter((x) => x.title)
          .sort((a, b) =>
            b.title.toLowerCase().localeCompare(a.title.toLowerCase())
          );
        setProductList(newProductNameDesc);
        break;
      case "desc":
        const newProductPriceDesc = productList
          .filter((x) => x.price)
          .sort((a, b) => b.price - a.price);
        setProductList(newProductPriceDesc);
        break;
      case "asc":
        const newProductPriceAsc = productList
          .filter((x) => x.price)
          .sort((a, b) => a.price - b.price);
        setProductList(newProductPriceAsc);
        break;
      default:
        break;
    }
  }, [optionSort]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = productList.slice(startIndex, endIndex);

  const initFilter = {
    category: [],
    size: [],
    color: [],
  };
  const [filter, setFilter] = useState(initFilter);

  const handleFilterSelect = (type, checked, item) => {
    console.log(checked);
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.category],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        default:
          throw new Error("value is not invalid");
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (x) => x !== item.category
          );
          setFilter({
            ...filter,
            category: newCategory,
          });
          break;
        case "SIZE":
          const newSize = filter.size.filter((x) => x !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        case "COLOR":
          const newColor = filter.color.filter((x) => x !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        default:
          throw new Error("value is not invalid");
      }
    }
  };
  const updateProduct = useCallback(() => {
    let temp = products;
    if (filter.category.length > 0) {
      temp = temp.filter((x) => filter.category.includes(x.category));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((x) => {
        const check = x.colors.find((x) => filter.color.includes(x));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((x) => {
        const check = x.size.find((x) => filter.size.includes(x));
        return check !== undefined;
      });
    }
    setProductList(temp);
  }, [filter]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  const handleDeleteFilter = () => {
    setFilter(initFilter);
  };
  return (
    <div className="py-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between border max-w-lg w-full px-2 border-slate-300 rounded ">
          <input
            value={searchValue}
            onChange={handleChange}
            className="outline-none border-none p-2 w-full text-slate-900"
            placeholder="You want need product ?"
          />
          <i className="text-xl text-slate-600 bx bx-search-alt-2"></i>
        </div>
        <div className="w-full max-w-[250px] border border-black rounded">
          <select
            onChange={(e) => setOptionSort(e.target.value)}
            className="w-full p-2"
          >
            <option value="default">Default</option>
            <option value="nameAsc">Sort by name A to Z</option>
            <option value="nameDesc">Sort by name Z to A</option>
            <option value="desc">High Price to Low Price</option>
            <option value="asc">Low Price to High Price</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="sticky top-24 h-[100vh] w-[25%] mt-10">
          <div className="mb-5">
            <h1 className="font-bold text-slate-900 text-xl mb-2">Category</h1>
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-3"
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterSelect("CATEGORY", e.target.checked, item)
                  }
                  checked={filter.category.includes(item.category)}
                />
                {item.displayName}
              </div>
            ))}
          </div>
          <div className="mb-5">
            <h1 className="font-bold text-slate-900 text-xl mb-2">Size</h1>
            {sizes.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-3"
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterSelect("SIZE", e.target.checked, item)
                  }
                  checked={filter.size.includes(item.size)}
                />
                {item.displayName}
              </div>
            ))}
          </div>
          <div className="mb-5">
            <h1 className="font-bold text-slate-900 text-xl mb-2">Color</h1>
            {colors.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-3"
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFilterSelect("COLOR", e.target.checked, item)
                  }
                  checked={filter.color.includes(item.color)}
                />
                {item.displayName}
              </div>
            ))}
          </div>
          <button
            onClick={handleDeleteFilter}
            className="text-slate-100 bg-gradient-to-t from-orange-400 to-orange-500 rounded px-3 py-2 uppercase font-semibold active:scale-105 transition-all duration-150"
          >
            Xoá bộ lọc
          </button>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 items-center justify-items-center gap-4 mt-10 w-full ">
            {productList.length === 0 ? (
              <p className="text-center text-2xl font-bold text-orange-400">
                Product is not exsist
              </p>
            ) : (
              currentItems.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))
            )}
          </div>
          {productList.length > 0 && (
            <div className="mt-7 text-center flex items-center justify-center gap-5 w-full">
              <button
                className={`flex items-center justify-center w-10 h-8 text-[#747474] ${
                  currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={() =>
                  handlePageChange(currentPage === 1 ? 1 : currentPage - 1)
                }
              >
                <i
                  className={`text-3xl  bx bx-chevron-left ${
                    currentPage === 1 ? "text-slate-200" : "text-[#747474]"
                  }`}
                ></i>
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  className={`w-10 h-8 text-xl text-[#747474] rounded ${
                    index === currentPage - 1
                      ? "bg-gradient-to-b from-amber-500 to-orange-600 text-slate-100"
                      : ""
                  }`}
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  disabled={index + 1 === currentPage}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className={`flex items-center justify-center w-10 h-8 text-[#747474] ${
                  currentPage === totalPages
                    ? "cursor-not-allowed"
                    : "cursor-poniter"
                }`}
                onClick={() =>
                  handlePageChange(
                    currentPage === totalPages ? totalPages : currentPage + 1
                  )
                }
              >
                <i
                  className={`text-3xl  bx bx-chevron-right ${
                    currentPage === totalPages
                      ? "text-slate-200"
                      : "text-[#747474]"
                  }`}
                ></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;

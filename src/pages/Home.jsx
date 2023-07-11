import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = React.useState([]);
  const [searchProducts, setSearchProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let productList = [];

        for (let dataItem in data) {
          productList.push({ ...data[dataItem], productId: dataItem });
        }
        productList.reverse();
        setProducts(productList);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchProducts(
      products.filter((product) => product.itemTitle.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };

  console.log("search", searchProducts);

  return (
    <>
      <div className="product-search-container">
        <input
          type="text"
          placeholder="search products..."
          onChange={handleSearch}
        />
      </div>
      
      <div className="product-list-container">
        {/* {All the products} */}
        {products.length > 0 &&
          searchProducts.length == 0 &&
          products.map((product) => <ProductCard {...product} />)}

        {/* {Seach Product} */}
        {searchProducts.length > 0 &&
          searchProducts.map((product) => <ProductCard {...product} />)}
      </div>
    </>
  );
}

function ProductCard({
  authorContact,
  authorName,
  itemDate,
  itemDesc,
  itemImg,
  itemPrice,
  itemTitle,
  productId,
}) {
  // console.log(authorContact);
  return (
    <Link to={"/productdetails/" + productId}>
      <div className="product-card">
        <div className="product-img">
          <img src={itemImg} alt="" />
        </div>
        <div className="product-body">
          <h2>₹ {itemPrice}</h2>
          <h4>{itemTitle.length > 25 ? itemTitle.slice(0, 25) : itemTitle}</h4>
          <p>{itemDate}</p>
        </div>
      </div>
    </Link>
  );
}

export default Home;

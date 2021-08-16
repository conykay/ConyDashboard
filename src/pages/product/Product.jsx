import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import { PublishRounded } from "@material-ui/icons";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://cutt.ly/6QZOdL3"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">3123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label> Product name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label> In Stock</label>
            <select id="idStock" name="inStock">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label> Active </label>
            <select id="idactive" name="active">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://cutt.ly/6QZOdL3"
                alt=""
                className="productUploadimg"
              />
              <label htmlFor="file">
                <PublishRounded />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton"> Update </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;

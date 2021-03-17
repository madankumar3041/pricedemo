import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Item } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";

import SearchCard from "./SearchCard/searchCard";
import "./SearchCard/Styles.css";

import data from "../data.json";

export function AddProduct() {
  const [isLoading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [formData, setData] = useState({});
  const [headerData, setHeaderData] = useState({
    product_name: "Product Name",
    product_mrp: "Price (MRP)",
    product_price: "Product Price",
    availability_status: "Stock",
    delivery_estimation: "Delivery Estimated Days",
    rating_value: "Ratings",
    rating_count: "Rating count",
  });
  useEffect(() => {
    if (window.location.href.includes("admin")) {
      setHeaderData((prevState) => ({ ...prevState, url: "Url" }));
    }
  }, []);

  const downloadcsvfile = () => {
    var link = "https://marketrate.infoware.xyz/priceprediction/getcsv";
    window.location.href = link;
  };
  const searchProduct = (download = false) => {
    console.log(formData);
    console.log(data);
    //   const formingData = new FormData();
    //   formingData.append("productName",formData.pincode);
    //   formingData.append(" pincode",formData.name);
    //   formingData.append("city",formData.city);
    //   formingData.append("product_sku",formData.productsku);
    //   formingData.append("productCop",formData.companyprice);
    //   formingData.append(" productMrp",formData.mrpprice);
    //  formingData.append("ean_id",formData.EanId);
    //  formingData.append("asin",formData.Asin);
    //   formingData.append("productName",formData.name);
    const payload ={
      productName: formData.name,
      pincode: formData.pincode,
      city: formData.city,
      product_sku: formData.productsku,
      productCop: formData.companyprice,
      productMrp: formData.mrpprice,
      ean_id: formData.EanId,
      asin: formData.Asin,
      grofer_id: formData.groferId,
    };
    setLoading(true);
    fetch("https://marketrate.infoware.xyz/priceprediction/v2/", {
      crossDomain:true,
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        console.log("Success:", data);
        setResponseData(data);
        // window.location.href = "#/searchedResult";
        if (download) {
          downloadcsvfile();
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  // const handleDDChange = (event) => {
  //   debugger;
  //   setData((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));

  //   const filteredData = data.filter((item) => item.name == event.target.value);

  //   setData(filteredData[0]);
  // };
  // if (
  //   responseData?.data?.data?.amazon_data?.products?.product_price ||
  //   responseData?.data?.data?.bb_data?.products?.product_price ||
  //   responseData?.data?.data?.grofer_data?.products?.product_price ||
  //   responseData?.data?.jio_data?.products?.product_price
  // ) {
  //   const res = responseData?.data?.amazon_data?.products?.product_price.match(/(\d+)/);
  //   const res1 = responseData?.data?.bb_data?.products?.product_price.match(/(\d+)/);
  //   const res2 = responseData?.data?.grofer_data?.products?.product_price.match( /(\d+)/);
  //   const res3 = responseData?.data?.jio_data?.products?.product_price.match(/(\d+)/);

  //   if (res?.length || res1?.length || res2?.length || res3?.length) {
  //     var res_data = [];
  //     res_data.push(res != null ? res[0] : null);
  //     res_data.push(res1 != null ? res1[0] : null);
  //     res_data.push(res2 != null ? res2[0] : null);
  //     res_data.push(res3 != null ? res3[0] : null);
  //     // res_data.push(res,res1,res2,res3);
  //   }
  //   var min = Math.min(...res_data?.filter((item) => item));
  //   console.log(min);
  // }
  return (
    <div>
      {/* <Segment inverted color="blue">
        <Link className="company-logo"style={{ color: "white", float: "left" }} to="/">
        Price Tracker and Recommendation Tool
        </Link>
        <img
          src="https://www.fwpgroup.co.uk/wp-content/uploads/2020/03/male-profile-icon-white-on-the-blue-background-vector-3451989.jpg"
          style={{ position: "relative", bottom: "12px" }}
          className="ui mini right floated image"
          alt=" "
        />
        <Link style={{ color: "white", float: "right" }} to="#">
          My Account
        </Link>
      </Segment> */}
      <div className="navbar">
        <ul>
          <li>
            <a href="#/">Price Tracker and Recommendation Tool</a>
          </li>
        </ul>
        <ul>
          {/* <li>
              <a href="#/signup">Signup</a>
            </li> */}
          <li>
            <img
              src="https://www.fwpgroup.co.uk/wp-content/uploads/2020/03/male-profile-icon-white-on-the-blue-background-vector-3451989.jpg"
              className="class-image"
              alt=" "
            />
            <a>My Account</a>
          </li>
        </ul>
      </div>
      <div className="image-head">
        <div className="ui container logc">
          <div class="page-login">
            <div class="ui centered grid container">
              <div class="nine wide column">
                <div class="ui fluid card">
                  <div class="content">
                    <form class="ui form" onSubmit={(e) => e.preventDefault()}>
                      <div class="field">
                        <label>Product Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter product Name"
                          onChange={handleChange}
                        />
                        {/* <select
                          custom
                          name="name"
                          id="select"
                          onChange={handleDDChange}
                        >
                          <option value="Fortune Refined Sunflower Oil 1 Ltr Pouch">
                            Fortune Refined Sunflower Oil 1 Ltr Pouch
                          </option>
                          <option value="Fortune Refined Cottonseed Oil 5 Ltr Jar">
                            Fortune Refined Cottonseed Oil 5 Ltr Jar
                          </option>
                          <option value="Fortune Rozana Basmati Rice 5 kg">
                            Fortune Rozana Basmati Rice 5 kg{" "}
                          </option>
                          <option value="Fortune Atta 10 Kg">
                            Fortune Atta 10 Kg
                          </option>
                          <option value="Fortune Chana Besan 500 gm">
                            Fortune Chana Besan 500 gm{" "}
                          </option>
                          <option value="Fortune Gujarati superfood khichdi 200 gm">
                            Fortune Gujarati superfood khichdi 200 gm
                          </option>
                        </select> */}
                      </div>
                      <div class="field">
                        <label> Product Code</label>
                        <input
                          type="text"
                          name="code"
                          placeholder="Enter product code"
                        />
                      </div>
                      <div class="field">
                        <label> Product Sku</label>
                        <input
                          type="text"
                          name="productsku"
                          placeholder="Enter product sku"
                          // value={formData.productsku}
                          onChange={handleChange}
                        />
                      </div>
                      <Form.Group widths="equal">
                        <Form.Input
                          fluid
                          label="EAN No"
                          type="text"
                          name="EanId"
                          placeholder="Enter EAN number"
                          // value={formData.EanId}
                          onChange={handleChange}
                        />
                        <Form.Input
                          fluid
                          label="ASIN No"
                          placeholder="Enter ASIN number"
                          type="text"
                          name="Asin"
                          onChange={handleChange}
                          // value={formData.Asin}
                        />
                      </Form.Group>
                      <div class="field">
                        <label>Grofers Id</label>
                        <input
                          type="text"
                          name="groferId"
                          placeholder="Enter Grofer Id"
                          onChange={handleChange}
                          // value={formData.groferId}
                        />
                      </div>
                      <div class="field">
                        <label>Brand</label>
                        <input
                          type="text"
                          name="code"
                          placeholder="Enter brand"
                        />
                      </div>
                      <Form.Group widths="equal">
                        <Form.Input
                          fluid
                          label="Company Offer Price (₹)"
                          type="number"
                          name="companyprice"
                          placeholder="Enter company offer price"
                          // value={formData.companyprice}
                          onChange={handleChange}
                        />
                        <Form.Input
                          fluid
                          label="MRP(₹)"
                          placeholder="Enter MRP"
                          type="number"
                          name="mrpprice"
                          // value={formData.mrpprice}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group widths="equal">
                        <Form.Input
                          fluid
                          label="City"
                          type="text"
                          name="city"
                          placeholder="Enter city"
                          // value={formData.city}
                          onChange={handleChange}
                        />
                        <Form.Input
                          fluid
                          label="PinCode"
                          type="number"
                          name="pincode"
                          placeholder="Enter pincode"
                          // value={formData.pincode}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <div
                        className="form-check"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <div class="ui checkbox">
                          <input type="checkbox" tabindex="0" />
                          <label>Amazon</label>
                        </div>
                        {/* <div class=" ui checkbox"><input type="checkbox" tabindex="0" /><label>Flipkart</label></div> */}
                        <div class=" ui checkbox">
                          <input type="checkbox" tabindex="0" />
                          <label>Jiomart</label>
                        </div>
                        <div class=" ui checkbox">
                          <input type="checkbox" tabindex="0" />
                          <label>Grofers</label>
                        </div>
                        <div class="ui checkbox">
                          <input type="checkbox" tabindex="0" />
                          <label>BigBasket</label>
                        </div>
                      </div>
                      <button
                        class="ui primary button"
                        style={{ marginBottom: "1rem" }}
                        onClick={() => searchProduct()}
                      >
                        Start Search{" "}
                        <i
                          style={{ marginLeft: "1rem" }}
                          aria-hidden="true"
                          className="search icon"
                        ></i>
                      </button>
                      <button
                        class="ui primary button"
                        style={{ marginBottom: "1rem" }}
                        onClick={() => searchProduct(true)}
                      >
                        Search/Download{" "}
                        <i
                          style={{ marginLeft: "1rem" }}
                          aria-hidden="true"
                          className="search icon"
                        ></i>
                      </button>
                      <div class="three blue ui buttons">
                        <button class="ui button">
                          <i aria-hidden="true" className="add icon"></i>
                          Add Single Product
                        </button>
                        <button class="ui button">
                          <i aria-hidden="true" className="list icon"></i>
                          Batch Import
                        </button>
                        <button class="ui button">
                          <i aria-hidden="true" className="edit icon"></i>
                          Manage
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <h1>Please Wait Data is Loading...</h1>
      ) : // <Loader />
      responseData?.data?.amazon_data?.products ||
        responseData?.data?.bb_data?.products ||
        responseData?.data?.grofer_data?.products ||
        responseData?.data?.jio_data?.products ? (
        <div class="row">
          <table class="content-table">
            <thead class="thead-light">
              <tr className="file-data">
                <th scope="col">#</th>
                <th scope="col">Amazon</th>
                {/* <th scope="col">Flipkart</th> */}
                <th scope="col">BigBasket</th>
                <th scope="col">Jio Mart</th>
                <th scope="col">Grofers</th>
                <th scope="col">Company Online </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">
                  <SearchCard data={headerData} />
                </td>
                <td className="">
                  {responseData?.data?.amazon_data ? (
                    <SearchCard
                      data={responseData?.data?.amazon_data?.products}
                    />
                  ) : null}
                </td>
                {/* <td className="">{responseData?.data?.flipkart_data ? <SearchCard data={responseData?.data?.flipkart_data?.products} /> : null}</td> */}
                <td className="">
                  {responseData?.data?.bb_data ? (
                    <SearchCard data={responseData?.data?.bb_data?.products} />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.jio_data ? (
                    <SearchCard data={responseData?.data?.jio_data?.products} />
                  ) : null}
                </td>
                <td className="">
                  {responseData?.data?.grofer_data ? (
                    <SearchCard
                      data={responseData?.data?.grofer_data?.products}
                    />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-dash">
            Recommended price(Lowest Price) = Rs{" "}
            {responseData?.recommended_price}
          </div>
          {/* <Button
            primary
            onClick={() =>
              //  exportTableToCSV('Searched Products.csv')
              downloadcsvfile()
            }
          >
            Export To CSV
          </Button> */}
        </div>
      ) : (
        <h1>No Search Result Found...</h1>
      )}
    </div>
  );
}

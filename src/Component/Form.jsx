/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Blog.css";
import { postData } from "../Services/PostApi";
const Form = ({ apidata, setapiData }) => {
  const [sendData, sendSetData] = useState({
    title: "",
    body: "",
  });

  const addPostData = async () => {
    const response = await postData(sendData);
    console.log("res", response);
    if (response.status === 201) {
      setapiData([...apidata, response.data]);
      sendSetData({ title: "", body: "" });
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  const changedValue = (e) => {
    const getName = e.target.name;
    const value = e.target.value;
    //console.log(getName,value)
    sendSetData((prev) => {
      return { ...prev, [getName]: value };
    });
  };
  return (
    <section className="blog-form-container">
      <form className="blog-form" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Enter Blog Title"
          name="title"
          value={sendData.title}
          onChange={(e) => changedValue(e)}
          className="blog-input"
          required
        />
        <input
          type="text"
          placeholder="Enter Keywords"
          name="body"
          value={sendData.body}
          onChange={(e) => changedValue(e)}
          className="blog-input"
        />
        <button type="submit" className="blog-submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;

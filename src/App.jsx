import { useEffect, useState } from "react";
import { updateApi } from "./Services/PostApi";
import Form from "./Component/Form";
import BlogCard from "./Component/BlogCard";

function App() {
  const [apidata, setapiData] = useState([]);
  const getData = async () => {
    const response = await updateApi();
    setapiData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Form />
      <BlogCard  data={apidata}/>  
      </>
  );
}

export default App;

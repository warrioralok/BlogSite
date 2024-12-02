/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { deleteApi, updateApi } from "../Services/PostApi";
import "./Blog.css";
const BlogCard = () => {
    const [apidata, setapiData] = useState([]);

    const getData = async () => {
        try {
          const response = await updateApi();
          setapiData(response.data);
          console.log("Fetched data:", response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const handleDelete = async (e, id) => {
        e.preventDefault(); // Prevent default anchor behavior
        try {
          const response = await deleteApi(id); // Call the delete API
          if(response.status === 200){
            setapiData(apidata.filter((item) => item.id !== id));
            console.log("Deleted data:", response.data);
          }  
         
          
        } catch (error) {
          console.error("Error deleting the post:", error);
        }
      };

    
    


    useEffect(() => {
        getData();
      }, []);

    return (
    <>
      <section className="blog-container">
        {apidata.map((elem) => {
          return (
            
              <div className="blog-card" key={elem.id}>
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Blog Image"
                  className="blog-image"
                />
                <div className="blog-content">
                <p className="count">{elem.id}.</p>
                  <h3 className="blog-title">{elem.title}</h3>
                  <p className="blog-description">
                    {elem.body}
                  </p>
                  <a href="#" className="blog-link">
                    Edit
                  </a>
                  <a href="#" className="blog-link delete" onClick={(e) => handleDelete(e,elem.id)}>
                    Delete
                  </a>
                </div>
              </div>
           
          );
        })}
      </section>
    </>
  );
};

export default BlogCard;

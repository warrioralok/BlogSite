/* eslint-disable react/prop-types */
import "./Blog.css";
const BlogCard = ({ data }) => {
  return (
    <>
      <section className="blog-container">
        {data.map((elem) => {
          return (
            <>
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
                  <a href="#" className="blog-link delete">
                    Delete
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BlogCard;

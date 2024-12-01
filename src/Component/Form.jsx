import './Blog.css'
const Form = () =>{
    return(
        <section className="blog-form-container">
        <form className="blog-form">
          <input type="text" placeholder="Enter Blog Title" className="blog-input" required/>
          <input type="text" placeholder="Enter Keywords" className="blog-input"/>
          <button type="submit" className="blog-submit">Submit</button>
        </form>
      </section>
    )
}

export default Form;
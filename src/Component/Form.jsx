/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./Blog.css";
import { postData, updatedData } from "../Services/PostApi";
const Form = ({ apidata, setapiData, updateDataApi, setUpdateDataApi }) => {
    const [sendData, sendSetData] = useState({
        title: "",
        body: "",
    });

    const submitterRef = useRef(null);

    const isEmpty = Object.keys(updateDataApi).length === 0;

    const addPostData = async () => {
        const response = await postData(sendData)
        if (response.status === 201) {
            setapiData([...apidata, response.data]);
            sendSetData({ title: "", body: "" });
        }
    };


    const UpdatePostData = async () =>{
        try {
            const response = await updatedData(updateDataApi.id, sendData);
            if(response.status === 200){    
                setapiData((prev) =>{
                return prev.map((currElem) =>{
                    return currElem.id === response.data.id ? response.data : currElem
                }) 
            })
            sendSetData({ title: "", body: "" });
            setUpdateDataApi({})
        }
        } catch (error) {
            console.log(error)
        }
        
    }


    const formSubmit = (e) => {
        e.preventDefault();
        const action = submitterRef.current.value;
        if(action == 'Add'){
            addPostData();
        }
        else{
            UpdatePostData();
        }
        
    };

    useEffect(() => {
        updateDataApi &&
            sendSetData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            });
    }, [updateDataApi]);

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
                <button
                    ref={submitterRef}
                    type="submit"
                    className="blog-submit"
                    value={isEmpty ? "Add" : "Edit"}
                >
                    {isEmpty ? "Add" : "Edit"}
                </button>
            </form>
        </section>
    );
};

export default Form;

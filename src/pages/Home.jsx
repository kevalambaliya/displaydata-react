import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    headline: "",
    image: "",
    description: "",
    authorname: "",
  });

  const handleinput = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    postBlog(data);
    console.log(data);
  };
  const postBlog = async () => {
    await axios.post("http://localhost:3000/product", data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="headline"
          placeholder="Enter Headline"
          value={data.headline}
          onChange={handleinput}
        />
        <input
          type="url"
          name="image"
           placeholder="Enter image Url"
          value={data.image}
          onChange={handleinput}
        />
        <input
          type="text"
          name="description"
           placeholder="Enter Description"
          value={data.description}
          onChange={handleinput}
        />
        <input
          type="text"
          name="authorname"
           placeholder="Enter Autorname"
          value={data.authorname}
          onChange={handleinput}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Home;

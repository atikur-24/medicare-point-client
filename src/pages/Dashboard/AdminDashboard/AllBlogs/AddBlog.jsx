import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBlogApi } from "../../../../Features/Blogs/addBlog";
import "./Allblogs.css";

const AddBlog = () => {
  const [reset, setReset] = useState(false);
  const editor = useRef(null);
  const [blogDetails, setBlogDetails] = useState("");
  //   const jsxContent = ReactHtmlParser(blogDetails);
  //   console.log("aa", jsxContent);

  const dispatch = useDispatch();

  const handleBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    if (reset) {
      form.reset();
      setBlogDetails("");
      setReset(false);
      return;
    }

    const title = form.title.value;
    const topic = form.topic.value;
    const content = form.content.value;
    const published_date = form.published_date.value;
    const image = form.image.value;
    const content_details = blogDetails;

    const data = { title, topic, content, published_date, image, content_details };
    // console.log(newBlog);
    dispatch(addBlogApi({ data, form }));
    form.reset();
  };

  return (
    <div className="max-w-7xl lg:w-4/5 mx-auto mb-10">
      <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">Add new blog</h3>

      <form onSubmit={handleBlog} className="add-blog-form space-y-3">
        <div>
          <h4>Blog Title</h4>
          <input required type="text" name="title" id="" placeholder="Type Here" />
        </div>
        <div>
          <h4>Blog Topic</h4>
          <input required type="text" name="topic" id="" placeholder="Type Here" />
        </div>
        <div>
          <h4>Blog Content</h4>
          <input required type="text" name="content" id="" placeholder="Type Here" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4>Date</h4>
            <input required type="date" name="published_date" id="" className="date" />
          </div>

          <div>
            <h4>Image URL</h4>
            <input type="text" name="image" id="" className="date" placeholder="Paste Here" />
          </div>
        </div>
        <div>
          <h4>Blog Details</h4>
          <JoditEditor
            ref={editor}
            value={blogDetails}
            // config={config}
            onChange={(newContent) => {
              setBlogDetails(newContent);
            }}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="blog-btn bg-my-primary hover:bg-my-accent">
            Create Blog
          </button>
          <button
            onClick={() => {
              setReset(true);
            }}
            type="submit"
            className="blog-btn bg-red-500 hover:bg-red-400"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;

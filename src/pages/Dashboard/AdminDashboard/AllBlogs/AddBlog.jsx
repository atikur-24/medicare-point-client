import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBlogApi } from "../../../../Features/Blogs/addBlog";
import "./Allblogs.css";

const AddBlog = () => {
  const [reset, setReset] = useState(false);
  const editor = useRef(null);
  const [blogDetails, setBlogDetails] = useState("");

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
    const sectionTitle = form.sectionTitle.value;
    const published_date = form.published_date.value;
    const image = form.image.value;
    const authorImage = form.authorImage.value;
    const author = form.author.value;
    const content_details = blogDetails;

    const data = { title, topic, content, published_date, image, content_details, authorImage, author, sectionTitle };
    dispatch(addBlogApi({ data, form }));
    form.reset();
  };

  return (
    <div className="max-w-7xl lg:w-4/5 mx-auto mb-10">
      <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">Add new blog</h3>

      <form onSubmit={handleBlog} className="add-blog-form space-y-3">
        <div>
          <h4>Blog Title</h4>
          <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="title" id="" placeholder="Type Here" />
        </div>
        <div>
          <h4>Blog Topic</h4>
          <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="topic" id="" placeholder="Type Here" />
        </div>
        <div>
          <h4>Blog Content</h4>
          <textarea className="w-full placeholder-gray-400 py-2 px-3 border rounded-md" required name="content" id="" placeholder="Type Here" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4>Date</h4>
            <input required type="date" name="published_date" id="" className="date" />
          </div>

          <div>
            <h4>Image URL</h4>
            <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="image" id="" placeholder="Paste Here" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4>Author Name</h4>
            <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="author" id="" placeholder="Type Here" />
          </div>

          <div>
            <h4>Author Image</h4>
            <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="authorImage" id="" placeholder="Paste Here" />
          </div>
        </div>
        <div>
          <h4>Section Title</h4>
          <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="sectionTitle" id="" placeholder="Type Here" />
        </div>
        <div>
          <h4>Blog Details</h4>
          <JoditEditor
            name="content_details"
            ref={editor}
            value={blogDetails}
            // config={config}
            onChange={(newContent) => {
              setBlogDetails(newContent);
            }}
          />
        </div>

        <div className="text-center grid grid-cols-2">
          <button type="submit" className="submit-btn px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 w-auto">
            Create Blog
          </button>
          <input type="reset" onClick={() => setBlogDetails("")} value="Reset" className="reset-btn px-6 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 w-auto" />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;

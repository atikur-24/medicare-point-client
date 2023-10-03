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
    <div className="pb-8">
      <div className="max-w-5xl mx-auto rounded-2xl box-shadow bg-white p-6">
        <h3 className="text-center text-3xl font-semibold my-5 text-my-primary">Add New Blog</h3>

        <form onSubmit={handleBlog} className="add-blog-form space-y-3">
          <div>
            <h4>Blog Title</h4>
            <input className=" input input-bordered  outline-none  placeholder:text-gray-6 focus:!outline-none" required type="text" name="title" id="" placeholder="Type Here" />
          </div>
          <div>
            <h4>Blog Topic</h4>
            <input className="placeholder-gray-400 py-2 px-3 border rounded-md" required type="text" name="topic" id="" placeholder="Type Here" />
          </div>
          <div>
            <h4>Blog Content</h4>
            <textarea className="" required name="content" id="" placeholder="Type Here" />
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

          <div className="flex items-center gap-4 mt-4">
            <button type="submit" className="my-btn">
              Create Blog
            </button>
            <input onClick={() => setBlogDetails("")} type="reset" value="Reset" className="!btn !btn-error !w-[64px]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

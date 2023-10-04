import { Link } from "react-router-dom";

const Blog = ({ blog, range }) => {
  const { image, title, published_date, topic, content, _id } = blog || {};

  return (
    <div className="mb-16">
      <div className="mb-1 md:flex">
        <div className="md:w-1/2 lg:w-1/3 xl:w-2/5 ">
          <div className="h-full">
            <Link to={`/healthArticles/${_id}`} className="inline-block w-full">
              <span className="sr-only">Read More about {topic}</span>
              <div className="aspect-h-5 aspect-w-8 relative">
                <img
                  width="350"
                  height="215"
                  className="my-auto h-full w-full object-cover"
                  src={image}
                  alt={topic}
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="group md:w-1/2 lg:w-2/3 xl:w-3/5">
          <div className="space-y-3 md:pb-8 md:pl-8">
            <div className="z-1  relative -mt-10 mr-12 border-t-4 border-my-accent bg-white pr-6 pt-6 sm:mr-24 md:mr-0 md:mt-0 md:border-0 md:p-0">
              <ul>
                <li>
                  <span className="font-bold">
                    <Link
                      className="text-lg text-my-primary transition-colors duration-200 group-hover:text-black"
                      to={`/healthArticles/${_id}`}
                    >
                      {title} 1
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="mb-1 mt-2 max-w-xl text-2xl font-bold leading-tight text-title-color transition-colors duration-200 group-hover:text-my-primary group-focus:text-my-primary">
              {topic}
            </h2>

            <time className="mb-1 block font-nunito text-base font-bold italic">
              Published <span>{published_date}</span>
            </time>
            <div className="mt-0 hidden max-w-2xl text-justify  tracking-wide lg:block lg:text-lg">
              <p>{content?.slice(0, range)}...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0 block max-w-2xl text-justify  tracking-wide lg:hidden lg:text-lg">
        <p>{content?.slice(0, range)}...</p>
      </div>
    </div>
  );
};

export default Blog;

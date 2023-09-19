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
                <img width="350" height="215" className="object-cover h-full w-full my-auto" src={image} alt={topic} />
              </div>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 lg:w-2/3 xl:w-3/5 group">
          <div className="md:pb-8 md:pl-8 space-y-3">
            <div className="-mt-10  bg-white relative z-1 pr-6 pt-6 border-t-4 border-my-accent mr-12 sm:mr-24 md:mt-0 md:p-0 md:border-0 md:mr-0">
              <ul>
                <li>
                  <span className="font-bold">
                    <Link className="text-lg text-my-primary group-hover:text-black transition-colors duration-200" to={`/healthArticles/${_id}`}>
                      {title} 1
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl text-title-color max-w-xl font-bold mb-1 leading-tight mt-2 group-hover:text-my-primary group-focus:text-my-primary transition-colors duration-200">{topic}</h2>

            <time className="block mb-1 text-base font-bold font-nunito italic">
              Published <span>{published_date}</span>
            </time>
            <div className="max-w-2xl mt-0 text-justify lg:text-lg  tracking-wide hidden lg:block">
              <p>{content?.slice(0, range)}...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mt-0 text-justify lg:text-lg  tracking-wide block lg:hidden">
        <p>{content?.slice(0, range)}...</p>
      </div>
    </div>
  );
};

export default Blog;

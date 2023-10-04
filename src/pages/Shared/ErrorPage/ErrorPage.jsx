import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import WebSiteTitle from "../../../components/WebSiteTitle/WebSiteTitle";

export default function ErrorPage() {
  const { error } = useRouteError();

  return (
    <div id="notfound">
      <WebSiteTitle title="Error Page" />
      <div className="notfound w-full max-w-lg text-center leading-4 ">
        <div className="notfound-404 h-36 md:h-64">
          <h1 className="m-0 font-nunito text-9xl font-bold text-title-color md:text-[200px]">
            4<span />4
          </h1>
        </div>
        <div className="mb-4 space-y-4">
          <h2 className="m-0 text-lg  font-bold uppercase text-[#232323] md:text-2xl">
            Oops! Page Not Be Found
          </h2>
          <p className=" font-medium text-[#ef4444] md:text-2xl ">
            <i>{error?.statusText || error?.message}</i>
          </p>
        </div>
        <Link className="my-btn-outline rounded-full" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

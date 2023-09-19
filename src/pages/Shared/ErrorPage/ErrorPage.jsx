import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import WebSiteTitle from "../../../components/WebSiteTitle/WebSiteTitle";

export default function ErrorPage() {
  const { error } = useRouteError();

  return (
    <div id="notfound">
      <WebSiteTitle title="Error Page" />
      <div className="notfound max-w-lg w-full text-center leading-4 ">
        <div className="notfound-404 h-36 md:h-64">
          <h1 className="md:text-[200px] text-9xl font-bold m-0 text-title-color font-nunito">
            4<span />4
          </h1>
        </div>
        <div className="space-y-4 mb-4">
          <h2 className="text-lg md:text-2xl  font-bold m-0 uppercase text-[#232323]">Oops! Page Not Be Found</h2>
          <p className=" text-[#ef4444] font-medium md:text-2xl ">
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

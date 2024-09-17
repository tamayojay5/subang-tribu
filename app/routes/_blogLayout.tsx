import { Outlet } from "@remix-run/react";

const BlogLayout = () => {
  return (
    <div>
      <header>BLOG NAVIGATION</header>

      <Outlet />
    </div>
  );
};

export default BlogLayout;

import { ActionFunction, json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigation } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );

  const data: { id: string; title: string; body: string; userId: string } =
    await response.json();

  return json({ blog: data });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const title = formData.get("title");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`,
    {
      body: JSON.stringify({ title }),
      method: "patch",
    }
  );

  const data = await response.json();

  return json({ post: data });
};

const Blog = () => {
  const { blog } = useLoaderData<typeof loader>();

  const navigation = useNavigation();

  const isSubmitting = !(navigation.state === "idle");

  return (
    <>
      <Link to={"/"}>Home</Link>
      <div className="p-4 rounded-sm w-[360px] border">
        <h1 className="font-bold text-xl mb-3">{blog.title}</h1>
        <p>{blog.body}</p>
      </div>

      <Form method="patch" action="">
        <div className="p-3 border my-5 flex space-x-3 max-w-fit flex-col items-start">
          <input className="border" name="title" placeholder="title" />
          <button type="submit">
            {isSubmitting ? "Submitting" : "Update"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default Blog;

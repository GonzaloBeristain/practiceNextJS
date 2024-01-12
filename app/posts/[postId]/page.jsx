import Link from "next/link";

const loadPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
};

const Page = async ({params}) => {
    const post = await loadPosts(params.postId)

    return (
        <div className="py-2 text-center">
            <h1 className="text-4xl font-bold"> {post.id}. {post.title} </h1>
            <p className="text-2xl text-slate-300 py-2"> {post.body} </p>
            <Link href={"/posts"}><h3 className="text-2xl font-bold text-blue-500 hover:text-red-800">Volver</h3></Link> 
        </div>
    )
};

export default Page;
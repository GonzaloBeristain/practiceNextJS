import Link from "next/link";

const loadPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve,1000)); //No es necesario, pero lo dejo para que se vea el Loading...

    return data;
};

const Post = async () => {
    const posts = await loadPosts();

    return (
        <div className="mx-4 text-center">
            <h1 className="text-5xl font-bold py-3">Posts API JSON PLACE HOLDER</h1>
            <div className="flex flex-wrap justify-center">
                {
                    posts.map((post) => (
                        <div className="border-white border w-96 h-64 m-2 bg-slate-900" key={post.id}>
                            <Link href={`/posts/${post.id}`}><h3 className="text-2xl border-b hover:text-red-800"> {post.id}. {post.title} </h3></Link>
                            <p className="text-slate-300 p-4"> {post.body} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Post;
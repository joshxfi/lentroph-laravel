import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Post from "@/Components/Post";
import AddPost from "./Partials/AddPost";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Feed({ auth, posts }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Feed
        </h2>
      }
    >
      <Head title="Feed" />

      <div className="py-12 max-w-screen-sm mx-auto">
        <AddPost />

        <div className="space-y-8">
          {/* @ts-ignore */}
          {posts.reverse().map((post: Post) => (
            <Post key={post.id} content={post.content} />
          ))}
          <Post />
          <Post />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

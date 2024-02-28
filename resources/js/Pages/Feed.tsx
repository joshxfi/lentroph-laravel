import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Post from "@/Components/Post";

export default function Feed({ auth }: PageProps) {
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
        <div className="space-y-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

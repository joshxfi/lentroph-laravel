import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Image, Avatar, Divider } from "@nextui-org/react";
import TopDonators from "./Partials/TopDonators";
import DonateButton from "./Partials/DonateButton";
import Products from "./Partials/Products";
import Posts from "./Partials/Posts";

export default function Profile({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <div className="py-12 max-w-screen-md mx-auto">
        <Image
          isBlurred
          src="https://images.unsplash.com/photo-1552799446-159ba9523315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="NextUI Album Cover"
          classNames={{
            wrapper: "w-full h-[250px] overflow-hidden",
          }}
        />

        <div className="flex justify-between items-center">
          <Avatar
            isBordered
            showFallback
            src="https://images.unsplash.com/photo-1570358934836-6802981e481e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-36 h-36 z-10 -mt-16 ml-6 flex-none"
          />

          <DonateButton />
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">One World</h2>
          <p className="mt-2 max-w-xl">
            One World is a dedicated organization committed to combating climate
            change and global warming. Founded by a group of passionate
            individuals from diverse backgrounds, our mission is to foster a
            sustainable future for all living beings on our planet.
          </p>
        </div>

        <TopDonators />
        <Products />
        <Divider className="mb-8 mt-16" />
        <Posts />
      </div>
    </AuthenticatedLayout>
  );
}

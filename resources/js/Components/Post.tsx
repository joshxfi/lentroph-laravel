import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import PostDropdown from "./PostDropdown";

export default function Post({
  postId,
  content,
}: {
  postId: number;
  content?: string;
}) {
  return (
    <Card className="p-4">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://images.unsplash.com/photo-1570358934836-6802981e481e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-base font-semibold leading-none text-default-600">
              One World
            </h4>
            <h5 className="text-base tracking-tight text-default-400">
              @oneworld
            </h5>
          </div>
        </div>
        <PostDropdown postId={postId} />
      </CardHeader>
      <CardBody className="px-3 text-base text-default-400">
        <p>
          {content ||
            "Together, let's commit to sustainable practices and show our love for the planet we call home. Together, we can create a greener, healthier future for generations to come. 🌱💫"}
        </p>
        <span className="pt-2">
          #SustainableLiving #LoveOurPlanet
          <span className="py-2" aria-label="computer" role="img">
            🌍💚
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-base">4</p>
          <p className=" text-default-400 text-base">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-base">97.1K</p>
          <p className="text-default-400 text-base">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}

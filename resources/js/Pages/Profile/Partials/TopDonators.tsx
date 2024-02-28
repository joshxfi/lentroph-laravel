import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function TopDonators() {
  return (
    <div>
      <p className="font-bold mb-4 mt-8 text-gray-800 text-lg">Top Donators</p>

      <AvatarGroup isBordered isGrid max={7}>
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/300?u=a042581f4f29026707d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/300?u=a042581f4e29026710d"
        />
        <Avatar
          color="secondary"
          src="https://i.pravatar.cc/300?u=a042581f4e29026712d"
        />
      </AvatarGroup>
    </div>
  );
}

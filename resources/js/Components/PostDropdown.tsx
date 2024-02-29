import { FormEventHandler } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useForm } from "@inertiajs/react";

export default function PostDropdown({ postId }: { postId: number }) {
  const { setData, delete: destroy } = useForm({
    postid: 0,
  });

  const deletePost: FormEventHandler = (e) => {
    e.preventDefault();
    setData("postid", postId);

    destroy(route("post.destroy"));
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Donate</DropdownItem>
        <DropdownItem key="copy">Follow</DropdownItem>
        <DropdownItem key="edit">Share</DropdownItem>
        <DropdownItem
          onClick={deletePost}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Delete post
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

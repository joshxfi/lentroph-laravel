import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DonateButton() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" color="secondary" size="lg">
          Donate
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
      >
        <DropdownItem key="card">Card</DropdownItem>
        <DropdownItem key="gcash">GCash</DropdownItem>
        <DropdownItem key="maya">Maya</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

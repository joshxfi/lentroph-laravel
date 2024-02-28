import { useForm } from "@inertiajs/react";
import { Button, Textarea } from "@nextui-org/react";

export default function AddPost() {
  const { data, setData, post, processing } = useForm({
    title: "testing",
    content: "",
  });

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();

    post(route("post.store"));
    setData({ title: "testing", content: "" });
  };

  return (
    <form onSubmit={submit} className="w-full flex flex-col gap-2 mb-8">
      <Textarea
        variant="underlined"
        size="lg"
        placeholder="Enter your post message"
        value={data.content}
        onChange={(e) => setData("content", e.target.value)}
        classNames={{
          input: "rounded-lg border-none pt-4",
        }}
      />

      <Button type="submit" disabled={processing} color="secondary" size="lg">
        Post
      </Button>
    </form>
  );
}

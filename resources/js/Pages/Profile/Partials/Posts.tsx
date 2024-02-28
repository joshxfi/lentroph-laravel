import Post from "@/Components/Post";
import { Tab, Tabs } from "@nextui-org/react";

export default function Posts() {
  return (
    <section>
      <Tabs color="secondary" variant="underlined" size="lg" aria-label="Tabs variants">
        <Tab key="recent" title="Recent" />
        <Tab key="featured" title="Featured" />
        <Tab key="top" title="Top" />
      </Tabs>

      <div className="space-y-8 mt-8">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}

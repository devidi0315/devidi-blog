import Tag from "../Tag";

const Tags = [
  "태그1", "태그2", "태그3", "태그4"
]

const CategorySidebar = () => {
  return (
    <aside className="p-4 bg-cardBg rounded-lg w-[200px] max-h-[300px]">
      {Tags.map(tag => <Tag text={tag} key={tag} />) }
    </aside>
  );
}

export default CategorySidebar;
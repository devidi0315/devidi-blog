interface PostItemProps {
  title?: string;
  content?: string;
  date?: string;
  slug: string;
}

const PostItem = ({
  title, date, slug, content
}: PostItemProps) => {
  return (
    <div className="flex flex-col shadow-sm hover:shadow-xl p-4 transition-shadow duration-150">
      <h3 className="text-h3">{title}</h3>
      <p className="text-body2 text-text2">{content}</p>
    </div>
  )
}

export default PostItem;
interface TagProps {
  text?: string;
}

const Tag = ({text}: TagProps) => {

  return (
    <span className="px-1 text-sm italic inline-block">
      #{text}
    </span>
  )
}

export default Tag
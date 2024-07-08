import { ForwardRefEditor } from "@/src/component/Editor/ForwardRefEditor"
import PostEditor from "@/src/component/Editor/PostEditor"
import { MDXEditorMethods } from "@mdxeditor/editor"
import { useRef } from "react"

export default function Page() {

  return (
    <div>
      <PostEditor markdown="# Hello World" />
    </div>
  )
}
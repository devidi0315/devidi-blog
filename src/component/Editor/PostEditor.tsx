'use client'

import { useRef } from "react";
import { ForwardRefEditor } from "./ForwardRefEditor"
import { MDXEditorMethods } from "@mdxeditor/editor";

interface PostEditorProps {
  markdown: string;
}

const PostEditor = ({ markdown }: PostEditorProps) => { 


  const ref = useRef<MDXEditorMethods>(null)

  return (
    <div onClick={() => ref.current?.focus()} className="h-full overlfow-y-scroll">
      <ForwardRefEditor markdown={markdown} ref={ref} />
    </div>
  )
}

export default PostEditor;
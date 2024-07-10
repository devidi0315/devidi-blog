'use client'

import { RefObject, useRef } from "react";
import { ForwardRefEditor } from "./ForwardRefEditor"
import { MDXEditorMethods } from "@mdxeditor/editor";

interface PostEditorProps {
  markdown: string;
  placeholder?: string;
  editorRef?: RefObject<MDXEditorMethods>
}

const PostEditor = ({ markdown, placeholder, editorRef }: PostEditorProps) => { 


  return (
    <div onClick={() => editorRef?.current?.focus()} className="h-full overlfow-y-scroll">
      <ForwardRefEditor markdown={markdown} ref={editorRef} placeholder={placeholder} />
    </div>
  )
}



export default PostEditor;
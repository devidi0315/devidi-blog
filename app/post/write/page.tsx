'use client'
import Button from "@/src/component/Button/Button"
import { ForwardRefEditor } from "@/src/component/Editor/ForwardRefEditor"
import PostEditor from "@/src/component/Editor/PostEditor"
import { MDXEditorMethods } from "@mdxeditor/editor"
import { useRef, useState } from "react"

export default function Page() {
  
  const editorRef = useRef<MDXEditorMethods>(null)
  const [title, setTitle] = useState("");

  const handleSave = () => {
    const markdown = editorRef.current?.getMarkdown()
    console.log(markdown);
  }

  return (
    <div className="flex flex-row gap-2 mt-4 justify-start items-start">
      <div className="flex-1 p-4">
        <input className="input bg-transparent text-h1 w-full border-b mb-2" placeholder="제목입력" onChange={(e) => setTitle(e.target.value)} value={title} />
        <PostEditor markdown="" placeholder="내용을 입력하세요" editorRef={editorRef}/>
      </div>
      <div className="w-[300px] bg-cardBg rounded-lg p-4">
        <h3>썸네일 업로드</h3>
        <div className="w-full h-[120px] bg-bg"></div>
        <h3>설명</h3>
        <textarea className="w-full bg-transparent border-bg border rounded-md" rows={4}></textarea>
        <div className="flex flex-row gap-4">
          <Button hover="outlineDefault" border="default" className="flex-1">임시저장</Button>
          <Button hover="success" border="default" className="flex-1" onClick={handleSave}>저장하기</Button>
        </div>
      </div>
    </div>
  )
}
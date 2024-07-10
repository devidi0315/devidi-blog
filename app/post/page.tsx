import PostItem from "@/src/component/Post/PostItem"
import CategorySidebar from "@/src/component/Sidebar/CategorySidebar"
import Link from "next/link"

const PostItemList = [
  {
    title: "제목 1",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-01",
    slug: "title-1"
  },
  {
    title: "제목 2",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-02",
    slug: "title-2"
  },
  {
    title: "제목 3",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-03",
    slug: "title-3"
  },
  {
    title: "제목 4",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-04",
    slug: "title-4"
  },
  {
    title: "제목 5",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-05",
    slug: "title-5"
  },
  {
    title: "제목 6",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-06",
    slug: "title-6"
  },
  {
    title: "제목 7",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-07",
    slug: "title-7"
  },
  {
    title: "제목 8",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-08",
    slug: "title-8"
  },
  {
    title: "제목 9",
    description: "설명 하나하나 쭈욱 길게좀써줘봐 제발",
    date: "2021-10-09",
    slug: "title-9"
  },
  {
    title: "제목 10",
    description: "설명 하나하나 쭈욱 길게좀",
    date: "2021-10-10",
    slug: "title-10"
  }
]

export default function Page() {


  return (
    <main className="flex flex-row gap-4 mt-4">
      <section>
        <CategorySidebar />
      </section>
      <section className="flex flex-col gap-4">
        {PostItemList.map((item) => (
          <Link href={`/post/${item.slug}`} key={item.slug}>
            <div className="hover:cursor-pointer">
              <PostItem slug={item.slug} title={item.title} content={item.description} />
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
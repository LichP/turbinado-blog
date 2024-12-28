import React from "react"
import type { Post } from "@/lib/types"
import Link from 'next/link'
import TagLabel from "../ui/TagLabel"

export interface PostListProps {
    posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
    return (
        <ul className="list-none space-y-4 px-0">
            {posts.map((post) => {
                if (post) {
                    const publishedDate = post.date.toLocaleDateString('en-GB', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })

                    return (
                        <li key={post.slug}>
                            <p className="font-bvs text-zinc-750 dark:text-zinc-400">{publishedDate}</p>
                            <h3><Link href={`/post/${post.slug}`}>{post.title}</Link></h3>
                            <p>{post.description}</p>
                            {post.tags && post.tags.length > 0 ? (
                                <ul className="list-none px-0 flex flex-wrap gap-x-4 gap-y-1.5 items-baseline font-bvs text-zinc-750 dark:text-zinc-400">
                                    {post.tags.map((tag, index) => {
                                        if (tag) {
                                            return (
                                                <li key={index}>
                                                    <TagLabel tag={tag} />
                                                </li>
                                            )
                                        }
                                        else {
                                            return null;
                                        }
                                    })}
                                </ul>
                            ) : null}
                        </li>
                    )
                }
                else {
                    return null;
                }
            })}
        </ul>
    )
}

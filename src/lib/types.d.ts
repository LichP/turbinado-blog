export type Post = {
    title: string
    slug: string
    date: Date
    tags: Tag[]
    description: string
    body: string
    lastModified?: Date
    views?: number
}

export type Tag = string | {
    [key: string]: string
}
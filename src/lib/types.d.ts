export type Post = {
    title: string
    slug: string
    date: Date
    tags: string[]
    description: string
    body: string
    lastModified?: Date
    views?: number
}

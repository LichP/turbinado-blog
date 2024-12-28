import type { Tag } from '@/lib/types'

export function tagSlug(tag: Tag): string {
    if (typeof tag === "string") {
        return tag as string
    }
    return Object.keys(tag)[0]
}

export function tagTitle(tag: Tag): string {
    if (typeof tag === "string") {
        return tag as string
    }
    return tag[Object.keys(tag)[0]]
}

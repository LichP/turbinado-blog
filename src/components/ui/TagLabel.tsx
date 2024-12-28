import Label from '@/components/ui/Label'
import { Tag } from '@/lib/types'
import { tagSlug, tagTitle } from '@/lib/tag-data'
import Link from 'next/link'

export interface TagProps {
    tag: Tag
}

export default function TagLabel({ tag }: TagProps) {
    return (
        <Label className="hover:bg-sugar-100">
            <Link className="text-inherit hover:text-sugar-700" href={`/tag/${tagSlug(tag)}`}>{tagTitle(tag)}</Link>
        </Label>
    )
}
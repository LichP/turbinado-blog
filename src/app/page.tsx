import getPosts from '@/lib/get-posts'
import Image from 'next/image'
import Link from 'next/link'

async function getPostsByDateDesc() {
    const posts = await getPosts()
    return posts.sort((a, b) => (b?.date.getTime() ?? 0) - (a?.date.getTime() || 0))
}

export default async function Home() {
    const posts = await getPostsByDateDesc()
    return (
        <main>
            <header className="flex justify-between mb-4">
                <hgroup>
                    <h1 className="py-4 text-[2.5rem] md:text-8xl font-bvs tracking-widest font-normal">
                        <Link href="/" className="text-zinc-950 dark:text-white hover:text-zinc-950 hover:dark:text-white no-underline hover:underline">turbinado</Link>
                    </h1>
                    <p className="text-sm md:text-lg">
                        The blog of Phil Stewart, a UK web developer and tech geek.
                    </p>
                </hgroup>
                <div className="relative min-w-16 md:min-w-40">
                    <Image src="/images/t-sugary2.svg" alt="Turbinado Logo" fill={true} />
                </div>
            </header>
            <section className="space-y-4 my-4">
                <h2>
                    About
                </h2>
                <p>
                    My name's Phil, and I'm currently Senior Web Developer
                    for <a href="https://www.imperialcollegeunion.org">Imperial College Union</a>,
                    the <a href="https://en.wikipedia.org/wiki/Students%27_union">students' union</a> of <a href="https://www.imperial.ac.uk">Imperial College London</a>.
                </p>
            </section>
            <section className="space-y-4 my-4">
                <h2>Blogs</h2>
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
                                </li>
                            )
                        }
                        else {
                            return null;
                        }
                    })}
                </ul>
            </section>
        </main>
    )
}

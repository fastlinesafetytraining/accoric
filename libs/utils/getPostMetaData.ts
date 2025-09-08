import fs from 'fs'
import matter from 'gray-matter'
import { PostMetaDataProps } from '@/types/PostMetaDataProps'

export default function getPostMetaData(): PostMetaDataProps[] {
    const folder = 'posts/'
    const files = fs.readdirSync(folder)
    const onlyMarkdownPosts = files.filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))

    // Get Gray matter data from each file
    const posts = onlyMarkdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            tag: matterResult.data.tag,
            slug: fileName.replace('.mdx', '').replace('.md', ''),
            author: matterResult.data.author,
            content: matterResult.content,
            image: matterResult.data.image,
            imageAlt: matterResult.data.imageAlt,
        }
    })

    return posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}
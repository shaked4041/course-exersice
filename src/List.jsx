import posts from '../posts[1].json'
import Article from './Article'

export default function List() {
    console.log(posts)

    return (
        <div className='list'>
            {posts.map(a => <Article key={a.id} coverImage={a.coverImage} date={a.date} title={a.title} intro={a.intro} />)}
            {/* <Article props/> */}
        </div>
    )
}

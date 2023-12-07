import Header from './Header'
import List from './List'
import posts from '../posts[1].json'

// const categories = []
// posts.forEach((f,c) => { if (!categories.includes(f.tags.c)) posts.push(f.tags) })


export default function Homepage() {
    // const [filtered, setFiltered] = useState(props.posts.tags)
  
    // const hanleColor = (c) => {
    //   setFiltered(c ? posts.filter(f => f.tags == c) : fruits)
    // }
return (
    <div className='homepage'>
        <Header/>
        <div className='subTitle'>Popular topics</div>
        <div className='categories'>
<span className='span'>All</span>
<span className='span'>Adventure</span>
<span className='span'>Travel</span>
<span className='span'>Fashion</span>
<span className='span'>Technology</span>
<span className='span'>Branding</span>

        </div>
        <List />
    </div>
  )
}

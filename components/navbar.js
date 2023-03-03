import Link from 'next/link'
import navStyle from '../components/layout.module.css'


export default function Navegacion () {
    return(
        <div className={navStyle.mainBox}>
                <p className={navStyle.navLogo}>EMINENCES SQUAD</p>
                <Link className={navStyle.link} href='/'>Home</Link>
                <Link className={navStyle.link} href='/posts/post_index'>Posts</Link>
                <Link className={navStyle.link} href='/posts/post_index'>Contact</Link>
        </div>
    )
}
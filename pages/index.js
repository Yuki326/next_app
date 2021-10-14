import Header from './header'
import Link from 'next/link'
export default function Home() {
  const title="index"
  return(
    <div>
      <Header title={title} />
      <h1 className="bg-primary px-3 text-white display-4">
      React</h1>
      <Link href="/other">
        <a>Go to Other page &gt;&gt;</a>
      </Link>
    </div>
  )
}

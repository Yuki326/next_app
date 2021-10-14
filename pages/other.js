import Header from './header'
import Link from 'next/link'

export default function Other(){
  const title="Other"
  return(
    <div>
      <Header title={title} />
      <Link href="/">
        test
      </Link>
    </div>
  )
}
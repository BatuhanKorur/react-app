import Layout from '../components/layout.tsx'
import { Link } from 'react-router-dom'

export default function HomePage(){
  return (
    <Layout>
      <div className="text-5xl pb-10">👋</div>
      <Link to="/rick-and-morty"
            className="underline underline-offset-2 opacity-70 transition duration-200 ease-in-out hover:opacity-100">Go
        to Rick and
        Morty</Link>
    </Layout>
  )
}
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page cannot be found!</h2>
            <Link href="/"><p>Go back</p></Link>
        </div>
  )
}
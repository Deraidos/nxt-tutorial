import { useRouter } from "next/router";

export default function BlogPostDetail() {
    const router = useRouter()
    const postId = router.query.postId
    return ( 
        <h2>Post detail {postId}</h2>
     );
}
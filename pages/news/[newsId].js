import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
    // same as useState
    // initial undefined (first render), second time evaluation = newsId
    const router = useRouter();

    const newsId = router.query.newsId;

    // Send request to backend API
    // to fetch the news item with newsId (if we had an API)

    return (
        <>
        <h1>The Detail Page</h1>
        </>
    )
}

export default DetailPage;
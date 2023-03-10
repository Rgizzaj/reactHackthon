import ArtistDetail from "./ArtistDetail";

const routes=[
    {
        path: '/',
        element: <App />
    },
    {
        path: '/releases',
        element: <ArtistDetail />
    }
]

export default routes
import ArtistDetail from "./ArtistDetail";
import Homepage from "./Homepage";

const routes=[
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/releases',
        element: <ArtistDetail />
    },
    {
        path: '/artist/:id',
        element: <ArtistDetail />
    }
]

export default routes
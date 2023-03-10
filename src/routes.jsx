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
    }
]

export default routes
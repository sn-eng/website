import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router'

//Suspense Loader
import SuspenseLoader from '../components/suspenseLoader'

//Layouts
import ClientLayout from '../layouts/ClientLayout'
import AdminLayout from '../layouts/AdminLayout'
import BaseLayout from '../layouts/BaseLayout'

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    )

//General Pages
const Landing = Loader(lazy(() => import('../content/landing')))
const About = Loader(lazy(() => import('../content/about')))
const Blog = Loader(lazy(() => import('../content/blog')))
const Contact = Loader(lazy(() => import('../content/contact')))

//Admin Pages
const AdminBlog = Loader(lazy(() => import('../admin/pages/blog')))
const Login = Loader(lazy(() => import('../admin/pages/login')))

//Add Pages
const AddArticle = Loader(
    lazy(() => import('../admin/components/Add/AddArticle')),
)

//privacy policy and terms and conditions
const Terms = Loader(lazy(() => import('../content/terms')))
const PrivacyPolicy = Loader(lazy(() => import('../content/privacy')))

const routes: RouteObject[] = [
    {
        path: '',
        element: <ClientLayout />,
        children: [
            {
                path: '/',
                element: <Landing />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'blog',
                element: <Blog />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'terms',
                element: <Terms />,
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy />,
            },
        ],
    },
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: 'pinda',
                element: <Login />,
            },
        ],
    },
    {
        path: 'royalty',
        element: <AdminLayout />,
        children: [
            {
                path: 'blog',
                element: <AdminBlog />,
            },
            {
                path: 'add/blog',
                element: <AddArticle />,
            },
        ],
    },
]

export default routes

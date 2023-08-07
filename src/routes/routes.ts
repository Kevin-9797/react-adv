import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () =>  JSX.Element; 


interface Route{
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}


const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyPage" */ '../01-lazyload/layout/LazyLayout'));

const Lazy1 = lazy( () => import( /* webpackChunkName: "LazyPage" */ '../01-lazyload/pages/LazyPage'));
const NoLazy = lazy( () => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/NoLazy'));
const Lazy3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]

export default routes;
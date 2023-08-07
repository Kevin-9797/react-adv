import { BrowserRouter,Route,Routes,NavLink,Navigate } from "react-router-dom"
import logo from '../logo.svg'
import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index"


export const Navigation = () => {
  return (
    <BrowserRouter>

        <div className="main-layout">
            <nav>
                <img src={ logo }  alt="react-logo"/>
                <ul>
                    <li>
                        <NavLink to="/lazy" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >Lazypage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >Lazypage2</NavLink>

                    </li>
                    <li>
                        <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'nav-active' : ''  }>Lazypage3</NavLink>

                    </li>
                </ul>
            </nav>
<Routes>
    <Route path="lazy" element={ <LazyPage /> } />
    <Route path="lazy2" element={ <LazyPage2 /> } />
    <Route path="lazy3" element={ <LazyPage3 /> } />

    <Route path="/*" element={ <Navigate to="/lazy" />} />

</Routes>
        </div>

    </BrowserRouter>
  )
}

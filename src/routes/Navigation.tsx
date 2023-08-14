import { BrowserRouter,Route,Routes,NavLink,Navigate } from "react-router-dom"
import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from "react";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import { FormikYupPage ,
         FormikAbstraccion,
         FormikComponents,
         FormikBasicPage} from '../03-forms/pages/';

FormikAbstraccion
export const Navigation = () => {


        return (
      
              <BrowserRouter>
      
                      <div className="main-layout">
                              <nav>
                                  <img src={ logo }  alt="react-logo"/>
                                  <ul>
                                        <li>
                                            <NavLink to="/shopping-page" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >ShoppingPage</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >Formik Basic</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >Formik Yup</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/formik-component" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >Formik Component</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/formik-abstraction" className={ ({isActive}) => isActive ? 'nav-active' : ''  } >Formik Abstraction</NavLink>
                                        </li>
                                  </ul>
                              </nav>
                          <Routes>
                               <Route path="/shopping-page" element={<ShoppingPage  /> } />
                               <Route path="/formik-basic" element={<FormikBasicPage  /> } />
                               <Route path="/formik-yup" element={<FormikYupPage  /> } />
                               <Route path="/formik-component" element={<FormikComponents  /> } />
                               <Route path="/formik-abstraction" element={<FormikAbstraccion  /> } />


                          
                               <Route path="/*" element={<Navigate replace to="shopping-page" />} />
      
                          </Routes>
                      </div>
      
              </BrowserRouter>
      
        )
      }

export default Navigation;



//Esta es la parte con el lazyload implementado


//El suspense sirve para decirle a react al cargar un modulo o component, espera pero mientras estes cargandolo haz lo siguiente
// export const Navigation = () => {


//     return (
//       <Suspense fallback={ <span>Loading... </span> }>
  
//           <BrowserRouter>
  
//                   <div className="main-layout">
//                           <nav>
//                               <img src={ logo }  alt="react-logo"/>
//                               <ul>
//                                   {
//                                       routes.map( ({ to, name }) => (
//                                           <li key={ name }>
//                                               <NavLink to={ to } className={ ({isActive}) => isActive ? 'nav-active' : ''  } >{ name }</NavLink>
//                                           </li>
//                                       ))
//                                   }
                                  
//                               </ul>
//                           </nav>
//                       <Routes>
//                           {
//                               routes.map( ({ path, Component }) => (
                                  
//                                   <Route key={ path }
//                                       path={ path }
//                                       element={ <Component /> } />
//                               ))
//                           }
//                            <Route path="/*" element={<Navigate replace to={routes[0].to} />} />
  
//                       </Routes>
//                   </div>
  
//           </BrowserRouter>
  
//       </Suspense>
//     )
//   }
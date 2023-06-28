// import { Routes as RoutesWrapper, Route } from "react-router-dom";
// import { navbarItems } from "./const";

// const Routes = () => {
//   return (
//     <RoutesWrapper>
//       {navbarItems.map(({ path, Component }) => (
//         <Route key={path} path={path} element={<Component />} />
//       ))}
//     </RoutesWrapper>
//   );
// };

// export default Routes;

import { Routes as RoutesWrapper, Route } from "react-router-dom";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import Contacts from "../pages/Contacts/Contacts";

const Routes = ({ routes }) => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<About />} /> {/* Pagrindinis puslapis */}
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Works />} />
      <Route path="/contact" element={<Contacts />} />
    </RoutesWrapper>
  );
};

export default Routes;

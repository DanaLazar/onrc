import ClayButton from '@clayui/button';
import ClayNavigationBar from '@clayui/navigation-bar';
import { NavLink } from "react-router-dom";
const spritemap = "/icons.svg";

const Navigation = () => {
   
  return (
      <>
    <ClayNavigationBar spritemap={spritemap} className='bg-secondary text-white'>
            <ClayNavigationBar.Item>
            <ClayButton>
              <NavLink
                className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/despre"               
              >
                Despre ONRC
              </NavLink>
              </ClayButton>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
             <ClayButton>
              <NavLink
                 className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/statistici"
              >
                Statistici
              </NavLink>
              </ClayButton>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
               <ClayButton>
              <NavLink
                 className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/legislatie"
              >
                Legislatie
              </NavLink>
               </ClayButton>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
               <ClayButton>
               <NavLink
                className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/public"                
              >
                Informatii de interes public
              </NavLink>
               </ClayButton>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
             <ClayButton>
              <NavLink
                 className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/media"
              >
                Media
              </NavLink>
               </ClayButton>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
             <ClayButton>
              <NavLink
                className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/personal"
              >
                Date cu caracter personal
              </NavLink>
               </ClayButton>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
             <ClayButton>
              <NavLink
                className={({ isActive }) => isActive ? "active text-white" : "text-white"}
                to="/contact"
              >
                Contact
              </NavLink>
               </ClayButton>
            </ClayNavigationBar.Item>
          </ClayNavigationBar>
         </>       
  )
}

export default Navigation
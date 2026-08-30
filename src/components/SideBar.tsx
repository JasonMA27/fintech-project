import { IoIosSettings, IoIosHelpCircleOutline } from "react-icons/io";
import {
  TbLogout2,
  TbLayoutDashboardFilled,
  TbAlertTriangle,
  TbReport,
  TbFileSearch,
} from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";

import { NavLink } from "react-router";

const styles = {
  link: "flex items-center gap-2 hover:bg-white hover:text-slate-800 px-2 py-1 rounded-md transition-colors duration-300",
};

export const SideBar = () => {
  return (
    <nav className="h-full overflow-y-auto p-2 rounded-2xl bg-blue-600 text-white w-48 shrink-0">
      <div>
        <img
          src="src/assets/longLogo.png"
          alt=""
          className="w-36 p-1 ml-5 rounded"
        />
      </div>
      <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
        <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
          <IoIosHelpCircleOutline size={20} />
          <div className="text-start">
            <span className="text-sm font-semibold block">Tom is Loading</span>
            <span className="text-xs block text-stone-500">tom@hover.dev</span>
          </div>
        </button>
      </div>
      <div className="p-2">
        <p>Menu</p>
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={styles.link}>
              <TbLayoutDashboardFilled size={20} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={styles.link}>
              <GrTransaction size={20} />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/alerts" className={styles.link}>
              <TbAlertTriangle size={20} />
              Alerts
            </NavLink>
          </li>
          <li>
            <NavLink to="/cases" className={styles.link}>
              <TbFileSearch size={20} />
              Cases
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={styles.link}>
              <TbReport size={20} />
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/80 mx-2"></div>
      <div className="p-2">
        <p>General</p>
        <ul className="space-y-2">
          <li>
            <NavLink to="/settings" className={styles.link}>
              <IoIosSettings size={20} />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className={styles.link}>
              <IoIosHelpCircleOutline size={20} />
              Help
            </NavLink>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <TbLogout2 size={20} />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

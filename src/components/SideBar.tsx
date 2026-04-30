import { IoIosSettings, IoIosHelpCircleOutline } from "react-icons/io";
import { TbLogout2, TbLayoutDashboardFilled, TbAlertTriangle, TbReport, TbFileSearch } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";

const styles = {
  link:"flex items-center gap-2 hover:bg-white hover:text-slate-800 px-2 py-1 rounded-md transition-colors duration-300",
};

export const SideBar = () => {
  return (
    <nav className="h-full md:space-y-6 p-1 rounded-2xl bg-blue-600 text-white w-48">
      <img src="src/assets/Logo.png" alt="" className="w-36 p-1 ml-5 rounded" />
      <div className="p-2">
        <p>Menu</p>
        <ul className="space-y-2">
          <li>
            <a href="#" className={styles.link}>
              <TbLayoutDashboardFilled size={20}/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <GrTransaction size={20}/>
              Transactions
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <TbAlertTriangle size={20}/>
              Alerts
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <TbFileSearch size={20}/>
              Cases
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <TbReport size={20}/>
              Reports
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/80 mx-2"></div>
      <div className="p-2">
        <p>General</p>
        <ul className="space-y-2">
          <li>
            <a href="#" className={styles.link}>
              <IoIosSettings size={20} />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <IoIosHelpCircleOutline size={20}/>
              Help
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              <TbLogout2 size={20}/>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

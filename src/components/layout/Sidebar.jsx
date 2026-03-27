import { NAV_SECTIONS } from "../../constants/nav";
import { NAV_ICON_MAP } from "../ui/Icons";

const ACTIVE_NAV_ID = "knowledge-base";

function NavItem({ id, label }) {
  const IconComponent = NAV_ICON_MAP[id];
  const isActive = id === ACTIVE_NAV_ID;

  return (
    <div
      className={`
        flex items-center gap-2.5 py-[7px] text-[13.5px] font-medium
        cursor-pointer transition-all duration-150
        ${
          isActive
            ? "bg-indigo-50 text-primary border-l-[3px] border-primary pl-[11px] pr-3 mx-0 rounded-r-lg"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3.5 mx-2 rounded-lg"
        }
      `}
    >
      {IconComponent && (
        <span className={isActive ? "text-primary" : "text-gray-400"}>
          <IconComponent />
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}

function NavSection({ label, items }) {
  return (
    <div className="mb-1">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-4 pt-3 pb-1.5">
        {label}
      </p>
      {items.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[210px] bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto py-4 scrollbar-none">
      {NAV_SECTIONS.map((section) => (
        <NavSection key={section.label} {...section} />
      ))}
    </aside>
  );
}

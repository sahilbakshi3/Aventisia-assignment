import { LogoIcon, ChevronDownIcon, SearchIcon, BellIcon } from "../ui/Icons";
import logo from "../../assests/logo.png";

export default function Topbar() {
  return (
    <header
      className="h-[52px] flex items-center px-5 gap-3 flex-shrink-0 z-50"
      style={{
        background:
          "linear-gradient(90deg, #16143a 0%, #423c7a 50%, #16143a 100%)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-white font-bold text-[15px] tracking-tight flex-shrink-0">
        <div className="w-7 h-7 flex items-center justify-center">
          <img
            src={logo}
            alt="Worcspace logo"
            className="w-7 h-7 object-contain"
          />
        </div>
        Worcspace
      </div>

      {/* Workspace pill — rounded-full, filled background, no border */}
      <button className="flex items-center gap-1.5 bg-white/[0.15] rounded-full px-3.5 py-1.5 text-white text-[13px] font-medium hover:bg-white/[0.22] transition-colors">
        Worcspace 1
        <ChevronDownIcon className="text-white/70" />
      </button>

      {/* Global search */}
      <div className="flex-1 max-w-[480px] mx-auto relative">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40">
          <SearchIcon size={13} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white/[0.08] rounded-lg py-1.5 pl-8 pr-10 text-white/70 text-[13px] placeholder-white/40 outline-none focus:bg-white/[0.14] focus:text-white/90 transition-all font-sans border-none"
        />
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[11px] text-white/40 font-mono">
          ⌘K
        </span>
      </div>

      {/* Right actions — no borders, no bg boxes */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="relative w-[34px] h-[34px] flex items-center justify-center text-white/65 hover:text-white transition-colors rounded-lg hover:bg-white/10">
          <BellIcon size={17} />
          {/* <span className="absolute top-[7px] right-[7px] w-1.5 h-1.5 bg-red-500 rounded-full" /> */}
        </button>

        {/* Avatar — circular, primary bg */}
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-[11px] font-bold cursor-pointer select-none">
          GK
        </div>
      </div>
    </header>
  );
}

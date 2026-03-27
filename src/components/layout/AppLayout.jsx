import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* Main area is flex-col so page content can push pagination to bottom */}
        <main className="flex-1 flex flex-col overflow-hidden bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

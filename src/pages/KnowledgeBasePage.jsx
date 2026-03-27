import { Search, Plus } from "lucide-react";
import Button from "../components/ui/Button";
import KBGrid from "../components/knowledge-base/KBGrid";
import KBPagination from "../components/knowledge-base/KBPagination";
import CreateKBModal from "../components/knowledge-base/CreateKBModal";
import Toast from "../components/ui/Toast";
import { useKnowledgeBase } from "../hooks/useKnowledgeBase";

export default function KnowledgeBasePage() {
  const {
    cards,
    searchQuery,
    setSearchQuery,
    isModalOpen,
    openModal,
    closeModal,
    createKB,
    toast,
    rowsPerPage,
    setRowsPerPage,
  } = useKnowledgeBase();

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable area: header + cards */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 bg-white">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] font-bold text-gray-900 tracking-tight">
            Knowledge Base
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-[7px]">
              <Search size={13} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-[13px] font-sans text-gray-800 placeholder-gray-400 outline-none w-44 bg-transparent"
              />
            </div>
            <Button variant="primary" onClick={openModal}>
              <Plus size={20} />
              Create New
            </Button>
          </div>
        </div>

        {/* Card Grid */}
        <KBGrid cards={cards} />
      </div>

      {/* Pagination */}
      <div className="flex-shrink-0 px-6 py-3 border-t border-gray-200 bg-white">
        <KBPagination
          totalRows={cards.length}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={setRowsPerPage}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CreateKBModal onClose={closeModal} onSubmit={createKB} />
      )}

      <Toast message={toast} />
    </div>
  );
}

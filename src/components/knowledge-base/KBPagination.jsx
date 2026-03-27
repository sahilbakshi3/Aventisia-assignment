import {
  PageFirstIcon,
  PagePrevIcon,
  PageNextIcon,
  PageLastIcon,
} from "../ui/Icons";

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function KBPagination({
  totalRows,
  rowsPerPage,
  onRowsPerPageChange,
}) {
  const pageBtn =
    "w-7 h-7 flex items-center justify-center border border-gray-600 rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    // No bg, no border — just sits on the gray page background
    <div className="flex items-center justify-between px-2 py-2 text-[13px] text-gray-900">
      <span className="font-bold ">{totalRows} rows</span>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="font-bold">Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
            className="border border-gray-200 rounded-md px-2 py-1 text-[13px] font-sans text-gray-800 outline-none cursor-pointer bg-white focus:border-primary"
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <span className="font-bold">page 1 of 1</span>

        <div className="flex items-center gap-1">
          <button className={pageBtn} disabled>
            <PageFirstIcon />
          </button>
          <button className={pageBtn} disabled>
            <PagePrevIcon />
          </button>
          <button className={pageBtn} disabled>
            <PageNextIcon />
          </button>
          <button className={pageBtn} disabled>
            <PageLastIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

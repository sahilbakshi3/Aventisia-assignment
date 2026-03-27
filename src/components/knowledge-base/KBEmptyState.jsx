import { EmptyDocIcon } from '../ui/Icons'

export default function KBEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center mb-6">
      <div className="w-16 h-16 bg-gray-100 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center mb-3">
        <EmptyDocIcon />
      </div>
      <p className="text-[14px] text-gray-400 font-medium">No Knowledge Bases found</p>
      <p className="text-[12.5px] text-gray-300 mt-1">Click "Create New" to get started</p>
    </div>
  )
}

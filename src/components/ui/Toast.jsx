export default function Toast({ message }) {
  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-toastIn">
      <div className="flex items-center gap-2.5 bg-gray-900 text-white px-4 py-3 rounded-xl text-[13.5px] font-medium shadow-modal">
        <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
        {message}
      </div>
    </div>
  )
}

import { DotsVerticalIcon } from "../ui/Icons";

export default function KBCard({ title, description, createdOn }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[18px] flex flex-col gap-2.5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      <div className="flex items-start justify-between">
        <h3 className="text-[14px] font-semibold text-gray-900">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-0.5 rounded transition-all opacity-0 group-hover:opacity-100">
          <DotsVerticalIcon />
        </button>
      </div>
      <p className="text-[12.5px] text-gray-500 leading-relaxed flex-1 line-clamp-3">
        {description}
      </p>
      <div className="text-[11.5px] text-gray-400 pt-2.5 border-t border-gray-100 mt-auto">
        Created On: {createdOn}
      </div>
    </div>
  );
}

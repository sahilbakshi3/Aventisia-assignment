// Generic form field wrapper used inside modals / forms.
// Supports input, textarea, and select via the `as` prop.

export default function FormField({
  label,
  required = false,
  hint,
  as: Tag = "input",
  options = [], // used when Tag === 'select'
  className = "",
  ...props
}) {
  const inputClass = "form-input-base " + className;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[13px] font-semibold text-gray-800">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
          {hint && (
            <span className="ml-1.5 font-normal text-[11px] text-gray-400">
              {hint}
            </span>
          )}
        </label>
      )}

      {Tag === "select" ? (
        <div className="relative">
          <select
            className={inputClass + " appearance-none pr-9 cursor-pointer"}
            {...props}
          >
            {options.map(({ value, label: optLabel }) => (
              <option key={value} value={value}>
                {optLabel}
              </option>
            ))}
          </select>
          {/* custom chevron */}
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : Tag === "textarea" ? (
        <textarea className={inputClass + " resize-none"} {...props} />
      ) : (
        <input className={inputClass} {...props} />
      )}
    </div>
  );
}

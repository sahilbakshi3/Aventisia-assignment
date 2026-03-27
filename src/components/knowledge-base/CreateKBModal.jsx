import { useState } from "react";
import { CloseIcon } from "../ui/Icons";
import Button from "../ui/Button";
import FormField from "../ui/FormField";
import { VECTOR_STORES, LLM_EMBEDDING_MODELS } from "../../constants/kb";

const INITIAL_FORM = {
  name: "",
  description: "",
  vectorStore: VECTOR_STORES[0].value,
  llmModel: LLM_EMBEDDING_MODELS[0].value,
};

export default function CreateKBModal({ onClose, onSubmit }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name.trim()) return;
    onSubmit({ name: form.name.trim(), description: form.description.trim() });
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 animate-fadeIn"
      onClick={handleBackdrop}
    >
      {/* Right side panel */}
      <div
        className="absolute top-0 right-0 h-full w-[400px] max-w-[95vw] bg-white shadow-modal flex flex-col"
        style={{
          animation: "slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">
              Create New Knowledge Base
            </h2>
            <p className="text-[12px] text-gray-400 mt-0.5">
              Build for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-lg transition-all flex-shrink-0 ml-3"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
          <FormField
            label="Name"
            required
            hint="(Cannot be edited later)"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={set("name")}
          />
          <FormField
            label="Description"
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={set("description")}
          />
          <FormField
            label="Vector Store"
            required
            as="select"
            options={VECTOR_STORES}
            value={form.vectorStore}
            onChange={set("vectorStore")}
          />
          <FormField
            label="LLM Embedding Model"
            required
            as="select"
            options={LLM_EMBEDDING_MODELS}
            value={form.llmModel}
            onChange={set("llmModel")}
          />
        </div>

        {/* Sticky footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-2.5">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!form.name.trim()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

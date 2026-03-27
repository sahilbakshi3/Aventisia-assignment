import {
  Search,
  Bell,
  Plus,
  MoreVertical,
  X,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronDown,
  Bot,
  Brain,
  Library,
  ShieldCheck,
  Monitor,
  ListOrdered,
  Zap,
  MonitorPlay,
  FileTerminal,
  IdCard,
  CirclePlus,
} from "lucide-react";

// Re-export with semantic names
export const SearchIcon = (props) => <Search size={14} {...props} />;
export const BellIcon = (props) => <Bell size={15} {...props} />;
export const PlusIcon = (props) => <Plus size={14} {...props} />;
export const DotsVerticalIcon = (props) => (
  <MoreVertical size={14} {...props} />
);
export const CloseIcon = (props) => <X size={16} {...props} />;
export const ChevronDownIcon = (props) => <ChevronDown size={12} {...props} />;
export const PageFirstIcon = (props) => <ChevronsLeft size={12} {...props} />;
export const PagePrevIcon = (props) => <ChevronLeft size={12} {...props} />;
export const PageNextIcon = (props) => <ChevronRight size={12} {...props} />;
export const PageLastIcon = (props) => <ChevronsRight size={12} {...props} />;

// Nav icons
export const AgentsIcon = (props) => <Bot size={14} {...props} />;
export const AIModelsIcon = (props) => <Brain size={14} {...props} />;
export const LibraryIcon = (props) => <Library size={14} {...props} />;
export const PublishedIcon = (props) => <Bot size={14} {...props} />;
export const MachinesIcon = (props) => <Monitor size={14} {...props} />;
export const QueuesIcon = (props) => <ListOrdered size={14} {...props} />;
export const TriggersIcon = (props) => <Zap size={14} {...props} />;
export const JobsIcon = (props) => <MonitorPlay size={14} {...props} />;
export const ExecutionsIcon = (props) => <MonitorPlay size={14} {...props} />;
export const VaultIcon = (props) => <ShieldCheck size={14} {...props} />;
export const KnowledgeBaseIcon = (props) => (
  <FileTerminal size={14} {...props} />
);
export const KeyStoreIcon = (props) => <Library size={14} {...props} />;
export const TenantIcon = (props) => <IdCard size={14} {...props} />;
export const IntegrationsIcon = (props) => <CirclePlus size={14} {...props} />;

// Custom: Logo (no lucide equivalent)
export const LogoIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10">
    <circle
      cx="20"
      cy="34"
      r="6"
      stroke="#6C63FF"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M30 42 L42 20 L42 42"
      stroke="#6C63FF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Custom: Empty doc illustration
export const EmptyDocIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path
      d="M9 4h13l7 7v21H9V4Z"
      stroke="#D1D5DB"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M22 4v7h7"
      stroke="#D1D5DB"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M13 17h10M13 22h7"
      stroke="#D1D5DB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const NAV_ICON_MAP = {
  agents: AgentsIcon,
  "ai-models": AIModelsIcon,
  library: LibraryIcon,
  published: PublishedIcon,
  machines: MachinesIcon,
  queues: QueuesIcon,
  triggers: TriggersIcon,
  jobs: JobsIcon,
  executions: ExecutionsIcon,
  vault: VaultIcon,
  "knowledge-base": KnowledgeBaseIcon,
  "key-store": KeyStoreIcon,
  tenant: TenantIcon,
  integrations: IntegrationsIcon,
};

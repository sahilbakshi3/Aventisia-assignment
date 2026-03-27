// All sidebar navigation items organised by section.
// `id` is used to match the active route; icons are injected in Sidebar.jsx

export const NAV_SECTIONS = [
  {
    label: 'My Projects',
    items: [
      { id: 'agents',        label: 'Agents' },
      { id: 'ai-models',     label: 'AI Models' },
      { id: 'library',       label: 'Library' },
    ],
  },
  {
    label: 'Orchestrator',
    items: [
      { id: 'published',   label: 'Published' },
      { id: 'machines',    label: 'Machines' },
      { id: 'queues',      label: 'Queues' },
      { id: 'triggers',    label: 'Triggers' },
      { id: 'jobs',        label: 'Jobs' },
      { id: 'executions',  label: 'Executions' },
      { id: 'vault',       label: 'Vault' },
      { id: 'knowledge-base', label: 'Knowledge Base' },
      { id: 'key-store',   label: 'Key Store' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { id: 'tenant',       label: 'Tenant' },
      { id: 'integrations', label: 'Integrations' },
    ],
  },
]

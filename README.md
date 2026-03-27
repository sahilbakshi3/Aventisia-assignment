# Worcspace – Knowledge Base UI

React + Vite + Tailwind CSS implementation of the Knowledge Base screen from the Worcspace design.

## Tech Stack

- **Framework**: React 18 (functional components + hooks)
- **Build tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Font**: DM Sans + DM Mono (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppLayout.jsx       # Root shell: Topbar + Sidebar + main slot
│   │   ├── Topbar.jsx          # Top navigation bar
│   │   └── Sidebar.jsx         # Left sidebar with nav sections
│   ├── knowledge-base/
│   │   ├── KBCard.jsx          # Individual knowledge base card
│   │   ├── KBGrid.jsx          # 3-col card grid (delegates to KBCard / KBEmptyState)
│   │   ├── KBEmptyState.jsx    # Empty state when no cards match search
│   │   ├── KBPagination.jsx    # Rows / page info / page nav bar
│   │   └── CreateKBModal.jsx   # Modal: create new knowledge base
│   └── ui/
│       ├── Icons.jsx           # All SVG icon components + NAV_ICON_MAP
│       ├── Button.jsx          # Reusable button (primary / secondary / ghost / icon)
│       ├── FormField.jsx       # Reusable label + input / select / textarea
│       └── Toast.jsx           # Auto-dismissing success notification
├── constants/
│   ├── nav.js                  # Sidebar nav section + item definitions
│   └── kb.js                   # Vector store options, LLM models, seed card data
├── hooks/
│   └── useKnowledgeBase.js     # All KB state logic (cards, search, modal, toast)
├── pages/
│   └── KnowledgeBasePage.jsx   # Composes all KB components into one page
├── App.jsx                     # Root: wires AppLayout + KnowledgeBasePage
├── main.jsx                    # ReactDOM entry point
└── index.css                   # Tailwind directives + base / component layers
```

## Features

- ✅ Pixel-accurate replication of both screens
- ✅ Primary `#4F46E5` / Secondary `#1E1B4B` colours throughout
- ✅ "Create New" button opens modal — rest of nav is static per spec
- ✅ Modal form: Name (required, locked label), Description, Vector Store, LLM Embedding Model
- ✅ New card appears in grid on submit
- ✅ Real-time search filtering
- ✅ Success toast notification
- ✅ Empty state when search returns no results
- ✅ Reusable component architecture
- ✅ Clean separation of concerns: state in hook, UI in components, config in constants

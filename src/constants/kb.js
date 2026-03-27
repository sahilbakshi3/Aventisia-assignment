export const VECTOR_STORES = [
  { value: 'qdrant',     label: 'Qdrant' },
  { value: 'pinecone',   label: 'Pinecone' },
  { value: 'weaviate',   label: 'Weaviate' },
  { value: 'chroma',     label: 'Chroma' },
]

export const LLM_EMBEDDING_MODELS = [
  { value: 'text-embedding-ada-002',   label: 'text-embedding-ada-002' },
  { value: 'text-embedding-3-small',   label: 'text-embedding-3-small' },
  { value: 'text-embedding-3-large',   label: 'text-embedding-3-large' },
  { value: 'cohere-embed-v3',          label: 'cohere-embed-v3' },
]

const LOREM =
  "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"

export const SEED_KB_CARDS = Array.from({ length: 6 }, (_, i) => ({
  id:          i + 1,
  title:       'Test',
  description: LOREM,
  createdOn:   '14/07/2025',
}))

import { useState, useMemo } from 'react'
import { SEED_KB_CARDS } from '../constants/kb'

function todayStr() {
  const d = new Date()
  return [
    String(d.getDate()).padStart(2, '0'),
    String(d.getMonth() + 1).padStart(2, '0'),
    d.getFullYear(),
  ].join('/')
}

export function useKnowledgeBase() {
  const [cards, setCards]           = useState(SEED_KB_CARDS)
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [toast, setToast]           = useState(null)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const filteredCards = useMemo(
    () =>
      cards.filter(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [cards, searchQuery]
  )

  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const createKB = ({ name, description }) => {
    setCards((prev) => [
      ...prev,
      { id: Date.now(), title: name, description: description || 'No description provided.', createdOn: todayStr() },
    ])
    closeModal()
    showToast(`"${name}" created successfully`)
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }

  return {
    cards: filteredCards,
    totalCards: cards.length,
    searchQuery,
    setSearchQuery,
    isModalOpen,
    openModal,
    closeModal,
    createKB,
    toast,
    rowsPerPage,
    setRowsPerPage,
  }
}

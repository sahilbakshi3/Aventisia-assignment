import KBCard from "./KBCard";
import KBEmptyState from "./KBEmptyState";

export default function KBGrid({ cards }) {
  return (
    // White container with border enclosing all cards
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-2">
      {cards.length === 0 ? (
        <KBEmptyState />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card) => (
            <KBCard key={card.id} {...card} />
          ))}
        </div>
      )}
    </div>
  );
}

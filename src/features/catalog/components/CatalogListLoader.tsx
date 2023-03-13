import { CardSkeleton } from '@shared/ui';

const SKELETON_CARD_COUNT = 3;
const SKELETON_CARDS = Array.from({ length: SKELETON_CARD_COUNT });

function CatalogListLoader() {
  return (
    <>
      {SKELETON_CARDS.map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
}

export default CatalogListLoader;
import { CollectionCardSkeleton } from '@features/collections/components';

const SKELETON_CARD_COUNT = 3;
const SKELETON_CARDS = Array.from({ length: SKELETON_CARD_COUNT });

function CollectionListLoader() {
  return (
    <>
      {SKELETON_CARDS.map((_, i) => (
        <CollectionCardSkeleton key={i} />
      ))}
    </>
  );
}

export default CollectionListLoader;
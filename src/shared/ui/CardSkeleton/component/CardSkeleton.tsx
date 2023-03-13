import './CardSkeleton.scss';

import { Skeleton } from '@shared/ui/Skeleton';

function CardSkeleton() {
  return <Skeleton className="card-skeleton" height="auto" animated></Skeleton>;
}

export default CardSkeleton;

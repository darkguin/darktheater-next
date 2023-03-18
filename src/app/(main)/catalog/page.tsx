import './page.scss';

import { useMovieApi } from '@entities/movie';
import { useSerialApi } from '@entities/serial';
import { CatalogList, CatalogTabs, CatalogType } from '@features/catalog';
import { PageWrapper } from '@features/page-wrapper';

interface Props {
  searchParams?: Record<string, string>;
}

const PAGE = 1;
const OFFSET = 35;

export default async function Catalog({ searchParams }: Props) {
  const currentType = (searchParams?.type as CatalogType) ?? CatalogType.Movies;
  const isSerialsCatalog = currentType === CatalogType.Serials;

  const { fetchAll: fetchMovies } = useMovieApi();
  const { fetchAll: fetchSerials } = useSerialApi();

  const items = isSerialsCatalog
    ? await fetchSerials(PAGE, OFFSET)
    : await fetchMovies(PAGE, OFFSET);

  return (
    <PageWrapper sidebar={<div></div>}>
      <CatalogTabs activeType={currentType} />
      <CatalogList type={currentType} initItems={items} initPage={PAGE + 1} offset={OFFSET} />
    </PageWrapper>
  );
}

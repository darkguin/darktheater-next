import './page.scss';

import { Playlist, PlaylistType, usePlaylistApi } from '@entities/playlist';
import { WithoutAuth } from '@features/auth';
import { generateMediaTag, makeContentPath } from '@features/content';
import { PageWrapper } from '@features/page-wrapper';
import { Card, CardList } from '@shared/ui';
import { ContentSlide } from '@shared/ui/Slider';

import { PromoBanner } from '@/features/promo-banner';
import { Slider } from '@/shared/ui/Slider';

const PLAYLIST_IDS = [1, 3, 5];
const PROMO_BANNER_INDEX = 1;

async function fetchData(fetchFn: (id: number) => Promise<Playlist | null>) {
  const data = await Promise.all(PLAYLIST_IDS.map(fetchFn)).catch(() => []);
  return data.filter(Boolean) as Playlist[];
}

export default async function Home() {
  const { fetchById } = usePlaylistApi();

  // @NOTE: If for some reason the playlist doesn't fetch, just ignore it
  const fetchCallback = (id: number) => fetchById(id).catch(() => null);

  const playlists = await fetchData(fetchCallback);

  return (
    <PageWrapper sidebar={<div></div>}>
      {playlists.map(({ id, title, type, items }, i) => (
        <div className="home__block" key={`playlist-${id}`}>
          {type === PlaylistType.Highlights ? (
            <Slider>
              {items.map((item) => (
                <ContentSlide
                  key={`playlist-${id}-slide-${item.id}`}
                  title={item.title}
                  subtitle={generateMediaTag(item)}
                  image={item.background}
                  id={item.id.toString()}
                  contentType={item.contentType}
                />
              ))}
            </Slider>
          ) : null}

          {type === PlaylistType.Cards ? (
            <div className="card-view">
              <h1 className="home__title">{title}</h1>
              <CardList>
                {items.map((item) => (
                  <Card
                    key={`playlist-${id}-card-${item.id}`}
                    title={item.title}
                    image={item.poster}
                    href={makeContentPath(item.id, item.contentType)}
                  />
                ))}
              </CardList>
            </div>
          ) : null}

          {i === PROMO_BANNER_INDEX ? (
            <WithoutAuth>
              <PromoBanner />
            </WithoutAuth>
          ) : null}
        </div>
      ))}
    </PageWrapper>
  );
}

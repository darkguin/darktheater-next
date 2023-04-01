import './page.scss';

import { ContentStrings as t } from '@core/dictionaries';
import { useMovieApi } from '@entities/movie';
import { usePlaylistApi } from '@entities/playlist';
import { makeContentPath } from '@features/content';
import { ContentDescription } from '@features/content/components';
import { PageWrapper } from '@features/page-wrapper';
import { Card, CardList } from '@shared/ui';
import { Player } from '@shared/ui/Player';
import { notFound } from 'next/navigation';

const PLAYLIST_ID = 5;

interface Props {
  params: Record<string, string>;
}

export default async function MoviePage({ params }: Props) {
  const { fetchById: fetchMovie } = useMovieApi();
  const { fetchById: fetchPlaylist } = usePlaylistApi();

  const movie = await fetchMovie(params.id).catch(notFound);
  const playlist = await fetchPlaylist(PLAYLIST_ID).catch(() => null);

  return (
    <PageWrapper>
      <div className="content">
        <div className="content__container player-container">
          <Player poster={movie.background} src={movie.source} />
        </div>

        <ContentDescription
          content={movie}
          className="content__container info-container title-regular-1"
        />

        <div className="content__container common-container">
          {playlist ? (
            <>
              <h1 className="content__title title-bold-4">{t.playlist.title}</h1>

              <CardList>
                {playlist.items.map((item) => (
                  <Card
                    key={`playlist-card-${item.id}`}
                    title={item.title}
                    image={item.poster}
                    href={makeContentPath(item.id, item.contentType)}
                  />
                ))}
              </CardList>
            </>
          ) : null}
        </div>
      </div>
    </PageWrapper>
  );
}

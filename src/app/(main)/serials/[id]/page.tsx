import './page.scss';

import { ContentStrings as t } from '@core/dictionaries';
import { usePlaylistApi } from '@entities/playlist';
import { useSerialApi } from '@entities/serial';
import { makeContentPath } from '@features/content';
import { ContentDescription } from '@features/content/components';
import { PageWrapper } from '@features/page-wrapper';
import { SerialPlayer } from '@features/serial';
import { Card, CardList } from '@shared/ui';
import { notFound } from 'next/navigation';

const PLAYLIST_ID = 5;

interface Props {
  params: Record<string, string>;
}

export default async function SerialPage({ params }: Props) {
  const { fetchById: fetchSerial } = useSerialApi();
  const { fetchById: fetchPlaylist } = usePlaylistApi();

  const serial = await fetchSerial(params.id).catch(notFound);
  const playlist = await fetchPlaylist(PLAYLIST_ID).catch(() => null);

  return (
    <PageWrapper>
      <div className="content">
        <div className="content__container player-container">
          <SerialPlayer serial={serial} />
        </div>

        <ContentDescription
          content={serial}
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

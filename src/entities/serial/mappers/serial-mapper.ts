import { MediaMapper } from '@entities/media';
import { ApiSerial, SeasonsMapper, Serial } from '@entities/serial';
import { ImplementsStatic, Mapper } from '@providers/http-client';

@ImplementsStatic<Mapper<ApiSerial, Serial>>()
export class SerialMapper {
  static mapMany(items: ApiSerial[]): Serial[] {
    return items.map(SerialMapper.map);
  }

  static map(api: ApiSerial): Serial {
    return {
      ...MediaMapper.map(api),
      seasons: api.seasons ? SeasonsMapper.mapMany(api.seasons) : [],
    };
  }
}

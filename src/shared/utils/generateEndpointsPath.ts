export function generateEndpointsPath(service: string, version: string, endpoints: Record<string, string>) {
  const dict: Record<string, string> = {};

  for (const key in endpoints) {
    dict[key] = `${service}/${version}/${endpoints[key]}`;
  }

  return dict;
}
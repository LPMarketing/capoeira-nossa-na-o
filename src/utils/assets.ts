const SUBPATH_PREFIX = '/cnn';

/**
 * Resolves local static assets from /cnn/ when hosted under clicae.com.br/cnn
 * (with or without trailing slash) and from / when hosted at the root domain.
 */
export function resolvePublicAsset(relativePath: string): string {
  const cleanPath = relativePath.replace(/^\/+/, '');
  if (typeof window !== 'undefined') {
    const { pathname } = window.location;
    if (pathname === SUBPATH_PREFIX || pathname.startsWith(`${SUBPATH_PREFIX}/`)) {
      return `${SUBPATH_PREFIX}/${cleanPath}`;
    }
  }
  return `/${cleanPath}`;
}

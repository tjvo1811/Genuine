const galleryModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  query: '?url',
  import: 'default',
  eager: true,
})

/**
 * @param {string} filename - e.g. "selfie-working-group.jpg"
 * @returns {string | null}
 */
export function resolveGalleryUrl(filename) {
  const key = `../assets/gallery/${filename}`
  return galleryModules[key] ?? null
}

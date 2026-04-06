/**
 * Defines the structure for dynamic template rendering.
 * @typedef {Object} TemplatePayload
 * @property {string} avatar
 * @property {string} title
 * @property {string} subtitle
 * @property {string} bio
 * @property {Array<{id: string|number, platform: string, url: string, icon: string}>} links
 */

/**
 * The source of truth for the CardController to render dynamic templates.
 * @typedef {Object} CardSchema
 * @property {'bio' | 'product' | 'vcard'} templateType
 * @property {TemplatePayload} payload
 */

export const mockBioData = {
  templateType: 'bio',
  payload: {
    avatar: 'https://unavatar.io/instagram/puntoneutr0',
    title: 'PuntoNeutr0',
    subtitle: 'Digital Artist & Developer',
    bio: 'Creando experiencias relevantes del código al lente',
    links: [
      { id: 1, platform: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
      { id: 2, platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
      { id: 3, platform: 'Spotify', url: 'https://spotify.com', icon: 'Music' }
    ]
  }
};

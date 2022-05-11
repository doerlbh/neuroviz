import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess'
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { isoImport } from 'vite-plugin-iso-import'

const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
    }),
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true,
    },
    vite: {
      plugins: [
        isoImport(),
        UnoCss({
          extractors: [extractorSvelte],
          shortcuts: {},
          presets: [
            presetUno(),
            presetAttributify(),
            presetIcons({
              extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
              },
            }),
            presetWebFonts({
              provider: 'google', // default provider
              fonts: {
                // these will extend the default theme
                sans: 'Inter',
              },
            })
          ],
        }),
      ],
    },
  },
}

export default config
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// export default defineConfig({
//   plugins: [
//     vue(),
//     VueDevTools(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  // console.log(mode);
  if (mode === 'prod') {
	  // build specific config
    return {
		  base: '/cid101/ingrid/front/',
		  build: {
		    outDir: 'front'
		  },
		  plugins: [
		    vue(),
		    VueDevTools(),
		  ],
		  resolve: {
		    alias: {
		      '@': fileURLToPath(new URL('./src', import.meta.url))
		    }
		  }
		}
  } else {
	  // dev specific config
    return {
      plugins: [
		    vue(),
		    VueDevTools(),
		  ],
		  resolve: {
		    alias: {
		      '@': fileURLToPath(new URL('./src', import.meta.url))
		    }
		  }
    }
  }
})

export const getImageUrl=(path)=>{
    return new URL (`/assets/${path}`,import.meta.url).href
}
// This code is a JavaScript ES6 module that dynamically constructs and returns the URL for an image or asset located in the assets folder. It is primarily used in modern web frameworks like Vue, Svelte, or Vite-based projects, where import.meta.url is availabl

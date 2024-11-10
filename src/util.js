/**
 * 
 ImageUrl, which generates a URL pointing to an asset file based on the given path
 new URL(...): This part creates a new URL object.
 import.meta.url: This refers to the URL of the current module (i.e., the JavaScript file where this code is 
 defined). By combining import.meta.url with assets/${path}, the URL object creates an absolute URL for
  the asset relative to the module.
 .href: The .href property of the URL object returns the complete URL as a string. This URL string points to
  the asset file specified by path.

  example: ImageUrl('example.jpg');
  output: http://example.com/app/assets/example.jpg

 */
const ImageUrl = (path) => {
    return new URL(`./assets/${path}`, import.meta.url).href;
};


export default ImageUrl;


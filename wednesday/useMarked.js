var marked = require('marked');
console.log(marked('I am using __markdown__.'));


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

console.log(marked('I am using __markdown__.'));

console.log(marked('# Marked in browser\n\nRendered by **marked**.'));

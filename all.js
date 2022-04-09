const editor = document.querySelector('#editor');

const toolbar = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ color: [] }, { background: [] }, { align: [] }],
  ['link', 'image', 'clean'],
];

const content = new Quill(editor, {
  theme: 'snow',
  modules: {
    imageResize: {
      displaySize: true,
    },

    toolbar: {
      container: toolbar,

      handlers: {
        image: imageHandler,
      },
    },
  },
  placeholder: '寫下產品描述',
});

function imageHandler() {
  let range = this.quill.getSelection();
  let value = prompt('please copy paste the image url here.');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}

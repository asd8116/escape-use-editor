Quill.register('modules/imageUploader', ImageUploader);
const editor = document.querySelector('#editor');

const toolbar = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ color: [] }, { background: [] }, { align: [] }],
  ['link', 'image', 'clean'],
];

const uploadImg = file => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      );
    }, 3500);
  });
};

const content = new Quill(editor, {
  theme: 'snow',
  modules: {
    imageResize: {
      displaySize: true,
    },

    toolbar: {
      container: toolbar,

      // handlers: {
      //   image: imageHandler,
      // },
    },

    imageUploader: {
      upload: uploadImg,
    },
  },
  placeholder: '寫下產品描述',
});

// function imageHandler() {
//   let range = this.quill.getSelection();
//   let value = prompt('please copy paste the image url here.');
//   if (value) {
//     this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
//   }
// }

module.exports = {
  posts: [
    {
      id: "lsdflkas",
      title: "teste",
      description: "Description test",
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },

  deletePost(id) {

    const index = this.posts.findIndex((index) => index.id === id);

    console.log({ index });

    this.posts.splice(index, 1);

  },
};
function generateID() {
  return Math.random().toString(36).substring(2, 9);
}

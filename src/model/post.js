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
    const post = this.posts.filter((post) => post.id === id);

    const index = this.posts.findIndex((index) => index.id === id);

    console.log(index);
    console.log(this.posts.splice(index, 1));
    return this.posts.slice(post.id, 1);
  },
};
function generateID() {
  return Math.random().toString(36).substring(2, 9);
}

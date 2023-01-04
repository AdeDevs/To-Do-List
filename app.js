const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      email: "jondoe@gmail.com",
      number: "988-282-988",
      image: "https://randomuser.me/api/portraits/men/69.jpg",
      location: "Gotham",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");

      const { results } = await res.json();

      // console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.gender = results[0].gender;
      this.email = results[0].email;
      this.number = results[0].phone;
      this.image = results[0].picture.large;
      this.location = results[0].location.state;
    },
  },
});

app.mount("#app");

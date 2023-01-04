const app = Vue.createApp({
  data() {
    return {
      firstName: "Jon",
      lastName: "Doe",
      email: "jon@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/69.jpg",
    };
  },
  filters: {
    uppercase: function (value) {
      if (!value) return "";
      return value.toUpperCase();
    },
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { result } = await res.json();

      // console.log(result);

      this.firstName = result[0].name.first;
      this.lastName = result[0].name.last;
      this.email = result[0].email;
      this.gender = result[0].gender;
      this.picture = result[0].picture.large;
    },
  },
});

app.mount("#app");

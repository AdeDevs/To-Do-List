const app = Vue.createApp({
  data() {
    return {
      firstName: "Jon",
      lastName: "Doe",
      email: "jon@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/69.jpg"
    };
  },
  filters: {
    uppercase: function (value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  },
  methods: {
    getUser() {
      this.firstName = "Jane";
      this.lastName = "Doe";
      this.email = "jane@gmail.com";
      this.gender = "female";
      this.picture = "https://randomuser.me/api/portraits/women/9.jpg";
    }
  }
});

app.mount("#app");

const formData = new FormData();
formData.append("firstName", "Vince");
formData.append("lastName", "Johns");

fetch("http://localhost:3000/persons", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({ firstName: "Villie", lastName: "VAlo" }),
})
  .then((res) => res.json())
  .then((res) => console.log(res));

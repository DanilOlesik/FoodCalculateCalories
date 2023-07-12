import axios from "axios";

const BazaProducts = () => {
  let result;
  axios
    .get("http://localhost:62755/Product/GetProducts/1", {})
    .then((response) => {
      result = response.data.Data;
      for (let i = 0; i < result.length; i++) {
        console.log(result[i].State);
      }
    })
    .catch((error) => console.error(error));
};

// const BazaProducts = [
//   {
//     name: "buckwheat",
//     state: {
//       Belok: 11.7,
//       Fats: 2.7,
//       Сarbohydrates: 75,
//     },
//   },

//   {
//     name: "egg",
//     state: {
//       Belok: 12.7,
//       Fats: 11.5,
//       Сarbohydrates: 0.7,
//     },
//   },

//   {
//     name: "salo",
//     state: {
//       Belok: 1.4,
//       Fats: 90,
//       Сarbohydrates: 0,
//     },
//   },
// ];

export default BazaProducts;

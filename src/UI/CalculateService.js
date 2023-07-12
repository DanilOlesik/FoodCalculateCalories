// import BazaProducts from "../components/BazaProduct";
import axios from "axios";

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

const CalculateService = () => {
  let sum = {
    sumBelok: 0,
    sumFats: 0,
    sumСarbohydrates: 0,
    nameProduct: [],
  };

  result.forEach((elem) => {
    sum.sumBelok += elem.State.Belok;
    sum.sumFats += elem.State.Fats;
    sum.sumСarbohydrates += elem.State.Carbohydrates;
    sum.nameProduct += elem.Name + ", ";
  });
  return sum;
};

export default CalculateService;

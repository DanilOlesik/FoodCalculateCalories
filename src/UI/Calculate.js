import BazaProducts from "../components/BazaProduct";

function Calculate() {
  let sum = {
    sumBelok: 0,
    sumFats: 0,
    sumСarbohydrates: 0,
  };

  BazaProducts.forEach((elem) => {
    sum.sumBelok += elem.state.Belok;
    sum.sumFats += elem.state.Fats;
    sum.sumСarbohydrates += elem.state.Сarbohydrates;
  });
  return <div></div>;
}

export default Calculate;

import CalculateService from "./CalculateService";

// let arrCheck = [];
// function iWorkWithArrayOnInput() {
//   if (sum.nameProduct.includes(arrCheck)) {
//     return true;
//   }
//   throw new Error("Продукт не найден в базе");
// }

// let tempInput = [];
// let accept = "";

// function clearFn(accept) {
//   sum.nameProduct.map((elem) => {
//     if (elem == accept) {
//     tempInput.push(accept);
//   }
//   throw new Error("Продукт не найден в базе");
//   }
// )}

function Calculate() {
  let sum = CalculateService();
  console.log(sum);

  return (
    <>
      Белки {sum.sumBelok}, Жиры {sum.sumFats}, Углеводы {sum.sumСarbohydrates},
      Name: {sum.nameProduct}
    </>
  );
}

export default Calculate;

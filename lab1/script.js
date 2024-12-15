function triangle(value1, type1, value2, type2) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const toDegrees = (radians) => radians * (180 / Math.PI);

  let a, b, c, alpha, beta;

  try {
      if (value1 <= 0 || value2 <= 0) {
          return "Помилка: Значення повинні бути додатними.";
      }

      switch (type1 + "," + type2) {
          case "leg,leg":
              a = value1;
              b = value2;
              c = Math.sqrt(a ** 2 + b ** 2);
              alpha = toDegrees(Math.atan(a / b));
              beta = 90 - alpha;
              break;

          case "leg,hypotenuse":
          case "hypotenuse,leg":
              a = type1 === "leg" ? value1 : value2;
              c = type1 === "hypotenuse" ? value1 : value2;
              if (a >= c) return "Помилка: Катет не може бути більшим за гіпотенузу.";
              b = Math.sqrt(c ** 2 - a ** 2);
              alpha = toDegrees(Math.asin(a / c));
              beta = 90 - alpha;
              break;

          case "leg,adjacent angle":
          case "adjacent angle,leg":
              a = type1 === "leg" ? value1 : value2;
              alpha = type1 === "adjacent angle" ? value1 : value2;
              b = a / Math.tan(toRadians(alpha));
              c = Math.sqrt(a ** 2 + b ** 2);
              beta = 90 - alpha;
              break;

          case "leg,opposite angle":
          case "opposite angle,leg":
              a = type1 === "leg" ? value1 : value2;
              beta = type1 === "opposite angle" ? value1 : value2;
              b = a * Math.tan(toRadians(beta));
              c = Math.sqrt(a ** 2 + b ** 2);
              alpha = 90 - beta;
              break;

          case "hypotenuse,angle":
          case "angle,hypotenuse":
              c = type1 === "hypotenuse" ? value1 : value2;
              alpha = type1 === "angle" ? value1 : value2;
              a = c * Math.sin(toRadians(alpha));
              b = c * Math.cos(toRadians(alpha));
              beta = 90 - alpha;
              break;

          default:
              console.log("Неправильний тип аргументів. Перечитайте інструкцію.");
              return "failed";
      }

      console.log(`a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, c = ${c.toFixed(2)}, alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}°`);
      return "success";
  } catch (error) {
      console.log("Сталася помилка: " + error.message);
      return "failed";
  }
}
  
      return `c = ${c.toFixed(2)}, a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}°`;
    }
  });
  

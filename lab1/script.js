document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("triangle-form");
    const resultsDiv = document.getElementById("results");
    const resultsParagraph = document.getElementById("triangle-results");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const value1 = parseFloat(document.getElementById("value1").value);
      const type1 = document.getElementById("type1").value;
      const value2 = parseFloat(document.getElementById("value2").value);
      const type2 = document.getElementById("type2").value;
  
      try {
        const result = solveTriangle(value1, type1, value2, type2);
        resultsParagraph.textContent = result;
        resultsDiv.style.display = "block";
      } catch (error) {
        resultsParagraph.textContent = `Помилка: ${error.message}`;
        resultsDiv.style.display = "block";
      }
    });
  
    function solveTriangle(value1, type1, value2, type2) {
      const toRadians = (degrees) => (degrees * Math.PI) / 180;
      const toDegrees = (radians) => (radians * 180) / Math.PI;
  
      let a, b, c, alpha, beta;
  
      if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a ** 2 + b ** 2);
        alpha = toDegrees(Math.atan(a / b));
        beta = 90 - alpha;
      } else if (type1 === "leg" && type2 === "hypotenuse") {
        a = value1;
        c = value2;
        if (a >= c) throw new Error("Катет не може бути більше або дорівнювати гіпотенузі.");
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
      } else if (type1 === "hypotenuse" && type2 === "leg") {
        c = value1;
        a = value2;
        if (a >= c) throw new Error("Катет не може бути більше або дорівнювати гіпотенузі.");
        b = Math.sqrt(c ** 2 - a ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
      } else if (type1 === "leg" && type2 === "adjacent angle") {
        a = value1;
        alpha = value2;
        if (alpha <= 0 || alpha >= 90) throw new Error("Кут повинен бути гострим (0 < кут < 90).");
        b = a / Math.tan(toRadians(alpha));
        c = Math.sqrt(a ** 2 + b ** 2);
        beta = 90 - alpha;
      } else if (type1 === "adjacent angle" && type2 === "leg") {
        alpha = value1;
        a = value2;
        if (alpha <= 0 || alpha >= 90) throw new Error("Кут повинен бути гострим (0 < кут < 90).");
        b = a / Math.tan(toRadians(alpha));
        c = Math.sqrt(a ** 2 + b ** 2);
        beta = 90 - alpha;
      } else {
        throw new Error("Непідтримувана комбінація типів.");
      }
  
      return `c = ${c.toFixed(2)}, a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}°`;
    }
  });
  
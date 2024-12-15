(function() {
  const names = ["John", "Jane", "Jack", "Michael", "Alice", "jessica"];

  names.forEach((name) => {
      if (name.charAt(0).toLowerCase() === "j") {
          console.log(`Goodbye ${name}`);
      } else {
          console.log(`Hello ${name}`);
      }
  });

  // Додатковий функціонал: Виведення імен із сумою ASCII-кодів > 500
  console.log("Filtering names with ASCII sum > 500:");
  names.forEach((name) => {
      const asciiSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
      if (asciiSum > 500) {
          console.log(name);
      }
  });
})();

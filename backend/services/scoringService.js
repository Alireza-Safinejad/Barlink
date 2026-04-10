function calculate(load) {
  let score = 0;

  // قیمت بالا
  if (load.price > 10000000) score += 40;

  // فاصله مناسب
  if (load.distance < 500) score += 25;

  // وزن مناسب
  if (load.weight < 25) score += 20;

  // مسیر مهم
  if (load.origin === "سیرجان") score += 15;

  return score;
}

module.exports = {
  calculate
};

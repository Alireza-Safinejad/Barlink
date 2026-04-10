function scoreLoad(load) {
  let score = 0;

  // فاصله کمتر → امتیاز بیشتر
  if (load.distance < 100) score += 40;
  else if (load.distance < 300) score += 20;

  // قیمت بالا
  if (load.price > 10000000) score += 30;

  // وزن مناسب
  if (load.weight < 25) score += 20;

  // مسیر محبوب
  if (load.routeType === "highway") score += 10;

  return score;
}

module.exports = { scoreLoad };

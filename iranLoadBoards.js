async function fetchLoads() {
  // فعلاً MOCK
  return [
    {
      id: 1,
      origin: "سیرجان",
      destination: "تهران",
      weight: 25,
      price: 12000000
    }
  ];
}

module.exports = {
  fetchLoads
};

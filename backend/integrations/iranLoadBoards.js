async function fetchLoads() {
  // فعلاً MOCK DATA (بعداً واقعی میشه)
  return [
    {
      id: 1,
      origin: "سیرجان",
      destination: "تهران",
      price: 12000000,
      weight: 24,
      distance: 500
    },
    {
      id: 2,
      origin: "یزد",
      destination: "مشهد",
      price: 15000000,
      weight: 20,
      distance: 900
    },
    {
      id: 3,
      origin: "کرمان",
      destination: "اصفهان",
      price: 8000000,
      weight: 30,
      distance: 400
    }
  ];
}

module.exports = {
  fetchLoads
};

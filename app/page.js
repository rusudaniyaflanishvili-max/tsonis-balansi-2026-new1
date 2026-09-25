export default function Home() {
  const products = [
    { name: "Catalina Coffee", price: "90 ₾", type: "ყავა" },
    { name: "Catalina Capsule", price: "85 ₾", type: "კაფსულა" },
    { name: "Miax Coffee Premium", price: "60 ₾", type: "ყავა" },
    { name: "Slim Lux Coffee", price: "100 ₾", type: "ყავა" },
    { name: "Good Lux Coffee", price: "100 ₾", type: "ყავა" },
    { name: "HHS A+1", price: "50 ₾", type: "კაფსულა" },
    { name: "Tea10Tem", price: "45 ₾", type: "ჩაი" },
    { name: "OZEMFIT", price: "60 ₾", type: "კაფსულა" },
  ];

  return (
    <main>
      <section className="hero">
        <p className="premium">2026 PREMIUM CATALOG</p>
        <h1>წონის ბალანსის ფორმულა</h1>
        <p>ყავა • ჩაი • კაფსულები • ნაკრებები</p>

        <a className="mainButton" href="#products">
          პროდუქციის ნახვა
        </a>
      </section>

      <section className="benefits">
        <div>✓ ორ

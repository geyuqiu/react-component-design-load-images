import breedImages from "../data/breedImages";

export default function Main({ selectedBreed }) {
  return (
    <main className="main col-9">
      <div className="alert alert-primary">Selected Breed: {selectedBreed}</div>
      <img src={breedImages[selectedBreed][0]} alt={selectedBreed} />
    </main>
  );
}

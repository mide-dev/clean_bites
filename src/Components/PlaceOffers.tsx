function PlaceOffers() {
  return (
    <section>
      <h2>What this place offers</h2>
      {/* <CheckCircle className="w-4" /> */}
      {placeDetail && <OfferVerify data={placeDetail.offers[0]} />}
    </section>
  );
}

export default PlaceOffers;

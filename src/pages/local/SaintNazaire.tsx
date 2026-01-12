import LocalPage from "@/components/LocalPage";

const SaintNazaire = () => {
  return (
    <LocalPage
      city="Saint-Nazaire"
      region="Loire-Atlantique"
      postalCodes={["44600"]}
      description="DJ professionnel à Saint-Nazaire pour vos événements. T.S Event vous propose ses services d'animation pour mariages, soirées privées et événements d'entreprise dans la région nazairienne."
      landmarks={[
        "Centre-ville Saint-Nazaire",
        "Méan-Penhoët",
        "Saint-Marc-sur-Mer",
        "Pornichet proximité",
        "La Baule proximité",
        "Zones portuaires",
      ]}
    />
  );
};

export default SaintNazaire;

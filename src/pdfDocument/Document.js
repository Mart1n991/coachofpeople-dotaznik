import React from "react";
import { Document, Page, Text, StyleSheet, View, Font, Image } from "@react-pdf/renderer";
import font from "./styles/fonts/Open_Sans/OpenSans-Light.ttf";
import fontBold from "./styles/fonts/Open_Sans/OpenSans-Bold.ttf";
import fontMedium from "./styles/fonts/Open_Sans/OpenSans-Regular.ttf";
import logo from "../assets/Trenerludi.png";
import personalIcon from "./styles/icons/titles/png/003-personal-information.png";
import adressIcon from "./styles/icons/titles/png/008-adress.png";
import goalIcon from "./styles/icons/titles/png/006-dart.png";
import measurmentsIcon from "./styles/icons/titles/png/004-measurement.png";
import exerciseIcon from "./styles/icons/titles/png/002-exercise.png";
import lifestyleIcon from "./styles/icons/titles/png/009-balanced.png";
import healthIcon from "./styles/icons/titles/png/001-heart.png";
import additionalIcon from "./styles/icons/titles/png/010-plus.png";

Font.register({
  family: "OpenSans",
  fonts: [
    { src: font, fontWeight: "light" },
    { src: fontMedium, fontWeight: "normal" },
    { src: fontBold, fontWeight: "bold" },
  ],
  format: "truetype",
});

const styles = StyleSheet.create({
  page: {},
  view: { flexDirection: "row", marginTop: 20 },
  heading: {
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "normal",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#67686b",
  },
  text: { fontFamily: "OpenSans", fontSize: 14, fontWeight: "light", marginBottom: 5, paddingLeft: 20 },

  section1: { color: "white", textAlign: "center", margin: 30 },
  section2: { color: "blue", margin: 30, display: "flex" },
  title: { fontFamily: "OpenSans", fontWeight: "bold" },
  icon: { width: "10%" },
});

//Stránka pohybová aktivita, priradenie hodnoty k číslu

const levelOfExercise = (typeOfExercise) => {
  switch (typeOfExercise) {
    case 1:
      return "Nováčik";
    case 2:
      return "Mierne pokročilý";
    case 3:
      return "Pokročilý";
    case 4:
      return "Expert";
    default:
      return "Bez skúseností";
  }
};

function MyDocument(props) {
  //Filrovanie objektov podľa hodnoty
  const objectFilter = (object) => {
    const filteredObj = Object.fromEntries(Object.entries(object).filter(([key, value]) => value === true));

    const result = Object.keys(filteredObj);

    const res = result.map((word) => word.split("_").join(" "));
    return res;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <Image src={logo} style={{ width: "20%" }} />
        </View>

        <View style={{ ...styles.view, marginBottom: 50 }}>
          <View style={{ width: "50vw", backgroundColor: "#f2c7bf" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
              <Image src={personalIcon} style={styles.icon} />
            </View>
            <Text style={styles.heading}>Osobné údaje</Text>
            <Text style={styles.text}>Krstné meno: {props.data.personalInfo.data.firstName}</Text>
            <Text style={styles.text}>Priezvisko: {props.data.personalInfo.data.lastName}</Text>
            <Text style={styles.text}>Email: {props.data.personalInfo.data.email}</Text>
            <Text style={styles.text}>Pohlavie: {props.data.personalInfo.data.gender}</Text>
          </View>

          <View style={{ width: "50vw", backgroundColor: "#addbf0" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
              <Image src={adressIcon} style={styles.icon} />
            </View>
            <Text style={styles.heading}>Adresa</Text>
            <Text style={styles.text}>Ulica: {props.data.address.data.street}</Text>
            <Text style={styles.text}>Číslo: {props.data.address.data.streetNumber}</Text>
            <Text style={styles.text}>PSČ: {props.data.address.data.postalCode}</Text>
            <Text style={styles.text}>Mesto: {props.data.address.data.city}</Text>
            <Text style={styles.text}>Štát: {props.data.address.data.state}</Text>
          </View>
        </View>

        <View style={{ width: "100vw" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
            <Image src={goalIcon} style={{ width: "5%" }} />
          </View>
          <Text style={styles.heading}>Ciele</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {objectFilter(props.data.goals.data.mainGoals).map((item, id) => (
              <Text
                style={{
                  fontFamily: "OpenSans",
                  fontSize: 14,
                  fontWeight: "light",
                  backgroundColor: "#fa833e",
                  borderRadius: 6,
                  marginLeft: 5,
                  marginRight: 5,
                  padding: 8,
                }}
                key={id}
              >
                {item}
              </Text>
            ))}
          </View>
          <View style={{ width: "100vw", marginTop: 50 }}>
            <Text
              style={{
                fontFamily: "OpenSans",
                fontSize: 14,
                fontWeight: "light",
                textAlign: "center",
              }}
            >
              Svoj cieľ chcem dosiahnuť za:{" "}
              <Text
                style={{
                  fontFamily: "OpenSans",
                  fontSize: 14,
                  fontWeight: "bold",
                  paddingLeft: 20,
                }}
              >
                {props.data.goals.data.timeToAchieveGoals} <Text style={styles.text}>týždňov</Text>
              </Text>
            </Text>
            <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>Priorita</Text>
            <Text style={{ ...styles.text, textAlign: "center" }}>{props.data.goals.data.priority}</Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
          <Image src={measurmentsIcon} style={{ width: "5%" }} />
        </View>
        <Text style={styles.heading}>Merania</Text>
        <View style={styles.view}>
          <View style={{ width: "50vw" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "105%",
                backgroundColor: "#addbf0",
                borderRadius: 20,
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontFamily: "OpenSans",
                  fontSize: 20,
                  fontWeight: "light",
                }}
              >
                Váha
              </Text>
              <Text
                style={{
                  fontFamily: "OpenSans",
                  fontSize: 20,
                  padding: 15,
                }}
              >
                {props.data.measurments.data.weight} KG
              </Text>
            </View>
          </View>
          <View style={{ width: "50vw", marginTop: 80 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#f2c7bf",
                borderRadius: 20,
                marginLeft: -30,
              }}
            >
              <Text style={{ fontFamily: "OpenSans", fontSize: 20, fontWeight: "light" }}>Výška</Text>
              <Text
                style={{
                  fontFamily: "OpenSans",
                  fontSize: 20,
                  padding: 15,
                }}
              >
                {props.data.measurments.data.height} CM
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100vw",
            marginTop: 50,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...styles.text,
              backgroundColor: "#afc995",
              marginBottom: 20,
              borderRadius: 20,
              width: "50vw",
              textAlign: "center",
              padding: 15,
            }}
          >
            Krk: <Text style={{ ...styles.text, fontWeight: "bold" }}>{props.data.measurments.data.neck} CM </Text>
          </Text>

          <Text
            style={{
              ...styles.text,
              backgroundColor: "#afc995",
              marginBottom: 20,
              borderRadius: 20,
              width: "50vw",
              textAlign: "center",
              padding: 15,
            }}
          >
            Ramená:
            <Text style={{ ...styles.text, fontWeight: "bold" }}>{props.data.measurments.data.shoulders} CM</Text>
          </Text>
          <Text
            style={{
              ...styles.text,
              backgroundColor: "#afc995",
              marginBottom: 20,
              borderRadius: 20,
              width: "50vw",
              textAlign: "center",
              padding: 15,
            }}
          >
            Hrudník: <Text style={{ ...styles.text, fontWeight: "bold" }}>{props.data.measurments.data.chest} CM</Text>
          </Text>
          <Text
            style={{
              ...styles.text,
              backgroundColor: "#afc995",
              marginBottom: 20,
              borderRadius: 20,
              width: "50vw",
              textAlign: "center",
              padding: 15,
            }}
          >
            Biceps: <Text style={{ ...styles.text, fontWeight: "bold" }}>{props.data.measurments.data.biceps} CM</Text>
          </Text>
          <Text
            style={{
              ...styles.text,
              backgroundColor: "#afc995",
              marginBottom: 20,
              borderRadius: 20,
              width: "50vw",
              textAlign: "center",
              padding: 15,
            }}
          >
            Pás: <Text style={{ ...styles.text, fontWeight: "bold" }}>{props.data.measurments.data.belt} CM</Text>
          </Text>
          <Text
            style={{
              ...styles.text,
              backgroundColor: "#afc995",
              marginBottom: 20,
              borderRadius: 20,
              width: "50vw",
              textAlign: "center",
              padding: 15,
            }}
          >
            Stehno: <Text style={{ ...styles.text, fontWeight: "bold" }}>{props.data.measurments.data.thigh} CM</Text>
          </Text>
        </View>
      </Page>

      <Page size="A4" style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
          <Image src={exerciseIcon} style={{ width: "5%" }} />
        </View>
        <Text style={styles.heading}>Pohybová aktivita</Text>
        <View style={styles.view}>
          <View
            style={{
              width: "50vw",
            }}
          >
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold", width: "80mm" }}>Drepy:</Text>{" "}
              {levelOfExercise(props.data.exercise.data.exerciseLevel.squatDumbell)}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold", width: "80mm" }}>Zhyby:</Text>{" "}
              {levelOfExercise(props.data.exercise.data.exerciseLevel.pullUps)}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold", width: "80mm" }}>Mŕtvy ťah:</Text>{" "}
              {levelOfExercise(props.data.exercise.data.exerciseLevel.deadLift)}
            </Text>
          </View>

          <View style={{ width: "50vw" }}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold", width: "80mm" }}>Tlak na rovnej lavici:</Text>{" "}
              {levelOfExercise(props.data.exercise.data.exerciseLevel.benchPress)}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold", width: "80mm" }}>Upažovanie v stoji:</Text>{" "}
              {levelOfExercise(props.data.exercise.data.exerciseLevel.sideRaises)}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: "bold", width: "80mm" }}>Príťahy v predklone:</Text>{" "}
              {levelOfExercise(props.data.exercise.data.exerciseLevel.bentOverRows)}
            </Text>
          </View>
        </View>

        {props.data.exercise.data.workoutRegularly === "Áno" ? (
          <View>
            <View style={{ backgroundColor: "#addbf0", marginTop: 10 }}>
              <Text
                style={{ ...styles.text, textAlign: "center", marginTop: 10, marginBottom: 10, fontWeight: "bold" }}
              >
                Ktorý typ pohybovej aktivity bežne robíte
              </Text>
              {Object.keys(props.data.exercise.data.exercises).map((day, id) => (
                <View key={id} style={{ ...styles.view, marginTop: 5 }}>
                  <Text style={{ ...styles.text, fontWeight: "bold", marginBottom: 2, width: "40mm" }}>{day}</Text>
                  <Text style={{ ...styles.text, marginBottom: 2, width: "40mm" }}>
                    {" "}
                    {props.data.exercise.data.exercises[day].type}
                  </Text>
                  <Text style={{ ...styles.text, marginBottom: 2 }}>
                    {props.data.exercise.data.exercises[day].type === "Voľno"
                      ? null
                      : props.data.exercise.data.exercises[day].duration}
                  </Text>
                </View>
              ))}
            </View>
            {props.data.exercise.data.trainingDescription !== "" ? (
              <View>
                <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>
                  Popis tréningu
                </Text>
                <Text style={{ ...styles.text, textAlign: "center" }}>
                  {props.data.exercise.data.trainingDescription}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}

        <View>
          <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>
            Obľúbené športy
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {props.data.exercise.data.favouriteSports &&
              props.data.exercise.data.favouriteSports.map((sport, id) => (
                <Text
                  key={id}
                  style={{
                    fontFamily: "OpenSans",
                    fontSize: 14,
                    fontWeight: "light",
                    backgroundColor: "#fa833e",
                    borderRadius: 6,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    padding: 8,
                  }}
                >
                  {sport}
                </Text>
              ))}
          </View>
        </View>

        <View style={{ textAlign: "center", marginTop: 20 }}>
          <View>
            <Text style={styles.text}>
              {" "}
              <Text style={{ ...styles.text, fontWeight: "bold" }}>Frekvencia tréningu:</Text>{" "}
              {props.data.exercise.data.trainingFrequency} do týždňa
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {" "}
              <Text style={{ ...styles.text, fontWeight: "bold" }}>Dĺžka trvania tréningu:</Text>{" "}
              {props.data.exercise.data.trainingDuration}
            </Text>
          </View>
        </View>
      </Page>

      <Page size="A4" style={{ marginTop: 55 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
          <Image src={lifestyleIcon} style={{ width: "5%" }} />
        </View>
        <Text style={styles.heading}>Životný štýl</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.text, fontWeight: "bold" }}>Povolanie</Text>
          <Text style={styles.text}>{props.data.lifestyle.data.workType}</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.text, fontWeight: "bold" }}>Úroveň pohybovej aktivity pri povolaní</Text>
            <Text style={styles.text}>{props.data.lifestyle.data.movementActivity}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.text, fontWeight: "bold" }}>Ako často cestujete</Text>
            <Text style={styles.text}>{props.data.lifestyle.data.traveling}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.text, fontWeight: "bold" }}>Týždenná investícia do potravín</Text>
          <Text style={styles.text}>{props.data.lifestyle.data.foodInvestment} €</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.text, fontWeight: "bold" }}>Týždenná investícia do doplnkov výživy</Text>
          <Text style={styles.text}>{props.data.lifestyle.data.suplementInvestment} €</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ ...styles.text, fontWeight: "bold" }}>
            Týždenné objednávanie jedál z fastfoodov a reštaurácií
          </Text>
          <Text style={styles.text}>{props.data.lifestyle.data.orderingFoodPerWeek}</Text>
        </View>

        {props.data.lifestyle.data.allergies.answer === "Áno" ? (
          <View>
            <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>Alergie</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
              {props.data.lifestyle.data.allergies.list.map((item, id) => (
                <Text
                  key={id}
                  style={{
                    fontFamily: "OpenSans",
                    fontSize: 14,
                    fontWeight: "light",
                    backgroundColor: "#addbf0",
                    borderRadius: 6,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    padding: 8,
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        ) : null}

        {props.data.lifestyle.data.suplements.answer === "Áno" ? (
          <View>
            <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>Suplementy</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
              {props.data.lifestyle.data.suplements.list.map((item, id) => (
                <Text
                  key={id}
                  style={{
                    fontFamily: "OpenSans",
                    fontSize: 14,
                    fontWeight: "light",
                    backgroundColor: "#fa833e",
                    borderRadius: 6,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    padding: 8,
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        ) : null}

        <View>
          <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>Obľubené jedlá</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {props.data.lifestyle.data.favouriteFood.list
              ? props.data.lifestyle.data.favouriteFood.list.map((food, id) => (
                  <Text
                    key={id}
                    style={{
                      fontFamily: "OpenSans",
                      fontSize: 14,
                      fontWeight: "light",
                      backgroundColor: "#fa833e",
                      borderRadius: 6,
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 5,
                      padding: 8,
                    }}
                  >
                    {food}
                  </Text>
                ))
              : null}
          </View>

          <View>
            <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>
              Jedlá, ktoré nemáte radi
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
              {props.data.lifestyle.data.unlikeFood.list
                ? props.data.lifestyle.data.unlikeFood.list.map((food, id) => (
                    <Text
                      key={id}
                      style={{
                        fontFamily: "OpenSans",
                        fontSize: 14,
                        fontWeight: "light",
                        backgroundColor: "#fa833e",
                        borderRadius: 6,
                        marginLeft: 5,
                        marginRight: 5,
                        marginBottom: 5,
                        padding: 8,
                      }}
                    >
                      {food}
                    </Text>
                  ))
                : null}
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.text}>Kvalita spánku: {props.data.lifestyle.data.quality.sleep}</Text>
          <Text style={styles.text}>Chuť do jedla: {props.data.lifestyle.data.quality.appetite}</Text>
          <Text style={styles.text}>Únava počas dňa: {props.data.lifestyle.data.quality.exhausted}</Text>
          <Text style={styles.text}>Ochota trénovať: {props.data.lifestyle.data.quality.willToTrain}</Text>
        </View>
      </Page>

      <Page size="A4">
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
          <Image src={healthIcon} style={{ width: "5%" }} />
        </View>
        <Text style={styles.heading}>Zdravotný stav</Text>
        <View>
          <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>
            Zoznam zdravotých problémov
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {props.data.health.data.problems.list
              ? props.data.health.data.problems.list.map((problem, id) => (
                  <Text
                    key={id}
                    style={{
                      fontFamily: "OpenSans",
                      fontSize: 14,
                      fontWeight: "light",
                      backgroundColor: "#fa833e",
                      borderRadius: 6,
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 5,
                      padding: 8,
                    }}
                  >
                    {problem}
                  </Text>
                ))
              : "Žiadne problémy"}
          </View>

          <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>
            Zoznam užívaných liekov
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {props.data.health.data.medicine.list
              ? props.data.health.data.medicine.list.map((medicine, id) => (
                  <Text
                    key={id}
                    style={{
                      fontFamily: "OpenSans",
                      fontSize: 14,
                      fontWeight: "light",
                      backgroundColor: "#fa833e",
                      borderRadius: 6,
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 5,
                      padding: 8,
                    }}
                  >
                    {medicine}
                  </Text>
                ))
              : "Žiadne lieky"}
          </View>

          <Text style={{ ...styles.text, textAlign: "center", marginTop: 20, fontWeight: "bold" }}>Zoznam zranení</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
            {props.data.health.data.injuries.list
              ? props.data.health.data.injuries.list.map((injuries, id) => (
                  <Text
                    key={id}
                    style={{
                      fontFamily: "OpenSans",
                      fontSize: 14,
                      fontWeight: "light",
                      backgroundColor: "#fa833e",
                      borderRadius: 6,
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 5,
                      padding: 8,
                    }}
                  >
                    {injuries}
                  </Text>
                ))
              : "Žiadne zranenia"}
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
          <Image src={additionalIcon} style={{ width: "5%" }} />
        </View>
        <Text style={styles.heading}>Informácie</Text>
        <View>
          <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>Špeciálne požiadavky</Text>
          <Text style={styles.text}>{props.data.additionalInfo.requirements}</Text>
        </View>

        <View>
          <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>
            Najčastejšie sťažnosti z oblastí vášho zdravia, výživy a postavy
          </Text>
          <Text style={styles.text}>{props.data.additionalInfo.complains}</Text>
        </View>

        <View>
          <Text style={{ ...styles.text, marginTop: 20, fontWeight: "bold" }}>Čo považujete za relax</Text>
          <Text style={styles.text}>{props.data.additionalInfo.relax}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;

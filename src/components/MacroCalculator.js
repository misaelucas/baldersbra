import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  Pressable,
} from "react-native";

export default function Header() {
  const [age, setAge] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [sex, setSex] = React.useState("H");
  const [selectedValue, setSelectedValue] = React.useState("1.4");
  const [tmb, setTMB] = React.useState("");
  const [get, setGET] = React.useState("");
  const [cutting, setCutting] = React.useState("");
  const [bulking, setBulking] = React.useState("");
  const [isShown, setIsShown] = React.useState(false);

  const justCalc = (e) => {
    if (sex == "M") {
      setTMB(10 * weight + 6.25 * height - 5 * age - 161);
      setGET(tmb * selectedValue);
      setCutting(get - 500);
      setBulking(get + 300);
      setIsShown((current) => !current);
    }
    if (sex == "H") {
      setTMB(10 * weight + 6.25 * height - 5 * age + 5);
      setGET(tmb * selectedValue);
      setCutting(get - 500);
      setBulking(get + 300);
      setIsShown((current) => !current);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}> Calculate Your Macros!</Text>
      <View style={styles.form}>
        <View>
          <Text style={styles.labelPicker}> Sexo:</Text>
          <Picker
            sex={sex}
            style={{ height: 24, width: 150 }}
            onValueChange={(sex) => setSex(sex)}
          >
            <Picker.Item label="Homem" value="H" />
            <Picker.Item label="Mulher" value="M" />
          </Picker>
          <Text style={styles.label}>
            Age:
            <TextInput style={styles.input} onChangeText={setAge} value={age} />
          </Text>
          <Text style={styles.label}>
            Weight:
            <TextInput
              style={styles.input}
              onChangeText={setWeight}
              value={weight}
              placeholder="kgs"
              keyboardType="numeric"
            />
          </Text>
          <Text style={styles.label}>
            Height:
            <TextInput
              style={styles.input}
              onChangeText={setHeight}
              value={height}
              placeholder="cm"
              keyboardType="numeric"
            />
          </Text>
        </View>
        <View style={{ flex: "1", alignItems: "center" }}>
          <Text style={styles.labelPicker}> Activity Level:</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(selectedValue) => setSelectedValue(selectedValue)}
          >
            <Picker.Item label="Muito Sedentário" value="1.4" />
            <Picker.Item label="Sedentário pouco ativo" value="1.5" />
            <Picker.Item label="Sedentário mais ativo" value="1.6" />
            <Picker.Item label="Moderadamente ativo (treina)" value="1.7" />
            <Picker.Item label="Muito ativo" value="1.8" />
            <Picker.Item label="Atividade intensa" value="2" />
          </Picker>
          <Pressable style={styles.button} onPress={justCalc}>
            <Text style={styles.text}>Calcular</Text>
          </Pressable>
        </View>
      </View>

      {isShown && (
        <View>
          <View>
            <Text style={styles.rendering}>
              Sua taxa metabólica basal é de {tmb} calorias e seu gasto
              energético total é de {get}. Caso você queira ganhar peso, suas
              ingestão diária deve ser de {bulking}. Isso é um superávit
              calórico de 300kcal diários. Caso deseje perder peso, sua ingestão
              diária deve ser de {cutting}, com um déficit calórico de 500kcal.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#0f1117",
    paddingTop: "5%",
  },

  form: {
    marginTop: "10%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    right: 0,
    width: 50,
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  label: {
    color: "white",
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "right",
  },
  labelPicker: {
    marginTop: "10px",
    color: "white",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: "18px",
  },
  subtitle: {
    color: "#1cd68f",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: "10px",
  },
  text: {
    color: "white",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: "20px",
  },

  rendering: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: "20px",
  },
});

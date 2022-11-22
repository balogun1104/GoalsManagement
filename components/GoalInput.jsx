import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image, Text } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEntertedGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEntertedGoalText(enteredText);
  };

  const addGoalHanderler = () => {
    props.addGoal(enteredGoalText);
    setEntertedGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View  style={styles.addGoals}>
            <Text  style={styles.addGoalsSpan}>Goals For 2023<Text style={styles.addGoalsText}>!!!!</Text>!!!</Text>
        </View>
        <Image style={styles.image} source={require('../assets/images/sabiwan.jpeg')} />
        <TextInput
          style={styles.textInput}
          placeholder="What do you what NEXT YEAR"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHanderler} color="#bd96f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color='#f31282'/>
          </View>
        </View>
        <View>
            <Text style={styles.addGoalsTextBottom}>Created by ZakiOmoOlalomi</Text>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },
  addGoalsText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '200'
  },
  addGoalsSpan: {
    fontSize: 43,
    fontWeight: '400',
    color: '#fff',
   
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#b38fe1",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    color: '#fff'
 
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    width: 100
  },
  image: {
    width: 250,
    height: 400,
    margin: 20
  },
  addGoalsTextBottom: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '200',
    paddingTop: 150,
    fontWeight: '400'
  }
});

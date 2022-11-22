import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => (pressed ? styles.pressedItem : null)}
      android_ripple={{ color: "#947cb4" }}
    >
      <View style={styles.goalsItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    justifyContent: "center",
    padding: 10,
    textAlign: "center",
    borderWidth: 1,
    margin: 10,
    borderRadius: 44,
    backgroundColor: "#5e0acc",
    color: "yellow",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});

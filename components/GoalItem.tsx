import { StyleSheet, Text, View, Pressable } from "react-native";

type Props = {
  data: {
    text: string;
    id: number;
  };
  onDeleteItem: (id: number) => void;
};

function GoalItem({ data, onDeleteItem }: Props) {
  return (
    <View key={data.id} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind("_", data.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

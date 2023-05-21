import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<
    {
      text: string;
      id: number;
    }[]
  >([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: { text: string; id: number }) {
    setCourseGoals((currentCourseGoals) => {
      return [...currentCourseGoals, enteredGoalText];
    });

    endAddGoalHandler();
  }

  function deleteGoalHandler(id: number) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  data={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#ccc",
  },

  goalsContainer: {
    flex: 5,
  },
});

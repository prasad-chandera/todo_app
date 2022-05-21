import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random()?.toString() },
        ]);
        endAddGoalHandler();
    };

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };
    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    };
    const deleteGoalHandler = (id) => {
        setCourseGoals((courseGoals) => {
            return courseGoals?.filter((goal) => goal?.id !== id);
        });
    };
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color={"#5E0ACC"}
                    onPress={startAddGoalHandler}
                />

                <GoalInput
                    visible={modalIsVisible}
                    onAddGoal={(enteredGoalText) =>
                        addGoalHandler(enteredGoalText)
                    }
                    onCancel={endAddGoalHandler}
                />

                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData?.item?.text}
                                    onDeleteItem={() =>
                                        deleteGoalHandler(itemData?.item?.id)
                                    }
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item?.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}
console.log("====================================");
console.log("App.js");
console.log("====================================");
const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: "#1e085a",
    },

    goalsContainer: {
        flex: 5,
    },
});

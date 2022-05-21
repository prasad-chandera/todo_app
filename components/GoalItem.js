import { StyleSheet, View, Text, Pressable } from "react-native";

export default GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={props.onDeleteItem}
            >
                <Text style={styles.goalText}>{props?.text}</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5E0ACC",
    },
    goalText: {
        padding: 8,
        color: "white",
    },
});

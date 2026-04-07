import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { SafeAreaViewBase } from "react-native";
import {
  FlatList,
  View,
} from "react-native-reanimated/lib/typescript/Animated";

export default function Index() {
  const todoData = [
    {
      id: 1,
      title: "Todo 1",
      isDone: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isDone: false,
    },
    {
      id: 3,
      title: "Todo 3",
      isDone: false,
    },
    {
      id: 4,
      title: "Todo 4",
      isDone: false,
    },
    {
      id: 5,
      title: "Todo 5",
      isDone: false,
    },
    {
      id: 6,
      title: "Todo 6",
      isDone: false,
    },
  ];

  return (
    <SafeAreaViewBase
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="menu" size={24} color={"#333"} />
        <Text>Todo App</Text>
      </View>
      <FlatList
        data={todoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaViewBase>
  );
}

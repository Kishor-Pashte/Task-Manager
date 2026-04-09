import { Ionicons } from "@expo/vector-icons";

import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};
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

  const [todos, setTodos] = useState<TodoType[]>(todoData);
  const [input, setInput] = useState<string>("");

  //fetch todos
  // const fetchTodos = async () => {
  //   const tasks = await axios.get("/todos");
  //   setTodos(tasks);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // add todos function
  const addTodo = async () => {
    const newTodo = {
      id: Math.random(),
      title: input,
      isDone: false,
    };

    //***call add todo backend api
    //const res = await axios.post('/todos', newTodo);

    //setTodos(res.data)
    setInput("");
  };

  //Update todo(mark done)
  // const markAsDone = async () => {
  //   await axios.put("/todos/:id");

  //   fetchTodos();
  // };

  //delete todo
  // const deleteTodo = async () => {
  //   await axios.delete("/todos/:id");
  //   fetchTodos();
  // };

  return (
    <SafeAreaView
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

      {/* //search bar */}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 10,
          gap: 10,
        }}
      >
        <Ionicons name="search" size={24} color={"#333"} />
        <TextInput
          placeholder="Search"
          style={{ flex: 1, fontSize: 16, color: "#333" }}
        />
      </View>

      <FlatList
        data={[...todos].reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <View style={{ gap: 10, alignItems: "center" }}>
              <Checkbox value={item.isDone} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#333",
                  textDecorationLine: item.isDone ? "line-through" : "none",
                }}
              >
                {item.title}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Deleted" + item.id);
              }}
            >
              <Ionicons
                name="trash"
                size={24}
                color={"red"}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />{" "}
            </TouchableOpacity>
          </View>
        )}
      />

      <KeyboardAvoidingView
        behavior={"padding"}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Add new todo"
          onChangeText={(text) => setInput(text)}
          value={input}
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 10,
            fontSize: 16,
            color: "#333",
          }}
        />
        <TouchableOpacity
          onPress={() => {
            addTodo();
          }}
          style={{
            backgroundColor: "#2d1abc",
            padding: 8,
            borderRadius: 10,
            marginLeft: 20,
          }}
        >
          <Ionicons name="add" size={32} color={"#fff"} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

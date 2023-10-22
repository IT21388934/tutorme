import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constant/theme";

import Card from "../../components/card";
import BottomNav from "../../components/TutorBottomNav";
import SearchBar from "../../components/searchBar";
import FloatingButton from "../../components/FloatingButton";

export default function MyClasses() {
  const activeLink = "MyClasses";
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      className: "Oject-Oriented Programming",
      classDescription: "Learn the basics of OOP",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "John Doe",
    },
    {
      id: 2,
      className: "Java Basic Programming",
      classDescription: "class Description",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "",
    },
    {
      id: 3,
      className: "Data Structure and Algorithm",
      classDescription: "Learn the basics of OOP , line 2",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "John Doe",
    },
    {
      id: 4,
      className: "Kotlin Mobile application development",
      classDescription: "Learn the basics of OOP , line 2",
      duration: "2 Hr",
      price: "2000",
      //   classTutor: "John Doe",
    },

    // Add more data items here
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    const filteredData = data.filter((item) => {
      return item.className.toLowerCase().includes(text.toLowerCase());
    });

    setSearchText(text);
    setFilteredData(filteredData);
  };

  const handleFloatingButton = () => {
    console.log("Floating button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Your header content goes here */}
      </View>

      <View style={styles.tagsContainer}>
        <TouchableOpacity>
          <Text style={styles.newClassTag}>New Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bookedClassesTag}>Booked Class</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.completedClassTag}>Completed Class</Text>
        </TouchableOpacity>
      </View>

      <SearchBar handleSearch={handleSearch} searchText={searchText} />
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set the number of columns to 2
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => <Card item={item} />}
      />
      <FloatingButton onPress={handleFloatingButton} />

      <BottomNav activeLink={activeLink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGreen,
  },
  headerContainer: {
    padding: 16,
  },

  gridContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },

  tagsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },

  newClassTag: {
    color: COLORS.primary,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.green,
    borderRadius: 8,
  },

  bookedClassesTag: {
    color: COLORS.darkRed,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.tagsRed,
    borderRadius: 8,
  },

  completedClassTag: {
    color: COLORS.darkYellow,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: COLORS.tagsYellow,
    borderRadius: 8,
  },
});

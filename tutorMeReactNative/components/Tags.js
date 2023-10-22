import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { COLORS } from "../constant/theme";

export default function Tags({ tagText }) {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{tagText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,

    marginBottom: 10,
    padding: 10,
  },
  tagText: {
    color: COLORS.darkGreen,
    fontWeight: "bold",
  },
});

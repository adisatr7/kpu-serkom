import { StyleSheet } from "react-native"


export const color = {
  primary: "#1E90FF",
  secondary: "#FF91A4",
  white: "#FFFFFF",
  black: "#464646",
  gray: "#C0C0C0"
}

export const global = {
  marginX: 15,
  marginY: 20
}

export const font = StyleSheet.create({
  heading: {
    fontSize: 24
  },

  subheading: {
    fontSize: 20
  },

  body: {
    fontSize: 16
  },

  caption: {
    fontSize: 12
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "bold"
  }
})
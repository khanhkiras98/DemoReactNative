import { StyleSheet } from 'react-native';

//style sheet
const styles = StyleSheet.create({
  //All screen
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#f0f8ff",
  },
  //All Screen
  label: {
    fontSize: 30,
    backgroundColor: "green",
    textAlign: "center",
    fontWeight: "bold",
  },

  //Screen 1
  buttonBack: {
    backgroundColor: "black",
    width: "9%",
    marginTop: 2,
    borderRadius: 5,
    alignItems: "center",
    flex: 2,
    zIndex: 10,
    fontSize: 20,
  },
  buttonCreate: {
    backgroundColor: "black",
    width: "9%",
    marginTop: 2,
    borderRadius: 5,
    alignItems: "center",
    flex: 2,
    zIndex: 10,
  },
  //Screen 1
  search: {
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: "#f0f8ff",
    color: "black",
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 0, 
    borderRadius: 3,
  },
  //Screen 1
  item: {
    padding: 10,
    height: 150,
    fontSize: 18,
    backgroundColor: "white",
    zIndex: 9,
  },
  itemTextName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemTextPrice: {
    fontSize: 16,
  },
  //All
  img: {
    width: 70,
    height: 70,
  },

  //Screen 2, 3
  topic: {
    marginLeft: 15,
    marginTop: 10,
    marginRight: 15,
    marginBottom: 100,
  },
  //Screen 2 3
  textTopic: {
    fontSize: 15,
    color: "black",
  },
  //All
  input: {
    borderWidth:1,
    paddingLeft: 10,
    paddingBottom: 2,
    borderColor: "grey",
    fontSize: 20,
    borderRadius: 3,
    color: "black"
  },
  inputDisable: {
    borderWidth:1,
    paddingLeft: 10,
    paddingBottom: 2,
    borderColor: "grey",
    fontSize: 20,
    borderRadius: 3,
  },
  //Screen 2 3
  validateText: {
    color: "red",
    fontSize: 10,
  },
  //Screen 2
  button: {
    backgroundColor: "green",
    height: 50,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20%",
    marginRight: "20%",
  },
  //Screen 23
  buttonText: {
    fontWeight: "bold",
    color: "black"
  },

  //SCreen 3
  buttonDetail: {
    backgroundColor: "green",
    width: '40%',    
    height: 50,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  buttonConfirmDetail: {
    backgroundColor: "orange",
    width: '40%',    
    height: 50,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },

  //flex
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  spaceAround: {
 
  },
  absoluteRight: {
    position: "absolute",
    top: 8,
    right: "5%",
  },
  absoluteLeft: {
    position: "absolute",
    top: 8,
    left: "5%",
  },

});
export default styles;
// Import some libraries for making the component
import React from 'react';
import { Text, View } from 'react-native';

// Create the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
};

// Make the component available to other part of the app
export default Header;

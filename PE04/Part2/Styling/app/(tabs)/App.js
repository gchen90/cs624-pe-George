import React, {Component} from 'react'
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 
import PropTypes from 'prop-types'
import update from 'immutability-helper'

const userImage = require('../../assets/images/user.png');

const data = [{
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  }
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight style={styles.touchableContainer} onPress={onPress}> 
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const list = this.state.data.map(function(item, index) { 
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard key={'card-' + index}
                   image={image}
                   name={name}
                   occupation={occupation}
                   description={description}
                   onPress={this.handleProfileCardPress.bind(this, index)}
                   showThumbnail={showThumbnail}/>
    }, this);

    return (
      <View style={styles.container}>
        {list} 
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'lightgray'
    },
    touchableContainer: {
        width: '40%',
        height: '30%',
        justifyContent: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 10
                },
                shadowOpacity: 1
            },
            android: {
                elevation: 15
            }
        })
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 10
                },
                shadowOpacity: 1
            },
            android: {
                borderWidth: 3,
                borderColor: 'black',
                elevation: 15
            }
        })
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: 'white',
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 24,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 5,
            width: 5
        },
        textShadowRadius: 3
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3,
    },
    cardOccupation: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    cardDescription: {
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        fontStyle: 'italic'
    },
    cardThumbnail: {
        transform: [{scale: 0.2}]
    },
});

import {StyleSheet} from 'react-native'

export const Colors = {
    dark: 'black',
    light: 'white'
};

const baseContainerStyles  = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
});
/*
const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    },
    countContainer: {
        marginLeft: 20
    },
    countText: {
        marginLeft: 20
    }
})

const buttons = StyleSheet.create({
    primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    buttonText: {
        marginLeft: 20
    }
})

export {styles, buttons}*/
export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
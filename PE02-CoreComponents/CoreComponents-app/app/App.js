import { Text, View, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity, Linking} from "react-native";

const HyperLink = ({url, text}) => {
    const handlePress = () => {
        Linking.openURL(url).catch((err) => console.error('An error occurred: ', err))
    }
    return(
        <TouchableOpacity onPress={handlePress} style={styles.textNormal}>
            <Text style={styles.linkStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

const App = () => {
    return (
        <ScrollView>
            <Image source={require('../assets/images/icon.png')} style={styles.image} />
            <View>
                <Text style={styles.textNormal}>Which course did you like?</Text>
                <TextInput 
                    style={styles.textInput}
                    defaultValue="ex. CS624"
                />
            </View>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Core Requirements</Text>
                <Text style={styles.textHeader}>(24 Credits)</Text>
            </View>
            <View>
                <Text style={styles.textNormal}>CS 504 Software Engineering</Text>
                <Text style={styles.textNormal}>CS 506 Programming for Computing</Text>
                <Text style={styles.textNormal}>CS 519 Cloud Computing Overview</Text>
                <Text style={styles.textNormal}>CS 533 Computer Architecture</Text>
                <Text style={styles.textNormal}>CS 547 Secure Systems and Programs</Text>
                <Text style={styles.textNormal}>CS 622 Discrete Math and Algorithms for Computing</Text>
                <Text style={styles.textNormal}>DS 510 Artificial Intelligence for Data Science</Text>
                <Text style={styles.textNormal}>DS 620 Machine Learning & Deep Learning</Text>
            </View>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Depth of Study</Text>
                <Text style={styles.textHeader}>(6 Credits)</Text>
            </View>
            <View>
                <Text style={styles.textNormal}>CS 624 Full-Stack Development - Mobile App</Text>
                <Text style={styles.textNormal}>CS 628 Full-Stack Development - Web App</Text>
            </View>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Capstone Project</Text>
                <Text style={styles.textHeader}>(3 Credits)</Text>
            </View>
            <View>
                <Text style={styles.textNormal}>CS 687 Computer Science Capstone</Text>
            </View>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>Course Catalog</Text>
            </View>
            <View>
                <HyperLink
                    url={'https://cityu.smartcatalogiq.com/en/2024-2025/2024-2025-catalog/master-degrees/computer-science-master-of-science/'}
                    text={"Link to Catalog"}
                />
            </View>
        </ScrollView>
    );
};
  
const styles  = StyleSheet.create({
        image: {
            height: 250,
            width: 250,
            margin: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textInput: {
            height: 40,
            width: 350,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10
        },
        viewHeader: {
            backgroundColor: 'yellow',
            paddingBottom: 5,
            marginTop: 20
        },
        textHeader: {
            fontSize: 40,
            fontWeight: 'bold'
        },
        textNormal: {
            fontSize: 16,
            marginLeft: 2
        },
        linkStyle: {
            fontSize: 16,
            color: 'blue',
            textDecorationLine: 'underline'
        }
})
  
export default App;
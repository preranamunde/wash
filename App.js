import { StatusBar, View} from "react-native-web";
import { StyleSheet } from "react-native";

export default function App() {
    return(
        <View style={StyleSheet.container}>
            <Text>prerana munde</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
});
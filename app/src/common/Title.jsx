import { Text } from "react-native"

export default function Title({text}){
    return (
        <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 48,
            fontFamily: 'LeckerliOne-Regular'
        }}>
            {text}
        </Text>
    )
}
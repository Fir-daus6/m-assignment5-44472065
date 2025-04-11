import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, FlatList, Pressable, SectionList } from "react-native";
import Filter from '../assets/filt.png'
import Feather from '@expo/vector-icons/Feather';
import Man from '../assets/man.png'
import Rectangle from '../assets/rectangle1.png'

const flatData = [
    {
        id: 1,
        title: 'Exercise',
        subTitle: '12 Tasks',
        image: Man
    },
    {
        id: 2,
        title: 'Study',
        subTitle: '12 Tasks',
        image: require('../assets/woman.png')
    },
    {
        id: 3,
        title: 'Code',
        subTitle: '12 Tasks',
        image: Man
    },
    {
        id: 4,
        title: 'Eat',
        subTitle: '12 Tasks',
        image: require('../assets/woman.png')
    },
    {
        id: 5,
        title: 'Cook',
        subTitle: '12 Tasks',
        image: require('../assets/woman.png')
    },
    {
        id: 6,
        title: 'Read',
        subTitle: '12 Tasks',
        image: Man,
    },
    {
        id: 7,
        title: 'Dance',
        subTitle: '12 Tasks',
        image: require('../assets/woman.png')
    },
    {
        id: 8,
        title: 'Write',
        subTitle: '12 Tasks',
        image: Man
    }
    
]

const ongoingTask = [
    {
        id: 1,
        name: 'Mobile App Deveopment',
    },
    {
        id: 2,
        name: 'Web Development',
    },
    {
        id: 3,
        name: 'Push Ups',
    },
    {
        id: 4,
        name: 'UI/UX Design',
    },
    {
        id: 5,
        name: 'Write Blog Post',
    },
    {
        id: 6,
        name: 'Attend Meeting',
    },
    {
        id: 7,
        name: 'Fix UI Bugs',
    },
    {
        id: 8,
        name: 'Plan Sprint Tasks',
    },
    {
        id: 9,
        name: 'Test App Features',
    },
    {
        id: 10,
        name: 'Review Pull Requests',
    },
    {
        id: 11,
        name: 'Work on Portfolio',
    },
    {
        id: 12,
        name: 'Read Technical Article',
    },
    {
        id: 13,
        name: 'Prepare Presentation',
    },
    {
        id: 14,
        name: 'Learn React Native',
    },
    {
        id: 15,
        name: 'Study Algorithms',
    }
]


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                {/*View Text */}
                <View>
                    <Text style={styles.mainText}>Hello , Devs</Text>
                    <Text style={styles.subText}>14 tasks today</Text>
                </View>
                {/* Profile Image View */}
                <View style={styles.profile}>
                    <Image source={require('../assets/person.png')}/>
                </View>
            </View>
            {/*Search and filter section*/}
            <View style={styles.search}>
                <TextInput
                placeholder="Search"
                style={styles.input}
                />

                <TouchableOpacity style={styles.filter}>
                    <Image source={Filter}/>
                </TouchableOpacity>
                <Feather name="search" size={24} color="black"
                style={styles.searchIcon} />
                
            </View>

            <Text style={styles.categories}>Categories</Text>

            <View style={styles.divider}>
                <FlatList
                    data={flatData}
                    renderItem={({item}) => (
                     <Pressable style={styles.flatMain}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subTitle}>{item.subTitle}</Text>

                        <Image source={item.image} style={styles.image}/>
                     </Pressable>
                   )}
                   keyExtractor={(item) => item.id}
                   horizontal
                   showsHorizontalScrollIndicator={false}
                />
            </View>

            <Text style={styles.task}>Ongoing Task</Text>

            <View style={styles.card}>
                <FlatList
                data={ongoingTask}
                renderItem={({item}) => (
                    <Pressable style={styles.flex}>
                        <Text style={styles.name}>{item.name}</Text>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                vertical
                showsVerticalScrollIndicator={false}
                />
            </View>

            
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F0E8',
        paddingTop: 52,
        paddingLeft: 20,
    },
    header: {
        marginRight: 19,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 12,
        fontWeight: 'medium',
    },
    profile: {
        width: 50,
        height: 52,
        backgroundColor: 'white',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        width: 280,
        height: 48,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 45,
    },
    filter: {
        width: 50,
        height: 48,
        backgroundColor: '#F0522F',
        display: 'flex',
        justifyContent: 'center',
        alighnItems: 'center',
        borderRaduis: 15,
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    searchIcon: {
        position: 'absolute',
        marginLeft: 11,
    },
    categories: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
    },
    flatMain: {
        width: 186,
        height: 192,
        backgroundColor: 'white',
        borderRadius: 15 ,
        marginInlineEnd: 24
    },
    divider: {
        marginTop: 12,

    },
    title: {
        fontSize: 16,
        fontWeight: 'Bold',
        marginTop: 16,
        marginLeft: 14,
    },
    subTitle: {
        fontSize: 12,
        marginLeft: 14
    },
    image: {
        marginLeft: 21,
    },
    task: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24
    },
    flex: {
        width: 354,
        height: 128,
        paddingTop: 35,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingTop: 50,
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24
    },
   
    
    

})


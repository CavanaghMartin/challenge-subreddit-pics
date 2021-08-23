import React, { useEffect, useState } from 'react';
import { Image, Linking, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../Card';
import { styles } from '../Card';
const Page = ({ section }) => {
    const [jsonApi, setjsonApi] = useState([])
    const [loading, setLoading] = useState(true)


    async function fetchData() {
        try {
            // fetch the data from api
            let response = await fetch(`https://api.reddit.com/r/pics/${section}`)
            let json = await response.json();
            //ser the json into internal state
            setjsonApi(json.data.children)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        //fetch the data after rendering
        fetchData()
    }, [])

    //map all the objects to card components
    return (
        < >
            {loading && <Image
                style={{ width: 200, height: 200, margin: "22%" }}
                source={require("../../loader.gif")}
            />
            }
            {jsonApi[0] && <FlatList
                keyExtractor={item => item.data.title}
                data={jsonApi}
                refreshing={loading}
                onRefresh={() => fetchData()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { Linking.openURL('https://www.reddit.com' + item.data.permalink) }}
                        style={styles.card}
                    >
                        <Card
                            title={item.data.title}
                            username={item.data.author}
                            score={item.data.score}
                            comments={item.data.num_comments}
                            creationDate={item.data.created_utc}
                            image={item.data.thumbnail}
                            url={item.data.permalink}
                        />
                    </TouchableOpacity>
                )} />}

        </>
    )
}

export default Page

import React, { useEffect, useState } from 'react';
import {  ScrollView, Image } from 'react-native';
import Card from '../Card';
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
        <ScrollView >
            {loading && <Image
                style={{ width: 200,height: 200,margin:"22%" }}
                source={ require("../../loader.gif")}
            />
            }
            {jsonApi[0] && jsonApi.map((obj, index) => {
                return <Card
                    key={index}
                    title={obj.data.title}
                    username={obj.data.author}
                    score={obj.data.score}
                    comments={obj.data.num_comments}
                    creationDate={obj.data.created_utc}
                    image={obj.data.thumbnail}
                    url={obj.data.permalink}

                />
            })}
        </ScrollView>
    )
}

export default Page

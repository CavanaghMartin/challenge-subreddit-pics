import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import Card from '../Card';
const Page = ({section}) => {
    const [jsonApi, setjsonApi] = useState([])
    async function fetchData() {
        try {
            // fetch
            let response = await fetch(`https://api.reddit.com/r/pics/${section}`)
            let json = await response.json();
            setjsonApi(json.data.children)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <ScrollView >
            {jsonApi[0] && jsonApi.map((obj,index) => {
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

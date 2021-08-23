import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import Card from "../Card"
import React from 'react';
import timeDifference from '../../lib/timeDifference';

const onePost = {
    title: "random photo",
    username: "martin",
    score: 1233,
    comments: 12312,
    creationDate: timeDifference(1231239879872134),
    image: "https://m.media-amazon.com/images/I/61FlX89mYGL",
    url: "https://m.media-amazon.com/images/I/61FlX89ddlksdflkdmYGL"

}


describe('The Card component', () => {
    var component

    beforeEach(() => {
         component = render(<Card {...onePost} />);
    })

    it('render  correctly', () => {
        expect(component).toBeDefined()
    })

    
    it('render title of the post correctly', () => {
        expect(component.getByText(onePost.title)).not.toBeNull();
    });

    it('render username of the post correctly', () => {
        expect(component.queryByText("falseUser")).toBeNull();
        expect(component.getByText(onePost.username)).not.toBeNull();
        
    });
    
    it('render the number of comments of the post correctly', () => {
        expect(component.getByText(onePost.comments+" comments")).not.toBeNull();
    });
    it('render the score of the post correctly', () => {
        expect(component.getByText("score:"+onePost.score)).not.toBeNull();
    });
    
    it('render the relative date of the post correctly', () => {
        expect(component.getByText(onePost.creationDate)).not.toBeNull();
    });

});


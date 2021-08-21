import { render, screen, cleanup, fireEvent } from '@testing-library/react-native';
import Card from "../Card"
import React from 'react';


const onePost = { title: "random photo", username: "martin", score: "1233", comments: "4322", creationDate: "6 hours ago",  url: "https://m.media-amazon.com/images/I/61FlX89mYGL." }

afterEach(() => {
    cleanup();

})

test('render title of the post correctly', () => {   
    const component = render(<Card {...onePost} />);
    expect(component.getByText(onePost.title)).not.toBeNull();
});

test('render username of the post correctly', () => {
    const component = render(<Card {...onePost} />);
    expect(component.getByText(onePost.username)).not.toBeNull();
});

test('dont render false user', () => {
    const component = render(<Card {...onePost} />);
    expect(component.queryByText("falseUser")).toBeNull();
});
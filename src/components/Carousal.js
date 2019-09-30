import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
     
    src: 'PAGgAX7-street-art-wallpapers.jpg', 
    altText: 'Slide 1',
    caption: 'I learnt all this at Lambda School.',
    header: 'This is my React-1 Junkyard'
  },
  {
    src: 'martin-XZSJNlwlBBA-unsplash.jpg',
    altText: 'Slide 2',
    caption: 'Ronny Alvarado helped me, even on weekends, to create this.',
    header: 'Special Thanks to my Team Lead'
  },
  {
    src: 'charlize-birdsinger-oS3NqyXoFzA-unsplash.jpg',  
    altText: 'Slide 3',
    caption: 'Thank you for taking time to look at it.',
    header: 'This is React part of my portfolio website'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Meetup 1',
        image: 'http://image',
        address: 'An address in a place',
        description: 'A nice meetup'
    },
    {
        id: 'm2',
        title: 'Meetup 2',
        image: 'http://image',
        address: 'An address in a place',
        description: 'A nice meetup'
    },
    {
        id: 'm3',
        title: 'Meetup 3',
        image: 'http://image',
        address: 'An address in a place',
        description: 'A nice meetup'
    },
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage;
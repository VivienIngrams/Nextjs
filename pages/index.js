import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup 1",
    image: "http://image",
    address: "An address in a place",
    description: "A nice meetup",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image: "http://image",
    address: "An address in a place",
    description: "A nice meetup",
  },
  {
    id: "m3",
    title: "Meetup 3",
    image: "http://image",
    address: "An address in a place",
    description: "A nice meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

//export async function getStaticProps() {
//return {
// props: {
//   meetups: DUMMY_MEETUPS,
// },
// revalidate: 10
// };
//}

export default HomePage;

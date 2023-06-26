import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image=""
      title="Meetup"
      address="Address"
      description="Description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://hips.hearstapps.com/hmg-prod/images/moraine-lake-and-the-valley-of-the-ten-peaks-in-the-royalty-free-image-1571062944.jpg?crop=0.653xw:1.00xh;0.251xw,0&resize=2048:*",
        title: "Meetup",
        address: "Address",
        description: "Description",
      },
    },
  };
}

export default MeetupDetails;

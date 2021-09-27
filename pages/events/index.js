import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

function EventsPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>There are no events</h3>}
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </Layout>
  );
}

export default EventsPage;

export async function getStaticProps(props) {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 100,
  };
}

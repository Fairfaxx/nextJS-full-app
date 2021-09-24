import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import {API_URL} from '@/config/index';
import Link from 'next/link';

function HomePage({events}) {
  console.log(events)
  return (
    <Layout>
      <h1>Home Page</h1>
      {events.length === 0 && <h3>There are no events</h3>}
      {events.map(event => {
        return <EventItem key={event.id} event={event} />
      })}

      {events.length > 0 && (
        <Link href='/events'>
          <a className="btn-secondary">Check out all Events</a>
        </Link>
      )}
    </Layout>
  );
}

export default HomePage;

export async function getStaticProps(props) {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 100,
  };
}

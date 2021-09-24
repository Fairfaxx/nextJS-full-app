const { events } = require("./data.json");

export default function handler(req, res) {
  const evts = events.filter(evt => evt.slug === req.query.slug)

  if (req.method === "GET") {
    res.status(200).json(evts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Invalid ${req.method} is not allowed` });
  }
}

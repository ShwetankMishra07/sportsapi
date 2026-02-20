export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${q}+sports&lang=en&country=in&apikey=${process.env.GNEWS_API_KEY}`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
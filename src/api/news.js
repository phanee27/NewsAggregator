// api/news.js
export default async function handler(req, res) {
  const category = req.query.category || "general";
  const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=5`;

  const response = await fetch(apiUrl, {
    headers: {
      "X-Api-Key": process.env.NEWS_API_KEY,
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}

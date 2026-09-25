// No news articles have been published yet. This endpoint intentionally returns an empty list;
// do not add placeholder articles - anything listed here is shown to the public as fact.
export const getNewsArticles = (req, res) => {
  res.status(200).json({ success: true, count: 0, data: [] });
};

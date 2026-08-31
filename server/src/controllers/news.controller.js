export const getNewsArticles = (req, res) => {
  const articles = [
    {
      id: 1,
      category: "mobilisation",
      title: "Bluegrid Utilities Begins New Phase of Operational Mobilisation",
      date: "August 20, 2026",
      readTime: "3 min read",
      author: "Selbert George, Managing Director",
      snippet: "Bluegrid Utilities initiates a new operational mobilisation phase across regional infrastructure projects."
    },
    {
      id: 2,
      category: "training",
      title: "Investing in Utility Skills: Workforce Training and Readiness",
      date: "August 14, 2026",
      readTime: "3 min read",
      author: "Gautham Raj, Head of Operations",
      snippet: "Bluegrid Utilities strengthens its workforce readiness strategy with structured competency tracking."
    },
    {
      id: 3,
      category: "recruitment",
      title: "Behind the Mobilisation: Building Safe and Reliable Field Teams",
      date: "August 08, 2026",
      readTime: "4 min read",
      author: "Recruitment & Onboarding Team",
      snippet: "An inside look at Bluegrid's structured recruitment and vetting process."
    },
    {
      id: 4,
      category: "accreditations",
      title: "Bluegrid Utilities Progresses CHAS Standard Accreditation",
      date: "August 02, 2026",
      readTime: "3 min read",
      author: "Compliance Lead",
      snippet: "Bluegrid Utilities is working towards CHAS Standard accreditation as part of its commitment to formal health-and-safety assurance."
    },
    {
      id: 5,
      category: "operational-growth",
      title: "Growing Our Utility Delivery Capability Across England",
      date: "July 26, 2026",
      readTime: "3 min read",
      author: "Selbert George, Managing Director",
      snippet: "Bluegrid Utilities continues building operational capability across England."
    }
  ];

  const category = req.query.category;
  const filtered = category && category !== 'all' 
    ? articles.filter(a => a.category.toLowerCase() === category.toLowerCase())
    : articles;

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
};

const db = require("../config/mysql.config");

exports.displayDevs = (req, res) => {
  const reqDevs = `SELECT * FROM devs ORDER BY firstname`;
  db.query(reqDevs, (err, result) => {
    if (err) {
      res.status(500).json({
        message:
          "Une erreur serveur en lien avec la base de donnée est arrvée !",
        erreur: err,
      });
      return;
    } else {
      res.status(200).json({ freelancersList: result });
    }
  });
};

exports.survey = (req, res) => {
  const reqSurvey = `SELECT * FROM survey`;
  db.query(reqSurvey, (err, result) => {
    if (err) {
      res.status(500).json({
        message:
          "Une erreur serveur en lien avec la base de donnée est arrvée !",
        erreur: err,
      });
      return;
    } else {
      res.status(200).json({ surveyData: result });
    }
  });
};

exports.result = (req, res) => {
  // a1 : backend
  // a2 : SEO
  // a3 : maquette
  // a4 : back
  // a5 : back
  // a6 : mobile
  const { a1, a2, a3, a4, a5, a6 } = req.query;
  const result = [];
  if (a1 === "1" || a4 === "1" || a5 === "1") {
    result.push({
      title: "backend",
      description:
        "Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur",
    });
  }
  if (a2 === "1") {
    result.push({
      title: "seo",
      description: "Le SEO est en charge du référencement web d'une page",
    });
  }
  if (a3 === "0") {
    result.push({
      title: "design",
      description:
        "La personne en charge du design va devoir préparer les maquettes du site",
    });
  }
  if (a6 === "1") {
    result.push({
      title: "mobile",
      description:
        "Les développeurs mobile conçoivent des applications mobiles en natif (et non simplement en JavaScript)",
    });
  }
  result.push({
    title: "frontend",
    description:
      "Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.",
  });
  res.status(200).json({ resultsData: result });
};

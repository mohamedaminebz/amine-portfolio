import type { Note } from "../types/portfolio";

/**
 * Notes de terrain, français. Mêmes faits et mêmes chiffres que la version
 * anglaise : chaque métrique renvoie à une étude de cas réelle.
 */
export const notes: Note[] = [
  {
    slug: "measure-twice-migrate-once",
    date: "2026-03-18",
    readingMinutes: 5,
    tags: ["ClickHouse", "Data", "Migration"],
    projectId: "clickhouse-migration",
    title: "Vingt millions de lignes m'ont appris à mesurer deux fois",
    dek: "Sortir l'analytique de MySQL était la partie facile. Prouver que les chiffres restaient justes, c'était le travail.",
    body: [
      {
        type: "paragraph",
        text: "Les tableaux de bord étaient devenus victimes de leur propre succès. Chaque nouvelle question ajoutait une jointure, et des requêtes qui répondaient en une seconde ont commencé à expirer à l'heure de pointe. Nous savions que la charge analytique appartenait à ClickHouse. Restait à la déplacer sans modifier la vérité en silence.",
      },
      {
        type: "heading",
        text: "Partir des questions, pas du schéma",
      },
      {
        type: "paragraph",
        text: "Avant de créer la moindre table, j'ai listé les questions que les tableaux de bord posaient réellement. Presque toutes étaient des agrégations par période et par appareil, avec quelques cumuls par groupe. Cette liste a décidé de la clé de tri, du partitionnement et de la forme des vues matérialisées. Concevoir autour de vraies requêtes garde le schéma petit et rend les benchmarks honnêtes.",
      },
      {
        type: "heading",
        text: "Compter deux fois",
      },
      {
        type: "paragraph",
        text: "J'ai écrit des requêtes de contrôle des deux côtés et comparé les nombres de lignes par jour et par appareil. MySQL est resté en service pendant le remplissage des nouvelles tables, et j'ai refusé de déclarer la migration terminée avant que les deux côtés soient d'accord. Une migration n'est pas une copie. C'est une preuve.",
      },
      {
        type: "quote",
        text: "Si vous ne pouvez pas expliquer pourquoi deux chiffres devraient correspondre, vous ne comprenez pas encore les données.",
      },
      {
        type: "heading",
        text: "Ce que je referais",
      },
      {
        type: "list",
        items: [
          "Benchmarker avec les requêtes que les gens utilisent vraiment, pas avec des requêtes synthétiques.",
          "Garder un chemin de retour tant que l'ancien système n'a pas tourné en lecture seule sur un cycle complet.",
          "Écrire le runbook avant de toucher à la production, pas pendant l'incident.",
        ],
      },
      {
        type: "paragraph",
        text: "Résultat : 20 millions de lignes déplacées avec une intégrité complète et un stockage réduit de plus de 95 %. Mais ce dont je me souviens, c'est du tableau de comptage qui a enfin concordé, un vendredi après-midi.",
      },
    ],
  },
  {
    slug: "one-hundred-fifty-apis-is-a-design-problem",
    date: "2026-02-06",
    readingMinutes: 4,
    tags: ["Node.js", "API", "Architecture"],
    projectId: "pyrojs-refonte",
    title: "150 API, c'est un problème de conception, pas de frappe",
    dek: "Découper un monolithe, c'est surtout trouver les frontières. Les endpoints ne sont que les reçus.",
    body: [
      {
        type: "paragraph",
        text: "Quand une base de code n'est plus qu'à un déploiement d'un mauvais week-end, la tentation est de tout réécrire d'un coup. Nous ne l'avons pas fait. Nous avons d'abord cartographié les domaines : appareils, groupes, reporting, accès. Les frontières des services venaient de la façon dont le métier parlait déjà du système, pas d'un schéma trouvé dans un article.",
      },
      {
        type: "heading",
        text: "Le contrat d'abord, le code ensuite",
      },
      {
        type: "paragraph",
        text: "Avant d'implémenter une ressource, j'écrivais sa requête, sa réponse et son enveloppe d'erreur dans Swagger. Cela forçait les décisions de nommage et de pagination au grand jour, quand elles coûtaient encore peu cher. Quand les contrôleurs sont arrivés, l'équipe frontend avait déjà de quoi construire.",
      },
      {
        type: "quote",
        text: "Une API est un produit avec des utilisateurs que vous ne rencontrerez jamais. Le message d'erreur fait partie de l'interface.",
      },
      {
        type: "heading",
        text: "La migration est la fonctionnalité",
      },
      {
        type: "paragraph",
        text: "Déplacer les données de production de BigQuery vers MySQL n'était pas une tâche annexe. Cela avançait en parallèle des services, avec des contrôles de réconciliation et un plan de retour. La nouvelle architecture ne valait que lorsque les anciennes données pouvaient être crues à l'intérieur.",
      },
      {
        type: "heading",
        text: "Ce que le nombre cache",
      },
      {
        type: "paragraph",
        text: "On retient les 150+ endpoints. Ce qui a réellement changé la semaine de l'équipe, c'est le déploiement indépendant : une correction dans le reporting n'attendait plus la sortie de toute la plateforme. Le nombre est un effet secondaire de bonnes frontières.",
      },
    ],
  },
  {
    slug: "boring-cron-jobs-survive",
    date: "2026-01-12",
    readingMinutes: 4,
    tags: ["IoT", "Node.js", "Reliability"],
    projectId: "iot-reporting-service",
    title: "Les cron jobs ennuyeux sont ceux qui survivent",
    dek: "Dix tâches planifiées, deux mille appareils, et une leçon sur la conception pour le pire jour.",
    body: [
      {
        type: "paragraph",
        text: "Le brief semblait simple : envoyer des rapports sur la disponibilité des appareils. En pratique, un rapport est une promesse. Il doit arriver pour chaque groupe, le bon jour, avec des chiffres qui tiennent encore debout quand un appareil est hors ligne depuis une semaine sans que personne ne l'ait remarqué.",
      },
      {
        type: "heading",
        text: "Rendre chaque tâche exécutable deux fois",
      },
      {
        type: "paragraph",
        text: "Les cron jobs échouent. Les serveurs redémarrent. Une tâche qui suppose qu'elle tournera exactement une fois finira par envoyer deux fois le même rapport ou par sauter un groupe. J'ai rendu chaque exécution idempotente : elle calcule une fenêtre, écrit un résultat indexé par cette fenêtre, et n'envoie que si le résultat est nouveau.",
      },
      {
        type: "quote",
        text: "Une tâche planifiée qui échoue en silence est pire qu'aucune tâche planifiée.",
      },
      {
        type: "heading",
        text: "Les fuseaux horaires sont un choix produit",
      },
      {
        type: "paragraph",
        text: "Quotidien, hebdomadaire et mensuel ne sont pas de simples intervalles. Ce sont des promesses sur le moment où quelqu'un lit le rapport. J'ai gardé le calcul explicite, stocké les dates en UTC et affiché la planification dans l'heure locale du groupe. Toute une classe de bugs du type « le rapport est arrivé hier » a disparu.",
      },
      {
        type: "heading",
        text: "Donner un nom à l'échec",
      },
      {
        type: "paragraph",
        text: "Quand un appareil est en panne, la question utile n'est pas seulement de savoir s'il est en panne, mais à qui il appartient. Le service attribue la responsabilité par groupe et expose un état inconnu plutôt que de deviner. Cette seule décision a rendu les rapports assez fiables pour que les opérations agissent dessus.",
      },
    ],
  },
  {
    slug: "designing-for-gloves",
    date: "2025-11-20",
    readingMinutes: 3,
    tags: ["React Native", "Product", "UX"],
    projectId: "winshot-integration",
    title: "Concevoir un produit qu'on utilise avec des gants",
    dek: "Le terrain se moque de votre animation. Il veut que le bouton soit là où le pouce l'attend.",
    body: [
      {
        type: "paragraph",
        text: "L'une des contraintes les plus utiles que j'aie connues était l'application mobile utilisée par des personnes debout, dehors. Elles ne naviguent pas. Elles accomplissent une tâche entre deux autres, souvent d'une main, parfois avec des gants. Chaque tap supplémentaire a un coût.",
      },
      {
        type: "heading",
        text: "Moins d'états, un retour plus clair",
      },
      {
        type: "paragraph",
        text: "Nous avons réduit le module de défis à un chemin court : choisir, confirmer, voir le résultat. Les états de chargement et d'erreur ont été conçus avant le chemin nominal, parce qu'un utilisateur qui ne sait pas si son action a fonctionné va simplement réessayer. Les doubles soumissions sont un bug d'UX avant d'être un bug de backend.",
      },
      {
        type: "heading",
        text: "Les intégrations font partie de l'interface",
      },
      {
        type: "paragraph",
        text: "Connecter le produit au CRM et à Odoo signifiait que l'interface ne pouvait plus promettre une vérité instantanée. Nous avons affiché l'état de synchronisation au lieu de le cacher. Cette petite honnêteté a économisé du support et rendu le système plus lent mais plus fiable : c'est le compromis que les utilisateurs veulent vraiment.",
      },
      {
        type: "quote",
        text: "L'utilisabilité est aussi une fonctionnalité du backend. La latence et les états d'échec font partie du design.",
      },
      {
        type: "paragraph",
        text: "Je garde encore une note de ce projet sur mon bureau : construire pour la personne fatiguée, pressée, et peu impressionnée par l'interface. C'est un meilleur brief que la plupart des documents de design.",
      },
    ],
  },
];

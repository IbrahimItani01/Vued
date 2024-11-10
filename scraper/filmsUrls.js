let filmsUrls = [
  "https://www.pathe.fr/films/harry-potter-a-l-ecole-des-sorciers",

  "https://www.pathe.fr/films/harry-potter-et-la-chambre-des-secrets",

  "https://www.pathe.fr/films/le-diner-de-cons",

  "https://www.pathe.fr/films/harry-potter-et-le-prisonnier-d-azkaban",

  "https://www.pathe.fr/films/l-etrange-noel-de-m-jack-485",

  "https://www.pathe.fr/films/chantons-sous-la-pluie",

  "https://www.pathe.fr/films/pulp-fiction",

  "https://www.pathe.fr/films/le-chateau-dans-le-ciel",

  "https://www.pathe.fr/films/edward-aux-mains-d-argent",

  "https://www.pathe.fr/films/le-magicien-d-oz",

  "https://www.pathe.fr/films/mon-voisin-totoro",

  "https://www.pathe.fr/films/casino-royale",

  "https://www.pathe.fr/films/nausicaa-de-la-vallee-du-vent",

  "https://www.pathe.fr/films/harry-potter-et-la-coupe-de-feu",

  "https://www.pathe.fr/films/total-recall",

  "https://www.pathe.fr/films/gremlins",

  "https://www.pathe.fr/films/bohemian-rhapsody",

  "https://www.pathe.fr/films/les-cinq-legendes",

  "https://www.pathe.fr/films/la-nonne",

  "https://www.pathe.fr/films/harry-potter-et-l-ordre-du-phenix",

  "https://www.pathe.fr/films/harry-potter-et-le-prince-de-sang-mele",

  "https://www.pathe.fr/films/harry-potter-et-les-reliques-de-la-mort-partie-1",

  "https://www.pathe.fr/films/harry-potter-et-les-reliques-de-la-mort-partie-2",

  "https://www.pathe.fr/films/invasion-los-angeles",

  "https://www.pathe.fr/films/la-la-land",

  "https://www.pathe.fr/films/mamma-mia-le-film-2065",

  "https://www.pathe.fr/films/grease",

  "https://www.pathe.fr/films/edmond",

  "https://www.pathe.fr/films/la-favorite",

  "https://www.pathe.fr/films/la-loi-du-desir",

  "https://www.pathe.fr/films/bird-1988-2984",

  "https://www.pathe.fr/films/les-demoiselles-de-rochefort",

  "https://www.pathe.fr/films/west-side-story-1962-3831",

  "https://www.pathe.fr/films/heat",

  "https://www.pathe.fr/films/impitoyable",

  "https://www.pathe.fr/films/coraline",

  "https://www.pathe.fr/films/ponyo-sur-la-falaise",

  "https://www.pathe.fr/films/inglourious-basterds",

  "https://www.pathe.fr/films/gran-torino",

  "https://www.pathe.fr/films/forrest-gump",

  "https://www.pathe.fr/films/invictus",

  "https://www.pathe.fr/films/dragons",

  "https://www.pathe.fr/films/le-bon-la-brute-le-truand-4997",

  "https://www.pathe.fr/films/the-social-network",

  "https://www.pathe.fr/films/ridicule",

  "https://www.pathe.fr/films/pirates-des-caraibes-la-fontaine-de-jouvence",

  "https://www.pathe.fr/films/les-parapluies-de-cherbourg",

  "https://www.pathe.fr/films/il-etait-une-fois-en-amerique",

  "https://www.pathe.fr/films/skyfall",

  "https://www.pathe.fr/films/seven",

  "https://www.pathe.fr/films/stars-80",

  "https://www.pathe.fr/films/insaisissables",

  "https://www.pathe.fr/films/jurassic-park",

  "https://www.pathe.fr/films/conjuring-les-dossiers-warren",

  "https://www.pathe.fr/films/prisoners",

  "https://www.pathe.fr/films/carol",

  "https://www.pathe.fr/films/conjuring-2-le-cas-enfield",

  "https://www.pathe.fr/films/le-chant-de-la-mer",

  "https://www.pathe.fr/films/bonnie-et-clyde-8667",

  "https://www.pathe.fr/films/porco-rosso",

  "https://www.pathe.fr/films/the-greatest-showman",

  "https://www.pathe.fr/films/the-danish-girl",

  "https://www.pathe.fr/films/le-corniaud",

  "https://www.pathe.fr/films/bons-baisers-de-russie",

  "https://www.pathe.fr/films/au-service-secret-de-sa-majeste",

  "https://www.pathe.fr/films/l-espion-qui-m-aimait",

  "https://www.pathe.fr/films/la-tortue-rouge",

  "https://www.pathe.fr/films/sur-la-route-de-madison",

  "https://www.pathe.fr/films/dunkerque",

  "https://www.pathe.fr/films/matrix",

  "https://www.pathe.fr/films/c-est-arrive-pres-de-chez-vous",

  "https://www.pathe.fr/films/call-me-by-your-name",

  "https://www.pathe.fr/films/120-battements-par-minute",

  "https://www.pathe.fr/films/la-forme-de-l-eau",

  "https://www.pathe.fr/films/3-billboards-les-panneaux-de-la-vengeance",

  "https://www.pathe.fr/films/la-petite-fabrique-de-nuages",

  "https://www.pathe.fr/films/au-nom-de-la-terre",

  "https://www.pathe.fr/films/wicked-12390",

  "https://www.pathe.fr/films/conjuring-3-sous-l-emprise-du-diable",

  "https://www.pathe.fr/films/portrait-de-la-jeune-fille-en-feu",

  "https://www.pathe.fr/films/jojo-rabbit",

  "https://www.pathe.fr/films/bone-tomahawk",

  "https://www.pathe.fr/films/woman",

  "https://www.pathe.fr/films/le-dernier-duel",

  "https://www.pathe.fr/films/l-ombre-de-staline",

  "https://www.pathe.fr/films/le-pole-express-13407",

  "https://www.pathe.fr/films/bodyguard",

  "https://www.pathe.fr/films/annette",

  "https://www.pathe.fr/films/la-pat-patrouille-le-film",

  "https://www.pathe.fr/films/le-peuple-loup",

  "https://www.pathe.fr/films/transformers-le-commencement-13712",

  "https://www.pathe.fr/films/la-baleine-et-l-escargote",

  "https://www.pathe.fr/films/rouge",

  "https://www.pathe.fr/films/location-de-salle",

  "https://www.pathe.fr/films/le-gendarme-de-abobo",

  "https://www.pathe.fr/films/goliath",

  "https://www.pathe.fr/films/the-northman",

  "https://www.pathe.fr/films/kraven-le-chasseur-14386",

  "https://www.pathe.fr/films/l-amour-ouf",

  "https://www.pathe.fr/films/kamtchatka-lettres-a-olga",

  "https://www.pathe.fr/films/harold-et-le-crayon-magique-16112",

  "https://www.pathe.fr/films/le-seigneur-des-anneaux-la-guerre-des-rohirrim-18313",

  "https://www.pathe.fr/films/le-grand-noel-des-animaux-18415",

  "https://www.pathe.fr/films/300-18534",

  "https://www.pathe.fr/films/trois-mille-ans-a-t-attendre",

  "https://www.pathe.fr/films/as-bestas",

  "https://www.pathe.fr/films/film-surprise-18822",

  "https://www.pathe.fr/films/le-mur-qui-nous-separe",

  "https://www.pathe.fr/films/la-vie-des-hommes-infames",

  "https://www.pathe.fr/films/moi-moche-et-mechant-4-19174",

  "https://www.pathe.fr/films/joker-folie-a-deux",

  "https://www.pathe.fr/films/sonic-3-19215",

  "https://www.pathe.fr/films/groenland-enfants-des-glaces-cirqu-arctique-19268",

  "https://www.pathe.fr/films/altair-paris-un-an-a-paris",

  "https://www.pathe.fr/films/altair-ethiopie-au-coeur-de-l-abyssinie",

  "https://www.pathe.fr/films/vice-versa-2-19501",

  "https://www.pathe.fr/films/mufasa-le-roi-lion-19502",

  "https://www.pathe.fr/films/earwig",

  "https://www.pathe.fr/films/toute-la-beaute-et-le-sang-verse-19686",

  "https://www.pathe.fr/films/courts-metrages-1-festival-africlap",

  "https://www.pathe.fr/films/courts-metrages-3-festival-africlap",

  "https://www.pathe.fr/films/courts-metrages-2-festival-africlap",

  "https://www.pathe.fr/films/le-grinch-2000-19903",

  "https://www.pathe.fr/films/le-comte-de-monte-cristo-20027",

  "https://www.pathe.fr/films/ben-hur-20443",

  "https://www.pathe.fr/films/le-noel-de-teddy-l-ourson-20547",

  "https://www.pathe.fr/films/les-miserables-2013-34872",

  "https://www.pathe.fr/films/la-couleur-des-sentiments-35022",

  "https://www.pathe.fr/films/l-amour-et-les-forets-35104",

  "https://www.pathe.fr/films/c-est-le-monde-a-l-envers-35178",

  "https://www.pathe.fr/films/beetlejuice-beetlejuice-35311",

  "https://www.pathe.fr/films/a-toute-allure-35334",

  "https://www.pathe.fr/films/tuer-n-est-pas-jouer-35401",

  "https://www.pathe.fr/films/adieu-philippine-35448",

  "https://www.pathe.fr/films/rock-forever-35465",

  "https://www.pathe.fr/films/monsieur-aznavour-35492",

  "https://www.pathe.fr/films/niko-le-petit-renne-mission-pere-noel-35493",

  "https://www.pathe.fr/films/etat-limite-35619",

  "https://www.pathe.fr/films/leurs-enfants-apres-eux-35663",

  "https://www.pathe.fr/films/nelly-nadine-35668",

  "https://www.pathe.fr/films/goldeneye-35821",

  "https://www.pathe.fr/films/premier-contact-36053",

  "https://www.pathe.fr/films/watchmen-les-gardiens-36080",

  "https://www.pathe.fr/films/le-garcon-et-le-heron-36090",

  "https://www.pathe.fr/films/saravah-36203",

  "https://www.pathe.fr/films/shin-godzilla-36244",

  "https://www.pathe.fr/films/le-fil-36337",

  "https://www.pathe.fr/films/pirates-des-caraibes-la-malediction-du-black-pearl-36389",

  "https://www.pathe.fr/films/sauvages-36513",

  "https://www.pathe.fr/films/les-rendez-vous-de-l-anime-le-garcon-et-le-heron-36868",

  "https://www.pathe.fr/films/jamais-sans-mon-psy-36893",

  "https://www.pathe.fr/films/sans-rien-savoir-d-elle-36903",

  "https://www.pathe.fr/films/200-loup-36904",

  "https://www.pathe.fr/films/angelo-dans-la-foret-mysterieuse-36935",

  "https://www.pathe.fr/films/twilight-chapitre-2-tentation-37016",

  "https://www.pathe.fr/films/twilight-chapitre-3-hesitation-37017",

  "https://www.pathe.fr/films/twilight-chapitre-4-revelation-1ere-partie-37018",

  "https://www.pathe.fr/films/twilight-chapitre-5-revelation-2e-partie-37019",

  "https://www.pathe.fr/films/competition-international-41eme-festival-international-du-courts-metrages-d-aix-en-provence-37046",

  "https://www.pathe.fr/films/competition-experimental-41eme-festival-de-courts-metrages-d-aix-en-provence-37047",

  "https://www.pathe.fr/films/nuit-du-court-metrage-37055",

  "https://www.pathe.fr/films/louise-violet-37065",

  "https://www.pathe.fr/films/prodigieuses-37066",

  "https://www.pathe.fr/films/love-actually-37204",

  "https://www.pathe.fr/films/la-vallee-des-fous-37209",

  "https://www.pathe.fr/films/challenger-37290",

  "https://www.pathe.fr/films/tony-shelly-et-la-lumiere-magique-37349",

  "https://www.pathe.fr/films/la-soiree-stand-up-37420",

  "https://www.pathe.fr/films/peuples-du-froid-siberie-mongolie-himalaya-37462",

  "https://www.pathe.fr/films/macpat-le-chat-chanteur-37485",

  "https://www.pathe.fr/films/un-p-tit-truc-en-plus-37489",

  "https://www.pathe.fr/films/le-robot-sauvage-37764",

  "https://www.pathe.fr/films/sur-un-fil-37938",

  "https://www.pathe.fr/films/nosferatu-37940",

  "https://www.pathe.fr/films/girls-will-be-girls-37981",

  "https://www.pathe.fr/films/les-ours-gloutons-au-pole-nord-37987",

  "https://www.pathe.fr/films/la-plus-precieuse-des-marchandises-38002",

  "https://www.pathe.fr/films/louise-violet-espoir-en-tete-rotary-38006",

  "https://www.pathe.fr/films/clap-comedy-club-38055",

  "https://www.pathe.fr/films/jamais-plus-it-ends-with-us-38075",

  "https://www.pathe.fr/films/piece-by-piece-38076",

  "https://www.pathe.fr/films/pat-et-mat-un-dernier-tour-de-vis-38151",

  "https://www.pathe.fr/films/marcel-le-pere-noel-et-le-petit-livreur-de-pizzas-38153",

  "https://www.pathe.fr/films/vaiana-2-38160",

  "https://www.pathe.fr/films/blink-twice-38161",

  "https://www.pathe.fr/films/les-cadeaux-38162",

  "https://www.pathe.fr/films/tu-me-ressembles-38205",

  "https://www.pathe.fr/films/direct-action-38209",

  "https://www.pathe.fr/films/jouer-et-grandir-38245",

  "https://www.pathe.fr/films/ni-chaines-ni-maitres-38248",

  "https://www.pathe.fr/films/ozi-la-voix-de-la-foret-38336",

  "https://www.pathe.fr/films/venom-the-last-dance-38422",

  "https://www.pathe.fr/films/gladiator-ii-38423",

  "https://www.pathe.fr/films/saint-ex-38450",

  "https://www.pathe.fr/films/bambi-l-histoire-d-une-vie-dans-les-bois-38456",

  "https://www.pathe.fr/films/la-bella-estate-38459",

  "https://www.pathe.fr/films/connaissance-du-monde-cuba-r-evolution-d-un-reve-38504",

  "https://www.pathe.fr/films/connaissance-du-monde-madatrek-tour-de-madagascar-a-pied-et-en-famille-38505",

  "https://www.pathe.fr/films/terrifier-3-38623",

  "https://www.pathe.fr/films/lee-miller-38695",

  "https://www.pathe.fr/films/six-jours-38697",

  "https://www.pathe.fr/films/le-panache-38698",

  "https://www.pathe.fr/films/conclave-38700",

  "https://www.pathe.fr/films/4-zeros-38703",

  "https://www.pathe.fr/films/vivre-mourir-renaitre-38708",

  "https://www.pathe.fr/films/tehachapi-38788",

  "https://www.pathe.fr/films/emilia-perez-38789",

  "https://www.pathe.fr/films/motel-destino-38844",

  "https://www.pathe.fr/films/bird-38846",

  "https://www.pathe.fr/films/my-sunshine-38861",

  "https://www.pathe.fr/films/ernest-cole-photographe-38863",

  "https://www.pathe.fr/films/love-lies-bleeding-38874",

  "https://www.pathe.fr/films/tatami-38876",

  "https://www.pathe.fr/films/grand-tour-38909",

  "https://www.pathe.fr/films/limonov-la-ballade-38917",

  "https://www.pathe.fr/films/les-feux-sauvages-38918",

  "https://www.pathe.fr/films/diamant-brut-38919",

  "https://www.pathe.fr/films/misericorde-38920",

  "https://www.pathe.fr/films/everybody-loves-touda-38922",

  "https://www.pathe.fr/films/les-femmes-au-balcon-38924",

  "https://www.pathe.fr/films/le-royaume-38925",

  "https://www.pathe.fr/films/vingt-dieux-38926",

  "https://www.pathe.fr/films/l-histoire-de-souleymane-38927",

  "https://www.pathe.fr/films/septembre-sans-attendre-38939",

  "https://www.pathe.fr/films/the-apprentice-38942",

  "https://www.pathe.fr/films/anora-38943",

  "https://www.pathe.fr/films/oh-canada-38952",

  "https://www.pathe.fr/films/en-fanfare-38955",

  "https://www.pathe.fr/films/maria-2024-38962",

  "https://www.pathe.fr/films/se-souvenir-d-une-ville-38963",

  "https://www.pathe.fr/films/la-partition-sterben-38968",

  "https://www.pathe.fr/films/maja-une-epopee-finlandaise-38970",

  "https://www.pathe.fr/films/il-faut-sauver-noel-39007",

  "https://www.pathe.fr/films/animale-39037",

  "https://www.pathe.fr/films/sous-ecrous-39042",

  "https://www.pathe.fr/films/une-nuit-au-zoo-39043",

  "https://www.pathe.fr/films/flow-le-chat-qui-n-avait-plus-peur-de-l-eau-39044",

  "https://www.pathe.fr/films/niki-39046",

  "https://www.pathe.fr/films/en-tongs-au-pied-de-l-himalaya-39050",

  "https://www.pathe.fr/films/3-kilometres-jusqu-a-la-fin-du-monde-39054",

  "https://www.pathe.fr/films/quand-vient-l-automne-39055",

  "https://www.pathe.fr/films/megalopolis-39056",

  "https://www.pathe.fr/films/finalement-39057",

  "https://www.pathe.fr/films/trois-amies-39058",

  "https://www.pathe.fr/films/la-momie-39088",

  "https://www.pathe.fr/films/le-retour-de-la-momie-39089",

  "https://www.pathe.fr/films/la-momie-la-tombe-de-l-empereur-dragon-39090",

  "https://www.pathe.fr/films/les-graines-du-figuier-sauvage-39096",

  "https://www.pathe.fr/films/comme-le-feu-39844",

  "https://www.pathe.fr/films/slocum-et-moi-39846",

  "https://www.pathe.fr/films/barbes-little-algerie-39847",

  "https://www.pathe.fr/films/city-of-darkness-39848",

  "https://www.pathe.fr/films/sarah-bernhardt-la-divine-39853",

  "https://www.pathe.fr/films/la-fille-d-un-grand-amour-39855",

  "https://www.pathe.fr/films/on-aurait-du-aller-en-grece-39887",

  "https://www.pathe.fr/films/altair-le-grand-jeune-39942",

  "https://www.pathe.fr/films/altair-inde-39943",

  "https://www.pathe.fr/films/altair-senegal-39944",

  "https://www.pathe.fr/films/altair-thailande-39945",

  "https://www.pathe.fr/films/altair-terre-neuve-canada-39946",

  "https://www.pathe.fr/films/altair-rwanda-39947",

  "https://www.pathe.fr/films/altair-afrique-de-l-est-la-terre-en-marche-2-39948",

  "https://www.pathe.fr/films/le-lac-des-cygnes-39994",

  "https://www.pathe.fr/films/the-substance-40005",

  "https://www.pathe.fr/films/desert-of-namibia-40017",

  "https://www.pathe.fr/films/eephus-40021",

  "https://www.pathe.fr/films/good-one-40022",

  "https://www.pathe.fr/films/un-noel-en-famille-40036",

  "https://www.pathe.fr/films/tout-ira-bien-40058",

  "https://www.pathe.fr/films/the-outrun-40060",

  "https://www.pathe.fr/films/companion-40061",

  "https://www.pathe.fr/films/les-reines-du-drame-40065",

  "https://www.pathe.fr/films/il-etait-une-fois-michel-legrand-40066",

  "https://www.pathe.fr/films/smile-2-40082",

  "https://www.pathe.fr/films/l-art-d-etre-heureux-40089",

  "https://www.pathe.fr/films/memoires-d-un-corps-brulant-40090",

  "https://www.pathe.fr/films/planete-b-40122",

  "https://www.pathe.fr/films/mylene-farmer-nevermore-le-film-40143",

  "https://www.pathe.fr/films/l-ombre-du-commandant-40145",

  "https://www.pathe.fr/films/rabia-40159",

  "https://www.pathe.fr/films/mikado-40160",

  "https://www.pathe.fr/films/noel-a-miller-s-point-40161",

  "https://www.pathe.fr/films/shambhala-le-royaume-des-cieux-40162",

  "https://www.pathe.fr/films/par-amour-40168",

  "https://www.pathe.fr/films/voyage-a-gaza-40170",

  "https://www.pathe.fr/films/37-l-ombre-et-la-proie-40181",

  "https://www.pathe.fr/films/les-boules-de-noel-40182",

  "https://www.pathe.fr/films/croquette-le-chat-merveilleux-40221",

  "https://www.pathe.fr/films/mon-inseparable-40222",

  "https://www.pathe.fr/films/fotogenico-40252",

  "https://www.pathe.fr/films/criminal-squad-pantera-40257",

  "https://www.pathe.fr/films/strip-tease-integral-40259",

  "https://www.pathe.fr/films/une-part-manquante-40264",

  "https://www.pathe.fr/films/architecton-40266",

  "https://www.pathe.fr/films/la-ligne-de-l-ange-40268",

  "https://www.pathe.fr/films/totto-chan-la-petite-fille-a-la-fenetre-40290",

  "https://www.pathe.fr/films/crossing-istanbul-40333",

  "https://www.pathe.fr/films/le-jardin-zen-40335",

  "https://www.pathe.fr/films/the-big-short-le-casse-du-siecle-40364",

  "https://www.pathe.fr/films/memoire-d-un-escargot-40370",

  "https://www.pathe.fr/films/the-killer-40381",

  "https://www.pathe.fr/films/l-affaire-nevenka-40409",

  "https://www.pathe.fr/films/heretic-40410",

  "https://www.pathe.fr/films/conte-nuptial-40413",

  "https://www.pathe.fr/films/les-villes-sacrees-de-paris-a-lhassa-en-courant-au-coeur-des-religions-40446",

  "https://www.pathe.fr/films/guyane-une-pepite-en-amazonie-40449",

  "https://www.pathe.fr/films/un-ours-dans-le-jura-40502",

  "https://www.pathe.fr/films/100-000-milliards-40549",

  "https://www.pathe.fr/films/une-langue-universelle-40556",

  "https://www.pathe.fr/films/l-amour-au-present-40650",

  "https://www.pathe.fr/films/joli-joli-40706",

  "https://www.pathe.fr/films/ca-arrive-40708",

  "https://www.pathe.fr/films/quiet-life-40759",

  "https://www.pathe.fr/films/guadalupe-mere-de-l-humanite-40760",

  "https://www.pathe.fr/films/kafka-le-dernier-ete-40763",

  "https://www.pathe.fr/films/sa-majeste-des-mouches-40801",

  "https://www.pathe.fr/films/la-loire-le-chant-du-fleuve-40810",

  "https://www.pathe.fr/films/inde-la-route-des-epices-40811",

  "https://www.pathe.fr/films/la-grande-traversee-1800-km-a-pied-40812",

  "https://www.pathe.fr/films/corse-l-ile-de-beaute-40813",

  "https://www.pathe.fr/films/i-feel-fine-40819",

  "https://www.pathe.fr/films/le-retour-du-gendarme-de-abobo-40821",

  "https://www.pathe.fr/films/le-beau-role-40823",

  "https://www.pathe.fr/films/hiver-a-sokcho-40838",

  "https://www.pathe.fr/films/marmaille-40839",

  "https://www.pathe.fr/films/no-other-land-40875",

  "https://www.pathe.fr/films/carla-et-moi-42016",

  "https://www.pathe.fr/films/the-wicker-man-42068",

  "https://www.pathe.fr/films/brule-le-sang-42071",

  "https://www.pathe.fr/films/leni-riefenstahl-la-lumiere-et-les-ombres-42072",

  "https://www.pathe.fr/films/e-1027-eileen-gray-and-the-house-by-the-sea-42076",

  "https://www.pathe.fr/films/mika-ex-machina-42132",

  "https://www.pathe.fr/films/le-deluge-42135",

  "https://www.pathe.fr/films/smain-deconne-finement-42149",

  "https://www.pathe.fr/films/pablo-blessure-invisible-42182",

  "https://www.pathe.fr/films/la-source-42195",

  "https://www.pathe.fr/films/le-choix-du-pianiste-42197",

  "https://www.pathe.fr/films/500-jours-ensemble-42249",

  "https://www.pathe.fr/films/le-dossier-maldoror-42282",

  "https://www.pathe.fr/films/krishnamurti-la-revolution-du-silence-42289",

  "https://www.pathe.fr/films/the-wall-42290",

  "https://www.pathe.fr/films/here-les-plus-belles-annees-de-notre-vie-42366",

  "https://www.pathe.fr/films/au-boulot-42368",

  "https://www.pathe.fr/films/dakar-chronicles-42370",

  "https://www.pathe.fr/films/daddio-42399",

  "https://www.pathe.fr/films/le-choix-42415",

  "https://www.pathe.fr/films/retour-en-alexandrie-42416",

  "https://www.pathe.fr/films/la-reine-des-neiges-l-histoire-oubliee-42469",

  "https://www.pathe.fr/films/au-coeur-des-volcans-requiem-pour-katia-et-maurice-krafft-42496",

  "https://www.pathe.fr/films/la-chanson-de-jerome-42497",

  "https://www.pathe.fr/films/jure-n-2-42498",

  "https://www.pathe.fr/films/les-tempetes-42500",

  "https://www.pathe.fr/films/la-passion-selon-beatrice-42511",

  "https://www.pathe.fr/films/overlord-the-sacred-kingdom-42512",

  "https://www.pathe.fr/films/des-hommes-sans-loi-42540",

  "https://www.pathe.fr/films/legend-42541",

  "https://www.pathe.fr/films/pandora-42545",

  "https://www.pathe.fr/films/innocence-42549",

  "https://www.pathe.fr/films/love-hunters-42553",

  "https://www.pathe.fr/films/les-crimes-de-snowtown-42554",

  "https://www.pathe.fr/films/en-boucle-42557",

  "https://www.pathe.fr/films/else-42558",

  "https://www.pathe.fr/films/le-contes-des-contes-les-films-de-youri-norstein-42566",

  "https://www.pathe.fr/films/birdman-42602",

  "https://www.pathe.fr/films/trapezium-42613",

  "https://www.pathe.fr/films/seance-cinematheque-m-a-s-h-42635",

  "https://www.pathe.fr/films/seance-cinematheque-en-quatrieme-vitesse-42636",

  "https://www.pathe.fr/films/seance-cinematheque-point-limite-42637",

  "https://www.pathe.fr/films/seance-cinematheque-la-party-42638",

  "https://www.pathe.fr/films/seance-cinematheque-docteur-folamour-42639",

  "https://www.pathe.fr/films/seance-cinematheque-les-guerriers-de-la-nuit-42640",

  "https://www.pathe.fr/films/seance-cinematheque-trainspotting-42641",

  "https://www.pathe.fr/films/seance-cinematheque-les-funerailles-des-roses-42642",

  "https://www.pathe.fr/films/seance-cinematheque-orange-mecanique-42644",

  "https://www.pathe.fr/films/seance-cinematheque-interstellar-42646",

  "https://www.pathe.fr/films/seance-cinematheque-a-i-intelligence-artificiel-42647",

  "https://www.pathe.fr/films/seance-cinematheque-solaris-42648",

  "https://www.pathe.fr/films/seance-cinematheque-2001-l-odyssee-de-l-espace-42649",

  "https://www.pathe.fr/films/la-belle-verte-42666",

  "https://www.pathe.fr/films/quelques-minutes-apres-minuit-42667",

  "https://www.pathe.fr/films/donnie-darko-version-director-s-cut-42668",

  "https://www.pathe.fr/films/guerilla-des-farc-l-avenir-a-une-histoire-42696",

  "https://www.pathe.fr/films/the-complex-forms-42708",

  "https://www.pathe.fr/films/the-hyperboreans-42709",

  "https://www.pathe.fr/films/andrea-bocelli-30-the-celebration-42711",

  "https://www.pathe.fr/films/motion-picture-choke-42712",

  "https://www.pathe.fr/films/sophie-lavaud-le-dernier-sommet-42716",

  "https://www.pathe.fr/films/la-nuit-de-la-glisse-2024-42725",

  "https://www.pathe.fr/films/chambre-avec-vue-42730",

  "https://www.pathe.fr/films/un-paese-di-resistenza-42740",

  "https://www.pathe.fr/films/gelim-takimi-42746",

  "https://www.pathe.fr/films/lucky-baskhar-version-tamoul-42771",

  "https://www.pathe.fr/films/elle-s-au-cinema-sarah-bernhardt-la-divine-42809",

  "https://www.pathe.fr/films/singham-again-version-hindi-42811",

  "https://www.pathe.fr/films/bolivie-cultures-et-traditions-42812",

  "https://www.pathe.fr/films/georgie-hors-du-temps-42813",

  "https://www.pathe.fr/films/arlempdes-la-legende-du-premier-chateau-de-la-loire-42815",

  "https://www.pathe.fr/films/placebo-this-search-for-meaning-42822",

  "https://www.pathe.fr/films/la-chambre-d-a-cote-42826",

  "https://www.pathe.fr/films/manas-42853",

  "https://www.pathe.fr/films/no-nos-moveran-42858",

  "https://www.pathe.fr/films/exhuma-42923",

  "https://www.pathe.fr/films/veer-zaara-42926",

  "https://www.pathe.fr/films/hiding-saddam-hussein-42927",

  "https://www.pathe.fr/films/mon-beau-sapin-42940",

  "https://www.pathe.fr/films/xplore-alpes-festival-42961",

  "https://www.pathe.fr/films/o-grande-kilapy-42962",

  "https://www.pathe.fr/films/sadrak-42963",

  "https://www.pathe.fr/films/alda-et-maria-42964",

  "https://www.pathe.fr/films/kuzola-le-chant-des-racines-42965",

  "https://www.pathe.fr/films/le-mystere-de-waza-42970",

  "https://www.pathe.fr/films/shawn-mendes-for-friends-family-only-a-live-concert-film-42977",

  "https://www.pathe.fr/films/disco-afrika-une-histoire-malgache-42994",

  "https://www.pathe.fr/films/tejiri-42995",

  "https://www.pathe.fr/films/omi-nubu-42996",

  "https://www.pathe.fr/films/emna-42997",

  "https://www.pathe.fr/films/wall-street-42998",

  "https://www.pathe.fr/films/amaran-version-tamoul-43009",

  "https://www.pathe.fr/films/bloody-beggar-version-tamoul-43010",

  "https://www.pathe.fr/films/brother-version-tamoul-43011",

  "https://www.pathe.fr/films/banzo-43014",

  "https://www.pathe.fr/films/personne-n-y-comprend-rien-43015",

  "https://www.pathe.fr/films/pepe-43018",

  "https://www.pathe.fr/films/accident-domestique-43019",

  "https://www.pathe.fr/films/seance-all-inclusive-gladiator-ii-43025",

  "https://www.pathe.fr/films/le-bonheur-est-une-bete-sauvage-43027",

  "https://www.pathe.fr/films/les-vieux-fourneaux-43028",

  "https://www.pathe.fr/films/selection-courts-hispaniques-2024-43035",

  "https://www.pathe.fr/films/laufey-s-a-night-at-the-symphony-hollywood-bowl-43039",

  "https://www.pathe.fr/films/la-cite-de-dieu-43051",

  "https://www.pathe.fr/films/le-voyage-extraordinaire-de-samy-43060",

  "https://www.pathe.fr/films/pirates-des-caraibes-la-vengeance-de-salazar-43062",

  "https://www.pathe.fr/films/hayao-miyazaki-and-the-heron-43065",

  "https://www.pathe.fr/films/kanguva-version-tamoul-43115",

  "https://www.pathe.fr/films/solo-leveling-reawakening-43126",

  "https://www.pathe.fr/films/godzilla-minus-one-minus-color-43135",

  "https://www.pathe.fr/films/phantasm-43138",

  "https://www.pathe.fr/films/best-of-annecy-2024-43140",

  "https://www.pathe.fr/films/egoist-43142",

  "https://www.pathe.fr/films/jusqu-a-l-aube-43143",

  "https://www.pathe.fr/films/black-box-diaries-43144",

  "https://www.pathe.fr/films/dans-ses-yeux-43148",

  "https://www.pathe.fr/films/blitz-seance-speciale-43150",

  "https://www.pathe.fr/films/la-theorie-du-boxeur-43151",

  "https://www.pathe.fr/films/daft-punk-leiji-matsumoto-s-interstella-5555-the-5tory-of-the-5ecret-5tar-5ystem-43167",

  "https://www.pathe.fr/films/kanguva-version-telugu-43176",

  "https://www.pathe.fr/films/kanguva-version-hindi-43177",

  "https://www.pathe.fr/films/bhairathi-ranagal-43186",
];
export default filmsUrls;
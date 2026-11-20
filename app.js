// Explore Your Bible: generated from the design mockup. Edit freely.
import { h, render } from './preact.module.js';
import htm from './htm.module.js';
const html = htm.bind(h);

let queued = false;
function schedule() { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; draw(); }); }
class DCLogic {
  constructor() { this.props = {}; this.state = {}; }
  setState(patch) { this.state = Object.assign({}, this.state, patch); schedule(); }
  forceUpdate() { schedule(); }
}
var DIVS = [
  { id: 'law', name: 'Law', tag: 'Torah', t: 'OT', color: '#8A3E22', blurb: 'God’s promises and covenant with Israel.' },
  { id: 'hist', name: 'History', tag: 'Old Testament', t: 'OT', color: '#7A5512', blurb: 'How the covenant relationship plays out, mostly badly.' },
  { id: 'poet', name: 'Poetry & Wisdom', tag: '', t: 'OT', color: '#56661C', blurb: 'Worship, lament and hard-won wisdom.' },
  { id: 'major', name: 'Major Prophets', tag: '', t: 'OT', color: '#8A2E4A', blurb: 'Longer prophetic books: judgment, then hope.' },
  { id: 'minor', name: 'Minor Prophets', tag: 'The Twelve', t: 'OT', color: '#6B3F7A', blurb: 'Shorter, not lesser: Israel, the nations, and restoration.' },
  { id: 'gosp', name: 'Gospels', tag: '', t: 'NT', color: '#1F5A7A', blurb: 'Four portraits of Jesus.' },
  { id: 'acts', name: 'Acts', tag: 'New Testament history', t: 'NT', color: '#1F6656', blurb: 'The good news spreads from Jerusalem to Rome.' },
  { id: 'paul', name: 'Pauline Letters', tag: '', t: 'NT', color: '#2E4A8A', blurb: 'Thirteen letters to churches and individuals.' },
  { id: 'gen', name: 'General Letters', tag: 'Hebrews & the “catholic” letters', t: 'NT', color: '#4A5866', blurb: 'Letters for the church at large.' },
  { id: 'rev', name: 'Prophecy', tag: 'Revelation', t: 'NT', color: '#5B3A8A', blurb: 'The final vision: all things made new.' }
];

var ROWS = [
  ['gen','Genesis','Gen',50,'law',[1,2],'Creation, the fall, the flood and Babel. God promises Abraham land, descendants, and blessing for all nations through him.','Adam, Eve, Noah, Abraham, Sarah, Isaac, Jacob, Joseph'],
  ['exo','Exodus','Exod',40,'law',[3],'Moses leads Israel out of slavery in Egypt to Mount Sinai, where God makes a covenant with them and gives the law.','Moses, Aaron, Pharaoh'],
  ['lev','Leviticus','Lev',27,'law',[3],'Holiness: sacrifices, priesthood, purity laws and the Day of Atonement, so a people can live near a holy God.','Aaron and the priests'],
  ['num','Numbers','Num',36,'law',[3],'Two censuses bracket forty years of wandering in the wilderness after Israel refuses to enter Canaan.','Moses, Joshua, Caleb, Balaam'],
  ['deu','Deuteronomy','Deut',34,'law',[3],'“Second law”: Moses retells the covenant to a new generation on the edge of the Promised Land.','Moses'],
  ['jos','Joshua','Josh',24,'hist',[4],'Moses’ successor leads Israel into Canaan and divides the land among the twelve tribes.','Joshua, Rahab, Caleb'],
  ['jdg','Judges','Judg',21,'hist',[4],'Cycles of sin, oppression and rescue by “judges” spiral down into civil war.','Deborah, Gideon, Samson'],
  ['rut','Ruth','Ruth',4,'hist',[4],'A Moabite widow’s loyalty to her mother-in-law Naomi leads her to Boaz, and she becomes King David’s great-grandmother.','Ruth, Naomi, Boaz'],
  ['1sa','1 Samuel','1 Sam',31,'hist',[5],'Samuel, the last judge, anoints Saul as Israel’s first king, and later David.','Samuel, Saul, David, Jonathan'],
  ['2sa','2 Samuel','2 Sam',24,'hist',[5],'David’s reign. God promises him a dynasty that will last forever.','David, Bathsheba, Nathan, Absalom'],
  ['1ki','1 Kings','1 Kgs',22,'hist',[5,6],'Solomon builds the Temple, the kingdom splits into Israel and Judah, and Elijah confronts idolatry.','Solomon, Elijah, Ahab, Jezebel'],
  ['2ki','2 Kings','2 Kgs',25,'hist',[6],'Israel falls to Assyria in 722 BC, then Judah to Babylon in 586 BC.','Elisha, Hezekiah, Josiah'],
  ['1ch','1 Chronicles','1 Chr',29,'hist',[5],'Genealogies from Adam, then David’s reign and his preparations for the Temple.','David'],
  ['2ch','2 Chronicles','2 Chr',36,'hist',[5,6,7],'Judah’s kings from Solomon to the exile, ending with Cyrus letting the exiles return.','Solomon, Hezekiah, Josiah, Cyrus'],
  ['ezr','Ezra','Ezra',10,'hist',[8],'The exiles return and rebuild the Temple, and Ezra leads a spiritual renewal.','Zerubbabel, Ezra'],
  ['neh','Nehemiah','Neh',13,'hist',[8],'Rebuilding Jerusalem’s walls and renewing the covenant.','Nehemiah, Ezra'],
  ['est','Esther','Esth',10,'hist',[8],'A Jewish queen in Persia stops Haman’s plot to wipe out the Jews. The origin of Purim.','Esther, Mordecai, Haman'],
  ['job','Job','Job',42,'poet',[2],'A righteous man suffers terribly: why does God allow bad things to happen to good people?','Job and his friends'],
  ['psa','Psalms','Ps',150,'poet',[5],'Israel’s songbook: 150 prayers of praise, lament and thanksgiving.','David, Asaph, the sons of Korah'],
  ['pro','Proverbs','Prov',31,'poet',[5],'Wisdom sayings for making good decisions, passed from one generation to the next.','Solomon'],
  ['ecc','Ecclesiastes','Eccl',12,'poet',[5],'What is life really about? Everything is fleeting, so enjoy God’s gifts and fear God.','“The Teacher”'],
  ['sng','Song of Songs','Song',8,'poet',[5],'Love poetry celebrating romantic love, also long read as a picture of God and his people.','The two lovers'],
  ['isa','Isaiah','Isa',66,'major',[6],'Judgment, then comfort: Immanuel, the suffering servant, and new heavens and a new earth.','Isaiah, Hezekiah'],
  ['jer','Jeremiah','Jer',52,'major',[6,7],'The “weeping prophet” warns that exile is coming and promises a new covenant.','Jeremiah, Baruch'],
  ['lam','Lamentations','Lam',5,'major',[7],'Five poems mourning the fall of Jerusalem in 586 BC.','Jeremiah (traditionally)'],
  ['ezk','Ezekiel','Ezek',48,'major',[7],'A priest in exile sees God’s glory leave the Temple, dry bones come to life, and a future temple.','Ezekiel'],
  ['dan','Daniel','Dan',12,'major',[7],'Faithful exiles in Babylon, and visions of empires giving way to God’s everlasting kingdom.','Daniel, Shadrach, Meshach, Abednego'],
  ['hos','Hosea','Hos',14,'minor',[6],'A prophet’s marriage to an unfaithful wife pictures Israel’s idolatry and God’s faithful love.','Hosea, Gomer'],
  ['joe','Joel','Joel',3,'minor',[6],'A locust plague warns of the Day of the LORD, and God promises to pour out his Spirit.','Joel'],
  ['amo','Amos','Amos',9,'minor',[6],'A farmer-prophet demands justice: “let justice roll down like waters.”','Amos'],
  ['oba','Obadiah','Obad',1,'minor',[7],'Judgment on Edom. The shortest book in the Old Testament.','Obadiah'],
  ['jon','Jonah','Jonah',4,'minor',[6],'A reluctant prophet, a great fish, and God’s mercy on Israel’s enemy Nineveh.','Jonah'],
  ['mic','Micah','Mic',7,'minor',[6],'Do justice, love kindness, walk humbly. A ruler will come from Bethlehem.','Micah'],
  ['nah','Nahum','Nah',3,'minor',[6],'The fall of Nineveh, capital of Assyria.','Nahum'],
  ['hab','Habakkuk','Hab',3,'minor',[6],'A prophet questions God about injustice: “the righteous shall live by faith.”','Habakkuk'],
  ['zep','Zephaniah','Zeph',3,'minor',[6],'The Day of the LORD, then restoration.','Zephaniah'],
  ['hag','Haggai','Hag',2,'minor',[8],'Urges the returned exiles to rebuild the Temple.','Haggai, Zerubbabel'],
  ['zec','Zechariah','Zech',14,'minor',[8],'Visions of restoration, and a humble king coming on a donkey.','Zechariah'],
  ['mal','Malachi','Mal',4,'minor',[8],'Rebukes careless worship and promises “Elijah” will come before the Day of the LORD. The Old Testament’s last word.','Malachi'],
  ['mat','Matthew','Matt',28,'gosp',[10],'Jesus as King and Messiah, son of David, fulfilling Old Testament prophecy.','Jesus, the Twelve, John the Baptist'],
  ['mrk','Mark','Mark',16,'gosp',[10],'The shortest, fastest Gospel: Jesus as the servant who suffers for his people.','Jesus, Peter'],
  ['luk','Luke','Luke',24,'gosp',[10],'A researched, orderly account for Theophilus, with special care for outsiders. Part 1 of Luke–Acts.','Jesus, Mary, Zacchaeus'],
  ['jhn','John','John',21,'gosp',[10],'Seven signs and the “I am” sayings, written so that you may believe Jesus is the Son of God.','Jesus, Nicodemus, Lazarus, Thomas'],
  ['act','Acts','Acts',28,'acts',[11],'Pentecost, then the good news spreads from Jerusalem to Rome through Peter and Paul.','Peter, Stephen, Paul, Barnabas'],
  ['rom','Romans','Rom',16,'paul',[11],'The fullest explanation of the gospel: made right with God by faith, Jew and Gentile alike.','Paul, Phoebe'],
  ['1co','1 Corinthians','1 Cor',16,'paul',[11],'Fixing a divided church. Includes the love chapter (13) and the resurrection chapter (15).','Paul, Apollos'],
  ['2co','2 Corinthians','2 Cor',13,'paul',[11],'Paul defends his ministry: God’s strength shows up in weakness.','Paul, Titus'],
  ['gal','Galatians','Gal',6,'paul',[11],'Gentiles are made right with God by faith, not by keeping the law of Moses.','Paul, Peter'],
  ['eph','Ephesians','Eph',6,'paul',[11],'The church as one body, and how to walk worthy of the calling.','Paul'],
  ['php','Philippians','Phil',4,'paul',[11],'Joy in Christ, written from prison.','Paul, Timothy, Epaphroditus'],
  ['col','Colossians','Col',4,'paul',[11],'Christ is supreme over all; set your minds on things above.','Paul, Epaphras'],
  ['1th','1 Thessalonians','1 Thess',5,'paul',[11],'Encouragement about Jesus’ return and how to live while waiting.','Paul, Silas, Timothy'],
  ['2th','2 Thessalonians','2 Thess',3,'paul',[11],'Clearing up confusion about the Day of the Lord.','Paul'],
  ['1ti','1 Timothy','1 Tim',6,'paul',[11],'How to run the church in Ephesus in an orderly way.','Paul, Timothy'],
  ['2ti','2 Timothy','2 Tim',4,'paul',[11],'Likely Paul’s last letter: guard the gospel and keep going.','Paul, Timothy'],
  ['tit','Titus','Titus',3,'paul',[11],'Appointing leaders and teaching good living on Crete.','Paul, Titus'],
  ['phm','Philemon','Phlm',1,'paul',[11],'A plea for Onesimus, a runaway slave who has become a Christian.','Paul, Philemon, Onesimus'],
  ['heb','Hebrews','Heb',13,'gen',[11],'Author unknown. Jesus is the great high priest of a better covenant. Includes the “hall of faith” (ch. 11).','Jesus, Melchizedek, Abraham, Moses'],
  ['jas','James','Jas',5,'gen',[11],'Real faith shows itself in action.','James'],
  ['1pe','1 Peter','1 Pet',5,'gen',[11],'Hope and faithfulness while Christians suffer.','Peter'],
  ['2pe','2 Peter','2 Pet',3,'gen',[11],'Remember the truth, beware of false teachers, and expect Christ’s return.','Peter'],
  ['1jn','1 John','1 John',5,'gen',[11],'Walk in the light, love one another, and obey Jesus.','John'],
  ['2jn','2 John','2 John',1,'gen',[11],'Love in truth, and don’t welcome deceivers.','John, “the elect lady”'],
  ['3jn','3 John','3 John',1,'gen',[11],'Support faithful workers: a short note on hospitality.','John, Gaius, Diotrephes'],
  ['jud','Jude','Jude',1,'gen',[11],'Contend for the faith against people twisting Jesus’ teaching.','Jude'],
  ['rev','Revelation','Rev',22,'rev',[11],'John’s vision on Patmos: Christ returns, evil is defeated, and all things are made new.','John, the Lamb, the seven churches']
];

var ERAS = [
  { n: 1, name: 'Creation & early world', dates: 'Undated', people: 'Adam, Eve, Cain, Abel, Noah', sum: 'God creates a good world, and humanity rebels. The flood and the tower of Babel show sin spreading, setting up the need for rescue.' },
  { n: 2, name: 'Patriarchs', dates: 'c. 2000–1700 BC', people: 'Abraham, Sarah, Isaac, Jacob, Joseph', sum: 'God calls Abraham and promises him land, descendants, and blessing for every nation. The promise passes to Isaac and Jacob, and Joseph brings the family to Egypt.' },
  { n: 3, name: 'Exodus & wilderness', dates: 'c. 1446 or c. 1260 BC (debated)', people: 'Moses, Aaron, Miriam', sum: 'Israel is freed from slavery in Egypt and makes a covenant with God at Sinai, then wanders forty years before reaching the edge of the Promised Land.' },
  { n: 4, name: 'Conquest & Judges', dates: 'c. 1400/1200–1050 BC', people: 'Joshua, Deborah, Gideon, Samson, Ruth', sum: 'Israel settles Canaan, then drifts through centuries of disloyalty and rescue, with one bright story of faithfulness in Ruth.' },
  { n: 5, name: 'United Kingdom', dates: 'c. 1050–930 BC', people: 'Samuel, Saul, David, Solomon', sum: 'Israel asks for a king. David becomes the ideal king and receives the promise of an everlasting dynasty, and Solomon builds the Temple. Much of Israel’s poetry comes from this era.' },
  { n: 6, name: 'Divided Kingdom', dates: '930–586 BC', people: 'Elijah, Elisha, Isaiah, Hezekiah, Josiah', sum: 'The kingdom splits in two. Prophets warn both halves to return to God. Israel falls to Assyria in 722 BC, and Judah to Babylon in 586 BC.' },
  { n: 7, name: 'Exile in Babylon', dates: '586–538 BC', people: 'Daniel, Ezekiel, Jeremiah', sum: 'Jerusalem and the Temple lie in ruins. In Babylon, the prophets mourn and hold on to hope of restoration.' },
  { n: 8, name: 'Return & restoration', dates: '538–c. 430 BC', people: 'Zerubbabel, Ezra, Nehemiah, Esther', sum: 'Persia lets the exiles go home. They rebuild the Temple and the walls, and wait for the fuller restoration the prophets promised.' },
  { n: 9, name: 'Between the testaments', dates: 'c. 430–5 BC', people: 'Alexander the Great, the Maccabees, Herod', sum: 'About 400 years with no new Protestant scripture. Persia, Greece, the Maccabees and finally Rome rule Judea, and hopes for a Messiah grow.' },
  { n: 10, name: 'Life of Jesus', dates: 'c. 5 BC – AD 30/33', people: 'Jesus, Mary, John the Baptist, the Twelve', sum: 'Jesus announces the kingdom of God, heals and teaches, is crucified, and rises again.' },
  { n: 11, name: 'Early church', dates: 'c. AD 30–95', people: 'Peter, Paul, James, John', sum: 'The Spirit comes at Pentecost and the message spreads to the Gentiles. Letters teach the young churches, and Revelation looks ahead to the end of the story.' }
];

var THEMES = [
  { id: 'covenant', name: 'Covenant', short: 'God binds himself to his people', ot: 'Noah (Gen 9), Abraham (Gen 12, 15), Sinai (Exod 19–24), David (2 Sam 7), and the promised new covenant (Jer 31).', nt: 'The Last Supper: “the new covenant in my blood” (Luke 22). Hebrews 8 explains the better covenant.', books: ['gen','exo','deu','2sa','jer','luk','heb'] },
  { id: 'kingdom', name: 'Kingdom', short: 'Who rightly rules the world', ot: 'God as Israel’s king; Saul, David and Solomon; the prophets’ promise of a future son of David; Daniel’s everlasting kingdom.', nt: 'Jesus proclaims the kingdom of God; Matthew presents him as King; Revelation shows the throne.', books: ['1sa','2sa','1ch','psa','isa','dan','mat','rev'] },
  { id: 'temple', name: 'God with us', short: 'Eden, tabernacle, Temple, and beyond', ot: 'Eden, then the tabernacle (Exodus), Solomon’s Temple, the glory departing (Ezekiel), and the rebuilt Temple (Ezra, Haggai).', nt: 'The Word “dwelt” among us (John 1:14), the church as God’s temple, and the New Jerusalem (Rev 21).', books: ['gen','exo','lev','1ki','ezk','ezr','hag','jhn','1co','eph','rev'] },
  { id: 'sacrifice', name: 'Sacrifice & atonement', short: 'How sin is dealt with', ot: 'The Passover lamb, the Levitical sacrifices, the Day of Atonement, and the suffering servant (Isa 53).', nt: 'The “Lamb of God” (John 1:29), Jesus as the once-for-all sacrifice in Hebrews, and the Lamb on the throne.', books: ['exo','lev','isa','jhn','rom','heb','1pe','rev'] },
  { id: 'exile', name: 'Exile & return', short: 'Losing home, longing to return', ot: 'Exile from Eden, slavery in Egypt, exile in Babylon, and the return under Ezra and Nehemiah.', nt: 'Jesus as the true restoration; believers as “exiles” awaiting their home (1 Peter); a new home in Revelation.', books: ['gen','exo','2ki','jer','lam','ezk','dan','ezr','neh','1pe','rev'] },
  { id: 'nations', name: 'Blessing for all nations', short: 'From one family to every people', ot: 'The promise to Abraham (Gen 12:3), Ruth the Moabite, Jonah sent to Nineveh, and Isaiah’s light to the nations.', nt: 'Acts carries the message to the Gentiles; Galatians and Ephesians unite Jew and Gentile; every nation before the throne (Rev 7).', books: ['gen','rut','jon','isa','act','rom','gal','eph','rev'] },
  { id: 'loyalty', name: 'Loyalty vs. idolatry', short: 'Exclusive loyalty to one God', ot: 'The Ten Commandments, Deuteronomy’s call to remember, the downward spiral of Judges and Kings, and Hosea’s unfaithful wife.', nt: 'Calls to stay loyal to Jesus and his teaching (James, 2 Peter, 1 John, Jude).', books: ['exo','deu','jdg','1ki','2ki','hos','jas','2pe','1jn','jud'] },
  { id: 'newcreation', name: 'Creation → new creation', short: 'The Bible’s bookends', ot: 'Genesis 1–2: a garden, the tree of life, and God with humanity. Isaiah promises new heavens and a new earth.', nt: 'Revelation 21–22: a garden-city, the tree of life, and God with humanity again.', books: ['gen','isa','rom','2co','rev'] },
  { id: 'messiah', name: 'The promised one', short: 'The Messiah', ot: 'The “seed of the woman” (Gen 3:15), the son of David, Isaiah’s servant, Micah’s ruler from Bethlehem, Daniel’s son of man.', nt: 'Jesus as Christ (Messiah). The genealogies in Matthew 1 and Luke 3 link him back to David and Abraham.', books: ['gen','2sa','psa','isa','mic','zec','dan','mat','mrk','luk','jhn','heb'] }
];

var TEXT_URLS = { bsb: 'bsb.json', kjv: 'kjv.json', apoc: 'apoc.json' };
var TR_NAMES = { bsb: 'Berean Standard Bible', kjv: 'King James Version', apoc: 'King James Version (1769) Apocrypha' };
var SUGGESTIONS = ['shepherd', 'living water', 'covenant', 'mercy', 'kingdom of God', 'fear not'];
var MAX_RESULTS = 100;

// ---- Map data: [name, lat, lon, label side r|l|b] ----
var PLACES = {
  eden: ['Eden (traditional area)', 31.0, 47.4, 'l'], ararat: ['Mount Ararat', 39.70, 44.30, 'r'],
  ur: ['Ur', 30.96, 46.10, 'r'], haran: ['Haran', 36.87, 39.03, 'r'], babylon: ['Babylon', 32.54, 44.42, 'r'],
  nineveh: ['Nineveh', 36.36, 43.15, 'r'], susa: ['Susa', 32.19, 48.26, 'l'], chebar: ['Chebar canal', 32.13, 45.23, 'b'],
  egypt: ['Goshen, Egypt', 30.80, 31.80, 'l'], alexandria: ['Alexandria', 31.20, 29.92, 'l'],
  redsea: ['Red Sea crossing', 29.95, 32.55, 'l'], sinai: ['Mount Sinai', 28.54, 33.97, 'r'],
  kadesh: ['Kadesh Barnea', 30.69, 34.49, 'l'], edom: ['Edom', 30.73, 35.61, 'r'], uz: ['Land of Uz (uncertain)', 30.6, 36.6, 'r'],
  moab: ['Moab', 31.40, 35.75, 'r'], nebo: ['Mount Nebo', 31.77, 35.73, 'r'], jordan: ['Jordan River', 31.84, 35.55, 'r'],
  jericho: ['Jericho', 31.87, 35.44, 'r'], jerusalem: ['Jerusalem', 31.78, 35.23, 'l'], bethlehem: ['Bethlehem', 31.70, 35.20, 'b'],
  tekoa: ['Tekoa', 31.64, 35.21, 'b'], hebron: ['Hebron', 31.53, 35.10, 'l'], beersheba: ['Beersheba', 31.25, 34.79, 'l'],
  gaza: ['Gaza', 31.50, 34.47, 'l'], gath: ['Gath', 31.70, 34.85, 'l'], moresheth: ['Moresheth', 31.60, 34.92, 'l'],
  engedi: ['En Gedi', 31.46, 35.39, 'r'], emmaus: ['Emmaus', 31.84, 35.02, 'l'], bethel: ['Bethel', 31.93, 35.22, 'l'],
  shiloh: ['Shiloh', 32.06, 35.29, 'r'], shechem: ['Shechem', 32.21, 35.28, 'r'], samaria: ['Samaria', 32.28, 35.20, 'l'],
  joppa: ['Joppa', 32.05, 34.75, 'l'], caesarea: ['Caesarea', 32.50, 34.89, 'l'], gilboa: ['Mount Gilboa', 32.47, 35.42, 'r'],
  jezreel: ['Valley of Jezreel', 32.56, 35.33, 'r'], tabor: ['Mount Tabor', 32.69, 35.39, 'r'], carmel: ['Mount Carmel', 32.73, 35.05, 'l'],
  nazareth: ['Nazareth', 32.70, 35.30, 'l'], cana: ['Cana', 32.75, 35.34, 'l'], capernaum: ['Capernaum', 32.88, 35.57, 'r'],
  caesphil: ['Caesarea Philippi', 33.25, 35.69, 'r'], dan: ['Dan', 33.25, 35.65, 'r'], tyre: ['Tyre', 33.27, 35.20, 'l'],
  lebanon: ['Lebanon', 33.90, 35.90, 'r'], damascus: ['Damascus', 33.51, 36.29, 'r'], antioch: ['Antioch (Syria)', 36.20, 36.16, 'r'],
  tarsus: ['Tarsus', 36.92, 34.90, 'r'], salamis: ['Salamis (Cyprus)', 35.18, 33.90, 'r'], paphos: ['Paphos', 34.76, 32.42, 'b'],
  pantioch: ['Pisidian Antioch', 38.30, 31.19, 'l'], iconium: ['Iconium', 37.87, 32.48, 'r'], lystra: ['Lystra', 37.58, 32.45, 'l'],
  derbe: ['Derbe', 37.35, 33.36, 'r'], troas: ['Troas', 39.75, 26.16, 'l'], philippi: ['Philippi', 41.01, 24.29, 'r'],
  thess: ['Thessalonica', 40.64, 22.94, 'r'], berea: ['Berea', 40.52, 22.20, 'l'], nicopolis: ['Nicopolis', 39.01, 20.73, 'l'],
  athens: ['Athens', 37.97, 23.73, 'r'], corinth: ['Corinth', 37.91, 22.88, 'l'], ephesus: ['Ephesus', 37.94, 27.34, 'l'],
  miletus: ['Miletus', 37.53, 27.28, 'l'], patmos: ['Patmos', 37.32, 26.55, 'l'], smyrna: ['Smyrna', 38.42, 27.14, 'l'],
  pergamum: ['Pergamum', 39.13, 27.18, 'l'], thyatira: ['Thyatira', 38.92, 27.84, 'r'], sardis: ['Sardis', 38.49, 28.04, 'r'],
  philadelphia: ['Philadelphia', 38.35, 28.52, 'r'], laodicea: ['Laodicea', 37.84, 29.11, 'r'], colossae: ['Colossae', 37.79, 29.26, 'r'],
  crete: ['Crete (Fair Havens)', 34.93, 24.78, 'b'], malta: ['Malta', 35.90, 14.45, 'b'], rome: ['Rome', 41.89, 12.49, 'r'],
  pontus: ['Pontus', 40.9, 37.0, 'r'], cappadocia: ['Cappadocia', 38.6, 35.0, 'r'], bithynia: ['Bithynia', 40.6, 30.2, 'r'],
  galatia: ['Galatia', 39.9, 32.8, 'r'], asia: ['Asia (province)', 38.9, 28.0, 'r']
};
var MAP_LABELS = [
  ['Mediterranean Sea', 34.6, 19.5, 'sea', 'far'], ['Mediterranean Sea', 32.5, 34.15, 'sea', 'near'], ['Aegean Sea', 38.6, 25.0, 'sea', 'far'],
  ['Black Sea', 42.6, 34.5, 'sea', 'far'], ['Red Sea', 27.6, 34.9, 'sea', 'far'], ['Persian Gulf', 28.4, 49.3, 'sea', 'far'],
  ['EGYPT', 28.6, 30.2, 'land', 'far'], ['ARABIA', 29.5, 40.5, 'land', 'far'], ['MESOPOTAMIA', 34.2, 42.3, 'land', 'far'],
  ['ASIA MINOR', 39.4, 34.4, 'land', 'far'], ['GREECE', 39.6, 21.9, 'land', 'far'], ['ITALY', 41.0, 15.6, 'land', 'far'],
  ['EUROPE', 48.5, 12.0, 'land', 'world'], ['AFRICA', 14.0, 18.0, 'land', 'world'], ['SPAIN', 40.0, -4.0, 'land', 'world'],
  ['PERSIA', 32.0, 54.0, 'land', 'world'], ['ETHIOPIA', 9.0, 39.0, 'land', 'world'], ['Atlantic Ocean', 30.0, -13.0, 'sea', 'world'],
  ['Arabian Sea', 15.0, 64.0, 'sea', 'world'], ['Caspian Sea', 42.0, 50.8, 'sea', 'world']
];
var ROUTE_COLORS = ['#7A3B1E', '#2E4A8A', '#1F6656', '#8A2E4A'];
var ACTS_MAP = {
  p: [['jerusalem', 'Pentecost: the church begins'], ['samaria', 'Philip preaches'], ['damascus', 'Saul meets the risen Jesus'], ['joppa', 'Peter’s rooftop vision'],
    ['caesarea', 'Cornelius believes; Paul later held here'], ['antioch', 'Believers first called Christians'], ['salamis', 'First stop of the first journey'],
    ['paphos', 'A Roman proconsul believes'], ['pantioch', 'Paul turns to the Gentiles'], ['iconium', 'Many believe; a plot to stone them'],
    ['lystra', 'Paul stoned and left for dead'], ['derbe', 'Last stop of the first journey'], ['troas', 'Vision of the man from Macedonia'],
    ['philippi', 'Lydia; an earthquake frees Paul and Silas'], ['thess', 'Church founded amid a riot'], ['berea', 'They search the Scriptures daily'],
    ['athens', 'Paul speaks at the Areopagus'], ['corinth', '18 months; meets Priscilla and Aquila'], ['ephesus', 'Nearly 3 years; the silversmiths’ riot'],
    ['miletus', 'Farewell to the Ephesian elders'], ['tyre', 'Disciples urge Paul not to go on'], ['crete', 'The great storm begins'],
    ['malta', 'Shipwrecked; bitten by a viper'], ['rome', 'Preaches under house arrest']],
  r: [['1st journey', ['antioch', 'salamis', 'paphos', 'pantioch', 'iconium', 'lystra', 'derbe']],
    ['2nd journey', ['antioch', 'derbe', 'lystra', 'troas', 'philippi', 'thess', 'berea', 'athens', 'corinth', 'ephesus', 'caesarea']],
    ['3rd journey', ['antioch', 'ephesus', 'corinth', 'troas', 'miletus', 'tyre', 'caesarea', 'jerusalem']],
    ['Voyage to Rome', ['caesarea', 'crete', 'malta', 'rome']]]
};
var SENT = 'Letter sent';
var BOOK_MAPS = {
  gen: { p: [['eden', 'Garden of Eden (traditionally near the rivers)'], ['ararat', 'The ark comes to rest (traditional site)'], ['babylon', 'Tower of Babel'],
    ['ur', 'Abram’s family sets out'], ['haran', 'God calls Abram to go (ch. 12)'], ['shechem', 'First stop in Canaan; the land promised'],
    ['bethel', 'Abram’s altar; Jacob’s ladder dream'], ['hebron', 'Abraham settles; the family tomb'], ['beersheba', 'Home of Isaac and Jacob'],
    ['egypt', 'Joseph rises; Jacob’s family settles in Goshen']],
    r: [['Abraham to Jacob', ['ur', 'haran', 'shechem', 'bethel', 'hebron', 'beersheba', 'egypt']]] },
  exo: { p: [['egypt', 'Slavery, plagues and the Passover'], ['redsea', 'Israel crosses the sea (traditional site)'], ['sinai', 'The Ten Commandments and the covenant']], line: 'The Exodus' },
  lev: { p: [['sinai', 'All of Leviticus is given at Sinai']] },
  num: { p: [['sinai', 'First census; Israel sets out'], ['kadesh', 'Spies report; Israel refuses to enter'], ['edom', 'Edom refuses passage'], ['moab', 'Second census; Balaam’s blessings']], line: '40 years in the wilderness' },
  deu: { p: [['moab', 'Moses’ farewell speeches'], ['nebo', 'Moses sees the land and dies']] },
  jos: { p: [['moab', 'Camp before crossing'], ['jordan', 'Israel crosses the Jordan'], ['jericho', 'The walls fall'], ['shiloh', 'Tabernacle set up; land divided'], ['shechem', 'Covenant renewed (ch. 24)'], ['hebron', 'Caleb’s inheritance']],
    r: [['Into Canaan', ['moab', 'jordan', 'jericho']]] },
  jdg: { p: [['tabor', 'Deborah and Barak rout Sisera'], ['jezreel', 'Gideon defeats Midian'], ['shiloh', 'The tabernacle'], ['gaza', 'Samson’s final stand'], ['dan', 'The tribe of Dan moves north']] },
  rut: { p: [['bethlehem', 'Naomi’s home; Ruth meets Boaz'], ['moab', 'Ruth’s homeland']], line: 'There and back' },
  '1sa': { p: [['shiloh', 'Samuel grows up at the tabernacle'], ['bethlehem', 'Samuel anoints young David'], ['gath', 'Goliath’s hometown; David hides here'], ['gilboa', 'Saul and Jonathan die in battle']] },
  '2sa': { p: [['hebron', 'David crowned king of Judah'], ['jerusalem', 'Captured and made the capital']], line: 'The capital moves' },
  '1ki': { p: [['jerusalem', 'Solomon builds the Temple'], ['shechem', 'The kingdom splits here'], ['samaria', 'Capital of the north'], ['dan', 'Golden calf shrine'], ['carmel', 'Elijah vs. the prophets of Baal'], ['sinai', 'Elijah flees to Horeb (Sinai)']],
    r: [['Elijah flees', ['carmel', 'sinai']]] },
  '2ki': { p: [['damascus', 'Naaman comes to Elisha'], ['samaria', 'Falls to Assyria (722 BC)'], ['nineveh', 'Assyria’s capital'], ['jerusalem', 'Falls to Babylon (586 BC)'], ['babylon', 'Judah taken into exile']],
    r: [['Israel exiled', ['samaria', 'nineveh']], ['Judah exiled', ['jerusalem', 'babylon']]] },
  '1ch': { p: [['hebron', 'David crowned'], ['jerusalem', 'The ark arrives; the Temple planned']] },
  '2ch': { p: [['jerusalem', 'Temple built, later destroyed'], ['babylon', 'Exile, ended by Cyrus’ decree']], line: 'Exile' },
  ezr: { p: [['babylon', 'Exiles set out'], ['jerusalem', 'Temple rebuilt (516 BC)']], line: 'The return' },
  neh: { p: [['susa', 'Nehemiah serves the Persian king'], ['jerusalem', 'Walls rebuilt in 52 days']], line: 'Nehemiah’s journey' },
  est: { p: [['susa', 'The Persian royal citadel']] },
  job: { p: [['uz', 'Job’s home (location uncertain)']] },
  psa: { p: [['jerusalem', 'Zion, city of the Temple'], ['babylon', 'Psalm 137: by the rivers of Babylon']] },
  pro: { p: [['jerusalem', 'Solomon’s royal court']] },
  ecc: { p: [['jerusalem', '“The Teacher, king in Jerusalem”']] },
  sng: { p: [['jerusalem', '“Daughters of Jerusalem”'], ['engedi', 'The vineyards of En Gedi'], ['lebanon', '“Come with me from Lebanon”']] },
  isa: { p: [['jerusalem', 'Isaiah’s city, besieged by Assyria'], ['nineveh', 'Assyria, the threat of his day'], ['babylon', 'Future exile; Babylon’s fall'], ['egypt', 'Oracles against Egypt']] },
  jer: { p: [['jerusalem', 'Warns of the coming fall'], ['babylon', 'Exiles receive his letter (ch. 29)'], ['egypt', 'Taken to Egypt against his will']], r: [['Jeremiah taken', ['jerusalem', 'egypt']]] },
  lam: { p: [['jerusalem', 'The ruined city, 586 BC']] },
  ezk: { p: [['jerusalem', 'Taken captive from here (597 BC)'], ['chebar', 'Visions by the Chebar canal'], ['babylon', 'Center of the exile']], r: [['Taken captive', ['jerusalem', 'chebar']]] },
  dan: { p: [['jerusalem', 'Taken as a youth (605 BC)'], ['babylon', 'The furnace and the lions’ den'], ['susa', 'Vision at the citadel of Susa (ch. 8)']], r: [['Taken captive', ['jerusalem', 'babylon']]] },
  hos: { p: [['samaria', 'Capital of the unfaithful north'], ['bethel', 'A shrine Hosea condemns']] },
  joe: { p: [['jerusalem', 'Call to gather at Zion']] },
  amo: { p: [['tekoa', 'Amos’ home, a shepherds’ village'], ['bethel', 'Preaches at the royal shrine'], ['samaria', 'Condemns its wealthy elite']], r: [['Sent north', ['tekoa', 'bethel']]] },
  oba: { p: [['edom', 'Judged for gloating over Jerusalem'], ['jerusalem', 'Plundered while Edom watched']] },
  jon: { p: [['joppa', 'Boards a ship fleeing God'], ['nineveh', 'Preaches; the city repents']], line: 'Sent to Nineveh' },
  mic: { p: [['moresheth', 'Micah’s hometown'], ['bethlehem', 'A ruler to come from here (5:2)'], ['jerusalem', 'Warned of judgment'], ['samaria', 'Warned of judgment']] },
  nah: { p: [['nineveh', 'Its fall foretold (it fell in 612 BC)']] },
  hab: { p: [['jerusalem', 'Habakkuk’s questions'], ['babylon', 'The rising Babylonian empire']] },
  zep: { p: [['jerusalem', 'The Day of the LORD on Judah'], ['nineveh', 'Nineveh will become a desert']] },
  hag: { p: [['jerusalem', 'Rebuild the Temple (520 BC)']] },
  zec: { p: [['jerusalem', 'Your king comes on a donkey (9:9)']] },
  mal: { p: [['jerusalem', 'Careless worship at the rebuilt Temple']] },
  mat: { p: [['bethlehem', 'Born; visited by the magi'], ['egypt', 'Flight from Herod'], ['nazareth', 'Grows up here'], ['jordan', 'Baptized by John'], ['capernaum', 'Base of his Galilee ministry'], ['caesphil', 'Peter: “You are the Christ”'], ['jerusalem', 'Crucified and raised']], line: 'Jesus’ path' },
  mrk: { p: [['jordan', 'Baptized by John'], ['capernaum', 'Healing and teaching in Galilee'], ['caesphil', 'Peter’s confession'], ['jerusalem', 'Final week, the cross and the empty tomb']], line: 'Jesus’ path' },
  luk: { p: [['nazareth', 'An angel visits Mary'], ['bethlehem', 'Born and laid in a manger'], ['capernaum', 'Ministry in Galilee'], ['jericho', 'Zacchaeus climbs a tree'], ['jerusalem', 'Death and resurrection'], ['emmaus', 'The risen Jesus walks with two disciples']], line: 'Jesus’ path' },
  jhn: { p: [['jordan', 'John the Baptist points to Jesus'], ['cana', 'Water into wine, the first sign'], ['capernaum', 'The bread of life'], ['shechem', 'Woman at the well (Sychar, near Shechem)'], ['jerusalem', 'Feasts, the cross and resurrection']], line: 'Jesus’ path' },
  act: ACTS_MAP,
  rom: { p: [['corinth', 'Written here, about AD 57'], ['rome', 'The church Paul longs to visit']], line: SENT },
  '1co': { p: [['ephesus', 'Written here'], ['corinth', 'The troubled church']], line: SENT },
  '2co': { p: [['philippi', 'Written from Macedonia'], ['corinth', 'The church Paul answers']], line: SENT },
  gal: { p: [['antioch', 'Paul confronts Peter here (ch. 2)'], ['pantioch', 'A Galatian church'], ['iconium', 'A Galatian church'], ['lystra', 'A Galatian church'], ['derbe', 'A Galatian church']] },
  eph: { p: [['rome', 'Written in prison (traditionally Rome)'], ['ephesus', 'Recipients']], line: SENT },
  php: { p: [['rome', 'Written in prison'], ['philippi', 'Paul’s partners in the gospel']], line: SENT },
  col: { p: [['rome', 'Written in prison'], ['colossae', 'A church Paul never visited']], line: SENT },
  '1th': { p: [['corinth', 'Written here'], ['thess', 'A young church facing persecution']], line: SENT },
  '2th': { p: [['corinth', 'Written here'], ['thess', 'Confused about the Day of the Lord']], line: SENT },
  '1ti': { p: [['philippi', 'Paul writes from Macedonia'], ['ephesus', 'Timothy leads the church here']], line: SENT },
  '2ti': { p: [['rome', 'Paul in prison, near the end'], ['ephesus', 'Timothy, probably still here']], line: SENT },
  tit: { p: [['crete', 'Titus appoints elders here'], ['nicopolis', 'Paul plans to spend the winter here']] },
  phm: { p: [['rome', 'Written in prison'], ['colossae', 'Philemon’s house church']], line: SENT },
  heb: { p: [['jerusalem', 'The Temple system the letter discusses'], ['rome', '“Those from Italy greet you” (13:24)']] },
  jas: { p: [['jerusalem', 'James leads the church here']] },
  '1pe': { p: [['rome', 'Written from “Babylon”, likely Rome'], ['pontus', 'Recipients'], ['galatia', 'Recipients'], ['cappadocia', 'Recipients'], ['asia', 'Recipients'], ['bithynia', 'Recipients']] },
  '2pe': { p: [['rome', 'Traditionally written in Rome, near Peter’s death']] },
  '1jn': { p: [['ephesus', 'Traditionally written by John in Ephesus']] },
  '2jn': { p: [['ephesus', 'Traditionally written by John in Ephesus']] },
  '3jn': { p: [['ephesus', 'Traditionally written by John in Ephesus']] },
  jud: { p: [['jerusalem', 'Jude, brother of James (traditional setting)']] },
  rev: { p: [['patmos', 'John receives the vision'], ['ephesus', 'Has lost its first love'], ['smyrna', 'Faithful in suffering'], ['pergamum', 'Where Satan’s throne is'], ['thyatira', 'Tolerates “Jezebel”'], ['sardis', 'Alive in name only'], ['philadelphia', 'An open door'], ['laodicea', 'Lukewarm']],
    r: [['Seven churches (chs. 2–3)', ['ephesus', 'smyrna', 'pergamum', 'thyatira', 'sardis', 'philadelphia', 'laodicea']]] }
};
var ERA_MAPS = {
  1: { p: [['eden', 'Garden of Eden (traditionally near the rivers)'], ['ararat', 'The ark comes to rest (traditional site)'], ['babylon', 'Tower of Babel']] },
  2: { p: BOOK_MAPS.gen.p.slice(3), line: 'Abraham to Jacob' },
  3: { p: [['egypt', 'Slavery and the Passover'], ['redsea', 'Crossing the sea (traditional site)'], ['sinai', 'Covenant and law'], ['kadesh', 'Israel refuses to enter'], ['edom', 'Detour around Edom'], ['moab', 'Plains of Moab'], ['nebo', 'Moses dies in sight of the land']], line: 'The Exodus (traditional route)' },
  4: { p: [['jericho', 'The walls fall'], ['shiloh', 'The tabernacle'], ['shechem', 'Covenant renewed'], ['tabor', 'Deborah’s victory'], ['gaza', 'Samson'], ['dan', 'Northernmost city'], ['bethlehem', 'Ruth and Boaz'], ['moab', 'Ruth’s homeland']] },
  5: { p: [['shiloh', 'Samuel’s youth'], ['bethlehem', 'David’s hometown'], ['gath', 'Goliath’s city'], ['gilboa', 'Saul dies'], ['hebron', 'David’s first capital'], ['jerusalem', 'Capital and Temple']] },
  6: { p: [['samaria', 'Northern capital'], ['jerusalem', 'Southern capital'], ['dan', 'Northern shrine'], ['bethel', 'Northern shrine'], ['carmel', 'Elijah’s contest'], ['damascus', 'Aram, a frequent enemy'], ['nineveh', 'Assyria takes Israel (722 BC)'], ['babylon', 'Babylon takes Judah (586 BC)']],
    r: [['Israel exiled', ['samaria', 'nineveh']], ['Judah exiled', ['jerusalem', 'babylon']]] },
  7: { p: [['jerusalem', 'Destroyed in 586 BC'], ['babylon', 'The exiles settle'], ['chebar', 'Ezekiel’s visions'], ['egypt', 'Some flee here with Jeremiah']], r: [['Into exile', ['jerusalem', 'babylon']]] },
  8: { p: [['susa', 'Persian capital: Esther, Nehemiah'], ['babylon', 'The return begins'], ['jerusalem', 'Temple and walls rebuilt']], r: [['The return', ['babylon', 'jerusalem']], ['Nehemiah', ['susa', 'jerusalem']]] },
  9: { p: [['alexandria', 'Greek city where the Scriptures were translated into Greek'], ['antioch', 'Capital of the Greek Seleucid kings'], ['jerusalem', 'Maccabean revolt (167 BC)'], ['rome', 'Rome takes Judea (63 BC)']] },
  10: { p: [['bethlehem', 'Birth'], ['nazareth', 'Childhood'], ['jordan', 'Baptism'], ['capernaum', 'Galilee ministry'], ['caesphil', 'Peter’s confession'], ['jerusalem', 'Cross and resurrection']], line: 'Jesus’ path' },
  11: { p: ACTS_MAP.p.concat([['patmos', 'John’s exile; Revelation']]), r: ACTS_MAP.r }
};

var MAP_LON0 = -18, MAP_LAT1 = 54, MAP_CX = Math.cos(35 * Math.PI / 180);
var MAP_FW = (72 - MAP_LON0) * MAP_CX, MAP_FH = MAP_LAT1 - 2;
var DRAG = {};
function mapProj(id) { var P = PLACES[id]; return { ux: (P[2] - MAP_LON0) * MAP_CX, uy: MAP_LAT1 - P[1] }; }
function pct(v) { return Math.round(v * 1000) / 1000; }

var MAP_ZMAX = 6;
function buildMap(def, aspect, aspectCss, wide, pin, zoom, go, mapKey, mapId, pan, dragging, listKey, listOpen) {
  var A = aspect;
  var pts = def.p.map(function (e, i) { var q = mapProj(e[0]); return { id: e[0], note: e[1], num: i + 1, ux: q.ux, uy: q.uy }; });
  var routes = def.r ? def.r : (def.line ? [[def.line, def.p.map(function (e) { return e[0]; })]] : []);
  var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  pts.forEach(function (p) { x0 = Math.min(x0, p.ux); x1 = Math.max(x1, p.ux); y0 = Math.min(y0, p.uy); y1 = Math.max(y1, p.uy); });
  if (wide) { x0 = (12 - MAP_LON0) * MAP_CX; x1 = (49.5 - MAP_LON0) * MAP_CX; y0 = MAP_LAT1 - 43; y1 = MAP_LAT1 - 27.5; }
  else {
    var span = Math.max(x1 - x0, y1 - y0);
    var pad = Math.max(0.35, 0.16 * span);
    var padX = Math.max(0.7, 0.3 * span); // extra room at the sides for place labels
    x0 -= padX; x1 += padX; y0 -= pad; y1 += pad;
    var mw = 2.4, mh = 1.6, cxm = (x0 + x1) / 2, cym = (y0 + y1) / 2;
    if (x1 - x0 < mw) { x0 = cxm - mw / 2; x1 = cxm + mw / 2; }
    if (y1 - y0 < mh) { y0 = cym - mh / 2; y1 = cym + mh / 2; }
  }
  var bw = x1 - x0, bh = y1 - y0, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  var k = Math.min(1 / bw, 1 / (A * bh));
  // Zoom steps: each step is 1.6x. Never zoom out past the whole map; at most 6 steps in (about 17x).
  var kMin = Math.min(1 / (MAP_FW * 0.98), 1 / (A * MAP_FH * 0.98));
  var z = zoom || 0;
  var kBase = k;
  k = Math.max(kMin, Math.min(kBase * Math.pow(1.6, MAP_ZMAX), kBase * Math.pow(1.6, z)));
  var noOut = k <= kMin * 1.001, noIn = z >= MAP_ZMAX - 0.001;
  var zMin = Math.log(kMin / kBase) / Math.log(1.6);
  var clampZ = function (v) { return Math.max(zMin, Math.min(MAP_ZMAX, v)); };
  // Keep the view inside the map when zoomed out.
  var halfW = 0.5 / k, halfH = 0.5 / (k * A);
  var baseCx = cx, baseCy = cy;
  if (pan && pan.key === mapId) { cx += pan.x; cy += pan.y; }
  var clampX = function (v) { return halfW * 2 >= MAP_FW ? MAP_FW / 2 : Math.min(Math.max(v, halfW), MAP_FW - halfW); };
  var clampY = function (v) { return halfH * 2 >= MAP_FH ? MAP_FH / 2 : Math.min(Math.max(v, halfH), MAP_FH - halfH); };
  cx = clampX(cx); cy = clampY(cy);
  var panPatch = function (ncx, ncy) { var o = {}; o[mapKey] = { key: mapId, x: clampX(ncx) - baseCx, y: clampY(ncy) - baseCy }; return o; };
  var isDragging = dragging === mapKey;
  var widthPct = MAP_FW * k * 100;
  var many = pts.length > 9 && widthPct < 2400;
  var active = null;
  var pinIds = {}, pinNames = {};
  pts.forEach(function (p) { pinIds[p.id] = true; pinNames[PLACES[p.id][0].toLowerCase().replace(/ \(.*$/, '')] = true; });
  pts.forEach(function (p) { if (p.id === pin) active = p.id; });
  var toggle = function (id) { return function () { go({ pin: pin === id ? null : id }); }; };
  return {
    aspect: aspectCss,
    left: pct((0.5 - cx * k) * 100), top: pct((0.5 - cy * k * A) * 100),
    width: pct(widthPct), height: pct(MAP_FH * k * A * 100),
    routes: routes.map(function (r, i) {
      return { color: ROUTE_COLORS[i % ROUTE_COLORS.length], points: r[1].map(function (id) { var q = mapProj(id); return (q.ux * 100).toFixed(1) + ',' + (q.uy * 100).toFixed(1); }).join(' ') };
    }),
    legend: routes.map(function (r, i) { return { label: r[0], color: ROUTE_COLORS[i % ROUTE_COLORS.length] }; }),
    hasLegend: routes.length > 0,
    labels: MAP_LABELS.filter(function (l) {
      if (!labelTierOk(l[4], widthPct)) return false;
      if (l[5] && pinIds[l[5]]) return false;
      if (l[3] !== 'river' && pinNames[l[0].toLowerCase()]) return false;
      return true;
    }).map(function (l) {
      var S = LABEL_STYLE[l[3]] || LABEL_STYLE.land;
      return { name: S.pre + l[0], x: pct((l[2] - MAP_LON0) * MAP_CX / MAP_FW * 100), y: pct((MAP_LAT1 - l[1]) / MAP_FH * 100),
        font: S.font, fstyle: S.fstyle, ls: S.ls, color: S.color, size: S.size, fw: S.fw, tx: S.tx, rot: l[6] || 0 };
    }).concat(riverLabels(cx, cy, halfW, halfH, pts)),
    pins: pts.map(function (p) {
      var P = PLACES[p.id], on = p.id === active, side = P[3];
      // Flip labels that would run off the visible edge of the map.
      var fx = (0.5 - cx * k) + (p.ux / MAP_FW) * (MAP_FW * k);
      var reach = Math.min(0.5, 0.25 + P[0].length * 0.015);
      if (side === 'l' && fx < reach) side = 'r';
      else if (side === 'r' && fx > 1 - reach) side = 'l';
      else if (side === 'b' && fx < 0.2) side = 'r';
      else if (side === 'b' && fx > 0.8) side = 'l';
      return {
        x: pct(p.ux / MAP_FW * 100), y: pct(p.uy / MAP_FH * 100), num: p.num, name: P[0],
        aria: p.num + '. ' + P[0] + ': ' + p.note,
        bg: on ? '#231E19' : '#7A3B1E', z: on ? 6 : 2,
        showLabel: on || !many,
        lx: side === 'l' ? '-16px' : side === 'b' ? '0px' : '16px',
        ly: side === 'b' ? '14px' : '-10px',
        tx: side === 'l' ? '-100%' : side === 'b' ? '-50%' : '0%',
        pick: toggle(p.id)
      };
    }),
    list: pts.map(function (p) {
      var on = p.id === active;
      return { num: p.num, name: PLACES[p.id][0], note: p.note, pressed: on, bg: on ? '#F6E2A8' : 'transparent', dot: on ? '#231E19' : '#7A3B1E', pick: toggle(p.id) };
    }),
    listOpen: listOpen,
    chevron: listOpen ? 0 : -90,
    listLabel: (listOpen ? 'Hide ' : 'Show ') + (pts.length === 1 ? 'the place' : 'all ' + pts.length + ' places in order'),
    toggleList: function () { var o = {}; o[listKey] = listOpen; go(o); }, // listKey stores "closed"
    toggleLabel: wide ? 'Zoom to the story' : 'Show whole region',
    toggle: function () { go({ mapWide: !wide, mapZoom: 0, eraPan: null, bookPan: null, chPan: null }); },
    centerOn: function (id) { var q = mapProj(id); return panPatch(q.ux, q.uy); },
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: isDragging ? 'none' : 'left 0.6s ease, top 0.6s ease, width 0.6s ease, height 0.6s ease',
    // One pointer drags the map; two (a pinch) zoom and pan together. Ctrl + wheel (a trackpad pinch) zooms too.
    down: function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target && e.target.closest && e.target.closest('button')) return;
      var r = e.currentTarget.getBoundingClientRect();
      var P = DRAG[mapKey + ':p'] || (DRAG[mapKey + ':p'] = {});
      P[e.pointerId] = { x: e.clientX, y: e.clientY };
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
      var ids = Object.keys(P);
      if (ids.length >= 2) {
        var a = P[ids[0]], b = P[ids[1]];
        DRAG[mapKey] = { pinch: true, d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2,
          w: r.width, cx: cx, cy: cy, z0: z, k0: k, moved: true };
      } else {
        DRAG[mapKey] = { x: e.clientX, y: e.clientY, w: r.width, cx: cx, cy: cy, moved: false };
      }
    },
    move: function (e) {
      var P = DRAG[mapKey + ':p'];
      if (P && P[e.pointerId]) P[e.pointerId] = { x: e.clientX, y: e.clientY };
      var d = DRAG[mapKey];
      if (!d) return;
      if (d.pinch) {
        var ids = Object.keys(P || {});
        if (ids.length < 2) return;
        var a = P[ids[0]], b = P[ids[1]];
        var dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        var nz = clampZ(d.z0 + Math.log(dist / d.d0) / Math.log(1.6));
        var nk = kBase * Math.pow(1.6, nz);
        var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        var pp = panPatch(d.cx - (mx - d.mx) / (d.w * nk), d.cy - (my - d.my) / (d.w * nk));
        pp.mapZoom = nz; pp.dragging = mapKey;
        go(pp);
        return;
      }
      var dx = e.clientX - d.x, dy = e.clientY - d.y;
      if (!d.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
      d.moved = true;
      var patch = panPatch(d.cx - dx / (d.w * k), d.cy - dy / (d.w * k));
      patch.dragging = mapKey;
      go(patch);
    },
    up: function (e) {
      var P = DRAG[mapKey + ':p'];
      if (P && e && e.pointerId != null) delete P[e.pointerId];
      var d = DRAG[mapKey];
      if (!d) return;
      if (d.pinch) {
        // Lifting one finger after a pinch carries on as a one-finger drag from where it is.
        var rest = Object.keys(P || {});
        if (rest.length === 1) { var q = P[rest[0]]; DRAG[mapKey] = { x: q.x, y: q.y, w: d.w, cx: cx, cy: cy, moved: true }; return; }
      }
      var moved = d.moved;
      delete DRAG[mapKey];
      if (P && !Object.keys(P).length) delete DRAG[mapKey + ':p'];
      if (moved) go({ dragging: null });
    },
    wheel: function (e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      var nz = clampZ(z - e.deltaY * 0.01);
      if (Math.abs(nz - z) > 0.001) go({ mapZoom: nz });
    },
    noOut: noOut, noIn: noIn,
    outColor: noOut ? '#B8AC98' : '#231E19', inColor: noIn ? '#B8AC98' : '#231E19',
    zoomOut: function () { if (!noOut) go({ mapZoom: clampZ(Math.ceil(z - 1e-6) - 1) }); },
    zoomIn: function () { if (!noIn) go({ mapZoom: clampZ(Math.floor(z + 1e-6) + 1) }); }
  };
}

// Longer "Read more" explanations. Paragraphs are separated by a blank line.
var MORE_BOOKS = {"gen": "Genesis means “beginnings.” Chapters 1–11 cover the origins of the world and humanity: creation, Adam and Eve’s disobedience, Cain and Abel, the flood, and the tower of Babel. Each story shows sin spreading and God responding with both judgment and mercy.\n\nChapters 12–50 narrow to one family. God calls Abraham and promises him land, countless descendants, and a blessing for all nations. The promise passes to Isaac, then to Jacob (renamed Israel) and his twelve sons. The book ends with Joseph, sold into slavery by his brothers, rising to power in Egypt and saving the family from famine, which sets the stage for Exodus.", "exo": "Generations later, Abraham’s descendants have grown into a nation enslaved in Egypt. God calls Moses from a burning bush, sends ten plagues on Egypt, frees Israel at the first Passover, and parts the sea for them to escape.\n\nAt Mount Sinai, God makes a covenant with Israel: he will be their God and they will be his people. He gives the Ten Commandments and further laws, and Israel builds the tabernacle, a portable tent where God’s presence dwells among them. In the middle of all this, the golden calf episode shows how quickly the people break faith, and how God renews the covenant anyway.", "lev": "Leviticus continues at Mount Sinai and explains how an imperfect people can live in the presence of a holy God. It describes the system of offerings, the ordination of Aaron and his sons as priests, laws about clean and unclean food and conditions, and the yearly Day of Atonement, when the high priest made atonement for the whole nation.\n\nIts second half, often called the Holiness Code, applies holiness to everyday life: honest business, care for the poor and the foreigner, sexual ethics, and the command to “love your neighbor as yourself” (19:18), which Jesus later calls the second greatest commandment.", "num": "Numbers takes its name from two censuses of Israel’s fighting men. Between them, Israel leaves Sinai, but the people complain again and again, and when twelve spies return from Canaan, ten say the land can’t be taken. The people believe them and refuse to go in.\n\nAs a result, that generation wanders in the wilderness for forty years until it dies out, except for Joshua and Caleb, the two faithful spies. The book also tells of Moses’ own failure at Meribah, the bronze serpent, and the foreign prophet Balaam, who is hired to curse Israel but can only bless it. It ends with the new generation camped on the plains of Moab.", "deu": "Deuteronomy (“second law”) is mostly three speeches Moses gives on the plains of Moab just before Israel enters Canaan. He retells the journey from Egypt, restates the law for a new generation, and calls them to love God with all their heart, soul and strength (the Shema, 6:4–5).\n\nThe book is shaped like an ancient treaty, with blessings for loyalty and curses for disobedience, and it looks ahead to both exile and restoration. It ends with Moses viewing the Promised Land from Mount Nebo and dying there. Jesus quotes Deuteronomy often, including all three of his answers when he is tempted in the wilderness.", "jos": "Joshua, Moses’ successor, leads Israel across the Jordan River into Canaan. Key episodes include Rahab hiding the spies, the walls of Jericho falling, the defeat at Ai after Achan’s sin, and campaigns in the south and north.\n\nThe second half divides the land among the twelve tribes and sets up cities of refuge. The book closes with Joshua renewing the covenant at Shechem and challenging the people: “choose this day whom you will serve… as for me and my house, we will serve the LORD” (24:15). The violence of the conquest is one of the hardest topics in the Bible, and readers and scholars understand it in different ways.", "jdg": "After Joshua’s death, Israel repeats a cycle: the people turn to other gods, an enemy oppresses them, they cry out, and God raises up a “judge,” a military deliverer, to rescue them. Then the pattern starts again.\n\nThe judges include Deborah, the prophetess who leads Israel to victory with Barak; Gideon, who defeats Midian with 300 men; and Samson, whose great strength is matched by poor choices. The stories grow darker as the book goes on, ending in idolatry, atrocity and civil war. Its closing refrain explains why: “In those days there was no king in Israel; everyone did what was right in his own eyes.”", "rut": "Set during the time of the judges, Ruth is a quiet story of loyalty. An Israelite family flees famine to Moab, where the two sons marry Moabite women. After the men die, Naomi decides to go home to Bethlehem, and her daughter-in-law Ruth refuses to leave her: “Your people shall be my people, and your God my God.”\n\nIn Bethlehem, Ruth gathers leftover grain in the fields of Boaz, a relative of Naomi’s, who protects her and eventually marries her as a “kinsman-redeemer.” Their son Obed becomes the grandfather of King David, so a foreign woman becomes part of Israel’s royal line and, as Matthew 1 notes, of Jesus’ family tree.", "1sa": "1 Samuel covers Israel’s change from judges to kings. Hannah prays for a son and dedicates him to God, and Samuel grows up at the tabernacle in Shiloh to become prophet, priest and the last judge.\n\nThe people ask for a king “like all the nations.” Samuel warns them, then anoints Saul, who starts well but disobeys God. God sends Samuel to anoint David, a young shepherd from Bethlehem, who defeats Goliath and becomes a national hero. Saul grows jealous and hunts David for years, while David twice refuses to harm him. The book ends with Saul and his son Jonathan, David’s close friend, dying in battle on Mount Gilboa.", "2sa": "2 Samuel is the story of David’s reign. He is made king first over Judah at Hebron, then over all Israel. He captures Jerusalem, makes it his capital, and brings the ark of the covenant there. God promises David that his dynasty will last forever (ch. 7), a promise later linked to the Messiah.\n\nAt the height of his power David commits adultery with Bathsheba and arranges her husband’s death. The prophet Nathan confronts him, and David repents, but the consequences follow his family: his son Amnon’s crime, Absalom’s rebellion and death, and continuing unrest. The book shows a king who is both deeply devoted to God and deeply flawed.", "1ki": "1 Kings opens with Solomon becoming king. He asks God for wisdom, becomes famous for it, and builds the Temple in Jerusalem. But his many foreign wives turn him toward other gods, and after his death the kingdom splits: ten northern tribes form Israel under Jeroboam, while Judah in the south stays with David’s line.\n\nJeroboam sets up golden calves at Bethel and Dan so his people won’t worship in Jerusalem. The second half features the prophet Elijah confronting King Ahab and Queen Jezebel, who promote the worship of Baal. On Mount Carmel, Elijah challenges Baal’s prophets and fire falls from heaven. Afterwards he flees in despair to Mount Sinai (Horeb), where God speaks to him in a “still small voice.”", "2ki": "2 Kings continues the history of the two kingdoms. Elisha succeeds Elijah and performs many miracles, including healing the Syrian general Naaman. The northern kingdom has no faithful kings; despite the prophets’ warnings it falls to Assyria in 722 BC, and its people are scattered.\n\nJudah lasts longer and has a few reforming kings, especially Hezekiah, who trusts God when Assyria besieges Jerusalem, and Josiah, who rediscovers the Book of the Law in the Temple. But the nation’s idolatry continues. Babylon finally destroys Jerusalem and the Temple in 586 BC and takes the people into exile. The book ends on a small note of hope: the exiled king Jehoiachin is released from prison.", "1ch": "Chronicles retells Israel’s history, probably for the Jews who had come back from exile and were asking who they were. 1 Chronicles opens with nine chapters of genealogies, from Adam through the tribes of Israel, connecting the returned community to its past.\n\nThe rest focuses on David, with less attention to his sins than 2 Samuel gives and more to his role in worship: bringing the ark to Jerusalem, organizing the priests, Levites and musicians, and gathering materials for the Temple that his son Solomon will build. The message is that God’s promises to David, and his care for true worship, still stand.", "2ch": "2 Chronicles covers Solomon’s reign and Temple, then follows only the kings of Judah, judging each by his faithfulness to God and the Temple. It highlights reforms under kings like Asa, Jehoshaphat, Hezekiah and Josiah, and shows repentance bringing restoration, even for the wicked king Manasseh.\n\nIt ends with Jerusalem’s fall to Babylon, described as the land finally getting the sabbath rests it had been denied, and then with the decree of Cyrus of Persia allowing the Jews to return and rebuild the Temple. In the Hebrew Bible, Chronicles is the very last book, so the whole Hebrew Scripture ends with that invitation to go up to Jerusalem.", "ezr": "After Persia conquers Babylon, King Cyrus allows the Jewish exiles to go home (538 BC). Led by Zerubbabel, about 50,000 people return and begin rebuilding the Temple. Opposition from neighboring peoples stalls the work for years, but with encouragement from the prophets Haggai and Zechariah they finish it in 516 BC.\n\nDecades later Ezra, a priest and scholar of the law, arrives with another group. He teaches the law and leads a painful reform when he finds that many men have married women from surrounding peoples who worship other gods. The book is about rebuilding not just a building but a community shaped by God’s word.", "neh": "Nehemiah is a Jewish official serving the Persian king in Susa. When he hears that Jerusalem’s walls still lie in ruins, he prays, asks the king for leave, and goes to rebuild them (445 BC). Despite mockery, threats and plots from local leaders, the people finish the walls in 52 days.\n\nEzra then reads the law aloud to the people, who confess their sins and renew the covenant. Nehemiah also tackles injustice, such as wealthy Jews charging their poorer neighbors interest. Much of the book is written in Nehemiah’s own voice, and it ends with him still working to keep the people faithful.", "est": "Esther is set in the Persian capital, Susa, among Jews who stayed in Persia rather than going home. King Xerxes chooses a young Jewish woman, Esther, as his queen. Her cousin Mordecai, who raised her, advises her to keep her background secret.\n\nWhen the official Haman plots to have every Jew in the empire killed, Mordecai urges Esther to act: “Who knows whether you have not come to the kingdom for such a time as this?” At great risk she goes to the king and exposes Haman, and the Jews are saved. The festival of Purim celebrates this. God is never named in the book, but many readers see his hidden hand behind every “coincidence.”", "job": "Job is a wealthy, righteous man who loses his children, his wealth and his health. The opening scenes show something Job never learns: a challenge in heaven over whether he is faithful only because God has blessed him.\n\nMost of the book is a debate in poetry. Job’s three friends insist his suffering must be punishment for sin; Job maintains his innocence and demands an answer from God. Finally God speaks from a whirlwind, not explaining Job’s suffering but showing his wisdom and power over all creation. Job responds humbly, God rebukes the friends, and Job’s fortunes are restored. The book honors honest lament and warns against easy explanations of suffering.", "psa": "Psalms is a collection of 150 songs and prayers gathered over centuries and arranged in five books. About half are linked to David; others are attributed to Asaph, the sons of Korah, Solomon and Moses. They were used in Israel’s worship and are still prayed by Jews and Christians today.\n\nThe psalms cover the whole range of human experience: praise, thanksgiving, confession, trust, anger, grief and despair. Laments, the most common kind, bring complaints to God honestly. Royal psalms celebrate the king from David’s line, and the New Testament reads several of them, such as Psalms 2, 22 and 110, as pointing to Jesus.", "pro": "Proverbs is a book of practical wisdom, much of it attributed to Solomon. Its first nine chapters are longer poems, framed as a parent’s advice to a son, that contrast Lady Wisdom with the seductive “foolish woman.” The theme is set early: “The fear of the LORD is the beginning of knowledge.”\n\nThe rest is mostly short sayings about work, speech, money, friendship, family, anger and justice. They describe how life usually works rather than promising guaranteed outcomes; books like Job and Ecclesiastes balance that view. The book ends with a poem praising a capable, wise woman.", "ecc": "Ecclesiastes is written by “the Teacher” (Qoheleth), traditionally identified with Solomon. Its famous refrain, “Vanity of vanities, all is vanity,” uses a Hebrew word (hevel) that means breath or vapor: life is fleeting and hard to grasp.\n\nThe Teacher tests everything “under the sun,” including pleasure, work, wealth and wisdom, and finds that none of it lasts or fully satisfies, and that death comes to everyone. Yet he keeps urging readers to enjoy food, work and relationships as gifts from God, and he includes the well-known poem “for everything there is a season.” He concludes: “Fear God and keep his commandments.”", "sng": "The Song of Songs (also called the Song of Solomon) is a series of love poems between a woman and a man, celebrating romantic and physical love with vivid images of gardens, vineyards and spices. The woman’s voice is especially prominent.\n\nJewish and Christian interpreters have long also read it as an allegory, a picture of God’s love for Israel or Christ’s love for the church, and it is read in synagogues at Passover. Today many readers value it first for what it plainly is: a celebration of love and desire within commitment as a good part of God’s creation.", "isa": "Isaiah prophesied in Jerusalem for about 40 years (c. 740–700 BC), as Assyria conquered the north and threatened Judah. Chapters 1–39 warn Judah and the nations of judgment for injustice and idolatry, while promising a coming righteous king: “Immanuel,” the child called “Wonderful Counselor, Mighty God.”\n\nChapters 40–66 speak to exiles in Babylon and beyond: “Comfort, comfort my people.” They promise a return, name Cyrus as God’s instrument, and describe a “servant” who suffers for the sins of others (ch. 53). The book ends with new heavens and a new earth. Many scholars think these later chapters come from Isaiah’s followers; traditionally the whole book is attributed to Isaiah. The New Testament quotes Isaiah more than any other prophet.", "jer": "Jeremiah was called as a young man and prophesied for about 40 years, through Judah’s last kings and the fall of Jerusalem in 586 BC. He warned that Babylon would conquer Judah because of its idolatry and injustice, and he urged surrender, which made him look like a traitor. He was beaten, imprisoned, thrown into a muddy cistern and mocked.\n\nHis book is full of personal anguish, which earned him the name “the weeping prophet.” But it also holds great hope: a letter telling the exiles to settle in Babylon and seek its welfare, and the promise of a “new covenant” written on people’s hearts (31:31–34), which Jesus invokes at the Last Supper. After Jerusalem falls, Jeremiah is taken to Egypt against his will.", "lam": "Lamentations is five poems of grief written after Babylon destroyed Jerusalem and the Temple in 586 BC. Four are acrostics: each verse or group of verses begins with the next letter of the Hebrew alphabet, as if to express sorrow from A to Z.\n\nThe poems describe famine, slaughter and humiliation, and admit that the city’s sin brought judgment. At the center is a turn to hope: “The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning” (3:22–23). Tradition credits Jeremiah, though the book itself is anonymous. Jews read it every year on Tisha B’Av, which mourns the Temple’s destruction.", "ezk": "Ezekiel was a priest taken to Babylon in 597 BC, about ten years before Jerusalem fell. By the Chebar canal he saw a dazzling vision of God’s glory on a throne-chariot and was called to be a “watchman” for the exiles.\n\nHe acted out strange signs, such as lying on his side for months, and saw God’s glory leave the corrupted Temple. After Jerusalem fell, his message turned to hope: God would give his people “a new heart and a new spirit,” bring a valley of dry bones to life, and reunite the nation. The book ends with a detailed vision of a renewed temple and land, with a river flowing out from the temple to bring life.", "dan": "Daniel was taken to Babylon as a young man in 605 BC and served in the courts of Babylonian and Persian kings. Chapters 1–6 are stories of faithfulness in exile: refusing the king’s food, interpreting Nebuchadnezzar’s dreams, his three friends surviving the fiery furnace, the writing on the wall, and Daniel in the lions’ den.\n\nChapters 7–12 are visions of beasts and kingdoms, describing a series of empires and God’s everlasting kingdom given to “one like a son of man,” the title Jesus most often used for himself. Traditionally the book is dated to the 6th century BC; many scholars date its final form to the 160s BC, during the Maccabean crisis its visions describe.", "hos": "Hosea prophesied in the northern kingdom in its last decades before Assyria destroyed it (8th century BC). God told him to marry Gomer, who was unfaithful to him, as a living picture of Israel’s unfaithfulness in worshiping Baal.\n\nThe names of their children announce judgment, but the book insists God’s love won’t let Israel go: Hosea buys Gomer back, and God promises to win his people back too. “How can I give you up, O Ephraim?” (11:8). Its tender language about God as husband and parent makes it one of the most emotional books of the prophets.", "joe": "Joel opens with a devastating locust plague, which he treats as a warning of “the day of the LORD,” a coming time of judgment. He calls the people to fast and return to God with all their heart: “Rend your hearts and not your garments.”\n\nGod promises to restore “the years that the swarming locust has eaten” and to pour out his Spirit on all people: sons and daughters, old and young, even servants. Peter quotes this promise in his sermon at Pentecost (Acts 2). The book’s date is uncertain, with suggestions ranging from the 9th to the 4th century BC.", "amo": "Amos was a shepherd and fig farmer from Tekoa in Judah, sent to preach in the prosperous northern kingdom around 760 BC. He starts by condemning the surrounding nations, which his audience would have cheered, then turns the same judgment on Israel itself.\n\nHis targets are injustice and empty religion: the rich crush the poor, sell the needy “for a pair of sandals,” and worship at Bethel while ignoring justice. God rejects their festivals: “let justice roll down like waters, and righteousness like an ever-flowing stream” (5:24), words Martin Luther King Jr. later quoted. The book ends with a promise to rebuild David’s fallen house.", "oba": "Obadiah, the shortest book in the Old Testament (21 verses), is a prophecy against Edom, the nation descended from Jacob’s brother Esau. When Babylon sacked Jerusalem, the Edomites cheered, looted the city and handed over survivors who tried to flee.\n\nObadiah announces that Edom’s pride and betrayal of its “brother” will be repaid: “As you have done, it shall be done to you.” It ends with a vision of Israel restored and the kingdom belonging to the LORD.", "jon": "Jonah is a prophet told to go to Nineveh, capital of Assyria, Israel’s brutal enemy, and preach against it. Instead he boards a ship heading the opposite way. A storm hits, the sailors throw him overboard, and a great fish swallows him. After three days he prays and is spat out onto dry land.\n\nGiven a second chance, Jonah preaches, the whole city repents, and God spares it. Jonah is furious, because he knew God was “gracious and merciful.” The book ends with God asking whether he shouldn’t care about a city of 120,000 people. Jesus refers to “the sign of Jonah” as a picture of his own death and resurrection.", "mic": "Micah came from the small town of Moresheth and prophesied in Judah in the late 8th century BC, around the same time as Isaiah. He condemned corrupt leaders, false prophets and wealthy landowners who seized the homes of the poor, and warned that both Samaria and Jerusalem would fall.\n\nHe also promised hope: a ruler from Bethlehem “whose coming forth is from of old” (5:2), which Matthew connects to Jesus’ birth. The book contains one of the Bible’s best-known summaries of faith: “What does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?” (6:8).", "nah": "Nahum announces the fall of Nineveh, the capital of Assyria, which had conquered the northern kingdom and terrorized the region for over a century. About a hundred years earlier Nineveh had repented at Jonah’s preaching, but it returned to its cruelty.\n\nThe book is vivid war poetry describing the city’s destruction, which came in 612 BC at the hands of the Babylonians and Medes. For people who had suffered under Assyria, it was a message of comfort: “The LORD is good, a stronghold in the day of trouble.”", "hab": "Habakkuk is a conversation between the prophet and God, written shortly before Babylon invaded Judah. Habakkuk asks why God tolerates violence and injustice in Judah. God answers that he is raising up the Babylonians to judge them. Habakkuk is even more troubled: how can God use a nation more wicked than Judah?\n\nGod replies that Babylon will be judged too, and that “the righteous shall live by his faith” (2:4), a verse Paul quotes in Romans and Galatians. The book ends with a prayer of trust: even if the fig tree doesn’t blossom and the fields produce no food, “yet I will rejoice in the LORD.”", "zep": "Zephaniah prophesied during the reign of King Josiah (640–609 BC), probably before Josiah’s reforms. He announces a sweeping “day of the LORD” against Judah’s idolatry and complacency, and against surrounding nations, including Assyria and its capital Nineveh.\n\nThe book ends with one of the most joyful passages in the Bible: God will gather a humble remnant, remove their shame, and “rejoice over you with gladness… he will exult over you with loud singing” (3:17).", "hag": "Haggai delivered four short messages in 520 BC to the Jews who had returned from exile. They had laid the Temple’s foundation years earlier, then stopped and turned to building their own houses, while their harvests kept failing.\n\nHaggai asks: “Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?” The governor Zerubbabel and the high priest Joshua respond, and the people go back to work. Haggai encourages those who think the new Temple looks poor next to Solomon’s, promising that its glory will be greater.", "zec": "Zechariah worked alongside Haggai from 520 BC, encouraging the returned exiles to rebuild the Temple. Chapters 1–8 contain eight night visions, such as horsemen, a lampstand and a flying scroll, assuring the people that God has not forgotten Jerusalem and will cleanse and restore it.\n\nChapters 9–14 look further ahead: to a coming king who arrives “humble and mounted on a donkey” (9:9), a shepherd who is struck down, and a final day when the LORD will be king over all the earth. The Gospels quote these chapters several times when describing Jesus’ last week.", "mal": "Malachi (meaning “my messenger”) speaks to the Jews in Judah around 430 BC, after the Temple had been rebuilt but enthusiasm had faded. In a series of questions and answers, he rebukes priests who offer blemished sacrifices, people who hold back their tithes, and husbands who break faith with their wives.\n\nHe promises that God will send his messenger to prepare the way, and that “Elijah the prophet” will come before the great day of the LORD. In Christian Bibles this is the last Old Testament book, and the Gospels identify John the Baptist as the promised messenger, linking the two testaments.", "mat": "Matthew was written for readers who knew Jewish tradition. It opens with Jesus’ genealogy from Abraham through David and repeatedly shows him fulfilling the Hebrew Scriptures, often with the phrase “this was to fulfill what the Lord had spoken by the prophet.”\n\nIts teaching is gathered into five large sections, including the Sermon on the Mount (chs. 5–7) with the Beatitudes and the Lord’s Prayer. It presents Jesus as the promised King and as a new Moses who teaches with authority. Matthew is traditionally attributed to the tax collector who became an apostle, and it ends with the Great Commission: “Go therefore and make disciples of all nations.”", "mrk": "Mark is the shortest Gospel and is generally thought to be the earliest, written around AD 65–70. Early church tradition says Mark recorded the preaching of Peter. It moves fast, using the word “immediately” dozens of times, and focuses more on what Jesus does than on long speeches.\n\nThe first half shows Jesus’ authority over illness, demons and nature, with people asking “Who is this?” At the midpoint Peter declares that he is the Christ, and Jesus begins teaching that he must suffer, die and rise. About a third of the book covers his final week. A key verse: “the Son of Man came not to be served but to serve, and to give his life as a ransom for many” (10:45).", "luk": "Luke, a physician and companion of Paul, wrote “an orderly account” for a man named Theophilus after researching eyewitness reports. It is the first half of a two-part work that continues in Acts.\n\nLuke includes much that appears nowhere else: the births of John the Baptist and Jesus, with the shepherds and the manger; the boy Jesus in the Temple; and parables like the Good Samaritan and the Prodigal Son. It pays special attention to the poor, women, outsiders, prayer and the Holy Spirit. It ends with the risen Jesus walking with two disciples to Emmaus, and with his ascension.", "jhn": "John’s Gospel is quite different from the other three. It opens with a prologue calling Jesus “the Word,” who was with God and was God, and who “became flesh and dwelt among us.” It is built around seven signs, from turning water into wine to raising Lazarus, and seven “I am” sayings, such as “I am the bread of life” and “I am the way, and the truth, and the life.”\n\nMuch of it records long conversations: with Nicodemus, with a Samaritan woman, and with the disciples at the Last Supper. Traditionally written by the apostle John, “the disciple whom Jesus loved,” it states its own purpose: “that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name” (20:31).", "act": "Acts is Luke’s sequel, picking up with Jesus’ ascension and following the early church for about 30 years. Jesus’ words in 1:8 serve as an outline: his followers will be witnesses “in Jerusalem and in all Judea and Samaria, and to the end of the earth.”\n\nThe first half centers on Peter: the Holy Spirit coming at Pentecost, the church growing in Jerusalem, Stephen’s martyrdom, and Gentiles like Cornelius joining. The second half follows Paul, from his conversion on the road to Damascus through three missionary journeys to his arrest. It ends with Paul under house arrest in Rome, still proclaiming the kingdom of God “with all boldness.”", "rom": "Romans is Paul’s longest and most systematic letter, written around AD 57 to a church he had not yet visited, as he planned a trip to Rome and on to Spain. It lays out the gospel step by step: all people, Jew and Gentile, have sinned; God makes people right with himself through faith in Jesus, as a gift; and the Spirit gives new life.\n\nChapters 9–11 wrestle with why many Jews have not believed, and insist that God has not abandoned Israel. Chapters 12–16 turn to everyday life: offering one’s whole self to God, love, the place of governing authorities, and how believers with different convictions should accept one another. Few books have shaped Christian thought as much as Romans.", "1co": "Paul founded the church in Corinth, a wealthy, diverse port city, and wrote this letter from Ephesus around AD 54 after hearing of serious problems. The church was split into factions, tolerating sexual immorality, suing one another, and arguing over food offered to idols, marriage, worship and spiritual gifts.\n\nPaul answers each issue by pointing back to Christ crucified and to the church as one body with many parts. Chapter 13, the “love chapter,” describes love that is patient and kind. Chapter 15 gives the earliest written list of Jesus’ resurrection appearances and explains why the resurrection is central to the faith.", "2co": "2 Corinthians is Paul’s most personal letter, written from Macedonia after a painful visit and a tearful letter to Corinth. Some in the church, impressed by rival teachers, were questioning his authority.\n\nPaul defends his ministry by pointing not to his strengths but to his sufferings: beatings, shipwrecks, hunger and a “thorn in the flesh.” God told him, “My grace is sufficient for you, for my power is made perfect in weakness.” The letter also encourages generous giving for poor believers in Jerusalem and describes anyone in Christ as “a new creation.”", "gal": "Galatians is one of Paul’s earliest and most urgent letters, written to churches in the region of Galatia (in modern Turkey) that he founded on his first journey. Teachers had arrived insisting that Gentile believers must be circumcised and keep the law of Moses to belong to God’s people.\n\nPaul answers forcefully: people are made right with God through faith in Christ, not by works of the law, and in Christ “there is neither Jew nor Greek… slave nor free… male and female.” He tells how he confronted Peter in Antioch over this, and describes Christian freedom as living by the Spirit, whose fruit is “love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.”", "eph": "Ephesians was written while Paul was in prison, traditionally in Rome, and may have been meant to circulate among several churches. Its first half celebrates what God has done in Christ: choosing and adopting believers, saving them “by grace… through faith” as a gift, and breaking down the wall between Jews and Gentiles to form one new people.\n\nThe second half urges a life worthy of that calling: unity in the church, using gifts to build each other up, honest speech, and mutual submission in households. It ends with the image of putting on “the whole armor of God.” Some scholars think a follower of Paul wrote Ephesians; traditionally it is his.", "php": "Philippians is a warm thank-you letter to the first church Paul founded in Europe, in the Roman colony of Philippi. Written while he was in prison and unsure whether he would live, it is full of joy, using “joy” and “rejoice” more than a dozen times.\n\nAt its center is a hymn-like passage about Christ, who “emptied himself, by taking the form of a servant,” humbled himself to death on a cross, and was exalted by God (2:5–11). Paul urges the church to share that humble mindset, to stand together, and not to be anxious: “I can do all things through him who strengthens me.”", "col": "Colossians was written to a church in the small city of Colossae that Paul had not founded himself; his co-worker Epaphras had. A teaching was spreading there that mixed faith in Christ with special rules, festivals and the worship of angels.\n\nPaul responds by exalting Christ: “the image of the invisible God,” through whom all things were created and in whom “all the fullness of God was pleased to dwell.” Because believers have everything in Christ, they don’t need these extra rules. Instead they should set their minds “on things that are above” and clothe themselves with compassion, kindness, humility and love. Some scholars question whether Paul wrote it; traditionally it is his.", "1th": "1 Thessalonians may be Paul’s earliest surviving letter, written around AD 50 from Corinth, only months after he had to flee Thessalonica because of opposition. When Timothy reports that the young church is standing firm despite persecution, Paul writes with relief and affection.\n\nHe encourages them to live holy lives, keep working, and love one another. He also answers a question troubling them: what happens to believers who die before Jesus returns? Paul assures them that the dead in Christ will rise first, so they need not grieve “as others do who have no hope.”", "2th": "2 Thessalonians follows shortly after the first letter. Some in the church had become convinced, perhaps through a forged letter, that the day of the Lord had already come, and some had stopped working altogether.\n\nPaul encourages them in their ongoing persecution, explains that certain events, including the appearance of a “man of lawlessness,” must come first, and tells those sitting idle to get back to work: “If anyone is not willing to work, let him not eat.” Some scholars think a later follower of Paul wrote it; traditionally it is his.", "1ti": "1 Timothy is one of the three “pastoral letters,” written to Paul’s younger co-worker Timothy, whom he had left to lead the church in Ephesus. False teachers there were promoting speculation and strict rules.\n\nPaul gives instructions for the church’s life: prayer, the qualities needed in overseers and deacons, care for widows, warnings about the love of money (“a root of all kinds of evils”), and encouragement for Timothy not to let anyone look down on him for being young. Many scholars think the pastoral letters were written by a later follower of Paul; traditionally they are his.", "2ti": "2 Timothy is written from prison in Rome, with Paul expecting to die soon. It is the most personal of the pastoral letters, full of memories and requests, including asking Timothy to come quickly and bring his cloak and his scrolls.\n\nPaul urges Timothy to guard the gospel, endure hardship, and hold on to the Scriptures, which are “breathed out by God.” He sums up his own life: “I have fought the good fight, I have finished the race, I have kept the faith.” Traditionally it is Paul’s last letter.", "tit": "Titus, a Gentile co-worker of Paul, had been left on the island of Crete to organize the new churches there. This short letter tells him to appoint elders in every town and describes the character they need.\n\nIt warns against troublemakers and stresses that sound teaching should lead to good lives: older and younger men and women, and slaves, are each encouraged to live in a way that makes the gospel attractive. A central passage explains that God saved us “not because of works done by us in righteousness, but according to his own mercy.” Paul asks Titus to join him in Nicopolis for the winter.", "phm": "Philemon is Paul’s shortest letter, a personal appeal to Philemon, a Christian in Colossae whose house church met in his home. His slave Onesimus had run away, met Paul in prison, and become a Christian.\n\nPaul sends Onesimus back with this letter, asking Philemon to receive him “no longer as a bondservant but more than a bondservant, as a beloved brother,” and offering to repay anything he owes. Paul hints that he would like Onesimus to come back and help him. The letter is an important early example of the gospel reshaping the relationship between master and slave.", "heb": "Hebrews is a sermon in written form, addressed to Jewish Christians who were under pressure and tempted to turn back from following Jesus. Its author is unknown; Paul, Barnabas, Apollos and others have been suggested.\n\nIt argues that Jesus is greater than the angels, Moses and the priesthood of Aaron. Drawing on Leviticus and Psalm 110, it presents Jesus as the great high priest who offered himself once for all, bringing a better covenant than the one made at Sinai. Chapter 11, the “hall of faith,” lists heroes from Abel to the prophets, and chapter 12 urges readers to run their race “looking to Jesus.”", "jas": "James is traditionally attributed to James, the brother of Jesus, who led the church in Jerusalem. It reads like a collection of practical wisdom, similar to Proverbs and to Jesus’ Sermon on the Mount.\n\nIts best-known point is that genuine faith shows itself in action: “faith by itself, if it does not have works, is dead.” It also warns about the power of the tongue, favoritism toward the rich, quarreling, and boasting about tomorrow, and it encourages patience in hard times and prayer for the sick.", "1pe": "1 Peter is written to believers scattered across the Roman provinces of Asia Minor (modern Turkey), many of them Gentiles, who faced slander and social pressure because of their faith. Peter writes from “Babylon,” probably a code name for Rome.\n\nHe reminds them that they have “a living hope” through Jesus’ resurrection and calls them “a chosen race, a royal priesthood, a holy nation.” He urges them to live honorably among their neighbors, to respond to suffering as Christ did, without retaliating, and to always be ready to explain the reason for their hope, “with gentleness and respect.”", "2pe": "2 Peter is written as Peter’s farewell, knowing his death is near. He reminds readers of all God has given them, recalls witnessing Jesus’ transfiguration, and warns about false teachers who lead people into immorality.\n\nIt also answers those who mock the idea that Jesus will return because so much time has passed: “with the Lord one day is as a thousand years,” and God’s delay is patience, because he wants everyone to repent. Many scholars think it was written after Peter’s death by a follower writing in his name; traditionally it is his.", "1jn": "1 John was written to churches shaken by a split, after some members left and denied that Jesus, the Christ, had truly come in the flesh. Traditionally written by the apostle John, it shares the language of John’s Gospel: light, life, truth, love and “abiding.”\n\nIt gives readers ways to know they truly belong to God: believing that Jesus is the Son of God, obeying his commands, and loving one another. It contains some of the Bible’s most quoted words about love: “God is love,” and “We love because he first loved us.”", "2jn": "2 John is a very short letter from “the elder” to “the elect lady and her children,” which most interpreters take to mean a local church and its members.\n\nIt repeats the call to love one another and to walk in obedience, and warns the church not to welcome traveling teachers who deny that Jesus came in the flesh, because taking them in would support their work.", "3jn": "3 John is a personal note from “the elder” to a man named Gaius, praising him for welcoming and supporting traveling Christian missionaries.\n\nIt contrasts Gaius with Diotrephes, a church leader “who likes to put himself first,” refuses to welcome these workers, and expels those who do. It also commends a man named Demetrius. The letter is a small window into the practical life of the early churches.", "jud": "Jude is written by “a servant of Jesus Christ and brother of James,” traditionally identified as another brother of Jesus. He had planned to write about salvation but felt he had to urge readers instead to “contend for the faith that was once for all delivered to the saints.”\n\nCertain people had slipped into the church and were twisting God’s grace into an excuse for immorality. Jude uses examples from Israel’s history and Jewish tradition to warn of judgment, and ends with a famous blessing to God, “who is able to keep you from stumbling.”", "rev": "Revelation records visions given to John while he was exiled on the island of Patmos, around AD 95. It begins with letters from the risen Jesus to seven churches in Asia Minor, praising, warning and encouraging each one.\n\nThe visions that follow use dramatic symbols drawn from the Old Testament: a throne room, a Lamb who was slain, seals, trumpets, a dragon, beasts and “Babylon.” Readers have interpreted them in many ways: as describing the Roman world of John’s day, the whole history of the church, or events still to come. All agree on the ending: Jesus returns, evil is defeated, and God makes “all things new,” living with his people in a new Jerusalem where there is no more death or tears."};
var MORE_ERAS = {"1": "Genesis 1–11 describes a world created good, with humans made in God’s image to care for it. Adam and Eve’s disobedience breaks their relationship with God and with each other, and the stories that follow show sin spreading: Cain murders Abel, violence fills the earth, and God sends a flood, saving Noah’s family and the animals.\n\nAfter the flood, humanity rebels again, building a tower at Babel to make a name for themselves, and God scatters them into many languages and nations. These chapters aren’t dated, and Christians read them in a range of ways, from literal history to theological stories. Either way, they set up the problem the rest of the Bible addresses: how will God restore a broken world?", "2": "God calls Abram (later Abraham) to leave his home for a land he will show him, promising to make him a great nation and to bless all the families of the earth through him. Abraham travels from Ur to Haran to Canaan, living as a nomad, and waits decades for the promised son, Isaac.\n\nThe promise passes to Isaac and then to Jacob, a schemer who wrestles with God and is renamed Israel. Jacob’s twelve sons become the twelve tribes of Israel. Jealous brothers sell Joseph into slavery in Egypt, where he rises to second-in-command and later saves the family from famine. The era ends with Jacob’s family settled in Egypt.", "3": "Jacob’s descendants multiply in Egypt until a new Pharaoh enslaves them. God raises up Moses, sends ten plagues, and brings Israel out at the Passover, the defining rescue of the Old Testament. At Mount Sinai, God makes a covenant with the nation and gives the law and the tabernacle.\n\nWhen the people reach the edge of Canaan they refuse to go in, afraid of its inhabitants, so that generation wanders in the wilderness for forty years. The era ends with Moses’ farewell speeches and his death on Mount Nebo, looking over the land he will not enter. The traditional date for the Exodus is around 1446 BC; many scholars prefer around 1260 BC.", "4": "Under Joshua, Israel crosses the Jordan, takes Jericho and settles in Canaan, dividing the land among the twelve tribes. But the conquest is incomplete, and after Joshua’s death the tribes drift into worshiping local gods.\n\nThe book of Judges describes centuries of a repeating cycle: oppression by enemies, rescue by leaders like Deborah, Gideon and Samson, then decline again, ending in civil war. In the middle of this troubled time, the book of Ruth tells a story of loyalty and kindness in Bethlehem that leads to the birth of King David’s grandfather.", "5": "Samuel, the last judge, leads Israel until the people ask for a king. Saul becomes the first king but loses God’s favor. David, a shepherd from Bethlehem, rises through his victory over Goliath, survives Saul’s jealousy, and becomes king, uniting the tribes and making Jerusalem his capital. God promises David a dynasty that will last forever.\n\nDavid’s son Solomon brings peace, wealth and international fame, and builds the Temple. This is Israel’s golden age, and much of its worship and wisdom literature, including many Psalms and Proverbs, is linked to David and Solomon. But Solomon’s turn to other gods and his heavy taxes sow the seeds of division.", "6": "After Solomon dies around 930 BC, the ten northern tribes break away to form the kingdom of Israel, with its capital eventually at Samaria. Judah in the south keeps Jerusalem, the Temple and David’s line of kings. Israel’s kings set up rival shrines and drift into Baal worship; Judah alternates between faithful and unfaithful kings.\n\nThis is the great age of the prophets. Elijah and Elisha confront Israel’s kings, and Amos, Hosea, Isaiah, Micah and others warn both kingdoms about idolatry and injustice. Assyria destroys Israel in 722 BC and scatters its people. Judah survives longer, with reforms under Hezekiah and Josiah, but Babylon destroys Jerusalem and the Temple in 586 BC.", "7": "The Babylonians take Judah’s king, nobles and skilled workers to Babylon in several waves (605, 597 and 586 BC). Jerusalem and Solomon’s Temple lie in ruins, and many feel God has abandoned them. Lamentations and Psalm 137 voice that grief.\n\nYet the exile becomes a time of reflection and renewal. Jeremiah writes to the exiles, telling them to settle down and pray for Babylon. Ezekiel, living among them, promises a new heart and a restored nation. Daniel and his friends show how to stay faithful inside a foreign empire. Many scholars think much of the Old Testament took its final shape during and after this period.", "8": "In 539 BC Cyrus of Persia conquers Babylon and lets the exiles go home. Under Zerubbabel, the first group rebuilds the Temple, finishing it in 516 BC with encouragement from Haggai and Zechariah. Many Jews remain in Persia, where the story of Esther takes place.\n\nAround 458 BC Ezra brings another group and teaches the law, and in 445 BC Nehemiah rebuilds Jerusalem’s walls. Malachi, the last Old Testament prophet, rebukes the people’s half-hearted worship and points ahead to a messenger who will prepare the way for the Lord. The people are home again, but still under foreign rule and still waiting for the fuller restoration the prophets promised.", "9": "Between Malachi and the birth of Jesus, roughly 400 years pass without new books in the Protestant Bible. Persian rule gives way to Alexander the Great in 332 BC. After his death, Greek dynasties based first in Egypt and then in Syria control Judea, and Greek language and culture spread across the region. The Hebrew Scriptures are translated into Greek (the Septuagint).\n\nIn 167 BC the Seleucid king Antiochus IV bans Jewish practices and defiles the Temple. The Maccabees revolt and rededicate the Temple (the origin of Hanukkah), and Judea is independent for about a century. Rome takes control in 63 BC and later makes Herod the Great king. During these years synagogues, the Pharisees and Sadducees, and intense hopes for a Messiah all develop, shaping the world of the New Testament.", "10": "Jesus is born in Bethlehem around 5 BC and grows up in Nazareth in Galilee. Around age 30 he is baptized by John the Baptist and begins a ministry of about three years: teaching about the kingdom of God, healing the sick, welcoming outcasts, and calling twelve disciples.\n\nHis popularity and his claims bring growing conflict with religious leaders. During a Passover visit to Jerusalem he is arrested, tried and crucified under the Roman governor Pontius Pilate, around AD 30 or 33. On the third day his tomb is found empty, and his followers report seeing him alive. The four Gospels tell this story from different angles.", "11": "After Jesus’ ascension, the Holy Spirit comes on his followers at Pentecost and the church grows quickly in Jerusalem. Persecution scatters the believers, spreading the message to Samaria and beyond, and Gentiles begin to join. A key debate, settled at the council in Jerusalem (Acts 15), decides that Gentiles don’t need to become Jewish to follow Jesus.\n\nPaul, once a persecutor of the church, becomes its leading missionary, founding churches across Asia Minor and Greece and writing letters to them. Peter, James and John lead in Jerusalem and beyond. By tradition Paul and Peter are martyred in Rome in the 60s AD; Rome destroys Jerusalem and its Temple in AD 70; and John, exiled on Patmos, records the visions of Revelation."};
var MORE_THEMES = {"covenant": "A covenant is a binding agreement that creates a relationship, like a treaty or a marriage. God makes a series of covenants: with Noah, promising never again to destroy the earth by flood; with Abraham, promising land, descendants and blessing for the nations; with Israel at Sinai, giving the law and calling them his people; and with David, promising an everlasting dynasty.\n\nIsrael repeatedly breaks the Sinai covenant, which leads to exile. But Jeremiah promises a “new covenant,” in which God will write his law on people’s hearts and forgive their sins. At the Last Supper Jesus calls the cup “the new covenant in my blood,” and Hebrews explains how it fulfills and surpasses the old one. The names “Old Testament” and “New Testament” themselves mean old covenant and new covenant.", "kingdom": "From the beginning, the Bible presents God as the rightful king of the world, with humans meant to care for creation on his behalf. Israel was meant to be ruled by God; when the people asked for a human king, God gave them Saul, then David, and promised that David’s descendant would reign forever.\n\nMost of Israel’s kings failed, and the monarchy ended in exile, but the prophets looked for a future son of David who would rule with justice, and Daniel saw God’s everlasting kingdom. Jesus’ central message was “the kingdom of God is at hand.” The Gospels present him as the promised king, though one who rules by serving and by dying, and Revelation ends with God’s kingdom fully come.", "temple": "In Eden, God walks with humanity in the garden. After the fall that closeness is lost, but God keeps making ways to live among his people: the tabernacle in the wilderness, then Solomon’s Temple in Jerusalem, where his glory fills the house. When the people turn away, Ezekiel sees God’s glory leave the Temple before Babylon destroys it, and the rebuilt Temple seems small by comparison.\n\nThe New Testament says the Word “dwelt” among us in Jesus (literally, “pitched his tent”), and Jesus calls his own body a temple. Paul calls the church, and even each believer’s body, a temple of the Holy Spirit. Revelation pictures no temple in the new Jerusalem, “for its temple is the Lord God the Almighty and the Lamb”: God lives with his people directly again.", "sacrifice": "Sacrifice runs through the Old Testament, from Abel’s offering to the detailed system in Leviticus. The Passover lamb’s blood protected Israel’s firstborn in Egypt, and on the Day of Atonement the high priest offered sacrifices and sent a goat into the wilderness carrying the people’s sins. These rituals taught that sin is serious and brings death, and that God provides a way for it to be covered.\n\nIsaiah 53 describes a servant who is “pierced for our transgressions” and bears the sins of many. The New Testament sees Jesus as the fulfillment of all of this: John the Baptist calls him “the Lamb of God, who takes away the sin of the world,” he dies at Passover, and Hebrews explains that his one sacrifice accomplishes what animal sacrifices could only point to.", "exile": "Exile is one of the Bible’s most repeated patterns. Adam and Eve are sent out of Eden. Cain becomes a wanderer. Abraham leaves home to live as a foreigner, Jacob’s family ends up enslaved in Egypt, and both Israel and Judah are eventually taken into exile by Assyria and Babylon for breaking the covenant.\n\nReturn is just as central: the Exodus, the return from Babylon under Ezra and Nehemiah, and the prophets’ promises of an even greater homecoming. Yet even after the return, many Jews felt they were still in a kind of exile under foreign rule. The New Testament presents Jesus as bringing the true return, calls believers “exiles” in this world (1 Peter), and ends with a homecoming in a new creation.", "nations": "God’s promise to Abraham always looked beyond one family: “in you all the families of the earth shall be blessed” (Genesis 12:3). Even as the Old Testament focuses on Israel, outsiders keep appearing as part of God’s plan: Rahab in Jericho, Ruth the Moabite, Naaman the Syrian, and the people of Nineveh in Jonah. Isaiah calls God’s servant to be “a light for the nations.”\n\nIn the New Testament, Jesus sends his followers to make disciples of all nations, and Acts tells how the message crosses from Jews to Samaritans to Gentiles. Paul’s letters insist that Jew and Gentile are one in Christ. Revelation pictures a vast crowd “from every nation, from all tribes and peoples and languages” worshiping together.", "loyalty": "The first commandment is “You shall have no other gods before me.” In a world where every nation worshiped many gods, Israel was called to exclusive loyalty to one God, summed up in the Shema: love the LORD with all your heart, soul and strength. The prophets often describe idolatry as adultery, most vividly through Hosea’s marriage.\n\nThe history books trace how Israel’s divided loyalties, especially Baal worship, led to the nation’s downfall. In the New Testament the idols change form: money, power, status and false teaching. Jesus says no one can serve two masters, and the letters of James, Peter, John and Jude call believers to stay faithful to Jesus and his teaching under pressure and amid deception.", "newcreation": "The Bible begins and ends with creation. Genesis 1–2 shows a good world, a garden with a river and the tree of life, and God living with humanity. Sin brings death, a curse and exile from the garden, but the prophets look ahead: Isaiah promises “new heavens and a new earth,” where the wolf and the lamb live together.\n\nThe New Testament sees Jesus’ resurrection as the first sign of this new creation. Paul says creation itself is waiting to be set free from decay, and that anyone in Christ is “a new creation.” Revelation 21–22 completes the picture with deliberate echoes of Genesis: a new heaven and earth, a river of life, the tree of life, no more curse, and God living with his people.", "messiah": "“Messiah” (Hebrew) and “Christ” (Greek) both mean “anointed one”: someone set apart by God, usually a king. After God promises David an everlasting dynasty, Israel comes to hope for a future anointed king from David’s line. The prophets add more strands: a child called “Mighty God” (Isaiah 9), a ruler from Bethlehem (Micah 5), a humble king on a donkey (Zechariah 9), a suffering servant (Isaiah 53), and a heavenly “son of man” (Daniel 7). Christians also see an early hint in Genesis 3:15.\n\nBy Jesus’ time, hopes for the Messiah ran high, though many expected a political liberator. The New Testament presents Jesus as fulfilling these strands in an unexpected way: a king from David’s line who suffers and dies, then rises and reigns. Matthew and Luke trace his family line to David, and “Christ” became so attached to Jesus that it works almost like his name."};

function paras(t) { return (t || '').split(/\n\s*\n/).map(function (x) { return x.trim(); }).filter(Boolean); }

var DIVM = {};
DIVS.forEach(function (d) { DIVM[d.id] = d; });
var BOOKS = ROWS.map(function (r, i) {
  return { id: r[0], name: r[1], abbr: r[2], ch: r[3], div: r[4], eras: r[5], sum: r[6], people: r[7], idx: i };
});
DIVS.forEach(function (d) {
  var bs = BOOKS.filter(function (b) { return b.div === d.id; });

  d.count = bs.length;
  d.ch = bs.reduce(function (a, b) { return a + b.ch; }, 0);
});

// ---- Books outside the Protestant Bible (deuterocanonical books and Apocrypha) ----
var XDIV = { id: 'apoc', name: 'Beyond the Protestant Bible', tag: 'Deuterocanonical books & Apocrypha', t: 'AP', color: '#6B5848',
  blurb: 'Books found in Catholic and/or Orthodox Bibles.',
  note: 'These books are not part of the Protestant Bible or the Jewish Tanakh. Catholic and Orthodox Christians count some or all of them as Scripture, and the original 1611 King James Bible printed most of them between the Testaments as \u201cApocrypha.\u201d They are shown here for study, with a dashed outline so they\u2019re never mistaken for the 66 books.' };
var XBOOKS = [{"id": "tob", "name": "Tobit", "abbr": "Tob", "ch": 14, "chFirst": 1, "text": true, "eras": [6], "trad": "Catholic and Orthodox Bibles", "people": "Tobit, Tobias, Sarah, the angel Raphael", "sum": "A devout Israelite exiled in Nineveh goes blind; his son Tobias travels with a disguised angel, marries Sarah, and brings home a cure."}, {"id": "jdt", "name": "Judith", "abbr": "Jdt", "ch": 16, "chFirst": 1, "text": true, "eras": [8], "trad": "Catholic and Orthodox Bibles", "people": "Judith, Holofernes, Achior", "sum": "A widow saves her besieged town by entering the enemy camp and beheading the general Holofernes."}, {"id": "esa", "name": "Additions to Esther", "abbr": "Add Esth", "ch": 7, "chFirst": 10, "text": true, "eras": [8], "trad": "Catholic and Orthodox Bibles, as part of Esther", "people": "Esther, Mordecai, King Artaxerxes (Xerxes), Haman", "sum": "Six passages in the Greek version of Esther that add prayers, royal letters and Mordecai’s dream, and mention God throughout."}, {"id": "1ma", "name": "1 Maccabees", "abbr": "1 Macc", "ch": 16, "chFirst": 1, "text": true, "eras": [9], "trad": "Catholic and Orthodox Bibles", "people": "Mattathias, Judas Maccabeus, Jonathan, Simon, Antiochus IV", "sum": "The history of the Jewish revolt against the Greek king Antiochus IV and the rise of the Maccabee family, about 175–134 BC."}, {"id": "2ma", "name": "2 Maccabees", "abbr": "2 Macc", "ch": 15, "chFirst": 1, "text": true, "eras": [9], "trad": "Catholic and Orthodox Bibles", "people": "Judas Maccabeus, the scribe Eleazar, a mother and her seven sons", "sum": "A more dramatic retelling of the revolt’s early years, with stories of martyrs and the rededication of the Temple."}, {"id": "wis", "name": "Wisdom of Solomon", "abbr": "Wis", "ch": 19, "chFirst": 1, "text": true, "eras": [9], "trad": "Catholic and Orthodox Bibles", "people": "“Solomon” (as the speaker)", "sum": "A meditation on wisdom, justice and the hope of immortality, written in Greek in Solomon’s voice."}, {"id": "sir", "name": "Sirach", "abbr": "Sir", "ch": 51, "chFirst": 1, "text": true, "eras": [9], "trad": "Catholic and Orthodox Bibles", "people": "Jesus son of Sirach (Ben Sira)", "sum": "Practical wisdom from a Jerusalem teacher on family, work, speech and worship, ending with a hymn praising Israel’s heroes. Also called Ecclesiasticus."}, {"id": "bar", "name": "Baruch", "abbr": "Bar", "ch": 6, "chFirst": 1, "text": true, "eras": [7], "trad": "Catholic and Orthodox Bibles", "people": "Baruch, the exiles in Babylon", "sum": "Attributed to Jeremiah’s scribe: a confession for the exiles, a poem about wisdom, words of comfort, and the Letter of Jeremiah against idols."}, {"id": "aza", "name": "Prayer of Azariah", "abbr": "Pr Azar", "ch": 1, "chFirst": 1, "text": true, "eras": [7], "trad": "Catholic and Orthodox Bibles, as part of Daniel 3", "people": "Azariah, Hananiah and Mishael (Abednego, Shadrach and Meshach)", "sum": "The prayer and hymn of Daniel’s three friends inside the fiery furnace, added to Daniel 3 in the Greek version. Includes the Song of the Three Young Men."}, {"id": "sus", "name": "Susanna", "abbr": "Sus", "ch": 1, "chFirst": 1, "text": true, "eras": [7], "trad": "Catholic and Orthodox Bibles, as part of Daniel", "people": "Susanna, the young Daniel, two elders", "sum": "The young Daniel saves a faithful woman from a false accusation by questioning her two accusers separately."}, {"id": "bel", "name": "Bel and the Dragon", "abbr": "Bel", "ch": 1, "chFirst": 1, "text": true, "eras": [7], "trad": "Catholic and Orthodox Bibles, as part of Daniel", "people": "Daniel, King Cyrus, the prophet Habakkuk", "sum": "Two short stories in which Daniel exposes the priests of an idol and destroys a dragon worshiped in Babylon."}, {"id": "1es", "name": "1 Esdras", "abbr": "1 Esd", "ch": 9, "chFirst": 1, "text": true, "eras": [6, 7, 8], "trad": "Orthodox Bibles (an appendix in older Catholic editions)", "people": "Josiah, Zerubbabel, Ezra, King Darius", "sum": "A Greek retelling of the Temple’s fall and rebuilding, from Josiah to Ezra, with the story of three young guards in a contest of wisdom."}, {"id": "man", "name": "Prayer of Manasseh", "abbr": "Pr Man", "ch": 1, "chFirst": 1, "text": true, "eras": [6], "trad": "Orthodox Bibles (an appendix in many Catholic editions)", "people": "King Manasseh", "sum": "A short, moving prayer of repentance attributed to Manasseh, one of Judah’s most wicked kings."}, {"id": "p151", "name": "Psalm 151", "abbr": "Ps 151", "ch": 1, "chFirst": 1, "text": false, "eras": [5], "trad": "Orthodox Bibles", "people": "David", "sum": "A short psalm in David’s voice about being chosen as a shepherd boy and defeating Goliath."}, {"id": "3ma", "name": "3 Maccabees", "abbr": "3 Macc", "ch": 7, "chFirst": 1, "text": false, "eras": [9], "trad": "Orthodox Bibles", "people": "King Ptolemy IV, the priest Eleazar", "sum": "Despite its name, not about the Maccabees: God rescues the Jews of Egypt from a Greek king’s plan to have them trampled by elephants."}, {"id": "2es", "name": "2 Esdras", "abbr": "2 Esd", "ch": 16, "chFirst": 1, "text": true, "eras": [7], "trad": "Slavonic Orthodox Bibles (an appendix in the Latin Vulgate)", "people": "Ezra, the angel Uriel", "sum": "A Jewish apocalypse written after Rome destroyed the Temple: Ezra questions God about suffering and receives seven visions."}].map(function (x, i) {
  return { id: x.id, name: x.name, abbr: x.abbr, ch: x.ch, chFirst: x.chFirst, hasText: x.text, eras: x.eras, trad: x.trad, people: x.people, sum: x.sum, div: 'apoc', extra: true, xidx: i };
});
XDIV.count = XBOOKS.length;
XDIV.ch = XBOOKS.reduce(function (a, b) { return a + b.ch; }, 0);
DIVM.apoc = XDIV;
var ALLB = BOOKS.concat(XBOOKS);
function findBook(id) { for (var i = 0; i < ALLB.length; i++) if (ALLB[i].id === id) return ALLB[i]; return null; }
var XMORE = {"tob": "Tobit is a story set among the Israelites exiled to Assyria after 722 BC. Tobit, a faithful man who buries the dead at great personal risk, is blinded and prays to die. Far away in Ecbatana, a young relative named Sarah prays the same prayer, because a demon has killed each of her seven husbands on their wedding night.\n\nGod sends the angel Raphael, disguised as a traveler, to guide Tobit’s son Tobias on a journey. Along the way Tobias catches a fish whose organs drive away the demon and later cure his father’s blindness; he marries Sarah and brings her home. The book was probably written in the 3rd or 2nd century BC. It celebrates prayer, generosity to the poor, family loyalty and burying the dead, and it shaped later traditions about guardian angels.", "jdt": "Judith is set during an invasion by Nebuchadnezzar’s army under the general Holofernes, which besieges the Jewish town of Bethulia. As the town’s leaders prepare to surrender, Judith, a devout and wealthy widow, rebukes them for putting God to the test and goes out to the enemy camp with her maid.\n\nShe wins Holofernes’ trust with her beauty and her words, and when he falls into a drunken sleep she beheads him with his own sword. The leaderless army flees. The story mixes historical names freely (Nebuchadnezzar is called king of the Assyrians, for example), so most scholars read it as an inspiring story of faith and courage rather than a chronicle. It was probably written in the 2nd century BC.", "esa": "The Greek translation of Esther contains about 107 verses not found in the Hebrew text: a dream of Mordecai and its interpretation, the full text of the king’s decrees first against and then for the Jews, and heartfelt prayers by Mordecai and Esther before she approaches the king.\n\nThe Hebrew book of Esther never mentions God; these additions mention him often, which makes the story’s faith explicit. When Jerome translated the Latin Vulgate, he gathered them at the end of Esther, which is why the King James Apocrypha numbers them as Esther 10:4 to 16:24. Catholic and Orthodox Bibles place them within the book of Esther.", "1ma": "1 Maccabees begins with Alexander the Great and the Greek kingdoms that followed him. When the Seleucid king Antiochus IV bans Jewish practices and sets up a pagan altar in the Temple (167 BC), the priest Mattathias of Modein refuses to sacrifice and flees to the hills with his five sons.\n\nHis son Judas, nicknamed Maccabeus (“the hammer”), leads a guerrilla war, retakes Jerusalem and rededicates the Temple, the event Hanukkah celebrates. After Judas dies, his brothers Jonathan and Simon carry on the struggle, and Simon wins independence for Judea. Written around 100 BC, it is a sober, generally reliable history and one of the main sources for this period, even for readers who don’t treat it as Scripture.", "2ma": "2 Maccabees condenses a five-volume history by Jason of Cyrene and covers roughly 180–161 BC, overlapping the first part of 1 Maccabees. It is more interested in faith and encouragement than in strict chronology.\n\nIt includes the story of a mother and her seven sons, martyred for refusing to eat pork, and their confident hope in the resurrection of the body. It also describes Judas Maccabeus offering prayers and a sacrifice for fallen soldiers (12:43–46), a passage later cited in Catholic teaching on prayer for the dead. It explains the origin of the festival of Hanukkah.", "wis": "The Wisdom of Solomon was written in Greek, probably in Alexandria in the 1st century BC, by a Jewish author speaking in the voice of King Solomon. It encourages Jews living in a Greek world to stay faithful.\n\nIt teaches that “the souls of the righteous are in the hand of God,” pictures Wisdom as a radiant presence coming from God, and retells the Exodus to show God’s justice, while mocking the making of idols. Many scholars hear echoes of its language in the New Testament, for example in Paul’s letters and in Hebrews’ description of Christ as the radiance of God’s glory.", "sir": "Sirach was written around 180 BC by a Jerusalem scribe named Jesus son of Sirach (Ben Sira), and translated into Greek by his grandson, who explains this in a prologue. Its Latin name, Ecclesiasticus (“the church book”), reflects how widely early Christians used it for teaching.\n\nLike Proverbs, it gives advice on friendship, money, speech, parenting, health and prayer, all rooted in “the fear of the Lord,” and it identifies wisdom with the law of Moses. Chapters 44–50 praise “famous men” from Enoch to the high priest Simon, a sweeping review of Israel’s history. It is the longest book of the Apocrypha.", "bar": "Baruch is presented as written by Jeremiah’s secretary in Babylon after Jerusalem fell. It contains a prayer of confession admitting that the exile came because of the people’s sins, a poem identifying wisdom with God’s law, and a hopeful poem picturing Jerusalem welcoming her children home.\n\nIts sixth chapter, the Letter of Jeremiah, is a separate work mocking the helpless idols the exiles would have seen in Babylon. Most scholars date the book’s parts to the 2nd century BC or a little earlier. Catholic Bibles place Baruch after Lamentations.", "aza": "In the Greek version of Daniel, 68 verses are inserted into chapter 3 while Shadrach, Meshach and Abednego stand in the fiery furnace. Azariah (Abednego’s Hebrew name) prays a prayer of confession for Israel, an angel drives the flames out of the furnace, and all three sing a hymn calling all of creation to praise God.\n\nThe hymn, beginning “O all ye works of the Lord, bless ye the Lord,” has been sung in Christian worship for centuries as the Benedicite. Catholic and Orthodox Bibles include these verses as Daniel 3:24–90.", "sus": "Susanna, a devout and beautiful wife living in Babylon, is spied on by two elders who demand that she sleep with them, threatening to accuse her of adultery if she refuses. She refuses and is condemned to death on their testimony.\n\nThe young Daniel interrupts the trial, questions the two men separately, and asks each under which tree they saw her. Their answers don’t match, Susanna is cleared, and the elders are punished instead. It is sometimes called the world’s first detective story. Catholic Bibles place it as Daniel 13.", "bel": "In the first story, Daniel proves to the Persian king Cyrus that the idol Bel doesn’t really eat the food left for it: he scatters ashes on the temple floor, and the next morning footprints show that the priests and their families have been eating it.\n\nIn the second, Daniel kills a great dragon that the Babylonians worship, is thrown into a lions’ den for six days, and survives, fed by the prophet Habakkuk, whom an angel carries from Judea. Both stories mock idolatry. Catholic Bibles place them as Daniel 14.", "1es": "1 Esdras covers the same ground as the end of 2 Chronicles, Ezra and part of Nehemiah, from King Josiah’s Passover to Ezra reading the law. Its one major new episode is a contest among three bodyguards of the Persian king Darius over what is strongest: wine, the king, or women. Zerubbabel wins by adding that truth is strongest of all, and as his reward the king lets him lead exiles home to rebuild Jerusalem.\n\nIt is part of the Greek Orthodox Old Testament. Catholic Bibles don’t count it as Scripture, though older editions printed it in an appendix. Its naming is confusing: in Latin tradition it is called 3 Esdras.", "man": "2 Chronicles 33 says that King Manasseh, after leading Judah into terrible idolatry, was taken captive to Babylon, humbled himself and prayed, and that God restored him. The Chronicler mentions that his prayer was recorded but doesn’t give it.\n\nThis short prayer, probably written in the last centuries BC, fills that gap. It praises God’s mercy and confesses sin in deeply personal terms: “I have sinned above the number of the sands of the sea.” It is part of Orthodox Bibles and appears in an appendix in many Catholic editions. In this app’s text, the whole prayer appears as a single verse.", "p151": "The Greek Septuagint ends the book of Psalms with a 151st psalm, described as “outside the number.” In it David recalls being the youngest of his brothers, tending his father’s sheep, being anointed by Samuel, and defeating Goliath.\n\nA longer Hebrew version was found among the Dead Sea Scrolls. Psalm 151 is part of Orthodox Bibles but not Catholic or Protestant ones. The King James Apocrypha doesn’t include it, so its text isn’t in this app.", "3ma": "3 Maccabees is set about 50 years before the Maccabean revolt, under the Egyptian king Ptolemy IV (around 217 BC). After he is stopped from entering the Temple in Jerusalem, he turns on the Jews of Egypt and has them rounded up in Alexandria’s hippodrome to be trampled by drunken elephants. Through the prayers of the priest Eleazar, angels appear and the elephants turn on the soldiers instead.\n\nIt is part of the Greek Orthodox Old Testament but not of Catholic or Protestant Bibles. The King James Apocrypha doesn’t include it, so its text isn’t in this app.", "2es": "The core of 2 Esdras (chapters 3–14), also called 4 Ezra, was written in the late 1st century AD, after Rome destroyed Jerusalem in AD 70. It is set in Babylon after the earlier destruction, where Ezra wrestles with the angel Uriel over why God lets his people suffer under wicked empires, then receives visions about the end of the age.\n\nChristian chapters were later added at the beginning (1–2) and end (15–16). It is included in Slavonic Orthodox Bibles and printed in an appendix to the Latin Vulgate, but Catholics and Greek Orthodox don’t count it as Scripture. The 1611 King James Apocrypha includes it."};
var XMAPS = {"tob": {"p": [["nineveh", "Tobit lives in exile here"], ["ecbatana", "Sarah’s home; Tobias marries her"], ["rages", "Where Tobit had left money in trust"]], "r": [["Tobias’ journey", ["nineveh", "ecbatana", "rages"]]]}, "jdt": {"p": [["bethulia", "The besieged town (location uncertain)"], ["jerusalem", "Judith and the people give thanks at the Temple"]]}, "esa": {"p": [["susa", "The Persian royal court"]]}, "1ma": {"p": [["modein", "Mattathias starts the revolt"], ["jerusalem", "The Temple is rededicated (164 BC)"], ["antioch", "Capital of the Seleucid Greek kings"]]}, "2ma": {"p": [["jerusalem", "The Temple, the martyrs and the rededication"], ["antioch", "Seat of King Antiochus IV"]]}, "wis": {"p": [["alexandria", "Probably written here"]]}, "sir": {"p": [["jerusalem", "Ben Sira teaches here"], ["alexandria", "His grandson translates the book into Greek"]]}, "bar": {"p": [["babylon", "Written to and among the exiles"], ["jerusalem", "The ruined city they long to return to"]]}, "aza": {"p": [["babylon", "Nebuchadnezzar’s furnace"]]}, "sus": {"p": [["babylon", "Susanna’s home among the exiles"]]}, "bel": {"p": [["babylon", "The temple of Bel and the lions’ den"]]}, "1es": {"p": [["babylon", "The exiles"], ["susa", "The contest at King Darius’ court"], ["jerusalem", "The Temple rebuilt; Ezra reads the law"]], "r": [["The return", ["babylon", "jerusalem"]]]}, "man": {"p": [["babylon", "Manasseh prays in captivity"], ["jerusalem", "Restored to his throne"]], "line": "Captivity and return"}, "p151": {"p": [["bethlehem", "David the shepherd boy"]]}, "3ma": {"p": [["jerusalem", "The king is stopped from entering the Temple"], ["alexandria", "The Jews are rounded up in the hippodrome"]]}, "2es": {"p": [["babylon", "Ezra’s visions"], ["jerusalem", "The city whose destruction he mourns"]]}};
Object.keys(XMORE).forEach(function (k) { MORE_BOOKS[k] = XMORE[k]; });
Object.keys(XMAPS).forEach(function (k) { BOOK_MAPS[k] = XMAPS[k]; });
var XPLACES = {"ecbatana": ["Ecbatana", 34.8, 48.51, "l"], "rages": ["Rages", 35.59, 51.44, "r"], "bethulia": ["Bethulia (location uncertain)", 32.42, 35.24, "r"], "modein": ["Modein", 31.93, 35.04, "l"]};
Object.keys(XPLACES).forEach(function (k) { PLACES[k] = XPLACES[k]; });

// ----- More map detail: ancient regions, water, mountains and background cities -----
// [name, lat, lon, type, tier, placeId?]. Tiers are shown by how far the map is zoomed (see labelTierOk).
MAP_LABELS = MAP_LABELS.concat([
  ['ASSYRIA', 36.9, 42.2, 'region', 'mid'], ['BABYLONIA', 31.6, 45.6, 'region', 'mid'], ['MEDIA', 35.6, 48.9, 'region', 'mid'],
  ['PERSIS', 29.9, 53.0, 'region', 'mid'], ['ARAM (SYRIA)', 35.3, 38.4, 'region', 'mid'], ['CAPPADOCIA', 38.9, 35.9, 'region', 'mid', 'cappadocia'],
  ['GALATIA', 39.7, 33.1, 'region', 'mid', 'galatia'], ['PHRYGIA', 38.7, 30.7, 'region', 'mid'], ['CILICIA', 37.2, 35.3, 'region', 'mid'],
  ['LYCIA', 36.6, 29.6, 'region', 'mid'], ['MACEDONIA', 41.1, 22.4, 'region', 'mid'], ['ACHAIA', 37.6, 22.1, 'region', 'mid'],
  ['THRACE', 41.9, 26.4, 'region', 'mid'], ['ILLYRICUM', 43.4, 18.4, 'region', 'mid'], ['SINAI', 29.5, 33.9, 'region', 'mid'],
  ['LIBYA', 30.4, 22.5, 'region', 'mid'], ['PONTUS', 40.8, 37.3, 'region', 'mid', 'pontus'], ['BITHYNIA', 40.5, 30.6, 'region', 'mid', 'bithynia'],
  ['ARMENIA', 39.4, 42.0, 'region', 'mid'], ['ELAM', 31.7, 48.9, 'region', 'mid'], ['CANAAN', 31.9, 35.05, 'region', 'mid'],
  ['Adriatic Sea', 42.6, 16.2, 'sea', 'mid'], ['Ionian Sea', 37.6, 18.9, 'sea', 'mid'], ['Tyrrhenian Sea', 40.0, 12.0, 'sea', 'mid'],
  ['Zagros Mountains', 33.6, 47.3, 'mtn', 'mid'], ['Taurus Mountains', 37.4, 33.2, 'mtn', 'mid'], ['Mount Ararat', 39.7, 44.3, 'mtn', 'mid', 'ararat'],
  ['Gulf of Suez', 29.1, 32.95, 'sea', 'local'], ['Gulf of Aqaba', 28.75, 34.72, 'sea', 'local'],
  ['GALILEE', 32.95, 35.32, 'region', 'local'], ['SAMARIA', 32.12, 35.36, 'region', 'local'], ['JUDEA', 31.6, 34.98, 'region', 'local'],
  ['IDUMEA', 31.15, 34.95, 'region', 'local'], ['PHILISTIA', 31.45, 34.55, 'region', 'local'], ['PHOENICIA', 33.62, 35.45, 'region', 'local'],
  ['MOAB', 31.25, 35.95, 'region', 'local', 'moab'], ['AMMON', 31.95, 36.0, 'region', 'local'], ['EDOM', 30.35, 35.55, 'region', 'local', 'edom'],
  ['GILEAD', 32.32, 35.78, 'region', 'local'], ['BASHAN', 32.85, 36.1, 'region', 'local'], ['NEGEV', 30.85, 34.85, 'region', 'local'],
  ['DECAPOLIS', 32.55, 35.95, 'region', 'local'],
  ['Sea of Galilee', 32.78, 35.74, 'sea', 'local'], ['Dead Sea', 31.33, 35.5, 'sea', 'local'], 
  ['Orontes', 35.4, 36.45, 'river', 'local'], ['Jabbok', 32.18, 35.85, 'river', 'local'],
  ['Mount Hermon', 33.42, 35.86, 'mtn', 'local'], ['Mount Carmel', 32.73, 35.05, 'mtn', 'local', 'carmel'], ['Mount Tabor', 32.69, 35.39, 'mtn', 'local', 'tabor'],
  ['Mount Gilboa', 32.47, 35.42, 'mtn', 'local', 'gilboa'], ['Mount Nebo', 31.77, 35.73, 'mtn', 'local', 'nebo'], ['Mount Sinai', 28.54, 33.97, 'mtn', 'mid', 'sinai'],
  ['Mount Gerizim', 32.2, 35.27, 'mtn', 'close'], ['Mount of Olives', 31.78, 35.245, 'mtn', 'close'],
  ['Rome', 41.89, 12.49, 'city', 'big', 'rome'], ['Alexandria', 31.2, 29.92, 'city', 'big', 'alexandria'], ['Babylon', 32.54, 44.42, 'city', 'big', 'babylon'],
  ['Nineveh', 36.36, 43.15, 'city', 'big', 'nineveh'], ['Susa', 32.19, 48.26, 'city', 'big', 'susa'], ['Athens', 37.97, 23.73, 'city', 'big', 'athens'],
  ['Antioch', 36.2, 36.16, 'city', 'big', 'antioch'], ['Damascus', 33.51, 36.29, 'city', 'big', 'damascus'], ['Jerusalem', 31.78, 35.23, 'city', 'big', 'jerusalem'],
  ['Byzantium', 41.01, 28.98, 'city', 'big'], ['Carthage', 36.85, 10.32, 'city', 'big'], ['Memphis', 29.85, 31.25, 'city', 'big'],
  ['Ephesus', 37.94, 27.34, 'city', 'big', 'ephesus'], ['Corinth', 37.91, 22.88, 'city', 'big', 'corinth'], ['Ur', 30.96, 46.1, 'city', 'big', 'ur'],
  ['Thebes', 25.7, 32.65, 'city', 'town'], ['Petra', 30.33, 35.44, 'city', 'town'], ['Palmyra (Tadmor)', 34.55, 38.27, 'city', 'town'],
  ['Haran', 36.87, 39.03, 'city', 'town', 'haran'], ['Tarsus', 36.92, 34.9, 'city', 'town', 'tarsus'], ['Ecbatana', 34.8, 48.51, 'city', 'town', 'ecbatana'],
  ['Carchemish', 36.83, 38.0, 'city', 'town'], ['Thessalonica', 40.64, 22.94, 'city', 'town', 'thess'], ['Philippi', 41.01, 24.29, 'city', 'town', 'philippi'],
  ['Tyre', 33.27, 35.2, 'city', 'town', 'tyre'], ['Sidon', 33.56, 35.37, 'city', 'town'], ['Caesarea', 32.5, 34.89, 'city', 'town', 'caesarea'],
  ['Gaza', 31.5, 34.47, 'city', 'town', 'gaza'], ['Joppa', 32.05, 34.75, 'city', 'local', 'joppa'], ['Samaria', 32.28, 35.2, 'city', 'local', 'samaria'],
  ['Shechem', 32.21, 35.28, 'city', 'local', 'shechem'], ['Bethel', 31.93, 35.22, 'city', 'close', 'bethel'], ['Jericho', 31.87, 35.44, 'city', 'local', 'jericho'],
  ['Hebron', 31.53, 35.1, 'city', 'local', 'hebron'], ['Beersheba', 31.25, 34.79, 'city', 'local', 'beersheba'], ['Bethlehem', 31.7, 35.2, 'city', 'close', 'bethlehem'],
  ['Nazareth', 32.7, 35.3, 'city', 'local', 'nazareth'], ['Capernaum', 32.88, 35.57, 'city', 'close', 'capernaum'], ['Megiddo', 32.58, 35.18, 'city', 'local'],
  ['Hazor', 33.02, 35.57, 'city', 'local'], ['Ashkelon', 31.67, 34.57, 'city', 'local'], ['Dan', 33.25, 35.65, 'city', 'local', 'dan'],
  ['Tiberias', 32.79, 35.53, 'city', 'close'], ['Shiloh', 32.06, 35.29, 'city', 'close', 'shiloh'], ['Gath', 31.7, 34.85, 'city', 'close', 'gath'],
  ['Caesarea Philippi', 33.25, 35.69, 'city', 'close', 'caesphil']
]);
// River courses (Natural Earth, simplified): [name, [lon, lat, lon, lat, ...]].
// Each river visible in the current view gets one label, placed midway along its longest visible stretch.
var RIVER_LINES = [["Ceyhan",[36.72,38.64,36.91,38.59,36.93,38.42,37.04,38.29,37.0,38.14,37.0,37.98,36.97,37.83,36.85,37.71,36.76,37.57,36.58,37.49,36.44,37.37,36.25,37.3,36.18,37.15,35.99,37.22,35.82,37.15,35.74,37.01,35.59,36.92,35.48,36.79,35.56,36.66]],["Strymon",[23.18,42.49,23.05,42.62,22.92,42.5,22.73,42.47,22.79,42.3,22.96,42.19,23.04,42.05,23.13,41.89,23.16,41.73,23.24,41.58,23.29,41.44,23.32,41.29,23.28,41.14,23.48,40.99,23.76,40.94,23.85,40.8]],["Tigris",[39.17,38.42,39.35,38.48,39.54,38.49,39.68,38.38,39.92,38.38,40.08,38.27,40.14,38.12,40.24,37.99,40.26,37.84,40.44,37.81,40.68,37.84,40.87,37.83,41.05,37.77,41.23,37.75,41.5,37.74,41.7,37.75,41.83,37.64,41.83,37.47,42.02,37.43,42.18,37.35,42.34,37.24,42.37,37.09]],["Tigris",[42.38,37.06,42.5,36.94,42.6,36.8,42.77,36.75,42.82,36.6,42.97,36.48,43.12,36.38,43.21,36.24,43.3,36.09,43.33,35.94]],["Tigris",[43.31,35.79,43.24,35.64,43.28,35.47,43.37,35.33,43.42,35.18,43.53,35.07,43.54,34.92,43.61,34.77,43.69,34.63,43.78,34.37,43.83,34.22,43.97,34.09,44.19,34.06,44.38,34.0,44.41,33.84,44.39,33.64,44.31,33.5,44.38,33.35,44.49,33.22,44.57,33.08,44.74,33.02,44.9,32.93,45.09,32.79,45.28,32.77,45.39,32.64,45.53,32.53,45.72,32.53]],["Tigris",[45.81,32.51,45.96,32.6,46.14,32.65,46.3,32.55,46.48,32.53,46.66,32.48,46.72,32.34,46.71,32.17,46.86,32.07,46.95,31.89,47.13,31.86,47.15,31.71,47.28,31.53,47.4,31.4,47.44,31.25,47.42,31.1]],["Nile",[31.24,30.12,31.08,30.21,30.92,30.31,30.85,30.45,30.8,30.61,30.79,30.76,30.78,30.92,30.71,31.08,30.58,31.19,30.52,31.33,30.4,31.44]],["Nile",[31.15,30.18,31.1,30.32,31.17,30.46,31.27,30.63,31.23,30.81,31.26,30.96,31.4,31.06,31.51,31.18,31.68,31.26,31.75,31.4]],["Jordan River",[35.6,32.9,35.6,32.8,35.58,32.72]],["Jordan River",[35.42,31.33,35.45,31.4,35.46,31.49,35.46,31.57,35.48,31.64,35.53,31.74]],["Jordan River",[35.86,33.6,35.8,33.51,35.73,33.47,35.68,33.41,35.64,33.31,35.6,33.2,35.58,33.0,35.6,32.92]],["Jordan River",[35.58,32.72,35.57,32.66,35.57,32.57,35.57,32.51,35.56,32.45,35.56,32.38,35.57,32.31,35.57,32.25,35.55,32.17,35.53,32.11,35.52,32.01,35.55,31.94,35.55,31.84,35.56,31.77]],["Danube",[17.21,48.06,17.37,47.98,17.52,47.88,17.68,47.79,18.11,47.76,18.35,47.78,18.55,47.79,18.75,47.81,18.95,47.8,19.13,47.74,19.05,47.54,19.0,47.4,18.91,47.24,18.9,47.08,18.97,46.94,18.98,46.78,18.89,46.64,18.92,46.47,18.91,46.2,18.76,46.09,18.81,45.92,18.9,45.77,18.91,45.6,19.08,45.53,18.98,45.4,19.12,45.3,19.36,45.25,19.56,45.26,19.74,45.25,19.93,45.26,20.18,45.19,20.35,45.07,20.4,44.86,20.58,44.86,20.68,44.73,20.88,44.67,21.08,44.73,21.27,44.81,21.5,44.78,21.66,44.69,21.85,44.7,22.03,44.6,22.17,44.51,22.3,44.66,22.47,44.73,22.62,44.64,22.5,44.51,22.55,44.35,22.68,44.24,22.91,44.12,22.87,43.97,23.13,43.85,23.32,43.89]],["Danube",[23.32,43.89,23.59,43.84,23.8,43.82,24.16,43.75,24.36,43.76,24.71,43.74,24.96,43.75,25.21,43.71,25.4,43.65,25.59,43.68,25.78,43.73,25.92,43.84,26.06,43.95,26.23,44.03,26.61,44.09,26.88,44.16,27.1,44.14,27.29,44.15,27.48,44.15,27.69,44.2,27.93,44.27,28.05,44.4,28.02,44.55,27.94,44.69,27.81,44.81,27.89,44.96,27.94,45.11,28.01,45.32,28.17,45.41,28.33,45.32,28.58,45.25]],["Hebrus (Evros)",[23.68,42.28,23.86,42.32,24.0,42.23,24.21,42.23,24.38,42.17,24.93,42.16,25.12,42.18,25.29,42.13,25.5,42.07,25.74,42.02,25.92,41.96,26.08,41.87,26.2,41.76,26.38,41.71,26.56,41.65,26.61,41.51,26.62,41.34,26.44,41.28,26.34,41.15,26.36,41.0,26.24,40.89,26.11,40.75]],["Tiber",[12.05,43.77,12.07,43.61,12.21,43.49,12.3,43.35,12.41,43.21,12.42,43.06,12.38,42.91,12.32,42.75,12.25,42.6,12.39,42.46,12.49,42.33,12.63,42.22,12.57,42.08,12.48,41.93,12.36,41.81]],["Halys (Kızılırmak)",[37.66,39.88,37.17,39.8,36.92,39.71,36.74,39.72,36.54,39.64,36.4,39.52,36.25,39.41,36.1,39.31,35.95,39.22,35.81,39.09,35.56,39.04,35.39,38.98,35.24,38.89,35.09,38.8,34.92,38.74,34.73,38.78,34.54,38.82,34.36,38.87,34.2,38.97,34.02,39.06,33.85,39.1,33.67,39.17,33.52,39.3,33.4,39.43,33.43,39.6,33.49,39.78,33.43,39.93,33.46,40.08,33.58,40.22,33.7,40.34,33.89,40.35,34.05,40.43,34.23,40.48,34.4,40.57,34.62,40.64,34.75,40.75,34.87,40.87,34.77,41.0,34.46,41.1,34.74,41.14,34.88,41.25,35.02,41.36,35.19,41.29,35.38,41.26,35.56,41.32,35.74,41.37,35.84,41.5,35.92,41.65]],["Nile",[32.88,23.99,32.9,23.81,32.87,23.63,32.9,23.45,32.94,23.31,32.8,23.2,32.71,23.06,32.61,22.92,32.57,22.77,32.42,22.67,32.22,22.74,32.03,22.7,31.9,22.57,31.78,22.44,31.6,22.31,31.44,22.17,31.36,22.02,31.3,21.85,31.19,21.72]],["Nile",[32.88,23.99,32.89,24.14,32.91,24.3,32.9,24.45,32.92,24.61,32.93,24.77,32.86,24.93,32.86,25.08,32.69,25.2,32.55,25.32,32.5,25.51,32.6,25.64,32.68,25.78,32.74,25.92,32.77,26.09,32.57,26.13,32.4,26.08,32.21,26.12,32.06,26.22,31.89,26.35,31.81,26.54,31.66,26.64,31.55,26.77,31.47,26.93,31.3,27.1,31.18,27.22,31.01,27.32,30.86,27.44,30.86,27.6,30.89,27.8,30.85,27.97,30.76,28.11,30.74,28.26,30.82,28.42,30.83,28.57,30.88,28.72,30.94,28.87,31.04,29.01,31.17,29.14,31.21,29.35,31.26,29.53,31.28,29.7,31.29,29.88,31.24,30.11]],["Nile",[33.69,18.49,33.7,18.65,33.56,18.76,33.56,18.92,33.58,19.14,33.44,19.26,33.38,19.42,33.08,19.53,32.9,19.46,32.77,19.34,32.68,19.19,32.5,19.13,32.38,18.96,32.19,18.89,32.04,18.78,32.05,18.62,31.87,18.56,31.79,18.41,31.69,18.28,31.59,18.14,31.41,18.04,31.21,17.98,31.03,18.05,30.81,18.14,30.71,18.31,30.7,18.47,30.59,18.59,30.54,18.75,30.48,18.9,30.49,19.2,30.49,19.37,30.44,19.53,30.4,19.68,30.3,19.83,30.46,19.93,30.6,20.04,30.56,20.19,30.52,20.35,30.36,20.42,30.3,20.58,30.37,20.73,30.51,20.83,30.58,20.97,30.71,21.09,30.77,21.26,30.96,21.37,31.04,21.52]],["Nile",[32.49,15.63,32.53,15.78,32.54,15.99,32.54,16.15,32.67,16.27,32.78,16.41,32.97,16.54,33.25,16.64,33.43,16.7,33.6,16.76,33.71,16.93,33.71,17.09,33.75,17.27,33.85,17.41,33.9,17.56,33.98,17.72,33.97,18.02,33.93,18.26,33.76,18.45]],["Euphrates",[40.99,34.43,41.19,34.38,41.37,34.43,41.55,34.44,41.74,34.47,41.97,34.47,42.13,34.33,42.31,34.36,42.35,34.2,42.41,34.05,42.56,33.95,42.73,33.88,42.71,33.72,42.86,33.62,43.01,33.53,43.23,33.47,43.42,33.44,43.6,33.4,43.76,33.31,43.86,33.18,44.05,33.15,44.17,33.0,44.26,32.87,44.22,32.61,44.3,32.47,44.33,32.3,44.36,32.12,44.45,31.98,44.49,31.82,44.49,31.66,44.64,31.57,44.78,31.47,44.96,31.43,45.17,31.41]],["Euphrates",[45.46,31.31,45.62,31.21,45.79,31.15,45.97,31.12,46.17,31.06,46.36,30.97,46.52,30.88,46.75,30.96,46.95,30.96,47.16,30.96,47.41,31.01]],["Euphrates",[38.47,38.74,38.36,38.62,38.46,38.48,38.69,38.42,38.88,38.37,39.07,38.35]],["Euphrates",[38.98,37.9,38.92,37.76,38.65,37.62,38.52,37.51,38.33,37.49]],["Euphrates",[41.46,40.18,41.33,40.02,41.03,39.96,40.8,39.93,40.47,39.95,40.18,39.91,40.25,39.76,40.19,39.61,39.99,39.57,39.75,39.65,39.58,39.69,39.38,39.68,39.21,39.61,39.0,39.6,38.83,39.56,38.64,39.51,38.46,39.45,38.47,39.3,38.61,39.18,38.74,39.08]],["Euphrates",[39.07,38.35,39.11,38.19,39.23,38.08,39.07,38.0]],["Euphrates",[38.33,37.49,38.13,37.43,37.93,37.39,37.87,37.25,37.87,37.08,38.01,36.96]],["Euphrates",[38.56,35.86,38.34,35.9,38.17,35.97,38.06,36.1,38.14,36.24]],["Euphrates",[38.03,36.84,38.09,36.68,38.29,36.54,38.18,36.34]],["Euphrates",[38.56,35.86,38.75,35.86,39.01,35.93,39.18,35.87,39.37,35.84,39.55,35.78,39.74,35.73,39.85,35.61,40.0,35.5,40.1,35.37,40.27,35.3,40.42,35.2,40.45,35.05,40.57,34.92,40.66,34.78,40.82,34.71,40.92,34.57,40.99,34.43]],["Karkheh",[48.98,33.95,48.89,34.08,48.84,34.24,48.7,34.33,48.41,34.35,48.22,34.31,48.03,34.34,47.76,34.38,47.59,34.45,47.42,34.37,47.34,34.2,47.43,34.04,47.5,33.89,47.4,33.75,47.22,33.72,47.04,33.68,46.86,33.62,46.92,33.47,47.05,33.36,47.22,33.26,47.41,33.19,47.56,33.08,47.71,33.0,47.89,32.92,48.04,32.81,47.98,32.67,48.02,32.52,48.16,32.38,48.19,32.23,48.22,32.08,48.25,31.91,48.41,31.81,48.54,31.68,48.44,31.54,48.19,31.56,48.01,31.51,47.82,31.51,47.67,31.41,47.63,31.25,47.53,31.13,47.48,30.98]],["Sangarius (Sakarya)",[29.53,40.04,29.45,40.17,29.6,40.26,29.81,40.29,29.95,40.4,30.1,40.5,30.31,40.56,30.38,40.7,30.47,40.84,30.57,40.97,30.65,41.11]],["Meander",[30.48,38.36,30.42,38.2,30.25,38.14,30.05,38.19,29.84,38.24,29.65,38.18,29.48,38.08,29.35,38.22,29.18,38.15,29.0,38.09,28.9,37.95,28.71,37.96,28.38,37.89,28.19,37.87,27.95,37.86,27.79,37.78,27.6,37.81,27.47,37.69,27.36,37.56]],["Haliacmon",[20.82,40.37,21.05,40.4,21.23,40.5,21.37,40.4,21.49,40.26,21.52,40.11,21.62,39.98,21.81,40.0,21.87,40.15,22.02,40.27,22.17,40.38,22.27,40.51,22.44,40.59,22.61,40.52]],["Araxes",[43.47,40.8,43.64,40.71,43.65,40.55,43.61,40.37,43.69,40.24,43.8,40.07,44.03,40.01,44.25,40.04,44.46,39.97,44.59,39.86,44.76,39.72,44.89,39.61,44.96,39.45,45.1,39.34,45.28,39.19,45.4,39.07,45.53,38.97,45.72,38.96,46.0,38.9,46.2,38.87,46.38,38.92,46.57,38.9,46.73,39.03,46.85,39.16,47.03,39.2,47.15,39.33,47.32,39.41,47.52,39.51,47.74,39.62,47.92,39.68,48.03,39.81,48.19,39.89,48.37,39.96]],["Shatt al-Arab",[47.47,30.97,47.62,30.78,47.75,30.61,47.87,30.49,48.12,30.45,48.21,30.32,48.4,30.22,48.44,30.03]],["Murat",[39.86,38.68,39.67,38.66,39.49,38.7,39.36,38.81,39.11,38.88,38.92,38.89]],["Murat",[43.58,39.41,43.67,39.55,43.44,39.62,43.27,39.67,43.07,39.71,42.95,39.6,42.77,39.53,42.63,39.43,42.54,39.29,42.4,39.16,42.21,39.17,42.03,39.11,41.83,39.06,41.64,39.06,41.52,38.94,41.38,38.84,41.2,38.8,40.99,38.85,40.76,38.84,40.59,38.77,40.25,38.74,40.06,38.75,39.88,38.69]],["Po",[7.65,44.84,7.48,44.75,7.35,44.64,7.17,44.7]],["Po",[7.65,44.84,7.68,44.99,7.76,45.14,7.94,45.21,8.14,45.21,8.33,45.19,8.52,45.15,8.67,45.02,8.86,45.06,9.04,45.09,9.22,45.14,9.47,45.1,9.68,45.08,9.88,45.09,10.07,45.04,10.33,44.99,10.52,44.92,10.69,44.99,10.85,45.06,11.04,45.06,11.27,45.06,11.42,44.97,11.61,44.9,11.78,44.96,11.97,44.98,12.16,45.03,12.32,44.96,12.53,44.97]]];
function riverLabels(cx, cy, halfW, halfH, pins) {
  var x0 = cx - halfW * 0.9, x1 = cx + halfW * 0.9, y0 = cy - halfH * 0.88, y1 = cy + halfH * 0.88;
  var viewW = halfW * 2, best = {};
  var dist = function (p, q) { return Math.sqrt((p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1])); };
  RIVER_LINES.forEach(function (r) {
    var c = r[1], run = [], runs = [];
    for (var i = 0; i < c.length; i += 2) {
      var ux = (c[i] - MAP_LON0) * MAP_CX, uy = MAP_LAT1 - c[i + 1];
      if (ux >= x0 && ux <= x1 && uy >= y0 && uy <= y1) run.push([ux, uy]);
      else if (run.length) { runs.push(run); run = []; }
    }
    if (run.length) runs.push(run);
    runs.forEach(function (p) {
      if (p.length < 2) return;
      var L = 0, j;
      for (j = 1; j < p.length; j++) L += dist(p[j], p[j - 1]);
      if (L < viewW * 0.06) return;
      if (best[r[0]] && best[r[0]].L >= L) return;
      // Try the middle first, then points further out, and keep the first one clear of map pins.
      var at = function (f) { var acc = 0; for (var q = 1; q < p.length; q++) { acc += dist(p[q], p[q - 1]); if (acc >= L * f) return q; } return p.length - 1; };
      var clear = function (q) { var md = 1e9; pins.forEach(function (pp) { md = Math.min(md, dist(p[q], [pp.ux, pp.uy])); }); return md; };
      var m = at(0.5), bestClear = clear(m), need = viewW * 0.07;
      [0.35, 0.65, 0.2, 0.8, 0.1, 0.9].forEach(function (f) { if (bestClear >= need) return; var q = at(f), c = clear(q); if (c > bestClear) { m = q; bestClear = c; } });
      var a = p[Math.max(0, m - 3)], b = p[Math.min(p.length - 1, m + 3)];
      var ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
      if (ang > 90) ang -= 180;
      if (ang < -90) ang += 180;
      best[r[0]] = { L: L, ux: p[m][0], uy: p[m][1], ang: Math.round(Math.max(-70, Math.min(70, ang))) };
    });
  });
  var S = LABEL_STYLE.river;
  return Object.keys(best).map(function (n) {
    var o = best[n];
    return { name: n, x: pct(o.ux / MAP_FW * 100), y: pct(o.uy / MAP_FH * 100), font: S.font, fstyle: S.fstyle, ls: S.ls,
      color: S.color, size: S.size, fw: S.fw, tx: '-50%', rot: o.ang };
  });
}
// "How the parts fit together": a longer explanation for each part, opened from the Overview.
var PARTS = [
  { id: 'law', name: 'Law', color: '#8A3E22', bg: '#F7EDE8', divs: ['law'], short: 'God makes promises to Israel and asks for exclusive loyalty.',
    more: 'The first five books, Genesis to Deuteronomy, are called the Torah, a Hebrew word that means “instruction” more than “rules.” They tell how the world began and how God chose Abraham’s family, then rescued their descendants from Egypt and made a covenant with them at Mount Sinai: he would be their God, and they would be his people.\n\nThe laws, from the Ten Commandments to rules about sacrifice, food and justice for the poor, are the terms of that covenant. They describe a people set apart to show the nations what God is like. Everything after this in the Bible is measured against the Torah: the history asks whether Israel kept it, and the prophets call Israel back to it.',
    refs: [['gen', 12, 'Genesis 12'], ['exo', 20, 'Exodus 20'], ['deu', 6, 'Deuteronomy 6']] },
  { id: 'hist', name: 'History', color: '#7A5512', bg: '#F5EEE0', divs: ['hist'], short: 'How that relationship plays out, and it doesn’t go well.',
    more: 'Joshua through Esther follow Israel from entering the promised land to life after exile, roughly 1400 to 450 BC. The pattern repeats: the people drift to other gods, trouble comes, and God raises up a rescuer. The judges, then kings such as David and Josiah, have moments of faithfulness, but the kingdom splits in two and both halves eventually fall.\n\nThese books are history written with a purpose. Kings judges each ruler by whether he “did what was right in the eyes of the LORD,” explaining why exile happened. Chronicles retells the same story for the returned exiles, stressing worship and God’s promises to David. Ezra, Nehemiah and Esther show a small community rebuilding its life under Persian rule.',
    refs: [['jdg', 2, 'Judges 2'], ['2sa', 7, '2 Samuel 7'], ['2ki', 17, '2 Kings 17']] },
  { id: 'poet', name: 'Poetry', color: '#56661C', bg: '#EFF1E3', divs: ['poet'], short: 'Worship and wisdom for ancient Israel.',
    more: 'Job, Psalms, Proverbs, Ecclesiastes and the Song of Songs are mostly poetry. They are less about what happened and more about how to live and pray in the middle of it. Psalms was Israel’s songbook, full of praise but also complaint, grief and anger brought honestly to God.\n\nThe wisdom books look at ordinary life. Proverbs teaches practical skill: hard work, careful speech, good friends. Job and Ecclesiastes push back on easy answers, asking why the righteous suffer and whether anything lasts. The Song of Songs celebrates love between a man and a woman. Together they show that faith covers every part of human experience.',
    refs: [['psa', 23, 'Psalm 23'], ['job', 38, 'Job 38'], ['pro', 3, 'Proverbs 3']] },
  { id: 'proph', name: 'Prophets', color: '#8A2E4A', bg: '#F5E8EC', divs: ['major', 'minor'], short: 'God’s messages delivered through human messengers.',
    more: 'The prophets were not mainly fortune-tellers. They spoke for God to their own generation, mostly between about 760 and 430 BC, warning kings and people that idolatry and injustice would bring judgment, first from Assyria and then from Babylon. Many were ignored, mocked or persecuted.\n\nBut nearly every prophet also looks past the disaster to hope: a remnant brought home, a new covenant written on the heart, a king from David’s line, a servant who suffers for others, and in the end a renewed creation. The “major” prophets (Isaiah, Jeremiah, Ezekiel and Daniel, with Lamentations) are longer; the twelve “minor” prophets are shorter, not less important. The New Testament quotes them constantly to explain who Jesus is.',
    refs: [['isa', 53, 'Isaiah 53'], ['jer', 31, 'Jeremiah 31'], ['amo', 5, 'Amos 5']] },
  { id: 'gosp', name: 'Gospels', color: '#1F5A7A', bg: '#E6EFF4', divs: ['gosp'], short: 'Four accounts of what Jesus did and said.',
    more: '“Gospel” means “good news.” Matthew, Mark, Luke and John each tell the story of Jesus: his teaching about the kingdom of God, his healings, his conflicts with religious leaders, his death on a Roman cross and his resurrection. They were written within roughly 30 to 60 years of his life.\n\nThe first three are called the “synoptic” Gospels because they share much of their material and order. Each still has its own angle: Matthew writes for readers steeped in the Jewish Scriptures, Mark moves fast and stresses action, and Luke highlights outsiders and the poor. John is different in style and content, with long speeches and seven “signs,” and says plainly that he wrote so readers would believe.',
    refs: [['mrk', 1, 'Mark 1'], ['mat', 5, 'Matthew 5'], ['jhn', 20, 'John 20']] },
  { id: 'acts', name: 'Acts', color: '#1F6656', bg: '#E4F0EC', divs: ['acts'], short: 'What happened after he rose: the good news spreads.',
    more: 'Acts is Luke’s second volume. It picks up after the resurrection and follows the first Christians over about thirty years. The Holy Spirit comes at Pentecost, the church grows in Jerusalem, persecution scatters believers, and the message crosses into Samaria and then to Gentiles.\n\nThe second half follows Paul’s journeys around the eastern Mediterranean, planting churches in cities such as Philippi, Corinth and Ephesus, and ends with him under arrest in Rome, still preaching. Acts is the bridge between the Gospels and the letters: it shows where those churches came from and why questions like “do Gentiles need to follow the Jewish law?” mattered so much.',
    refs: [['act', 2, 'Acts 2'], ['act', 15, 'Acts 15'], ['act', 28, 'Acts 28']] },
  { id: 'letters', name: 'Letters', color: '#2E4A8A', bg: '#E8ECF5', divs: ['paul', 'gen'], short: 'What to do with Jesus’ life and teachings.',
    more: 'Twenty-one of the 27 New Testament books are letters, many of them written before the Gospels. Thirteen carry Paul’s name, written to churches he founded or hoped to visit, and to co-workers like Timothy and Titus. The others, Hebrews and the letters of James, Peter, John and Jude, were written to wider audiences.\n\nThey are real mail, written to real problems: divisions, false teaching, persecution, sexual ethics, how Jews and Gentiles can eat together. Along the way they set out what Jesus’ death and resurrection mean, such as being made right with God by grace through faith, and what a life shaped by love and hope looks like in practice.',
    refs: [['rom', 8, 'Romans 8'], ['1co', 13, '1 Corinthians 13'], ['heb', 11, 'Hebrews 11']] },
  { id: 'rev', name: 'Revelation', color: '#5B3A8A', bg: '#EEE9F5', divs: ['rev'], short: 'The happy ending: all things made new.',
    more: 'Revelation is an apocalypse, a Jewish style of writing that uses vivid symbols such as beasts, numbers and cosmic battles to pull back the curtain on what is really going on. John wrote it to seven churches in Asia Minor facing pressure from Rome, probably in the 90s AD.\n\nReaders disagree about how much of it describes the future and how much the first century, but its main message is clear: the crucified and risen Jesus, pictured as a slain Lamb, is the true ruler of history, and evil will not have the last word. The Bible ends with a new heaven and new earth, God living among his people, and the tree of life from Eden restored.',
    refs: [['rev', 1, 'Revelation 1'], ['rev', 5, 'Revelation 5'], ['rev', 21, 'Revelation 21']] }
];

// ----- Compare: Christian traditions and theological frameworks -----
// Each position lists who holds it; the Venn diagram places it in the region for whichever selected items hold it.
var BR = 'https://www.britannica.com/';
var TRADS = [
  { id: 'C', name: 'Catholic', color: '#8A2E4A', origin: 'Traces itself to the apostles; led by the bishop of Rome (the pope)',
    desc: 'The largest Christian body, about half of the world’s Christians. It teaches through Scripture and Sacred Tradition as interpreted by the pope and bishops, celebrates seven sacraments with the Mass at the center, and is united under the pope.',
    docs: 'Catechism of the Catholic Church; Councils of Trent, Vatican I and Vatican II', src: [['Roman Catholicism (Britannica)', BR + 'topic/Roman-Catholicism'], ['Pew Research Center', 'https://www.pewresearch.org/religion/2011/12/19/global-christianity-exec/']] },
  { id: 'O', name: 'Eastern Orthodox', color: '#2E4A8A', origin: 'Traces itself to the apostles; separated from Rome in the schism of 1054',
    desc: 'A family of self-governing churches (Greek, Russian, Serbian, Antiochian and others) in communion with each other. It sees itself as preserving the apostolic faith unchanged, centered on the Divine Liturgy, the seven ecumenical councils, icons and the goal of theosis, union with God.',
    docs: 'The Nicene Creed; the seven ecumenical councils; the Church Fathers', src: [['Eastern Orthodoxy (Britannica)', BR + 'topic/Eastern-Orthodoxy']] },
  { id: 'L', name: 'Lutheran', color: '#A0661E', origin: 'Martin Luther, Germany, 1517 onward',
    desc: 'The first Protestant tradition. It centers on justification by grace through faith, keeps much of the historic liturgy, baptizes infants and teaches that Christ’s body and blood are truly present “in, with and under” the bread and wine.',
    docs: 'Augsburg Confession (1530); Luther’s Small and Large Catechisms; Book of Concord', src: [['Lutheranism (Britannica)', BR + 'topic/Lutheranism']] },
  { id: 'A', name: 'Anglican', color: '#5B4A8A', origin: 'Church of England, break with Rome 1534',
    desc: 'A worldwide communion that grew from the Church of England. It combines Catholic structure (bishops, liturgy, the Book of Common Prayer) with Reformation theology, and has a wide range from Anglo-Catholic to evangelical.',
    docs: 'Book of Common Prayer; Thirty-Nine Articles', src: [['Anglicanism (Britannica)', BR + 'topic/Anglicanism']] },
  { id: 'R', name: 'Reformed / Presbyterian', color: '#1F6656', origin: 'Zwingli and Calvin, Switzerland, 1520s–1540s',
    desc: 'Protestant churches shaped by John Calvin. They emphasize God’s sovereignty, predestination and covenant, are governed by elders (presbyters), and hold written confessions such as the Westminster Confession.',
    docs: 'Westminster Confession; Heidelberg Catechism; Belgic Confession; Canons of Dort', src: [['Reformed and Presbyterian churches (Britannica)', BR + 'topic/Presbyterian-churches'], ['Calvinism (Britannica)', BR + 'topic/Calvinism']] },
  { id: 'M', name: 'Methodist / Wesleyan', color: '#7A3B1E', origin: 'John Wesley’s revival within the Church of England, 1730s–1780s',
    desc: 'A movement from John Wesley’s preaching. It teaches that God’s grace is offered to all and can be freely accepted (Arminian), stresses holiness and growth in love, and gave rise to the Holiness movement.',
    docs: 'Wesley’s sermons; Twenty-five Articles of Religion (1784)', src: [['Methodism (Britannica)', BR + 'topic/Methodism/America'], ['Twenty-five Articles (Britannica)', BR + 'topic/Twenty-five-Articles-of-Religion']] },
  { id: 'B', name: 'Baptist', color: '#4A5866', origin: 'English Separatists, early 1600s',
    desc: 'Churches that baptize only believers who profess faith, usually by immersion. Congregations govern themselves, and Baptists have long championed religious liberty. Views on predestination range from Calvinist to Arminian.',
    docs: 'Various confessions (e.g., 1689 London Baptist Confession; Baptist Faith and Message)', src: [['Baptist (Britannica)', BR + 'topic/Baptist/History']] },
  { id: 'P', name: 'Pentecostal / Charismatic', color: '#A0522D', origin: 'Topeka (1901) and the Azusa Street revival (1906)',
    desc: 'A fast-growing movement that expects the gifts of the Holy Spirit today, including speaking in tongues and healing, often through a “baptism in the Holy Spirit” after conversion. Worship is usually informal and expressive.',
    docs: 'Varies by denomination (e.g., Assemblies of God Statement of Fundamental Truths)', src: [['Pentecostalism (Britannica)', BR + 'topic/Pentecostalism']] },
  { id: 'N', name: 'Anabaptist (Mennonite, Amish)', color: '#56661C', origin: 'Zürich, 1525',
    desc: 'The “radical” wing of the Reformation. Anabaptists baptize adult believers, emphasize discipleship and community, separate church from state, and most hold to nonviolence and refuse oaths.',
    docs: 'Schleitheim Confession (1527); Dordrecht Confession (1632)', src: [['Anabaptists (Britannica)', BR + 'summary/Anabaptists'], ['Mennonite (Britannica)', BR + 'topic/Mennonite']] }
];
var ALL9 = ['C', 'O', 'L', 'A', 'R', 'M', 'B', 'P', 'N'];
var PROT = ['L', 'A', 'R', 'M', 'B', 'P', 'N'];
var TRAD_POS = [
  ['Core beliefs', 'Believe in one God as Trinity: Father, Son and Holy Spirit', ALL9],
  ['Core beliefs', 'Jesus is fully God and fully human; he died, rose bodily and will return', ALL9],
  ['Core beliefs', 'Salvation is a gift of God’s grace, not earned', ALL9],
  ['Core beliefs', 'Baptism and the Lord’s Supper are commanded by Christ', ALL9],
  ['Authority', 'Scripture and Sacred Tradition together, interpreted authoritatively by the Magisterium (pope and bishops)', ['C']],
  ['Authority', 'Scripture within Holy Tradition: the Church Fathers, the liturgy and the seven ecumenical councils', ['O']],
  ['Authority', 'Scripture is the supreme authority; church tradition is subject to it', PROT],
  ['Authority', 'Scripture read together with tradition and reason (the “three-legged stool”)', ['A']],
  ['Authority', 'Scripture first, read with tradition, reason and experience (the “Wesleyan Quadrilateral”)', ['M']],
  ['Bible', 'Old Testament includes the deuterocanonical books (Tobit, Judith, Maccabees, Wisdom, Sirach, Baruch)', ['C', 'O']],
  ['Bible', 'Old Testament has the 39 books of the Hebrew Bible', PROT],
  ['Bible', 'Apocrypha may be read for example and instruction, but not to set doctrine', ['L', 'A']],
  ['Creeds', 'Nicene Creed regularly used in worship', ['C', 'O', 'L', 'A', 'M']],
  ['Creeds', 'Often non-creedal (“no creed but the Bible”), while affirming the creeds’ content', ['B', 'P', 'N']],
  ['Creeds', 'Detailed Reformation-era confessions serve as doctrinal standards', ['L', 'R']],
  ['Salvation', 'Justification by grace through faith alone (sola fide)', ['L', 'A', 'R', 'M', 'B', 'P']],
  ['Salvation', 'Justification is received in baptism and includes inner renewal; grace grows through faith, sacraments and good works', ['C']],
  ['Salvation', 'Salvation as theosis: lifelong transformation into union with God', ['O']],
  ['Salvation', 'Faith shows itself in obedient discipleship within the community', ['N']],
  ['Grace & free will', 'Unconditional election: God chooses whom he will save (Calvinist)', ['R']],
  ['Grace & free will', 'God’s grace goes before and enables a free response that can be resisted (Arminian)', ['M', 'P']],
  ['Grace & free will', 'Human freedom cooperates with God’s grace (synergy)', ['C', 'O']],
  ['Grace & free will', 'Views range from Calvinist to Arminian within the tradition', ['A', 'B']],
  ['Grace & free will', 'Election to salvation taught, without predestination to damnation', ['L']],
  ['Sacraments', 'Seven sacraments (Orthodox: “mysteries”)', ['C', 'O']],
  ['Sacraments', 'Two sacraments instituted by Christ: baptism and the Lord’s Supper', ['L', 'A', 'R', 'M']],
  ['Sacraments', 'Baptism and the Lord’s Supper as “ordinances”: acts of obedience and witness', ['B', 'P', 'N']],
  ['Lord’s Supper', 'Bread and wine become Christ’s body and blood in substance (transubstantiation)', ['C']],
  ['Lord’s Supper', 'Bread and wine are changed into Christ’s body and blood, a mystery not defined philosophically', ['O']],
  ['Lord’s Supper', 'Christ’s body and blood truly present “in, with and under” the bread and wine', ['L']],
  ['Lord’s Supper', 'Christ is truly but spiritually present, received by faith', ['R', 'M', 'A']],
  ['Lord’s Supper', 'Mainly a memorial of Christ’s death and a declaration of faith', ['B', 'P', 'N']],
  ['Lord’s Supper', 'The Eucharist is celebrated every Sunday as the center of worship', ['C', 'O', 'L', 'A']],
  ['Baptism', 'Infants of believing families are baptized', ['C', 'O', 'L', 'A', 'R', 'M']],
  ['Baptism', 'Only believers who profess faith are baptized', ['B', 'P', 'N']],
  ['Baptism', 'Baptism by immersion is the norm', ['O', 'B']],
  ['Baptism', 'Baptism itself conveys new birth and forgiveness', ['C', 'O', 'L']],
  ['Church & leadership', 'Bishops in apostolic succession', ['C', 'O', 'A']],
  ['Church & leadership', 'The pope as visible head of the whole church', ['C']],
  ['Church & leadership', 'Self-governing national churches led by patriarchs and synods', ['O']],
  ['Church & leadership', 'Governed by elders in local and regional councils (presbyterian)', ['R']],
  ['Church & leadership', 'Each congregation governs itself (congregational)', ['B', 'N', 'P']],
  ['Church & leadership', 'Priesthood of all believers', PROT],
  ['Church & leadership', 'Only men are ordained as priests', ['C', 'O']],
  ['Church & leadership', 'Clergy may marry', ['O', 'L', 'A', 'R', 'M', 'B', 'P', 'N']],
  ['Church & leadership', 'Women are ordained in some churches of this tradition but not others', ['L', 'A', 'R', 'M', 'B', 'P', 'N']],
  ['Mary & saints', 'Mary honored as Theotokos (“God-bearer”); the saints’ prayers are asked for', ['C', 'O']],
  ['Mary & saints', 'Immaculate Conception and Assumption of Mary defined as dogma', ['C']],
  ['Mary & saints', 'Icons are venerated as windows to heaven', ['O']],
  ['Mary & saints', 'Saints honored as examples; prayer is addressed to God alone', ['L', 'R', 'M', 'B', 'P', 'N']],
  ['Afterlife', 'Purgatory: purification after death for those saved', ['C']],
  ['Afterlife', 'Prayer for the departed, without a defined doctrine of purgatory', ['O']],
  ['Afterlife', 'No purgatory', ['L', 'R', 'M', 'B', 'P', 'N']],
  ['Worship & life', 'Set liturgy following the church year', ['C', 'O', 'L', 'A']],
  ['Worship & life', 'Freer, non-liturgical worship', ['B', 'P', 'N']],
  ['Worship & life', 'Monastic life of monks and nuns', ['C', 'O']],
  ['Worship & life', 'Strong emphasis on holiness and growth toward “perfect love”', ['M']],
  ['Worship & life', 'Baptism in the Holy Spirit, speaking in tongues and healing expected today', ['P']],
  ['Worship & life', 'Nonviolence and refusal of oaths', ['N']],
  ['Worship & life', 'Separation of church and state; strong defense of religious liberty', ['B', 'N']]
];

var FW_FAMILIES = [
  { id: 'auth', name: 'Authority: where truth is found', fws: [
    { id: 'sola', name: 'Sola Scriptura', color: '#1F6656', who: 'Lutheran, Reformed, Baptist, most evangelical and Pentecostal churches',
      desc: 'The Reformation principle that Scripture alone is the final, infallible authority for faith and life. Creeds, councils and tradition are valued but judged by Scripture.',
      pro: 'Supporters say it keeps every human tradition accountable to God’s written Word.', con: 'Critics say it leaves no final referee between competing interpretations, contributing to many divisions.',
      src: [['Protestantism (Britannica)', BR + 'topic/Protestantism'], ['Doctrine and dogma (Britannica)', BR + 'topic/doctrine/Development']] },
    { id: 'mag', name: 'Catholic Magisterial framework', color: '#8A2E4A', who: 'Catholic Church',
      desc: 'Revelation comes through Scripture and Sacred Tradition together, and the Magisterium (the pope and bishops in communion with him) has the authority to interpret them authentically, defining doctrine on faith and morals.',
      pro: 'Supporters say a living teaching office gives unity and certainty, as the apostles did in Acts 15.', con: 'Critics say it can place church teaching above Scripture and add doctrines not found in it.',
      src: [['Magisterium (Britannica)', BR + 'topic/Magisterium'], ['Tradition and Scripture (Britannica)', BR + 'topic/Roman-Catholicism/Revelation']] },
    { id: 'trad', name: 'Orthodox Holy Tradition', color: '#2E4A8A', who: 'Eastern Orthodox churches (similar in Oriental Orthodox churches)',
      desc: 'Scripture is the heart of Holy Tradition, the living memory of the church that also includes the Fathers, the liturgy, icons and the seven ecumenical councils. Authority rests in the consensus of the church rather than in one office.',
      pro: 'Supporters say it reads the Bible within the community that wrote, preserved and canonized it.', con: 'Critics say tradition is hard to define precisely and can resist correction.',
      src: [['Eastern Orthodoxy (Britannica)', BR + 'topic/Eastern-Orthodoxy']] },
    { id: 'quad', name: 'Wesleyan Quadrilateral', color: '#7A3B1E', who: 'Methodist and Wesleyan churches',
      desc: 'A summary (named in the 20th century) of how John Wesley did theology: Scripture is primary, interpreted with the help of tradition, reason and Christian experience.',
      pro: 'Supporters say it describes honestly how believers actually read Scripture.', con: 'Critics worry experience and reason can be given too much weight next to Scripture.',
      src: [['Methodism (Britannica)', BR + 'topic/Methodism/America']] }
  ], claims: [
    ['Scripture is inspired and authoritative', ['sola', 'mag', 'trad', 'quad']],
    ['Scripture is the only infallible rule; everything else is judged by it', ['sola']],
    ['Scripture is primary, but tradition, reason and experience are real sources', ['quad']],
    ['Tradition is a channel of revelation alongside Scripture', ['mag', 'trad']],
    ['A living teaching office (pope and bishops) gives the authentic interpretation', ['mag']],
    ['Ecumenical councils are binding', ['mag', 'trad']],
    ['Authority rests in the consensus of the whole church', ['trad']],
    ['Creeds and confessions are valued as subordinate standards', ['sola', 'quad']],
    ['Ordinary believers can grasp Scripture’s central message for themselves', ['sola', 'quad']],
    ['The church Fathers and liturgy guide how the Bible is read', ['trad', 'mag']]
  ] },
  { id: 'story', name: 'Storyline: how the testaments fit together', fws: [
    { id: 'cov', name: 'Covenant Theology', color: '#1F6656', who: 'Reformed and Presbyterian churches; some Reformed Baptists (in modified form)',
      desc: 'Reads the Bible through covenants: a covenant of works with Adam and a covenant of grace in Christ that runs through both testaments. There is one people of God, Israel and the church, across the ages.',
      pro: 'Supporters say it shows the Bible’s unity and Christ at the center of every covenant.', con: 'Critics say it can flatten real differences between Israel and the church.',
      src: [['Covenant theology (Britannica)', BR + 'topic/covenant-theology']] },
    { id: 'disp', name: 'Dispensationalism', color: '#A0522D', who: 'Many independent, Bible-church, Baptist and Pentecostal evangelicals; popularized by the Scofield Bible',
      desc: 'Divides history into dispensations in which God deals with people in different ways. It keeps Israel and the church distinct and expects God’s promises to national Israel to be fulfilled in the future, usually with a pre-tribulation rapture and a literal millennium.',
      pro: 'Supporters say it takes prophecy and God’s promises to Israel at face value.', con: 'Critics say it divides the people of God and is a 19th-century innovation.',
      src: [['Dispensationalism (Britannica)', BR + 'topic/dispensationalism'], ['Christian fundamentalism (Britannica)', BR + 'topic/Christian-fundamentalism']] },
    { id: 'prog', name: 'Progressive Covenantalism / New Covenant Theology', color: '#5B4A8A', who: 'Some Baptist and evangelical scholars (a recent middle position)',
      desc: 'A middle position: the biblical covenants unfold progressively and are fulfilled in Christ, and the church is the new-covenant people who inherit Israel’s promises in Christ. Because the new covenant is new in kind, its members are believers, so baptism is for believers.',
      pro: 'Supporters say it keeps the Bible’s unity while respecting what is new in the new covenant.', con: 'Critics on both sides say it borrows from each system without resolving their tensions.',
      src: [['Covenant theology (Britannica)', BR + 'topic/covenant-theology'], ['Dispensationalism (Britannica)', BR + 'topic/dispensationalism']] }
  ], claims: [
    ['God reveals his plan through a series of biblical covenants', ['cov', 'disp', 'prog']],
    ['Salvation has always been by grace through faith', ['cov', 'disp', 'prog']],
    ['One covenant of grace unites both testaments', ['cov']],
    ['A covenant of works was made with Adam before the Fall', ['cov']],
    ['Israel and the church are distinct peoples with distinct promises', ['disp']],
    ['History is divided into distinct dispensations', ['disp']],
    ['Promises to national Israel (land, kingdom) await a literal future fulfillment', ['disp']],
    ['A pre-tribulation rapture of the church is commonly held', ['disp']],
    ['The church shares in Israel’s promises through Christ', ['cov', 'prog']],
    ['Old Testament promises to Israel are read mainly as fulfilled in Christ and the church', ['cov', 'prog']],
    ['Infant baptism follows from covenant continuity (circumcision → baptism)', ['cov']],
    ['The new covenant is new in kind: its members are believers, so baptism is for believers', ['prog']]
  ] },
  { id: 'salv', name: 'Salvation: grace and free will', fws: [
    { id: 'calv', name: 'Calvinism (Reformed)', color: '#1F6656', who: 'Reformed and Presbyterian churches; many Baptists',
      desc: 'Stresses God’s sovereignty in salvation: God unconditionally elects those he will save, and his grace effectively brings them to faith. Defined at the Synod of Dort (1618–19), often summarized as “TULIP.”',
      pro: 'Supporters say it gives all glory to God and assurance that he finishes what he starts.', con: 'Critics say it makes God seem arbitrary and undercuts human responsibility.',
      src: [['Calvinism (Britannica)', BR + 'topic/Calvinism'], ['Canons of Dort (Britannica)', BR + 'topic/canons-of-Dort']] },
    { id: 'arm', name: 'Arminianism (Wesleyan)', color: '#7A3B1E', who: 'Methodist, Wesleyan, Holiness and most Pentecostal churches; many Baptists',
      desc: 'Holds that God’s sovereignty and human freedom are compatible: God’s grace goes before every person and enables them to accept or resist him, and election rests on God’s foreknowledge of faith.',
      pro: 'Supporters say it honors God’s love for all and real human responsibility.', con: 'Critics say it makes the final decision for salvation rest with people.',
      src: [['Arminianism (Britannica)', BR + 'topic/Arminianism'], ['Synod of Dort (Britannica)', BR + 'event/Synod-of-Dort']] },
    { id: 'syn', name: 'Catholic & Orthodox synergy', color: '#8A2E4A', who: 'Catholic and Eastern Orthodox churches',
      desc: 'Salvation is God’s gift, but human freedom cooperates with grace over a lifetime. Grace comes especially through the sacraments, and salvation is transformation: justification and growth in holiness (Catholic), or theosis, union with God (Orthodox).',
      pro: 'Supporters say it reflects Scripture’s calls to persevere, and the early church’s view.', con: 'Protestant critics say it blurs grace and works and weakens assurance.',
      src: [['Roman Catholicism (Britannica)', BR + 'topic/Roman-Catholicism'], ['Deification (Britannica)', BR + 'topic/deification']] }
  ], claims: [
    ['Grace comes first: no one can turn to God without it', ['calv', 'arm', 'syn']],
    ['God unconditionally elects those he will save', ['calv']],
    ['Christ’s death was designed to save the elect specifically', ['calv']],
    ['Christ died for everyone, and grace can be resisted', ['arm', 'syn']],
    ['Election rests on God’s foreknowledge of who will believe', ['arm']],
    ['True believers will persevere and cannot finally be lost', ['calv']],
    ['A believer can fall away and be lost', ['arm', 'syn']],
    ['Justification by faith alone; Christ’s righteousness is credited to the believer', ['calv', 'arm']],
    ['Justification includes inner transformation, nourished through the sacraments', ['syn']],
    ['Human freedom genuinely cooperates with God’s grace', ['arm', 'syn']]
  ] },
  { id: 'end', name: 'End times: the millennium', fws: [
    { id: 'amil', name: 'Amillennialism', color: '#2E4A8A', who: 'Historically the majority view: Catholic, Orthodox, Lutheran and many Reformed churches',
      desc: 'The “thousand years” of Revelation 20 is symbolic of the present age, in which Christ reigns from heaven. History ends with one return of Christ, the resurrection and the final judgment.',
      pro: 'Supporters say it fits the symbolic style of Revelation and the simple pattern of the rest of the New Testament.', con: 'Critics say it does not take Revelation 20 literally enough.',
      src: [['Eschatology (Britannica)', BR + 'topic/eschatology/Later-progressive-millennialism']] },
    { id: 'premil', name: 'Premillennialism', color: '#A0522D', who: 'Many evangelicals; dispensationalists hold a pre-tribulation form',
      desc: 'Christ will return before a literal thousand-year reign on earth. The time before his return is usually expected to bring tribulation; dispensational premillennialists add a rapture before it.',
      pro: 'Supporters say it reads Revelation 20 plainly and matches some early church writers.', con: 'Critics say it builds too much on one passage.',
      src: [['Premillennialism (Britannica)', BR + 'topic/premillennialism'], ['Millennialism (Britannica)', BR + 'topic/millennialism/Millennialism-from-the-Renaissance-to-the-modern-world']] },
    { id: 'postmil', name: 'Postmillennialism', color: '#56661C', who: 'Many Puritans and 18th–19th-century revivalists; some Reformed today',
      desc: 'As the gospel spreads, the world will be largely Christianized in a long golden age, after which Christ returns. It tends to be optimistic and activist.',
      pro: 'Supporters say it trusts the gospel’s power to transform nations.', con: 'Critics say history, such as the 20th-century world wars, has not borne out its optimism.',
      src: [['Millennialism (Britannica)', BR + 'topic/millennialism/Millennialism-from-the-Renaissance-to-the-modern-world']] }
  ], claims: [
    ['Christ will return bodily, raise the dead and judge the world', ['amil', 'premil', 'postmil']],
    ['The thousand years is symbolic of the present church age', ['amil']],
    ['Christ returns before a literal thousand-year reign on earth', ['premil']],
    ['Christ returns after a long golden age of gospel advance', ['postmil']],
    ['Expect growing hardship and tribulation before Christ returns', ['premil', 'amil']],
    ['Christ’s kingdom is already present and growing now', ['amil', 'postmil']],
    ['One return of Christ, followed directly by the final judgment', ['amil', 'postmil']]
  ] },
  { id: 'supper', name: 'Lord’s Supper: how Christ is present', fws: [
    { id: 'trans', name: 'Transubstantiation', color: '#8A2E4A', who: 'Catholic Church (the Orthodox affirm a real change without this philosophical definition)',
      desc: 'At the consecration the substance of the bread and wine becomes the body and blood of Christ, while the appearances remain. The Mass makes present Christ’s one sacrifice.',
      pro: 'Supporters point to Jesus’ words “This is my body” and John 6.', con: 'Protestant critics say it relies on medieval philosophy and treats the Mass as a repeated sacrifice.',
      src: [['Eucharist (Britannica)', BR + 'topic/Eucharist']] },
    { id: 'union', name: 'Sacramental union (Lutheran)', color: '#A0661E', who: 'Lutheran churches',
      desc: 'Christ’s true body and blood are present “in, with and under” the bread and wine, which remain bread and wine. Luther held to the words “This is my body” without explaining how.',
      pro: 'Supporters say it takes Jesus’ words literally without adding philosophy.', con: 'Critics say it is hard to explain coherently.',
      src: [['Lutheranism (Britannica)', BR + 'topic/Lutheranism'], ['Real presence (Britannica)', BR + 'topic/Real-Presence']] },
    { id: 'spirit', name: 'Spiritual presence (Calvin)', color: '#1F6656', who: 'Reformed and Presbyterian churches; many Anglicans and Methodists',
      desc: 'Christ is truly present and received, but spiritually: by the Holy Spirit, believers are lifted up to feed on Christ by faith. The bread and wine remain unchanged signs and seals.',
      pro: 'Supporters say it holds together real communion with Christ and his bodily ascension.', con: 'Critics on one side say it is too little presence; on the other, too much.',
      src: [['Eucharist (Britannica)', BR + 'topic/Eucharist/Significance-of-the-Eucharist']] },
    { id: 'memo', name: 'Memorial (Zwingli)', color: '#4A5866', who: 'Most Baptist, Pentecostal, Anabaptist and nondenominational churches',
      desc: 'The Supper is a memorial of Christ’s death and a public declaration of faith. Christ is present among his people, but not in the bread and wine.',
      pro: 'Supporters say “do this in remembrance of me” is the center of the command.', con: 'Critics say it underplays the New Testament’s language of real participation (1 Cor 10:16).',
      src: [['Huldrych Zwingli (Britannica)', BR + 'biography/Huldrych-Zwingli']] }
  ], claims: [
    ['Instituted by Christ at the Last Supper and to be repeated', ['trans', 'union', 'spirit', 'memo']],
    ['Remembers Christ’s death and unites believers with one another', ['trans', 'union', 'spirit', 'memo']],
    ['Christ is truly present to the believer in the Supper', ['trans', 'union', 'spirit']],
    ['Christ’s body and blood are physically present in or under the elements', ['trans', 'union']],
    ['The substance of bread and wine is changed', ['trans']],
    ['The Mass makes present Christ’s one sacrifice', ['trans']],
    ['The bread and wine remain bread and wine', ['union', 'spirit', 'memo']],
    ['Christ is received spiritually, by faith', ['spirit']],
    ['Primarily a memorial and public declaration of faith', ['memo']]
  ] }
];

// ----- Framework audit: fill gaps in existing topics and add missing ones -----
(function () {
  var fam = function (id) { return FW_FAMILIES.filter(function (f) { return f.id === id; })[0]; };
  var addFw = function (id, fw, claimsHeld) {
    var f = fam(id); f.fws.push(fw);
    claimsHeld.forEach(function (t) { f.claims.forEach(function (c) { if (c[0] === t && c[1].indexOf(fw.id) < 0) c[1].push(fw.id); }); });
  };
  // Authority: Anglican "three-legged stool"
  addFw('auth', { id: 'stool', name: 'Anglican three-legged stool', color: '#5B4A8A', who: 'Anglican and Episcopal churches',
    desc: 'Scripture is the first authority, read with the tradition of the early church and with reason. Shared essentials are summed up in the Lambeth Quadrilateral: the Bible, the Nicene Creed, baptism and Communion, and bishops.',
    pro: 'Supporters say it keeps Scripture first while honoring the early church and careful thought.', con: 'Critics say the balance is unclear in practice, which has allowed wide disagreement within Anglicanism.',
    src: [['Anglican Communion (Britannica)', BR + 'topic/Anglican-Communion']] },
    ['Scripture is inspired and authoritative', 'Ecumenical councils are binding', 'Creeds and confessions are valued as subordinate standards', 'The church Fathers and liturgy guide how the Bible is read']);
  fam('auth').claims.push(['Scripture is first, read with the tradition of the early church and reason', ['stool', 'quad']]);
  // Storyline: supersessionism
  addFw('story', { id: 'super', name: 'Supersessionism (replacement / fulfillment)', color: '#4A5866', who: 'Long the common view in Catholic, Orthodox and Protestant theology; strong forms rejected by many churches since the mid-20th century',
    desc: 'Holds that the church has replaced or fulfilled Israel as God’s covenant people. Covenant theology is often grouped here, though many covenant theologians prefer “fulfillment” to “replacement.” Dispensationalism arose partly as an alternative.',
    pro: 'Supporters point to passages like Galatians 3 and 1 Peter 2:9 that apply Israel’s titles to the church.', con: 'Critics, citing Romans 9–11, say God’s promises to the Jewish people still stand, and note the history of Christian anti-Judaism.',
    src: [['Replacement theology (Britannica)', BR + 'topic/Replacement-theology']] },
    ['God reveals his plan through a series of biblical covenants', 'Salvation has always been by grace through faith', 'The church shares in Israel’s promises through Christ', 'Old Testament promises to Israel are read mainly as fulfilled in Christ and the church']);
  fam('story').claims.push(['The church has taken Israel’s place as God’s covenant people', ['super']]);
  fam('story').claims.push(['A future large-scale turning of Jewish people to Christ is expected (Romans 11)', ['disp', 'prog', 'cov']]);
  // Salvation: Lutheran and Molinism
  addFw('salv', { id: 'luth', name: 'Lutheran view', color: '#A0661E', who: 'Lutheran churches',
    desc: 'Stands between Calvinism and Arminianism: God alone brings people to faith and elects them to salvation, but there is no election to damnation, Christ died for all, and grace can be rejected and faith lost.',
    pro: 'Supporters say it keeps both biblical truths without forcing a logical system.', con: 'Critics say it leaves an unresolved tension: why some are saved and not others.',
    src: [['Lutheranism (Britannica)', BR + 'summary/Lutheranism']] },
    ['Grace comes first: no one can turn to God without it', 'Christ died for everyone, and grace can be resisted', 'A believer can fall away and be lost', 'Justification by faith alone; Christ’s righteousness is credited to the believer']);
  addFw('salv', { id: 'mol', name: 'Molinism (middle knowledge)', color: '#5B4A8A', who: 'Developed by the Jesuit Luis de Molina; held by some Catholic and evangelical philosophers today',
    desc: 'God has “middle knowledge”: he knows what every free creature would do in any situation. By choosing which world to create, he providentially guides everything while people remain truly free.',
    pro: 'Supporters say it reconciles full divine sovereignty with real human freedom.', con: 'Critics question whether such knowledge is possible and whether it truly preserves freedom.',
    src: [['Molinism (Britannica)', BR + 'topic/Molinism']] },
    ['Grace comes first: no one can turn to God without it', 'Christ died for everyone, and grace can be resisted', 'Human freedom genuinely cooperates with God’s grace']);
  fam('salv').claims.push(['Election to salvation, with no election to damnation', ['luth']]);
  fam('salv').claims.push(['God knows what every free person would choose in any circumstance (middle knowledge)', ['mol']]);
  // End times: split premillennialism
  var em = fam('end');
  em.fws.forEach(function (f) { if (f.id === 'premil') { f.name = 'Historic premillennialism'; f.who = 'Some early church writers; many evangelicals today'; f.desc = 'Christ returns after a time of tribulation that the church passes through, and then reigns on earth for a thousand years before the final judgment.'; } });
  em.fws.push({ id: 'dpremil', name: 'Dispensational premillennialism', color: '#8A2E4A', who: 'Dispensational evangelicals; popularized by the Scofield Bible and the Left Behind novels',
    desc: 'Christ first comes for his church in a rapture, followed by seven years of tribulation, then returns visibly to reign from Jerusalem for a thousand years, fulfilling promises to national Israel.',
    pro: 'Supporters say it fits a consistently literal reading of prophecy.', con: 'Critics say the two-stage return is not clearly taught in Scripture and was unknown before the 1800s.',
    src: [['The Rapture (Britannica)', BR + 'topic/Rapture-the'], ['Dispensationalism (Britannica)', BR + 'topic/dispensationalism']] });
  em.claims.forEach(function (c) {
    if (c[0] === 'Christ will return bodily, raise the dead and judge the world' || c[0] === 'Christ returns before a literal thousand-year reign on earth' || c[0] === 'Expect growing hardship and tribulation before Christ returns') c[1].push('dpremil');
  });
  em.claims.push(['A rapture of the church before the tribulation', ['dpremil']]);
  em.claims.push(['The church goes through the tribulation', ['premil']]);
  em.claims.push(['Promises to national Israel fulfilled in the millennium', ['dpremil']]);
  // Lord's Supper: Orthodox mystery
  addFw('supper', { id: 'orth', name: 'Orthodox mystery (metabolē)', color: '#2E4A8A', who: 'Eastern Orthodox churches',
    desc: 'The bread and wine truly become Christ’s body and blood through the invocation of the Holy Spirit (the epiclesis), but the change is a mystery that the Orthodox decline to define philosophically.',
    pro: 'Supporters say it affirms Jesus’ words while respecting mystery.', con: 'Western critics on each side see it as either too close to, or not precise enough about, transubstantiation.',
    src: [['Eucharist (Britannica)', BR + 'topic/Eucharist']] },
    ['Instituted by Christ at the Last Supper and to be repeated', 'Remembers Christ’s death and unites believers with one another', 'Christ is truly present to the believer in the Supper', 'Christ’s body and blood are physically present in or under the elements']);
  fam('supper').claims.push(['The change is a mystery brought about by the Holy Spirit, not defined philosophically', ['orth']]);

  // ----- New topics -----
  FW_FAMILIES.push({ id: 'atone', name: 'Atonement: what the cross accomplished', fws: [
    { id: 'cv', name: 'Ransom / Christus Victor', color: '#2E4A8A', who: 'Prominent in the early church Fathers and in Orthodox theology; revived in the 20th century',
      desc: 'On the cross and in the resurrection Christ defeats sin, death and the devil, freeing humanity from their power. Emphasizes victory and liberation.',
      pro: 'Supporters say it captures the early church’s joyful note of triumph (Col 2:15).', con: 'Critics say alone it does not explain why the cross deals with guilt.',
      src: [['Atonement (Britannica)', BR + 'topic/atonement-religion']] },
    { id: 'sat', name: 'Satisfaction (Anselm)', color: '#8A2E4A', who: 'Medieval and Catholic theology',
      desc: 'Sin dishonors God and demands satisfaction that humans cannot give. Only one who is both God and human could make it, which is why God became man (Anselm, c. 1099).',
      pro: 'Supporters say it explains why the incarnation was necessary.', con: 'Critics say it rests on medieval ideas of honor.',
      src: [['Cur Deus homo? (Britannica)', BR + 'topic/Cur-Deus-homo']] },
    { id: 'psub', name: 'Penal substitution', color: '#1F6656', who: 'Reformation and most evangelical theology',
      desc: 'Christ bore the penalty for sin in the place of sinners, satisfying God’s justice so that they can be forgiven. Developed by the Reformers from Anselm’s framework.',
      pro: 'Supporters cite Isaiah 53 and 2 Corinthians 5:21 and see it as central to the gospel.', con: 'Critics say it can make the Father seem opposed to the Son, or reduce the cross to a legal transaction.',
      src: [['Atonement (Britannica)', BR + 'topic/atonement-religion']] },
    { id: 'moral', name: 'Moral influence (Abelard)', color: '#A0661E', who: 'Associated with Peter Abelard; influential in liberal Protestant theology',
      desc: 'The cross is supremely a display of God’s love that moves sinners to repentance and love in return.',
      pro: 'Supporters say it highlights the love at the heart of the cross (Romans 5:8).', con: 'Critics say on its own it does not explain why Christ had to die.',
      src: [['Atonement (Britannica)', BR + 'topic/atonement-religion']] }
  ], claims: [
    ['Christ’s death reconciles humanity to God', ['cv', 'sat', 'psub', 'moral']],
    ['The cross and resurrection defeat sin, death and the devil', ['cv']],
    ['Christ makes satisfaction for the offense of sin', ['sat', 'psub']],
    ['Christ bears the penalty of sin in the sinner’s place', ['psub']],
    ['Only one who is both God and human could save us', ['sat', 'psub', 'cv']],
    ['The cross reveals God’s love and moves people to love him', ['moral', 'cv', 'psub']],
    ['The main problem addressed is bondage to evil powers', ['cv']],
    ['The main problem addressed is guilt before God’s justice', ['psub', 'sat']]
  ] });
  FW_FAMILIES.push({ id: 'bapt', name: 'Baptism: who and what it does', fws: [
    { id: 'regen', name: 'Sacramental (baptismal regeneration)', color: '#8A2E4A', who: 'Catholic, Orthodox and Lutheran churches; many Anglicans',
      desc: 'Baptism is God’s work that gives new birth and forgiveness of sins, so infants are baptized. The Orthodox baptize by triple immersion and immediately chrismate and commune infants.',
      pro: 'Supporters cite John 3:5, Acts 2:38 and Titus 3:5.', con: 'Critics say it ties salvation to a ritual rather than to faith.',
      src: [['Sacrament: baptism (Britannica)', BR + 'topic/sacrament/Theology-and-practice-of-sacraments-in-Christianity'], ['Lutheranism (Britannica)', BR + 'topic/Lutheranism/Church-and-state']] },
    { id: 'covsign', name: 'Covenant sign (Reformed infant baptism)', color: '#1F6656', who: 'Reformed, Presbyterian and many Methodist churches',
      desc: 'As circumcision marked Israel’s children, baptism marks the children of believers as members of the covenant community. It is a sign and seal of grace, not automatically saving.',
      pro: 'Supporters cite household baptisms in Acts and Colossians 2:11–12.', con: 'Critics say the New Testament only shows believers being baptized.',
      src: [['Reformed and Presbyterian churches (Britannica)', BR + 'topic/Presbyterian-churches']] },
    { id: 'cred', name: 'Believer’s baptism', color: '#4A5866', who: 'Baptist, Anabaptist, Pentecostal and most nondenominational churches',
      desc: 'Baptism is for those who personally profess faith, usually by full immersion, as a public act of obedience and witness to what God has already done.',
      pro: 'Supporters say every clear New Testament example follows a profession of faith.', con: 'Critics say it treats children of believers as outsiders to the covenant.',
      src: [['Baptist (Britannica)', BR + 'topic/Baptist/History'], ['Anabaptists (Britannica)', BR + 'summary/Anabaptists']] }
  ], claims: [
    ['Baptism with water in the name of the Trinity is commanded by Christ', ['regen', 'covsign', 'cred']],
    ['Infants are baptized', ['regen', 'covsign']],
    ['Only those who profess faith are baptized', ['cred']],
    ['Baptism itself conveys new birth and forgiveness', ['regen']],
    ['Baptism is a sign and seal of the covenant of grace', ['covsign']],
    ['Baptism is mainly a public act of obedience and testimony', ['cred']],
    ['Immersion is the proper or normal mode', ['cred']],
    ['Baptism is a sacrament, a means of grace', ['regen', 'covsign']]
  ] });
  FW_FAMILIES.push({ id: 'polity', name: 'Church government: who leads', fws: [
    { id: 'episc', name: 'Episcopal (bishops)', color: '#8A2E4A', who: 'Catholic, Orthodox, Anglican; many Lutheran and Methodist churches',
      desc: 'Three orders of ministry, bishops, priests (presbyters) and deacons, with bishops overseeing regions. Catholic, Orthodox and Anglican churches link this to apostolic succession.',
      pro: 'Supporters say it goes back to the 2nd century and gives unity and continuity.', con: 'Critics say the New Testament uses “bishop” and “elder” for the same office.',
      src: [['Episcopacy (Britannica)', BR + 'topic/episcopacy']] },
    { id: 'presb', name: 'Presbyterian (elders)', color: '#1F6656', who: 'Presbyterian and Reformed churches',
      desc: 'Each congregation is led by elected elders with the pastor (the session). Regional presbyteries, synods and a general assembly oversee congregations.',
      pro: 'Supporters see it as the New Testament pattern of plural elders, with accountability between churches.', con: 'Critics say it can become bureaucratic, or that it lacks a clear biblical warrant for higher courts.',
      src: [['Presbyterian (Britannica)', BR + 'topic/presbyterian']] },
    { id: 'congr', name: 'Congregational', color: '#4A5866', who: 'Baptist, Congregationalist, Anabaptist and many nondenominational and Pentecostal churches',
      desc: 'Each local congregation governs itself under Christ, with members voting on major decisions. Churches cooperate in associations but no outside body has authority over them.',
      pro: 'Supporters say it reflects the priesthood of all believers and local churches in Acts.', con: 'Critics say it offers little protection against local error or abuse.',
      src: [['Presbyterian vs. Congregational government (Britannica)', BR + 'topic/How-does-Presbyterian-church-government-differ-from-Congregational-church-government']] }
  ], claims: [
    ['Christ is the head of the church', ['episc', 'presb', 'congr']],
    ['Bishops oversee congregations in a region', ['episc']],
    ['Apostolic succession of bishops matters for valid ministry', ['episc']],
    ['Local churches are led by a plurality of elders', ['presb', 'congr']],
    ['Regional and national church courts have binding authority', ['presb', 'episc']],
    ['Each congregation is self-governing', ['congr']],
    ['Members vote on major decisions', ['congr', 'presb']]
  ] });
  FW_FAMILIES.push({ id: 'gifts', name: 'Spiritual gifts: tongues, prophecy, healing', fws: [
    { id: 'cess', name: 'Cessationism', color: '#4A5866', who: 'Many Reformed, Presbyterian, Baptist and dispensational churches',
      desc: 'The miraculous sign gifts (tongues, prophecy, healing) authenticated the apostles and ended with them once Scripture was complete. God still works miracles, but not through these gifted offices.',
      pro: 'Supporters say it protects the finality of Scripture.', con: 'Critics say no passage teaches that the gifts ceased.',
      src: [['Protestantism: Pentecostalism (Britannica)', BR + 'topic/Protestantism/Pentecostalism']] },
    { id: 'cont', name: 'Continuationism (Pentecostal / charismatic)', color: '#A0522D', who: 'Pentecostal and charismatic churches, including charismatic Catholics and Protestants',
      desc: 'All the gifts of the Spirit continue today. Pentecostals usually expect a “baptism in the Holy Spirit” after conversion, often with speaking in tongues.',
      pro: 'Supporters cite Acts 2, 1 Corinthians 12–14 and the movement’s global growth.', con: 'Critics point to excesses and to claims of prophecy that compete with Scripture.',
      src: [['Pentecostalism (Britannica)', BR + 'topic/Pentecostalism'], ['Charismata (Britannica)', BR + 'topic/charismata']] },
    { id: 'open', name: 'Open but cautious', color: '#1F6656', who: 'Many evangelical, Anglican, Methodist, Catholic and Orthodox Christians',
      desc: 'God can and does give extraordinary gifts today, but they are not expected of every believer, and any claimed revelation is tested against Scripture and the church.',
      pro: 'Supporters say it avoids both closing the door and building a theology on experiences.', con: 'Critics on both sides say it avoids taking a clear position.',
      src: [['Charismatic Christian church (Britannica)', BR + 'topic/Charismatic-Christian-church']] }
  ], claims: [
    ['The Holy Spirit gives gifts to every believer for the good of the church', ['cess', 'cont', 'open']],
    ['God can still heal and work miracles in answer to prayer', ['cess', 'cont', 'open']],
    ['Tongues, prophecy and gifts of healing continue today', ['cont', 'open']],
    ['These sign gifts ended with the apostles', ['cess']],
    ['A baptism in the Spirit after conversion is expected', ['cont']],
    ['All claimed revelation must be tested by Scripture', ['cess', 'cont', 'open']]
  ] });
  FW_FAMILIES.push({ id: 'creat', name: 'Creation: reading Genesis 1–2', fws: [
    { id: 'yec', name: 'Young-earth creationism', color: '#A0522D', who: 'Many fundamentalist and conservative evangelical Christians',
      desc: 'Genesis 1 describes six 24-hour days a few thousand years ago; the flood was global. Mainstream science’s dating is rejected or reinterpreted.',
      pro: 'Supporters say it takes Genesis at face value and fits the genealogies.', con: 'Critics, including many Christians, say it conflicts with overwhelming scientific evidence.',
      src: [['Creationism (Britannica)', BR + 'topic/creationism']] },
    { id: 'oec', name: 'Old-earth creationism', color: '#1F6656', who: 'Many evangelicals; includes day-age and framework readings',
      desc: 'Accepts the scientific age of the earth and universe while holding that God created directly at key points; the “days” are long ages or a literary framework. Often joined with intelligent-design arguments.',
      pro: 'Supporters say it honors both Genesis and the scientific record.', con: 'Critics on one side say it compromises Scripture; on the other, that it resists biological evolution.',
      src: [['Creationism (Britannica)', BR + 'topic/creationism']] },
    { id: 'evc', name: 'Evolutionary creation (theistic evolution)', color: '#2E4A8A', who: 'Accepted by the Catholic Church and many mainline Protestant, Orthodox and evangelical scientists',
      desc: 'God created through the processes science describes, including evolution. Genesis is read as teaching who created and why, not the scientific how.',
      pro: 'Supporters say God is author of both Scripture and nature, which cannot finally conflict.', con: 'Critics say it struggles to account for a historical Adam and the Fall.',
      src: [['Evolutionary theism (Britannica)', BR + 'topic/evolutionary-theism']] }
  ], claims: [
    ['God created everything out of nothing', ['yec', 'oec', 'evc']],
    ['Humans are made in God’s image', ['yec', 'oec', 'evc']],
    ['The earth is thousands, not billions, of years old', ['yec']],
    ['The days of Genesis 1 are 24-hour days', ['yec']],
    ['The universe is about 13.8 billion years old', ['oec', 'evc']],
    ['God worked through common descent and natural selection', ['evc']],
    ['God created directly at key points in history', ['yec', 'oec']]
  ] });
  FW_FAMILIES.push({ id: 'women', name: 'Women in church leadership', fws: [
    { id: 'sacm', name: 'Male priesthood (sacramental)', color: '#8A2E4A', who: 'Catholic and Orthodox churches',
      desc: 'Only men are ordained as priests and bishops, because the priest represents Christ at the altar and the church follows the pattern of the apostles. Women serve in many other roles.',
      pro: 'Supporters say the church has no authority to change what Christ and the apostles established.', con: 'Critics say it excludes women’s gifts from leadership.',
      src: [['Women (Britannica)', BR + 'topic/women']] },
    { id: 'comp', name: 'Complementarian', color: '#4A5866', who: 'Many evangelical churches, e.g., the Southern Baptist Convention and the Presbyterian Church in America',
      desc: 'Men and women are equal in worth but have complementary roles; the office of pastor or elder is limited to qualified men, while women lead in many other ways.',
      pro: 'Supporters cite 1 Timothy 2 and 3 and the order of creation.', con: 'Critics say those passages addressed specific situations.',
      src: [['Saddleback Church (Britannica)', BR + 'biography/Saddleback-Church']] },
    { id: 'egal', name: 'Egalitarian', color: '#1F6656', who: 'Many mainline Protestant, Methodist, Pentecostal and Anglican churches',
      desc: 'All church offices, including pastor and bishop, are open to both women and men according to their gifting and calling.',
      pro: 'Supporters cite Galatians 3:28, women leaders in the New Testament (Phoebe, Junia) and the Spirit poured out on all.', con: 'Critics say it sets aside clear New Testament instructions.',
      src: [['Anglicanism: internal developments (Britannica)', BR + 'topic/Anglicanism/Internal-developments']] }
  ], claims: [
    ['Women and men are equally made in God’s image', ['sacm', 'comp', 'egal']],
    ['Women serve in many ministries such as teaching, mission and care', ['sacm', 'comp', 'egal']],
    ['Only men are ordained as priests or bishops', ['sacm']],
    ['The office of pastor or elder is limited to men', ['sacm', 'comp']],
    ['All offices are open to women and men alike', ['egal']],
    ['The question is decided by the church’s sacramental tradition', ['sacm']],
    ['The question is decided by Scripture’s instructions on church order', ['comp', 'egal']]
  ] });
  FW_FAMILIES.push({ id: 'rev', name: 'Reading Revelation', fws: [
    { id: 'pret', name: 'Preterist', color: '#2E4A8A', who: 'Partial preterism is held by some Reformed and Catholic interpreters',
      desc: 'Most of Revelation’s visions were fulfilled in the first centuries, especially the fall of Jerusalem in AD 70 and persecution under Rome. Partial preterists still expect Christ’s future return.',
      pro: 'Supporters say it reads the book as its first readers would have.', con: 'Critics say it empties much of the book of future hope.',
      src: [['Number of the beast (Britannica)', BR + 'topic/number-of-the-beast'], ['Seven seals (Britannica)', BR + 'topic/seven-seals']] },
    { id: 'hist', name: 'Historicist', color: '#A0661E', who: 'Common among the Reformers and Protestants until the 19th century',
      desc: 'Revelation maps out church history from the apostles to the end, with its symbols matched to events and powers over the centuries.',
      pro: 'Supporters say it makes the book relevant to every generation of the church.', con: 'Critics note interpreters’ timelines keep changing.',
      src: [['Seven seals (Britannica)', BR + 'topic/seven-seals']] },
    { id: 'fut', name: 'Futurist', color: '#A0522D', who: 'Dispensationalists and many premillennial evangelicals',
      desc: 'Most of Revelation from chapter 4 on describes events still to come just before Christ’s return.',
      pro: 'Supporters say the book itself claims to describe the end.', con: 'Critics say it makes the book largely irrelevant to its first readers.',
      src: [['Seven seals (Britannica)', BR + 'topic/seven-seals']] },
    { id: 'ideal', name: 'Idealist (symbolic)', color: '#1F6656', who: 'Many amillennial Catholic, Orthodox and Protestant readers',
      desc: 'Revelation’s visions portray the timeless struggle between God and evil, and Christ’s certain victory, not a timeline of specific events.',
      pro: 'Supporters say it fits the book’s apocalyptic style.', con: 'Critics say it is too vague about real future events.',
      src: [['Seven seals (Britannica)', BR + 'topic/seven-seals']] }
  ], claims: [
    ['Revelation is inspired prophecy with a message for every age', ['pret', 'hist', 'fut', 'ideal']],
    ['Christ will finally return and defeat evil', ['pret', 'hist', 'fut', 'ideal']],
    ['Much of the book was fulfilled in the first centuries', ['pret']],
    ['The book traces church history across the centuries', ['hist']],
    ['Most of the book describes events still future', ['fut']],
    ['The symbols portray spiritual realities rather than specific events', ['ideal']],
    ['The original readers in Roman Asia are the primary key', ['pret', 'ideal']]
  ] });
})();

// Where each framework is found. T = official or majority view in that tradition; S = found in some churches or among many members.
// A loose association compiled for this app from the tradition and framework sources above; individual churches vary.
var FW_TRADS = {
  sola: { T: 'LRBPN', S: 'AM' }, mag: { T: 'C', S: '' }, trad: { T: 'O', S: '' }, quad: { T: 'M', S: '' }, stool: { T: 'A', S: '' },
  cov: { T: 'R', S: 'AB' }, disp: { T: '', S: 'BP' }, prog: { T: '', S: 'B' }, super: { T: '', S: 'COLAR' },
  calv: { T: 'R', S: 'AB' }, arm: { T: 'MP', S: 'ABN' }, syn: { T: 'CO', S: '' }, luth: { T: 'L', S: '' }, mol: { T: '', S: 'CB' },
  amil: { T: 'COLR', S: 'AMB' }, premil: { T: '', S: 'BP' }, dpremil: { T: '', S: 'BP' }, postmil: { T: '', S: 'R' },
  trans: { T: 'C', S: '' }, union: { T: 'L', S: '' }, spirit: { T: 'R', S: 'AM' }, memo: { T: 'BPN', S: '' }, orth: { T: 'O', S: '' },
  cv: { T: 'O', S: 'CLA' }, sat: { T: 'C', S: '' }, psub: { T: 'RB', S: 'LAMP' }, moral: { T: '', S: 'AM' },
  regen: { T: 'COL', S: 'A' }, covsign: { T: 'RM', S: 'A' }, cred: { T: 'BPN', S: '' },
  episc: { T: 'COA', S: 'LM' }, presb: { T: 'R', S: '' }, congr: { T: 'BN', S: 'P' },
  cess: { T: '', S: 'RB' }, cont: { T: 'P', S: 'CABM' }, open: { T: '', S: 'AMCOL' },
  yec: { T: '', S: 'BP' }, oec: { T: '', S: 'BRP' }, evc: { T: 'C', S: 'ALMOR' },
  sacm: { T: 'CO', S: '' }, comp: { T: '', S: 'BRLA' }, egal: { T: 'M', S: 'ALRPB' },
  pret: { T: '', S: 'RC' }, hist: { T: '', S: '' }, fut: { T: '', S: 'BP' }, ideal: { T: '', S: 'COLAR' }
};
var TRAD_NAME = {}; TRADS.forEach(function (t) { TRAD_NAME[t.id] = t; });
// ----- More topics: afterlife, church & state, holiness, God's foreknowledge, Paul, justice, sexuality -----
(function () {
  var P = 'https://www.pewresearch.org/';
  FW_FAMILIES.push({ id: 'hell', name: 'Hell and final judgment', fws: [
    { id: 'ecp', name: 'Eternal conscious punishment', color: '#8A2E4A', who: 'The historic majority view in Catholic, Orthodox and Protestant teaching',
      desc: 'Those who finally reject God are separated from him forever in conscious punishment, as in Jesus’ words about “eternal fire” (Matthew 25).',
      pro: 'Supporters say it is the plainest reading of Jesus’ teaching and the church’s consistent view.', con: 'Critics say everlasting torment seems out of proportion to finite sins.',
      src: [['Hell (Britannica)', BR + 'topic/hell/Christianity']] },
    { id: 'ann', name: 'Annihilationism (conditional immortality)', color: '#A0661E', who: 'A minority view among some evangelicals and Anglicans',
      desc: 'Immortality is God’s gift to the saved, not a natural property of every soul. After judgment, the unrepentant are destroyed and cease to exist.',
      pro: 'Supporters cite Bible words like “destroy” and “perish” (Matthew 10:28; John 3:16).', con: 'Critics say it weakens texts that speak of everlasting punishment.',
      src: [['Hell (Britannica)', BR + 'topic/hell']] },
    { id: 'univ', name: 'Universalism (universal restoration)', color: '#2E4A8A', who: 'Rare in official teaching; held by some theologians, often as a hope rather than a certainty',
      desc: 'In the end God will reconcile all people to himself; any punishment is purifying and temporary. Associated with Origen, whose version the church condemned.',
      pro: 'Supporters cite 1 Corinthians 15:22 and Colossians 1:20 and God’s love.', con: 'Critics say it contradicts Jesus’ warnings and was rejected by the early church.',
      src: [['Universalism (Britannica)', BR + 'topic/Universalism'], ['Salvation (Britannica)', BR + 'topic/salvation-religion']] }
  ], claims: [
    ['Christ will judge all people', ['ecp', 'ann', 'univ']],
    ['Judgment is real and serious', ['ecp', 'ann', 'univ']],
    ['Some people will be finally lost', ['ecp', 'ann']],
    ['Punishment is conscious and everlasting', ['ecp']],
    ['Immortality is God’s gift to the saved, not natural to every soul', ['ann']],
    ['The lost are finally destroyed and cease to exist', ['ann']],
    ['All people will in the end be reconciled to God', ['univ']],
    ['Any punishment after death is purifying and temporary', ['univ']]
  ] });
  FW_FAMILIES.push({ id: 'state', name: 'Church and state', fws: [
    { id: 'twok', name: 'Two kingdoms (Lutheran)', color: '#A0661E', who: 'Lutheran churches; some Reformed thinkers',
      desc: 'God rules the world in two ways: through government and civil order for everyone, and through the gospel in the church. The two are interdependent but must not be confused.',
      pro: 'Supporters say it keeps the gospel from being turned into politics, and politics from claiming to save.', con: 'Critics say it can make Christians too passive before unjust rulers.',
      src: [['Lutheranism: church and state (Britannica)', BR + 'topic/Lutheranism/Church-and-state']] },
    { id: 'cst', name: 'Catholic social teaching', color: '#8A2E4A', who: 'Catholic Church',
      desc: 'Church and state are distinct, but the church teaches on moral and social questions for the common good, drawing on natural law. Key themes include human dignity, workers’ rights and a preferential option for the poor (from Rerum novarum, 1891).',
      pro: 'Supporters say it gives a coherent, non-partisan framework for public life.', con: 'Critics on the left and right say it is either too cautious or too interventionist.',
      src: [['Rerum novarum (Britannica)', BR + 'topic/Rerum-Novarum']] },
    { id: 'sep', name: 'Anabaptist separation', color: '#56661C', who: 'Mennonite, Amish, Brethren and other Anabaptist churches',
      desc: 'The church is a distinct community that lives by Jesus’ way of peace. Most refuse military service and oaths and stay apart from the coercive power of the state.',
      pro: 'Supporters say it takes the Sermon on the Mount literally.', con: 'Critics say it withdraws from responsibility for justice in society.',
      src: [['Anabaptists (Britannica)', BR + 'summary/Anabaptists']] },
    { id: 'theon', name: 'Theonomy (Christian Reconstructionism)', color: '#4A5866', who: 'A small minority, mostly in some Reformed circles',
      desc: 'The civil laws of the Old Testament remain binding on all nations and should form the basis of civil law.',
      pro: 'Supporters say God’s law is the only just standard for every society.', con: 'Critics, including most Reformed theologians, say it misreads how the Old Testament law applies after Christ.',
      src: [['Theonomy (Britannica)', BR + 'topic/theonomy-Christian-theology']] }
  ], claims: [
    ['Christians should pray for and generally obey governing authorities (Romans 13)', ['twok', 'cst', 'sep', 'theon']],
    ['Government’s role is distinct from the church’s', ['twok', 'cst', 'sep']],
    ['The church should speak to public moral questions', ['cst', 'theon', 'twok']],
    ['Christians may serve in government and the military', ['twok', 'cst', 'theon']],
    ['Nonviolence and refusal of oaths', ['sep']],
    ['Old Testament civil laws should become civil law today', ['theon']],
    ['Natural law gives common moral ground with non-Christians', ['cst', 'twok']]
  ] });
  FW_FAMILIES.push({ id: 'holy', name: 'Holiness: how Christians grow', fws: [
    { id: 'ent', name: 'Entire sanctification (Wesleyan-Holiness)', color: '#7A3B1E', who: 'Methodist and Holiness churches (e.g., Nazarene, Wesleyan, Free Methodist)',
      desc: 'After conversion, a second work of grace can bring “Christian perfection”: a heart made perfect in love, freed from willful sin, though not from mistakes.',
      pro: 'Supporters cite calls to be holy and perfect (Matthew 5:48; 1 Thessalonians 5:23).', con: 'Critics say no believer reaches sinlessness in this life.',
      src: [['Holiness movement (Britannica)', BR + 'event/Holiness-movement'], ['Church of the Nazarene (Britannica)', BR + 'topic/Church-of-the-Nazarene']] },
    { id: 'progs', name: 'Progressive sanctification', color: '#1F6656', who: 'Reformed, Baptist and many evangelical churches; also the Assemblies of God',
      desc: 'Believers are declared righteous at once, but grow in holiness gradually throughout life by the Spirit, Scripture, prayer and the church; sin remains until glory.',
      pro: 'Supporters say it matches both Paul’s struggles (Romans 7) and his calls to grow.', con: 'Critics say it can lower expectations of real change.',
      src: [['Assemblies of God (Britannica)', BR + 'topic/Assemblies-of-God']] },
    { id: 'theosis', name: 'Theosis / growth in grace', color: '#2E4A8A', who: 'Eastern Orthodox; similar Catholic teaching on growth in sanctifying grace',
      desc: 'Salvation is a lifelong transformation into union with God, nourished through prayer, the sacraments, ascetic discipline and the life of the church.',
      pro: 'Supporters cite 2 Peter 1:4, “partakers of the divine nature.”', con: 'Protestant critics say it can blur the line between justification and growth.',
      src: [['Deification (Britannica)', BR + 'topic/deification']] }
  ], claims: [
    ['God calls every Christian to holiness', ['ent', 'progs', 'theosis']],
    ['Growth comes by the Holy Spirit, not human effort alone', ['ent', 'progs', 'theosis']],
    ['A second, distinct work of grace after conversion', ['ent']],
    ['Christians can be freed from willful sin in this life', ['ent']],
    ['Sin remains in believers until death', ['progs']],
    ['Holiness grows gradually across a lifetime', ['progs', 'theosis']],
    ['Sacraments and ascetic practice are central means of growth', ['theosis']],
    ['The goal is union with God, sharing his life', ['theosis', 'ent']]
  ] });
  FW_FAMILIES.push({ id: 'know', name: 'God’s knowledge of the future', fws: [
    { id: 'class', name: 'Classical theism', color: '#2E4A8A', who: 'The historic view of Catholic, Orthodox and Protestant churches (Augustine, Boethius, Aquinas)',
      desc: 'God knows the entire future, including every free choice, and this does not take away human freedom; some explain that God sees all time from eternity.',
      pro: 'Supporters cite prophecy and God’s perfect knowledge.', con: 'Critics ask how choices God already knows can be truly free.',
      src: [['Philosophers to know: Augustine (Britannica)', BR + 'list/philosophers-to-know-part-i'], ['Free will and moral responsibility (Britannica)', BR + 'topic/free-will-and-moral-responsibility/Compatibilism']] },
    { id: 'mol2', name: 'Molinism (middle knowledge)', color: '#5B4A8A', who: 'Some Catholic and evangelical philosophers',
      desc: 'God knows not only what will happen but what every free creature would do in any possible situation, and uses that knowledge in choosing which world to create.',
      pro: 'Supporters say it explains both providence and freedom.', con: 'Critics question whether such knowledge is possible.',
      src: [['Molinism (Britannica)', BR + 'topic/Molinism']] },
    { id: 'openth', name: 'Open theism', color: '#A0522D', who: 'A minority view among some evangelical theologians since the 1990s',
      desc: 'The future is partly open because free choices are not yet real; God knows all that can be known, including every possibility, and responds in real relationship.',
      pro: 'Supporters cite passages where God “changes his mind” or tests people.', con: 'Critics, including most evangelical bodies, say it diminishes God’s sovereignty and knowledge.',
      src: [['Pantheism and panentheism: open future (Britannica)', BR + 'topic/pantheism/God-as-absolute-or-relative']] }
  ], claims: [
    ['God knows everything that can be known', ['class', 'mol2', 'openth']],
    ['Humans make real, responsible choices', ['class', 'mol2', 'openth']],
    ['God knows every future free choice', ['class', 'mol2']],
    ['God knows what anyone would freely do in any situation', ['mol2']],
    ['Future free choices are not yet knowable, even to God', ['openth']],
    ['God experiences real give-and-take with people over time', ['openth']]
  ] });
  FW_FAMILIES.push({ id: 'paul', name: 'Reading Paul on justification', fws: [
    { id: 'oldp', name: 'Reformation reading', color: '#1F6656', who: 'Lutheran, Reformed and most evangelical churches',
      desc: 'Paul opposes any attempt to earn salvation by keeping the law. Justification is God’s verdict that a sinner is righteous, received by faith alone through Christ’s righteousness credited to them.',
      pro: 'Supporters say it captures Paul’s core message in Romans and Galatians.', con: 'Critics say it reads 16th-century debates into 1st-century Judaism.',
      src: [['Lutheranism (Britannica)', BR + 'topic/Lutheranism']] },
    { id: 'newp', name: 'New Perspective on Paul', color: '#5B4A8A', who: 'Scholars such as E. P. Sanders, James Dunn and N. T. Wright (an Anglican bishop)',
      desc: 'First-century Judaism was not legalistic but a religion of grace (“covenantal nomism”). Paul’s target was “works of the law” like circumcision and food laws that marked off Jews from Gentiles, and justification is chiefly about who belongs to God’s people.',
      pro: 'Supporters say it reads Paul in his real historical setting.', con: 'Reformed critics say it undercuts justification by faith alone.',
      src: [['New Perspective on Paul (ReligionFacts)', 'https://religionfacts.com/new-perspective-on-paul'], ['A Reformed critique (Ligonier)', 'https://learn.ligonier.org/articles/the-new-perspective-on-paul-calvin-and-nt-wright']] }
  ], claims: [
    ['Salvation is by God’s grace in Christ', ['oldp', 'newp']],
    ['Faith in Christ is central to belonging to God', ['oldp', 'newp']],
    ['Paul opposes earning salvation by good works', ['oldp']],
    ['Christ’s righteousness is credited (imputed) to the believer', ['oldp']],
    ['Judaism in Paul’s day was a religion of grace, not legalism', ['newp']],
    ['“Works of the law” mainly means Jewish identity markers', ['newp']],
    ['Justification is chiefly about who belongs to God’s people', ['newp']]
  ] });
  FW_FAMILIES.push({ id: 'just', name: 'Faith, poverty and justice', fws: [
    { id: 'libt', name: 'Liberation theology', color: '#A0522D', who: 'Began among Latin American Catholics in the 1970s; also found in some Protestant and Black theology',
      desc: 'Faith must be lived in solidarity with the poor and oppressed, including working to change unjust social and economic structures. Its founding text is Gustavo Gutiérrez’s A Theology of Liberation (1971).',
      pro: 'Supporters say it recovers the Bible’s concern for the poor, from the Exodus to Jesus.', con: 'Critics, including the Vatican under John Paul II, faulted its use of Marxist analysis.',
      src: [['Liberation theology (Britannica)', BR + 'topic/liberation-theology']] },
    { id: 'cst2', name: 'Catholic social teaching', color: '#8A2E4A', who: 'Catholic Church',
      desc: 'A body of teaching since 1891 on human dignity, the common good, workers’ rights and a “preferential option for the poor,” without endorsing class struggle.',
      pro: 'Supporters say it joins concern for justice with church tradition.', con: 'Critics say it is often vague in practice.',
      src: [['Rerum novarum (Britannica)', BR + 'topic/Rerum-Novarum'], ['Jesuits (Britannica)', BR + 'topic/Jesuits']] }
  ], claims: [
    ['God cares especially for the poor and oppressed', ['libt', 'cst2']],
    ['A “preferential option for the poor”', ['libt', 'cst2']],
    ['Faith must work to change unjust social structures', ['libt']],
    ['Social analysis may draw on Marxist categories', ['libt']],
    ['Rejects class struggle as a principle', ['cst2']],
    ['Grounded in natural law and papal encyclicals', ['cst2']]
  ] });
  FW_FAMILIES.push({ id: 'sex', name: 'Marriage and sexuality', fws: [
    { id: 'sxtrad', name: 'Traditional teaching', color: '#4A5866', who: 'Catholic, Orthodox, most evangelical and Pentecostal churches, and conservative bodies in other traditions',
      desc: 'Marriage is a lifelong union of one man and one woman, the only setting for sexual relations. Same-sex attraction is not itself a sin, but same-sex sexual relationships are not blessed. Many churches stress pastoral care and welcome.',
      pro: 'Supporters cite Genesis 2, Jesus’ teaching on marriage (Matthew 19) and consistent church teaching.', con: 'Critics say it causes real harm to gay and lesbian Christians.',
      src: [['Pew: where churches stand (2015)', P + 'short-reads/2015/12/21/where-christian-churches-stand-on-gay-marriage/'], ['Pew: official positions (2012)', P + 'religion/2012/12/07/religious-groups-official-positions-on-same-sex-marriage/']] },
    { id: 'affirm', name: 'Affirming', color: '#1F6656', who: 'Some mainline Protestant churches, such as the Episcopal Church, the ELCA and the Presbyterian Church (U.S.A.)',
      desc: 'Same-sex couples can enter faithful, lifelong marriages that the church blesses, and gay and lesbian Christians may be ordained.',
      pro: 'Supporters read the biblical texts as addressing exploitative practices, not committed relationships, and stress love and justice.', con: 'Critics say it departs from Scripture and two thousand years of teaching.',
      src: [['Pew: where churches stand (2015)', P + 'short-reads/2015/12/21/where-christian-churches-stand-on-gay-marriage/'], ['Pew: religion and LGBTQ views (2025)', P + 'religion/2025/02/26/religion-and-views-on-lgbtq-issues-and-abortion/']] }
  ], claims: [
    ['Every person is made in God’s image and deserves dignity', ['sxtrad', 'affirm']],
    ['Marriage is a lifelong, faithful covenant', ['sxtrad', 'affirm']],
    ['Marriage is between one man and one woman', ['sxtrad']],
    ['Same-sex sexual relationships are outside God’s design', ['sxtrad']],
    ['The church may bless same-sex marriages', ['affirm']],
    ['Openly gay and lesbian people may be ordained', ['affirm']]
  ] });
  Object.assign(FW_TRADS, {
    ecp: { T: 'COLRMBPN', S: 'A' }, ann: { T: '', S: 'AB' }, univ: { T: '', S: 'AO' },
    twok: { T: 'L', S: 'R' }, cst: { T: 'C', S: '' }, sep: { T: 'N', S: 'B' }, theon: { T: '', S: 'R' },
    ent: { T: 'M', S: 'P' }, progs: { T: 'RB', S: 'LAP' }, theosis: { T: 'O', S: 'C' },
    class: { T: 'COLARBPN', S: 'M' }, mol2: { T: '', S: 'CB' }, openth: { T: '', S: 'BM' },
    oldp: { T: 'LR', S: 'ABMP' }, newp: { T: '', S: 'AM' },
    libt: { T: '', S: 'CM' }, cst2: { T: 'C', S: '' },
    sxtrad: { T: 'COBPN', S: 'LARM' }, affirm: { T: '', S: 'LARM' }
  });
})();
// ----- Practice: living the faith day to day, across traditions -----
// Each practice: the shared biblical basis, then how each tradition typically lives it, with one concrete step.
// ways[trad] = [how it is lived, a step to try this week, optional [source label, url]]
var PR_SRC = {
  ccc: ['Catechism of the Catholic Church: the precepts of the Church', 'https://www.vatican.va/archive/ENG0015/__P75.HTM'],
  oca: ['Orthodox Church in America: fasting seasons', 'https://www.oca.org/liturgics/outlines/fasting-fast-free-seasons-of-the-church'],
  luth: ['Luther’s Small Catechism: daily prayers', 'https://bookofconcord.org/small-catechism/appendix-i/'],
  bcp: ['Book of Common Prayer: the Daily Office online', 'https://www.commonprayeronline.org/'],
  heid: ['Heidelberg Catechism, Lord’s Day 38', 'https://www.heidelberg-catechism.com/lang/lords-days/38.html'],
  rules: ['The General Rules of the Methodist Church', 'https://www.umc.org/en/content/the-general-rules-of-the-methodist-church'],
  bfm: ['Baptist Faith and Message 2000', 'https://bfm.sbc.net/bfm2000/'],
  ag: ['Assemblies of God Statement of Fundamental Truths', 'https://en.wikipedia.org/wiki/Assemblies_of_God_Statement_of_Fundamental_Truths'],
  menno: ['Confession of Faith in a Mennonite Perspective', 'https://www.mennoniteusa.org/confession-of-faith/'],
  didache: ['Didache (Britannica)', 'https://www.britannica.com/topic/Didache']
};
var PRACTICES = [
  { id: 'pray', name: 'Daily prayer',
    why: 'Jesus taught his followers a pattern of prayer and often withdrew to pray alone. The psalmists and Daniel prayed at set times of day, the first Christians kept the Jewish hours of prayer, and Paul urges believers to pray without ceasing.',
    refs: [['mat', 6, 9, 'Matthew 6:9–13'], ['mrk', 1, 35, 'Mark 1:35'], ['psa', 55, 17, 'Psalm 55:17'], ['dan', 6, 10, 'Daniel 6:10'], ['act', 3, 1, 'Acts 3:1'], ['1th', 5, 17, '1 Thessalonians 5:17']],
    shared: 'Every tradition prays the Lord’s Prayer, prays the Psalms in some form, and encourages both set times of prayer and spontaneous prayer through the day.',
    ways: {
      C: ['The Liturgy of the Hours (Morning and Evening Prayer) is the Church’s daily prayer, and laypeople are encouraged to join it. Many also pray the Rosary, the Angelus at morning, noon and evening, and an evening examination of the day.', 'Pray the Angelus at noon each day, or review the day each night: where God was present, where you fell short, what tomorrow needs.'],
      O: ['Most Orthodox keep a morning and evening “prayer rule” from a prayer book, standing before an icon corner at home. Many also pray the Jesus Prayer, “Lord Jesus Christ, Son of God, have mercy on me, a sinner,” often with a prayer rope.', 'Set up a small icon corner and say the morning and evening prayers there; pray the Jesus Prayer slowly 33 times.'],
      L: ['Luther’s Small Catechism gives a simple pattern: on rising and at bedtime, make the sign of the cross, say the Creed and the Lord’s Prayer, then a short morning or evening prayer, plus prayers at meals.', 'Use Luther’s Morning and Evening Prayers for one week, morning and night.', PR_SRC.luth],
      A: ['The Daily Office, Morning and Evening Prayer from the Book of Common Prayer, with psalms and Bible readings, is the backbone of Anglican prayer; Noonday Prayer and Compline round out the day.', 'Pray Compline, the short service before sleep, every night this week.', PR_SRC.bcp],
      R: ['Reformed piety stresses prayer in one’s own words shaped by Scripture and the Lord’s Prayer, and daily family worship: a Bible reading, prayer and often a sung psalm.', 'After dinner, read a psalm aloud with your household and pray for each person by name.'],
      M: ['Wesley counted prayer, private, family and public, first among the “means of grace.” Methodists also renew the Covenant Prayer each year (“I am no longer my own, but thine”).', 'Pray Wesley’s Covenant Prayer each morning this week.'],
      B: ['Many Baptists keep a daily “quiet time” of Bible reading and personal prayer, and gather for midweek prayer meetings. Prayer is usually spontaneous rather than from a book.', 'Use the ACTS pattern for ten minutes a day: adoration, confession, thanksgiving, supplication.'],
      P: ['Prayer is expected to be expressive and expectant: praying aloud together, praying in tongues, laying hands on the sick and praying for healing.', 'Ask one person this week how you can pray for them, and pray with them on the spot.', PR_SRC.ag],
      N: ['Anabaptist prayer tends to be simple and humble; many Amish pray silently before and after meals and use old prayer books. Praying for enemies, as Jesus commands, is stressed.', 'Pause in silent prayer before each meal, and pray daily for someone you find hard to love.']
    } },
  { id: 'word', name: 'Reading Scripture',
    why: 'Scripture describes itself as God-breathed and useful for teaching and training in righteousness. The faithful person meditates on God’s law day and night, and Israel was told to keep God’s words before their children at home and on the road.',
    refs: [['2ti', 3, 16, '2 Timothy 3:16–17'], ['psa', 1, 2, 'Psalm 1:2'], ['psa', 119, 105, 'Psalm 119:105'], ['deu', 6, 6, 'Deuteronomy 6:6–7'], ['act', 17, 11, 'Acts 17:11']],
    shared: 'All read Scripture aloud in worship and encourage personal reading. They differ in how Scripture relates to Tradition and church teaching (see Beliefs).',
    ways: {
      C: ['Catholics hear Scripture through the lectionary at Mass (a three-year Sunday cycle) and are encouraged to pray it through lectio divina: read, meditate, pray, contemplate.', 'Take this Sunday’s Gospel and do lectio divina with it for ten minutes on three days.'],
      O: ['Scripture is read chiefly in the Church’s worship and understood with the Church Fathers. The Psalter is prayed through each week in monasteries, and each day has an assigned Epistle and Gospel.', 'Read the day’s appointed Epistle and Gospel from the Orthodox calendar each morning.'],
      L: ['Lutherans read Scripture through the lens of Law (what God requires) and Gospel (what God gives in Christ), alongside the Catechism.', 'Read a chapter of a Gospel and mark where you hear Law and where you hear Gospel.'],
      A: ['The Daily Office lectionary takes readers through most of the Bible each year, and the older prayer books pray all 150 psalms every month.', 'Follow the 30-day psalm cycle: the morning and evening psalms for each day of the month.', PR_SRC.bcp],
      R: ['Reformed churches favor preaching straight through books of the Bible, personal study, and memorizing a catechism such as the Westminster Shorter Catechism.', 'Memorize Shorter Catechism Question 1 and the verses behind it (1 Corinthians 10:31; Psalm 73:25–26).'],
      M: ['Wesley called himself “a man of one book” and listed “searching the Scriptures” as a means of grace. Methodists often study Scripture in small groups.', 'Join or start a small group that reads one book of the Bible together.', PR_SRC.rules],
      B: ['Baptists stress personal Bible reading and memorization, Sunday school classes for every age, and reading plans that cover the whole Bible.', 'Start a read-through-the-Bible plan and keep it for a week.', PR_SRC.bfm],
      P: ['Pentecostals read Scripture expecting the same Spirit at work in Acts to act today, and often share testimonies of how a passage spoke to them.', 'Read through the book of Acts this week, a few chapters a day.'],
      N: ['Anabaptists read Scripture together and discern its meaning as a congregation, with the Sermon on the Mount at the center of discipleship.', 'Read Matthew 5–7 every day this week and choose one command to act on.', PR_SRC.menno]
    } },
  { id: 'worship', name: 'Sunday worship and the Lord’s Supper',
    why: 'The first Christians devoted themselves to the apostles’ teaching, fellowship, the breaking of bread and prayer, and met on the first day of the week, the day of the resurrection. Jesus told them to share the bread and cup in remembrance of him.',
    refs: [['act', 2, 42, 'Acts 2:42'], ['act', 20, 7, 'Acts 20:7'], ['1co', 11, 23, '1 Corinthians 11:23–26'], ['heb', 10, 24, 'Hebrews 10:24–25'], ['rev', 1, 10, 'Revelation 1:10']],
    shared: 'All gather on Sunday for Scripture, prayer, singing and the Lord’s Supper. They differ on what the Supper is and how often it is shared.',
    ways: {
      C: ['Sunday Mass is an obligation (the first precept of the Church), and the Eucharist is called “the source and summit of the Christian life.” Catholics are to receive Communion at least once in the Easter season, and many also spend time in Eucharistic adoration.', 'Attend one weekday Mass, or spend an hour in adoration.', PR_SRC.ccc],
      O: ['The Divine Liturgy on Sunday is the center of Orthodox life, usually prepared for by Saturday evening Vespers, prayers before Communion, a fast from the night before, and regular confession.', 'Go to Saturday evening Vespers before the Sunday Liturgy.'],
      L: ['The Divine Service joins Word and Sacrament, and many congregations celebrate Communion every Sunday. The Small Catechism teaches that Christ’s body and blood are truly given “for you, for the forgiveness of sins.”', 'Before church, read the Small Catechism’s short section on the Sacrament of the Altar.'],
      A: ['The Holy Eucharist is the main Sunday service in most parishes. Choral Evensong, sung Evening Prayer, is a cherished Anglican treasure.', 'Attend a service of Evensong, or Evening Prayer, this week.'],
      R: ['Lord’s Day worship centers on the preached Word. The Lord’s Supper is a spiritual feeding on Christ, held weekly in some churches and monthly or quarterly in many, with self-examination beforehand.', 'On Saturday evening, examine yourself with 1 Corinthians 11:28 and pray for the next day’s preaching.', PR_SRC.heid],
      M: ['Wesley urged “constant communion,” taking the Lord’s Supper as often as possible. Methodist worship is known for its hymns, many by Charles Wesley.', 'Learn one Charles Wesley hymn, such as “And Can It Be,” and sing or read it daily.'],
      B: ['The Lord’s Supper is an ordinance, a memorial, usually held monthly or quarterly. Worship centers on preaching and congregational singing.', 'Invite someone to church with you and have lunch together afterward.', PR_SRC.bfm],
      P: ['Worship is often extended and participatory, with raised hands, spontaneous prayer, and spiritual gifts exercised in the service, “for the strengthening of the church.”', 'Arrive early and pray for the service and the people around you.'],
      N: ['Many Anabaptists join the Lord’s Supper with footwashing (John 13). Amish congregations hold Communion twice a year, after a council meeting where members make peace with one another.', 'Before your next Communion, make peace with someone you are at odds with (Matthew 5:23–24).']
    } },
  { id: 'confess', name: 'Confession and repentance',
    why: 'If we confess our sins, God is faithful to forgive. James tells believers to confess their sins to one another and pray for one another. Psalm 51 models honest repentance, and Jesus gave a pattern for making things right with a brother or sister.',
    refs: [['1jn', 1, 9, '1 John 1:9'], ['jas', 5, 16, 'James 5:16'], ['psa', 51, 1, 'Psalm 51'], ['jhn', 20, 22, 'John 20:22–23'], ['mat', 18, 15, 'Matthew 18:15–17']],
    shared: 'All call for honest confession to God and reconciliation with others. They differ on confession to a priest and on absolution as a sacrament.',
    ways: {
      C: ['The sacrament of Reconciliation (confession to a priest, with absolution) is required at least once a year for serious sin and encouraged often. An examination of conscience comes first.', 'Do a nightly examination of conscience this week, then go to confession.', PR_SRC.ccc],
      O: ['Confession is a holy mystery: the penitent confesses before an icon of Christ, with the priest as witness and guide. It is made regularly, especially in the fasting seasons, often with a spiritual father.', 'Write down what weighs on you and arrange to see a priest.'],
      L: ['Lutherans confess together in every service and keep private confession and absolution, which the Small Catechism describes and Luther valued highly.', 'Ask your pastor about private confession, using the Small Catechism’s short form.'],
      A: ['A general confession is part of every Office and Eucharist. Private confession, the Reconciliation of a Penitent, is available; the Anglican saying is “all may, none must, some should.”', 'Pray the prayer book’s general confession slowly, every evening.'],
      R: ['Confession is made directly to God, publicly in the service’s prayer of confession and privately. Elders care for members through church discipline aimed at restoration.', 'Pray through Psalm 51 in your own words, one section a day.'],
      M: ['Early Methodist “bands” met weekly to confess sins to one another and pray. Wesley’s question, “How is it with your soul?”, still shapes accountability groups.', 'Find one trusted friend and meet weekly to ask each other, “How is it with your soul?”'],
      B: ['Confession is made to God through Christ alone, with no priestly absolution. Many Baptists have accountability partners and seek to make things right with those they have wronged.', 'Make one apology this week that you have been putting off.'],
      P: ['Repentance is often public and heartfelt, at an altar call or in prayer ministry where others pray over the person.', 'Respond to an altar call or ask someone to pray with you about a specific struggle.'],
      N: ['Anabaptists practice congregational discipline and restoration following Matthew 18, and reconciliation among members comes before the Lord’s Supper.', 'Go directly and privately to someone who has wronged you, aiming at peace.', PR_SRC.menno]
    } },
  { id: 'fast', name: 'Fasting',
    why: 'Jesus assumed his followers would fast (“when you fast,” not “if”), and said they would fast once he was taken away. The church in Antioch fasted and prayed before sending out missionaries. Isaiah insists that the fast God chooses includes justice and care for the hungry.',
    refs: [['mat', 6, 16, 'Matthew 6:16–18'], ['mat', 9, 15, 'Matthew 9:15'], ['act', 13, 2, 'Acts 13:2–3'], ['isa', 58, 6, 'Isaiah 58:6–7']],
    shared: 'All see fasting as a way to humble oneself before God and make room for prayer. Catholic and Orthodox Christians keep fasts set by the Church; most Protestants fast voluntarily.',
    ways: {
      C: ['Catholics fast (one full meal, two smaller ones) on Ash Wednesday and Good Friday from ages 18 to 59, abstain from meat on Fridays in Lent from age 14, and keep Fridays through the year as days of penance. There is also a one-hour fast before Communion.', 'Keep this Friday meatless and give what you save to the poor.', PR_SRC.ccc],
      O: ['The Orthodox fast on most Wednesdays and Fridays (remembering Christ’s betrayal and crucifixion) and in four seasons: Great Lent, the Nativity fast, the Apostles’ fast and the Dormition fast. Fasting means going without meat, dairy and, at stricter times, fish, wine and oil. A priest helps adapt the rule, and the Didache shows Wednesday and Friday fasts were kept by early Christians.', 'Keep Wednesday and Friday as plant-based days this week, with extra prayer.', PR_SRC.oca],
      L: ['Luther called fasting “fine outward training” but not what makes a person worthy of the Sacrament. Lutherans fast voluntarily, especially in Lent.', 'Skip one meal this week and spend that time in prayer.'],
      A: ['The Book of Common Prayer names Ash Wednesday and Good Friday as fasts, and treats Fridays and Lent as times of self-denial.', 'Give up one comfort for this week and pray when you miss it.'],
      R: ['Fasting is voluntary. Reformed churches have historically called days of fasting and prayer in times of crisis or before major decisions.', 'Fast before a decision you are facing, and pray about it at each missed meal.'],
      M: ['Wesley fasted regularly on Wednesdays and Fridays and urged Methodists to fast as one of the ordinances of God.', 'Fast until mid-afternoon on Friday, as Wesley did.', PR_SRC.rules],
      B: ['Fasting is voluntary, usually tied to a specific need for prayer or guidance.', 'Choose one day to fast for one specific person or need.'],
      P: ['Many Pentecostal and charismatic churches begin the year with a congregational fast, often 21 days, sometimes as a “Daniel fast” of vegetables and water.', 'Try a three-day Daniel fast (vegetables, fruit, water) with a friend.'],
      N: ['Fasting is practiced simply. Some Amish communities keep Good Friday as a day of fasting and reflection.', 'Fast quietly one day and give the cost of your meals away.']
    } },
  { id: 'rest', name: 'The Lord’s Day and rest',
    why: 'God rested on the seventh day and blessed it, and the Sabbath command was given for rest and worship. Jesus said the Sabbath was made for people. The church gathered on the first day of the week, the Lord’s Day, and Hebrews speaks of a Sabbath rest that remains for God’s people.',
    refs: [['gen', 2, 2, 'Genesis 2:2–3'], ['exo', 20, 8, 'Exodus 20:8–11'], ['mrk', 2, 27, 'Mark 2:27'], ['heb', 4, 9, 'Hebrews 4:9–10'], ['act', 20, 7, 'Acts 20:7']],
    shared: 'Nearly all Christians keep Sunday as the day of worship, honoring the resurrection. They differ on how strictly to rest from work.',
    ways: {
      C: ['Catholics are to attend Mass on Sunday and holy days and to avoid work or business that hinders worship, joy and rest.', 'Plan one restful Sunday activity with family or friends after Mass, with no shopping or errands.', PR_SRC.ccc],
      O: ['Every Sunday is a “little Pascha,” a weekly Easter. By an ancient canon of the Council of Nicaea, the faithful do not kneel in church on Sundays.', 'Begin Sunday on Saturday evening with Vespers, and keep Sunday as a feast.'],
      L: ['Luther explained the Sabbath command as not despising preaching and God’s Word, but holding it sacred and gladly hearing and learning it. The day itself is a matter of Christian freedom.', 'On Sunday afternoon, talk over the sermon with someone.'],
      A: ['Sunday is kept as the feast of the resurrection with the Eucharist. Many Anglicans add Evensong or a quiet afternoon.', 'Set aside two screen-free hours on Sunday for rest and prayer.'],
      R: ['The Westminster standards call for a holy rest all day, given to worship, with exceptions for works of necessity and mercy. The Heidelberg Catechism adds resting from evil works every day, beginning the eternal Sabbath now.', 'Prepare on Saturday so Sunday is free for worship, rest and a visit to someone in need.', PR_SRC.heid],
      M: ['Methodists keep Sunday for worship and fellowship. Early Methodists were known for strict Sunday observance.', 'Use Sunday for worship plus one act of mercy, such as visiting someone homebound.'],
      B: ['The Baptist Faith and Message calls the Lord’s Day a Christian institution for regular observance, with worship and rest, and leaves activities to the believer’s conscience under Christ.', 'Choose one regular Sunday habit that refreshes you and others.', PR_SRC.bfm],
      P: ['Sunday centers on extended worship. Many also attend evening or midweek services.', 'Rest from work-related email for the whole day.'],
      N: ['Old Order Amish hold worship every other Sunday in members’ homes; “off Sundays” are for rest and visiting family and neighbors.', 'Use Sunday afternoon to visit a neighbor or relative.']
    } },
  { id: 'give', name: 'Giving and generosity',
    why: 'Paul says God loves a cheerful giver. The early church shared possessions so that no one was in need. Jesus praised the widow’s small but costly gift and warned against storing up treasure on earth.',
    refs: [['2co', 9, 6, '2 Corinthians 9:6–7'], ['act', 4, 32, 'Acts 4:32–35'], ['luk', 21, 1, 'Luke 21:1–4'], ['mat', 6, 19, 'Matthew 6:19–21'], ['mal', 3, 10, 'Malachi 3:10']],
    shared: 'All teach that possessions are held in trust from God and that giving to the church and the poor is part of discipleship. They differ on whether the tithe (10%) is a rule or a guide.',
    ways: {
      C: ['One precept of the Church is to help provide for the Church’s needs according to one’s ability. Almsgiving, with prayer and fasting, is one of the three Lenten disciplines.', 'Set a fixed percentage for giving and give one gift to the poor directly this week.', PR_SRC.ccc],
      O: ['Almsgiving goes with fasting and prayer, especially in Lent. Many parishes teach proportional giving (“stewardship”) rather than a strict tithe.', 'Give what you save by fasting this week to someone in need.'],
      L: ['Giving is a fruit of the Gospel, not a condition of salvation. Lutherans encourage regular proportional giving to the congregation and to relief work.', 'Look at last month’s spending and set a giving percentage you will grow into.'],
      A: ['Anglicans generally treat the tithe as a standard to aim for, given freely in thanks rather than by rule.', 'Give anonymously to one need you hear about this week.'],
      R: ['Giving is part of thankful obedience. Deacons distribute aid to the poor in the congregation and beyond.', 'Ask your church’s deacons how you can help meet a current need.'],
      M: ['Wesley’s rule for money: “Gain all you can, save all you can, give all you can.” Methodists are known for organized relief through their churches.', 'Find one expense to cut and give the difference away.'],
      B: ['The tithe is widely taught as the starting point. The Baptist Faith and Message urges giving cheerfully, regularly, systematically, proportionately and liberally.', 'Set up regular, automatic giving to your church.', PR_SRC.bfm],
      P: ['Tithes and offerings are central to worship, often given expectantly. Some churches teach a “prosperity” view of giving, which many other Pentecostals reject.', 'Give a first portion as soon as you are paid, before other spending.'],
      N: ['Anabaptists practice mutual aid: congregations cover members’ medical bills, rebuild after disasters, and support relief agencies such as Mennonite Central Committee.', 'Help one family in your church or street with a practical need.']
    } },
  { id: 'mercy', name: 'Serving the poor and seeking justice',
    why: 'Jesus said that what is done for the hungry, the stranger, the sick and the prisoner is done for him. Micah sums up God’s requirement as doing justice, loving mercy and walking humbly with God. James calls caring for orphans and widows pure religion.',
    refs: [['mat', 25, 31, 'Matthew 25:31–46'], ['mic', 6, 8, 'Micah 6:8'], ['jas', 1, 27, 'James 1:27'], ['luk', 10, 25, 'Luke 10:25–37'], ['isa', 58, 6, 'Isaiah 58:6–7']],
    shared: 'All teach works of mercy as essential to following Jesus. They differ on how much the church should address political and social structures.',
    ways: {
      C: ['The Catechism lists corporal works of mercy (feeding the hungry, sheltering the homeless, visiting the sick and imprisoned) and spiritual ones (counseling, comforting, forgiving). Catholic social teaching applies the faith to work, wages and the common good.', 'Choose one corporal work of mercy and do it this week.'],
      O: ['Orthodox writers call care for the poor “the liturgy after the Liturgy.” St John Chrysostom taught that the Christ honored at the altar must be honored in the poor.', 'Visit someone sick or alone, or bring food to someone in need.'],
      L: ['Serving the neighbor is how faith is lived out in one’s callings. Lutheran congregations support relief, refugee and social-service agencies.', 'Volunteer with a local food pantry or refugee ministry.'],
      A: ['In the Episcopal Church’s baptismal covenant, Christians promise to seek and serve Christ in all persons and to strive for justice and peace among all people.', 'Pick one promise of the baptismal covenant and act on it this week.'],
      R: ['Deacons lead the church’s ministry of mercy. Many Reformed thinkers also stress Christ’s lordship over every area of public life.', 'Serve with your church’s diaconal ministry for one shift.'],
      M: ['Wesley’s second General Rule is “do good”: feed the hungry, clothe the naked, visit the sick and those in prison. Early Methodists ran schools, clinics and loan funds.', 'Visit someone in a hospital, nursing home or prison.', PR_SRC.rules],
      B: ['Baptists pair local benevolence with missions. Southern Baptist Disaster Relief is one of the largest volunteer disaster-response groups in the United States.', 'Train for or give to a disaster-relief team.'],
      P: ['Pentecostal churches often run compassion ministries (food, recovery, prison outreach) alongside prayer for healing and deliverance.', 'Serve a meal at a shelter, and offer to pray with someone there.'],
      N: ['Peacemaking, nonresistance and simple living are central. Anabaptists are known for relief, development and restorative justice work.', 'Find a conflict near you and ask how you could help make peace.', PR_SRC.menno]
    } },
  { id: 'together', name: 'Fellowship and hospitality',
    why: 'The first believers shared meals in their homes with glad hearts. Scripture urges hospitality to strangers, since some have entertained angels unawares, and tells believers to carry one another’s burdens.',
    refs: [['act', 2, 44, 'Acts 2:44–47'], ['rom', 12, 13, 'Romans 12:13'], ['heb', 13, 2, 'Hebrews 13:2'], ['1pe', 4, 9, '1 Peter 4:9'], ['gal', 6, 2, 'Galatians 6:2']],
    shared: 'All value the local congregation as a family, with shared meals, care for one another and welcome for newcomers.',
    ways: {
      C: ['Parish life, godparents, lay movements and small faith-sharing groups carry Catholic community beyond Sunday.', 'Invite a newer parishioner for a meal.'],
      O: ['Parish feast days, name days (the day of one’s patron saint), blessing homes with holy water around Theophany, and the coffee hour after Liturgy knit the community together.', 'Find out a friend’s name day or patron saint and celebrate it with them.'],
      L: ['Fellowship grows from the shared Supper and Word. Lutheran congregations often have strong traditions of shared meals and choirs.', 'Bring a meal to someone who is sick or has a new baby.'],
      A: ['The parish is a geographic community serving everyone who lives nearby, not only members.', 'Introduce yourself to a neighbor and ask how you can pray for them.'],
      R: ['Reformed churches stress covenant community: members commit to one another, and elders give pastoral care.', 'Invite someone from church who sits alone to lunch after the service.'],
      M: ['Wesley organized Methodists into class meetings to “watch over one another in love.”', 'Join or start a weekly small group with real check-ins.', PR_SRC.rules],
      B: ['Small groups, Sunday school classes and church meals (potlucks) are the hubs of Baptist fellowship. Members govern the congregation together.', 'Host a simple meal and invite someone who is new.'],
      P: ['House groups and prayer meetings, where members pray for one another and share testimonies, are central.', 'Share one recent answer to prayer with a friend.'],
      N: ['Community is part of faith itself: barn raisings, mutual aid, and worship and meals in members’ homes.', 'Do one practical job for a neighbor without being asked.']
    } },
  { id: 'home', name: 'Faith at home',
    why: 'Israel was told to talk about God’s words at home, on the road, at bedtime and on rising. Parents are told to raise children in the Lord’s discipline and instruction, and Joshua declared, “As for me and my house, we will serve the Lord.”',
    refs: [['deu', 6, 6, 'Deuteronomy 6:6–9'], ['eph', 6, 4, 'Ephesians 6:4'], ['jos', 24, 15, 'Joshua 24:15'], ['2ti', 1, 5, '2 Timothy 1:5']],
    shared: 'All see the home as a place of prayer and teaching, from grace at meals and bedtime prayers to passing the faith to the next generation.',
    ways: {
      C: ['The Catechism calls the family the “domestic church.” Families say grace, pray the Rosary together and parents bless their children.', 'Make the sign of the cross on your children’s foreheads (or bless a loved one) at bedtime.'],
      O: ['The home has an icon corner with a lamp, the priest blesses the house each year around Theophany, and family members celebrate their name days.', 'Light a candle or lamp at the icon corner for family prayers.'],
      L: ['Luther wrote the Small Catechism for the head of each household to teach the family, and included table prayers and morning and evening prayers.', 'Learn one part of the Small Catechism with your household this week.', PR_SRC.luth],
      A: ['Many families pray short forms of the Daily Office at home and keep the church year with Advent wreaths and Lenten disciplines.', 'Use a short “Daily Devotions for Individuals and Families” form from the prayer book.', PR_SRC.bcp],
      R: ['Family worship (Bible reading, prayer, singing) and teaching children a catechism are long Reformed habits.', 'Teach a child or friend one catechism question and its answer.'],
      M: ['Methodists encourage family prayer and hymn-singing at home.', 'Sing one hymn together at home this week.'],
      B: ['Family devotions, memorizing verses and Vacation Bible School shape Baptist homes.', 'Memorize one verse together as a household.'],
      P: ['Families pray together expectantly for one another’s needs, including healing.', 'Pray for each family member’s day at breakfast.'],
      N: ['Faith shapes the whole household: simple living, modest dress in Old Order groups, and limits on technology agreed by the community.', 'Agree as a household on one way to simplify, such as a screen-free evening.']
    } },
  { id: 'work', name: 'Work and calling',
    why: 'Humanity was placed in the garden to work it and keep it. Paul tells believers to work heartily, as for the Lord, to lead quiet lives and work with their hands, and to work honestly so they have something to share with those in need.',
    refs: [['gen', 2, 15, 'Genesis 2:15'], ['col', 3, 23, 'Colossians 3:23–24'], ['1th', 4, 11, '1 Thessalonians 4:11–12'], ['eph', 4, 28, 'Ephesians 4:28'], ['1co', 7, 17, '1 Corinthians 7:17']],
    shared: 'All teach that ordinary work done honestly and in love can serve God and neighbor.',
    ways: {
      C: ['Catholic teaching affirms the dignity of work and of workers (for example John Paul II’s Laborem exercens, 1981). Many begin the day with a Morning Offering, giving all the day’s work to God.', 'Pray a Morning Offering before you start work each day.'],
      O: ['The Orthodox see daily life, work included, as part of theosis, being drawn into God’s life, with brief prayers woven through the day.', 'Say the Jesus Prayer silently during routine tasks.'],
      L: ['Luther’s teaching on vocation holds that every honest station (parent, farmer, maid, magistrate) is a calling through which God serves the neighbor.', 'List your callings (work, family, community) and ask whom God serves through each.'],
      A: ['Anglicans, following the prayer book, pray for daily work and for all in their various vocations.', 'Pray each morning for the people your work will affect that day.'],
      R: ['Calvin and later Reformed thinkers taught that every lawful calling is holy service to God. Abraham Kuyper said there is no square inch of life over which Christ does not say “Mine!”', 'Name one way your work could better serve the common good, and take one step toward it.'],
      M: ['Wesley urged hard, honest work (“gain all you can”) without harming others, linked to generous giving.', 'Check one work practice against “do no harm” and fix it if needed.'],
      B: ['Baptists stress integrity at work and the workplace as a place to show and share faith.', 'Do one task this week with extra care, as for the Lord.'],
      P: ['Pentecostals pray for God’s guidance and power at work and expect the Spirit to equip believers for every task.', 'Pray over your workplace or workspace at the start of the week.'],
      N: ['Anabaptists value simple, honest labor and often refuse to swear oaths, letting their “yes” be yes (Matthew 5:34–37).', 'Keep every promise you make this week, however small.']
    } },
  { id: 'witness', name: 'Sharing the faith',
    why: 'Jesus sent his disciples to make disciples of all nations. Peter tells believers to always be ready to give a reason for their hope, with gentleness and respect, and Paul asks that their speech be gracious.',
    refs: [['mat', 28, 19, 'Matthew 28:19–20'], ['1pe', 3, 15, '1 Peter 3:15'], ['act', 1, 8, 'Acts 1:8'], ['col', 4, 5, 'Colossians 4:5–6']],
    shared: 'All believe the good news is meant to be shared in word and deed. They differ in style and emphasis.',
    ways: {
      C: ['Recent popes have called for a “new evangelization,” and Pope Francis’s The Joy of the Gospel (2013) urges every Catholic to be a missionary disciple, starting with the witness of one’s life.', 'Tell one person how your faith has helped you this year.'],
      O: ['Orthodox witness is often quiet and personal. St Seraphim of Sarov said, “Acquire the spirit of peace, and thousands around you will be saved.” Inviting people to “come and see” the Liturgy is common.', 'Invite a friend to “come and see” a service with you.'],
      L: ['Lutherans stress that God creates faith through the Word and sacraments, and that believers witness through their daily callings.', 'Offer to read Scripture or pray with someone who is struggling.'],
      A: ['Witness is often through the parish’s presence in its community and through welcoming newcomers to worship.', 'Invite a friend to a service such as Christmas, Easter or Evensong.'],
      R: ['Reformed Christians emphasize clearly explaining the gospel, confident that God draws people to himself.', 'Prepare a two-minute explanation of the gospel in your own words.'],
      M: ['Wesley preached in the open air and set up societies to care for new converts. Methodist evangelism joins personal witness with social action.', 'Pair a practical kindness with an honest word about why you do it.'],
      B: ['Personal evangelism and missions are central: sharing one’s testimony, supporting missionaries and church planting.', 'Write out your testimony (before Christ, meeting Christ, since) in under a page.', PR_SRC.bfm],
      P: ['Pentecostals expect evangelism to come with the Spirit’s power, through testimony, prayer for healing and bold invitation.', 'Ask God for one opening this week to pray with someone who does not yet believe.', PR_SRC.ag],
      N: ['Anabaptists see a peaceable, simple and generous way of life as the church’s witness, alongside words.', 'Do one visible act of peacemaking or generosity in your community.']
    } }
];


// ----- Where to turn: passages for particular situations, like the topical index in many printed Bibles -----
// Each passage: [book, chapter, first verse, last verse, why it speaks to this]. Catholic and Orthodox books are marked in the app.
var TOPICS = [
  { id: 'grief', name: 'Grief and loss', icon: 'M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z', practice: 'pray',
    intro: 'Scripture does not hurry grief. It gives words for lament and the hope that death is not the end.',
    p: [['psa', 34, 18, 18, 'The Lord is close to the brokenhearted, not distant from them.'],
        ['mat', 5, 4, 4, 'Jesus calls those who mourn blessed, because they will be comforted.'],
        ['jhn', 11, 33, 36, 'Jesus weeps at his friend’s tomb, even knowing he will raise him.'],
        ['1th', 4, 13, 14, 'Christians grieve, but not as people without hope.'],
        ['psa', 23, 1, 6, 'God walks with us through the darkest valley.'],
        ['lam', 3, 19, 24, 'In the middle of devastation, the writer remembers mercies new every morning.'],
        ['2co', 1, 3, 4, 'The God of all comfort comforts us so we can comfort others.'],
        ['rev', 21, 3, 4, 'God will wipe away every tear; death will be no more.'],
        ['wis', 3, 1, 3, 'The souls of the righteous are in the hand of God.']] },
  { id: 'anxiety', name: 'Anxiety and fear', icon: 'M12 3v4M12 17v4M3 12h4M17 12h4', practice: 'pray',
    intro: 'These passages invite you to hand your worries to God and to rest in his care, one day at a time.',
    p: [['php', 4, 6, 7, 'Bring everything to God in prayer, and his peace will guard your heart.'],
        ['mat', 6, 25, 34, 'Jesus points to birds and flowers: your Father knows what you need.'],
        ['1pe', 5, 6, 7, 'Cast all your anxiety on him, because he cares for you.'],
        ['isa', 41, 10, 10, 'Do not fear, for I am with you; I will strengthen and uphold you.'],
        ['psa', 46, 1, 3, 'God is our refuge, even if the earth gives way.'],
        ['jhn', 14, 27, 27, 'Jesus gives a peace the world cannot give.'],
        ['psa', 56, 3, 4, 'When I am afraid, I put my trust in you.'],
        ['2ti', 1, 7, 7, 'God gave us a spirit of power, love and self-control, not fear.']] },
  { id: 'temptation', name: 'Temptation and lust', icon: 'M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z', practice: 'confess',
    intro: 'Honest about desire and realistic about struggle, these passages offer both a way out and mercy when we fall.',
    p: [['1co', 10, 13, 13, 'No temptation is unique to you, and God provides a way of escape.'],
        ['heb', 4, 15, 16, 'Jesus was tempted in every way, yet without sin, so we can approach him for help.'],
        ['mat', 5, 27, 30, 'Jesus takes lust seriously, calling for decisive action at the root.'],
        ['job', 31, 1, 1, 'Job made a covenant with his eyes: a practical guard for the heart.'],
        ['2ti', 2, 22, 22, 'Flee youthful passions and pursue righteousness with others who call on the Lord.'],
        ['gal', 5, 16, 17, 'Walk by the Spirit, and you will not carry out the desires of the flesh.'],
        ['psa', 119, 9, 11, 'Keeping your way pure by storing up God’s word in your heart.'],
        ['1th', 4, 3, 5, 'Learning to control one’s own body in holiness and honor.'],
        ['1jn', 1, 9, 9, 'If we confess our sins, he is faithful to forgive and cleanse us.']] },
  { id: 'anger', name: 'Anger', icon: 'M13 2L3 14h8l-1 8 10-12h-8z', practice: 'confess',
    intro: 'Anger itself is not always sin, but Scripture urges us to handle it quickly and humbly.',
    p: [['jas', 1, 19, 20, 'Be quick to listen, slow to speak and slow to anger.'],
        ['eph', 4, 26, 27, 'Be angry and do not sin; do not let the sun go down on your anger.'],
        ['eph', 4, 31, 32, 'Put away bitterness and wrath, and be kind and forgiving.'],
        ['pro', 15, 1, 1, 'A gentle answer turns away wrath.'],
        ['pro', 29, 11, 11, 'A fool gives full vent to anger; the wise quietly hold it back.'],
        ['psa', 4, 4, 4, 'When you are disturbed, do not sin; search your heart on your bed and be silent.'],
        ['mat', 5, 21, 24, 'Jesus links anger with murder and says to be reconciled before worship.']] },
  { id: 'lonely', name: 'Loneliness', icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', practice: 'together',
    intro: 'God promises his presence, and he places people in communities so no one has to stand alone.',
    p: [['psa', 25, 16, 16, 'A prayer from someone lonely and afflicted: turn to me and be gracious.'],
        ['deu', 31, 6, 6, 'He will never leave you nor forsake you.'],
        ['mat', 28, 20, 20, 'Jesus promises to be with his followers always.'],
        ['psa', 68, 5, 6, 'God sets the lonely in families.'],
        ['psa', 139, 7, 10, 'There is nowhere you can go that God is not.'],
        ['ecc', 4, 9, 12, 'Two are better than one; a cord of three strands is not quickly broken.'],
        ['jhn', 15, 13, 15, 'Jesus calls his disciples friends, not servants.'],
        ['sir', 6, 14, 16, 'A faithful friend is a sturdy shelter and a treasure.']] },
  { id: 'shame', name: 'Guilt and shame', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9 10h.01M15 10h.01M9 16c1.5-1 4.5-1 6 0', practice: 'confess',
    intro: 'These passages speak of real forgiveness: sin taken seriously, and taken away.',
    p: [['psa', 51, 1, 12, 'David’s prayer of repentance: create in me a clean heart.'],
        ['1jn', 1, 9, 9, 'Confession meets faithful forgiveness.'],
        ['rom', 8, 1, 1, 'There is no condemnation for those who are in Christ Jesus.'],
        ['psa', 103, 8, 12, 'As far as the east is from the west, so far he removes our transgressions.'],
        ['isa', 1, 18, 18, 'Though your sins are like scarlet, they shall be white as snow.'],
        ['luk', 15, 20, 24, 'The father runs to welcome the son who wasted everything.'],
        ['2co', 5, 17, 17, 'Anyone in Christ is a new creation; the old has passed away.']] },
  { id: 'doubt', name: 'Doubt', icon: 'M9 9a3 3 0 1 1 4 2.8c-.6.3-1 .9-1 1.6V15M12 19h.01', practice: 'word',
    intro: 'Scripture is full of honest questions. Doubt is met with patience, not rejection.',
    p: [['mrk', 9, 23, 24, '“I believe; help my unbelief!” and Jesus answers that prayer.'],
        ['jhn', 20, 24, 29, 'Jesus meets Thomas in his doubt and invites him to look and touch.'],
        ['mat', 14, 28, 31, 'Peter sinks when he doubts, and Jesus immediately reaches out his hand.'],
        ['psa', 13, 1, 6, '“How long, O Lord?” A complaint that ends in trust.'],
        ['psa', 73, 16, 26, 'Troubled by unfairness until entering God’s presence: “God is my portion.”'],
        ['jud', 1, 22, 22, 'Have mercy on those who doubt.'],
        ['jas', 1, 5, 6, 'Ask God for wisdom; he gives generously.']] },
  { id: 'ill', name: 'Illness and suffering', icon: 'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z', practice: 'mercy',
    intro: 'These passages hold together honest pain, prayer for healing, and hope beyond present suffering.',
    p: [['jas', 5, 14, 16, 'Call the elders to pray and anoint the sick; pray for one another.'],
        ['2co', 12, 7, 10, 'Paul’s “thorn” was not removed, but God’s grace was sufficient.'],
        ['psa', 6, 2, 3, 'Be gracious to me, Lord, for I am languishing; heal me.'],
        ['isa', 53, 4, 5, 'He took up our pains and bore our suffering.'],
        ['rom', 8, 18, 18, 'Present sufferings are not worth comparing with the glory to come.'],
        ['2co', 4, 16, 18, 'Though our outer self is wasting away, our inner self is renewed day by day.'],
        ['mat', 11, 28, 30, 'Come to me, all who are weary and burdened, and I will give you rest.'],
        ['sir', 38, 9, 9, 'When you are ill, do not delay: pray to the Lord, and he will heal you.']] },
  { id: 'work', name: 'Work and motivation', icon: 'M4 7h16v12H4zM9 7V5h6v2', practice: 'work',
    intro: 'Work is part of God’s good design. These passages give purpose to the ordinary and strength for the weary.',
    p: [['col', 3, 23, 24, 'Whatever you do, work at it with all your heart, as for the Lord.'],
        ['gen', 2, 15, 15, 'From the beginning, people were placed in the garden to work it and keep it.'],
        ['pro', 16, 3, 3, 'Commit your work to the Lord, and your plans will succeed.'],
        ['gal', 6, 9, 9, 'Do not grow weary in doing good; in due season you will reap.'],
        ['ecc', 9, 10, 10, 'Whatever your hand finds to do, do it with your might.'],
        ['pro', 6, 6, 8, 'Go to the ant: diligence without anyone standing over you.'],
        ['1co', 15, 58, 58, 'Your labor in the Lord is not in vain.'],
        ['pro', 14, 23, 23, 'All hard work brings a profit; mere talk leads only to poverty.']] },
  { id: 'money', name: 'Money worries', icon: 'M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 2.6 5 3 5 1.1 5 3-2.2 3-5 3-5-1.1-5-3', practice: 'give',
    intro: 'Scripture speaks often about money: trust instead of anxiety, contentment, and generosity.',
    p: [['mat', 6, 19, 24, 'Where your treasure is, there your heart will be also.'],
        ['php', 4, 11, 13, 'Paul learned contentment in plenty and in need.'],
        ['php', 4, 19, 19, 'My God will supply every need of yours.'],
        ['heb', 13, 5, 5, 'Keep free from the love of money; God will never leave you.'],
        ['1ti', 6, 6, 10, 'Godliness with contentment is great gain.'],
        ['pro', 22, 7, 7, 'The borrower is servant to the lender.'],
        ['luk', 12, 15, 21, 'Life does not consist in the abundance of possessions.']] },
  { id: 'marriage', name: 'Marriage', icon: 'M8 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', practice: 'home',
    intro: 'Marriage in Scripture is a covenant of faithful, self-giving love.',
    p: [['gen', 2, 24, 24, 'The two become one flesh.'],
        ['1co', 13, 4, 7, 'Love is patient and kind; it bears, believes, hopes and endures all things.'],
        ['eph', 5, 21, 33, 'Submit to one another; husbands love as Christ loved the church.'],
        ['col', 3, 12, 14, 'Bear with one another, forgive, and above all put on love.'],
        ['1pe', 3, 7, 7, 'Husbands are to live with their wives with understanding and honor.'],
        ['sng', 8, 6, 7, 'Love is strong as death; many waters cannot quench it.'],
        ['mrk', 10, 6, 9, 'What God has joined together, let no one separate.']] },
  { id: 'parent', name: 'Parenting', icon: 'M9 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3 21v-2a6 6 0 0 1 12 0v2M14 21v-1a3 3 0 0 1 6 0v1', practice: 'home',
    intro: 'Passages on passing faith to the next generation, with patience and love.',
    p: [['deu', 6, 6, 7, 'Talk about God’s words at home, on the road, at bedtime and on rising.'],
        ['pro', 22, 6, 6, 'Train up a child in the way he should go.'],
        ['eph', 6, 4, 4, 'Do not provoke your children to anger; bring them up in the Lord’s instruction.'],
        ['col', 3, 21, 21, 'Do not embitter your children, or they will become discouraged.'],
        ['psa', 127, 3, 3, 'Children are a heritage from the Lord.'],
        ['mrk', 10, 13, 16, 'Jesus welcomes and blesses the children.'],
        ['2ti', 1, 5, 5, 'A sincere faith passed from grandmother to mother to son.']] },
  { id: 'forgive', name: 'Forgiving someone', icon: 'M7 11l5-5 5 5M12 6v12', practice: 'confess',
    intro: 'Forgiveness is costly and often a process. These passages show why and how Christians forgive.',
    p: [['mat', 18, 21, 35, 'Peter asks how often to forgive; Jesus tells the parable of the unforgiving servant.'],
        ['mat', 6, 14, 15, 'Forgiving others is tied to receiving God’s forgiveness.'],
        ['col', 3, 13, 13, 'Forgive as the Lord forgave you.'],
        ['luk', 23, 34, 34, 'From the cross: “Father, forgive them, for they do not know what they do.”'],
        ['gen', 50, 19, 21, 'Joseph to his brothers: you meant evil, but God meant it for good.'],
        ['rom', 12, 17, 21, 'Do not repay evil for evil; overcome evil with good.'],
        ['luk', 6, 27, 28, 'Love your enemies; bless those who curse you.']] },
  { id: 'thanks', name: 'Gratitude', icon: 'M12 2v4M4.9 4.9l2.8 2.8M2 12h4M19.1 4.9l-2.8 2.8M22 12h-4M12 22a6 6 0 0 0 0-12 6 6 0 0 0 0 12z', practice: 'pray',
    intro: 'Thanksgiving runs all through Scripture, in good times and hard ones.',
    p: [['1th', 5, 16, 18, 'Rejoice always, pray continually, give thanks in all circumstances.'],
        ['psa', 100, 1, 5, 'Enter his gates with thanksgiving.'],
        ['psa', 103, 1, 5, 'Bless the Lord, O my soul, and forget not all his benefits.'],
        ['luk', 17, 15, 19, 'Of ten healed, one returns to give thanks.'],
        ['col', 3, 15, 17, 'Let the peace of Christ rule, and be thankful.'],
        ['jas', 1, 17, 17, 'Every good and perfect gift comes from above.'],
        ['psa', 136, 1, 1, 'Give thanks to the Lord, for he is good; his love endures forever.']] },
  { id: 'decide', name: 'Making a decision', icon: 'M6 3v6a6 6 0 0 0 6 6h6M15 12l3 3-3 3', practice: 'pray',
    intro: 'Scripture rarely gives a formula for choices, but it shows how to seek wisdom and trust God’s guidance.',
    p: [['pro', 3, 5, 6, 'Trust in the Lord with all your heart, and he will make your paths straight.'],
        ['jas', 1, 5, 5, 'If you lack wisdom, ask God, who gives generously.'],
        ['psa', 32, 8, 8, 'I will instruct you and teach you in the way you should go.'],
        ['pro', 15, 22, 22, 'Plans fail without counsel; with many advisers they succeed.'],
        ['pro', 16, 9, 9, 'A person plans their way, but the Lord establishes their steps.'],
        ['rom', 12, 2, 2, 'Be transformed by the renewing of your mind, so you can discern God’s will.'],
        ['act', 15, 28, 28, 'The early church decided together: “it seemed good to the Holy Spirit and to us.”']] },
  { id: 'death', name: 'Facing death', icon: 'M12 3v18M6 9h12', practice: 'pray',
    intro: 'For the dying and those who love them: the Christian hope of resurrection and life with God.',
    p: [['jhn', 11, 25, 26, '“I am the resurrection and the life.”'],
        ['jhn', 14, 1, 3, 'In my Father’s house are many rooms; I go to prepare a place for you.'],
        ['psa', 23, 4, 4, 'Even in the valley of the shadow of death, I will fear no evil.'],
        ['rom', 8, 38, 39, 'Neither death nor life can separate us from the love of God.'],
        ['1co', 15, 54, 57, 'Death is swallowed up in victory.'],
        ['php', 1, 21, 23, 'To live is Christ, and to die is gain.'],
        ['psa', 90, 12, 12, 'Teach us to number our days, that we may gain a heart of wisdom.'],
        ['rev', 21, 3, 5, '“Behold, I am making all things new.”']] }
];

function labelTierOk(t, w) {
  if (t === 'world') return w <= 300;
  if (t === 'far') return w <= 970;
  if (t === 'near') return w > 970;
  if (t === 'mid') return w > 380 && w <= 4600;
  if (t === 'big') return w > 520;
  if (t === 'riv') return w > 250;
  if (t === 'jr') return w > 1700;
  if (t === 'town') return w > 1500;
  if (t === 'local') return w > 2400;
  if (t === 'close') return w > 5200;
  return true;
}
var LABEL_STYLE = {
  sea: { font: 'Fraunces, Georgia, serif', fstyle: 'italic', ls: '0', color: '#3F6676', size: 12, fw: 400, tx: '-50%', pre: '' },
  river: { font: 'Fraunces, Georgia, serif', fstyle: 'italic', ls: '0', color: '#4A7C90', size: 11, fw: 400, tx: '-50%', pre: '' },
  land: { font: 'Inter, system-ui, sans-serif', fstyle: 'normal', ls: '0.18em', color: '#7D6A48', size: 12, fw: 400, tx: '-50%', pre: '' },
  region: { font: 'Inter, system-ui, sans-serif', fstyle: 'normal', ls: '0.14em', color: '#94815F', size: 10, fw: 600, tx: '-50%', pre: '' },
  mtn: { font: 'Inter, system-ui, sans-serif', fstyle: 'normal', ls: '0', color: '#6E5B3E', size: 11, fw: 500, tx: '-6px', pre: '▲ ' },
  city: { font: 'Inter, system-ui, sans-serif', fstyle: 'normal', ls: '0', color: '#4A3F35', size: 11, fw: 500, tx: '-4px', pre: '● ' }
};

// ----- Chapter-by-chapter people, places and events (Theographic Bible Metadata, CC BY-SA 4.0) -----
var HIST_KEYS = ['tab', 'book', 'chap', 'era', 'theme', 'tr', 'q', 'prMode', 'prId', 'prTrad', 'cmpMode', 'cmpFam', 'testa', 'libCanon', 'srMode', 'topic'];
var CH_URL = 'chapters.json';
var HN_URL = 'henry.json';

// Reading order that places the extra (deuterocanonical) books where Catholic and Orthodox Bibles put them.
var READ_ORDER_X = ['gen','exo','lev','num','deu','jos','jdg','rut','1sa','2sa','1ki','2ki','1ch','2ch','man','1es','ezr','neh','tob','jdt','est','esa','1ma','2ma',
  'job','psa','pro','ecc','sng','wis','sir','isa','jer','lam','bar','ezk','dan','aza','sus','bel','hos','joe','amo','oba','jon','mic','nah','hab','zep','hag','zec','mal','2es',
  'mat','mrk','luk','jhn','act','rom','1co','2co','gal','eph','php','col','1th','2th','1ti','2ti','tit','phm','heb','jas','1pe','2pe','1jn','2jn','3jn','jud','rev'];

// ----- The big story: how the nine movements line up with the eleven eras -----
var ARC = [
  { id: 'creation', label: 'Creation', col: '1 / span 1', eras: [1], span: 'Era 1', color: '#3B6E3B', title: 'God makes a good world',
    text: 'Genesis 1–2 opens with God creating the heavens and the earth by his word, calling it “very good,” and making humans in his image to care for it. Everything that follows assumes this starting point: the world belongs to God, and people were made to live with him and reflect him.',
    refs: [['gen', 1, 'Genesis 1'], ['gen', 2, 'Genesis 2'], ['psa', 104, 'Psalm 104'], ['jhn', 1, 'John 1']] },
  { id: 'fall', label: 'Fall', col: '2 / span 1', eras: [1], span: 'Era 1', color: '#8A2E4A', title: 'Humanity turns away',
    text: 'In Genesis 3 Adam and Eve distrust God and eat the forbidden fruit. The damage spreads quickly: shame and blame, Cain’s murder of Abel, the violence that brings the flood, and the pride of Babel (Genesis 3–11). The rest of the Bible is God’s long answer to this problem.',
    refs: [['gen', 3, 'Genesis 3'], ['gen', 6, 'Genesis 6'], ['gen', 11, 'Genesis 11'], ['rom', 5, 'Romans 5']] },
  { id: 'covenant', label: 'Covenant', col: '3 / span 6', eras: [2, 3, 4], span: 'Eras 2–4', color: '#2E4A8A', title: 'God binds himself to a people',
    text: 'God calls Abraham and promises him land, descendants and blessing for every nation (Genesis 12). He rescues Abraham’s descendants from Egypt and makes a covenant with them at Sinai, giving the law and living among them in the tabernacle. Under Joshua, Israel enters the land; under the judges, it keeps breaking faith.',
    refs: [['gen', 12, 'Genesis 12'], ['gen', 15, 'Genesis 15'], ['exo', 19, 'Exodus 19'], ['exo', 20, 'Exodus 20'], ['jos', 24, 'Joshua 24']] },
  { id: 'kingdom', label: 'Kingdom', col: '9 / span 4', eras: [5, 6], span: 'Eras 5–6', color: '#7A3B1E', title: 'Israel gets a king',
    text: 'Israel asks for a king. God promises David a dynasty that will last forever (2 Samuel 7), and Solomon builds the Temple. Then the kingdom splits in two. Prophets such as Elijah, Amos and Isaiah call both kingdoms back to God, and Assyria destroys the northern kingdom in 722 BC.',
    refs: [['1sa', 8, '1 Samuel 8'], ['2sa', 7, '2 Samuel 7'], ['1ki', 8, '1 Kings 8'], ['isa', 9, 'Isaiah 9']] },
  { id: 'exile', label: 'Exile', col: '13 / span 2', eras: [7], span: 'Era 7', color: '#5B4A8A', title: 'Judgment and loss',
    text: 'Babylon destroys Jerusalem and the Temple in 586 BC and carries the people away, the disaster Deuteronomy had warned of. In exile, Jeremiah, Ezekiel, Daniel and the later chapters of Isaiah keep hope alive: God will bring them home, give them a new heart, and send a servant who suffers for others.',
    refs: [['2ki', 25, '2 Kings 25'], ['lam', 3, 'Lamentations 3'], ['ezk', 37, 'Ezekiel 37'], ['isa', 53, 'Isaiah 53']] },
  { id: 'return', label: 'Return', col: '15 / span 4', eras: [8, 9], span: 'Eras 8–9', color: '#2E6E8A', title: 'Home, but still waiting',
    text: 'Persia lets the exiles go home in 538 BC. They rebuild the Temple and Jerusalem’s walls, but foreign rule goes on: Persians, then Greeks, then Romans. The Old Testament closes with Malachi promising a messenger, and the centuries after it (covered by 1–2 Maccabees in Catholic and Orthodox Bibles) sharpen the hope for a Messiah.',
    refs: [['ezr', 1, 'Ezra 1'], ['neh', 8, 'Nehemiah 8'], ['mal', 3, 'Malachi 3'], ['mal', 4, 'Malachi 4']] },
  { id: 'messiah', label: 'Messiah', col: '19 / span 2', eras: [10], span: 'Era 10', color: '#A0522D', title: 'The promised king arrives',
    text: 'The Gospels present Jesus as the long-awaited Messiah (“anointed one”) from David’s line. He announces the kingdom of God, heals and forgives, gathers twelve disciples like a renewed Israel, and is crucified in Jerusalem. On the third day he rises, which the New Testament treats as the turning point of the whole story.',
    refs: [['mat', 1, 'Matthew 1'], ['luk', 4, 'Luke 4'], ['jhn', 20, 'John 20'], ['1co', 15, '1 Corinthians 15']] },
  { id: 'church', label: 'Church', col: '21 / span 2', eras: [11], span: 'Era 11 → today', color: '#1F6656', title: 'The good news goes to the nations',
    text: 'At Pentecost the Holy Spirit comes on Jesus’ followers (Acts 2), and the message spreads from Jerusalem to Samaria, Antioch, Asia Minor, Greece and Rome. Jews and Gentiles become one people, the promise to Abraham coming true. The letters show young churches learning to live it out, and the Timeline follows the church from there to today.',
    refs: [['act', 2, 'Acts 2'], ['act', 10, 'Acts 10'], ['eph', 2, 'Ephesians 2'], ['gal', 3, 'Galatians 3']], timeline: true },
  { id: 'newc', label: 'New creation', col: '23 / span 2', eras: [], span: 'Still to come', color: '#8A6A1E', title: 'All things made new',
    text: 'The Bible ends where it began, but bigger: a new heaven and a new earth, God living with his people, no more death or tears, and the tree of life from Eden restored (Revelation 21–22). The prophets saw it coming too (Isaiah 65). Christians hold this as the hope still ahead, which the whole story has been moving toward.',
    refs: [['rev', 21, 'Revelation 21'], ['rev', 22, 'Revelation 22'], ['isa', 65, 'Isaiah 65'], ['rom', 8, 'Romans 8']] }
];

// ----- Timeline: creation to today -----
// The left end is an undated stretch (creation to Babel); real years start with Abraham.
var TL_LO = -2900, TL_HI = 2035, TL_MIN_SPAN = 40, TL_UNDATED = -2150;
var TL_CATS = {
  bible: ['Bible history', '#7A3B1E'], early: ['Early church', '#1F6656'], catholic: ['Catholic', '#8A2E4A'],
  orthodox: ['Orthodox', '#2E4A8A'], protestant: ['Protestant', '#A0661E'], shared: ['Shared & global', '#5B4A8A']
};
var TL_PRESETS = [
  ['All of history', TL_LO, TL_HI], ['Old Testament', TL_LO, -380], ['Between the Testaments', -450, 10], ['Jesus & the apostles', -40, 110],
  ['Councils & creeds', 280, 620], ['Middle Ages', 500, 1500], ['Reformation', 1370, 1660], ['Modern era', 1650, 2035]
];
var TIMELINE = [{"y": -2820, "t": "Creation", "c": "bible", "k": 1, "r": ["gen", 1], "d": "Genesis opens with God creating the heavens and the earth, but it gives no date. In the 1650s Archbishop James Ussher added up the genealogies and arrived at 4004 BC, a date once printed in many Bibles. Many Christians today hold that the earth is far older, so the timeline leaves creation undated, at its open left end.", "s": [["James Ussher (Britannica)", "https://www.britannica.com/biography/James-Ussher"]], "u": true}, {"y": -2560, "t": "The flood", "c": "bible", "k": 3, "r": ["gen", 6], "d": "Genesis tells of the flood in Noah’s day without giving a date. Ussher’s chronology placed it around 2350 BC; scholars also read it alongside other ancient Near Eastern flood stories. Like creation, it is left undated here.", "s": [["Noah (Britannica)", "https://www.britannica.com/topic/Noah"]], "u": true}, {"y": -2000, "y2": -1700, "t": "Abraham and the patriarchs", "c": "bible", "k": 1, "a": true, "r": ["gen", 12], "d": "God calls Abraham to leave Mesopotamia for Canaan and promises him land, descendants and blessing for all nations. The stories of Isaac, Jacob and Joseph follow. Dates are approximate.", "s": [["Abraham (Britannica)", "https://www.britannica.com/biography/Abraham"]]}, {"y": -1446, "t": "The Exodus", "c": "bible", "k": 1, "a": true, "r": ["exo", 14], "d": "Moses leads Israel out of slavery in Egypt, and God makes a covenant with the nation at Mount Sinai. The date is debated: about 1446 BC from 1 Kings 6:1, or about 1260 BC, which many archaeologists prefer.", "s": [["Moses (Britannica)", "https://www.britannica.com/biography/Moses-Hebrew-prophet"]]}, {"y": -1400, "y2": -1050, "t": "Conquest and judges", "c": "bible", "k": 2, "a": true, "r": ["jdg", 2], "d": "Israel settles in Canaan under Joshua, then goes through cycles of unfaithfulness and rescue by “judges” such as Deborah and Gideon.", "s": [["Judges, book of (Britannica)", "https://www.britannica.com/topic/Book-of-Judges"]]}, {"y": -1010, "t": "David becomes king", "c": "bible", "k": 1, "a": true, "r": ["2sa", 7], "d": "David unites the tribes, makes Jerusalem his capital and receives God’s promise of a lasting dynasty, the root of later hope for a Messiah “son of David.”", "s": [["David (Britannica)", "https://www.britannica.com/biography/David"]]}, {"y": -960, "t": "Solomon’s Temple", "c": "bible", "k": 2, "a": true, "r": ["1ki", 8], "d": "Solomon builds the first Temple in Jerusalem, which becomes the center of Israel’s worship.", "s": [["Solomon (Britannica)", "https://www.britannica.com/biography/Solomon"]]}, {"y": -930, "t": "The kingdom divides", "c": "bible", "k": 2, "r": ["1ki", 12], "d": "After Solomon’s death ten northern tribes break away as Israel; Judah, in the south, keeps David’s line.", "s": [["Israel, ancient kingdom (Britannica)", "https://www.britannica.com/topic/Israel-Old-Testament-kingdom"]]}, {"y": -722, "t": "Assyria destroys Israel (north)", "c": "bible", "k": 2, "r": ["2ki", 17], "d": "Assyria captures Samaria and deports much of the northern kingdom’s population.", "s": [["Samaria (Britannica)", "https://www.britannica.com/place/Samaria-West-Bank"]]}, {"y": -586, "t": "Jerusalem falls; exile in Babylon", "c": "bible", "k": 1, "r": ["2ki", 25], "d": "Babylon destroys Jerusalem and Solomon’s Temple and deports much of Judah’s population. In exile, prophets like Ezekiel keep hope alive.", "s": [["Babylonian Captivity (Britannica)", "https://www.britannica.com/event/Babylonian-Captivity"]]}, {"y": -538, "t": "Cyrus lets the exiles return", "c": "bible", "k": 2, "r": ["ezr", 1], "d": "After Persia conquers Babylon, Cyrus allows the Jews to go home. The second Temple is finished in 516 BC.", "s": [["Babylonian Captivity and return (Britannica)", "https://www.britannica.com/event/Babylonian-Captivity"]]}, {"y": -445, "t": "Nehemiah rebuilds the walls", "c": "bible", "k": 3, "r": ["neh", 2], "d": "Nehemiah returns from the Persian court to rebuild Jerusalem’s walls; Ezra teaches the law.", "s": [["Babylonian Captivity and return (Britannica)", "https://www.britannica.com/event/Babylonian-Captivity"]]}, {"y": -430, "t": "Malachi: the last Old Testament prophet", "c": "bible", "k": 3, "a": true, "r": ["mal", 4], "d": "Malachi is usually dated around 430 BC. About four centuries pass before the New Testament, a period Protestants call the “intertestamental” years.", "s": [["Malachi (Britannica)", "https://www.britannica.com/topic/The-Book-of-Malachi"]]}, {"y": -250, "t": "The Septuagint", "c": "bible", "k": 2, "a": true, "d": "Jewish scholars in Alexandria begin translating the Hebrew Scriptures into Greek, starting with the Torah in the 3rd century BC. This Greek Bible, which includes books later called deuterocanonical, became the Old Testament of the early church.", "s": [["Septuagint (Britannica)", "https://www.britannica.com/topic/Septuagint"]]}, {"y": -167, "y2": -164, "t": "Maccabean revolt and Hanukkah", "c": "bible", "k": 2, "r": ["1ma", 4], "d": "Jewish rebels led by the Maccabees overthrow Seleucid rule and rededicate the Temple, remembered at Hanukkah. 1–2 Maccabees, in Catholic and Orthodox Bibles, tell the story.", "s": [["Maccabees (Britannica)", "https://www.britannica.com/topic/Maccabees"], ["Hanukkah (Britannica)", "https://www.britannica.com/topic/Hanukkah"]]}, {"y": -63, "t": "Rome takes Judea", "c": "bible", "k": 3, "d": "The Roman general Pompey captures Jerusalem, bringing Judea under Roman control. Herod the Great later rules as a client king (37–4 BC).", "s": [["Herodian dynasty (Britannica)", "https://www.britannica.com/topic/Herodian-dynasty"]]}, {"y": -5, "t": "Birth of Jesus", "c": "bible", "k": 1, "a": true, "r": ["luk", 2], "d": "Jesus is born in Bethlehem, probably a few years before AD 1; the monk who later calculated the calendar was a little off, and Herod the Great died in 4 BC.", "s": [["Jesus (Britannica)", "https://www.britannica.com/biography/Jesus"]]}, {"y": 30, "t": "Crucifixion and resurrection", "c": "bible", "k": 1, "a": true, "r": ["jhn", 20], "d": "Jesus is crucified in Jerusalem under Pontius Pilate, around AD 30 or 33. His followers proclaim that he rose from the dead on the third day.", "s": [["Jesus (Britannica)", "https://www.britannica.com/biography/Jesus"], ["Pontius Pilate (Britannica)", "https://www.britannica.com/summary/Pontius-Pilate"]]}, {"y": 30, "t": "Pentecost: the church begins", "c": "early", "k": 2, "a": true, "r": ["act", 2], "d": "The Holy Spirit comes on Jesus’ followers in Jerusalem, and Peter preaches to crowds from across the Jewish world.", "s": [["Pentecost (Britannica)", "https://www.britannica.com/topic/Pentecost-Christianity"]]}, {"y": 47, "y2": 62, "t": "Paul’s missionary journeys", "c": "early", "k": 2, "a": true, "r": ["act", 13], "d": "Paul plants churches across Asia Minor and Greece and writes letters that become much of the New Testament. Tradition says he was executed in Rome in the 60s.", "s": [["St. Paul the Apostle (Britannica)", "https://www.britannica.com/biography/Saint-Paul-the-Apostle"]]}, {"y": 70, "t": "Rome destroys the Temple", "c": "early", "k": 1, "d": "Roman forces under Titus crush the Jewish revolt and destroy the second Temple. Judaism and Christianity increasingly go separate ways.", "s": [["Siege of Jerusalem, AD 70 (Britannica)", "https://www.britannica.com/event/Siege-of-Jerusalem-70"]]}, {"y": 95, "t": "Revelation; New Testament complete", "c": "early", "k": 3, "a": true, "r": ["rev", 1], "d": "Revelation is usually dated to the reign of Domitian, around AD 95, making it among the last New Testament writings.", "s": [["Revelation to John (Britannica)", "https://www.britannica.com/topic/Revelation-to-John"]]}, {"y": 313, "t": "Edict of Milan", "c": "early", "k": 1, "d": "Constantine and Licinius grant Christians legal toleration, ending the era of official persecution.", "s": [["Edict of Milan (Britannica)", "https://www.britannica.com/topic/Edict-of-Milan"]]}, {"y": 325, "t": "Council of Nicaea", "c": "early", "k": 1, "d": "The first ecumenical council, called by Constantine, rejects Arius’ teaching that the Son is a created being and affirms that he is “of one substance” with the Father.", "s": [["Arianism and Nicaea (Britannica)", "https://www.britannica.com/topic/Arianism"], ["Nicene Creed (Britannica)", "https://www.britannica.com/topic/Nicene-Creed"]]}, {"y": 367, "t": "Athanasius lists the 27 New Testament books", "c": "early", "k": 2, "d": "Athanasius of Alexandria’s Easter letter is the earliest known list matching the 27-book New Testament exactly.", "s": [["Biblical canon (Britannica)", "https://www.britannica.com/topic/biblical-canon"]]}, {"y": 380, "t": "Christianity becomes the state religion", "c": "early", "k": 3, "d": "Emperor Theodosius I’s Edict of Thessalonica requires subjects to hold the Nicene faith, making it the official religion of the Roman Empire.", "s": [["Theodosius I (Britannica)", "https://www.britannica.com/biography/Theodosius-I"]]}, {"y": 381, "t": "Council of Constantinople", "c": "early", "k": 2, "d": "The second ecumenical council affirms the full divinity of the Holy Spirit and approves the expanded Nicene Creed still recited by most churches.", "s": [["First Council of Constantinople (Britannica)", "https://www.britannica.com/event/First-Council-of-Constantinople-381"]]}, {"y": 405, "t": "Jerome’s Latin Vulgate", "c": "early", "k": 2, "a": true, "d": "Jerome completes a Latin translation of the Bible from Hebrew and Greek. The Vulgate became the standard Bible of Western Christianity for over a thousand years.", "s": [["Vulgate (Britannica)", "https://www.britannica.com/topic/Vulgate"]]}, {"y": 397, "y2": 426, "t": "Augustine of Hippo", "c": "early", "k": 1, "d": "Augustine’s Confessions (c. 397) and City of God (413–426) shaped Western thinking on grace, sin, the church and history. Both Catholic theology and Reformers like Luther and Calvin drew deeply on him.", "s": [["St. Augustine (Britannica)", "https://www.britannica.com/biography/Saint-Augustine"]]}, {"y": 451, "t": "Council of Chalcedon", "c": "early", "k": 2, "d": "The council defines Christ as one person in two natures, fully God and fully human. Some Eastern churches (today’s Oriental Orthodox) did not accept it.", "s": [["Council of Chalcedon (Britannica)", "https://www.britannica.com/event/Council-of-Chalcedon"]]}, {"y": 529, "t": "Benedict’s Rule and Monte Cassino", "c": "catholic", "k": 2, "a": true, "d": "Benedict of Nursia founds the monastery of Monte Cassino; his Rule became the pattern for Western monastic life.", "s": [["St. Benedict of Nursia (Britannica)", "https://www.britannica.com/biography/Saint-Benedict-of-Nursia"]]}, {"y": 590, "t": "Gregory the Great", "c": "catholic", "k": 2, "d": "Pope Gregory I (590–604) is often called the founder of the medieval papacy. In 596 he sent Augustine of Canterbury’s mission to the English.", "s": [["St. Gregory the Great (Britannica)", "https://www.britannica.com/biography/St-Gregory-the-Great"]]}, {"y": 800, "t": "Charlemagne crowned emperor", "c": "catholic", "k": 2, "d": "Pope Leo III crowns Charlemagne emperor in Rome on Christmas Day, binding church and empire together in the West.", "s": [["Charlemagne (Britannica)", "https://www.britannica.com/biography/Charlemagne"]]}, {"y": 863, "t": "Cyril and Methodius go to the Slavs", "c": "orthodox", "k": 2, "d": "The brothers from Thessalonica begin their mission in Moravia, create a Slavic alphabet and translate the Bible and liturgy into Slavonic.", "s": [["Saints Cyril and Methodius (Britannica)", "https://www.britannica.com/biography/Saints-Cyril-and-Methodius"]]}, {"y": 988, "t": "Baptism of Kyivan Rus", "c": "orthodox", "k": 2, "d": "Prince Volodymyr (Vladimir) of Kyiv accepts Orthodox Christianity, shaping the faith of Ukraine, Belarus and Russia.", "s": [["Kyivan Rus (Britannica)", "https://www.britannica.com/topic/Kyivan-Rus"]]}, {"y": 1054, "t": "East–West Schism", "c": "orthodox", "k": 1, "d": "Papal legates and the patriarch of Constantinople excommunicate each other, a break that hardened into the separation of the Roman Catholic and Eastern Orthodox churches.", "s": [["Schism of 1054 (Britannica)", "https://www.britannica.com/event/Schism-of-1054"]]}, {"y": 1095, "t": "First Crusade", "c": "catholic", "k": 2, "d": "Pope Urban II calls Western knights to take Jerusalem; it falls in 1099. Later crusades, including the sack of Constantinople in 1204, deepened the East–West rift.", "s": [["First Crusade (Britannica)", "https://www.britannica.com/event/First-Crusade"]]}, {"y": 1265, "y2": 1274, "t": "Thomas Aquinas’ Summa", "c": "catholic", "k": 2, "d": "Aquinas joins Aristotle’s philosophy with Christian theology; his Summa theologiae remains central to Catholic teaching.", "s": [["St. Thomas Aquinas (Britannica)", "https://www.britannica.com/biography/Saint-Thomas-Aquinas"]]}, {"y": 1309, "y2": 1377, "t": "Popes at Avignon", "c": "catholic", "k": 3, "d": "The popes live in Avignon, France, rather than Rome, a period critics called the church’s “Babylonian captivity.”", "s": [["Avignon papacy (Britannica)", "https://www.britannica.com/event/Avignon-papacy"]]}, {"y": 1378, "y2": 1417, "t": "Western Schism", "c": "catholic", "k": 3, "d": "Rival popes in Rome and Avignon (and later Pisa) divide Western Christendom until the Council of Constance ends the split.", "s": [["Urban VI and the Western Schism (Britannica)", "https://www.britannica.com/biography/Urban-VI"]]}, {"y": 1382, "t": "Wycliffe’s English Bible", "c": "protestant", "k": 2, "a": true, "d": "Followers of John Wycliffe produce the first complete Bible in English, translated from the Latin Vulgate. Wycliffe is often called the “Morning Star of the Reformation.”", "s": [["John Wycliffe (Britannica)", "https://www.britannica.com/biography/John-Wycliffe"]]}, {"y": 1415, "t": "Jan Hus burned at Constance", "c": "protestant", "k": 3, "d": "The Czech reformer, influenced by Wycliffe, is condemned and executed at the Council of Constance.", "s": [["Jan Hus (Britannica)", "https://www.britannica.com/biography/Jan-Hus"]]}, {"y": 1453, "t": "Fall of Constantinople", "c": "orthodox", "k": 2, "d": "The Ottoman sultan Mehmed II captures Constantinople, ending the Byzantine Empire; Hagia Sophia becomes a mosque.", "s": [["Fall of Constantinople (Britannica)", "https://www.britannica.com/event/Fall-of-Constantinople-1453"]]}, {"y": 1455, "t": "Gutenberg Bible printed", "c": "shared", "k": 2, "a": true, "d": "The first major book printed with movable type in Europe is a Latin Bible. Printing made the Reformation’s pamphlets and translated Bibles possible.", "s": [["Johannes Gutenberg (Britannica)", "https://www.britannica.com/biography/Johannes-Gutenberg"]]}, {"y": 1517, "t": "Luther’s 95 Theses", "c": "protestant", "k": 1, "d": "Martin Luther challenges the sale of indulgences, sparking the Protestant Reformation and its themes of Scripture alone, grace alone and faith alone.", "s": [["Ninety-five Theses (Britannica)", "https://www.britannica.com/topic/Ninety-five-Theses"], ["Reformation (Britannica)", "https://www.britannica.com/event/Reformation"]]}, {"y": 1522, "t": "Luther’s German New Testament", "c": "protestant", "k": 3, "d": "Luther translates the New Testament into German from the Greek; his full Bible follows in 1534, grouping the deuterocanonical books as “Apocrypha.”", "s": [["Martin Luther (Britannica)", "https://www.britannica.com/biography/Martin-Luther"]]}, {"y": 1525, "t": "Anabaptists", "c": "protestant", "k": 3, "d": "In Zürich, radical reformers begin baptizing adult believers, the start of the Anabaptist movement (later Mennonites, Amish and Hutterites).", "s": [["Anabaptist (Britannica)", "https://www.britannica.com/summary/Anabaptists"]]}, {"y": 1534, "t": "Church of England breaks with Rome", "c": "protestant", "k": 2, "d": "The Act of Supremacy makes Henry VIII head of the Church of England.", "s": [["Act of Supremacy (Britannica)", "https://www.britannica.com/event/Act-of-Supremacy-England-1534"]]}, {"y": 1536, "t": "Calvin’s Institutes", "c": "protestant", "k": 2, "d": "John Calvin publishes the Institutes of the Christian Religion; from Geneva his Reformed theology spreads to Scotland, the Netherlands and beyond.", "s": [["John Calvin (Britannica)", "https://www.britannica.com/biography/John-Calvin"]]}, {"y": 1540, "t": "Jesuits approved", "c": "catholic", "k": 3, "d": "Pope Paul III approves Ignatius of Loyola’s Society of Jesus, which led Catholic renewal, education and missions worldwide.", "s": [["Jesuits (Britannica)", "https://www.britannica.com/topic/Jesuits"]]}, {"y": 1545, "y2": 1563, "t": "Council of Trent", "c": "catholic", "k": 1, "d": "The Catholic response to the Reformation defines doctrine on Scripture and tradition, justification and the sacraments, and formally confirms the deuterocanonical books as Scripture.", "s": [["Council of Trent (Britannica)", "https://www.britannica.com/event/Council-of-Trent"]]}, {"y": 1611, "t": "King James Bible", "c": "protestant", "k": 2, "r": ["gen", 1], "d": "Commissioned after the 1604 Hampton Court Conference, the Authorized Version became the standard English Bible for centuries. It is one of the two translations in this app.", "s": [["King James Version (Britannica)", "https://www.britannica.com/topic/King-James-Version"]]}, {"y": 1618, "y2": 1648, "t": "Thirty Years’ War", "c": "shared", "k": 3, "d": "A war that began between Catholic and Protestant states devastates central Europe. The Peace of Westphalia (1648) extends toleration to Lutherans and Reformed Christians.", "s": [["Peace of Westphalia (Britannica)", "https://www.britannica.com/event/Peace-of-Westphalia"]]}, {"y": 1730, "y2": 1750, "t": "Great Awakening; Methodist revival", "c": "protestant", "k": 2, "a": true, "d": "Revival spreads through the American colonies with Jonathan Edwards and George Whitefield, while John Wesley’s preaching in England gives rise to Methodism.", "s": [["Great Awakening (Britannica)", "https://www.britannica.com/event/Great-Awakening"], ["Revivalism (Britannica)", "https://www.britannica.com/topic/revivalism-Christianity"]]}, {"y": 1869, "y2": 1870, "t": "First Vatican Council", "c": "catholic", "k": 2, "d": "Called by Pius IX, the council defines papal infallibility, the teaching that the pope cannot err when he defines doctrine on faith and morals under strict conditions.", "s": [["First Vatican Council (Britannica)", "https://www.britannica.com/event/First-Vatican-Council"]]}, {"y": 1906, "t": "Azusa Street revival", "c": "protestant", "k": 2, "d": "William J. Seymour’s revival in Los Angeles launches modern Pentecostalism, now one of the fastest-growing forms of Christianity worldwide.", "s": [["Pentecostalism (Britannica)", "https://www.britannica.com/topic/Pentecostalism"], ["William J. Seymour (Britannica)", "https://www.britannica.com/biography/William-J-Seymour"]]}, {"y": 1947, "t": "Dead Sea Scrolls found", "c": "shared", "k": 2, "d": "A shepherd finds scrolls in a cave at Qumran. They include the oldest known copies of Old Testament books, about a thousand years older than those previously known.", "s": [["Dead Sea Scrolls (Britannica)", "https://www.britannica.com/topic/Dead-Sea-Scrolls"]]}, {"y": 1948, "t": "World Council of Churches", "c": "shared", "k": 3, "d": "Protestant, Anglican and Orthodox churches form the WCC in Amsterdam to work toward Christian unity.", "s": [["World Council of Churches (Britannica)", "https://www.britannica.com/topic/World-Council-of-Churches"]]}, {"y": 1962, "y2": 1965, "t": "Second Vatican Council", "c": "catholic", "k": 1, "d": "Vatican II opens Catholic worship to local languages, encourages Bible reading and reaches out to other Christians and other religions.", "s": [["Second Vatican Council (Britannica)", "https://www.britannica.com/event/Second-Vatican-Council"]]}, {"y": 1965, "t": "1054 excommunications lifted", "c": "orthodox", "k": 3, "d": "Pope Paul VI and Patriarch Athenagoras jointly lift the mutual excommunications of 1054, a symbolic step toward reconciliation.", "s": [["Ecumenism (Britannica)", "https://www.britannica.com/summary/ecumenism"]]}, {"y": 1999, "t": "Catholic–Lutheran joint declaration", "c": "shared", "k": 3, "d": "Catholic and Lutheran representatives sign a joint declaration on justification, the doctrine at the heart of the 1517 dispute.", "s": [["Christianity: ecumenism (Britannica)", "https://www.britannica.com/topic/Christianity/Ecumenism-speaking-the-truth-in-love"]]}, {"y": 2020, "t": "2.3 billion Christians", "c": "shared", "k": 2, "d": "Pew Research Center estimates about 2.3 billion Christians in 2020, about 29% of the world. Sub-Saharan Africa now has more Christians than any other region.", "s": [["Pew Research Center, 2025", "https://www.pewresearch.org/religion/2025/06/09/christian-population-change/"]]}, {"y": 2025, "t": "Leo XIV, first American pope", "c": "catholic", "k": 2, "d": "Robert Prevost of Chicago is elected pope on May 8, 2025, taking the name Leo XIV. The same year, Sarah Mullally became the first woman named Archbishop of Canterbury.", "s": [["Leo XIV (Britannica)", "https://www.britannica.com/biography/Leo-XIV"]]}, {"y": -1700, "t": "Joseph in Egypt; Israel settles in Goshen", "c": "bible", "k": 3, "a": true, "r": ["gen", 41], "d": "Sold by his brothers, Joseph rises to power in Egypt and brings his family there during a famine, ending the patriarchal stories of Genesis.", "s": [["Genesis (Britannica)", "https://www.britannica.com/topic/Genesis-Old-Testament"]]}, {"y": -1050, "t": "Saul, Israel’s first king", "c": "bible", "k": 3, "a": true, "r": ["1sa", 10], "d": "Samuel anoints Saul as the first king of a united Israel. Scholars commonly date the united monarchy to roughly 1020–922 BC.", "s": [["Israel (biblical kingdom) (Britannica)", "https://www.britannica.com/topic/Israel-Old-Testament-kingdom"]]}, {"y": -516, "t": "Second Temple completed", "c": "bible", "k": 2, "r": ["ezr", 6], "d": "Encouraged by Haggai and Zechariah, the returned exiles finish rebuilding the Temple in Jerusalem about 516/515 BC.", "s": [["Temple of Jerusalem (Britannica)", "https://www.britannica.com/topic/Temple-of-Jerusalem"]]}, {"y": -332, "t": "Alexander the Great takes Judea", "c": "bible", "k": 2, "d": "Alexander’s conquest brings Judea under Greek rule, and Greek language and culture spread across the region, setting the stage for the Septuagint and the Maccabean crisis.", "s": [["Judaea (Britannica)", "https://www.britannica.com/place/Judaea"]]}, {"y": -20, "t": "Herod rebuilds the Temple", "c": "bible", "k": 3, "r": ["jhn", 2], "d": "Herod the Great begins a huge reconstruction of the Second Temple, the building Jesus and his disciples knew.", "s": [["Temple of Jerusalem (Britannica)", "https://www.britannica.com/topic/Temple-of-Jerusalem"]]}, {"y": 28, "t": "Jesus’ ministry begins", "c": "bible", "k": 3, "a": true, "r": ["mrk", 1], "d": "After his baptism by John in the Jordan, Jesus begins preaching in Galilee that the kingdom of God has come near.", "s": [["Jesus (Britannica)", "https://www.britannica.com/biography/Jesus"]]}, {"y": 34, "t": "Paul’s conversion", "c": "early", "k": 3, "a": true, "r": ["act", 9], "d": "Saul of Tarsus, a persecutor of the church, meets the risen Jesus on the road to Damascus and becomes the apostle Paul.", "s": [["St. Paul the Apostle (Britannica)", "https://www.britannica.com/biography/Saint-Paul-the-Apostle"]]}, {"y": 49, "t": "Council of Jerusalem", "c": "early", "k": 3, "a": true, "r": ["act", 15], "d": "Apostles and elders agree that Gentile believers do not have to be circumcised or keep the whole Jewish law, opening the church to the nations.", "s": [["St. Paul the Apostle (Britannica)", "https://www.britannica.com/biography/Saint-Paul-the-Apostle"]]}, {"y": 132, "y2": 135, "t": "Bar Kokhba revolt", "c": "early", "k": 3, "d": "A second Jewish revolt against Rome is crushed. Jews are barred from Jerusalem, and Judaism and Christianity continue on separate paths.", "s": [["Judaea (Britannica)", "https://www.britannica.com/place/Judaea"]]}, {"y": 303, "y2": 311, "t": "The Great Persecution", "c": "early", "k": 2, "d": "Diocletian, urged on by Galerius, orders churches destroyed and Scriptures seized: the last and most severe Roman persecution of Christians.", "s": [["Great Persecution (Britannica)", "https://www.britannica.com/topic/Great-Persecution"]]}, {"y": 431, "t": "Council of Ephesus", "c": "early", "k": 3, "d": "The third ecumenical council condemns Nestorius and affirms that Mary is Theotokos, “God-bearer,” stressing that Christ is one person.", "s": [["Council of Ephesus (Britannica)", "https://www.britannica.com/event/Second-Council-of-Ephesus"]]}, {"y": 537, "t": "Hagia Sophia completed", "c": "orthodox", "k": 3, "d": "Emperor Justinian’s great church in Constantinople is finished after about five years of building. For nearly a thousand years it was the heart of Eastern Christianity.", "s": [["Hagia Sophia (Britannica)", "https://www.britannica.com/summary/Hagia-Sophia"]]}, {"y": 597, "t": "Augustine of Canterbury reaches England", "c": "catholic", "k": 3, "d": "Sent by Gregory the Great, a mission of about 40 monks arrives in Kent; Augustine becomes the first archbishop of Canterbury.", "s": [["St. Augustine of Canterbury (Britannica)", "https://www.britannica.com/biography/Saint-Augustine-of-Canterbury"]]}, {"y": 787, "t": "Second Council of Nicaea (icons)", "c": "orthodox", "k": 2, "d": "The seventh and last ecumenical council recognized by both East and West rules that icons may be venerated, though not worshipped, ending the first wave of iconoclasm.", "s": [["Second Council of Nicaea (Britannica)", "https://www.britannica.com/event/Second-Council-of-Nicaea-787"]]}, {"y": 1204, "t": "Crusaders sack Constantinople", "c": "orthodox", "k": 2, "d": "The Fourth Crusade, diverted from the Holy Land, captures and plunders Constantinople, a betrayal that deeply hardened the split between Catholic West and Orthodox East.", "s": [["Sack of Constantinople, 1204 (Britannica)", "https://www.britannica.com/event/Sack-of-Constantinople-1204"]]}, {"y": 1209, "t": "Francis of Assisi and the Franciscans", "c": "catholic", "k": 2, "d": "Pope Innocent III approves the simple rule of Francis of Assisi, whose friars embrace poverty and preaching. The Dominicans follow in 1216.", "s": [["Franciscans (Britannica)", "https://www.britannica.com/topic/Franciscans"], ["Mendicant orders (Britannica)", "https://www.britannica.com/topic/mendicant-Roman-Catholicism"]]}, {"y": 1519, "t": "Zwingli’s reform in Zürich", "c": "protestant", "k": 3, "d": "Huldrych Zwingli begins preaching through the Bible at Zürich’s Grossmünster, launching the Swiss Reformation, the root of the Reformed tradition.", "s": [["Huldrych Zwingli (Britannica)", "https://www.britannica.com/biography/Huldrych-Zwingli"]]}, {"y": 1526, "t": "Tyndale’s English New Testament", "c": "protestant", "k": 2, "d": "William Tyndale’s New Testament, translated from Greek, is smuggled into England. He was executed for heresy in 1536, but his wording shaped the King James Bible.", "s": [["William Tyndale (Britannica)", "https://www.britannica.com/biography/William-Tyndale"]]}, {"y": 1530, "t": "Augsburg Confession", "c": "protestant", "k": 3, "d": "Philipp Melanchthon’s summary of Lutheran belief is presented to Emperor Charles V and becomes the defining statement of the Lutheran churches.", "s": [["Augsburg Confession (Britannica)", "https://www.britannica.com/topic/Augsburg-Confession"]]}, {"y": 1539, "t": "The Great Bible", "c": "protestant", "k": 3, "d": "Henry VIII orders an English Bible for every parish church in England, the first authorized English Bible.", "s": [["Great Bible (Britannica)", "https://www.britannica.com/topic/Great-Bible"]]}, {"y": 1555, "t": "Peace of Augsburg", "c": "shared", "k": 3, "d": "Catholic and Lutheran princes agree that each ruler of the Holy Roman Empire may choose his territory’s religion.", "s": [["Augsburg (Britannica)", "https://www.britannica.com/place/Augsburg"]]}, {"y": 1738, "t": "John Wesley’s heart “strangely warmed”", "c": "protestant", "k": 3, "d": "Wesley’s conversion experience leads to the Methodist revival: open-air preaching, small groups for spiritual growth, and eventually the Methodist churches.", "s": [["Methodist Revival (Britannica)", "https://www.britannica.com/topic/Methodist-Revival"]]}, {"y": 1792, "t": "Modern missions movement", "c": "protestant", "k": 2, "d": "William Carey founds the English Baptist Missionary Society and goes to India the next year, where his team translates the Bible into many Indian languages.", "s": [["William Carey (Britannica)", "https://www.britannica.com/biography/William-Carey"]]}, {"y": 1854, "t": "Immaculate Conception defined", "c": "catholic", "k": 3, "d": "Pius IX declares as dogma that Mary was preserved from original sin from her conception.", "s": [["Pius IX (Britannica)", "https://www.britannica.com/biography/Pius-IX/The-Immaculate-Conception-papal-infallibility-and-the-First-Vatican-Council"]]}, {"y": 1891, "t": "Rerum novarum", "c": "catholic", "k": 3, "d": "Leo XIII’s encyclical on workers and capital lays the foundation of modern Catholic social teaching.", "s": [["Rerum novarum (Britannica)", "https://www.britannica.com/topic/Rerum-Novarum"]]}, {"y": 1910, "t": "Edinburgh Missionary Conference", "c": "shared", "k": 3, "d": "A gathering of Protestant missionary societies, often seen as the first major step of the modern ecumenical movement.", "s": [["Ecumenism (Britannica)", "https://www.britannica.com/summary/ecumenism"]]}, {"y": 1978, "t": "John Paul II elected", "c": "catholic", "k": 2, "d": "Karol Wojtyła of Poland becomes the first non-Italian pope in 455 years; his 26-year papacy is one of the longest in history.", "s": [["St. John Paul II (Britannica)", "https://www.britannica.com/biography/Saint-John-Paul-II"]]}, {"y": 2013, "t": "Francis, first pope from the Americas", "c": "catholic", "k": 3, "d": "After Benedict XVI resigns, Jorge Mario Bergoglio of Buenos Aires is elected as Francis, the first South American and first Jesuit pope.", "s": [["Papacy (Britannica)", "https://www.britannica.com/topic/papacy/The-modern-papacy-from-1775-to-the-21st-century"]]}, {"y": -200, "t": "Seleucids take Judea", "c": "bible", "k": 3, "d": "The Seleucid king Antiochus III defeats Egypt’s Ptolemies at Panium near the sources of the Jordan, and Judea passes from Egyptian to Syrian Greek rule. Daniel 11 is usually read as describing these wars between the “king of the north” and the “king of the south.”", "s": [["Antiochus III the Great (Britannica)", "https://www.britannica.com/biography/Antiochus-III-the-Great"]]}, {"y": -142, "t": "Judea independent under the Hasmoneans", "c": "bible", "k": 3, "d": "Simon, the last of the Maccabee brothers, wins independence from the Seleucids and becomes high priest and ruler, founding the Hasmonean dynasty. Judea governs itself for the first time since the Babylonian exile, until Rome arrives in 63 BC.", "s": [["Hasmonean dynasty (Britannica)", "https://www.britannica.com/topic/Hasmonean-dynasty"]]}, {"y": -37, "t": "Herod the Great becomes king", "c": "bible", "k": 3, "d": "With Roman backing, Herod takes Jerusalem and rules Judea as a client king until his death in 4 BC. He rebuilds the Temple on a grand scale, and Matthew places Jesus’ birth near the end of his reign.", "s": [["Herod (Britannica)", "https://www.britannica.com/biography/Herod-king-of-Judaea"]]}, {"y": -2330, "t": "The tower of Babel", "c": "bible", "k": 3, "u": true, "r": ["gen", 11], "d": "Humanity unites to build a tower reaching to the heavens; God confuses their language and scatters them. Genesis gives no date. The story closes the undated beginnings, and Abraham’s call follows in the next chapter.", "s": [["Tower of Babel (Britannica)", "https://www.britannica.com/topic/Tower-of-Babel"]]}];
function tlYear(y) { return y < TL_UNDATED ? 'Undated' : y < 0 ? (-y) + ' BC' : y < 1000 ? 'AD ' + y : String(y); }
var CANONS = {"protestant": {"title": "Protestant Bible: 66 books", "intro": "The arrangement this app follows. Its Old Testament has the same books as the Jewish Tanakh, ordered like the Greek Septuagint and grouped by type.", "groups": "PROTESTANT"}, "tanakh": {"title": "Jewish Tanakh: 24 books", "intro": "The Hebrew Bible has exactly the same books as the Protestant Old Testament, but counts some together and arranges them in three parts. “Tanakh” comes from their initials: Torah, Nevi’im, Ketuvim. It ends with Chronicles, whose last words invite the exiles to go up to Jerusalem.", "groups": [["Torah (Teaching) · 5", "Also called the Five Books of Moses. Their Hebrew names come from each book’s opening words.", [["Genesis (Bereshit)", "gen", false], ["Exodus (Shemot)", "exo", false], ["Leviticus (Vayikra)", "lev", false], ["Numbers (Bamidbar)", "num", false], ["Deuteronomy (Devarim)", "deu", false]]], ["Nevi’im (Prophets): Former Prophets · 4", "Books Christians call “history” count as prophecy here. Samuel and Kings are one book each.", [["Joshua", "jos", false], ["Judges", "jdg", false], ["Samuel (1 & 2)", "1sa", false], ["Kings (1 & 2)", "1ki", false]]], ["Nevi’im (Prophets): Latter Prophets · 4", "The twelve minor prophets form one book, “The Twelve.” Daniel is not here.", [["Isaiah", "isa", false], ["Jeremiah", "jer", false], ["Ezekiel", "ezk", false], ["The Twelve (Hosea–Malachi)", "hos", false]]], ["Ketuvim (Writings) · 11", "Poetry, wisdom and later history. Song of Songs, Ruth, Lamentations, Ecclesiastes and Esther (the five scrolls) are read at Jewish festivals.", [["Psalms", "psa", false], ["Proverbs", "pro", false], ["Job", "job", false], ["Song of Songs", "sng", false], ["Ruth", "rut", false], ["Lamentations", "lam", false], ["Ecclesiastes", "ecc", false], ["Esther", "est", false], ["Daniel", "dan", false], ["Ezra–Nehemiah", "ezr", false], ["Chronicles (1 & 2)", "1ch", false]]]]}, "catholic": {"title": "Catholic Bible: 73 books", "intro": "The Catholic Old Testament has 46 books: the 39 shared with Protestants plus 7 deuterocanonical books (“second canon”), along with longer Greek versions of Esther and Daniel. The New Testament is the same 27 books. Dashed chips are not in the Protestant Bible.", "groups": [["Pentateuch · 5", "", [["Genesis", "gen", false], ["Exodus", "exo", false], ["Leviticus", "lev", false], ["Numbers", "num", false], ["Deuteronomy", "deu", false]]], ["Historical books · 16", "Tobit and Judith follow Nehemiah, and 1–2 Maccabees follow Esther.", [["Joshua", "jos", false], ["Judges", "jdg", false], ["Ruth", "rut", false], ["1 Samuel", "1sa", false], ["2 Samuel", "2sa", false], ["1 Kings", "1ki", false], ["2 Kings", "2ki", false], ["1 Chronicles", "1ch", false], ["2 Chronicles", "2ch", false], ["Ezra", "ezr", false], ["Nehemiah", "neh", false], ["Tobit", "tob", true], ["Judith", "jdt", true], ["Esther", "est", false], ["+ Additions to Esther", "esa", true], ["1 Maccabees", "1ma", true], ["2 Maccabees", "2ma", true]]], ["Wisdom books · 7", "", [["Job", "job", false], ["Psalms", "psa", false], ["Proverbs", "pro", false], ["Ecclesiastes", "ecc", false], ["Song of Songs", "sng", false], ["Wisdom", "wis", true], ["Sirach", "sir", true]]], ["Prophets · 18", "Baruch (with the Letter of Jeremiah as chapter 6) follows Lamentations. Daniel includes three Greek additions.", [["Isaiah", "isa", false], ["Jeremiah", "jer", false], ["Lamentations", "lam", false], ["Baruch", "bar", true], ["Ezekiel", "ezk", false], ["Daniel", "dan", false], ["+ Prayer of Azariah", "aza", true], ["+ Susanna", "sus", true], ["+ Bel and the Dragon", "bel", true], ["Hosea", "hos", false], ["Joel", "joe", false], ["Amos", "amo", false], ["Obadiah", "oba", false], ["Jonah", "jon", false], ["Micah", "mic", false], ["Nahum", "nah", false], ["Habakkuk", "hab", false], ["Zephaniah", "zep", false], ["Haggai", "hag", false], ["Zechariah", "zec", false], ["Malachi", "mal", false]]], ["New Testament · 27", "The same 27 books, in the same order, as Protestant Bibles.", []]]}, "orthodox": {"title": "Eastern Orthodox Bible: 73+ books", "intro": "Orthodox Bibles follow the Greek Septuagint. They include everything in the Catholic Old Testament plus a few more books, and the exact list varies between churches. Dashed chips are not in the Protestant Bible.", "groups": [["Also in Catholic Bibles", "Tobit, Judith, 1–2 Maccabees, Wisdom, Sirach, Baruch, and the Greek additions to Esther and Daniel.", [["Tobit", "tob", true], ["Judith", "jdt", true], ["1 Maccabees", "1ma", true], ["2 Maccabees", "2ma", true], ["Wisdom", "wis", true], ["Sirach", "sir", true], ["Baruch", "bar", true], ["+ Esther additions", "esa", true], ["+ Daniel additions", "aza", true]]], ["Only in Orthodox Bibles", "", [["1 Esdras", "1es", true], ["Prayer of Manasseh", "man", true], ["Psalm 151", "p151", true], ["3 Maccabees", "3ma", true], ["4 Maccabees (in an appendix)", null, true]]], ["Varies by church", "Slavonic Bibles also include 2 Esdras. The Ethiopian Orthodox Church has the largest canon of all, including 1 Enoch and Jubilees.", [["2 Esdras", "2es", true]]]]}};

// Full Eastern Orthodox order, following the Greek Septuagint as printed in the Orthodox Study Bible.
CANONS.orthodox.intro = 'Orthodox Bibles follow the Greek Septuagint, the Old Testament the early church used. They include everything in the Catholic Old Testament plus a few more books, in a different order (the twelve minor prophets come before Isaiah), and the exact list varies a little between churches. Dashed chips are not in the Protestant Bible.';
CANONS.orthodox.groups = [
  ['Pentateuch · 5', '', [['Genesis', 'gen', false], ['Exodus', 'exo', false], ['Leviticus', 'lev', false], ['Numbers', 'num', false], ['Deuteronomy', 'deu', false]]],
  ['Historical books', 'Samuel and Kings are called 1–4 Kingdoms. 1 Esdras comes before Ezra.', [['Joshua', 'jos', false], ['Judges', 'jdg', false], ['Ruth', 'rut', false], ['1 Kingdoms (1 Samuel)', '1sa', false], ['2 Kingdoms (2 Samuel)', '2sa', false], ['3 Kingdoms (1 Kings)', '1ki', false], ['4 Kingdoms (2 Kings)', '2ki', false], ['1 Chronicles', '1ch', false], ['2 Chronicles', '2ch', false], ['1 Esdras', '1es', true], ['Ezra', 'ezr', false], ['Nehemiah', 'neh', false], ['Tobit', 'tob', true], ['Judith', 'jdt', true], ['Esther', 'est', false], ['+ Additions to Esther', 'esa', true], ['1 Maccabees', '1ma', true], ['2 Maccabees', '2ma', true], ['3 Maccabees', '3ma', true]]],
  ['Poetic and wisdom books', 'Psalm 151 closes the Psalter. The Prayer of Manasseh is usually printed with the Odes after the Psalms.', [['Psalms', 'psa', false], ['+ Psalm 151', 'p151', true], ['Prayer of Manasseh', 'man', true], ['Job', 'job', false], ['Proverbs', 'pro', false], ['Ecclesiastes', 'ecc', false], ['Song of Songs', 'sng', false], ['Wisdom of Solomon', 'wis', true], ['Sirach', 'sir', true]]],
  ['Prophets', 'The Twelve come first, then Isaiah. Baruch and the Letter of Jeremiah follow Jeremiah; Daniel includes the Greek additions.', [['Hosea', 'hos', false], ['Amos', 'amo', false], ['Micah', 'mic', false], ['Joel', 'joe', false], ['Obadiah', 'oba', false], ['Jonah', 'jon', false], ['Nahum', 'nah', false], ['Habakkuk', 'hab', false], ['Zephaniah', 'zep', false], ['Haggai', 'hag', false], ['Zechariah', 'zec', false], ['Malachi', 'mal', false], ['Isaiah', 'isa', false], ['Jeremiah', 'jer', false], ['Baruch', 'bar', true], ['Lamentations', 'lam', false], ['Letter of Jeremiah', 'bar', true], ['Ezekiel', 'ezk', false], ['Daniel', 'dan', false], ['+ Prayer of Azariah', 'aza', true], ['+ Susanna', 'sus', true], ['+ Bel and the Dragon', 'bel', true]]],
  ['Appendix and local variations', '4 Maccabees is printed in an appendix. Slavonic Bibles also include 2 Esdras, and the Ethiopian Orthodox Church has the largest canon of all, including 1 Enoch and Jubilees.', [['4 Maccabees', null, true], ['2 Esdras', '2es', true]]],
  ['New Testament · 27', 'The same 27 books as Protestant and Catholic Bibles.', []]
];
// Tanakh items that bundle several books, for chapter counts and tiles in the Library.
var CANON_COMBO = { '1sa': ['1sa', '2sa'], '1ki': ['1ki', '2ki'], 'hos': ['hos', 'joe', 'amo', 'oba', 'jon', 'mic', 'nah', 'hab', 'zep', 'hag', 'zec', 'mal'], 'ezr': ['ezr', 'neh'], '1ch': ['1ch', '2ch'] };

CANONS.protestant.groups = DIVS.map(function (d) {
  return [d.name + ' \u00b7 ' + d.count, '', BOOKS.filter(function (b) { return b.div === d.id; }).map(function (b) { return [b.name, b.id, false]; })];
});
var CANON_CARDS = [
  ['protestant', '66', 'Protestant', 'The arrangement this app follows.'],
  ['tanakh', '24', 'Jewish Tanakh', 'Same books as the Old Testament, counted and ordered as Torah, Prophets and Writings.'],
  ['catholic', '73', 'Catholic', 'Adds Tobit, Judith, 1\u20132 Maccabees, Wisdom, Sirach and Baruch.'],
  ['orthodox', '73+', 'Eastern Orthodox', 'Adds a few more, such as 1 Esdras, 3 Maccabees and Psalm 151.']
];

class Component extends DCLogic {
  // Focus mode: show one section full screen. Purely DOM-level, so it works for any block marked data-focus.
  focusToggle(e) {
    var b = e && e.currentTarget; var el = b && b.closest ? b.closest('[data-focus]') : null;
    if (!el) return;
    if (el.classList.contains('be-focused')) this.focusExit(); else this.focusEnter(el, b);
  }
  focusEnter(el, btn) {
    if (this._focusEl) this.focusExit(true);
    var fit = el.querySelector('[data-fit]');
    if (fit && fit.offsetHeight) el.style.setProperty('--ar', String(fit.offsetWidth / fit.offsetHeight));
    el.classList.add('be-focused');
    document.documentElement.classList.add('be-focus-open');
    this._focusEl = el;
    el.scrollTop = 0;
    if (btn) { btn.setAttribute('aria-label', 'Exit focus mode'); btn.title = 'Exit focus mode (Esc)'; try { btn.focus(); } catch (err) {} }
    var d = document.documentElement;
    if (!document.fullscreenElement && d.requestFullscreen) {
      var self = this; self._fsByUs = true;
      try { d.requestFullscreen().catch(function () { self._fsByUs = false; }); } catch (err) { self._fsByUs = false; }
    }
    this.forceUpdate();
  }
  focusExit(keepFs) {
    var el = this._focusEl; this._focusEl = null;
    if (el) {
      el.classList.remove('be-focused');
      var b = el.querySelector('.be-fbtn');
      if (b) { b.setAttribute('aria-label', 'Focus mode: show this section full screen'); b.title = 'Focus mode (full screen)'; }
    }
    document.documentElement.classList.remove('be-focus-open');
    if (!keepFs && this._fsByUs) {
      this._fsByUs = false;
      try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function () {}); } catch (err) {}
    }
    if (el) { var self = this; setTimeout(function () { try { el.scrollIntoView({ block: 'nearest' }); } catch (err) {} self.forceUpdate(); }, 30); }
  }
  componentDidMount() {
    var self = this;
    this.loadText('bsb');
    this.loadChapters();
    this.loadHenry();
    if (!document.getElementById('be-speak-style')) {
      var css = document.createElement('style');
      css.id = 'be-speak-style';
      css.textContent = '[data-focus]{position:relative}.be-fbtn{position:absolute;top:8px;right:8px;z-index:6;width:34px;height:34px;border-radius:50%;border:1px solid #D9CDB8;background:#FFFDF8;color:#231E19;display:inline-flex;align-items:center;justify-content:center;padding:0;cursor:pointer;opacity:.8;box-shadow:0 1px 3px rgba(0,0,0,.12)}.be-fbtn:hover,.be-fbtn:focus-visible{opacity:1;background:#F5EFE3}.be-fi-out{display:none}.be-focused>.be-fbtn .be-fi-in{display:none}.be-focused>.be-fbtn .be-fi-out{display:block}.be-focused{position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;z-index:45 !important;margin:0 !important;max-width:none !important;max-height:none !important;width:auto !important;height:auto !important;overflow:auto !important;background:#FBF7EF !important;border:none !important;border-radius:0 !important;box-shadow:none !important;padding:60px max(20px,calc((100vw - 1180px) / 2)) 48px !important;box-sizing:border-box !important;--fit-off:140px}.be-focused>.be-fbtn{position:fixed;top:12px;right:16px;width:44px;height:44px;opacity:1;z-index:46}.be-focused[data-focus=text]{padding:64px max(20px,calc((100vw - 760px) / 2)) 96px !important;font-size:21px !important}.be-focused[data-focus=map]{--fit-off:200px}.be-focused [data-fit]{width:min(100%, calc((100vh - var(--fit-off)) * var(--ar,1.333))) !important;max-width:none !important;margin-left:auto !important;margin-right:auto !important}html.be-focus-open,html.be-focus-open body{overflow:hidden !important}html.be-focus-open .be-dbtn{display:none !important}[data-focus=text]:not(.be-focused)>.be-fbtn{position:sticky;top:0;float:right;margin:-14px -18px 0 8px}.be-sbtn{position:absolute;top:8px;right:48px;z-index:6;width:34px;height:34px;border-radius:50%;border:1px solid #D9CDB8;background:#FFFDF8;color:#231E19;display:inline-flex;align-items:center;justify-content:center;padding:0;cursor:pointer;opacity:.8;box-shadow:0 1px 3px rgba(0,0,0,.12)}.be-sbtn:hover,.be-sbtn:focus-visible{opacity:1;background:#F5EFE3}.be-sbtn .be-si-stop{display:none}.be-reading>.be-sbtn{opacity:1;background:#231E19;color:#FBF7EF;border-color:#231E19}.be-reading>.be-sbtn .be-si-play{display:none}.be-reading>.be-sbtn .be-si-stop{display:block}.be-focused>.be-sbtn{position:fixed;top:12px;right:68px;width:44px;height:44px;opacity:1;z-index:46}[data-focus=text]:not(.be-focused)>.be-sbtn{position:sticky;top:0;float:right;margin:-14px 0 0 8px}.be-speaking{background:#F6E2A8 !important;border-radius:6px;box-shadow:0 0 0 6px #F6E2A8;transition:background .2s ease}';
      document.head.appendChild(css);
    }
    // Remember a phone visitor's choice of desktop view.
    var saved = false;
    try { saved = window.localStorage.getItem('bibleExplorer.desktopView') === '1'; } catch (err) {}
    if (saved && this.isPhoneScreen()) this.setDesktopView(true);
    window.addEventListener('orientationchange', function () { if (self.state && self.state.desktopView) setTimeout(function () { self.setDesktopView(true); }, 250); });
    this.readLink();
    window.addEventListener('popstate', function (e) { self.histPop(e); });
    try { var hs0 = window.history.state; if (hs0 && hs0.be) this._histDepth = hs0.depth || 0; } catch (err) {}
    if (this.ttsSupported()) {
      // Voices load asynchronously in some browsers; stop any reading left over from a previous page.
      try { window.speechSynthesis.cancel(); window.speechSynthesis.onvoiceschanged = function () { self.forceUpdate(); }; } catch (err) {}
      window.addEventListener('pagehide', function () { try { window.speechSynthesis.cancel(); } catch (err) {} });
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && self._focusEl) self.focusExit(); });
    document.addEventListener('fullscreenchange', function () { if (!document.fullscreenElement && self._fsByUs) { self._fsByUs = false; if (self._focusEl) self.focusExit(); } });
    document.addEventListener('click', function () { setTimeout(function () { if (self._focusEl && !self._focusEl.isConnected) self.focusExit(); }, 60); });
    // Layout width, not innerWidth: on iPhone innerWidth shrinks with pinch-zoom, which would flip the header to the phone layout.
    this._isNarrow = function () {
      if (self.state && self.state.desktopView) return false;
      var w = document.documentElement.clientWidth || window.innerWidth;
      return w < 720;
    };
    this._narrow = this._isNarrow();
    var reNarrow = function () { var n = self._isNarrow(); if (n !== self._narrow) { self._narrow = n; self.forceUpdate(); } };
    window.addEventListener('resize', reNarrow);
    this._reNarrow = reNarrow;
  }

  loadText(tr) {
    var self = this;
    if (!this._texts) this._texts = {};
    if (!this._pending) this._pending = {};
    if (!this._failed) this._failed = {};
    if (this._texts[tr] || this._pending[tr]) return;
    this._pending[tr] = true;
    this._failed[tr] = false;
    fetch(TEXT_URLS[tr])
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) { self._texts[tr] = d; self._pending[tr] = false; self.forceUpdate(); })
      .catch(function () { self._pending[tr] = false; self._failed[tr] = true; self.forceUpdate(); });
  }


  loadHenry() {
    var self = this;
    if (this._hnData || this._hnPending) return;
    this._hnPending = true;
    fetch(HN_URL)
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) { self._hnData = d; self._hnPending = false; self.forceUpdate(); })
      .catch(function () { self._hnPending = false; self._hnFailed = true; self.forceUpdate(); });
  }
  loadChapters() {
    var self = this;
    if (this._chData || this._chPending) return;
    this._chPending = true;
    fetch(CH_URL)
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) {
        Object.keys(d.places).forEach(function (k) { var p = d.places[k]; PLACES[k] = [p[0], p[1], p[2], 'r']; });
        self._chData = d; self._chPending = false; self.forceUpdate();
      })
      .catch(function () { self._chPending = false; self._chFailed = true; self.forceUpdate(); });
  }

  // ----- Listen to any page: reads the headings and text of the current view -----
  // The readable blocks of the current view, each with the element it came from.
  // The readable blocks inside the given elements, in page order. Walks every visible text node,
  // so text shown by toggles, tabs and filters is read just like static text.
  pageSpeakItems(roots) {
    var st = this.state || {};
    if (!roots) {
      roots = [document.getElementById('page-main')];
      var bc = document.getElementById('book-card');
      if (bc) roots.push(bc);
    }
    var SKIP = 'svg, script, style, select, option, input, textarea, [aria-hidden="true"], [data-noread], .be-fbtn, .be-sbtn, .sr';
    var words = function (t) { return t.split(/\s+/).filter(Boolean).length; };
    var visible = function (el) {
      if (el.checkVisibility) return el.checkVisibility({ visibilityProperty: true });
      return !!(el.offsetParent || el.getClientRects().length);
    };
    var blockOf = function (el, root) {
      var ctl = el.closest('button, [role="button"]');
      if (ctl && root.contains(ctl)) return ctl;
      while (el && el !== root) {
        var d = getComputedStyle(el).display;
        if (d.indexOf('inline') !== 0 && d !== 'contents') return el;
        el = el.parentElement;
      }
      return root;
    };
    var out = [], seen = new Map();
    roots.forEach(function (root) {
      if (!root || !root.isConnected) return;
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      var n;
      while ((n = w.nextNode())) {
        var txt = n.nodeValue.replace(/\s+/g, ' ');
        if (!txt.trim()) continue;
        var pe = n.parentElement;
        if (!pe || pe.closest(SKIP) || !visible(pe)) continue;
        var b = blockOf(pe, root);
        var it = seen.get(b);
        if (!it) { it = { el: b, text: '', last: null }; seen.set(b, it); out.push(it); }
        if (it.last && it.last !== pe && it.text.trim()) {
          // Separate pieces that sit in their own boxes (a title and its description, a line and its verse range).
          var box = function (x) { return x !== b && getComputedStyle(x).display.indexOf('inline') !== 0; };
          if ((box(pe) || box(it.last)) && !/[.!?:,;]\s*$/.test(it.text)) it.text = it.text.replace(/\s*$/, '. ');
          else if (!/\s$/.test(it.text) && !/^\s/.test(txt)) it.text += ' ';
        }
        it.text += txt; it.last = pe;
      }
    });
    return out.map(function (it) {
      var t = it.text.replace(/\s+/g, ' ').trim().replace(/\bvv\. ?(?=\d)/g, 'verses ').replace(/\bv\. ?(?=\d)/g, 'verse ');
      var ctl = it.el.matches('button, [role="button"]');
      // Skip controls (toggles, filters, arrows, actions); keep buttons that carry content, such as names and summaries.
      if (ctl && (it.el.hasAttribute('aria-pressed') || it.el.getAttribute('role') === 'tab' ||
          /^[←→↑↓‹›«»▾▴+−-]|[←→↑↓‹›«»▾▴]$/.test(t) ||
          /^(export|download|show|hide|expand|collapse|reset|clear|close|play|pause|stop|listen|read more|see all|zoom|back|next|previous|start)\b/i.test(t))) return null;
      if (!t || !/[A-Za-z0-9]/.test(t)) return null;
      return { el: it.el, text: /[.!?:”"’)]$/.test(t) ? t : t + '.' };
    }).filter(Boolean);
  }

  // Read one area aloud (the speaker button on each section). The chapter text uses the verse reader.
  areaSpeak(e) {
    var b = e && e.currentTarget; var el = b && b.closest ? b.closest('[data-focus]') : null;
    if (!el) return;
    if (el.getAttribute('data-focus') === 'text' && this._chapterPlay) {
      var t = this._tts;
      this.pageStop(true);
      if (t && (t.status === 'playing' || t.status === 'paused')) this.ttsStop(false); else this._chapterPlay();
      return;
    }
    if (this._ps && this._ps.on && this._psArea === el) { this.pageStop(); return; }
    this.pageSpeak([el], el);
  }

  pageSpeak(roots, area) {
    if (this._ps && this._ps.on && !roots) { this.pageStop(); return; }
    if (this._ps && this._ps.on) this.pageStop(true);
    this.ttsStop(true);
    var parts = [];
    this.pageSpeakItems(roots).forEach(function (it) {
      var cur = '';
      it.text.split(/(?<=[.!?])\s+/).forEach(function (sent) {
        if ((cur + ' ' + sent).length > 220 && cur) { parts.push({ el: it.el, text: cur }); cur = sent; } else cur = cur ? cur + ' ' + sent : sent;
      });
      if (cur) parts.push({ el: it.el, text: cur });
    });
    if (!parts.length) { this.showToast('Nothing to read here.'); return; }
    this._psParts = parts;
    this._psArea = area || null;
    if (area) area.classList.add('be-reading');
    this.pageSpeakFrom(0);
  }

  // Highlight the block being read and bring it into view.
  pageMark(i) {
    var parts = this._psParts || [];
    if (this._psEl) this._psEl.classList.remove('be-speaking');
    var p = parts[i];
    this._psEl = p ? p.el : null;
    if (!this._psEl || !this._psEl.isConnected) return;
    this._psEl.classList.add('be-speaking');
    this.followEl(this._psEl);
  }

  pageSpeakFrom(start) {
    var self = this, synth = window.speechSynthesis, parts = this._psParts || [];
    if (!parts.length) return;
    start = Math.max(0, Math.min(parts.length - 1, start));
    var gen = ((this._ps && this._ps.gen) || 0) + 1;
    var st = this.state || {};
    this._ps = { on: true, gen: gen, idx: start, total: parts.length, tab: st.tab || this.props.startTab || 'overview' };
    var voice = this.ttsVoice();
    synth.cancel();
    this.pageMark(start);
    parts.slice(start).forEach(function (p, j) {
      var i = start + j;
      var u = new window.SpeechSynthesisUtterance(p.text);
      u.lang = voice ? voice.lang : 'en-US';
      if (voice) u.voice = voice;
      u.onstart = function () { if (self._ps && self._ps.gen === gen) { self._ps.idx = i; self.pageMark(i); self.forceUpdate(); } };
      if (i === parts.length - 1) u.onend = function () { if (self._ps && self._ps.gen === gen) { self._ps.on = false; self.pageMark(-1); if (self._psArea) { self._psArea.classList.remove('be-reading'); self._psArea = null; } self.forceUpdate(); } };
      synth.speak(u);
    });
    this.forceUpdate();
  }

  pagePause() {
    if (!this._ps || !this._ps.on) return;
    try { if (this._ps.paused) window.speechSynthesis.resume(); else window.speechSynthesis.pause(); } catch (err) {}
    this._ps.paused = !this._ps.paused;
    this.forceUpdate();
  }

  pageSkip(d) {
    if (!this._ps || !this._ps.on) return;
    this.pageSpeakFrom((this._ps.idx || 0) + d);
  }

  // Jump forward or back by verses in the chapter being read aloud.
  ttsSkip(d) {
    var t = this._tts;
    if (!t || !t.verses || (t.status !== 'playing' && t.status !== 'paused')) return;
    var v = Math.max(1, Math.min(t.verses.length, (t.verse || 1) + d));
    this.ttsStart(t.verses, v, t.title, t.key);
  }

  pageStop(quiet) {
    if (this._psEl) { this._psEl.classList.remove('be-speaking'); this._psEl = null; }
    if (this._psArea) { this._psArea.classList.remove('be-reading'); this._psArea = null; }
    var gen = ((this._ps && this._ps.gen) || 0) + 1;
    this._ps = { on: false, gen: gen };
    try { window.speechSynthesis.cancel(); } catch (err) {}
    if (!quiet) this.forceUpdate();
  }

  // ----- Export a table as a CSV file (opens in Excel, Numbers or Google Sheets) -----
  exportCSV(name, rows) {
    var esc = function (v) { v = v == null ? '' : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    var csv = '﻿' + rows.map(function (r) { return r.map(esc).join(','); }).join('\r\n');
    try {
      var url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
      var a = document.createElement('a');
      a.href = url; a.download = name + '.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      this.showToast('Downloaded ' + name + '.csv');
    } catch (err) { this.showToast('Export isn’t available in this browser.'); }
  }

  // ----- Links that open a specific view (?tab=read&book=jhn&chap=3) -----
  // ----- Browser history: each view (page, book, chapter, era, topic) gets its own entry, so Back works -----
  histView() {
    var st = this.state || {}, v = {};
    HIST_KEYS.forEach(function (k) { v[k] = st[k] == null || st[k] === '' ? null : st[k]; });
    if (v.tab !== 'search') v.q = null;
    return v;
  }
  histUrl(v) {
    var q = new URLSearchParams();
    HIST_KEYS.forEach(function (k) { if (v[k] != null) q.set(k, String(v[k])); });
    var qs = q.toString();
    return window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
  }
  histSync() {
    if (typeof window === 'undefined' || !window.history || !window.history.pushState) return;
    var v = this.histView(), k = JSON.stringify(v);
    if (k === this._histKey) return;
    var prev = this._histPrev;
    this._histKey = k; this._histPrev = v;
    try {
      if (this._histRestoring || !prev) {
        this._histRestoring = false;
        if (!prev) window.history.replaceState({ be: 1, v: v, depth: this._histDepth || 0, y: 0 }, '', this.histUrl(v));
        return;
      }
      // Typing in search, or switching translation, updates the current entry instead of adding one.
      var minor = HIST_KEYS.every(function (x) { return x === 'q' || x === 'tr' || prev[x] === v[x]; });
      if (minor) { window.history.replaceState({ be: 1, v: v, depth: this._histDepth || 0, y: window.scrollY }, '', this.histUrl(v)); return; }
      var cur = window.history.state || {};
      window.history.replaceState(Object.assign({}, cur, { y: window.scrollY }), '');
      this._histDepth = (this._histDepth || 0) + 1;
      window.history.pushState({ be: 1, v: v, depth: this._histDepth, y: 0 }, '', this.histUrl(v));
      if (this._histDepth === 1) { var me = this; setTimeout(function () { me.forceUpdate(); }, 0); }
    } catch (err) {}
  }
  histPop(e) {
    var hs = e && e.state;
    if (!hs || !hs.be) return;
    this._histRestoring = true;
    this._histDepth = hs.depth || 0;
    var v = hs.v || {}, patch = {};
    HIST_KEYS.forEach(function (k) { patch[k] = v[k] == null ? null : v[k]; });
    if (patch.tr) this.loadText(patch.tr);
    this.setState(patch);
    var y = hs.y || 0;
    setTimeout(function () { window.scrollTo(0, y); }, 60);
  }
  histBack() { try { window.history.back(); } catch (err) {} }

  readLink() {
    var q;
    try { q = new URLSearchParams(window.location.search); } catch (err) { return; }
    var patch = {};
    var tabs = ['overview', 'library', 'story', 'timeline', 'themes', 'compare', 'practice', 'read', 'search', 'about'];
    var tab = q.get('tab');
    if (tab && tabs.indexOf(tab) >= 0) patch.tab = tab;
    var book = q.get('book');
    if (book && findBook(book)) patch.book = book;
    var chap = parseInt(q.get('chap'), 10);
    if (chap > 0) patch.chap = chap;
    var era = parseInt(q.get('era'), 10);
    if (era >= 1 && era <= 11) patch.era = era;
    var theme = q.get('theme');
    if (theme && THEMES.some(function (t) { return t.id === theme; })) patch.theme = theme;
    var tr = q.get('tr');
    if (tr === 'kjv' || tr === 'bsb') { patch.tr = tr; this.loadText(tr); }
    if (q.get('q')) patch.q = q.get('q');
    if (q.get('prMode') === 'trad' || q.get('prMode') === 'practice') patch.prMode = q.get('prMode');
    if (q.get('prId') && PRACTICES.some(function (x) { return x.id === q.get('prId'); })) patch.prId = q.get('prId');
    if (q.get('prTrad') && TRAD_NAME[q.get('prTrad')]) patch.prTrad = q.get('prTrad');
    if (q.get('cmpMode') === 'fw' || q.get('cmpMode') === 'trad') patch.cmpMode = q.get('cmpMode');
    if (q.get('cmpFam') && FW_FAMILIES.some(function (f) { return f.id === q.get('cmpFam'); })) patch.cmpFam = q.get('cmpFam');
    if (['all', 'OT', 'NT', 'AP'].indexOf(q.get('testa')) >= 0) patch.testa = q.get('testa');
    if (q.get('libCanon') && CANONS[q.get('libCanon')]) patch.libCanon = q.get('libCanon');
    if (q.get('srMode') === 'topics') patch.srMode = 'topics';
    if (q.get('topic') && TOPICS.some(function (x) { return x.id === q.get('topic'); })) patch.topic = q.get('topic');
    if (Object.keys(patch).length) this.setState(patch);
  }

  showToast(text) {
    var self = this;
    this._toast = { text: text, show: true };
    this.forceUpdate();
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(function () { self._toast = { text: '', show: false }; self.forceUpdate(); }, 3200);
  }

  // ----- Read aloud (the browser's built-in speech) -----
  ttsSupported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance !== 'undefined';
  }

  // English voices on this device, most natural-sounding first.
  ttsVoices() {
    var voices = [];
    try { voices = window.speechSynthesis.getVoices() || []; } catch (err) {}
    var en = voices.filter(function (v) { return /^en(-|_|$)/i.test(v.lang); });
    var score = function (v) {
      var n = v.name, sc = 0;
      if (/\(natural\)|natural|neural/i.test(n)) sc += 8;           // Edge / Windows online neural voices
      if (/premium/i.test(n)) sc += 7;                               // Apple premium voices
      if (/enhanced|siri/i.test(n)) sc += 6;                         // Apple enhanced and Siri voices
      if (/^google /i.test(n)) sc += 5;                              // Chrome's online Google voices
      if (/ava|zoe|evan|nathan|samantha|daniel|aria|jenny|guy|allison|serena|karen|moira|tom|susan/i.test(n)) sc += 2;
      if (/compact|espeak|robot|novelty|bad news|bells|boing|bubbles|cellos|whisper|zarvox|trinoids|organ|jester|superstar|wobble|albert|fred|junior|ralph|kathy|bahh/i.test(n)) sc -= 10;
      if (/^en-us/i.test(v.lang)) sc += 1;
      return sc;
    };
    return en.slice().sort(function (a, b) { return score(b) - score(a) || a.name.localeCompare(b.name); });
  }
  ttsVoice() {
    var list = this.ttsVoices();
    if (!list.length) return null;
    var want = null;
    try { want = window.localStorage.getItem('bibleExplorer.voice'); } catch (err) {}
    return list.filter(function (v) { return v.voiceURI === want; })[0] || list[0];
  }

  // Keep the block being read comfortably on screen: inside any scrolling box it sits in, and in the page,
  // clear of the sticky header and the player bar at the bottom.
  followEl(el) {
    if (!el || !el.isConnected) return;
    var smooth = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var a = el.parentElement;
    while (a && a !== document.body && a !== document.documentElement) {
      var cs = getComputedStyle(a);
      if (/(auto|scroll)/.test(cs.overflowY) && a.scrollHeight > a.clientHeight + 2) {
        var r = el.getBoundingClientRect(), cr = a.getBoundingClientRect();
        var bar = cs.position === 'fixed' ? this.playerHeight() : 0;
        var top = cr.top + 24, bottom = cr.bottom - bar - 24;
        if (r.top < top || r.bottom > bottom) {
          var d = r.top - cr.top - Math.max(24, (cr.height - bar - r.height) * 0.35);
          a.scrollTo({ top: a.scrollTop + d, behavior: smooth ? 'smooth' : 'auto' });
        }
        if (cs.position === 'fixed') return;
      }
      a = a.parentElement;
    }
    var rr = el.getBoundingClientRect(), vh = window.innerHeight;
    var hb = this.playerHeight();
    var bandTop = 90, bandBottom = vh - hb - 40;
    if (rr.top < bandTop || rr.bottom > bandBottom) {
      var target = window.scrollY + rr.top - Math.max(bandTop, (vh - hb) * 0.3);
      window.scrollTo({ top: Math.max(0, target), behavior: smooth ? 'smooth' : 'auto' });
    }
  }
  playerHeight() {
    var pb = document.querySelector('[data-player]');
    return pb ? pb.getBoundingClientRect().height + 24 : 0;
  }

  ttsStart(verses, fromVerse, title, key) {
    var self = this, synth = window.speechSynthesis;
    var t = this._tts || {};
    var gen = (t.gen || 0) + 1;
    var rate = t.rate || 1;
    synth.cancel();
    this._ps = { on: false, gen: ((this._ps && this._ps.gen) || 0) + 1 };
    this._tts = { status: 'playing', verse: fromVerse, total: verses.length, key: key, gen: gen, rate: rate, title: title, verses: verses };
    var voice = this.ttsVoice();
    var make = function (text) {
      var u = new window.SpeechSynthesisUtterance(text);
      u.rate = rate; u.lang = voice ? voice.lang : 'en-US';
      if (voice) u.voice = voice;
      return u;
    };
    this._utts = [];
    if (fromVerse === 1) this._utts.push(make(title + '.'));
    verses.slice(fromVerse - 1).forEach(function (text, i) {
      var n = fromVerse + i;
      if (!text || text === '\u2026') return;
      var u = make(text.replace(/[\[\]]/g, ''));
      u.onstart = function () {
        if (!self._tts || self._tts.gen !== gen) return;
        self._tts.verse = n;
        self.forceUpdate();
        self.followEl(document.getElementById('v-' + n));
      };
      if (n === verses.length) {
        u.onend = function () {
          if (!self._tts || self._tts.gen !== gen) return;
          self._tts.status = 'done';
          self.forceUpdate();
        };
      }
      self._utts.push(u);
    });
    this._utts.forEach(function (u) { synth.speak(u); });
    this.forceUpdate();
  }

  ttsStop(quiet) {
    var t = this._tts || {};
    this._tts = { status: 'idle', verse: 0, gen: (t.gen || 0) + 1, rate: t.rate || 1 };
    try { window.speechSynthesis.cancel(); } catch (err) {}
    if (!quiet) this.forceUpdate();
  }

  isPhoneScreen() {
    var sw = (window.screen && window.screen.width) || window.innerWidth;
    return sw < 720;
  }

  // Desktop view on a phone: lay the page out at desktop width and let the browser zoom it to fit.
  setDesktopView(on) {
    var meta = document.querySelector('meta[name="viewport"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); document.head.appendChild(meta); }
    // Scale the 1280px desktop layout to the phone's width. Pinning minimum and maximum scale for a moment makes
    // mobile Safari apply the new zoom instead of keeping the old one (which shows only the top-left corner).
    var DW = 1280;
    var sw = (window.screen && window.screen.width) || window.innerWidth, sh = (window.screen && window.screen.height) || window.innerHeight;
    var land = window.matchMedia ? window.matchMedia('(orientation: landscape)').matches : sw > sh;
    var cw = land ? Math.max(sw, sh) : Math.min(sw, sh);
    var k = Math.max(0.1, Math.min(1, Math.round((cw / DW) * 1000) / 1000));
    meta.setAttribute('content', on
      ? 'width=' + DW + ', initial-scale=' + k + ', minimum-scale=' + k + ', maximum-scale=' + k
      : 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1');
    clearTimeout(this._vpT);
    this._vpT = setTimeout(function () {
      meta.setAttribute('content', on
        ? 'width=' + DW + ', initial-scale=' + k + ', minimum-scale=' + k + ', maximum-scale=5'
        : 'width=device-width, initial-scale=1');
    }, 400);
    try { window.localStorage.setItem('bibleExplorer.desktopView', on ? '1' : '0'); } catch (err) {}
    var self = this;
    this.setState({ desktopView: on }, function () { if (self._reNarrow) { self._reNarrow(); setTimeout(self._reNarrow, 500); } });
    window.scrollTo(0, 0);
  }

  scrollToId(id) {
    setTimeout(function () {
      var el = document.getElementById(id);
      if (el && el.scrollIntoView) el.scrollIntoView({ block: (id === 'reader-top' || id === 'book-card') ? 'start' : 'center', behavior: 'smooth' });
    }, 150);
  }

  renderVals() {
    var self = this;
    var st = this.state || {};
    var tab = st.tab || this.props.startTab || 'overview';
    var bookId = st.book || 'gen';
    var eraN = st.era || 1;
    var themeId = st.theme || 'covenant';
    var testa = st.testa || 'all';
    var q = st.q || '';
    var go = function (patch) { self.setState(patch); };
    var INK = '#231E19';
    var PAPER = '#FBF7EF';

    var tr = st.tr || 'bsb';
    var text = (this._texts || {})[tr];
    var failed = (this._failed || {})[tr] === true;
    var chap = st.chap || 1;
    var hl = st.hl || 0;
    var scope = st.scope || 'all';
    var openChap = function (id, c, v) {
      go({ tab: 'read', book: id, chap: c, hl: v || 0 });
      self.scrollToId(v ? 'v-' + v : 'reader-top');
    };
    var trBtns = ['bsb', 'kjv'].map(function (t) {
      var on = tr === t;
      return { label: t.toUpperCase(), title: TR_NAMES[t], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ tr: t }); self.loadText(t); } };
    });

    // Story = Storyline + Timeline; Traditions = beliefs, frameworks and practice.
    var TAB_GROUPS = { story: ['story', 'timeline'], compare: ['compare', 'practice'] };
    var tabs = [['overview','Overview'],['library','Library'],['story','Story'],['themes','Themes'],['compare','Traditions'],['read','Read'],['search','Search'],['about','About']].map(function (t) {
      var grp = TAB_GROUPS[t[0]] || [t[0]];
      var on = grp.indexOf(tab) >= 0;
      return { id: t[0], label: t[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ tab: t[0] }); window.scrollTo(0, 0); } };
    });
    var seg = function (items, cur) {
      return items.map(function (it) {
        var on = it[0] === cur;
        return { label: it[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go(it[2]); } };
      });
    };
    var storyViews = seg([['story', 'Storyline', { tab: 'story' }], ['timeline', 'Timeline', { tab: 'timeline' }]], tab);
    var tradView = tab === 'practice' ? 'practice' : (st.cmpMode === 'fw' ? 'fw' : 'trad');
    var tradViews = seg([['trad', 'Beliefs', { tab: 'compare', cmpMode: 'trad', cmpReg: null }], ['fw', 'Frameworks', { tab: 'compare', cmpMode: 'fw', cmpReg: null }], ['practice', 'Practice', { tab: 'practice' }]], tradView);

    var ring = function (b) { return b.id === bookId ? '3px solid ' + INK : '3px solid transparent'; };
    // On phones the book card sits below the content, so bring it into view when a book is picked.
    // The side panel starts open only on Overview, Read and Search; elsewhere it opens when a book is picked.
    var asideMap = st.asideOpenMap || {};
    var asideOpen = asideMap[tab] != null ? !!asideMap[tab] : ['overview', 'read', 'search'].indexOf(tab) >= 0;
    var pickBook = function (id) {
      var patch = { book: id, chap: 1, hl: 0 };
      if (!asideOpen) { var am = Object.assign({}, asideMap); am[tab] = true; patch.asideOpenMap = am; }
      go(patch);
      if (window.innerWidth < 900) self.scrollToId('book-card');
    };
    var chip = function (b) {
      return { name: b.name, bg: DIVM[b.div].color, ring: ring(b), pick: function () { pickBook(b.id); } };
    };

    // Overview
    var segments = DIVS.map(function (d) { return { ch: d.ch, bg: d.color, label: d.name + ': ' + d.ch + ' chapters' }; });
    // Open the Library's shelves and scroll to one division, clearing the sticky header on phones.
    var jumpLib = function (divId, extra) {
      go(Object.assign({ tab: 'library', testa: 'all', libCanon: 'protestant', q: '' }, extra || {}));
      var tries = 0;
      (function seek() {
        var el = document.getElementById('lib-div-' + divId);
        if (!el) { if (tries++ < 30) setTimeout(seek, 50); return; }
        var h = document.querySelector('header');
        var off = h && getComputedStyle(h).position === 'sticky' ? h.offsetHeight + 12 : 16;
        window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - off), behavior: 'auto' });
      })();
    };
    var legend = DIVS.map(function (d) {
      return { name: d.name, bg: d.color, meta: d.count + (d.count === 1 ? ' book' : ' books') + ' · ' + d.ch + ' ch', pick: function () { jumpLib(d.id); } };
    });

    // Traditions (canons) on the Overview
    var canonId = CANONS[st.canon] ? st.canon : 'protestant';
    var canonBtns = CANON_CARDS.map(function (c) {
      var on = c[0] === canonId;
      return { num: c[1], name: c[2], desc: c[3], pressed: on, bg: on ? '#F5EFE3' : '#FFFDF8', border: on ? '2px solid #231E19' : '1px solid #D9CDB8', pick: function () { go({ canon: c[0] }); } };
    });
    var CK = CANONS[canonId];
    var canon = { title: CK.title, intro: CK.intro, groups: CK.groups.map(function (g) {
      return { name: g[0], note: g[1], hasNote: !!g[1], hasItems: g[2].length > 0, items: g[2].map(function (it) {
        var b = it[1] ? findBook(it[1]) : null;
        var extra = it[2];
        return {
          label: it[0], disabled: !b, title: extra ? 'Not in the Protestant Bible' : '',
          bg: extra ? '#FFFDF8' : (b ? DIVM[b.div].color : '#E3DACA'),
          fg: extra ? '#231E19' : '#FFFFFF',
          border: extra ? '2px dashed #8C7A58' : '2px solid transparent',
          pick: function () { if (b) { go({ tab: 'library', testa: 'all', book: b.id, chap: 1, hl: 0, asideOpenMap: Object.assign({}, asideMap, { library: true }) }); } }
        };
      }) };
    }) };

    // Library arrangement by tradition: the default shelves by type, or the order another tradition uses.
    var libCanon = CANONS[st.libCanon] ? st.libCanon : 'protestant';
    var libCanons = CANON_CARDS.map(function (c) {
      var on = c[0] === libCanon;
      return { label: c[2] + ' · ' + c[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ libCanon: c[0] }); } };
    });
    var libArr = null;
    if (libCanon !== 'protestant') {
      var LC = CANONS[libCanon];
      var isTan = libCanon === 'tanakh';
      libArr = {
        title: LC.title, intro: LC.intro,
        groups: LC.groups.map(function (g) {
          var items = g[2].length ? g[2] : (/New Testament/.test(g[0]) ? BOOKS.filter(function (b) { return ['gosp', 'acts', 'paul', 'gen', 'rev'].indexOf(b.div) >= 0; }).map(function (b) { return [b.name, b.id, false]; }) : []);
          return { name: g[0], note: g[1], hasNote: !!g[1],
            tiles: items.map(function (it) {
              var b = it[1] ? findBook(it[1]) : null;
              var ids = isTan && CANON_COMBO[it[1]] ? CANON_COMBO[it[1]] : (it[1] ? [it[1]] : []);
              var ch = ids.reduce(function (a, id) { var x = findBook(id); return a + (x ? x.ch : 0); }, 0);
              var extra = it[2];
              var nm = it[0].replace(/^\+ /, '');
              return { name: nm, add: /^\+ /.test(it[0]), ch: nm === 'Letter of Jeremiah' ? 'Baruch ch. 6 here' : ch ? ch + ' ch' : 'no text here', pressed: !!(b && b.id === bookId),
                bg: extra ? '#FFFDF8' : (b && DIVM[b.div] ? DIVM[b.div].color : '#6B5F52'), fg: extra ? '#231E19' : '#FFFFFF',
                border: extra ? '2px dashed #8C7A58' : 'none', disabled: !b,
                aria: nm + (ch ? ', ' + ch + ' chapters' : '') + (extra ? ', not in the Protestant Bible' : '') + (ids.length > 1 ? ', counted as one book' : ''),
                pick: function () { if (b) pickBook(b.id); } };
            }) };
        })
      };
    }

    // Library
    var filters = [['all','All'],['OT','Old Testament'],['NT','New Testament'],['AP','Beyond the Protestant Bible']].map(function (f) {
      var on = testa === f[0];
      return { label: f[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ testa: f[0] }); } };
    });
    var LIBDIVS = DIVS.slice(0, 5).concat([XDIV], DIVS.slice(5));
    var divisions = LIBDIVS.filter(function (d) { return testa === 'all' || d.t === testa; }).map(function (d) {
      var isAp = d.id === 'apoc';
      var bs = (isAp ? XBOOKS : BOOKS.filter(function (b) { return b.div === d.id; })).map(function (b) {
        return {
          abbr: b.abbr, name: b.name, ch: b.ch, ring: ring(b), pressed: b.id === bookId,
          bg: isAp ? '#FFFDF8' : d.color, fg: isAp ? '#231E19' : '#FFFFFF', border: isAp ? '2px dashed #8C7A58' : 'none',
          barTrack: isAp ? '#EAE1D0' : 'rgba(255,255,255,0.28)', barFill: isAp ? '#8C7A58' : '#FFFFFF',
          aria: b.name + ', ' + b.ch + ' chapters' + (isAp ? ', not in the Protestant Bible' : ''),
          pct: Math.max(4, Math.round(Math.sqrt(b.ch / 150) * 100)),
          pick: function () { pickBook(b.id); }
        };
      });
      var meta = (d.tag ? d.tag + ' · ' : '') + d.count + (d.count === 1 ? ' book' : ' books') + ' · ' + d.ch + ' chapters';
      // The overview's "how the parts fit together" detail, shown once per part (Prophets and Letters span two divisions).
      var pt = PARTS.filter(function (q) { return q.divs.indexOf(d.id) >= 0; })[0];
      var first = pt && pt.divs.filter(function (x) { return LIBDIVS.some(function (L) { return L.id === x && (testa === 'all' || L.t === testa); }); })[0] === d.id;
      var open = !!(pt && (st.libMore || {})[pt.id]);
      return { domId: 'lib-div-' + d.id, name: d.name, color: d.color, blurb: d.blurb, meta: meta, books: bs, has: bs.length > 0, note: d.note || '', hasNote: !!d.note,
        hasPart: !!(pt && first), partName: pt ? pt.name : '', partShort: pt ? pt.short : '', partBg: pt ? pt.bg : '#FFFDF8', partColor: pt ? pt.color : d.color,
        partSpan: pt && pt.divs.length > 1 ? 'Covers ' + pt.divs.map(function (x) { return DIVM[x] ? DIVM[x].name : x; }).join(' and ') + '.' : '',
        partOpen: open, partChev: open ? 180 : 0, partLabel: open ? 'Show less' : 'Read more', partAria: (open ? 'Show less about ' : 'Read more about ') + (pt ? pt.name : ''),
        partToggle: function () { var o = Object.assign({}, st.libMore || {}); o[pt.id] = !open; go({ libMore: o }); },
        partMore: pt && open ? paras(pt.more) : [],
        partRefs: pt && open ? pt.refs.map(function (r) { return { label: r[2], pick: function () { openChap(r[0], r[1], 0); } }; }) : [] };
    }).filter(function (d) { return d.has; });

    // Storyline
    var A0 = ARC.filter(function (a) { return a.id === st.arc; })[0];
    if (!A0 || (A0.eras.length && A0.eras.indexOf(eraN) < 0)) A0 = ARC.filter(function (a) { return a.eras.indexOf(eraN) >= 0; })[0] || ARC[0];
    var arc = ARC.map(function (a) {
      var on = a === A0;
      return { label: a.label, span: a.span, col: a.col, pressed: on, tip: a.title,
        bg: on ? a.color : '#FFFDF8', fg: on ? '#FFFFFF' : INK, sub: on ? 'rgba(255,255,255,0.85)' : '#6B5F52', border: a.color,
        line: on ? a.color : '#CDBFA6', lw: on ? 3 : 2,
        pick: function () { go({ arc: a.id, era: a.eras.length ? a.eras[0] : eraN }); } };
    });
    var ai = ARC.indexOf(A0);
    var arcSel = {
      n: ai + 1, label: A0.label, title: A0.title, text: A0.text, span: A0.span, color: A0.color,
      refs: A0.refs.map(function (r) { return { label: r[2], pick: function () { openChap(r[0], r[1], 0); } }; }),
      eraChips: A0.eras.map(function (n) { var on = n === eraN; return { label: n + '. ' + ERAS[n - 1].name, pressed: on, bg: on ? INK : '#F5EFE3', fg: on ? PAPER : INK, pick: function () { go({ era: n, arc: A0.id }); } }; }),
      hasEras: A0.eras.length > 0, isFuture: A0.eras.length === 0, showTimeline: !!A0.timeline,
      eraIntro: A0.eras.length > 1 ? 'This movement spans ' + A0.eras.length + ' eras:' : 'This movement happens in era ' + (A0.eras[0] || '') + ':',
      goTimeline: function () { go({ tab: 'timeline', tlSpan: 2035 - 30, tlC: (30 + 2035) / 2 }); window.scrollTo(0, 0); },
      prevLabel: ai > 0 ? '\u2190 ' + ARC[ai - 1].label : '', nextLabel: ai < ARC.length - 1 ? ARC[ai + 1].label + ' \u2192' : '',
      hasPrev: ai > 0, hasNext: ai < ARC.length - 1,
      goPrev: function () { var a = ARC[ai - 1]; if (a) go({ arc: a.id, era: a.eras.length ? a.eras[0] : eraN }); },
      goNext: function () { var a = ARC[ai + 1]; if (a) go({ arc: a.id, era: a.eras.length ? a.eras[0] : eraN }); }
    };
    var futureOn = A0.id === 'newc';
    var future = { pressed: futureOn, bg: futureOn ? INK : '#FFFDF8', fg: futureOn ? PAPER : INK, sub: futureOn ? '#D9CDB8' : '#6B5F52', border: futureOn ? INK : '#8A6A1E',
      pick: function () { go({ arc: 'newc' }); } };
    var eras = ERAS.map(function (e) {
      var on = e.n === eraN;
      var inArc = A0.eras.indexOf(e.n) >= 0;
      return {
        n: e.n, name: e.name, dates: e.dates, pressed: on, col: ((e.n - 1) * 2 + 1) + ' / span 2',
        bar: inArc ? A0.color : 'transparent',
        bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, sub: on ? '#D9CDB8' : '#6B5F52', border: on ? INK : inArc ? A0.color : '#E2D8C6',
        dotBg: on ? PAPER : '#EAE1D0', dotFg: INK,
        pick: function () { go({ era: e.n }); }
      };
    });
    var E = ERAS[eraN - 1];
    var eraBooks = BOOKS.filter(function (b) { return b.eras.indexOf(eraN) >= 0; }).map(chip);
    var era = { n: E.n, name: E.name, dates: E.dates, sum: E.sum, people: E.people, books: eraBooks, hasBooks: eraBooks.length > 0, noBooks: eraBooks.length === 0 };
    var eraOpen = !!st.moreEra;
    Object.assign(era, { more: paras(MORE_ERAS[String(E.n)]), moreOpen: eraOpen, moreChevron: eraOpen ? 180 : 0,
      moreLabel: eraOpen ? 'Show less' : 'Read more about this era',
      toggleMore: function () { go({ moreEra: !eraOpen }); } });

    // Themes
    var T = THEMES.filter(function (t) { return t.id === themeId; })[0] || THEMES[0];
    var themeBtns = THEMES.map(function (t) {
      var on = t.id === T.id;
      return { name: t.name, short: t.short, pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, sub: on ? '#D9CDB8' : '#6B5F52', border: on ? INK : '#E2D8C6', pick: function () { go({ theme: t.id }); } };
    });
    var strip = BOOKS.map(function (b) {
      var inT = T.books.indexOf(b.id) >= 0;
      return { name: b.name + (inT ? ' — part of this thread' : ''), bg: inT ? DIVM[b.div].color : '#E3DACA', pick: function () { pickBook(b.id); } };
    });
    var theme = { name: T.name, ot: T.ot, nt: T.nt, books: BOOKS.filter(function (b) { return T.books.indexOf(b.id) >= 0; }).map(chip) };
    var themeOpen = !!st.moreTheme;
    Object.assign(theme, { more: paras(MORE_THEMES[T.id]), moreOpen: themeOpen, moreChevron: themeOpen ? 180 : 0,
      moreLabel: themeOpen ? 'Show less' : 'Read more about this theme',
      toggleMore: function () { go({ moreTheme: !themeOpen }); } });

    // Selected book
    var B = findBook(bookId) || BOOKS[0];
    var isX = !!B.extra;
    var D = DIVM[B.div];
    var LIST = isX ? XBOOKS : BOOKS;
    var pos = isX ? B.xidx : B.idx;
    var prev = LIST[pos - 1];
    var next = LIST[pos + 1];
    var extraNote = isX ? 'Included in ' + B.trad + (B.hasText ? ', and in the 1611 King James Bible\u2019s Apocrypha' : '') + '. Protestant and Jewish Bibles don\u2019t include it as Scripture.' : '';
    var bThemes = THEMES.filter(function (t) { return t.books.indexOf(B.id) >= 0; }).map(function (t) {
      return { label: t.name, pick: function () { go({ tab: 'themes', theme: t.id }); } };
    });
    var sel = {
      name: B.name, sum: B.sum, people: B.people, color: D.color,
      kicker: isX ? 'Deuterocanonical / Apocrypha' : (D.t === 'OT' ? 'Old Testament' : 'New Testament') + ' · ' + D.name,
      position: isX ? (B.ch + (B.ch === 1 ? ' chapter' : ' chapters')) : 'Book ' + (B.idx + 1) + ' of 66 · ' + B.ch + (B.ch === 1 ? ' chapter' : ' chapters'),
      isExtra: isX, extraNote: extraNote,
      canRead: (!isX || B.hasText) && tab !== 'read', readLabel: isX ? 'Read ' + B.name + ' (King James Apocrypha)' : 'Read ' + B.name,
      showThemes: !isX, showLength: !isX, showMap: true,
      eras: B.eras.map(function (n) { return { label: ERAS[n - 1].name, pick: function () { go({ tab: 'story', era: n }); } }; }),
      themes: bThemes, hasThemes: bThemes.length > 0, noThemes: bThemes.length === 0,
      pct: Math.max(1, Math.round(B.ch / 150 * 100)),
      lengthLabel: (B.ch / 1189 * 100).toFixed(1) + '% of the Bible',
      prevName: prev ? prev.name : 'Start', nextName: next ? next.name : 'End',
      noPrev: !prev, noNext: !next,
      prevOpacity: prev ? 1 : 0.45, nextOpacity: next ? 1 : 0.45,
      goPrev: function () { if (prev) go({ book: prev.id, chap: 1, hl: 0 }); },
      goNext: function () { if (next) go({ book: next.id, chap: 1, hl: 0 }); },
      read: function () { openChap(B.id, B.chFirst || 1, 0); }
    };
    var moreFor = function (text, key, label) {
      var open = !!st[key];
      return {
        more: paras(text), moreOpen: open, moreChevron: open ? 180 : 0,
        moreLabel: open ? 'Show less' : label,
        toggleMore: function () { var o = {}; o[key] = !open; go(o); }
      };
    };
    Object.assign(sel, moreFor(MORE_BOOKS[B.id], 'moreBook', 'Read more about ' + B.name));

    // Reader
    var lo = B.chFirst || 1, hi = lo + B.ch - 1;
    var C = Math.min(Math.max(lo, chap), hi);
    if (isX && B.hasText) this.loadText('apoc');
    var srcText = isX ? (this._texts || {}).apoc : text;
    var srcFailed = isX ? (this._failed || {}).apoc === true : failed;
    var chapArr = !srcText ? null : isX ? (B.hasText ? srcText[B.id][C - lo] : null) : srcText[B.idx][C - 1];
    var ttsKey = (isX ? 'apoc' : tr) + '|' + B.id + '|' + C;
    if (this._ps && this._ps.on && this._ps.tab !== tab) this.pageStop(true);
    var tt = this._tts || { status: 'idle', verse: 0, rate: 1 };
    if (tt.status !== 'idle' && (tt.key !== ttsKey || tab !== 'read')) { this.ttsStop(true); tt = this._tts; }
    var ttsOn = tt.status === 'playing' || tt.status === 'paused';
    var verses = chapArr ? chapArr.map(function (t, i) {
      return { n: i + 1, id: 'v-' + (i + 1), text: t, bg: (ttsOn && (i + 1) === (st.seekV != null ? st.seekV : tt.verse)) ? '#DCE8F0' : (i + 1) === hl ? '#F6E2A8' : 'transparent' };
    }).filter(function (v) { return v.text !== '\u2026'; }) : [];
    // Previous / next readable book (extra books without text are skipped)
    var withX = !!st.withX;
    var SEQ = withX ? READ_ORDER_X.map(findBook).filter(function (b) { return b && (!b.extra || b.hasText); }) : LIST;
    var spos = SEQ.indexOf(B);
    if (spos < 0) { SEQ = LIST; spos = pos; }
    var stepBook = function (dir) {
      for (var k = spos + dir; k >= 0 && k < SEQ.length; k += dir) { if (!SEQ[k].extra || SEQ[k].hasText) return SEQ[k]; }
      return null;
    };
    var pb = stepBook(-1), nb = stepBook(1);
    var lastCh = function (b) { return (b.chFirst || 1) + b.ch - 1; };
    var pc = C > lo ? { id: B.id, c: C - 1, label: B.name + ' ' + (C - 1) } : (pb ? { id: pb.id, c: lastCh(pb), label: pb.name + ' ' + lastCh(pb) } : null);
    var nc = C < hi ? { id: B.id, c: C + 1, label: B.name + ' ' + (C + 1) } : (nb ? { id: nb.id, c: nb.chFirst || 1, label: nb.name + ' ' + (nb.chFirst || 1) } : null);
    var chapOpts = [];
    for (var ci = lo; ci <= hi; ci++) chapOpts.push({ v: String(ci), label: 'Chapter ' + ci });
    var rawVerses = chapArr || [];
    var spokenTitle = B.name + ', chapter ' + C;
    var tts = {
      supported: this.ttsSupported(),
      active: ttsOn,
      showPlay: tt.status !== 'playing', showPause: tt.status === 'playing',
      label: tt.status === 'playing' ? 'Pause' : tt.status === 'paused' ? 'Resume' : tt.status === 'done' ? 'Listen again' : 'Listen to this chapter',
      status: tt.status === 'playing' ? 'Reading verse ' + tt.verse + ' of ' + rawVerses.length
        : tt.status === 'paused' ? 'Paused at verse ' + tt.verse
        : tt.status === 'done' ? 'Finished ' + B.name + ' ' + C + '.'
        : 'Read aloud by your device\u2019s built-in voice.',
      rateVal: String(tt.rate || 1),
      playPause: function () {
        var cur = self._tts || {};
        if (cur.status === 'playing') { try { window.speechSynthesis.pause(); } catch (err) {} cur.status = 'paused'; self.forceUpdate(); return; }
        if (cur.status === 'paused') { try { window.speechSynthesis.resume(); } catch (err) {} cur.status = 'playing'; self.forceUpdate(); return; }
        self.ttsStart(rawVerses, 1, spokenTitle, ttsKey);
      },
      stop: function () { self.ttsStop(false); },
      back: function () { self.ttsSkip(-1); }, fwd: function () { self.ttsSkip(1); },
      onRate: function (e) {
        var r = parseFloat(e.target.value) || 1;
        var cur = self._tts || {};
        cur.rate = r;
        self._tts = cur;
        if (cur.status === 'playing' || cur.status === 'paused') self.ttsStart(rawVerses, cur.verse || 1, spokenTitle, ttsKey);
        else self.forceUpdate();
      }
    };
    this._chapterPlay = tts.playPause;
    var noText = isX && !B.hasText;
    var txtOpen = st.txtOpen != null ? !!st.txtOpen : !(this._narrow || this.isPhoneScreen());
    var rd = {
      color: D.color,
      txtOpen: txtOpen, txtMax: txtOpen ? 'none' : '228px', txtOv: txtOpen ? 'visible' : 'auto', txtChev: txtOpen ? 180 : 0,
      txtPad: this._narrow ? '20px 20px' : '32px 40px',
      txtLabel: txtOpen ? 'Collapse text' : 'Expand full chapter',
      txtHint: txtOpen ? 'Shrink the text to a few lines to bring the chapter notes and map closer.' : 'Scroll inside the text to keep reading. Chapter notes and the map are just below.',
      txtToggle: function () {
        go({ txtOpen: !txtOpen });
        if (txtOpen) setTimeout(function () { var a = document.getElementById('read-text'); if (a && a.getBoundingClientRect().top < 0) a.scrollIntoView({ block: 'start' }); }, 40);
      },
      title: B.name + ' ' + C, trName: isX ? TR_NAMES.apoc : TR_NAMES[tr], bookId: B.id, chapVal: String(C), chapOpts: chapOpts,
      bookName: B.name, isExtra: isX, extraNote: extraNote, showTr: !isX, noText: noText,
      footnote: isX ? 'Chapter and verse numbers follow the King James Apocrypha.' : 'Words in [brackets] are supplied by the translators.',
      onBook: function (e) { var nbk = findBook(e.target.value); go({ book: e.target.value, chap: nbk ? (nbk.chFirst || 1) : 1, hl: 0 }); },
      onChap: function (e) { go({ chap: parseInt(e.target.value, 10) || 1, hl: 0 }); },
      verses: verses, loading: !noText && !srcText && !srcFailed, ready: !noText && !!srcText, failed: !noText && srcFailed,
      prevLabel: pc ? pc.label : 'Start', nextLabel: nc ? nc.label : 'End', noPrev: !pc, noNext: !nc,
      goPrev: function () { if (pc) openChap(pc.id, pc.c, 0); },
      goNext: function () { if (nc) openChap(nc.id, nc.c, 0); },
      withX: withX, onWithX: function (e) { go({ withX: !!e.target.checked }); },
      nextIsExtra: !!(nc && findBook(nc.id).extra && nc.id !== B.id), prevIsExtra: !!(pc && findBook(pc.id).extra && pc.id !== B.id)
    };
    rd.nextLabel = nc ? nc.label + (rd.nextIsExtra ? ' (Catholic & Orthodox)' : '') : 'End';
    rd.prevLabel = pc ? pc.label + (rd.prevIsExtra ? ' (Catholic & Orthodox)' : '') : 'Start';

    // Right-hand panel that follows the chapter being read
    var chD = this._chData;
    var chRow = (!isX && chD && chD.books[B.id]) ? chD.books[B.id][C - 1] : null;
    var hlVerse = function (v) { go({ hl: v }); self.scrollToId('v-' + v); };
    var cpEv = chRow ? chRow[0].map(function (e) { return { title: e[0], ref: 'v. ' + e[1], pick: function () { hlVerse(e[1]); } }; }) : [];
    var cpPeople = chRow ? chRow[1].map(function (p) {
      var nm = p[0].replace(/ \(.*$/, '');
      return { label: p[0], title: 'Mentioned in ' + p[1] + (p[1] === 1 ? ' verse' : ' verses') + ' of this chapter. Search the Bible for ' + nm + '.', pick: function () { go({ tab: 'search', q: nm }); window.scrollTo(0, 0); } };
    }) : [];
    var cpPlaces = chRow ? chRow[2] : [];
    var hnRow = (!isX && this._hnData && this._hnData[B.id]) ? (this._hnData[B.id][C - 1] || []) : [];
    var hnOwn = !isX && this._hnData && this._hnData._own && this._hnData._own[B.id] && this._hnData._own[B.id][String(C)];
    var hnLoading = !isX && !this._hnData && !this._hnFailed;
    var cpOutline = hnRow.map(function (o) {
      var first = parseInt(o[1], 10);
      return { text: o[0], ref: o[1] ? (/[–,]/.test(o[1]) ? 'vv. ' : 'v. ') + o[1] : '', hasRef: !!o[1],
        pick: function () { if (first) hlVerse(first); } };
    });
    var chWhole = !cpPlaces.length;
    // Places in the order the chapter first mentions them. Places at the same spot (Shechem and the oak of Moreh)
    // become one stop, and the route skips whole regions (such as Canaan) so it follows the actual travel.
    var stops = [];
    if (!chWhole) {
      cpPlaces.slice().sort(function (a, b) { return a[1][0] - b[1][0]; }).forEach(function (x) {
        var pl = PLACES[x[0]]; if (!pl) return;
        var same = stops.filter(function (o) { var q = PLACES[o.id]; return Math.abs(q[1] - pl[1]) < 0.01 && Math.abs(q[2] - pl[2]) < 0.01; })[0];
        if (same) { same.vv = same.vv.concat(x[1]).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(function (a, b) { return a - b; }); same.also.push(pl[0].replace(/ \(.*$/, '')); return; }
        stops.push({ id: x[0], vv: x[1].slice(), also: [], region: /^(canaan|israel|judah|judea|land of |the land)/i.test(pl[0]) });
      });
    }
    var routeIds = stops.filter(function (o) { return !o.region; }).map(function (o) { return o.id; });
    var showRoute = st.chRoute !== false && routeIds.length >= 2;
    var chDef = chWhole ? BOOK_MAPS[B.id] : {
      p: stops.map(function (o) {
        var nm = o.also.length ? 'also ' + o.also.join(', ') + '; ' : '';
        return [o.id, nm + (o.vv.length > 1 ? 'verses ' : 'verse ') + o.vv.join(', ')];
      }),
      r: showRoute ? [['Route in the order the chapter mentions each place', routeIds]] : null
    };
    var chMap = buildMap(chDef, 4 / 3, '4 / 3', !!st.mapWide, st.pin, st.mapZoom || 0, go, 'chPan', 'ch' + B.id + C + (chWhole ? 'b' : ''), st.chPan, st.dragging, 'chListClosed', !st.chListClosed);
    var stopIdx = -1;
    stops.forEach(function (o, i) { if (o.id === st.pin && st.chStop === i) stopIdx = i; });
    var goStop = function (i) {
      var o = stops[i]; if (!o) return;
      var patch = chMap.centerOn(o.id);
      patch.pin = o.id; patch.chStop = i; patch.hl = o.vv[0];
      if ((st.mapZoom || 0) < 2 && !st.mapWide) patch.mapZoom = 2;
      go(patch);
    };
    chMap.journey = {
      has: !chWhole && stops.length >= 2,
      hasRoute: routeIds.length >= 2, routeOn: showRoute,
      toggleRoute: function () { go({ chRoute: !showRoute }); },
      started: stopIdx >= 0,
      label: stopIdx >= 0 ? 'Stop ' + (stopIdx + 1) + ' of ' + stops.length + ': ' + PLACES[stops[stopIdx].id][0].replace(/ \(.*$/, '') + (stops[stopIdx].also.length ? ' (' + stops[stopIdx].also.join(', ') + ')' : '') + ' · ' + (stops[stopIdx].vv.length > 1 ? 'verses ' : 'verse ') + stops[stopIdx].vv.join(', ') : stops.length + ' places, in the order the chapter mentions them',
      startLabel: stopIdx >= 0 ? 'Next stop' : 'Follow the journey',
      noPrev: stopIdx <= 0, noNext: stopIdx >= stops.length - 1,
      prevColor: stopIdx <= 0 ? '#B8AC98' : '#231E19', nextColor: stopIdx >= stops.length - 1 ? '#B8AC98' : '#231E19',
      prev: function () { if (stopIdx > 0) goStop(stopIdx - 1); },
      next: function () { goStop(stopIdx < 0 ? 0 : Math.min(stops.length - 1, stopIdx + 1)); },
      restart: function () { go({ pin: null, chStop: null, chPan: null, hl: null }); }
    };
    var chLoading = !isX && !chD && !this._chFailed;
    var cpScope = st.cpScope === 'book' ? 'book' : 'ch';
    var cp = {
      title: B.name + ' ' + C, isExtra: isX, extraNote: extraNote, color: D.color,
      loading: chLoading && hnLoading, hasEvents: cpEv.length > 0, events: cpEv,
      hasOutline: cpOutline.length > 0, outline: cpOutline, outlineSrc: 'https://github.com/lyteword/mhenry-concise', outlineHenry: !hnOwn, outlineOwn: !!hnOwn,
      eventsHead: 'Named events',
      noEvents: !chLoading && !hnLoading && cpEv.length === 0 && cpOutline.length === 0,
      fallback: isX ? B.sum : ('No chapter outline is available here. The book in brief: ' + B.sum),
      hasPeople: cpPeople.length > 0, people: cpPeople, noPeople: !chLoading && cpPeople.length === 0, peopleFallback: 'Across the book: ' + B.people,
      themes: bThemes, hasThemes: bThemes.length > 0, noThemes: bThemes.length === 0,
      showCh: tab === 'read' && cpScope === 'ch', showBook: tab !== 'read' || cpScope === 'book',
      scopeHint: cpScope === 'ch' ? 'Notes, figures and map for ' + B.name + ' ' + C + '.' : 'The whole book of ' + B.name + ', as on the Library page.',
      scopeBtns: [['ch', 'This chapter'], ['book', 'Whole book']].map(function (m) {
        var on = m[0] === cpScope;
        return { label: m[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35',
          pick: function () { go({ cpScope: m[0], pin: null, chPan: null, bookPan: null, mapZoom: 0, mapWide: false }); } };
      }),
      mapNote: chWhole ? (cpPlaces.length ? '' : (isX ? 'No chapter-level places for this book, so the map shows the whole book.' : 'No places are named in this chapter, so the map shows the whole book.'))
        : (cpPlaces.length === 1 ? 'The place named in this chapter.' : 'The ' + cpPlaces.length + ' places named in this chapter, numbered in the order they first appear.'),
      showAttrib: !isX,
      prevLabel: rd.prevLabel, nextLabel: rd.nextLabel, noPrev: rd.noPrev, noNext: rd.noNext, goPrev: rd.goPrev, goNext: rd.goNext
    };
    var bookOpts = BOOKS.map(function (b) { return { id: b.id, name: b.name }; }).concat(
      XBOOKS.filter(function (b) { return b.hasText || b.id === B.id; }).map(function (b) { return { id: b.id, name: b.name + ' (Apocrypha)' }; }));

    // Search
    var qq = q.trim();
    var qlow = qq.toLowerCase();
    var bookMatches = qlow.length >= 2 ? BOOKS.filter(function (b) {
      return b.name.toLowerCase().indexOf(qlow) >= 0 || b.abbr.toLowerCase() === qlow;
    }).slice(0, 8).map(function (b) {
      return { name: b.name, bg: DIVM[b.div].color, pick: function () { openChap(b.id, 1, 0); } };
    }) : [];
    if (isX && scope === 'book') scope = 'all';
    var scopeList = [['all', 'Whole Bible'], ['OT', 'Old Testament'], ['NT', 'New Testament'], ['X', 'Catholic & Orthodox books']];
    if (!isX) scopeList.push(['book', 'In ' + B.name]);
    var scopes = scopeList.map(function (c) {
      var on = scope === c[0];
      return { label: c[1], pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, border: on ? INK : '#D9CDB8', pick: function () { go({ scope: c[0] }); } };
    });
    var searching = qlow.length >= 3;
    // The Catholic and Orthodox books are searched by default with the whole Bible or Old Testament, or on their own.
    var sx = st.searchX == null ? true : !!st.searchX;
    var onlyX = scope === 'X';
    var withXS = onlyX || (sx && (scope === 'all' || scope === 'OT'));
    var XCAP = onlyX ? 300 : 60;
    if (withXS) this.loadText('apoc');
    var apocT = (this._texts || {}).apoc;
    var res = { hits: [], counts: [], total: 0, xhits: [], xtotal: 0 };
    if (text && searching) {
      var key = tr + '|' + scope + '|' + (scope === 'book' ? B.id : '') + '|' + qlow + '|' + (withXS ? (apocT ? 'x' : 'xp') : '');
      if (this._sKey !== key) {
        var hits = [], counts = [], total = 0;
        for (var bi = 0; bi < BOOKS.length; bi++) {
          counts.push(0);
          var bk = BOOKS[bi], tt = DIVM[bk.div].t;
          if (onlyX || (scope === 'OT' && tt !== 'OT') || (scope === 'NT' && tt !== 'NT') || (scope === 'book' && bk.id !== B.id)) continue;
          var chs = text[bi];
          for (var c2 = 0; c2 < chs.length; c2++) {
            var vs = chs[c2];
            for (var vi = 0; vi < vs.length; vi++) {
              var at = vs[vi].toLowerCase().indexOf(qlow);
              if (at >= 0) {
                total++; counts[bi]++;
                if (hits.length < MAX_RESULTS) hits.push({ bi: bi, ci: c2, vi: vi, at: at });
              }
            }
          }
        }
        var xhits = [], xtotal = 0;
        if (withXS && apocT) {
          XBOOKS.forEach(function (xb) {
            if (!xb.hasText || !apocT[xb.id]) return;
            apocT[xb.id].forEach(function (vs2, c3) {
              vs2.forEach(function (v2, vi2) {
                if (!v2 || v2 === '\u2026') return;
                var at2 = v2.toLowerCase().indexOf(qlow);
                if (at2 >= 0) { xtotal++; if (xhits.length < XCAP) xhits.push({ xb: xb.id, ci: c3, vi: vi2, at: at2 }); }
              });
            });
          });
        }
        this._sKey = key;
        this._sRes = { hits: hits, counts: counts, total: total, xhits: xhits, xtotal: xtotal };
      }
      res = this._sRes;
    }
    var maxCount = res.counts.length ? Math.max.apply(null, res.counts) : 0;
    var hist = BOOKS.map(function (b, i) {
      var n = res.counts[i] || 0;
      return {
        name: b.name + ': ' + n + (n === 1 ? ' verse' : ' verses'),
        bg: n ? DIVM[b.div].color : '#E3DACA',
        h: n ? Math.round(10 + 42 * Math.sqrt(n / maxCount)) : 4,
        pick: function () { go({ book: b.id, scope: 'book', chap: 1, hl: 0 }); }
      };
    });
    var results = res.hits.map(function (h) {
      var b = BOOKS[h.bi], sv = text[h.bi][h.ci][h.vi];
      return {
        ref: b.name + ' ' + (h.ci + 1) + ':' + (h.vi + 1), color: DIVM[b.div].color,
        pre: sv.slice(0, h.at), mid: sv.slice(h.at, h.at + qlow.length), post: sv.slice(h.at + qlow.length),
        pick: function () { openChap(b.id, h.ci + 1, h.vi + 1); }
      };
    });
    var xresults = res.xhits.map(function (h) {
      var b = findBook(h.xb), sv = apocT[h.xb][h.ci][h.vi], c = (b.chFirst || 1) + h.ci;
      return {
        ref: b.name + ' ' + c + ':' + (h.vi + 1), color: XDIV.color,
        pre: sv.slice(0, h.at), mid: sv.slice(h.at, h.at + qlow.length), post: sv.slice(h.at + qlow.length),
        pick: function () { openChap(b.id, c, h.vi + 1); }
      };
    });
    var scopeNote = scope === 'all' ? 'whole Bible' : scope === 'OT' ? 'Old Testament' : scope === 'NT' ? 'New Testament' : onlyX ? 'Catholic and Orthodox books (KJV Apocrypha text)' : B.name;
    var s = {
      query: qq, trName: TR_NAMES[tr], scopes: scopes,
      bookMatches: bookMatches, hasBooks: bookMatches.length > 0,
      hint: !searching, loading: searching && !text && !failed, ready: searching && !!text,
      total: res.total, totalLabel: onlyX ? res.xtotal.toLocaleString() + (res.xtotal === 1 ? ' verse' : ' verses') : res.total.toLocaleString() + (res.total === 1 ? ' verse' : ' verses') + (withXS && res.xtotal ? ' (plus ' + res.xtotal.toLocaleString() + ' in the Catholic and Orthodox books)' : ''),
      has: res.total > 0,
      note: (onlyX ? '' : TR_NAMES[tr] + ' · ') + scopeNote + (res.total > MAX_RESULTS ? ' · showing the first ' + MAX_RESULTS : ''),
      hist: hist, results: results,
      exportRes: function () {
        var rows = [['Reference', 'Book group', 'Verse text (' + TR_NAMES[tr] + ')']];
        res.hits.forEach(function (h) { var b = BOOKS[h.bi]; rows.push([b.name + ' ' + (h.ci + 1) + ':' + (h.vi + 1), DIVM[b.div].name, text[h.bi][h.ci][h.vi]]); });
        (res.xhits || []).forEach(function (h) { var b = findBook(h.xb); rows.push([b.name + ' ' + ((b.chFirst || 1) + h.ci) + ':' + (h.vi + 1), 'Catholic & Orthodox book (KJV Apocrypha)', apocT[h.xb][h.ci][h.vi]]); });
        self.exportCSV('search-' + qlow.replace(/[^a-z0-9]+/g, '-'), rows);
      },
      xresults: xresults, hasX: withXS && res.xtotal > 0, xLoading: withXS && searching && !apocT,
      xNone: withXS && searching && !!apocT && res.xtotal === 0,
      xLabel: res.xtotal.toLocaleString() + (res.xtotal === 1 ? ' verse' : ' verses') + ' in the Catholic and Orthodox books' + (res.xtotal > XCAP ? ' (showing the first ' + XCAP + ')' : ''),
      withX: withXS, xDisabled: !(scope === 'all' || scope === 'OT'), onlyX: onlyX, notOnlyX: !onlyX,
      onWithX: function (e) { go({ searchX: !!e.target.checked }); },
      suggestions: SUGGESTIONS.map(function (w) { return { label: w, pick: function () { go({ q: w }); } }; })
    };

    // Maps
    var narrow = !!this._narrow;
    var eraMap = buildMap(ERA_MAPS[eraN], narrow ? 4 / 3 : 16 / 9, narrow ? '4 / 3' : '16 / 9', !!st.mapWide, st.pin, st.mapZoom || 0, go, 'eraPan', 'era' + eraN, st.eraPan, st.dragging, 'eraListClosed', !st.eraListClosed);
    var bookMap = buildMap(BOOK_MAPS[B.id], 4 / 3, '4 / 3', !!st.mapWide, st.pin, st.mapZoom || 0, go, 'bookPan', 'book' + B.id, st.bookPan, st.dragging, 'bookListClosed', !st.bookListClosed);


    // Timeline
    var tlSpan0 = TL_HI - TL_LO;
    var tlSpan = Math.max(TL_MIN_SPAN, Math.min(tlSpan0, st.tlSpan || tlSpan0));
    var tlC = st.tlC != null ? st.tlC : (TL_LO + TL_HI) / 2;
    tlC = Math.max(TL_LO + tlSpan / 2, Math.min(TL_HI - tlSpan / 2, tlC));
    var t0 = tlC - tlSpan / 2, t1 = tlC + tlSpan / 2;
    var zLog = Math.log(tlSpan0 / TL_MIN_SPAN);
    var zoomVal = Math.round(100 * Math.log(tlSpan0 / tlSpan) / zLog);
    var panRoom = tlSpan0 - tlSpan;
    var panVal = panRoom > 0 ? Math.round(1000 * (t0 - TL_LO) / panRoom) : 500;
    var tlOff = st.tlOff || {};
    var tierMax = tlSpan <= 760 ? 3 : tlSpan <= 2700 ? 2 : 1;
    var TX = function (y) { return (y - t0) / tlSpan * 100; };
    var tlSel = st.tlSel != null ? st.tlSel : -1;
    var setSpan = function (sp) { go({ tlSpan: Math.max(TL_MIN_SPAN, Math.min(tlSpan0, sp)), tlC: tlC }); };
    var vis = [];
    TIMELINE.forEach(function (e, i) {
      if (tlOff[e.c] || e.k > tierMax) return;
      if ((e.y2 || e.y) < t0 || e.y > t1) return;
      vis.push({ e: e, i: i });
    });
    vis.sort(function (a, b) { return a.e.y - b.e.y || a.e.k - b.e.k; });
    var trackPx = narrow ? 360 : 1280;
    var laneEnd = [-1e9, -1e9, -1e9, -1e9, -1e9];
    var LANE_TOP = [8, 42, 76, 110, 144], AXIS = 186;
    var dateLabel = function (e) {
      if (e.u || e.y < TL_UNDATED) return 'Undated';
      return (e.a ? 'c. ' : '') + tlYear(e.y) + (e.y2 ? '\u2013' + tlYear(e.y2) : '');
    };
    var srcTip = function (e) { return e.t + ' \u00b7 ' + dateLabel(e) + ' \u00b7 Source: ' + e.s.map(function (x) { return x[0]; }).join('; '); };
    var tlPick = function (i) { return function () { go({ tlSel: tlSel === i ? -1 : i }); }; };
    var marks = vis.map(function (o) {
      var e = o.e, x = TX(e.y), C2 = TL_CATS[e.c];
      var w = (e.t.length * 6.8 + 34) / trackPx * 100;
      var right = x + w > 100;
      var a0 = right ? x - w : x, a1 = right ? x : x + w;
      var lane = -1;
      for (var l = 0; l < 5; l++) { if (laneEnd[l] < a0) { lane = l; break; } }
      var on = o.i === tlSel;
      if (lane >= 0) laneEnd[lane] = a1 + 0.6;
      var top = lane >= 0 ? LANE_TOP[lane] : AXIS - 9;
      return {
        x: pct(Math.max(0, x)), top: top, stemTop: top + 14, stemH: lane >= 0 ? AXIS - top - 14 : 0, showStem: lane >= 0,
        showLabel: lane >= 0 || on, label: e.t, color: C2[1], tip: srcTip(e),
        tx: right ? 'calc(-100% + 7px)' : '-7px', bg: on ? C2[1] : 'rgba(255,253,248,0.94)', fg: on ? '#FFFFFF' : INK,
        border: on ? C2[1] : '#D9CDB8', z: on ? 5 : lane >= 0 ? 3 : 2, pick: tlPick(o.i),
        aria: e.t + ', ' + dateLabel(e)
      };
    });
    var bars = vis.filter(function (o) { return o.e.y2; }).map(function (o) {
      var x0 = Math.max(0, TX(o.e.y)), x1 = Math.min(100, TX(o.e.y2));
      return { x: pct(x0), w: pct(Math.max(0.4, x1 - x0)), color: TL_CATS[o.e.c][1] };
    });
    var steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
    var step = steps[steps.length - 1];
    for (var si = 0; si < steps.length; si++) { if (tlSpan / steps[si] <= (narrow ? 4 : 8)) { step = steps[si]; break; } }
    var ticks = [];
    for (var ty = Math.ceil(t0 / step) * step; ty <= t1; ty += step) {
      if (ty >= TL_UNDATED) ticks.push({ x: pct(TX(ty)), label: ty === 0 ? 'BC | AD' : tlYear(ty) });
    }
    var bandDefs = [[TL_LO, TL_UNDATED, 'Beginnings · undated'], [TL_UNDATED, -2100, ''], [-2100, -1050, 'Patriarchs to judges'], [-1050, -586, 'Kings'], [-586, -5, 'Exile to Rome'],
      [-5, 100, 'Jesus & apostles'], [100, 600, 'Early church'], [600, 1500, 'Middle Ages'], [1500, 1700, 'Reformation'], [1700, 2035, 'Modern']];
    var bands = bandDefs.filter(function (b) { return b[1] > t0 && b[0] < t1; }).map(function (b, i) {
      var x0 = Math.max(0, TX(b[0])), x1 = Math.min(100, TX(b[1]));
      return { x: pct(x0), w: pct(x1 - x0), label: (x1 - x0) > (b[2].length * 7 / trackPx * 100) ? b[2] : '', bg: (bandDefs.indexOf(b) % 2) ? 'rgba(234,225,208,0.55)' : 'rgba(245,239,227,0.2)' };
    });
    var selE = tlSel >= 0 ? TIMELINE[tlSel] : null;
    var tlDetail = selE ? {
      title: selE.t, date: dateLabel(selE), cat: TL_CATS[selE.c][0], color: TL_CATS[selE.c][1], text: selE.d,
      sources: selE.s.map(function (x) { return { label: x[0], url: x[1], tip: 'Read more: ' + x[0] + ' (opens in a new tab)' }; }),
      approx: !!selE.a, hasRead: !!selE.r,
      readLabel: selE.r ? 'Read ' + (findBook(selE.r[0]) || {}).name + ' ' + selE.r[1] : '',
      read: function () { if (selE.r) openChap(selE.r[0], selE.r[1], 0); },
      close: function () { go({ tlSel: -1 }); }
    } : null;
    // Event list grouped by period: the main events of each period, with the rest a tap away.
    var tlGrpSt = st.tlGrp || {};
    var inRange = [];
    TIMELINE.forEach(function (e, i) { if (!tlOff[e.c] && (e.y2 || e.y) >= t0 && e.y <= t1) inRange.push({ e: e, i: i }); });
    inRange.sort(function (a, b) { return a.e.y - b.e.y || a.e.k - b.e.k; });
    var groupDefs = bandDefs.map(function (b, gi) { return { id: 'g' + gi, a: b[0], b: b[1], name: b[2] }; });
    var tlGroups = [];
    groupDefs.forEach(function (g, gi) {
      var evs = inRange.filter(function (o) { return o.e.y >= g.a && (o.e.y < g.b || (gi === groupDefs.length - 1)); });
      if (!evs.length) return;
      var mainSet = evs.filter(function (o) { return o.e.k === 1; });
      if (mainSet.length < 2) {
        var extra = evs.filter(function (o) { return o.e.k === 2; }).slice(0, 2 - mainSet.length);
        mainSet = evs.filter(function (o) { return o.e.k === 1 || extra.indexOf(o) >= 0; });
      }
      if (!mainSet.length) mainSet = evs.slice(0, 2);
      var mode = tlGrpSt[g.id] || (st.tlAll ? 'all' : 'main');
      var shown = mode === 'closed' ? [] : mode === 'all' ? evs : mainSet;
      if (tlSel >= 0 && mode === 'main' && shown.every(function (o) { return o.i !== tlSel; })) {
        var selO = evs.filter(function (o) { return o.i === tlSel; })[0];
        if (selO) shown = evs.filter(function (o) { return o === selO || mainSet.indexOf(o) >= 0; });
      }
      var more = evs.length - shown.length;
      var setMode = function (m) { return function () { var o = Object.assign({}, tlGrpSt); o[g.id] = m; go({ tlGrp: o }); }; };
      tlGroups.push({
        name: g.name, dates: (g.b <= TL_UNDATED ? 'Undated' : tlYear(g.a) + ' – ' + (g.b >= 2025 ? 'today' : tlYear(g.b))),
        count: evs.length + (evs.length === 1 ? ' event' : ' events'),
        open: mode !== 'closed', chev: mode === 'closed' ? -90 : 0,
        toggle: setMode(mode === 'closed' ? 'main' : 'closed'),
        items: shown.map(function (o) {
          var on = o.i === tlSel;
          return { date: dateLabel(o.e), label: o.e.t, color: TL_CATS[o.e.c][1], tip: srcTip(o.e), pressed: on,
            bg: on ? '#F6E2A8' : 'transparent', weight: o.e.k === 1 ? 700 : 500, pick: tlPick(o.i) };
        }),
        hasMore: mode !== 'closed' && more > 0, moreLabel: 'Show ' + more + ' more in ' + g.name,
        showMore: setMode('all'),
        hasLess: mode === 'all' && mainSet.length < evs.length, showLess: setMode('main')
      });
    });
    var hiddenCount = TIMELINE.filter(function (e) { return !tlOff[e.c] && e.k > tierMax && (e.y2 || e.y) >= t0 && e.y <= t1; }).length;

    var RP = function (y) { return (y - TL_LO) / tlSpan0 * 100; };
    var setRange = function (a, b) {
      if (b - a < TL_MIN_SPAN) { var mid = (a + b) / 2; a = mid - TL_MIN_SPAN / 2; b = mid + TL_MIN_SPAN / 2; }
      if (a < TL_LO) { b += TL_LO - a; a = TL_LO; }
      if (b > TL_HI) { a -= b - TL_HI; b = TL_HI; }
      go({ tlSpan: Math.min(tlSpan0, b - a), tlC: (a + b) / 2 });
    };
    var keyStep = function (side) {
      return function (e) {
        var d = e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -1 : e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 1 : 0;
        if (!d) return; e.preventDefault();
        var st2 = Math.max(5, tlSpan * 0.05) * d;
        if (side === 'l') setRange(Math.min(t0 + st2, t1 - TL_MIN_SPAN), t1); else setRange(t0, Math.max(t1 + st2, t0 + TL_MIN_SPAN));
      };
    };
    var rs = {
      l: pct(RP(t0)), r: pct(RP(t1)), w: pct(RP(t1) - RP(t0)), a: Math.round(t0), b: Math.round(t1), aText: tlYear(Math.round(t0)), bText: tlYear(Math.round(t1)),
      dots: TIMELINE.filter(function (e) { return e.k === 1; }).map(function (e) { return { x: pct(RP(e.y)), color: TL_CATS[e.c][1] }; }),
      keyL: keyStep('l'), keyR: keyStep('r'),
      down: function (e) {
        if (e.button !== undefined && e.button !== 0) return;
        var r = e.currentTarget.getBoundingClientRect();
        var hEl = e.target && e.target.closest ? e.target.closest('[data-h]') : null;
        var mode = hEl ? hEl.getAttribute('data-h') : null;
        var a = t0, b = t1;
        if (!mode) { // click on the bar outside the window: move the window there
          var yr = TL_LO + (e.clientX - r.left) / r.width * tlSpan0;
          a = yr - tlSpan / 2; b = yr + tlSpan / 2; setRange(a, b); mode = 'm';
        }
        DRAG.rs = { mode: mode, x: e.clientX, w: r.width, a: a, b: b };
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
      },
      move: function (e) {
        var d = DRAG.rs; if (!d) return;
        var dy = (e.clientX - d.x) / d.w * tlSpan0;
        if (d.mode === 'l') setRange(Math.min(d.a + dy, d.b - TL_MIN_SPAN), d.b);
        else if (d.mode === 'r') setRange(d.a, Math.max(d.b + dy, d.a + TL_MIN_SPAN));
        else setRange(d.a + dy, d.b + dy);
      },
      up: function () { delete DRAG.rs; }
    };
    var tl = {
      zoomVal: String(zoomVal), panVal: String(panVal),
      onZoom: function (e) { var v = parseFloat(e.target.value) || 0; setSpan(tlSpan0 * Math.exp(-v / 100 * zLog)); },
      onPan: function (e) { var v = parseFloat(e.target.value) || 0; go({ tlC: TL_LO + v / 1000 * panRoom + tlSpan / 2, tlSpan: tlSpan }); },
      zoomIn: function () { setSpan(tlSpan / 1.8); }, zoomOut: function () { setSpan(tlSpan * 1.8); },
      panL: function () { setRange(t0 - tlSpan * 0.4, t1 - tlSpan * 0.4); }, panR: function () { setRange(t0 + tlSpan * 0.4, t1 + tlSpan * 0.4); },
      noL: t0 <= TL_LO + 0.5, noR: t1 >= TL_HI - 0.5, lColor: t0 <= TL_LO + 0.5 ? '#B8AC98' : '#231E19', rColor: t1 >= TL_HI - 0.5 ? '#B8AC98' : '#231E19',
      noIn: tlSpan <= TL_MIN_SPAN + 0.5, noOut: tlSpan >= tlSpan0 - 0.5,
      rangeLabel: tlYear(Math.round(t0)) + ' \u2013 ' + (t1 >= 2025 ? 'today' : tlYear(Math.round(t1))),
      detailNote: tierMax === 3 ? 'Showing every event in this range.' : hiddenCount + ' more event' + (hiddenCount === 1 ? '' : 's') + ' in this range appear as you zoom in.',
      presets: TL_PRESETS.map(function (p) {
        var on = Math.abs(t0 - p[1]) < 2 && Math.abs(t1 - p[2]) < 2;
        return { label: p[0], pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, pick: function () { go({ tlSpan: p[2] - p[1], tlC: (p[1] + p[2]) / 2 }); } };
      }),
      cats: Object.keys(TL_CATS).map(function (k) {
        var off = !!tlOff[k];
        return { label: TL_CATS[k][0], color: TL_CATS[k][1], pressed: !off, op: off ? 0.45 : 1, deco: off ? 'line-through' : 'none',
          pick: function () { var o = Object.assign({}, tlOff); o[k] = !off; go({ tlOff: o }); } };
      }),
      rs: rs,
      marks: marks, bars: bars, ticks: ticks, bands: bands,
      undated: t0 < TL_UNDATED, undW: pct(Math.max(0, Math.min(100, TX(TL_UNDATED)))),
      groups: tlGroups,
      listCount: inRange.length + (inRange.length === 1 ? ' event' : ' events') + ' in this range, by period',
      allOpen: !!st.tlAll && !Object.keys(tlGrpSt).length,
      expandLabel: (st.tlAll && !Object.keys(tlGrpSt).length) ? 'Main events only' : 'Show every event',
      expandAll: function () { var on = !!st.tlAll && !Object.keys(tlGrpSt).length; go({ tlAll: !on, tlGrp: {} }); },
      list: vis.map(function (o) {
        var on = o.i === tlSel;
        return { date: dateLabel(o.e), label: o.e.t, color: TL_CATS[o.e.c][1], tip: srcTip(o.e), pressed: on, bg: on ? '#F6E2A8' : 'transparent', pick: tlPick(o.i) };
      }),
      count: vis.length + (vis.length === 1 ? ' event' : ' events') + ' in view',
      exportView: function () {
        var rows = [['Date', 'Start year', 'End year', 'Event', 'Tradition', 'Description', 'Approximate date', 'Sources']];
        vis.forEach(function (o) { var e = o.e; rows.push([dateLabel(e), e.y, e.y2 || '', e.t, TL_CATS[e.c][0], e.d, e.a ? 'yes' : '', e.s.map(function (x) { return x[0] + ' ' + x[1]; }).join(' | ')]); });
        self.exportCSV('timeline-' + tlYear(Math.round(t0)).replace(/ /g, '') + '-to-' + tlYear(Math.round(t1)).replace(/ /g, ''), rows);
      },
      exportAll: function () {
        var rows = [['Date', 'Start year', 'End year', 'Event', 'Tradition', 'Description', 'Approximate date', 'Sources']];
        TIMELINE.slice().sort(function (a, b) { return a.y - b.y; }).forEach(function (e) { rows.push([dateLabel(e), e.y, e.y2 || '', e.t, TL_CATS[e.c][0], e.d, e.a ? 'yes' : '', e.s.map(function (x) { return x[0] + ' ' + x[1]; }).join(' | ')]); });
        self.exportCSV('timeline-all-events', rows);
      },
      detail: tlDetail, hasDetail: !!tlDetail, noDetail: !tlDetail,
      cursor: st.dragging === 'tl' ? 'grabbing' : 'grab',
      down: function (e) {
        if (e.button !== undefined && e.button !== 0) return;
        if (e.target && e.target.closest && e.target.closest('button')) return;
        var r = e.currentTarget.getBoundingClientRect();
        DRAG.tl = { x: e.clientX, w: r.width, c: tlC, moved: false };
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
      },
      move: function (e) {
        var d = DRAG.tl; if (!d) return;
        var dx = e.clientX - d.x;
        if (!d.moved && Math.abs(dx) < 4) return;
        d.moved = true;
        go({ tlC: d.c - dx / d.w * tlSpan, tlSpan: tlSpan, dragging: 'tl' });
      },
      up: function () { var d = DRAG.tl; if (!d) return; delete DRAG.tl; if (d.moved) go({ dragging: null }); }
    };

    var psOn = !!(this._ps && this._ps.on);
    var readOn = tab === 'read' && (tt.status === 'playing' || tt.status === 'paused');
    var listen = {
      show: this.ttsSupported(),
      label: (psOn || readOn) ? 'Stop' : 'Listen',
      aria: (psOn || readOn) ? 'Stop reading aloud' : (tab === 'read' ? 'Listen to this chapter' : 'Listen to this page'),
      on: psOn || readOn, off: !(psOn || readOn),
      pick: function () {
        if (tab === 'read') { if (self._tts && self._tts.status !== 'idle' && self._tts.status !== 'done') self.ttsStop(false); else tts.playPause(); return; }
        self.pageSpeak();
      },
      back: function () { if (readOn && !psOn) self.ttsSkip(-1); else self.pageSkip(-1); },
      fwd: function () { if (readOn && !psOn) self.ttsSkip(1); else self.pageSkip(1); },
      unit: tab === 'read' ? 'verse' : 'section'
    };
    // Player bar: a scrubber to jump to any part of what is being read
    var psState = this._ps || {};
    var isReadP = readOn && !psOn;
    var pMin = isReadP ? 1 : 0;
    var pMax = isReadP ? Math.max(1, rawVerses.length) : Math.max(0, (psState.total || 1) - 1);
    var pPos = isReadP ? (tt.verse || 1) : (psState.idx || 0);
    if (st.seekV != null) pPos = st.seekV;
    var pPaused = isReadP ? tt.status === 'paused' : !!psState.paused;
    var curVoice = this.ttsVoice();
    var commitSeek = function () {
      var v = self._seekPending;
      if (v == null) return;
      self._seekPending = null;
      if (isReadP) { var t2 = self._tts; if (t2 && t2.verses) self.ttsStart(t2.verses, Math.max(1, v), t2.title, t2.key); }
      else self.pageSpeakFrom(v);
      self.setState({ seekV: null });
    };
    var player = {
      show: listen.on, min: String(pMin), max: String(pMax), val: String(pPos),
      fill: pMax > pMin ? Math.round((pPos - pMin) / (pMax - pMin) * 100) : 0,
      title: isReadP ? B.name + ' ' + C : 'This page',
      posLabel: isReadP ? 'Verse ' + pPos + ' of ' + pMax : 'Part ' + (pPos + 1) + ' of ' + (pMax + 1),
      paused: pPaused, playing: !pPaused,
      pause: function () { if (isReadP) tts.playPause(); else self.pagePause(); },
      stop: function () { if (isReadP) self.ttsStop(false); else self.pageStop(); },
      back: listen.back, fwd: listen.fwd,
      // Dragging previews the spot (highlight and scroll); reading jumps there when the finger or mouse lets go.
      onSeek: function (e) {
        var v = parseInt(e.target.value, 10) || 0;
        self._seekPending = v;
        go({ seekV: v });
        if (isReadP) { var ve = document.getElementById('v-' + Math.max(1, v)); self.followEl(ve); }
        else self.pageMark(v);
        clearTimeout(self._seekT);
        if (!self._seekDown) self._seekT = setTimeout(commitSeek, 450);
      },
      seekDown: function () { self._seekDown = true; clearTimeout(self._seekT); },
      seekUp: function (e) {
        self._seekDown = false;
        var v = parseInt(e.target.value, 10);
        if (!isNaN(v)) self._seekPending = v;
        clearTimeout(self._seekT);
        commitSeek();
      },
      voices: this.ttsVoices().map(function (v) {
        return { id: v.voiceURI, label: v.name.replace(/^Microsoft /, '').replace(/ - English \(.*\)$/, '') + ' · ' + v.lang.replace('_', '-'), sel: curVoice && v.voiceURI === curVoice.voiceURI };
      }),
      hasVoices: this.ttsVoices().length > 1,
      onVoice: function (e) {
        try { window.localStorage.setItem('bibleExplorer.voice', e.target.value); } catch (err) {}
        if (isReadP) { var t3 = self._tts; if (t3 && t3.verses) self.ttsStart(t3.verses, t3.verse || 1, t3.title, t3.key); }
        else if (self._ps && self._ps.on) self.pageSpeakFrom(self._ps.idx || 0);
        else self.forceUpdate();
      }
    };
    var partSel = PARTS.filter(function (p) { return p.id === st.part; })[0] || null;
    var parts = PARTS.map(function (p) {
      var on = p === partSel;
      var pb = BOOKS.filter(function (b) { return p.divs.indexOf(b.div) >= 0; });
      var pch = pb.reduce(function (n, b) { return n + b.ch; }, 0);
      return { name: p.name, short: p.short, color: p.color, bg: p.bg, pressed: on, border: on ? '#FFFDF8' : p.color, ring: on ? '0 0 0 3px ' + p.color : 'none', chev: on ? 180 : 0,
        ch: pch, meta: pb.length + (pb.length === 1 ? ' book' : ' books') + ' · ' + pch + ' chapters', segLabel: p.name + ': ' + pch + ' chapters',
        segOp: partSel && !on ? 0.45 : 1,
        pick: function () { go({ part: on ? null : p.id }); if (!on) setTimeout(function () { var d = document.getElementById('part-detail'); if (d && d.getBoundingClientRect().bottom > window.innerHeight) d.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 80); } };
    });
    var part = partSel ? {
      show: true, name: partSel.name, color: partSel.color, bg: partSel.bg, more: paras(partSel.more),
      books: BOOKS.filter(function (b) { return partSel.divs.indexOf(b.div) >= 0; }).map(function (b) {
        return { name: b.name, bg: DIVM[b.div].color, pick: function () { openChap(b.id, 1, 0); } };
      }),
      refs: partSel.refs.map(function (r) { return { label: r[2], pick: function () { openChap(r[0], r[1], 0); } }; }),
      toLib: function () { jumpLib(partSel.divs[0]); },
      close: function () { go({ part: null }); }
    } : { show: false };

    // Search: "where to turn" topics
    var srMode = st.srMode === 'topics' ? 'topics' : 'words';
    var tpSel = TOPICS.filter(function (x) { return x.id === st.topic; })[0] || null;
    var apocTx = (this._texts || {}).apoc;
    if (srMode === 'topics' && tpSel && tpSel.p.some(function (r) { var b = findBook(r[0]); return b && b.chFirst != null; })) this.loadText('apoc');
    var passText = function (r) {
      var b = findBook(r[0]); if (!b) return '';
      var arr = null;
      if (b.chFirst != null) { if (apocTx && apocTx[b.id]) arr = apocTx[b.id][r[1] - (b.chFirst || 1)]; }
      else if (text && text[b.idx]) arr = text[b.idx][r[1] - 1];
      if (!arr) return '';
      var out = [];
      for (var v = r[2]; v <= r[3] && out.length < 4; v++) { if (arr[v - 1] && arr[v - 1] !== '\u2026') out.push(arr[v - 1]); }
      var more = r[3] - r[2] + 1 > 4;
      return out.join(' ') + (more ? ' …' : '');
    };
    var tp = {
      modes: seg([['words', 'Search words', { srMode: 'words' }], ['topics', 'Where to turn', { srMode: 'topics' }]], srMode),
      tiles: TOPICS.map(function (x) {
        var on = x === tpSel;
        return { name: x.name, icon: x.icon, pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, pick: function () { go({ topic: on ? null : x.id }); if (!on) setTimeout(function () { self.scrollToId('topic-detail'); }, 60); } };
      }),
      has: !!tpSel,
      name: tpSel ? tpSel.name : '', intro: tpSel ? tpSel.intro : '',
      items: tpSel ? tpSel.p.map(function (r) {
        var b = findBook(r[0]);
        var x = !!(b && b.chFirst != null);
        var ref = (b ? (b.id === 'psa' ? 'Psalm' : b.name) : r[0]) + ' ' + r[1] + ':' + r[2] + (r[3] > r[2] ? '–' + r[3] : '');
        return { ref: ref, why: r[4], text: passText(r), hasText: !!passText(r), extra: x, extraNote: x ? 'In Catholic and Orthodox Bibles' : '',
          border: x ? '2px dashed #8C7A58' : '1px solid #E2D8C6',
          open: function () { openChap(r[0], r[1], r[2]); window.scrollTo(0, 0); } };
      }) : [],
      trName: tr.toUpperCase(),
      practice: tpSel && tpSel.practice ? PRACTICES.filter(function (q) { return q.id === tpSel.practice; })[0] : null
    };
    tp.hasPractice = !!tp.practice;
    tp.practiceLabel = tp.practice ? 'Related practice: ' + tp.practice.name + ' →' : '';
    tp.openPractice = function () { if (tp.practice) { go({ tab: 'practice', prMode: 'practice', prId: tp.practice.id }); window.scrollTo(0, 0); } };

    // Practice: living the faith, by practice or by tradition
    var prMode = st.prMode === 'trad' ? 'trad' : 'practice';
    var prSel = PRACTICES.filter(function (q) { return q.id === st.prId; })[0] || PRACTICES[0];
    var prTradId = TRAD_NAME[st.prTrad] ? st.prTrad : 'C';
    var prHide = st.prHide || {};
    var prSrc = function (w) { return w && w[2] ? [{ label: w[2][0], url: w[2][1] }] : []; };
    var pr = {
      modes: [['practice', 'By practice'], ['trad', 'By tradition']].map(function (m) {
        var on = m[0] === prMode;
        return { label: m[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ prMode: m[0] }); } };
      }),
      isPractice: prMode === 'practice', isTrad: prMode === 'trad',
      practices: PRACTICES.map(function (q) {
        var on = q === prSel;
        return { label: q.name, pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, pick: function () { go({ prId: q.id }); } };
      }),
      tradChips: TRADS.map(function (t) {
        var off = !!prHide[t.id];
        return { label: t.name, pressed: !off, bg: off ? '#FFFDF8' : t.color, fg: off ? t.color : '#FFFFFF', border: t.color,
          pick: function () { var o = Object.assign({}, prHide); o[t.id] = !off; go({ prHide: o }); } };
      }),
      tradPick: TRADS.map(function (t) {
        var on = t.id === prTradId;
        return { label: t.name, pressed: on, bg: on ? t.color : '#FFFDF8', fg: on ? '#FFFFFF' : t.color, border: t.color, pick: function () { go({ prTrad: t.id }); } };
      }),
      sel: {
        name: prSel.name, why: prSel.why, shared: prSel.shared,
        refs: prSel.refs.map(function (r) { return { label: r[3], pick: function () { openChap(r[0], r[1], r[2]); window.scrollTo(0, 0); } }; })
      },
      cards: TRADS.filter(function (t) { return !prHide[t.id]; }).map(function (t) {
        var w = prSel.ways[t.id];
        return { name: t.name, color: t.color, how: w[0], tryIt: w[1], src: prSrc(w), hasSrc: !!w[2],
          more: function () { go({ prMode: 'trad', prTrad: t.id }); window.scrollTo(0, 0); } };
      }),
      tradName: TRAD_NAME[prTradId].name, tradHead: (/^[AEIOU]/.test(TRAD_NAME[prTradId].name) ? 'An ' : 'A ') + TRAD_NAME[prTradId].name + ' way of life', tradColor: TRAD_NAME[prTradId].color, tradDesc: TRAD_NAME[prTradId].desc,
      rule: PRACTICES.map(function (q) {
        var w = q.ways[prTradId];
        return { name: q.name, how: w[0], tryIt: w[1], src: prSrc(w), hasSrc: !!w[2],
          open: function () { go({ prMode: 'practice', prId: q.id }); window.scrollTo(0, 0); } };
      }),
      compare: function () { go({ tab: 'compare', cmpMode: 'trad' }); window.scrollTo(0, 0); },
      exportAll: function () {
        var rows = [['Practice', 'Biblical basis', 'Scripture', 'Common ground', 'Tradition', 'How it is lived', 'Try this week', 'Source']];
        PRACTICES.forEach(function (q) {
          TRADS.forEach(function (t) {
            var w = q.ways[t.id];
            rows.push([q.name, q.why, q.refs.map(function (r) { return r[3]; }).join('; '), q.shared, t.name, w[0], w[1], w[2] ? w[2][0] + ' ' + w[2][1] : '']);
          });
        });
        self.exportCSV('living-the-faith-by-tradition', rows);
      }
    };

    // Compare traditions and frameworks
    var cmpMode = st.cmpMode === 'fw' ? 'fw' : 'trad';
    var cmpFam = FW_FAMILIES.filter(function (f) { return f.id === st.cmpFam; })[0] || FW_FAMILIES[0];
    var cItems = cmpMode === 'trad' ? TRADS : cmpFam.fws;
    var cDefault = cmpMode === 'trad' ? ['C', 'O', 'L'] : cmpFam.fws.slice(0, 3).map(function (f) { return f.id; });
    var cStored = cmpMode === 'trad' ? st.cmpSel : (st.cmpFw || {})[cmpFam.id];
    var cIds = (cStored || cDefault).filter(function (id) { return cItems.some(function (x) { return x.id === id; }); });
    var cTable = st.cmpView === 'table';
    var cAll = cIds.map(function (id) { return cItems.filter(function (x) { return x.id === id; })[0]; });
    var cSel = cTable ? cAll : cAll.slice(0, 3);
    var setIds = function (ids) {
      if (cmpMode === 'trad') go({ cmpSel: ids, cmpReg: null });
      else { var o = Object.assign({}, st.cmpFw || {}); o[cmpFam.id] = ids; go({ cmpFw: o, cmpReg: null }); }
    };
    var cPos = cmpMode === 'trad' ? TRAD_POS.map(function (p) { return { topic: p[0], text: p[1], holders: p[2] }; })
      : cmpFam.claims.map(function (c) { return { topic: '', text: c[0], holders: c[1] }; });
    var LET = ['a', 'b', 'c'];
    var nSel = cSel.length;
    var regionKeys = nSel === 3 ? ['abc', 'ab', 'ac', 'bc', 'a', 'b', 'c'] : nSel === 2 ? ['ab', 'a', 'b'] : nSel === 1 ? ['a'] : [];
    var regionOf = function (p) { var k = ''; cSel.forEach(function (x, i) { if (p.holders.indexOf(x.id) >= 0) k += LET[i]; }); return k; };
    var byRegion = {};
    cPos.forEach(function (p) { var k = regionOf(p); if (!k) return; (byRegion[k] = byRegion[k] || []).push(p); });
    var regName = function (k) {
      var names = k.split('').map(function (l) { return cSel[LET.indexOf(l)].name; });
      if (k.length === nSel && nSel > 1) return nSel === 2 ? 'Shared by both' : 'Shared by all three';
      if (k.length === 1) return 'Only ' + names[0];
      return names.join(' & ') + ' (not ' + cSel.filter(function (x, i) { return k.indexOf(LET[i]) < 0; }).map(function (x) { return x.name; }).join(', ') + ')';
    };
    var cReg = st.cmpReg && regionKeys.indexOf(st.cmpReg) >= 0 ? st.cmpReg : null;
    // Layout in a 600 x 470 box, with every circle fully inside it and names outside the circles.
    var VENN = nSel === 3 ? {
      circles: [[230, 175], [370, 175], [300, 295]], r: 120,
      pts: { abc: [300, 215], ab: [300, 122], ac: [222, 262], bc: [378, 262], a: [150, 145], b: [450, 145], c: [300, 365] },
      names: [[16, 26, 'left'], [584, 26, 'right'], [300, 448, 'center']]
    } : {
      circles: [[235, 245], [365, 245]], r: 150,
      pts: { ab: [300, 245], a: [155, 245], b: [445, 245] },
      names: [[16, 40, 'left'], [584, 40, 'right']]
    };
    var vp = function (v, d) { return pct(v / d * 100); };
    var cmp = {
      isTrad: cmpMode === 'trad', isFw: cmpMode === 'fw',
      modes: [['trad', 'Christian traditions'], ['fw', 'Theological frameworks']].map(function (m) {
        var on = m[0] === cmpMode;
        return { label: m[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ cmpMode: m[0], cmpReg: null }); } };
      }),
      fams: FW_FAMILIES.map(function (f) {
        var on = f === cmpFam;
        return { label: f.name, pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, pick: function () { go({ cmpFam: f.id, cmpReg: null }); } };
      }),
      chips: cItems.map(function (x) {
        var i = cIds.indexOf(x.id), on = i >= 0;
        var lettered = on && !cTable && i < 3;
        return { label: x.name, pressed: on, bg: on ? x.color : '#FFFDF8', fg: on ? '#FFFFFF' : INK, border: x.color, letter: lettered ? 'ABC'[i] : '', lettered: lettered,
          pick: function () {
            var ids = cIds.slice();
            if (on) ids.splice(i, 1); else { ids.push(x.id); if (!cTable && ids.length > 3) ids.shift(); }
            setIds(ids);
          } };
      }),
      pickLabel: cTable ? 'Choose as many as you like' : 'Choose up to three',
      hint: cTable ? '' : cAll.length > 3 ? 'The Venn diagram shows the first three you picked. Switch to Side by side to see all ' + cAll.length + '.' : nSel < 2 ? 'Pick at least two to compare (up to three in the Venn diagram; any number side by side).' : 'Tap a number in the diagram to see just that overlap, or scroll through all of them below.',
      exportTable: function () {
        var rows = [[cmpMode === 'trad' ? 'Topic' : 'Claim'].concat(cSel.map(function (x) { return x.name; }))];
        cmp.tblRows.forEach(function (r) { rows.push([r.label].concat(r.cells.map(function (c) { return c.text === '\u2014' ? '' : c.text.replace(/^\u2713 /, ''); }))); });
        self.exportCSV(cmpMode === 'trad' ? 'compare-traditions' : 'compare-' + cmpFam.id, rows);
      },
      exportLists: function () {
        var rows = [['Group', 'Topic', 'Belief or practice']];
        cmp.sections.forEach(function (sec) { sec.items.forEach(function (it) { rows.push([sec.title, it.topic, it.text]); }); });
        self.exportCSV('compare-overlaps', rows);
      },
      showVenn: nSel >= 2 || (cTable && nSel >= 1),
      view: st.cmpView === 'table' ? 'table' : 'venn',
      views: [['venn', 'Venn diagram'], ['table', 'Side by side']].concat(cmpMode === 'fw' ? [['trads', 'By tradition']] : []).map(function (v) {
        var curV = st.cmpView === 'table' ? 'table' : (st.cmpView === 'trads' && cmpMode === 'fw') ? 'trads' : 'venn';
        var on = curV === v[0];
        return { label: v[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ cmpView: v[0] }); } };
      }),
      circles: nSel >= 2 ? VENN.circles.map(function (c, i) { return { cx: c[0], cy: c[1], r: VENN.r, color: cSel[i].color }; }) : [],
      names: nSel >= 2 ? VENN.names.map(function (n, i) { return { x: vp(n[0], 600), y: vp(n[1], 470), align: n[2], tx: n[2] === 'left' ? '0%' : n[2] === 'right' ? '-100%' : '-50%', label: cSel[i].name, color: cSel[i].color }; }) : [],
      counts: nSel >= 2 ? regionKeys.map(function (k) {
        var n = (byRegion[k] || []).length, on = cReg === k;
        return { x: vp(VENN.pts[k][0], 600), y: vp(VENN.pts[k][1], 470), n: n, tip: regName(k) + ': ' + n, on: on,
          bg: on ? INK : 'rgba(255,253,248,0.95)', fg: on ? PAPER : INK, op: n ? 1 : 0.45,
          pick: function () { go({ cmpReg: on ? null : k }); } };
      }) : [],
      regFilter: !!cReg, regLabel: cReg ? regName(cReg) : '', clearReg: function () { go({ cmpReg: null }); },
      sections: regionKeys.filter(function (k) { return (!cReg || k === cReg) && (byRegion[k] || []).length; }).map(function (k) {
        var dots = k.split('').map(function (l) { return { color: cSel[LET.indexOf(l)].color }; });
        var shared = k.length === nSel && nSel > 1;
        return { title: regName(k), dots: dots, count: byRegion[k].length, bg: shared ? '#EEF3EC' : k.length > 1 ? '#F5EFE3' : '#FFFDF8',
          items: byRegion[k].map(function (p) { return { topic: p.topic, hasTopic: !!p.topic, text: p.text }; }) };
      }),
      tblHead: cSel.map(function (x) { return { name: x.name, color: x.color }; }),
      tblRows: (function () {
        if (cmpMode === 'trad') {
          var topics = [];
          TRAD_POS.forEach(function (p) { if (topics.indexOf(p[0]) < 0) topics.push(p[0]); });
          return topics.map(function (t) {
            return { label: t, cells: cSel.map(function (x) {
              var ps = TRAD_POS.filter(function (p) { return p[0] === t && p[2].indexOf(x.id) >= 0; }).map(function (p) { return p[1]; });
              return { text: ps.length ? ps.join(' • ') : '—' };
            }) };
          });
        }
        return cmpFam.claims.map(function (c) {
          return { label: c[0], cells: cSel.map(function (x) { return { text: c[1].indexOf(x.id) >= 0 ? '✓ Yes' : '—' }; }) };
        });
      })(),
      cards: cSel.map(function (x, i) {
        var ft = FW_TRADS[x.id];
        var found = ft ? ft.T.split('').map(function (t) { return { label: TRAD_NAME[t].name, color: TRAD_NAME[t].color, bg: TRAD_NAME[t].color, fg: '#FFFFFF', style: 'solid', tip: 'Official or majority view in this tradition' }; })
          .concat(ft.S.split('').filter(Boolean).map(function (t) { return { label: TRAD_NAME[t].name, color: TRAD_NAME[t].color, bg: '#FFFDF8', fg: TRAD_NAME[t].color, style: 'dashed', tip: 'Found in some churches or among many members' }; })) : [];
        var typical = cmpMode === 'trad' ? FW_FAMILIES.map(function (f) {
          var hits = f.fws.filter(function (w) { return FW_TRADS[w.id] && FW_TRADS[w.id].T.indexOf(x.id) >= 0; }).map(function (w) { return w.name; });
          var some = f.fws.filter(function (w) { return FW_TRADS[w.id] && FW_TRADS[w.id].S.indexOf(x.id) >= 0; }).map(function (w) { return w.name; });
          return { topic: f.name.split(':')[0], main: hits.join(', '), some: some.length ? 'also some: ' + some.join(', ') : '', has: hits.length + some.length > 0,
            pick: function () { go({ cmpMode: 'fw', cmpFam: f.id, cmpReg: null }); window.scrollTo(0, 0); } };
        }).filter(function (r) { return r.has; }) : [];
        return { letter: 'ABC'[i], name: x.name, color: x.color, desc: x.desc,
          found: found, hasFound: found.length > 0, noFound: cmpMode === 'fw' && found.length === 0,
          typical: typical, hasTypical: typical.length > 0,
          meta1: x.origin ? 'Origins: ' + x.origin : 'Held by: ' + x.who, meta2: x.docs ? 'Key documents: ' + x.docs : '',
          hasMeta2: !!x.docs, hasProCon: !!x.pro, pro: x.pro || '', con: x.con || '',
          canLive: cmpMode === 'trad', live: function () { go({ tab: 'practice', prMode: 'trad', prTrad: x.id }); window.scrollTo(0, 0); },
          src: x.src.map(function (q) { return { label: q[0], url: q[1] }; }) };
      }),
      famName: cmpFam.name
    };
    var showTrads = cmpMode === 'fw' && st.cmpView === 'trads';
    cmp.showTradsView = showTrads;
    cmp.showPicker = !showTrads;
    cmp.view = showTrads ? 'trads' : cmp.view;
    cmp.trHead = TRADS.map(function (t) { return { name: t.name, color: t.color }; });
    cmp.trRows = cmpFam.fws.map(function (w) {
      var ft = FW_TRADS[w.id] || { T: '', S: '' };
      return { name: w.name, color: w.color, cells: TRADS.map(function (t) {
        var T = ft.T.indexOf(t.id) >= 0, S = ft.S.indexOf(t.id) >= 0;
        return { mark: T ? '\u25CF' : S ? '\u25D0' : '', show: T || S, bg: T ? t.color : 'transparent', bd: T ? '2px solid ' + t.color : S ? '2px dashed ' + t.color : 'none', tip: w.name + ' \u2014 ' + t.name + ': ' + (T ? 'official or majority view' : S ? 'found in some churches or among many members' : 'not typical'), color: t.color };
      }) };
    });
    cmp.exportTrads = function () {
      var rows = [['Framework'].concat(TRADS.map(function (t) { return t.name; }))];
      cmp.trRows.forEach(function (r) { rows.push([r.name].concat(r.cells.map(function (c) { return c.mark === '\u25CF' ? 'Official/majority' : c.mark ? 'Some' : ''; }))); });
      self.exportCSV('frameworks-by-tradition-' + cmpFam.id, rows);
    };
    cmp.showVennView = nSel >= 2 && cmp.view === 'venn';
    cmp.showTableView = cmp.showVenn && cmp.view === 'table' && !showTrads;
    var phoneScreen = this.isPhoneScreen();
    var shareInfo = function () {
      var params = [], title = 'Explore Your Bible';
      if (tab === 'library') { params.push('tab=library', 'book=' + B.id); title = B.name + ' \u00b7 Explore Your Bible'; }
      else if (tab === 'story') { params.push('tab=story', 'era=' + eraN); title = E.name + ' \u00b7 Explore Your Bible'; }
      else if (tab === 'timeline') { params.push('tab=timeline'); title = 'Timeline \u00b7 Explore Your Bible'; }
      else if (tab === 'compare') { params.push('tab=compare'); title = 'Compare traditions \u00b7 Explore Your Bible'; }
      else if (tab === 'themes') { params.push('tab=themes', 'theme=' + T.id); title = T.name + ' \u00b7 Explore Your Bible'; }
      else if (tab === 'read') { params.push('tab=read', 'book=' + B.id, 'chap=' + C); if (!isX && tr !== 'bsb') params.push('tr=' + tr); title = B.name + ' ' + C + ' \u00b7 Explore Your Bible'; }
      else if (tab === 'search' && q.trim()) { params.push('tab=search', 'q=' + encodeURIComponent(q.trim())); title = 'Search: ' + q.trim() + ' \u00b7 Explore Your Bible'; }
      var base = 'https://exploreyourbible.com/';
      try {
        var loc = window.location;
        if (/^https?:$/.test(loc.protocol) && !/claude|localhost|127\.0\.0\.1/.test(loc.hostname)) base = loc.origin + loc.pathname;
      } catch (err) {}
      return { url: base + (params.length ? '?' + params.join('&') : ''), title: title };
    };
    var share = function () {
      var info = shareInfo();
      var data = { title: info.title, text: 'Explore the Bible, its story and how Christians read it', url: info.url };
      var copy = function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(info.url).then(function () { self.showToast('Link copied: ' + info.url); },
            function () { self.showToast('Copy this link: ' + info.url); });
        } else self.showToast('Copy this link: ' + info.url);
      };
      if (navigator.share) {
        navigator.share(data).catch(function (err) { if (!err || err.name !== 'AbortError') copy(); });
      } else copy();
    };
    clearTimeout(this._histT);
    this._histT = setTimeout(function () { self.histSync(); }, 0);
    var canBack = (this._histDepth || 0) > 0;
    return {
      nav: { canBack: canBack, back: function () { self.histBack(); } },
      storyViews: storyViews, tradViews: tradViews,
      focusToggle: function (e) { self.focusToggle(e); },
      areaSpeak: function (e) { self.areaSpeak(e); },
      canSpeak: self.ttsSupported(),
      exportLibrary: function () {
        var rows = [['Order', 'Book', 'Testament', 'Group', 'Chapters', 'Key figures', 'Summary', 'In which Bibles']];
        BOOKS.forEach(function (b, i) { var d = DIVM[b.div]; rows.push([i + 1, b.name, d.t === 'OT' ? 'Old Testament' : 'New Testament', d.name, b.ch, b.people, b.sum, 'All Christian Bibles']); });
        XBOOKS.forEach(function (b) { rows.push(['', b.name, 'Catholic & Orthodox (deuterocanonical)', XDIV.name, b.ch, b.people, b.sum, b.trad]); });
        self.exportCSV('bible-books', rows);
      },
      libTitle: testa === 'AP' ? 'Books beyond the Protestant Bible' : testa === 'all' ? 'The 66 books, plus the Catholic & Orthodox books' : 'The 66 books, shelf by shelf',
      canonBtns: canonBtns, canon: canon,
      share: share, tts: tts,
      toast: this._toast || { text: '', show: false },
      showDesktopBtn: phoneScreen && !st.desktopView && !self._narrow, brandPad: phoneScreen && !st.desktopView && !self._narrow ? '64px' : '0',
      hdr: (function () {
        var compact = !!self._narrow;
        var menuOpen = compact && !!st.navOpen, searchOpen = compact && !!st.hdrSearch;
        var SUBS = { overview: 'Start here', library: 'Every book', story: 'Storyline and timeline', themes: 'Threads through Scripture', compare: 'Beliefs and practice', read: 'Full text', search: 'Words and topics', about: 'Why this site, FAQ' };
        var cur = tabs.filter(function (t) { return t.pressed; })[0];
        var sub = { story: 'Storyline', timeline: 'Timeline', compare: st.cmpMode === 'fw' ? 'Frameworks' : 'Beliefs', practice: 'Practice' }[tab];
        return {
          compact: compact, full: !compact, pos: compact ? 'sticky' : 'relative', shadow: compact ? '0 2px 10px rgba(35,30,25,0.08)' : 'none',
          current: cur ? cur.label + (sub ? ' · ' + sub : '') : '',
          menuOpen: menuOpen, menuClosed: !menuOpen, menuAria: menuOpen ? 'Close menu' : 'Open menu',
          searchOpen: searchOpen, searchBg: searchOpen ? '#231E19' : '#FFFDF8', searchFg: searchOpen ? '#FBF7EF' : '#231E19',
          toggleMenu: function () { go({ navOpen: !menuOpen, hdrSearch: false }); },
          toggleSearch: function () { go({ hdrSearch: !searchOpen, navOpen: false }); if (!searchOpen) setTimeout(function () { var el = document.getElementById('book-search'); if (el) el.focus(); }, 60); },
          home: function () { go({ tab: 'overview', navOpen: false, hdrSearch: false }); window.scrollTo(0, 0); },
          items: tabs.map(function (t) {
            return { label: t.label, sub: SUBS[t.id] || '', pressed: t.pressed, bg: t.pressed ? INK : '#FFFDF8', fg: t.pressed ? PAPER : INK, border: t.pressed ? INK : '#E2D8C6',
              pick: function () { go({ tab: t.id, navOpen: false, hdrSearch: false }); window.scrollTo(0, 0); } };
          }),
          listen: function () { go({ navOpen: false }); listen.pick(); },
          share: function () { go({ navOpen: false }); share(); },
          canDesktop: phoneScreen && !st.desktopView,
          listenBg: listen.on ? '#231E19' : '#FFFDF8', listenFg: listen.on ? '#FBF7EF' : '#231E19'
        };
      })(),
      showPhoneBtn: phoneScreen && !!st.desktopView,
      toDesktop: function () { self.setDesktopView(true); },
      toPhone: function () { self.setDesktopView(false); },
      home: (function () {
        var to = function (patch) { return function () { go(patch); window.scrollTo(0, 0); }; };
        return { p66: to({ tab: 'library', testa: 'all', libCanon: 'protestant' }), c73: to({ tab: 'library', testa: 'all', libCanon: 'catholic' }),
          ot: to({ tab: 'library', testa: 'OT', libCanon: 'protestant' }), nt: to({ tab: 'library', testa: 'NT', libCanon: 'protestant' }),
          read: to({ tab: 'read', book: 'gen', chap: 1 }), lib: to({ tab: 'library', testa: 'all', libCanon: 'protestant' }),
          libParts: to({ tab: 'library', testa: 'all', libCanon: 'protestant' }),
          libCanon: to({ tab: 'library', testa: 'all', libCanon: canonId }),
          tl: to({ tab: 'timeline', tlC: -220, tlSpan: 460 }) };
      })(),
      goGap: function () { go({ tab: 'story', era: 9 }); window.scrollTo(0, 0); },
      eraMap: eraMap, bookMap: bookMap,
      tabs: tabs, q: q, trBtns: trBtns, bookOpts: bookOpts, rd: rd, s: s,
      onSearch: function (e) { go({ q: e.target.value, tab: 'search' }); },
      onSearchHere: function (e) { go({ q: e.target.value }); },
      isOverview: tab === 'overview', isLibrary: tab === 'library', isStory: tab === 'story', isThemes: tab === 'themes',
      srTitle: srMode === 'topics' ? 'Where to turn' : 'Search every verse',
      isRead: tab === 'read', isSearch: tab === 'search', tp: tp, srTopics: tab === 'search' && srMode === 'topics', srWords: tab === 'search' && srMode !== 'topics',
      segments: segments, legend: legend,
      filters: filters, divisions: divisions, libCanons: libCanons, libArr: libArr || { groups: [] }, libIsArr: !!libArr, libIsShelves: !libArr,
      eras: eras, era: era, arc: arc, arcSel: arcSel, future: future, tl: tl, isTimeline: tab === 'timeline', cp: cp, chMap: chMap, listen: listen, player: player, cmp: cmp, isCompare: tab === 'compare', parts: parts, part: part, aside: (function () { var off = !asideOpen; var nar = self._narrow; return { open: !off, closed: off, flex: off ? (nar ? '1 1 100%' : '0 0 52px') : '1 1 340px', toggle: function () { var am = Object.assign({}, asideMap); am[tab] = off; go({ asideOpenMap: am }); }, hideRot: nar ? 90 : 0, showRot: nar ? -90 : 0, railDir: nar ? 'row' : 'column', railPad: nar ? '10px 14px' : '16px 6px', railWrite: nar ? 'horizontal-tb' : 'vertical-rl', railLabel: tab === 'read' ? 'Show chapter notes' : 'Show book details' }; })(),
      showAside: tab !== 'compare' && tab !== 'timeline' && tab !== 'practice' && tab !== 'about', isAbout: tab === 'about', pr: pr, isPractice: tab === 'practice',
      themeBtns: themeBtns, strip: strip, theme: theme,
      sel: sel
    };
  }
}

function view(V) {
  return html`<div style="min-height: 100vh; background: #F5EFE3; color: #231E19; font-family: Inter, system-ui, sans-serif; font-size: 15px; line-height: 1.5">

<header style="position: ${V.hdr.pos}; top: 0; z-index: 40; border-bottom: 1px solid #E2D8C6; background: #FBF7EF; box-shadow: ${V.hdr.shadow}">
${(V.showDesktopBtn) ? html`
<button type="button" class="be-dbtn" onClick=${V.toDesktop} aria-label="Switch to desktop view" style="position: fixed; top: calc(12px + env(safe-area-inset-top, 0px)); right: calc(12px + env(safe-area-inset-right, 0px)); z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-width: 52px; min-height: 48px; padding: 6px 8px; border-radius: 12px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.18)"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="12.5" rx="1.5"></rect><path d="M8.5 20.5h7"></path><path d="M12 16.5v4"></path></svg><span style="font-size: 10px; font-weight: 700; white-space: nowrap">Desktop</span></button>
` : null}
${(V.hdr.full) ? html`
<div style="max-width: 1360px; margin: 0 auto; padding: 16px 32px; display: flex; flex-wrap: wrap; align-items: center; gap: 14px 32px">
<div style="display: flex; align-items: center; gap: 12px; min-width: 0; padding-right: ${V.brandPad}">
<svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7A3B1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5c3-1.5 6.5-1.5 10 1 3.5-2.5 7-2.5 10-1v14c-3-1.5-6.5-1.5-10 1-3.5-2.5-7-2.5-10-1z"></path><path d="M12 6v14"></path></svg>
<div>
<div style="font-family: Fraunces, Georgia, serif; font-size: 24px; font-weight: 700; line-height: 1.1">Explore Your Bible</div>
<div style="font-size: 13px; color: #6B5F52">Scripture, story and traditions</div>
</div>
</div>
<nav aria-label="Sections" style="display: flex; flex-wrap: wrap; gap: 6px; flex: 1 1 auto">
${(V.tabs || []).map((t, $index) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="border: none; cursor: pointer; padding: 10px 18px; min-height: 44px; border-radius: 999px; font-size: 15px; font-weight: 600; background: ${t.bg}; color: ${t.fg}">${t.label}</button>
`)}
</nav>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; flex: 0 1 560px; min-width: 0">
<div style="display: flex; align-items: center; gap: 8px; background: #FFFFFF; border: 1px solid #D9CDB8; border-radius: 999px; padding: 0 14px; min-height: 44px; flex: 1 1 200px; min-width: 180px">
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B5F52" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
<label for="book-search" class="sr">Search the Bible</label>
<input id="book-search" type="search" placeholder="Search the Bible…" value=${V.q} onInput=${V.onSearch} style="border: none; background: transparent; font-size: 14px; width: 100%; min-width: 0; text-overflow: ellipsis; color: #231E19; padding: 8px 0" />
</div>
${(V.listen.show) ? html`
${(V.nav.canBack) ? html`<button type="button" onClick=${V.nav.back} aria-label="Back to the previous view" title="Back to the previous view" style="flex: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px 0 10px; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; font-size: 14px; font-weight: 700"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>Back</button>` : null}
<button type="button" onClick=${V.listen.pick} aria-label=${V.listen.aria} title=${V.listen.aria} style="flex: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px; border-radius: 999px; border: 1px solid #231E19; background: #FFFDF8; color: #231E19; font-size: 14px; font-weight: 700">${(V.listen.off) ? html`<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"></path><path d="M16.5 8.5a5 5 0 0 1 0 7"></path><path d="M19 6a8.5 8.5 0 0 1 0 12"></path></svg>` : null}${(V.listen.on) ? html`<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg>` : null}${V.listen.label}</button>
` : null}
${(V.listen.on) ? html`
<button type="button" onClick=${V.listen.back} aria-label="Back one ${V.listen.unit}" title="Back one ${V.listen.unit}" style="flex: none; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11 6v12L3 12z"></path><path d="M20 6v12l-8-6z"></path></svg></button>
<button type="button" onClick=${V.listen.fwd} aria-label="Skip ahead one ${V.listen.unit}" title="Skip ahead one ${V.listen.unit}" style="flex: none; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 6v12l8-6z"></path><path d="M4 6v12l8-6z"></path></svg></button>
` : null}
<button type="button" onClick=${V.share} aria-label="Share this page" style="flex: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 16px; border-radius: 999px; border: none; background: #231E19; color: #FBF7EF; font-size: 14px; font-weight: 700"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="M7.5 7.5L12 3l4.5 4.5"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path></svg>Share</button>
</div>
</div>
` : null}
${(V.hdr.compact) ? html`
<div style="display: flex; align-items: center; gap: 8px; padding: 8px 12px 2px">${(V.nav.canBack) ? html`<button type="button" onClick=${V.nav.back} aria-label="Back to the previous view" style="flex: none; cursor: pointer; width: 44px; height: 44px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg></button>` : null}<button type="button" onClick=${V.hdr.home} aria-label="Explore Your Bible, go to Overview" style="flex: 1 1 auto; min-width: 0; display: flex; align-items: center; gap: 8px; border: none; background: transparent; padding: 4px 0; cursor: pointer; text-align: left; color: #231E19"><svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7A3B1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex: none"><path d="M2 5c3-1.5 6.5-1.5 10 1 3.5-2.5 7-2.5 10-1v14c-3-1.5-6.5-1.5-10 1-3.5-2.5-7-2.5-10-1z"></path><path d="M12 6v14"></path></svg><span style="min-width: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 700; line-height: 1.15; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">Explore Your Bible</span></button><button type="button" onClick=${V.hdr.toggleMenu} aria-expanded=${V.hdr.menuOpen} aria-controls="hdr-menu" aria-label=${V.hdr.menuAria} style="flex: none; cursor: pointer; height: 44px; padding: 0 14px 0 12px; border-radius: 999px; border: none; background: #231E19; color: #FBF7EF; display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700">${(V.hdr.menuOpen) ? html`<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>` : null}${(V.hdr.menuClosed) ? html`<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>` : null}Menu</button></div>
<div style="display: flex; align-items: center; gap: 6px; padding: 2px 12px 8px"><div style="flex: 1 1 auto; min-width: 0; font-size: 13px; font-weight: 700; color: #7A3B1E; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">${V.hdr.current}</div><button type="button" onClick=${V.hdr.toggleSearch} aria-expanded=${V.hdr.searchOpen} aria-controls="hdr-search" aria-label="Search the Bible" style="flex: none; cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; display: flex; align-items: center; justify-content: center; padding: 0; background: ${V.hdr.searchBg}; color: ${V.hdr.searchFg}"><svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg></button>${(V.listen.show) ? html`<button type="button" onClick=${V.listen.pick} aria-label=${V.listen.aria} title=${V.listen.aria} style="flex: none; cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; display: flex; align-items: center; justify-content: center; padding: 0; background: ${V.hdr.listenBg}; color: ${V.hdr.listenFg}">${(V.listen.off) ? html`<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg>` : null}${(V.listen.on) ? html`<svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg>` : null}</button>` : null}<button type="button" onClick=${V.share} aria-label="Share this page" title="Share this page" style="flex: none; cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; display: flex; align-items: center; justify-content: center; padding: 0; background: #FFFDF8; color: #231E19"><svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="M7 8l5-5 5 5"></path><path d="M5 14v6h14v-6"></path></svg></button>${(V.hdr.canDesktop) ? html`<button type="button" onClick=${V.toDesktop} aria-label="Switch to desktop view" title="Switch to desktop view" style="flex: none; cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; display: flex; align-items: center; justify-content: center; padding: 0; background: #FFFDF8; color: #231E19"><svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8M12 16v4"></path></svg></button>` : null}</div>
${(V.hdr.searchOpen) ? html`<div id="hdr-search" style="padding: 0 12px 10px"><div style="display: flex; align-items: center; gap: 8px; background: #FFFFFF; border: 1px solid #D9CDB8; border-radius: 999px; padding: 0 14px; min-height: 44px"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B5F52" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg><label for="book-search" class="sr">Search the Bible</label><input id="book-search" type="search" placeholder="Search the Bible…" value=${V.q} onInput=${V.onSearch} style="border: none; background: transparent; font-size: 16px; width: 100%; min-width: 0; color: #231E19; padding: 8px 0" /></div></div>` : null}
${(V.hdr.menuOpen) ? html`<div id="hdr-menu" style="padding: 4px 12px 14px; display: flex; flex-direction: column; gap: 10px; border-top: 1px solid #EAE1D0"><nav aria-label="Sections" style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; padding-top: 10px">${(V.hdr.items || []).map((t, $index) => html`<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="cursor: pointer; text-align: left; border: 1px solid ${t.border}; border-radius: 12px; padding: 9px 12px; min-height: 52px; background: ${t.bg}; color: ${t.fg}; display: flex; flex-direction: column; justify-content: center; gap: 1px"><span style="font-size: 15px; font-weight: 700">${t.label}</span><span style="font-size: 11px; opacity: 0.8; line-height: 1.3">${t.sub}</span></button>`)}</nav></div>` : null}
` : null}
</header>

<main style="max-width: 1360px; margin: 0 auto; padding: 28px 32px 64px; display: flex; flex-wrap: wrap; gap: 28px; align-items: flex-start; box-sizing: border-box">
<div id="page-main" style="flex: 999 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 24px">

${(V.isOverview) ? html`
<section style="display: flex; flex-direction: column; gap: 24px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Overview</div>
<h1 style="margin: 6px 0 10px; font-family: Fraunces, Georgia, serif; font-size: 44px; line-height: 1.1; font-weight: 700">The Bible: its books, its story, and how Christians read it</h1>
<p style="margin: 0; font-size: 18px; color: #4A3F35; max-width: 720px">Written over more than a thousand years, the Bible tells of God and the nation of Israel in the Old Testament and of Jesus and his followers in the New. Christian traditions count its books differently: 66 in Protestant Bibles, 73 in Catholic Bibles and a few more in Orthodox ones. This guide is organized around the 66, and it also includes the Catholic and Orthodox books, with their full text to read and search, summaries, background, maps and analysis. They are clearly marked wherever they appear.</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px">
<button type="button" onClick=${V.home.p66} style="cursor: pointer; text-align: left; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px; color: #231E19; font: inherit"><span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1">66</span><span style="display: block; color: #6B5F52; font-size: 14px; margin-top: 6px">Protestant books</span><span style="display: block; margin-top: 8px; font-size: 12px; font-weight: 700; color: #7A3B1E">See them in the Library →</span></button>
<button type="button" onClick=${V.home.c73} style="cursor: pointer; text-align: left; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px; color: #231E19; font: inherit"><span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1; color: #6B5848">73</span><span style="display: block; color: #6B5F52; font-size: 14px; margin-top: 6px">Catholic books</span><span style="display: block; margin-top: 8px; font-size: 12px; font-weight: 700; color: #7A3B1E">Catholic order →</span></button>
<button type="button" onClick=${V.home.ot} style="cursor: pointer; text-align: left; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px; color: #231E19; font: inherit"><span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1; color: #8A3E22">39</span><span style="display: block; color: #6B5F52; font-size: 14px; margin-top: 6px">Old Testament</span><span style="display: block; margin-top: 8px; font-size: 12px; font-weight: 700; color: #7A3B1E">Browse →</span></button>
<button type="button" onClick=${V.home.nt} style="cursor: pointer; text-align: left; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px; color: #231E19; font: inherit"><span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1; color: #1F5A7A">27</span><span style="display: block; color: #6B5F52; font-size: 14px; margin-top: 6px">New Testament</span><span style="display: block; margin-top: 8px; font-size: 12px; font-weight: 700; color: #7A3B1E">Browse →</span></button>
<button type="button" onClick=${V.home.read} style="cursor: pointer; text-align: left; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px; color: #231E19; font: inherit"><span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1">1,189</span><span style="display: block; color: #6B5F52; font-size: 14px; margin-top: 6px">chapters</span><span style="display: block; margin-top: 8px; font-size: 12px; font-weight: 700; color: #7A3B1E">Start reading →</span></button>
</div>

<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; align-items: baseline">
<h2 style="margin: 0; padding-right: 84px; font-family: Fraunces, Georgia, serif; font-size: 24px">How the parts fit together</h2>
<div style="font-size: 14px; color: #6B5F52">The Old Testament holds about three-quarters of the Bible: 929 of 1,189 chapters.</div>
</div>
<button type="button" onClick=${V.home.lib} style="align-self: flex-start; cursor: pointer; border: none; background: transparent; color: #7A3B1E; font-size: 14px; font-weight: 700; padding: 2px 0; min-height: 32px; text-decoration: underline; text-underline-offset: 3px">Explore every book in the Library →</button>
<div style="display: flex; height: 30px; border-radius: 8px; overflow: hidden; gap: 2px" role="group" aria-label="Share of the Bible's chapters in each part">
${(V.parts || []).map((p, $index) => html`
<button type="button" onClick=${p.pick} title=${p.segLabel} aria-label=${p.segLabel} style="flex: ${p.ch} 1 0px; min-width: 6px; padding: 0; border: none; cursor: pointer; background: ${p.color}; opacity: ${p.segOp}"></button>
`)}
</div>
<p style="margin: 0; font-size: 14px; color: #4A3F35">Tap a part to read more about it.</p>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; grid-auto-flow: dense">
${(V.parts || []).map((p, $index) => html`
<button type="button" onClick=${p.pick} aria-expanded=${p.pressed} style="cursor: pointer; text-align: left; border-radius: 12px; padding: 16px; background: ${p.color}; border: 3px solid ${p.border}; box-shadow: ${p.ring}; display: flex; flex-direction: column; gap: 4px; color: #FFFFFF">
<span style="display: flex; justify-content: space-between; align-items: center; gap: 6px; font-weight: 700; color: #FFFFFF">${p.name}<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${p.chev}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg></span>
<span style="font-size: 14px; color: rgba(255,255,255,0.92)">${p.short}</span>
<span style="font-size: 12px; color: rgba(255,255,255,0.78); margin-top: 2px">${p.meta}</span>
</button>
${(p.pressed) ? html`
<div id="part-detail" style="grid-column: 1 / -1; scroll-margin-top: 12px; border-radius: 14px; padding: 18px 20px; background: ${V.part.bg}; border-left: 5px solid ${V.part.color}; display: flex; flex-direction: column; gap: 12px">
<div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px"><h3 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 22px; color: ${V.part.color}">${V.part.name}</h3><button type="button" onClick=${V.part.close} style="cursor: pointer; border: none; background: transparent; color: #4A3F35; font-size: 13px; font-weight: 600; min-height: 36px">Show less</button></div>
${(V.part.more || []).map((para, $index) => html`
<p style="margin: 0; font-size: 16px; line-height: 1.65; color: #31291F; max-width: 780px">${para}</p>
`)}
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center"><span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-right: 4px">Books</span>
${(V.part.books || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: none; border-radius: 999px; padding: 5px 11px; min-height: 32px; font-size: 13px; font-weight: 600; color: #FFFFFF; background: ${c.bg}">${c.name}</button>
`)}
</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center"><span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-right: 4px">Good places to start</span>
${(V.part.refs || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 5px 11px; min-height: 32px; font-size: 13px; font-weight: 600">${c.label}</button>
`)}
</div>
<button type="button" onClick=${V.part.toLib} style="align-self: flex-start; cursor: pointer; border: none; background: transparent; color: #7A3B1E; font-size: 14px; font-weight: 700; padding: 2px 0; min-height: 32px; text-decoration: underline; text-underline-offset: 3px">See these books in the Library →</button>
</div>
` : null}
`)}
</div>
</div>

<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Between the testaments</div>
<h2 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 24px">Why the New Testament world looks so different</h2>
<p style="margin: 0; color: #4A3F35; max-width: 760px">The Old Testament ends around 430 BC (Malachi), with the Jews back home in a small Persian province, rebuilding. The New Testament opens about 400 years later in a different world: Rome is in charge, Herod is king, people speak Greek, and groups like the Pharisees and Sadducees appear. No Protestant book covers those years, but three empires and one revolt shaped them:</p>
</div>
<ol style="list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 12px">
<li style="border-radius: 12px; padding: 14px; background: #F5EEE0"><div style="font-size: 12px; font-weight: 700; color: #7A5512">539–332 BC</div><div style="font-weight: 700; margin: 2px 0 4px">Persian rule</div><div style="font-size: 14px; color: #4A3F35">Persia lets the exiles go home. The Temple is rebuilt. This is where the Old Testament story stops.</div></li>
<li style="border-radius: 12px; padding: 14px; background: #E8ECF5"><div style="font-size: 12px; font-weight: 700; color: #2E4A8A">332–167 BC</div><div style="font-weight: 700; margin: 2px 0 4px">Greek rule</div><div style="font-size: 14px; color: #4A3F35">Alexander the Great conquers the region, and Greek becomes the common language. The Hebrew Scriptures are translated into Greek (the Septuagint), the version the New Testament writers often quote.</div></li>
<li style="border-radius: 12px; padding: 14px; background: #F5E8EC"><div style="font-size: 12px; font-weight: 700; color: #8A2E4A">167–63 BC</div><div style="font-weight: 700; margin: 2px 0 4px">The Maccabean revolt</div><div style="font-size: 14px; color: #4A3F35">A Greek king bans Jewish worship and defiles the Temple. The Maccabee family leads a revolt, rededicates the Temple (the origin of Hanukkah), and Judea is independent for about a century.</div></li>
<li style="border-radius: 12px; padding: 14px; background: #E6EFF4"><div style="font-size: 12px; font-weight: 700; color: #1F5A7A">63 BC onward</div><div style="font-weight: 700; margin: 2px 0 4px">Roman rule</div><div style="font-size: 14px; color: #4A3F35">Rome takes Jerusalem and later makes Herod the Great king of Judea. He rebuilds the Temple on a grand scale, and this is the world Jesus is born into.</div></li>
</ol>
<div style="display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between">
<div style="font-size: 13px; color: #6B5F52">Catholic and Orthodox Bibles include 1–2 Maccabees, which tell part of this story.</div>
<button type="button" onClick=${V.goGap} style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 14px; font-weight: 600">See it on the map →</button><button type="button" onClick=${V.home.tl} style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; font-size: 14px; font-weight: 600">See this period on the Timeline →</button>
</div>
</div>

<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div>
<h2 style="margin: 0 0 4px; font-family: Fraunces, Georgia, serif; font-size: 24px">How other traditions arrange Scripture</h2>
<button type="button" onClick=${V.home.libCanon} style="align-self: flex-start; cursor: pointer; border: none; background: transparent; color: #7A3B1E; font-size: 14px; font-weight: 700; padding: 2px 0; min-height: 32px; text-decoration: underline; text-underline-offset: 3px">Browse this arrangement in the Library →</button>
<p style="margin: 0; font-size: 14px; color: #4A3F35">Tap a tradition to see how it organizes its books. Dashed outlines mark books that are not in the Protestant Bible.</p>
</div>
<div role="group" aria-label="Traditions" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px">
${(V.canonBtns || []).map((k, $index) => html`
<button type="button" onClick=${k.pick} aria-pressed=${k.pressed} style="cursor: pointer; text-align: left; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 2px; color: #231E19; background: ${k.bg}; border: ${k.border}">
<span style="font-family: Fraunces, Georgia, serif; font-size: 32px; font-weight: 700; line-height: 1.1">${k.num}</span>
<span style="font-weight: 600">${k.name}</span>
<span style="font-size: 13px; color: #6B5F52">${k.desc}</span>
</button>
`)}
</div>
<div style="border-top: 1px solid #E2D8C6; padding-top: 16px; display: flex; flex-direction: column; gap: 14px">
<div>
<h3 style="margin: 0 0 4px; font-family: Fraunces, Georgia, serif; font-size: 20px">${V.canon.title}</h3>
<p style="margin: 0; font-size: 14px; color: #4A3F35; max-width: 820px">${V.canon.intro}</p>
</div>
${(V.canon.groups || []).map((g, $index) => html`
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 13px; font-weight: 700; color: #231E19">${g.name}</div>
${(g.hasNote) ? html`<div style="font-size: 13px; color: #6B5F52; margin-top: -4px">${g.note}</div>` : null}
${(g.hasItems) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 6px">
${(g.items || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} disabled=${c.disabled} title=${c.title} style="cursor: pointer; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600; background: ${c.bg}; color: ${c.fg}; border: ${c.border}">${c.label}</button>
`)}
</div>
` : null}
</div>
`)}
</div>
</div>
</section>
` : null}

${(V.isLibrary) ? html`
<section style="display: flex; flex-direction: column; gap: 22px">
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end; justify-content: space-between">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Library</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">${V.libTitle}</h1>
<button type="button" onClick=${V.exportLibrary} style="margin-top: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>Export book list (CSV)</button>
</div>
${(V.libIsShelves) ? html`<div role="group" aria-label="Filter by testament" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px">
${(V.filters || []).map((f, $index) => html`
<button type="button" onClick=${f.pick} aria-pressed=${f.pressed} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 600; background: ${f.bg}; color: ${f.fg}">${f.label}</button>
`)}
</div>` : null}
</div>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px"><span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52">Arrange as</span><div role="group" aria-label="Arrange the books as" style="display: flex; flex-wrap: wrap; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 22px">${(V.libCanons || []).map((k, $index) => html`<button type="button" onClick=${k.pick} aria-pressed=${k.pressed} style="border: none; cursor: pointer; padding: 8px 14px; min-height: 40px; border-radius: 999px; font-size: 13px; font-weight: 700; background: ${k.bg}; color: ${k.fg}">${k.label}</button>`)}</div></div>
${(V.libIsArr) ? html`
<div style="display: flex; flex-direction: column; gap: 6px"><h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">${V.libArr.title}</h2><p style="margin: 0; font-size: 15px; line-height: 1.55; color: #4A3F35; max-width: 820px">${V.libArr.intro}</p></div>
${(V.libArr.groups || []).map((g, $index) => html`
<div style="display: flex; flex-direction: column; gap: 8px"><h3 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 20px">${g.name}</h3>${(g.hasNote) ? html`<div style="font-size: 14px; color: #4A3F35; max-width: 820px">${g.note}</div>` : null}<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(132px, 1fr)); gap: 10px">${(g.tiles || []).map((b, $index) => html`<button type="button" onClick=${b.pick} disabled=${b.disabled} aria-pressed=${b.pressed} aria-label=${b.aria} style="cursor: pointer; text-align: left; border-radius: 10px; padding: 10px 12px; min-height: 72px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px; background: ${b.bg}; color: ${b.fg}; border: ${b.border}"><span style="font-family: Fraunces, Georgia, serif; font-size: 16px; font-weight: 700; line-height: 1.2">${b.name}</span><span style="font-size: 11px; font-weight: 600; opacity: 0.9">${b.ch}</span></button>`)}</div></div>
`)}
` : null}
${(V.libIsShelves) ? html`
${(V.divisions || []).map((d, $index) => html`
<div id=${d.domId} style="display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 12px">
<span aria-hidden="true" style="width: 12px; height: 12px; border-radius: 3px; background: ${d.color}"></span>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 22px">${d.name}</h2>
<span style="font-size: 13px; color: #6B5F52">${d.meta}</span>
<span style="font-size: 14px; color: #4A3F35; flex: 1 1 260px">${d.blurb}</span>
</div>
${(d.hasPart) ? html`
<div style="border-radius: 12px; padding: 12px 14px; background: ${d.partBg}; border-left: 4px solid ${d.partColor}; display: flex; flex-direction: column; gap: 10px"><div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px"><div style="flex: 1 1 260px; font-size: 15px; line-height: 1.5; color: #231E19"><strong style="color: ${d.partColor}">${d.partName}:</strong> ${d.partShort} <span style="color: #6B5F52; font-size: 13px">${d.partSpan}</span></div><button type="button" onClick=${d.partToggle} aria-expanded=${d.partOpen} aria-label=${d.partAria} style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 5px 12px 5px 10px; min-height: 36px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${d.partChev}deg); transition: transform 0.15s ease"><path d="M6 9l6 6 6-6"></path></svg>${d.partLabel}</button></div>
${(d.partOpen) ? html`
${(d.partMore || []).map((para, $index) => html`<p style="margin: 0; font-size: 15px; line-height: 1.65; color: #31291F; max-width: 820px">${para}</p>`)}
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center"><span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-right: 4px">Good places to start</span>${(d.partRefs || []).map((c, $index) => html`<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 5px 11px; min-height: 32px; font-size: 13px; font-weight: 600">${c.label}</button>`)}</div>
` : null}
</div>
` : null}
${(d.hasNote) ? html`
<div style="border: 2px dashed #8C7A58; border-radius: 12px; padding: 12px 14px; background: #FFFDF8; font-size: 14px; color: #31291F">${d.note}</div>
` : null}
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 10px">
${(d.books || []).map((b, $index) => html`
<button type="button" onClick=${b.pick} aria-pressed=${b.pressed} aria-label=${b.aria} style="cursor: pointer; border: ${b.border}; text-align: left; border-radius: 10px; padding: 12px; min-height: 96px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; color: ${b.fg}; background: ${b.bg}; outline: ${b.ring}; outline-offset: 2px">
<span style="display: block">
<span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 22px; font-weight: 700; line-height: 1.1">${b.abbr}</span>
<span style="display: block; font-size: 12px; opacity: 0.95">${b.name}</span>
</span>
<span style="display: block">
<span style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 4px">${b.ch} ch</span>
<span aria-hidden="true" style="display: block; height: 4px; border-radius: 2px; background: ${b.barTrack}"><span style="display: block; height: 4px; border-radius: 2px; background: ${b.barFill}; width: ${b.pct}%"></span></span>
</span>
</button>
`)}
</div>
</div>
`)}
` : null}
</section>
` : null}

${(V.isStory) ? html`
<section style="display: flex; flex-direction: column; gap: 20px">
<div role="group" aria-label="Story view" style="display: flex; flex-wrap: wrap; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px; align-self: flex-start">${(V.storyViews || []).map((v, $index) => html`<button type="button" onClick=${v.pick} aria-pressed=${v.pressed} style="border: none; cursor: pointer; padding: 8px 18px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${v.bg}; color: ${v.fg}">${v.label}</button>`)}</div>
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Story · Storyline</div>
<h1 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">One story in nine movements and eleven eras</h1>
<p style="margin: 0; color: #4A3F35; max-width: 760px">The top row is the Bible’s big story, from creation to new creation. The brackets show which historical eras each movement covers. Pick either one to see who lived then and which books tell the story. Dates are approximate, and some are debated, especially the Exodus.</p>
</div>
<div data-focus="wide" style="display: flex; flex-direction: column; gap: 18px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="overflow-x: auto; padding: 4px 2px 10px">
<div style="display: grid; grid-template-columns: repeat(24, 79px); column-gap: 10px; min-width: max-content">
<div style="grid-row: 1; grid-column: 1 / -1; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">The big story · tap a movement to see how it lines up with the eras</div>
${(V.arc || []).map((a, $index) => html`
<button type="button" onClick=${a.pick} aria-pressed=${a.pressed} title=${a.tip} style="grid-row: 2; grid-column: ${a.col}; cursor: pointer; min-height: 52px; border-radius: 12px; border: 2px solid ${a.border}; background: ${a.bg}; color: ${a.fg}; padding: 6px 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.2; min-width: 0"><span style="font-size: 14px; font-weight: 700; white-space: nowrap">${a.label}</span><span style="font-size: 11px; font-weight: 600; color: ${a.sub}; white-space: nowrap">${a.span}</span></button>
`)}
${(V.arc || []).map((a, $index) => html`
<div aria-hidden="true" style="grid-row: 3; grid-column: ${a.col}; height: 12px; margin: 4px 10px 6px; border: ${a.lw}px solid ${a.line}; border-bottom: none; border-radius: 8px 8px 0 0"></div>
`)}
${(V.eras || []).map((e, $index) => html`
<button type="button" onClick=${e.pick} aria-pressed=${e.pressed} style="grid-row: 4; grid-column: ${e.col}; cursor: pointer; text-align: left; border-radius: 12px; padding: 12px; min-height: 120px; display: flex; flex-direction: column; gap: 6px; background: ${e.bg}; color: ${e.fg}; border: 2px solid ${e.border}; box-shadow: inset 0 4px 0 ${e.bar}">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; font-size: 13px; font-weight: 700; background: ${e.dotBg}; color: ${e.dotFg}">${e.n}</span>
<span style="font-weight: 700; font-size: 15px; line-height: 1.25">${e.name}</span>
<span style="font-size: 12px; color: ${e.sub}">${e.dates}</span>
</button>
`)}
<button type="button" onClick=${V.future.pick} aria-pressed=${V.future.pressed} style="grid-row: 4; grid-column: 23 / span 2; cursor: pointer; text-align: left; border-radius: 12px; padding: 12px; min-height: 120px; display: flex; flex-direction: column; gap: 6px; background: ${V.future.bg}; color: ${V.future.fg}; border: 2px dashed ${V.future.border}">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; font-size: 15px; font-weight: 700; background: #EAE1D0; color: #231E19">✦</span>
<span style="font-weight: 700; font-size: 15px; line-height: 1.25">New creation</span>
<span style="font-size: 12px; color: ${V.future.sub}">Still to come</span>
</button>
</div>
</div>
</div>
<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; border-left: 6px solid ${V.arcSel.color}; padding: 20px 24px; display: flex; flex-direction: column; gap: 14px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; align-items: baseline">
<div style="font-size: 13px; color: #6B5F52; font-weight: 600">The big story · movement ${V.arcSel.n} of 9 · ${V.arcSel.span}</div>
<div style="display: flex; gap: 6px">
${(V.arcSel.hasPrev) ? html`<button type="button" onClick=${V.arcSel.goPrev} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600">${V.arcSel.prevLabel}</button>` : null}
${(V.arcSel.hasNext) ? html`<button type="button" onClick=${V.arcSel.goNext} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600">${V.arcSel.nextLabel}</button>` : null}
</div>
</div>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 28px; line-height: 1.15"><span style="color: ${V.arcSel.color}">${V.arcSel.label}:</span> ${V.arcSel.title}</h2>
<p style="margin: 0; font-size: 16px; line-height: 1.65; color: #31291F; max-width: 760px">${V.arcSel.text}</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-right: 4px">Key passages</span>
${(V.arcSel.refs || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600">${c.label}</button>
`)}
</div>
${(V.arcSel.hasEras) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
<span style="font-size: 14px; color: #4A3F35; margin-right: 4px">${V.arcSel.eraIntro}</span>
${(V.arcSel.eraChips || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="cursor: pointer; border: 1px solid #D9CDB8; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600; background: ${c.bg}; color: ${c.fg}">${c.label}</button>
`)}
</div>
` : null}
${(V.arcSel.isFuture) ? html`
<div style="font-size: 14px; color: #4A3F35">This movement has no era yet: it is the hope the Bible ends with. The era details below stay on the last era you picked.</div>
` : null}
${(V.arcSel.showTimeline) ? html`
<button type="button" onClick=${V.arcSel.goTimeline} style="align-self: flex-start; cursor: pointer; border: none; border-radius: 999px; padding: 8px 16px; min-height: 40px; font-size: 14px; font-weight: 700; background: #231E19; color: #FBF7EF">Follow the church to today on the Timeline →</button>
` : null}
</div>
<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div>
<div style="font-size: 13px; color: #6B5F52; font-weight: 600">Era ${V.era.n} of 11 · ${V.era.dates}</div>
<h2 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.15">${V.era.name}</h2>
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 760px">
<p style="margin: 0; font-size: 17px; color: #31291F; max-width: 760px">${V.era.sum}</p>
${(V.era.moreOpen) ? html`
<div style="display: flex; flex-direction: column; gap: 12px; font-size: 16px; line-height: 1.65; color: #31291F">
${(V.era.more || []).map((para, $index) => html`
<p style="margin: 0">${para}</p>
`)}
</div>
` : null}
<button type="button" onClick=${V.era.toggleMore} aria-expanded=${V.era.moreOpen} style="align-self: flex-start; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 6px 12px 6px 8px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 14px; font-weight: 600"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.era.moreChevron}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.era.moreLabel}</button>
</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 24px">
<div style="flex: 1 1 220px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">Key people</div>
<div>${V.era.people}</div>
</div>
<div style="flex: 2 1 320px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Books set in this era</div>
${(V.era.hasBooks) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(V.era.books || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: none; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 14px; font-weight: 600; color: #FFFFFF; background: ${c.bg}; outline: ${c.ring}; outline-offset: 2px">${c.name}</button>
`)}
</div>
` : null}
${(V.era.noBooks) ? html`
<div style="color: #4A3F35; font-size: 14px">No Protestant book is set here. The Catholic Bible's 1–2 Maccabees cover part of this period.</div>
` : null}
</div>
</div>
</div>
<div data-focus="map" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">Map: ${V.era.name}</h2>
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center; justify-content: flex-end">
<div role="group" aria-label="Map zoom" style="display: flex; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; box-shadow: 0 1px 3px rgba(0,0,0,0.15); overflow: hidden">
<button type="button" onClick=${V.eraMap.zoomOut} disabled=${V.eraMap.noOut} aria-label="Zoom out" style="cursor: pointer; width: 40px; height: 40px; border: none; background: transparent; color: ${V.eraMap.outColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path></svg></button>
<span aria-hidden="true" style="width: 1px; background: #D9CDB8"></span>
<button type="button" onClick=${V.eraMap.zoomIn} disabled=${V.eraMap.noIn} aria-label="Zoom in" style="cursor: pointer; width: 40px; height: 40px; border: none; background: transparent; color: ${V.eraMap.inColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<button type="button" onClick=${V.eraMap.toggle} style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; font-size: 13px; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.15)">${V.eraMap.toggleLabel}</button>
</div>
<div onPointerDown=${V.eraMap.down} onPointerMove=${V.eraMap.move} onPointerUp=${V.eraMap.up} onPointerCancel=${V.eraMap.up} onWheel=${V.eraMap.wheel} data-fit="1" data-noread="1" style="position: relative; width: 100%; aspect-ratio: ${V.eraMap.aspect}; overflow: hidden; border-radius: 12px; background: #C7DADB; border: 1px solid #D9CDB8; touch-action: none; user-select: none; cursor: ${V.eraMap.cursor}">
<div style="position: absolute; left: ${V.eraMap.left}%; top: ${V.eraMap.top}%; width: ${V.eraMap.width}%; height: ${V.eraMap.height}%; transition: ${V.eraMap.transition}">
<img src="basemap.svg" alt="" draggable="false" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: block; pointer-events: none" />
<svg aria-hidden="true" viewBox="0 0 7372.37 5200" preserveAspectRatio="none" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: visible">
${(V.eraMap.routes || []).map((r, $index) => html`
<polyline points=${r.points} fill="none" stroke=${r.color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85" vector-effect="non-scaling-stroke"></polyline>
`)}
</svg>
${(V.eraMap.labels || []).map((l, $index) => html`
<div aria-hidden="true" style="position: absolute; left: ${l.x}%; top: ${l.y}%; transform: translate(${l.tx}, -50%) rotate(${l.rot}deg); white-space: nowrap; pointer-events: none; font-size: ${l.size}px; font-weight: ${l.fw}; font-family: ${l.font}; font-style: ${l.fstyle}; letter-spacing: ${l.ls}; color: ${l.color}; text-shadow: 0 0 3px rgba(239,228,203,0.9)">${l.name}</div>
`)}
${(V.eraMap.pins || []).map((p, $index) => html`
<div style="position: absolute; width: 0; height: 0; left: ${p.x}%; top: ${p.y}%; z-index: ${p.z}">
<button type="button" onClick=${p.pick} aria-label=${p.aria} style="position: absolute; left: -12px; top: -12px; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #FFFDF8; padding: 0; cursor: pointer; font-size: 11px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,0.35); background: ${p.bg}">${p.num}</button>
${(p.showLabel) ? html`
<span style="position: absolute; white-space: nowrap; font-size: 12px; font-weight: 700; color: #231E19; background: rgba(255,253,248,0.9); padding: 1px 6px; border-radius: 4px; pointer-events: none; left: ${p.lx}; top: ${p.ly}; transform: translateX(${p.tx})">${p.name}</span>
` : null}
</div>
`)}
</div>
</div>
${(V.eraMap.hasLegend) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 6px 16px">
${(V.eraMap.legend || []).map((g, $index) => html`
<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #4A3F35"><span aria-hidden="true" style="width: 22px; height: 4px; border-radius: 2px; background: ${g.color}"></span>${g.label}</span>
`)}
</div>
` : null}
<button type="button" onClick=${V.eraMap.toggleList} aria-expanded=${V.eraMap.listOpen} style="cursor: pointer; align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 6px 12px 6px 10px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 13px; font-weight: 600"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.eraMap.chevron}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.eraMap.listLabel}</button>
${(V.eraMap.listOpen) ? html`
<ol style="list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2px 12px">
${(V.eraMap.list || []).map((it, $index) => html`
<li><button type="button" onClick=${it.pick} aria-pressed=${it.pressed} style="width: 100%; min-height: 40px; text-align: left; cursor: pointer; border: none; border-radius: 8px; padding: 6px 8px; display: flex; gap: 10px; align-items: baseline; font-size: 14px; color: #231E19; background: ${it.bg}"><span style="flex: none; width: 22px; height: 22px; border-radius: 50%; color: #FFFFFF; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; background: ${it.dot}">${it.num}</span><span><strong>${it.name}</strong> <span style="color: #4A3F35">${it.note}</span></span></button></li>
`)}
</ol>
` : null}
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px">
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 16px"><div style="font-family: Fraunces, Georgia, serif; font-size: 26px; font-weight: 700; color: #8A2E4A">722 BC</div><div style="font-size: 14px; color: #4A3F35">The northern kingdom, Israel, falls to Assyria.</div></div>
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 16px"><div style="font-family: Fraunces, Georgia, serif; font-size: 26px; font-weight: 700; color: #8A2E4A">586 BC</div><div style="font-size: 14px; color: #4A3F35">Judah and Jerusalem fall to Babylon, and the Temple is destroyed.</div></div>
</div>
</section>
` : null}

${(V.isThemes) ? html`
<section style="display: flex; flex-direction: column; gap: 20px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Themes</div>
<h1 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">Threads from Genesis to Revelation</h1>
<p style="margin: 0; color: #4A3F35; max-width: 720px">Pick a thread to light up every book it runs through.</p>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px">
${(V.themeBtns || []).map((t, $index) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="cursor: pointer; text-align: left; border-radius: 12px; padding: 14px 16px; min-height: 72px; background: ${t.bg}; color: ${t.fg}; border: 1px solid ${t.border}">
<span style="display: block; font-weight: 700">${t.name}</span>
<span style="display: block; font-size: 13px; color: ${t.sub}">${t.short}</span>
</button>
`)}
</div>
<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 18px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px">${V.theme.name}</h2>
<div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: stretch">
<div style="flex: 1 1 260px; background: #F7EDE8; border-radius: 12px; padding: 16px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #8A3E22; margin-bottom: 6px">In the Old Testament</div>
<div style="font-size: 15px">${V.theme.ot}</div>
</div>
<div aria-hidden="true" style="display: flex; align-items: center; color: #6B5F52"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"></path><path d="M14 6l6 6-6 6"></path></svg></div>
<div style="flex: 1 1 260px; background: #E6EFF4; border-radius: 12px; padding: 16px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1F5A7A; margin-bottom: 6px">Fulfilled in the New</div>
<div style="font-size: 15px">${V.theme.nt}</div>
</div>
</div>
<div style="display: flex; flex-direction: column; gap: 12px; max-width: 820px">
${(V.theme.moreOpen) ? html`
<div style="display: flex; flex-direction: column; gap: 12px; font-size: 16px; line-height: 1.65; color: #31291F">
${(V.theme.more || []).map((para, $index) => html`
<p style="margin: 0">${para}</p>
`)}
</div>
` : null}
<button type="button" onClick=${V.theme.toggleMore} aria-expanded=${V.theme.moreOpen} style="align-self: flex-start; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 6px 12px 6px 8px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 14px; font-weight: 600"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.theme.moreChevron}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.theme.moreLabel}</button>
</div>
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Where it appears across all 66 books</div>
<div style="display: flex; gap: 2px">
${(V.strip || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} aria-label=${c.name} title=${c.name} style="flex: 1 1 0px; min-width: 0; height: 44px; border: none; padding: 0; border-radius: 3px; cursor: pointer; background: ${c.bg}"></button>
`)}
</div>
<div style="display: flex; gap: 2px; margin-top: 6px; font-size: 12px; font-weight: 600; color: #6B5F52">
<div style="flex: 39 1 0px; border-top: 2px solid #8A3E22; padding-top: 4px">Old Testament</div>
<div style="flex: 27 1 0px; border-top: 2px solid #1F5A7A; padding-top: 4px">New Testament</div>
</div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(V.theme.books || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: none; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 14px; font-weight: 600; color: #FFFFFF; background: ${c.bg}; outline: ${c.ring}; outline-offset: 2px">${c.name}</button>
`)}
</div>
</div>
</section>
` : null}

${(V.isTimeline) ? html`
<section style="display: flex; flex-direction: column; gap: 18px">
<div role="group" aria-label="Story view" style="display: flex; flex-wrap: wrap; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px; align-self: flex-start">${(V.storyViews || []).map((v, $index) => html`<button type="button" onClick=${v.pick} aria-pressed=${v.pressed} style="border: none; cursor: pointer; padding: 8px 18px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${v.bg}; color: ${v.fg}">${v.label}</button>`)}</div>
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Story · Timeline</div>
<h1 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">From creation to today</h1>
<p style="margin: 0; color: #4A3F35; max-width: 760px">Zoom in on any period to see more events. The beginnings, from creation to Babel, are left undated, as Genesis leaves them; dates from Abraham to about 1000 BC are traditional and approximate. Hover over an event, or tap it, to see its source, with links to read further.</p>
</div>
<div data-focus="wide" style="display: flex; flex-direction: column; gap: 18px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 16px 18px; display: flex; flex-direction: column; gap: 14px">
<div role="group" aria-label="Jump to a period" style="display: flex; flex-wrap: wrap; gap: 6px">
${(V.tl.presets || []).map((p, $index) => html`
<button type="button" onClick=${p.pick} aria-pressed=${p.pressed} style="cursor: pointer; border: 1px solid #D9CDB8; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600; background: ${p.bg}; color: ${p.fg}">${p.label}</button>
`)}
</div>
<div style="display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center">
<div role="group" aria-label="Zoom" style="display: flex; align-items: center; gap: 6px">
<button type="button" onClick=${V.tl.zoomOut} disabled=${V.tl.noOut} aria-label="Zoom out" style="cursor: pointer; width: 36px; height: 36px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19; font-size: 18px; font-weight: 700; padding: 0">−</button>
<button type="button" onClick=${V.tl.zoomIn} disabled=${V.tl.noIn} aria-label="Zoom in" style="cursor: pointer; width: 36px; height: 36px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19; font-size: 18px; font-weight: 700; padding: 0">+</button>
</div>
<div style="font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 700; white-space: nowrap">${V.tl.rangeLabel}</div>
<div style="font-size: 13px; color: #6B5F52">Drag the handles under the timeline to zoom, or drag the shaded window to move.</div>
</div>
<div role="group" aria-label="Show or hide traditions" style="display: flex; flex-wrap: wrap; gap: 6px 14px; align-items: center">
${(V.tl.cats || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="cursor: pointer; border: none; background: transparent; padding: 4px 2px; min-height: 32px; display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #31291F; opacity: ${c.op}; text-decoration: ${c.deco}"><span aria-hidden="true" style="width: 12px; height: 12px; border-radius: 50%; background: ${c.color}"></span>${c.label}</button>
`)}
</div>
</div>
<div onPointerDown=${V.tl.down} onPointerMove=${V.tl.move} onPointerUp=${V.tl.up} onPointerCancel=${V.tl.up} style="position: relative; height: 240px; overflow: hidden; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; touch-action: pan-y; user-select: none; cursor: ${V.tl.cursor}"><div style="position: absolute; bottom: 6px; right: 8px; z-index: 8; display: flex; gap: 6px"><button type="button" onClick=${V.tl.zoomOut} disabled=${V.tl.noOut} aria-label="Zoom out on the timeline" style="cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; background: rgba(255,253,248,0.95); box-shadow: 0 1px 3px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; padding: 0; color: #231E19"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path></svg></button><button type="button" onClick=${V.tl.zoomIn} disabled=${V.tl.noIn} aria-label="Zoom in on the timeline" style="cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; background: rgba(255,253,248,0.95); box-shadow: 0 1px 3px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; padding: 0; color: #231E19"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M12 5v14"></path></svg></button></div><button type="button" onClick=${V.tl.panL} disabled=${V.tl.noL} aria-label="Move earlier in time" style="position: absolute; left: 8px; top: 78px; z-index: 8; cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; background: rgba(255,253,248,0.95); box-shadow: 0 1px 3px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; padding: 0; color: ${V.tl.lColor}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg></button><button type="button" onClick=${V.tl.panR} disabled=${V.tl.noR} aria-label="Move later in time" style="position: absolute; right: 8px; top: 78px; z-index: 8; cursor: pointer; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D9CDB8; background: rgba(255,253,248,0.95); box-shadow: 0 1px 3px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; padding: 0; color: ${V.tl.rColor}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"></path></svg></button>

${(V.tl.bands || []).map((b, $index) => html`
<div aria-hidden="true" style="position: absolute; top: 0; bottom: 0; left: ${b.x}%; width: ${b.w}%; background: ${b.bg}; border-left: 1px dashed #E2D8C6"><span style="position: absolute; left: 6px; bottom: 3px; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #A89A80; white-space: nowrap">${b.label}</span></div>
`)}
<div aria-hidden="true" style="position: absolute; left: 0; right: 0; top: 186px; height: 2px; background: #8C7A58"></div>
${(V.tl.undated) ? html`<div aria-hidden="true" style="position: absolute; top: 0; bottom: 0; left: 0; width: ${V.tl.undW}%; background: repeating-linear-gradient(135deg, rgba(140,122,88,0.07) 0 6px, transparent 6px 12px); pointer-events: none"><div style="position: absolute; left: 0; top: 186px; width: 100%; height: 2px; background: repeating-linear-gradient(90deg, #B9AA90 0 6px, #FFFDF8 6px 12px)"></div><div style="position: absolute; left: 0; top: 0; bottom: 0; width: 48px; background: linear-gradient(90deg, #FFFDF8, rgba(255,253,248,0))"></div><span style="position: absolute; right: 6px; top: 192px; font-size: 11px; font-style: italic; color: #8C7A58; white-space: nowrap">no dates ◂</span></div>` : null}
${(V.tl.ticks || []).map((t, $index) => html`
<div aria-hidden="true" style="position: absolute; top: 186px; left: ${t.x}%; height: 8px; border-left: 1px solid #8C7A58"><span style="position: absolute; top: 9px; left: 0; transform: translateX(-50%); font-size: 11px; font-weight: 600; color: #6B5F52; white-space: nowrap">${t.label}</span></div>
`)}
${(V.tl.bars || []).map((b, $index) => html`
<div aria-hidden="true" style="position: absolute; top: 180px; height: 6px; border-radius: 3px; left: ${b.x}%; width: ${b.w}%; background: ${b.color}; opacity: 0.55"></div>
`)}
${(V.tl.marks || []).map((m, $index) => html`
<div style="position: absolute; left: ${m.x}%; top: 0; width: 0; height: 0; z-index: ${m.z}">
${(m.showStem) ? html`<div aria-hidden="true" style="position: absolute; left: 0; top: ${m.stemTop}px; height: ${m.stemH}px; border-left: 1.5px solid ${m.color}; opacity: 0.6"></div>` : null}
<button type="button" onClick=${m.pick} title=${m.tip} aria-label=${m.aria} style="position: absolute; top: ${m.top}px; left: 0; transform: translateX(${m.tx}); cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; border: 1px solid ${m.border}; background: ${m.bg}; color: ${m.fg}; border-radius: 999px; padding: 3px 9px 3px 4px; min-height: 26px; font-size: 12px; font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,0.08)"><span aria-hidden="true" style="flex: none; width: 10px; height: 10px; border-radius: 50%; background: ${m.color}; border: 1.5px solid #FFFDF8"></span>${(m.showLabel) ? html`${m.label}` : null}</button>
</div>
`)}
</div>
<div style="padding: 4px 14px 0">
<div onPointerDown=${V.tl.rs.down} onPointerMove=${V.tl.rs.move} onPointerUp=${V.tl.rs.up} onPointerCancel=${V.tl.rs.up} style="position: relative; height: 44px; touch-action: none; user-select: none; cursor: pointer">
<div aria-hidden="true" style="position: absolute; left: 0; right: 0; top: 20px; height: 4px; border-radius: 2px; background: #D9CDB8"></div>
${(V.tl.rs.dots || []).map((d, $index) => html`
<div aria-hidden="true" style="position: absolute; top: 18px; left: ${d.x}%; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: ${d.color}; opacity: 0.55"></div>
`)}
<div data-h="m" style="position: absolute; top: 12px; height: 20px; left: ${V.tl.rs.l}%; width: ${V.tl.rs.w}%; background: rgba(122,59,30,0.18); border-top: 4px solid #4A3F35; border-bottom: 4px solid transparent; box-sizing: border-box; cursor: grab"></div>
<div data-h="l" role="slider" tabindex="0" aria-label="Start of the view" aria-valuemin="-2900" aria-valuemax="2035" aria-valuenow=${V.tl.rs.a} aria-valuetext=${V.tl.rs.aText} onKeyDown=${V.tl.rs.keyL} style="position: absolute; top: 9px; left: ${V.tl.rs.l}%; width: 22px; height: 22px; margin-left: -11px; border-radius: 50%; background: #FFFFFF; border: 3px solid #4A3F35; box-sizing: border-box; cursor: ew-resize"></div>
<div data-h="r" role="slider" tabindex="0" aria-label="End of the view" aria-valuemin="-2900" aria-valuemax="2035" aria-valuenow=${V.tl.rs.b} aria-valuetext=${V.tl.rs.bText} onKeyDown=${V.tl.rs.keyR} style="position: absolute; top: 9px; left: ${V.tl.rs.r}%; width: 22px; height: 22px; margin-left: -11px; border-radius: 50%; background: #FFFFFF; border: 3px solid #4A3F35; box-sizing: border-box; cursor: ew-resize"></div>
</div>
<div aria-hidden="true" style="position: relative; height: 16px; font-size: 11px; font-weight: 600; color: #6B5F52; margin-top: -4px"><span style="position: absolute; left: 2.36%">Creation</span><span style="position: absolute; left: 18.59%; transform: translateX(-50%)">3000 BC</span><span style="position: absolute; left: 34.76%; transform: translateX(-50%)">2000 BC</span><span style="position: absolute; left: 50.93%; transform: translateX(-50%)">1000 BC</span><span style="position: absolute; left: 67.11%; transform: translateX(-50%)">AD 1</span><span style="position: absolute; left: 83.27%; transform: translateX(-50%)">1000</span><span style="position: absolute; right: 0">Today</span></div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center"><div style="font-size: 13px; color: #6B5F52; flex: 1 1 300px">${V.tl.count} · ${V.tl.detailNote} You can also drag the timeline itself sideways.</div><button type="button" onClick=${V.tl.exportView} style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>Export events in view</button><button type="button" onClick=${V.tl.exportAll} style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>Export all events</button></div>
<div style="display: flex; flex-wrap: wrap; gap: 18px; align-items: flex-start">
<div style="flex: 1 1 300px; min-width: 0; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 10px 10px 12px; max-height: 560px; overflow-y: auto">
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; padding: 4px 6px 8px"><div style="flex: 1 1 160px; font-size: 13px; color: #6B5F52">${V.tl.listCount}</div><button type="button" onClick=${V.tl.expandAll} aria-pressed=${V.tl.allOpen} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 700">${V.tl.expandLabel}</button></div>
${(V.tl.groups || []).map((g, $index) => html`
<section style="border-top: 1px solid #EAE1D0; padding: 4px 0">
<button type="button" onClick=${g.toggle} aria-expanded=${g.open} style="width: 100%; cursor: pointer; border: none; background: transparent; display: flex; align-items: center; gap: 8px; padding: 8px 6px; min-height: 44px; text-align: left; color: #231E19"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex: none; transform: rotate(${g.chev}deg); transition: transform 0.15s ease"><path d="M6 9l6 6 6-6"></path></svg><span style="flex: 1 1 auto; font-family: Fraunces, Georgia, serif; font-size: 16px; font-weight: 700">${g.name}</span><span style="flex: none; font-size: 12px; color: #6B5F52">${g.dates} · ${g.count}</span></button>
${(g.open) ? html`
<ol style="list-style: none; margin: 0; padding: 0 0 0 14px; display: flex; flex-direction: column; gap: 2px; border-left: 2px solid #EAE1D0; margin-left: 13px">
${(g.items || []).map((it, $index) => html`
<li><button type="button" onClick=${it.pick} aria-pressed=${it.pressed} title=${it.tip} style="width: 100%; text-align: left; cursor: pointer; border: none; border-radius: 8px; padding: 7px 8px; min-height: 40px; display: flex; gap: 10px; align-items: baseline; background: ${it.bg}; color: #231E19"><span aria-hidden="true" style="flex: none; width: 10px; height: 10px; border-radius: 50%; background: ${it.color}; transform: translateY(1px)"></span><span style="flex: none; width: 104px; font-size: 12px; font-weight: 700; color: #6B5F52">${it.date}</span><span style="font-size: 14px; font-weight: ${it.weight}">${it.label}</span></button></li>
`)}
</ol>
${(g.hasMore) ? html`<button type="button" onClick=${g.showMore} style="margin: 4px 0 2px 27px; cursor: pointer; border: 1px dashed #B9AA90; background: transparent; color: #4A3F35; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 700">+ ${g.moreLabel}</button>` : null}
${(g.hasLess) ? html`<button type="button" onClick=${g.showLess} style="margin: 4px 0 2px 27px; cursor: pointer; border: none; background: transparent; color: #6B5F52; text-decoration: underline; padding: 6px 4px; min-height: 36px; font-size: 13px">Main events only</button>` : null}
` : null}
</section>
`)}
</div>
<div style="flex: 1 1 320px; min-width: 0">
${(V.tl.noDetail) ? html`
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; color: #4A3F35">Pick an event on the timeline or in the list to read about it, see where the information comes from, and follow links to read further.</div>
` : null}
${(V.tl.hasDetail) ? html`
<article data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; border-top: 6px solid ${V.tl.detail.color}; padding: 20px 22px; display: flex; flex-direction: column; gap: 12px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="display: flex; justify-content: space-between; gap: 8px; align-items: baseline"><span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: ${V.tl.detail.color}">${V.tl.detail.cat}</span><button type="button" onClick=${V.tl.detail.close} aria-label="Close" style="cursor: pointer; border: none; background: transparent; font-size: 20px; line-height: 1; color: #6B5F52; width: 32px; height: 32px">×</button></div>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 26px; line-height: 1.15">${V.tl.detail.title}</h2>
<div style="font-size: 14px; font-weight: 700; color: #4A3F35">${V.tl.detail.date}</div>
<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #31291F">${V.tl.detail.text}</p>
${(V.tl.detail.approx) ? html`<div style="font-size: 13px; color: #6B5F52">Date is approximate or traditional; scholars debate many early dates.</div>` : null}
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">Sources · read further</div>
<ul style="margin: 0; padding: 0 0 0 18px; display: flex; flex-direction: column; gap: 4px">
${(V.tl.detail.sources || []).map((x, $index) => html`
<li style="font-size: 14px"><a href=${x.url} target="_blank" rel="noopener noreferrer" title=${x.tip} style="color: #2E4A8A; font-weight: 600">${x.label} ↗</a></li>
`)}
</ul>
</div>
${(V.tl.detail.hasRead) ? html`
<button type="button" onClick=${V.tl.detail.read} style="align-self: flex-start; cursor: pointer; border: none; border-radius: 10px; padding: 10px 16px; min-height: 44px; font-size: 14px; font-weight: 700; background: #231E19; color: #FBF7EF">${V.tl.detail.readLabel} →</button>
` : null}
</article>
` : null}
</div>
</div>
</div>
<div style="font-size: 12px; color: #6B5F52">Summaries are written for this app; event facts are checked against Encyclopaedia Britannica and, for today’s figures, Pew Research Center.</div>
</section>
` : null}

${(V.isPractice) ? html`
<section style="display: flex; flex-direction: column; gap: 18px">
<div role="group" aria-label="Traditions view" style="display: flex; flex-wrap: wrap; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px; align-self: flex-start">${(V.tradViews || []).map((v, $index) => html`<button type="button" onClick=${v.pick} aria-pressed=${v.pressed} style="border: none; cursor: pointer; padding: 8px 18px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${v.bg}; color: ${v.fg}">${v.label}</button>`)}</div>
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Traditions · Practice</div>
<h1 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">Living it out, day to day</h1>
<p style="margin: 0 0 8px; color: #4A3F35; max-width: 800px">Beliefs shape a way of life. Here are twelve everyday practices, each with its basis in Scripture, the ground Christians share, and how each tradition typically lives it, drawing on Scripture and, for Catholic and Orthodox Christians, the Church’s Tradition. Each one ends with a small step to try this week.</p>
<p style="margin: 0; font-size: 13px; color: #6B5F52; max-width: 800px">Every tradition teaches that these practices respond to God’s grace rather than earn it, though they explain that link differently (see Beliefs). Descriptions follow each tradition’s official teaching or common practice; individual churches vary.</p>
</div>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px">
<div role="group" aria-label="View" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px">
${(V.pr.modes || []).map((m, $index) => html`<button type="button" onClick=${m.pick} aria-pressed=${m.pressed} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${m.bg}; color: ${m.fg}">${m.label}</button>`)}
</div>

<button type="button" onClick=${V.pr.exportAll} style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="M7 10l5 5 5-5"></path><path d="M5 21h14"></path></svg>Export all as CSV</button>
</div>
${(V.pr.isPractice) ? html`
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Practice</div>
<div role="group" aria-label="Practice" style="display: flex; flex-wrap: wrap; gap: 6px">
${(V.pr.practices || []).map((q, $index) => html`<button type="button" onClick=${q.pick} aria-pressed=${q.pressed} style="cursor: pointer; border: 1px solid #D9CDB8; border-radius: 999px; padding: 6px 12px; min-height: 38px; font-size: 13px; font-weight: 600; background: ${q.bg}; color: ${q.fg}">${q.label}</button>`)}
</div>
</div>
<article data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 18px; padding: 22px 24px; display: flex; flex-direction: column; gap: 12px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 28px; line-height: 1.15; padding-right: 80px">${V.pr.sel.name}</h2>
<div><div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 4px">Why Christians do this</div><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #31291F; max-width: 820px">${V.pr.sel.why}</p></div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">${(V.pr.sel.refs || []).map((r, $index) => html`<button type="button" onClick=${r.pick} title="Read this passage" style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #7A3B1E; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 700">${r.label}</button>`)}</div>
<div style="background: #F5EFE3; border-radius: 12px; padding: 12px 14px"><div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 4px">Common ground</div><p style="margin: 0; font-size: 15px; line-height: 1.55; color: #31291F">${V.pr.sel.shared}</p></div>
</article>
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Traditions shown (tap to hide or show)</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px">${(V.pr.tradChips || []).map((c, $index) => html`<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="cursor: pointer; border: 2px solid ${c.border}; border-radius: 999px; padding: 5px 12px; min-height: 36px; font-size: 13px; font-weight: 700; background: ${c.bg}; color: ${c.fg}">${c.label}</button>`)}</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px">
${(V.pr.cards || []).map((c, $index) => html`
<article data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-top: 6px solid ${c.color}; border-radius: 16px; padding: 16px 18px; display: flex; flex-direction: column; gap: 10px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<h3 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; color: ${c.color}; padding-right: 80px">${c.name}</h3>
<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #31291F">${c.how}</p>
<div style="border-left: 3px solid ${c.color}; padding: 4px 0 4px 10px; font-size: 14px; line-height: 1.5; color: #231E19"><strong>Try this week:</strong> ${c.tryIt}</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px 12px; align-items: center; margin-top: auto; font-size: 13px">
${(c.hasSrc) ? html`${(c.src || []).map((q, $index) => html`<a href=${q.url} target="_blank" rel="noopener noreferrer" title="Opens in a new tab" style="color: #2E4A8A; font-weight: 600">${q.label} ↗</a>`)}` : null}
<button type="button" onClick=${c.more} style="cursor: pointer; border: none; background: transparent; color: #6B5F52; text-decoration: underline; padding: 4px 0; min-height: 32px; font-size: 13px">All practices in this tradition</button>
</div>
</article>
`)}
</div>
` : null}
${(V.pr.isTrad) ? html`
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Tradition</div>
<div role="group" aria-label="Tradition" style="display: flex; flex-wrap: wrap; gap: 6px">${(V.pr.tradPick || []).map((c, $index) => html`<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="cursor: pointer; border: 2px solid ${c.border}; border-radius: 999px; padding: 6px 14px; min-height: 40px; font-size: 13px; font-weight: 700; background: ${c.bg}; color: ${c.fg}">${c.label}</button>`)}</div>
</div>
<article data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-top: 6px solid ${V.pr.tradColor}; border-radius: 18px; padding: 22px 24px; display: flex; flex-direction: column; gap: 14px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div><h2 style="margin: 0 0 6px; font-family: Fraunces, Georgia, serif; font-size: 28px; line-height: 1.15; color: ${V.pr.tradColor}; padding-right: 80px">${V.pr.tradHead}</h2><p style="margin: 0; font-size: 15px; line-height: 1.55; color: #4A3F35; max-width: 820px">${V.pr.tradDesc}</p></div>
<ol style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0">
${(V.pr.rule || []).map((r, $index) => html`
<li style="border-top: 1px solid #EAE1D0; padding: 14px 0; display: flex; flex-direction: column; gap: 6px">
<div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 12px"><h3 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 18px">${r.name}</h3><button type="button" onClick=${r.open} style="cursor: pointer; border: none; background: transparent; color: #6B5F52; text-decoration: underline; padding: 2px 0; min-height: 28px; font-size: 13px">Compare across traditions</button></div>
<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #31291F; max-width: 860px">${r.how}</p>
<div style="border-left: 3px solid ${V.pr.tradColor}; padding: 2px 0 2px 10px; font-size: 14px; line-height: 1.5"><strong>Try this week:</strong> ${r.tryIt}</div>
${(r.hasSrc) ? html`<div style="font-size: 13px">${(r.src || []).map((q, $index) => html`<a href=${q.url} target="_blank" rel="noopener noreferrer" title="Opens in a new tab" style="color: #2E4A8A; font-weight: 600">${q.label} ↗</a>`)}</div>` : null}
</li>
`)}
</ol>
</article>
` : null}
<div style="font-size: 12px; color: #6B5F52; max-width: 820px">Summaries are written for this app from each tradition’s catechisms, prayer books and confessions, linked where used. Practice varies by country, parish and family; for guidance, talk with a pastor or priest in your own tradition.</div>
</section>
` : null}
${(V.isCompare) ? html`
<section style="display: flex; flex-direction: column; gap: 18px">
<div role="group" aria-label="Traditions view" style="display: flex; flex-wrap: wrap; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px; align-self: flex-start">${(V.tradViews || []).map((v, $index) => html`<button type="button" onClick=${v.pick} aria-pressed=${v.pressed} style="border: none; cursor: pointer; padding: 8px 18px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${v.bg}; color: ${v.fg}">${v.label}</button>`)}</div>
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Traditions · Compare</div>
<h1 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">Where Christians agree, and where they differ</h1>
<p style="margin: 0; color: #4A3F35; max-width: 780px">Pick two or three traditions, or theological frameworks, to see what they share and where they part ways. Each summary describes a tradition’s official or majority teaching in terms its own members would recognize; every tradition holds a range of views, and nothing here ranks one above another.</p>
</div>
${(V.cmp.isFw) ? html`
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Topic</div>
<div role="group" aria-label="Topic" style="display: flex; flex-wrap: wrap; gap: 6px">
${(V.cmp.fams || []).map((f, $index) => html`
<button type="button" onClick=${f.pick} aria-pressed=${f.pressed} style="cursor: pointer; border: 1px solid #D9CDB8; border-radius: 999px; padding: 6px 12px; min-height: 38px; font-size: 13px; font-weight: 600; background: ${f.bg}; color: ${f.fg}">${f.label}</button>
`)}
</div>
</div>
` : null}
${(V.cmp.showPicker) ? html`
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">${V.cmp.pickLabel}</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(V.cmp.chips || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="cursor: pointer; border: 2px solid ${c.border}; border-radius: 999px; padding: 6px 14px; min-height: 40px; font-size: 14px; font-weight: 700; background: ${c.bg}; color: ${c.fg}; display: inline-flex; align-items: center; gap: 6px">${(c.lettered) ? html`<span style="font-size: 11px; background: rgba(255,255,255,0.3); border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center">${c.letter}</span>` : null}${c.label}</button>
`)}
</div>
<div style="font-size: 13px; color: #6B5F52; margin-top: 8px">${V.cmp.hint}</div>
</div>
` : null}
${(V.cmp.showVenn) ? html`
<div role="group" aria-label="View" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px; align-self: flex-start">
${(V.cmp.views || []).map((v, $index) => html`
<button type="button" onClick=${v.pick} aria-pressed=${v.pressed} style="border: none; cursor: pointer; padding: 6px 14px; min-height: 38px; border-radius: 999px; font-size: 13px; font-weight: 700; background: ${v.bg}; color: ${v.fg}">${v.label}</button>
`)}
</div>
` : null}
${(V.cmp.showVennView) ? html`
<div data-focus="fit" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 52px 16px 16px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div data-fit="1" style="position: relative; width: 100%; max-width: 640px; margin: 0 auto; aspect-ratio: 600 / 470">
<svg aria-hidden="true" viewBox="0 0 600 470" style="position: absolute; inset: 0; width: 100%; height: 100%">
${(V.cmp.circles || []).map((c, $index) => html`
<circle cx=${c.cx} cy=${c.cy} r=${c.r} fill=${c.color} fill-opacity="0.13" stroke=${c.color} stroke-width="2.5"></circle>
`)}
</svg>
${(V.cmp.names || []).map((n, $index) => html`
<div style="position: absolute; left: ${n.x}%; top: ${n.y}%; transform: translate(${n.tx}, -50%); max-width: 44%; font-family: Fraunces, Georgia, serif; font-size: clamp(13px, 2.6vw, 17px); line-height: 1.15; font-weight: 700; color: ${n.color}; text-align: ${n.align}">${n.label}</div>
`)}
${(V.cmp.counts || []).map((k, $index) => html`
<button type="button" onClick=${k.pick} aria-pressed=${k.on} title=${k.tip} aria-label=${k.tip} style="position: absolute; left: ${k.x}%; top: ${k.y}%; transform: translate(-50%, -50%); width: clamp(30px, 7.4%, 44px); aspect-ratio: 1; padding: 0; border-radius: 50%; border: 2px solid #231E19; background: ${k.bg}; color: ${k.fg}; font-size: clamp(13px, 2.4vw, 17px); font-weight: 800; cursor: pointer; opacity: ${k.op}; box-shadow: 0 1px 4px rgba(0,0,0,0.15)">${k.n}</button>
`)}
</div>
<div style="text-align: center; font-size: 13px; color: #6B5F52; margin-top: 6px">Numbers show how many beliefs or practices fall in each part of the diagram.</div>
</div>
<button type="button" onClick=${V.cmp.exportLists} style="align-self: flex-start; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>Export overlaps (CSV)</button>
${(V.cmp.regFilter) ? html`
<div style="display: flex; align-items: center; gap: 10px; font-size: 14px"><span>Showing: <strong>${V.cmp.regLabel}</strong></span><button type="button" onClick=${V.cmp.clearReg} style="cursor: pointer; border: 1px solid #D9CDB8; background: #FFFDF8; border-radius: 999px; padding: 4px 12px; min-height: 34px; font-size: 13px; font-weight: 600">Show all</button></div>
` : null}
<div style="display: flex; flex-direction: column; gap: 12px">
${(V.cmp.sections || []).map((sec, $index) => html`
<div style="border: 1px solid #E2D8C6; border-radius: 14px; padding: 14px 16px; background: ${sec.bg}">
<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px"><span style="display: inline-flex; gap: 3px">${(sec.dots || []).map((d, $index) => html`<span aria-hidden="true" style="width: 12px; height: 12px; border-radius: 50%; background: ${d.color}"></span>`)}</span><h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px">${sec.title}</h2><span style="font-size: 13px; color: #6B5F52">${sec.count}</span></div>
<ul style="margin: 0; padding: 0 0 0 18px; display: flex; flex-direction: column; gap: 5px">
${(sec.items || []).map((it, $index) => html`
<li style="font-size: 15px; line-height: 1.5; color: #31291F">${(it.hasTopic) ? html`<span style="font-weight: 700; color: #6B5F52">${it.topic}: </span>` : null}${it.text}</li>
`)}
</ul>
</div>
`)}
</div>
` : null}
${(V.cmp.showTableView) ? html`
<button type="button" onClick=${V.cmp.exportTable} style="align-self: flex-start; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>Export table (CSV)</button>
<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 48px 6px 6px; overflow-x: auto"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<table style="width: 100%; border-collapse: collapse; min-width: 560px; font-size: 14px">
<thead><tr><th style="text-align: left; padding: 10px; width: 22%"></th>
${(V.cmp.tblHead || []).map((h, $index) => html`<th style="text-align: left; padding: 10px; color: ${h.color}; font-family: Fraunces, Georgia, serif; font-size: 16px; border-bottom: 3px solid ${h.color}">${h.name}</th>`)}
</tr></thead>
<tbody>
${(V.cmp.tblRows || []).map((r, $index) => html`
<tr style="border-top: 1px solid #EDE4D3"><th scope="row" style="text-align: left; vertical-align: top; padding: 10px; font-weight: 700; color: #4A3F35">${r.label}</th>
${(r.cells || []).map((c, $index) => html`<td style="vertical-align: top; padding: 10px; line-height: 1.5; color: #31291F">${c.text}</td>`)}
</tr>
`)}
</tbody>
</table>
</div>
` : null}
${(V.cmp.showTradsView) ? html`
<div style="font-size: 14px; color: #31291F; max-width: 780px">Where each view in <strong>${V.cmp.famName}</strong> is found. This is a loose association: a <strong>filled dot</strong> marks the official or majority view of a tradition; a <strong>dashed ring</strong> means it is found in some churches or among many members. Individual congregations and believers vary.</div>
<button type="button" onClick=${V.cmp.exportTrads} style="align-self: flex-start; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700">Export (CSV)</button>
<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 48px 6px 6px; overflow-x: auto"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<table style="width: 100%; border-collapse: collapse; min-width: 760px; font-size: 13px">
<thead><tr><th style="text-align: left; padding: 8px"></th>
${(V.cmp.trHead || []).map((h, $index) => html`<th style="padding: 8px 4px; color: ${h.color}; font-size: 12px; font-weight: 700; text-align: center; vertical-align: bottom; border-bottom: 3px solid ${h.color}">${h.name}</th>`)}
</tr></thead>
<tbody>
${(V.cmp.trRows || []).map((r, $index) => html`
<tr style="border-top: 1px solid #EDE4D3"><th scope="row" style="text-align: left; padding: 10px 8px; font-size: 14px; color: ${r.color}">${r.name}</th>
${(r.cells || []).map((c, $index) => html`<td title=${c.tip} style="text-align: center; padding: 8px 4px">${(c.show) ? html`<span aria-label=${c.tip} style="display: inline-block; width: 16px; height: 16px; border-radius: 50%; box-sizing: border-box; background: ${c.bg}; border: ${c.bd}"></span>` : null}</td>`)}
</tr>
`)}
</tbody>
</table>
</div>
` : null}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px">
${(V.cmp.cards || []).map((c, $index) => html`
<article style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; border-top: 6px solid ${c.color}; padding: 16px 18px; display: flex; flex-direction: column; gap: 8px">
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 21px; color: ${c.color}">${c.name}</h2>
<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #31291F">${c.desc}</p>
<div style="font-size: 13px; color: #4A3F35">${c.meta1}</div>
${(c.hasMeta2) ? html`<div style="font-size: 13px; color: #4A3F35">${c.meta2}</div>` : null}
${(c.hasProCon) ? html`<p style="margin: 0; font-size: 14px; color: #31291F"><strong>Supporters:</strong> ${c.pro}</p><p style="margin: 0; font-size: 14px; color: #31291F"><strong>Critics:</strong> ${c.con}</p>` : null}
${(c.hasFound) ? html`
<div><div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">Where you'll find it (loosely)</div><div style="display: flex; flex-wrap: wrap; gap: 5px">${(c.found || []).map((t, $index) => html`<span title=${t.tip} style="font-size: 12px; font-weight: 700; border-radius: 999px; padding: 3px 9px; border: 1.5px ${t.style} ${t.color}; background: ${t.bg}; color: ${t.fg}">${t.label}</span>`)}</div><div style="font-size: 11px; color: #6B5F52; margin-top: 4px">Solid: official or majority view. Dashed: found in some churches or among many members.</div></div>
` : null}
${(c.noFound) ? html`<div style="font-size: 12px; color: #6B5F52">Not the official view of any of the nine traditions here; held by individual scholars and churches.</div>` : null}
${(c.hasTypical) ? html`
<div><div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">Typical frameworks (loosely)</div><ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 3px">${(c.typical || []).map((r, $index) => html`<li style="font-size: 13px; line-height: 1.4"><button type="button" onClick=${r.pick} title="Compare these frameworks" style="cursor: pointer; border: none; background: transparent; padding: 0; color: #2E4A8A; font-weight: 700; font-size: 13px; text-decoration: underline">${r.topic}</button>: ${r.main} <span style="color: #6B5F52">${r.some}</span></li>`)}</ul></div>
` : null}
${(c.canLive) ? html`<button type="button" onClick=${c.live} style="align-self: flex-start; cursor: pointer; border: 1px solid ${c.color}; background: #FFFDF8; color: ${c.color}; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700">How ${c.name} Christians live it out →</button>` : null}
<div style="font-size: 13px">Read more: ${(c.src || []).map((q, $index) => html`<a href=${q.url} target="_blank" rel="noopener noreferrer" title="Opens in a new tab" style="color: #2E4A8A; font-weight: 600; margin-right: 8px">${q.label} ↗</a>`)}</div>
</article>
`)}
</div>
<div style="font-size: 12px; color: #6B5F52">In the side-by-side view, “—” means a view does not hold or emphasize that point, not necessarily that it denies it. Summaries are written for this app and checked against Encyclopaedia Britannica. Positions are simplified; individual churches and members within a tradition often differ.</div>
</section>
` : null}

${(V.isRead) ? html`
<section id="reader-top" style="display: flex; flex-direction: column; gap: 18px">
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end; justify-content: space-between">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Read · ${V.rd.trName}</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 40px; line-height: 1.1">${V.rd.title}</h1>
</div>
${(V.rd.showTr) ? html`
<div role="group" aria-label="Translation" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px">
${(V.trBtns || []).map((t, $index) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} title=${t.title} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${t.bg}; color: ${t.fg}">${t.label}</button>
`)}
</div>
` : null}
</div>
${(V.rd.isExtra) ? html`
<div style="border: 2px dashed #8C7A58; border-radius: 12px; padding: 12px 14px; background: #F5EFE3; font-size: 14px; color: #31291F"><strong>Catholic & Orthodox book: not in the Protestant Bible.</strong> ${V.rd.extraNote}</div>
` : null}
<label style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #31291F; cursor: pointer; align-self: flex-start"><input type="checkbox" checked=${V.rd.withX} onInput=${V.rd.onWithX} style="width: 20px; height: 20px; accent-color: #6B5848" />Include the Catholic and Orthodox books when paging through, in Catholic and Orthodox order</label>
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end">
<div style="display: flex; flex-direction: column; gap: 4px; flex: 1 1 220px">
<label for="rd-book" style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52">Book</label>
<select id="rd-book" value=${V.rd.bookId} onChange=${V.rd.onBook} style="min-height: 44px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; padding: 0 12px; font-size: 15px; color: #231E19">
${(V.bookOpts || []).map((o, $index) => html`
<option value=${o.id}>${o.name}</option>
`)}
</select>
</div>
<div style="display: flex; flex-direction: column; gap: 4px; flex: 1 1 160px">
<label for="rd-chap" style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52">Chapter</label>
<select id="rd-chap" value=${V.rd.chapVal} onChange=${V.rd.onChap} style="min-height: 44px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; padding: 0 12px; font-size: 15px; color: #231E19">
${(V.rd.chapOpts || []).map((o, $index) => html`
<option value=${o.v}>${o.label}</option>
`)}
</select>
</div>
<div style="display: flex; gap: 8px; flex: 1 1 260px">
<button type="button" onClick=${V.rd.goPrev} disabled=${V.rd.noPrev} style="flex: 1 1 0px; cursor: pointer; min-height: 44px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19; font-weight: 600; font-size: 14px">← ${V.rd.prevLabel}</button>
<button type="button" onClick=${V.rd.goNext} disabled=${V.rd.noNext} style="flex: 1 1 0px; cursor: pointer; min-height: 44px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19; font-weight: 600; font-size: 14px">${V.rd.nextLabel} →</button>
</div>
</div>
${(V.rd.loading) ? html`
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 40px; text-align: center; color: #4A3F35">Loading the ${V.rd.trName}…</div>
` : null}
${(V.rd.noText) ? html`
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; color: #4A3F35">The text of ${V.rd.bookName} isn’t included in this app, because the King James Apocrypha it uses doesn’t contain it.</div>
` : null}
${(V.rd.failed) ? html`
<div style="background: #FBEBEB; border: 1px solid #E8C4C4; border-radius: 16px; padding: 24px; color: #6B1F1F">The scripture text couldn't load. Try switching translations or reopening the page.</div>
` : null}
${(V.rd.ready) ? html`
${(V.tts.supported) ? html`
<div role="group" aria-label="Read aloud" style="display: flex; flex-wrap: wrap; gap: 10px 14px; align-items: center; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 10px 12px">
<button type="button" onClick=${V.tts.playPause} style="cursor: pointer; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 999px; border: none; background: ${V.rd.color}; color: #FFFFFF; font-size: 15px; font-weight: 700">
${(V.tts.showPlay) ? html`<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"></path></svg>` : null}
${(V.tts.showPause) ? html`<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4.5" width="4" height="15" rx="1"></rect><rect x="14" y="4.5" width="4" height="15" rx="1"></rect></svg>` : null}
${V.tts.label}</button>
${(V.tts.active) ? html`
<button type="button" onClick=${V.tts.back} aria-label="Back one verse" title="Back one verse" style="flex: none; cursor: pointer; width: 44px; height: 44px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11 6v12L3 12z"></path><path d="M20 6v12l-8-6z"></path></svg></button>
<button type="button" onClick=${V.tts.fwd} aria-label="Skip ahead one verse" title="Skip ahead one verse" style="flex: none; cursor: pointer; width: 44px; height: 44px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 6v12l8-6z"></path><path d="M4 6v12l8-6z"></path></svg></button>
` : null}
${(V.tts.active) ? html`
<button type="button" onClick=${V.tts.stop} aria-label="Stop reading" style="cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
` : null}
<div style="display: flex; align-items: center; gap: 6px">
<label for="tts-rate" style="font-size: 13px; font-weight: 600; color: #4A3F35">Speed</label>
<select id="tts-rate" value=${V.tts.rateVal} onChange=${V.tts.onRate} style="min-height: 40px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; padding: 0 10px; font-size: 14px; color: #231E19">
<option value="0.75">0.75×</option>
<option value="1">1×</option>
<option value="1.25">1.25×</option>
<option value="1.5">1.5×</option>
</select>
</div>
<span aria-live="polite" style="font-size: 13px; color: #6B5F52; flex: 1 1 160px">${V.tts.status}</span>
</div>
` : null}
<article id="read-text" data-focus="text" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: ${V.rd.txtPad}; font-family: Georgia, 'Times New Roman', serif; font-size: 19px; line-height: 1.8; color: #231E19; max-height: ${V.rd.txtMax}; overflow-y: ${V.rd.txtOv}; overscroll-behavior: contain"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="max-width: 720px">
${(V.rd.verses || []).map((v, $index) => html`
<span id=${v.id} style="border-radius: 4px; padding: 2px 0; background: ${v.bg}"><sup style="font-family: Inter, system-ui, sans-serif; font-size: 11px; font-weight: 700; color: #7A3B1E; margin: 0 4px 0 6px">${v.n}</sup>${v.text} </span>
`)}
</div>
</article>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 14px; margin-top: -6px"><button type="button" onClick=${V.rd.txtToggle} aria-expanded=${V.rd.txtOpen} aria-controls="read-text" style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 6px 14px 6px 10px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 14px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.rd.txtChev}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.rd.txtLabel}</button><span style="font-size: 13px; color: #6B5F52">${V.rd.txtHint}</span></div>
<div style="font-size: 12px; color: #6B5F52">${V.rd.trName} · public domain. ${V.rd.footnote}</div>
` : null}
</section>
` : null}

${(V.isAbout) ? html`
<section style="display: flex; flex-direction: column; gap: 22px; max-width: 780px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">About</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">About Explore Your Bible</h1>
</div>
<p style="margin: 0; font-size: 18px; line-height: 1.6; color: #31291F">Explore Your Bible was originally built to help its creator better grasp the big picture of Scripture and the major themes that run throughout it. It’s now shared for anyone who wants the same: a way to see how the books fit together and the story they tell, with a timeline and maps to place it all in time and on the ground, and a look at how Christians across traditions read and live it.</p>
<p style="margin: 0; font-size: 18px; line-height: 1.6; color: #31291F">It aims to be an even-handed presentation, not an argument. Where Christians agree, it says so. Where they differ, it describes each tradition as its own members would and doesn’t rank one above another. Where scholars debate a date or a place, it says that too.</p>
<div style="border-top: 1px solid #E2D8C6; padding-top: 22px">
<h2 style="margin: 0 0 6px; font-family: Fraunces, Georgia, serif; font-size: 26px">Frequently asked questions</h2>
</div>
<div style="display: flex; flex-direction: column; gap: 20px">
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">Why only the Berean Standard Bible and the King James Version?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">Both are in the public domain, so their full text can be shown, searched and read aloud freely. Most modern translations, such as the NIV, ESV, NASB and NLT, are under copyright and need a publisher’s license.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">Why does the site include books that aren’t in every Bible?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">Christians have long differed over books such as Tobit, Judith, Wisdom, Sirach and the Maccabees. Catholic and Orthodox Christians, about half of all Christians worldwide, receive them as Scripture. Protestants and Jews do not include them in their canon. Even so, the 1611 King James Bible printed them, and Luther included them in his German Bible as books “useful and good to read.” They also tell the story of the years between the Testaments, such as the Maccabean revolt behind the Feast of Dedication in John 10:22. On this site they’re always labeled so you know which Bibles include them. They’re left out when you page through the Bible unless you choose to include them.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">Where does the text of the Catholic and Orthodox books come from?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">From the Apocrypha of the King James Bible, since the Berean Standard Bible doesn’t include them.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">Is the site affiliated with a church or denomination?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">No.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">How are the traditions described?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">By each tradition’s official or majority teaching, in terms its own members would recognize. Individual churches and believers vary.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">Where do the chapter summaries come from?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">Mostly from Matthew Henry’s <em>Concise Commentary</em> (1706). It’s in the public domain and written from his Protestant perspective. A few were written for this site.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">How accurate are the dates and maps?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">Dates from about the time of the kings onward are well established. Earlier dates are traditional and approximate, and Genesis 1–11 is left undated. Map locations are approximate, and uncertain places like Eden are labeled that way.</p></div>
<div><h3 style="margin: 0 0 6px; font-size: 17px; font-weight: 700">Do I need an account?</h3><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #4A3F35">No. There are no accounts, ads or tracking. Your read-aloud voice and the desktop-view setting are saved only in your own browser.</p></div>
</div>
<div style="border-top: 1px solid #E2D8C6; padding-top: 18px; font-size: 14px; line-height: 1.6; color: #6B5F52">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6B5848; margin-bottom: 6px">Sources and credits</div>
Berean Standard Bible: public domain. King James Version (1769) and Apocrypha: public domain. Chapter events, people and places: <a href="https://github.com/robertrouse/theographic-bible-metadata" target="_blank" rel="noopener" style="color: #7A3B1E">Theographic Bible Metadata</a> (CC BY-SA 4.0). Chapter outlines: Matthew Henry’s <em>Concise Commentary</em> (1706), public domain, via <a href="https://github.com/lyteword/mhenry-concise" target="_blank" rel="noopener" style="color: #7A3B1E">mhenry-concise</a>. Base map: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener" style="color: #7A3B1E">Natural Earth</a> (public domain). Fonts: Fraunces and Inter (SIL Open Font License). Code: Preact (MIT) and htm (Apache 2.0).
</div>
</section>
` : null}

${(V.isSearch) ? html`
<section style="display: flex; flex-direction: column; gap: 18px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Search</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">${V.srTitle}</h1>
</div>
<div role="group" aria-label="Search mode" style="display: flex; flex-wrap: wrap; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px; align-self: flex-start">${(V.tp.modes || []).map((v, $index) => html`<button type="button" onClick=${v.pick} aria-pressed=${v.pressed} style="border: none; cursor: pointer; padding: 8px 18px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${v.bg}; color: ${v.fg}">${v.label}</button>`)}</div>
${(V.srWords) ? html`
<div style="display: flex; align-items: center; gap: 10px; background: #FFFFFF; border: 2px solid #231E19; border-radius: 14px; padding: 0 18px; min-height: 56px">
<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#231E19" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
<label for="big-search" class="sr">Word or phrase</label>
<input id="big-search" type="search" placeholder="A word or phrase, e.g. “living water”" value=${V.q} onInput=${V.onSearchHere} style="border: none; background: transparent; font-size: 18px; width: 100%; color: #231E19; padding: 12px 0" />
</div>
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; align-items: center">
<div role="group" aria-label="Where to search" style="display: flex; flex-wrap: wrap; gap: 6px">
${(V.s.scopes || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} aria-pressed=${c.pressed} style="cursor: pointer; padding: 8px 14px; min-height: 40px; border-radius: 999px; font-size: 14px; font-weight: 600; background: ${c.bg}; color: ${c.fg}; border: 1px solid ${c.border}">${c.label}</button>
`)}
</div>
<div role="group" aria-label="Translation" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px">
${(V.trBtns || []).map((t, $index) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} title=${t.title} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 40px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${t.bg}; color: ${t.fg}">${t.label}</button>
`)}
</div>
</div>
<label style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #31291F; cursor: pointer; align-self: flex-start"><input type="checkbox" checked=${V.s.withX} disabled=${V.s.xDisabled} onInput=${V.s.onWithX} style="width: 20px; height: 20px; accent-color: #6B5848" />Also search the Catholic and Orthodox books (King James 1611 text)</label>
${(V.s.hasBooks) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-right: 4px">Books</span>
${(V.s.bookMatches || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: none; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 14px; font-weight: 600; color: #FFFFFF; background: ${c.bg}">${c.name}</button>
`)}
</div>
` : null}
${(V.s.hint) ? html`
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px">
<div style="color: #4A3F35">Type at least 3 letters to search all 31,102 verses. Or try one of these:</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(V.s.suggestions || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 14px; font-weight: 600">${c.label}</button>
`)}
</div>
</div>
` : null}
${(V.s.loading) ? html`
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 32px; text-align: center; color: #4A3F35">Loading the ${V.s.trName}…</div>
` : null}
${(V.s.ready) ? html`
<div data-focus="card" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 16px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; align-items: baseline">
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">${V.s.totalLabel} contain “${V.s.query}”</h2>
<span style="font-size: 13px; color: #6B5F52">${V.s.note}</span>
<button type="button" onClick=${V.s.exportRes} style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 999px; padding: 6px 14px; min-height: 38px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19h14"></path></svg>Export results</button>
</div>
${(V.s.has) ? html`
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">Where it appears</div>
<div style="display: flex; gap: 2px; align-items: flex-end; height: 52px">
${(V.s.hist || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} aria-label=${c.name} title=${c.name} style="flex: 1 1 0px; min-width: 0; border: none; padding: 0; border-radius: 2px; cursor: pointer; height: ${c.h}px; background: ${c.bg}"></button>
`)}
</div>
<div style="display: flex; gap: 2px; margin-top: 6px; font-size: 12px; font-weight: 600; color: #6B5F52">
<div style="flex: 39 1 0px; border-top: 2px solid #8A3E22; padding-top: 4px">Old Testament</div>
<div style="flex: 27 1 0px; border-top: 2px solid #1F5A7A; padding-top: 4px">New Testament</div>
</div>
</div>
` : null}
<div style="display: flex; flex-direction: column">
${(V.s.results || []).map((r, $index) => html`
<button type="button" onClick=${r.pick} style="cursor: pointer; text-align: left; background: transparent; border: none; border-top: 1px solid #EDE4D3; padding: 14px 6px; display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline; color: #231E19">
<span style="flex: 0 0 130px; font-weight: 700; font-size: 14px; color: ${r.color}">${r.ref}</span>
<span style="flex: 1 1 240px; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6">${r.pre}<mark style="background: #F6E2A8; color: #231E19; border-radius: 3px; padding: 0 2px">${r.mid}</mark>${r.post}</span>
</button>
`)}
</div>
</div>
` : null}
${(V.s.xLoading) ? html`<div style="font-size: 14px; color: #6B5F52">Loading the Catholic and Orthodox books…</div>` : null}
${(V.s.xNone) ? html`<div style="font-size: 14px; color: #6B5F52">No matches in the Catholic and Orthodox books.</div>` : null}
${(V.s.hasX) ? html`
<div style="border: 2px dashed #8C7A58; border-radius: 14px; padding: 14px 16px; background: #F5EFE3; display: flex; flex-direction: column; gap: 4px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5848">Catholic & Orthodox books · not in the Protestant Bible</div>
<h3 style="margin: 0 0 4px; font-family: Fraunces, Georgia, serif; font-size: 20px">${V.s.xLabel}</h3>
<div style="display: flex; flex-direction: column">
${(V.s.xresults || []).map((r, $index) => html`
<button type="button" onClick=${r.pick} style="cursor: pointer; text-align: left; background: transparent; border: none; border-top: 1px solid #E2D8C6; padding: 12px 6px; display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline; color: #231E19">
<span style="flex: 0 0 130px; font-weight: 700; font-size: 14px; color: ${r.color}">${r.ref}</span>
<span style="flex: 1 1 240px; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6">${r.pre}<mark style="background: #F6E2A8; color: #231E19; border-radius: 3px; padding: 0 2px">${r.mid}</mark>${r.post}</span>
</button>
`)}
</div>
</div>
` : null}

` : null}
${(V.srTopics) ? html`
<p style="margin: 0; font-size: 16px; color: #4A3F35; max-width: 780px">Like the topical index in the front or back of many Bibles: passages for particular seasons of life. Pick a situation to see passages with a note on why each one speaks to it. Tap a reference to read it in context.</p>
<div role="group" aria-label="Situations" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px">${(V.tp.tiles || []).map((t, $index) => html`<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="cursor: pointer; display: flex; align-items: center; gap: 10px; text-align: left; border: 1px solid #D9CDB8; border-radius: 12px; padding: 10px 12px; min-height: 52px; font-size: 14px; font-weight: 700; background: ${t.bg}; color: ${t.fg}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="flex: none"><path d=${t.icon}></path></svg>${t.name}</button>`)}</div>
${(V.tp.has) ? html`
<article id="topic-detail" data-focus="card" style="scroll-margin-top: 12px; background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 18px; padding: 22px 24px; display: flex; flex-direction: column; gap: 14px"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div><h2 style="margin: 0 0 6px; font-family: Fraunces, Georgia, serif; font-size: 28px; padding-right: 80px">${V.tp.name}</h2><p style="margin: 0; font-size: 15px; line-height: 1.55; color: #4A3F35; max-width: 780px">${V.tp.intro}</p></div>
<ol style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px">
${(V.tp.items || []).map((it, $index) => html`<li style="border: ${it.border}; border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 6px"><div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px"><button type="button" onClick=${it.open} title="Read this passage in context" style="cursor: pointer; border: none; background: transparent; padding: 0; min-height: 32px; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 700; color: #7A3B1E; text-decoration: underline; text-underline-offset: 3px">${it.ref}</button>${(it.extra) ? html`<span style="font-size: 12px; font-weight: 700; color: #6B5848">${it.extraNote}</span>` : null}</div><div style="font-size: 15px; font-weight: 600; color: #231E19">${it.why}</div>${(it.hasText) ? html`<p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6; color: #31291F">${it.text}</p>` : null}</li>`)}
</ol>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px">${(V.tp.hasPractice) ? html`<button type="button" onClick=${V.tp.openPractice} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 13px; font-weight: 700">${V.tp.practiceLabel}</button>` : null}<span style="font-size: 12px; color: #6B5F52">Verse text: ${V.tp.trName}. Notes written for this app.</span></div>
</article>
` : null}
` : null}
</section>
` : null}

</div>

${(V.showAside) ? html`
<aside id="book-card" aria-label="Book details" style="flex: ${V.aside.flex}; min-width: 0; scroll-margin-top: 12px; transition: flex-basis 0.2s ease">
${(V.aside.open) ? html`
<div style="display: flex; justify-content: flex-end; margin-bottom: 8px"><button type="button" onClick=${V.aside.toggle} aria-expanded="true" aria-controls="book-card" title="Hide this panel to widen the page" style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #4A3F35; border-radius: 999px; padding: 5px 12px 5px 10px; min-height: 36px; font-size: 13px; font-weight: 700"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.aside.hideRot}deg)"><path d="M9 6l6 6-6 6"></path></svg>Hide panel</button></div>
${(V.isRead) ? html`
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px 12px; margin-bottom: 12px"><div role="group" aria-label="Show notes for" style="display: flex; gap: 2px; background: #EAE1D0; padding: 3px; border-radius: 999px">${(V.cp.scopeBtns || []).map((t, $index) => html`<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 40px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${t.bg}; color: ${t.fg}">${t.label}</button>`)}</div><div style="flex: 1 1 160px; font-size: 13px; color: #6B5F52">${V.cp.scopeHint}</div></div>
` : null}
${(V.cp.showCh) ? html`
<section data-focus="card" aria-label="About this chapter" style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 18px; padding: 18px 20px; display: flex; flex-direction: column; gap: 18px; margin-bottom: 20px; border-top: 6px solid ${V.cp.color}"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Now reading</div>
<h2 style="margin: 2px 0 10px; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1">${V.cp.title}</h2>
<div style="display: flex; gap: 6px">
<button type="button" onClick=${V.cp.goPrev} disabled=${V.cp.noPrev} style="flex: 1 1 0px; cursor: pointer; min-height: 40px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19; font-weight: 600; font-size: 13px">← ${V.cp.prevLabel}</button>
<button type="button" onClick=${V.cp.goNext} disabled=${V.cp.noNext} style="flex: 1 1 0px; cursor: pointer; min-height: 40px; border-radius: 10px; border: 1px solid #D9CDB8; background: #FFFFFF; color: #231E19; font-weight: 600; font-size: 13px">${V.cp.nextLabel} →</button>
</div>
</div>
${(V.cp.isExtra) ? html`
<div style="border: 2px dashed #8C7A58; border-radius: 12px; padding: 10px 12px; background: #F5EFE3; font-size: 13px; color: #31291F"><strong>Catholic & Orthodox book.</strong> ${V.cp.extraNote}</div>
` : null}
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px">Chapter summary</div>
${(V.cp.loading) ? html`<div style="font-size: 14px; color: #6B5F52">Loading…</div>` : null}
${(V.cp.hasOutline) ? html`
<ol style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px">
${(V.cp.outline || []).map((o, $index) => html`
<li><button type="button" onClick=${o.pick} title="Jump to ${o.ref}" style="width: 100%; text-align: left; cursor: pointer; border: none; background: transparent; border-radius: 8px; padding: 6px 4px; min-height: 36px; display: flex; gap: 10px; align-items: baseline; color: #231E19; font-size: 15px; line-height: 1.45"><span aria-hidden="true" style="flex: none; width: 8px; height: 8px; border-radius: 50%; background: ${V.cp.color}; transform: translateY(-1px)"></span><span style="flex: 1 1 auto">${o.text}</span>${(o.hasRef) ? html`<span style="flex: none; font-size: 12px; color: #6B5F52; white-space: nowrap">${o.ref}</span>` : null}</button></li>
`)}
</ol>
${(V.cp.outlineHenry) ? html`<div style="font-size: 12px; color: #6B5F52; margin-top: 6px; line-height: 1.45">Outline from Matthew Henry’s <a href=${V.cp.outlineSrc} target="_blank" rel="noopener" style="color: #7A3B1E">Concise Commentary</a> (1706), a classic Protestant commentary in the public domain.</div>` : null}${(V.cp.outlineOwn) ? html`<div style="font-size: 12px; color: #6B5F52; margin-top: 6px; line-height: 1.45">Outline written for this app, because Matthew Henry’s Concise Commentary has none for this chapter.</div>` : null}
` : null}
${(V.cp.hasEvents) ? html`
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin: 10px 0 4px">${V.cp.eventsHead}</div>
<ol style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px">
${(V.cp.events || []).map((ev, $index) => html`
<li><button type="button" onClick=${ev.pick} title="Jump to ${ev.ref}" style="width: 100%; text-align: left; cursor: pointer; border: none; background: transparent; border-radius: 8px; padding: 6px 4px; min-height: 36px; display: flex; gap: 10px; align-items: baseline; color: #231E19; font-size: 15px"><span aria-hidden="true" style="flex: none; width: 8px; height: 8px; border-radius: 50%; background: ${V.cp.color}; transform: translateY(-2px)"></span><span style="flex: 1 1 auto; font-weight: 600">${ev.title}</span><span style="flex: none; font-size: 12px; color: #6B5F52">${ev.ref}</span></button></li>
`)}
</ol>
` : null}
${(V.cp.noEvents) ? html`<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #31291F">${V.cp.fallback}</p>` : null}
</div>
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Key figures in this chapter</div>
${(V.cp.hasPeople) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 6px">
${(V.cp.people || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} title=${c.title} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600">${c.label}</button>
`)}
</div>
` : null}
${(V.cp.noPeople) ? html`<div style="font-size: 14px; color: #4A3F35">${V.cp.peopleFallback}</div>` : null}
</div>
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Themes in this book</div>
${(V.cp.hasThemes) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 6px">
${(V.cp.themes || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 6px 12px; min-height: 36px; font-size: 13px; font-weight: 600">${c.label}</button>
`)}
</div>
` : null}
${(V.cp.noThemes) ? html`<div style="font-size: 14px; color: #6B5F52">Not tagged with a major theme yet.</div>` : null}
</div>
<div data-focus="map"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 8px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52">Current passage location</div>
</div>
<div style="font-size: 13px; color: #4A3F35; margin-bottom: 8px">${V.cp.mapNote}</div>
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center; justify-content: flex-end">
<div role="group" aria-label="Map zoom" style="display: flex; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; box-shadow: 0 1px 3px rgba(0,0,0,0.15); overflow: hidden">
<button type="button" onClick=${V.chMap.zoomOut} disabled=${V.chMap.noOut} aria-label="Zoom out" style="cursor: pointer; width: 40px; height: 40px; border: none; background: transparent; color: ${V.chMap.outColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path></svg></button>
<span aria-hidden="true" style="width: 1px; background: #D9CDB8"></span>
<button type="button" onClick=${V.chMap.zoomIn} disabled=${V.chMap.noIn} aria-label="Zoom in" style="cursor: pointer; width: 40px; height: 40px; border: none; background: transparent; color: ${V.chMap.inColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<button type="button" onClick=${V.chMap.toggle} style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; font-size: 13px; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.15)">${V.chMap.toggleLabel}</button>
</div>
<div onPointerDown=${V.chMap.down} onPointerMove=${V.chMap.move} onPointerUp=${V.chMap.up} onPointerCancel=${V.chMap.up} onWheel=${V.chMap.wheel} data-fit="1" data-noread="1" style="position: relative; width: 100%; aspect-ratio: ${V.chMap.aspect}; overflow: hidden; border-radius: 12px; background: #C7DADB; border: 1px solid #D9CDB8; touch-action: none; user-select: none; cursor: ${V.chMap.cursor}">
<div style="position: absolute; left: ${V.chMap.left}%; top: ${V.chMap.top}%; width: ${V.chMap.width}%; height: ${V.chMap.height}%; transition: ${V.chMap.transition}">
<img src="basemap.svg" alt="" draggable="false" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: block; pointer-events: none" />
<svg aria-hidden="true" viewBox="0 0 7372.37 5200" preserveAspectRatio="none" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: visible">
${(V.chMap.routes || []).map((r, $index) => html`
<polyline points=${r.points} fill="none" stroke=${r.color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85" vector-effect="non-scaling-stroke"></polyline>
`)}
</svg>
${(V.chMap.labels || []).map((l, $index) => html`
<div aria-hidden="true" style="position: absolute; left: ${l.x}%; top: ${l.y}%; transform: translate(${l.tx}, -50%) rotate(${l.rot}deg); white-space: nowrap; pointer-events: none; font-size: ${l.size}px; font-weight: ${l.fw}; font-family: ${l.font}; font-style: ${l.fstyle}; letter-spacing: ${l.ls}; color: ${l.color}; text-shadow: 0 0 3px rgba(239,228,203,0.9)">${l.name}</div>
`)}
${(V.chMap.pins || []).map((p, $index) => html`
<div style="position: absolute; width: 0; height: 0; left: ${p.x}%; top: ${p.y}%; z-index: ${p.z}">
<button type="button" onClick=${p.pick} aria-label=${p.aria} style="position: absolute; left: -12px; top: -12px; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #FFFDF8; padding: 0; cursor: pointer; font-size: 11px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,0.35); background: ${p.bg}">${p.num}</button>
${(p.showLabel) ? html`
<span style="position: absolute; white-space: nowrap; font-size: 12px; font-weight: 700; color: #231E19; background: rgba(255,253,248,0.9); padding: 1px 6px; border-radius: 4px; pointer-events: none; left: ${p.lx}; top: ${p.ly}; transform: translateX(${p.tx})">${p.name}</span>
` : null}
</div>
`)}
</div>
</div>
${(V.chMap.journey.has) ? html`
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; background: #F5EFE3; border-radius: 12px; padding: 8px 10px"><button type="button" onClick=${V.chMap.journey.prev} disabled=${V.chMap.journey.noPrev} aria-label="Previous stop" style="cursor: pointer; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #D9CDB8; background: #FFFDF8; color: ${V.chMap.journey.prevColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg></button><button type="button" onClick=${V.chMap.journey.next} disabled=${V.chMap.journey.noNext} style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: none; background: #231E19; color: #FBF7EF; font-size: 13px; font-weight: 700">${V.chMap.journey.startLabel}<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"></path></svg></button><div aria-live="polite" style="flex: 1 1 180px; min-width: 0; font-size: 13px; font-weight: 600; color: #31291F">${V.chMap.journey.label}</div>${(V.chMap.journey.started) ? html`<button type="button" onClick=${V.chMap.journey.restart} style="cursor: pointer; border: none; background: transparent; color: #6B5F52; text-decoration: underline; font-size: 13px; padding: 4px; min-height: 36px">Show all</button>` : null}${(V.chMap.journey.hasRoute) ? html`<label style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #4A3F35; cursor: pointer; min-height: 36px"><input type="checkbox" checked=${V.chMap.journey.routeOn} onInput=${V.chMap.journey.toggleRoute} style="width: 18px; height: 18px; accent-color: #7A3B1E" />Route line</label>` : null}</div>
` : null}
${(V.chMap.hasLegend) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 6px 16px">
${(V.chMap.legend || []).map((g, $index) => html`
<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #4A3F35"><span aria-hidden="true" style="width: 22px; height: 4px; border-radius: 2px; background: ${g.color}"></span>${g.label}</span>
`)}
</div>
` : null}
<button type="button" onClick=${V.chMap.toggleList} aria-expanded=${V.chMap.listOpen} style="cursor: pointer; align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 6px 12px 6px 10px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 13px; font-weight: 600"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.chMap.chevron}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.chMap.listLabel}</button>
${(V.chMap.listOpen) ? html`
<ol style="list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2px 12px">
${(V.chMap.list || []).map((it, $index) => html`
<li><button type="button" onClick=${it.pick} aria-pressed=${it.pressed} style="width: 100%; min-height: 40px; text-align: left; cursor: pointer; border: none; border-radius: 8px; padding: 6px 8px; display: flex; gap: 10px; align-items: baseline; font-size: 14px; color: #231E19; background: ${it.bg}"><span style="flex: none; width: 22px; height: 22px; border-radius: 50%; color: #FFFFFF; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; background: ${it.dot}">${it.num}</span><span><strong>${it.name}</strong> <span style="color: #4A3F35">${it.note}</span></span></button></li>
`)}
</ol>
` : null}
</div>
</div>
${(V.cp.showAttrib) ? html`
<div style="font-size: 11px; color: #6B5F52">Chapter people, places and events: <a href="https://github.com/robertrouse/theographic-bible-metadata" target="_blank" rel="noopener noreferrer" style="color: #6B5F52">Theographic Bible Metadata</a>, CC BY-SA 4.0.</div>
` : null}
</section>
` : null}
${(V.cp.showBook) ? html`
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 18px; overflow: hidden">
<div style="padding: 14px 16px 22px; color: #FFFFFF; background: ${V.sel.color}">
<nav aria-label="Previous and next book" style="display: flex; justify-content: space-between; gap: 8px; margin-bottom: 14px">
<button type="button" onClick=${V.sel.goPrev} disabled=${V.sel.noPrev} aria-label="Previous book: ${V.sel.prevName}" style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.45); background: rgba(255,255,255,0.14); color: #FFFFFF; font-weight: 600; font-size: 14px; opacity: ${V.sel.prevOpacity}">← ${V.sel.prevName}</button>
<button type="button" onClick=${V.sel.goNext} disabled=${V.sel.noNext} aria-label="Next book: ${V.sel.nextName}" style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.45); background: rgba(255,255,255,0.14); color: #FFFFFF; font-weight: 600; font-size: 14px; opacity: ${V.sel.nextOpacity}">${V.sel.nextName} →</button>
</nav>
<div style="padding: 0 8px">
<div style="font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600">${V.sel.kicker}</div>
<h2 style="margin: 6px 0 4px; font-family: Fraunces, Georgia, serif; font-size: 40px; line-height: 1.05">${V.sel.name}</h2>
<div style="font-size: 14px">${V.sel.position}</div>
</div>
</div>
<div style="padding: 22px 24px; display: flex; flex-direction: column; gap: 20px">
${(V.sel.isExtra) ? html`
<div style="border: 2px dashed #8C7A58; border-radius: 12px; padding: 12px 14px; background: #F5EFE3; display: flex; flex-direction: column; gap: 4px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5848">Not in the Protestant Bible</div>
<div style="font-size: 14px; color: #31291F">${V.sel.extraNote}</div>
</div>
` : null}
<div style="display: flex; flex-direction: column; gap: 12px">
<p style="margin: 0; font-size: 17px; line-height: 1.55">${V.sel.sum}</p>
${(V.sel.moreOpen) ? html`
<div style="display: flex; flex-direction: column; gap: 12px; font-size: 16px; line-height: 1.65; color: #31291F">
${(V.sel.more || []).map((para, $index) => html`
<p style="margin: 0">${para}</p>
`)}
</div>
` : null}
<button type="button" onClick=${V.sel.toggleMore} aria-expanded=${V.sel.moreOpen} style="align-self: flex-start; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 6px 12px 6px 8px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 14px; font-weight: 600"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.sel.moreChevron}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.sel.moreLabel}</button>
</div>
${(V.sel.canRead) ? html`
<button type="button" onClick=${V.sel.read} style="cursor: pointer; border: none; min-height: 48px; border-radius: 12px; font-size: 15px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 10px; background: ${V.sel.color}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5c3-1.5 6.5-1.5 10 1 3.5-2.5 7-2.5 10-1v14c-3-1.5-6.5-1.5-10 1-3.5-2.5-7-2.5-10-1z"></path><path d="M12 6v14"></path></svg>${V.sel.readLabel}</button>
` : null}
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 4px">Key figures</div>
<div>${V.sel.people}</div>
</div>
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Where it sits in the story</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(V.sel.eras || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 14px; font-weight: 600">${c.label}</button>
`)}
</div>
</div>
${(V.sel.showMap) ? html`
<div data-focus="map"><button type="button" class="be-fbtn" onClick=${V.focusToggle} aria-label="Focus mode: show this section full screen" title="Focus mode (full screen)"><svg class="be-fi-in" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5"></path><path d="M20 9V4h-5"></path><path d="M4 15v5h5"></path><path d="M20 15v5h-5"></path></svg><svg class="be-fi-out" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path></svg></button><button type="button" class="be-sbtn" onClick=${V.areaSpeak} aria-label="Read this section aloud (press again to stop)" title="Read this section aloud"><svg class="be-si-play" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></svg><svg class="be-si-stop" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Map</div>
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center; justify-content: flex-end">
<div role="group" aria-label="Map zoom" style="display: flex; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; box-shadow: 0 1px 3px rgba(0,0,0,0.15); overflow: hidden">
<button type="button" onClick=${V.bookMap.zoomOut} disabled=${V.bookMap.noOut} aria-label="Zoom out" style="cursor: pointer; width: 40px; height: 40px; border: none; background: transparent; color: ${V.bookMap.outColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path></svg></button>
<span aria-hidden="true" style="width: 1px; background: #D9CDB8"></span>
<button type="button" onClick=${V.bookMap.zoomIn} disabled=${V.bookMap.noIn} aria-label="Zoom in" style="cursor: pointer; width: 40px; height: 40px; border: none; background: transparent; color: ${V.bookMap.inColor}; display: flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<button type="button" onClick=${V.bookMap.toggle} style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; font-size: 13px; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.15)">${V.bookMap.toggleLabel}</button>
</div>
<div onPointerDown=${V.bookMap.down} onPointerMove=${V.bookMap.move} onPointerUp=${V.bookMap.up} onPointerCancel=${V.bookMap.up} onWheel=${V.bookMap.wheel} data-fit="1" data-noread="1" style="position: relative; width: 100%; aspect-ratio: ${V.bookMap.aspect}; overflow: hidden; border-radius: 12px; background: #C7DADB; border: 1px solid #D9CDB8; touch-action: none; user-select: none; cursor: ${V.bookMap.cursor}">
<div style="position: absolute; left: ${V.bookMap.left}%; top: ${V.bookMap.top}%; width: ${V.bookMap.width}%; height: ${V.bookMap.height}%; transition: ${V.bookMap.transition}">
<img src="basemap.svg" alt="" draggable="false" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: block; pointer-events: none" />
<svg aria-hidden="true" viewBox="0 0 7372.37 5200" preserveAspectRatio="none" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: visible">
${(V.bookMap.routes || []).map((r, $index) => html`
<polyline points=${r.points} fill="none" stroke=${r.color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85" vector-effect="non-scaling-stroke"></polyline>
`)}
</svg>
${(V.bookMap.labels || []).map((l, $index) => html`
<div aria-hidden="true" style="position: absolute; left: ${l.x}%; top: ${l.y}%; transform: translate(${l.tx}, -50%) rotate(${l.rot}deg); white-space: nowrap; pointer-events: none; font-size: ${l.size}px; font-weight: ${l.fw}; font-family: ${l.font}; font-style: ${l.fstyle}; letter-spacing: ${l.ls}; color: ${l.color}; text-shadow: 0 0 3px rgba(239,228,203,0.9)">${l.name}</div>
`)}
${(V.bookMap.pins || []).map((p, $index) => html`
<div style="position: absolute; width: 0; height: 0; left: ${p.x}%; top: ${p.y}%; z-index: ${p.z}">
<button type="button" onClick=${p.pick} aria-label=${p.aria} style="position: absolute; left: -12px; top: -12px; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #FFFDF8; padding: 0; cursor: pointer; font-size: 11px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,0.35); background: ${p.bg}">${p.num}</button>
${(p.showLabel) ? html`
<span style="position: absolute; white-space: nowrap; font-size: 12px; font-weight: 700; color: #231E19; background: rgba(255,253,248,0.9); padding: 1px 6px; border-radius: 4px; pointer-events: none; left: ${p.lx}; top: ${p.ly}; transform: translateX(${p.tx})">${p.name}</span>
` : null}
</div>
`)}
</div>
</div>
${(V.bookMap.hasLegend) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 6px 16px">
${(V.bookMap.legend || []).map((g, $index) => html`
<span style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #4A3F35"><span aria-hidden="true" style="width: 22px; height: 4px; border-radius: 2px; background: ${g.color}"></span>${g.label}</span>
`)}
</div>
` : null}
<button type="button" onClick=${V.bookMap.toggleList} aria-expanded=${V.bookMap.listOpen} style="cursor: pointer; align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 6px 12px 6px 10px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 13px; font-weight: 600"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.bookMap.chevron}deg); transition: transform 0.2s ease"><path d="M6 9l6 6 6-6"></path></svg>${V.bookMap.listLabel}</button>
${(V.bookMap.listOpen) ? html`
<ol style="list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2px 12px">
${(V.bookMap.list || []).map((it, $index) => html`
<li><button type="button" onClick=${it.pick} aria-pressed=${it.pressed} style="width: 100%; min-height: 40px; text-align: left; cursor: pointer; border: none; border-radius: 8px; padding: 6px 8px; display: flex; gap: 10px; align-items: baseline; font-size: 14px; color: #231E19; background: ${it.bg}"><span style="flex: none; width: 22px; height: 22px; border-radius: 50%; color: #FFFFFF; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; background: ${it.dot}">${it.num}</span><span><strong>${it.name}</strong> <span style="color: #4A3F35">${it.note}</span></span></button></li>
`)}
</ol>
` : null}
</div>
</div>
` : null}
${(V.sel.showThemes) ? html`
<div>
<div style="font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 8px">Themes</div>
${(V.sel.hasThemes) ? html`
<div style="display: flex; flex-wrap: wrap; gap: 8px">
${(V.sel.themes || []).map((c, $index) => html`
<button type="button" onClick=${c.pick} style="cursor: pointer; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; border-radius: 999px; padding: 8px 14px; min-height: 40px; font-size: 14px; font-weight: 600">${c.label}</button>
`)}
</div>
` : null}
${(V.sel.noThemes) ? html`
<div style="font-size: 14px; color: #6B5F52">Not tagged with a major theme yet.</div>
` : null}
</div>
` : null}
${(V.sel.showLength) ? html`
<div>
<div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px"><span>Length</span><span style="text-transform: none; letter-spacing: 0">${V.sel.lengthLabel}</span></div>
<div aria-hidden="true" style="height: 8px; border-radius: 4px; background: #EAE1D0"><div style="height: 8px; border-radius: 4px; background: ${V.sel.color}; width: ${V.sel.pct}%"></div></div>
<div style="font-size: 12px; color: #6B5F52; margin-top: 4px">Compared with Psalms, the longest book (150 chapters).</div>
</div>
` : null}
</div>
</div>
` : null}
` : null}
${(V.aside.closed) ? html`
<button type="button" onClick=${V.aside.toggle} aria-expanded="false" aria-controls="book-card" title="Show the book details panel" style="position: sticky; top: 12px; cursor: pointer; width: 100%; display: flex; flex-direction: ${V.aside.railDir}; align-items: center; justify-content: center; gap: 10px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; border-radius: 14px; padding: ${V.aside.railPad}; min-height: 44px; font-size: 14px; font-weight: 700; box-shadow: 0 1px 3px rgba(0,0,0,0.08)"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(${V.aside.showRot}deg)"><path d="M15 6l-6 6 6 6"></path></svg><span style="writing-mode: ${V.aside.railWrite}">${V.aside.railLabel}</span></button>
` : null}
</aside>
` : null}
</main>
${(V.player.show) ? html`<div aria-hidden="true" style="height: 175px"></div>` : null}
${(V.player.show) ? html`
<div role="region" data-player="1" aria-label="Reading aloud" style="position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 55; width: min(640px, calc(100vw - 24px)); box-sizing: border-box; background: #231E19; color: #FBF7EF; border-radius: 18px; padding: 12px 16px 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); display: flex; flex-direction: column; gap: 6px">
<div style="display: flex; justify-content: space-between; gap: 10px; font-size: 13px"><span style="font-weight: 700">Listening · ${V.player.title}</span><span style="color: #D9CDB8">${V.player.posLabel}</span></div>
<label for="player-seek" class="sr">Position</label>
<input id="player-seek" type="range" min=${V.player.min} max=${V.player.max} step="1" value=${V.player.val} onInput=${V.player.onSeek} onPointerDown=${V.player.seekDown} onPointerUp=${V.player.seekUp} onPointerCancel=${V.player.seekUp} onKeyUp=${V.player.seekUp} style="width: 100%; height: 28px; margin: 2px 0; accent-color: #F6E2A8; cursor: pointer; touch-action: none" />
<div style="display: flex; justify-content: center; align-items: center; gap: 18px">
<button type="button" onClick=${V.player.back} aria-label="Back" title="Back" style="flex: none; cursor: pointer; width: 44px; height: 44px; border-radius: 50%; border: none; background: transparent; color: #FBF7EF; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11 6v12L3 12z"></path><path d="M20 6v12l-8-6z"></path></svg></button>
<button type="button" onClick=${V.player.pause} aria-label="Pause or resume" title="Pause or resume" style="flex: none; cursor: pointer; width: 50px; height: 50px; border-radius: 50%; border: none; background: #FBF7EF; color: #231E19; display: inline-flex; align-items: center; justify-content: center; padding: 0">${(V.player.playing) ? html`<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4.5" width="4" height="15" rx="1"></rect><rect x="14" y="4.5" width="4" height="15" rx="1"></rect></svg>` : null}${(V.player.paused) ? html`<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"></path></svg>` : null}</button>
<button type="button" onClick=${V.player.fwd} aria-label="Skip ahead" title="Skip ahead" style="flex: none; cursor: pointer; width: 44px; height: 44px; border-radius: 50%; border: none; background: transparent; color: #FBF7EF; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 6v12l8-6z"></path><path d="M4 6v12l8-6z"></path></svg></button>
<button type="button" onClick=${V.player.stop} aria-label="Stop" title="Stop" style="flex: none; cursor: pointer; width: 44px; height: 44px; border-radius: 50%; border: none; background: transparent; color: #FBF7EF; display: inline-flex; align-items: center; justify-content: center; padding: 0"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"></rect></svg></button>
</div>
${(V.player.hasVoices) ? html`<div style="display: flex; align-items: center; gap: 8px; margin-top: 6px; font-size: 12px; color: #D9CDB8"><label for="player-voice" style="flex: none">Voice</label><select id="player-voice" onChange=${V.player.onVoice} style="flex: 1 1 auto; min-width: 0; min-height: 32px; border-radius: 8px; border: 1px solid #4A3F35; background: #31291F; color: #FBF7EF; font-size: 13px; padding: 4px 8px">${(V.player.voices || []).map((vo, $index) => html`<option value=${vo.id} selected=${vo.sel}>${vo.label}</option>`)}</select></div>` : null}
</div>
` : null}
${(V.toast.show) ? html`
<div role="status" style="position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); z-index: 60; max-width: calc(100vw - 40px); box-sizing: border-box; padding: 12px 20px; border-radius: 12px; background: #231E19; color: #FBF7EF; font-size: 14px; font-weight: 600; box-shadow: 0 8px 24px rgba(0,0,0,0.3); overflow-wrap: anywhere">${V.toast.text}</div>
` : null}
${(V.showPhoneBtn) ? html`
<button type="button" onClick=${V.toPhone} aria-label="Switch back to phone view" style="position: fixed; right: 28px; bottom: 28px; z-index: 50; display: flex; align-items: center; gap: 16px; padding: 22px 36px; border-radius: 999px; border: none; background: #231E19; color: #FBF7EF; font-size: 40px; font-weight: 700; cursor: pointer; box-shadow: 0 8px 28px rgba(0,0,0,0.35)"><svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2"></rect><path d="M11 18.5h2"></path></svg>Phone View</button>
` : null}
</div>`;
}

const app = new Component();
const startTab = new URLSearchParams(location.search).get('tab');
if (startTab) app.props.startTab = startTab;
function draw() { render(view(app.renderVals()), document.getElementById('app')); }
draw();
if (app.componentDidMount) app.componentDidMount();

// Bible Explorer: generated from the design mockup. Edit freely.
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

var TEXT_URLS = { bsb: 'bsb.json', kjv: 'kjv.json' };
var TR_NAMES = { bsb: 'Berean Standard Bible', kjv: 'King James Version' };
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
  // Zoom steps: each step is 1.6x. Never zoom out past the whole map; at most 3 steps in.
  var kMin = Math.min(1 / (MAP_FW * 0.98), 1 / (A * MAP_FH * 0.98));
  var z = zoom || 0;
  var kBase = k;
  k = Math.max(kMin, Math.min(kBase * Math.pow(1.6, 3), kBase * Math.pow(1.6, z)));
  var noOut = k <= kMin * 1.001, noIn = z >= 3;
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
    labels: MAP_LABELS.filter(function (l) { return l[4] === 'near' ? widthPct > 970 : l[4] === 'far' ? widthPct <= 970 : widthPct <= 300; }).map(function (l) {
      var sea = l[3] === 'sea';
      return { name: l[0], x: pct((l[2] - MAP_LON0) * MAP_CX / MAP_FW * 100), y: pct((MAP_LAT1 - l[1]) / MAP_FH * 100),
        font: sea ? 'Fraunces, Georgia, serif' : 'Inter, system-ui, sans-serif', fstyle: sea ? 'italic' : 'normal',
        ls: sea ? '0' : '0.18em', color: sea ? '#3F6676' : '#7D6A48' };
    }),
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
    toggle: function () { go({ mapWide: !wide, mapZoom: 0, eraPan: null, bookPan: null }); },
    cursor: isDragging ? 'grabbing' : 'grab',
    transition: isDragging ? 'none' : 'left 0.6s ease, top 0.6s ease, width 0.6s ease, height 0.6s ease',
    down: function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target && e.target.closest && e.target.closest('button')) return;
      var r = e.currentTarget.getBoundingClientRect();
      DRAG[mapKey] = { x: e.clientX, y: e.clientY, w: r.width, cx: cx, cy: cy, moved: false };
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
    },
    move: function (e) {
      var d = DRAG[mapKey];
      if (!d) return;
      var dx = e.clientX - d.x, dy = e.clientY - d.y;
      if (!d.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
      d.moved = true;
      var patch = panPatch(d.cx - dx / (d.w * k), d.cy - dy / (d.w * k));
      patch.dragging = mapKey;
      go(patch);
    },
    up: function () {
      if (!DRAG[mapKey]) return;
      var moved = DRAG[mapKey].moved;
      delete DRAG[mapKey];
      if (moved) go({ dragging: null });
    },
    noOut: noOut, noIn: noIn,
    outColor: noOut ? '#B8AC98' : '#231E19', inColor: noIn ? '#B8AC98' : '#231E19',
    zoomOut: function () { if (!noOut) go({ mapZoom: Math.max(z - 1, -14) }); },
    zoomIn: function () { if (!noIn) go({ mapZoom: z + 1 }); }
  };
}

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

class Component extends DCLogic {
  componentDidMount() {
    var self = this;
    this.loadText('bsb');
    // Remember a phone visitor's choice of desktop view.
    var saved = false;
    try { saved = window.localStorage.getItem('bibleExplorer.desktopView') === '1'; } catch (err) {}
    if (saved && this.isPhoneScreen()) this.setDesktopView(true);
    this._narrow = window.innerWidth < 720;
    window.addEventListener('resize', function () {
      var n = window.innerWidth < 720;
      if (n !== self._narrow) { self._narrow = n; self.forceUpdate(); }
    });
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

  isPhoneScreen() {
    var sw = (window.screen && window.screen.width) || window.innerWidth;
    return sw < 720;
  }

  // Desktop view on a phone: lay the page out at desktop width and let the browser zoom it to fit.
  setDesktopView(on) {
    var meta = document.querySelector('meta[name="viewport"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); document.head.appendChild(meta); }
    meta.setAttribute('content', on ? 'width=1280' : 'width=device-width, initial-scale=1');
    try { window.localStorage.setItem('bibleExplorer.desktopView', on ? '1' : '0'); } catch (err) {}
    this.setState({ desktopView: on });
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
    var eraN = st.era || 5;
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

    var tabs = [['overview','Overview'],['library','Library'],['story','Storyline'],['themes','Themes'],['read','Read'],['search','Search']].map(function (t) {
      var on = tab === t[0];
      return { label: t[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ tab: t[0] }); } };
    });

    var ring = function (b) { return b.id === bookId ? '3px solid ' + INK : '3px solid transparent'; };
    // On phones the book card sits below the content, so bring it into view when a book is picked.
    var pickBook = function (id) {
      go({ book: id, chap: 1, hl: 0 });
      if (window.innerWidth < 900) self.scrollToId('book-card');
    };
    var chip = function (b) {
      return { name: b.name, bg: DIVM[b.div].color, ring: ring(b), pick: function () { pickBook(b.id); } };
    };

    // Overview
    var segments = DIVS.map(function (d) { return { ch: d.ch, bg: d.color, label: d.name + ': ' + d.ch + ' chapters' }; });
    var legend = DIVS.map(function (d) {
      return { name: d.name, bg: d.color, meta: d.count + (d.count === 1 ? ' book' : ' books') + ' · ' + d.ch + ' ch', pick: function () { go({ tab: 'library', testa: 'all', q: '' }); } };
    });

    // Library
    var filters = [['all','All 66'],['OT','Old Testament'],['NT','New Testament']].map(function (f) {
      var on = testa === f[0];
      return { label: f[1], pressed: on, bg: on ? INK : 'transparent', fg: on ? PAPER : '#4A3F35', pick: function () { go({ testa: f[0] }); } };
    });
    var divisions = DIVS.filter(function (d) { return testa === 'all' || d.t === testa; }).map(function (d) {
      var bs = BOOKS.filter(function (b) { return b.div === d.id; }).map(function (b) {
        return {
          abbr: b.abbr, name: b.name, ch: b.ch, bg: d.color, ring: ring(b), pressed: b.id === bookId,
          aria: b.name + ', ' + b.ch + ' chapters',
          pct: Math.max(4, Math.round(Math.sqrt(b.ch / 150) * 100)),
          pick: function () { pickBook(b.id); }
        };
      });
      var meta = (d.tag ? d.tag + ' · ' : '') + d.count + (d.count === 1 ? ' book' : ' books') + ' · ' + d.ch + ' chapters';
      return { name: d.name, color: d.color, blurb: d.blurb, meta: meta, books: bs, has: bs.length > 0 };
    }).filter(function (d) { return d.has; });

    // Storyline
    var eras = ERAS.map(function (e) {
      var on = e.n === eraN;
      return {
        n: e.n, name: e.name, dates: e.dates, pressed: on,
        bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, sub: on ? '#D9CDB8' : '#6B5F52', border: on ? INK : '#E2D8C6',
        dotBg: on ? PAPER : '#EAE1D0', dotFg: INK,
        pick: function () { go({ era: e.n }); }
      };
    });
    var E = ERAS[eraN - 1];
    var eraBooks = BOOKS.filter(function (b) { return b.eras.indexOf(eraN) >= 0; }).map(chip);
    var era = { n: E.n, name: E.name, dates: E.dates, sum: E.sum, people: E.people, books: eraBooks, hasBooks: eraBooks.length > 0, noBooks: eraBooks.length === 0 };

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

    // Selected book
    var B = BOOKS.filter(function (b) { return b.id === bookId; })[0] || BOOKS[0];
    var D = DIVM[B.div];
    var prev = BOOKS[B.idx - 1];
    var next = BOOKS[B.idx + 1];
    var bThemes = THEMES.filter(function (t) { return t.books.indexOf(B.id) >= 0; }).map(function (t) {
      return { label: t.name, pick: function () { go({ tab: 'themes', theme: t.id }); } };
    });
    var sel = {
      name: B.name, sum: B.sum, people: B.people, color: D.color,
      kicker: (D.t === 'OT' ? 'Old Testament' : 'New Testament') + ' · ' + D.name,
      position: 'Book ' + (B.idx + 1) + ' of 66 · ' + B.ch + (B.ch === 1 ? ' chapter' : ' chapters'),
      eras: B.eras.map(function (n) { return { label: ERAS[n - 1].name, pick: function () { go({ tab: 'story', era: n }); } }; }),
      themes: bThemes, hasThemes: bThemes.length > 0, noThemes: bThemes.length === 0,
      pct: Math.max(1, Math.round(B.ch / 150 * 100)),
      lengthLabel: (B.ch / 1189 * 100).toFixed(1) + '% of the Bible',
      prevName: prev ? prev.name : 'Start', nextName: next ? next.name : 'End',
      noPrev: !prev, noNext: !next,
      prevOpacity: prev ? 1 : 0.45, nextOpacity: next ? 1 : 0.45,
      goPrev: function () { if (prev) go({ book: prev.id, chap: 1, hl: 0 }); },
      goNext: function () { if (next) go({ book: next.id, chap: 1, hl: 0 }); },
      read: function () { openChap(B.id, 1, 0); }
    };

    // Reader
    var C = Math.min(Math.max(1, chap), B.ch);
    var verses = text ? text[B.idx][C - 1].map(function (t, i) {
      return { n: i + 1, id: 'v-' + (i + 1), text: t, bg: (i + 1) === hl ? '#F6E2A8' : 'transparent' };
    }) : [];
    var pc = C > 1 ? { id: B.id, c: C - 1, label: B.name + ' ' + (C - 1) } : (prev ? { id: prev.id, c: prev.ch, label: prev.name + ' ' + prev.ch } : null);
    var nc = C < B.ch ? { id: B.id, c: C + 1, label: B.name + ' ' + (C + 1) } : (next ? { id: next.id, c: 1, label: next.name + ' 1' } : null);
    var chapOpts = [];
    for (var ci = 1; ci <= B.ch; ci++) chapOpts.push({ v: String(ci), label: 'Chapter ' + ci });
    var rd = {
      title: B.name + ' ' + C, trName: TR_NAMES[tr], bookId: B.id, chapVal: String(C), chapOpts: chapOpts,
      onBook: function (e) { go({ book: e.target.value, chap: 1, hl: 0 }); },
      onChap: function (e) { go({ chap: parseInt(e.target.value, 10) || 1, hl: 0 }); },
      verses: verses, loading: !text && !failed, ready: !!text, failed: failed,
      prevLabel: pc ? pc.label : 'Start', nextLabel: nc ? nc.label : 'End', noPrev: !pc, noNext: !nc,
      goPrev: function () { if (pc) openChap(pc.id, pc.c, 0); },
      goNext: function () { if (nc) openChap(nc.id, nc.c, 0); }
    };
    var bookOpts = BOOKS.map(function (b) { return { id: b.id, name: b.name }; });

    // Search
    var qq = q.trim();
    var qlow = qq.toLowerCase();
    var bookMatches = qlow.length >= 2 ? BOOKS.filter(function (b) {
      return b.name.toLowerCase().indexOf(qlow) >= 0 || b.abbr.toLowerCase() === qlow;
    }).slice(0, 8).map(function (b) {
      return { name: b.name, bg: DIVM[b.div].color, pick: function () { openChap(b.id, 1, 0); } };
    }) : [];
    var scopes = [['all', 'Whole Bible'], ['OT', 'Old Testament'], ['NT', 'New Testament'], ['book', 'In ' + B.name]].map(function (c) {
      var on = scope === c[0];
      return { label: c[1], pressed: on, bg: on ? INK : '#FFFDF8', fg: on ? PAPER : INK, border: on ? INK : '#D9CDB8', pick: function () { go({ scope: c[0] }); } };
    });
    var searching = qlow.length >= 3;
    var res = { hits: [], counts: [], total: 0 };
    if (text && searching) {
      var key = tr + '|' + scope + '|' + (scope === 'book' ? B.id : '') + '|' + qlow;
      if (this._sKey !== key) {
        var hits = [], counts = [], total = 0;
        for (var bi = 0; bi < BOOKS.length; bi++) {
          counts.push(0);
          var bk = BOOKS[bi], tt = DIVM[bk.div].t;
          if ((scope === 'OT' && tt !== 'OT') || (scope === 'NT' && tt !== 'NT') || (scope === 'book' && bk.id !== B.id)) continue;
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
        this._sKey = key;
        this._sRes = { hits: hits, counts: counts, total: total };
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
    var scopeNote = scope === 'all' ? 'whole Bible' : scope === 'OT' ? 'Old Testament' : scope === 'NT' ? 'New Testament' : B.name;
    var s = {
      query: qq, trName: TR_NAMES[tr], scopes: scopes,
      bookMatches: bookMatches, hasBooks: bookMatches.length > 0,
      hint: !searching, loading: searching && !text && !failed, ready: searching && !!text,
      total: res.total, totalLabel: res.total.toLocaleString() + (res.total === 1 ? ' verse' : ' verses'),
      has: res.total > 0,
      note: TR_NAMES[tr] + ' · ' + scopeNote + (res.total > MAX_RESULTS ? ' · showing the first ' + MAX_RESULTS : ''),
      hist: hist, results: results,
      suggestions: SUGGESTIONS.map(function (w) { return { label: w, pick: function () { go({ q: w }); } }; })
    };

    // Maps
    var narrow = !!this._narrow;
    var eraMap = buildMap(ERA_MAPS[eraN], narrow ? 4 / 3 : 16 / 9, narrow ? '4 / 3' : '16 / 9', !!st.mapWide, st.pin, st.mapZoom || 0, go, 'eraPan', 'era' + eraN, st.eraPan, st.dragging, 'eraListClosed', !st.eraListClosed);
    var bookMap = buildMap(BOOK_MAPS[B.id], 4 / 3, '4 / 3', !!st.mapWide, st.pin, st.mapZoom || 0, go, 'bookPan', 'book' + B.id, st.bookPan, st.dragging, 'bookListClosed', !st.bookListClosed);

    var phoneScreen = this.isPhoneScreen();
    return {
      showDesktopBtn: phoneScreen && !st.desktopView,
      showPhoneBtn: phoneScreen && !!st.desktopView,
      toDesktop: function () { self.setDesktopView(true); },
      toPhone: function () { self.setDesktopView(false); },
      goGap: function () { go({ tab: 'story', era: 9 }); window.scrollTo(0, 0); },
      eraMap: eraMap, bookMap: bookMap,
      tabs: tabs, q: q, trBtns: trBtns, bookOpts: bookOpts, rd: rd, s: s,
      onSearch: function (e) { go({ q: e.target.value, tab: 'search' }); },
      onSearchHere: function (e) { go({ q: e.target.value }); },
      isOverview: tab === 'overview', isLibrary: tab === 'library', isStory: tab === 'story', isThemes: tab === 'themes',
      isRead: tab === 'read', isSearch: tab === 'search',
      segments: segments, legend: legend,
      filters: filters, divisions: divisions,
      eras: eras, era: era,
      themeBtns: themeBtns, strip: strip, theme: theme,
      sel: sel
    };
  }
}

function view(V) {
  return html`<div style="min-height: 100vh; background: #F5EFE3; color: #231E19; font-family: Inter, system-ui, sans-serif; font-size: 15px; line-height: 1.5">

<header style="position: relative; border-bottom: 1px solid #E2D8C6; background: #FBF7EF">
${(V.showDesktopBtn) ? html`
<button type="button" onClick=${V.toDesktop} aria-label="Switch to desktop view" style="position: absolute; top: 14px; right: 16px; z-index: 5; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-width: 52px; min-height: 48px; padding: 6px 8px; border-radius: 12px; border: 1px solid #D9CDB8; background: #FFFDF8; color: #231E19; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.12)"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="12.5" rx="1.5"></rect><path d="M8.5 20.5h7"></path><path d="M12 16.5v4"></path></svg><span style="font-size: 11px; font-weight: 700; white-space: nowrap">Desktop View</span></button>
` : null}
<div style="max-width: 1360px; margin: 0 auto; padding: 16px 32px; display: flex; flex-wrap: wrap; align-items: center; gap: 14px 32px">
<div style="display: flex; align-items: center; gap: 12px">
<svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7A3B1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5c3-1.5 6.5-1.5 10 1 3.5-2.5 7-2.5 10-1v14c-3-1.5-6.5-1.5-10 1-3.5-2.5-7-2.5-10-1z"></path><path d="M12 6v14"></path></svg>
<div>
<div style="font-family: Fraunces, Georgia, serif; font-size: 24px; font-weight: 700; line-height: 1.1">Bible Explorer</div>
<div style="font-size: 13px; color: #6B5F52">66 books · one story</div>
</div>
</div>
<nav aria-label="Sections" style="display: flex; flex-wrap: wrap; gap: 6px; flex: 1 1 auto">
${(V.tabs || []).map((t, $index) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} style="border: none; cursor: pointer; padding: 10px 18px; min-height: 44px; border-radius: 999px; font-size: 15px; font-weight: 600; background: ${t.bg}; color: ${t.fg}">${t.label}</button>
`)}
</nav>
<div style="display: flex; align-items: center; gap: 8px; background: #FFFFFF; border: 1px solid #D9CDB8; border-radius: 999px; padding: 0 16px; min-height: 44px; flex: 0 1 280px">
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B5F52" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
<label for="book-search" class="sr">Search the Bible</label>
<input id="book-search" type="search" placeholder="Search the Bible…" value=${V.q} onInput=${V.onSearch} style="border: none; background: transparent; font-size: 15px; width: 100%; color: #231E19; padding: 8px 0" />
</div>
</div>
</header>

<main style="max-width: 1360px; margin: 0 auto; padding: 28px 32px 64px; display: flex; flex-wrap: wrap; gap: 28px; align-items: flex-start; box-sizing: border-box">
<div style="flex: 999 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 24px">

${(V.isOverview) ? html`
<section style="display: flex; flex-direction: column; gap: 24px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Overview</div>
<h1 style="margin: 6px 0 10px; font-family: Fraunces, Georgia, serif; font-size: 44px; line-height: 1.1; font-weight: 700">One library, one story.</h1>
<p style="margin: 0; font-size: 18px; color: #4A3F35; max-width: 720px">The Protestant Bible gathers 66 books written over more than a thousand years: 39 in the Old Testament, about God and the nation of Israel, and 27 in the New Testament, about Jesus and his followers.</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px">
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px"><div style="font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1">66</div><div style="color: #6B5F52; font-size: 14px; margin-top: 6px">books</div></div>
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px"><div style="font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1; color: #8A3E22">39</div><div style="color: #6B5F52; font-size: 14px; margin-top: 6px">Old Testament</div></div>
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px"><div style="font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1; color: #1F5A7A">27</div><div style="color: #6B5F52; font-size: 14px; margin-top: 6px">New Testament</div></div>
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 14px; padding: 18px"><div style="font-family: Fraunces, Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1">1,189</div><div style="color: #6B5F52; font-size: 14px; margin-top: 6px">chapters</div></div>
</div>

<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; align-items: baseline">
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">How the length is split</h2>
<div style="font-size: 14px; color: #6B5F52">The Old Testament holds about three-quarters of the Bible: 929 of 1,189 chapters.</div>
</div>
<div style="display: flex; height: 30px; border-radius: 8px; overflow: hidden; gap: 2px">
${(V.segments || []).map((s, $index) => html`
<div title=${s.label} style="flex: ${s.ch} 1 0px; background: ${s.bg}"></div>
`)}
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px">
${(V.legend || []).map((l, $index) => html`
<button type="button" onClick=${l.pick} style="display: flex; gap: 8px; align-items: flex-start; text-align: left; background: transparent; border: none; padding: 6px; border-radius: 8px; cursor: pointer; color: #231E19; min-height: 44px">
<span aria-hidden="true" style="width: 12px; height: 12px; border-radius: 3px; margin-top: 4px; flex: none; background: ${l.bg}"></span>
<span><span style="display: block; font-weight: 600; font-size: 14px">${l.name}</span><span style="display: block; font-size: 12px; color: #6B5F52">${l.meta}</span></span>
</button>
`)}
</div>
</div>

<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">How the parts fit together</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px">
<div style="border-radius: 12px; padding: 16px; background: #F7EDE8"><div style="font-weight: 700; color: #8A3E22">Law</div><div style="font-size: 14px; color: #4A3F35">God makes promises to Israel and asks for exclusive loyalty.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #F5EEE0"><div style="font-weight: 700; color: #7A5512">History</div><div style="font-size: 14px; color: #4A3F35">How that relationship plays out, and it doesn't go well.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #EFF1E3"><div style="font-weight: 700; color: #56661C">Poetry</div><div style="font-size: 14px; color: #4A3F35">Worship and wisdom for ancient Israel.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #F5E8EC"><div style="font-weight: 700; color: #8A2E4A">Prophets</div><div style="font-size: 14px; color: #4A3F35">God's messages delivered through human messengers.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #E6EFF4"><div style="font-weight: 700; color: #1F5A7A">Gospels</div><div style="font-size: 14px; color: #4A3F35">Four accounts of what Jesus did and said.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #E4F0EC"><div style="font-weight: 700; color: #1F6656">Acts</div><div style="font-size: 14px; color: #4A3F35">What happened after he rose: the good news spreads.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #E8ECF5"><div style="font-weight: 700; color: #2E4A8A">Letters</div><div style="font-size: 14px; color: #4A3F35">What to do with Jesus' life and teachings.</div></div>
<div style="border-radius: 12px; padding: 16px; background: #EEE9F5"><div style="font-weight: 700; color: #5B3A8A">Revelation</div><div style="font-size: 14px; color: #4A3F35">The happy ending: all things made new.</div></div>
</div>
</div>

<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
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
<button type="button" onClick=${V.goGap} style="cursor: pointer; min-height: 40px; padding: 6px 14px; border-radius: 999px; border: 1px solid #D9CDB8; background: #F5EFE3; color: #231E19; font-size: 14px; font-weight: 600">See it on the map →</button>
</div>
</div>

<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 14px">
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">Other Bibles, same story</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px">
<div style="border: 2px solid #231E19; border-radius: 12px; padding: 16px"><div style="font-family: Fraunces, Georgia, serif; font-size: 32px; font-weight: 700">66</div><div style="font-weight: 600">Protestant</div><div style="font-size: 13px; color: #6B5F52">The arrangement this app follows.</div></div>
<div style="border: 1px solid #D9CDB8; border-radius: 12px; padding: 16px"><div style="font-family: Fraunces, Georgia, serif; font-size: 32px; font-weight: 700">24</div><div style="font-weight: 600">Jewish Tanakh</div><div style="font-size: 13px; color: #6B5F52">Same books as the Old Testament, counted and ordered as Torah, Prophets and Writings.</div></div>
<div style="border: 1px solid #D9CDB8; border-radius: 12px; padding: 16px"><div style="font-family: Fraunces, Georgia, serif; font-size: 32px; font-weight: 700">73</div><div style="font-weight: 600">Catholic</div><div style="font-size: 13px; color: #6B5F52">Adds Tobit, Judith, 1–2 Maccabees, Wisdom, Sirach and Baruch.</div></div>
<div style="border: 1px solid #D9CDB8; border-radius: 12px; padding: 16px"><div style="font-family: Fraunces, Georgia, serif; font-size: 32px; font-weight: 700">73+</div><div style="font-weight: 600">Eastern Orthodox</div><div style="font-size: 13px; color: #6B5F52">Adds a few more, such as 1 Esdras, 3 Maccabees and Psalm 151.</div></div>
</div>
</div>
</section>
` : null}

${(V.isLibrary) ? html`
<section style="display: flex; flex-direction: column; gap: 22px">
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end; justify-content: space-between">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Library</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">The 66 books, shelf by shelf</h1>
</div>
<div role="group" aria-label="Filter by testament" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px">
${(V.filters || []).map((f, $index) => html`
<button type="button" onClick=${f.pick} aria-pressed=${f.pressed} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 600; background: ${f.bg}; color: ${f.fg}">${f.label}</button>
`)}
</div>
</div>
${(V.divisions || []).map((d, $index) => html`
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 12px">
<span aria-hidden="true" style="width: 12px; height: 12px; border-radius: 3px; background: ${d.color}"></span>
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 22px">${d.name}</h2>
<span style="font-size: 13px; color: #6B5F52">${d.meta}</span>
<span style="font-size: 14px; color: #4A3F35; flex: 1 1 260px">${d.blurb}</span>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 10px">
${(d.books || []).map((b, $index) => html`
<button type="button" onClick=${b.pick} aria-pressed=${b.pressed} aria-label=${b.aria} style="cursor: pointer; border: none; text-align: left; border-radius: 10px; padding: 12px; min-height: 96px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; color: #FFFFFF; background: ${b.bg}; outline: ${b.ring}; outline-offset: 2px">
<span style="display: block">
<span style="display: block; font-family: Fraunces, Georgia, serif; font-size: 22px; font-weight: 700; line-height: 1.1">${b.abbr}</span>
<span style="display: block; font-size: 12px; opacity: 0.95">${b.name}</span>
</span>
<span style="display: block">
<span style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 4px">${b.ch} ch</span>
<span aria-hidden="true" style="display: block; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.28)"><span style="display: block; height: 4px; border-radius: 2px; background: #FFFFFF; width: ${b.pct}%"></span></span>
</span>
</button>
`)}
</div>
</div>
`)}
</section>
` : null}

${(V.isStory) ? html`
<section style="display: flex; flex-direction: column; gap: 20px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Storyline</div>
<h1 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">Eleven eras, start to finish</h1>
<p style="margin: 0; color: #4A3F35; max-width: 720px">Pick an era to see who lived then and which books tell its story. Dates are approximate, and some are debated, especially the Exodus.</p>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 6px; align-items: center; font-size: 13px; font-weight: 600; color: #4A3F35">
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Creation</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Fall</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Covenant</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Kingdom</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Exile</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Return</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Messiah</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">Church</span><span aria-hidden="true">→</span>
<span style="background: #EAE1D0; padding: 6px 12px; border-radius: 999px">New creation</span>
</div>
<div style="overflow-x: auto; padding: 4px 2px 10px">
<div style="display: flex; gap: 10px; min-width: max-content">
${(V.eras || []).map((e, $index) => html`
<button type="button" onClick=${e.pick} aria-pressed=${e.pressed} style="cursor: pointer; width: 168px; text-align: left; border-radius: 12px; padding: 14px; min-height: 120px; display: flex; flex-direction: column; gap: 6px; background: ${e.bg}; color: ${e.fg}; border: 1px solid ${e.border}">
<span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; font-size: 13px; font-weight: 700; background: ${e.dotBg}; color: ${e.dotFg}">${e.n}</span>
<span style="font-weight: 700; font-size: 15px; line-height: 1.25">${e.name}</span>
<span style="font-size: 12px; color: ${e.sub}">${e.dates}</span>
</button>
`)}
</div>
</div>
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px">
<div>
<div style="font-size: 13px; color: #6B5F52; font-weight: 600">Era ${V.era.n} of 11 · ${V.era.dates}</div>
<h2 style="margin: 4px 0 8px; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.15">${V.era.name}</h2>
<p style="margin: 0; font-size: 17px; color: #31291F; max-width: 760px">${V.era.sum}</p>
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
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px">
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
<div onPointerDown=${V.eraMap.down} onPointerMove=${V.eraMap.move} onPointerUp=${V.eraMap.up} onPointerCancel=${V.eraMap.up} style="position: relative; width: 100%; aspect-ratio: ${V.eraMap.aspect}; overflow: hidden; border-radius: 12px; background: #C7DADB; border: 1px solid #D9CDB8; touch-action: none; user-select: none; cursor: ${V.eraMap.cursor}">
<div style="position: absolute; left: ${V.eraMap.left}%; top: ${V.eraMap.top}%; width: ${V.eraMap.width}%; height: ${V.eraMap.height}%; transition: ${V.eraMap.transition}">
<img src="basemap.svg" alt="" draggable="false" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: block; pointer-events: none" />
<svg aria-hidden="true" viewBox="0 0 7372.37 5200" preserveAspectRatio="none" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: visible">
${(V.eraMap.routes || []).map((r, $index) => html`
<polyline points=${r.points} fill="none" stroke=${r.color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85" vector-effect="non-scaling-stroke"></polyline>
`)}
</svg>
${(V.eraMap.labels || []).map((l, $index) => html`
<div aria-hidden="true" style="position: absolute; left: ${l.x}%; top: ${l.y}%; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; font-size: 12px; font-family: ${l.font}; font-style: ${l.fstyle}; letter-spacing: ${l.ls}; color: ${l.color}">${l.name}</div>
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
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 18px">
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

${(V.isRead) ? html`
<section id="reader-top" style="display: flex; flex-direction: column; gap: 18px">
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-end; justify-content: space-between">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Read · ${V.rd.trName}</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 40px; line-height: 1.1">${V.rd.title}</h1>
</div>
<div role="group" aria-label="Translation" style="display: flex; gap: 4px; background: #EAE1D0; padding: 4px; border-radius: 999px">
${(V.trBtns || []).map((t, $index) => html`
<button type="button" onClick=${t.pick} aria-pressed=${t.pressed} title=${t.title} style="border: none; cursor: pointer; padding: 8px 16px; min-height: 44px; border-radius: 999px; font-size: 14px; font-weight: 700; background: ${t.bg}; color: ${t.fg}">${t.label}</button>
`)}
</div>
</div>
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
${(V.rd.failed) ? html`
<div style="background: #FBEBEB; border: 1px solid #E8C4C4; border-radius: 16px; padding: 24px; color: #6B1F1F">The scripture text couldn't load. Try switching translations or reopening the page.</div>
` : null}
${(V.rd.ready) ? html`
<article style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 32px 40px; font-family: Georgia, 'Times New Roman', serif; font-size: 19px; line-height: 1.8; color: #231E19">
<div style="max-width: 720px">
${(V.rd.verses || []).map((v, $index) => html`
<span id=${v.id} style="border-radius: 4px; padding: 2px 0; background: ${v.bg}"><sup style="font-family: Inter, system-ui, sans-serif; font-size: 11px; font-weight: 700; color: #7A3B1E; margin: 0 4px 0 6px">${v.n}</sup>${v.text} </span>
`)}
</div>
</article>
<div style="font-size: 12px; color: #6B5F52">${V.rd.trName} · public domain. Words in [brackets] are supplied by the translators.</div>
` : null}
</section>
` : null}

${(V.isSearch) ? html`
<section style="display: flex; flex-direction: column; gap: 18px">
<div>
<div style="font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #7A3B1E">Search</div>
<h1 style="margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 36px; line-height: 1.1">Search every verse</h1>
</div>
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
<div style="background: #FFFDF8; border: 1px solid #E2D8C6; border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; align-items: baseline">
<h2 style="margin: 0; font-family: Fraunces, Georgia, serif; font-size: 24px">${V.s.totalLabel} contain “${V.s.query}”</h2>
<span style="font-size: 13px; color: #6B5F52">${V.s.note}</span>
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
</section>
` : null}

</div>

<aside id="book-card" aria-label="Book details" style="flex: 1 1 340px; min-width: 0; scroll-margin-top: 12px">
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
<p style="margin: 0; font-size: 17px; line-height: 1.55">${V.sel.sum}</p>
<button type="button" onClick=${V.sel.read} style="cursor: pointer; border: none; min-height: 48px; border-radius: 12px; font-size: 15px; font-weight: 700; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 10px; background: ${V.sel.color}"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5c3-1.5 6.5-1.5 10 1 3.5-2.5 7-2.5 10-1v14c-3-1.5-6.5-1.5-10 1-3.5-2.5-7-2.5-10-1z"></path><path d="M12 6v14"></path></svg>Read ${V.sel.name}</button>
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
<div>
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
<div onPointerDown=${V.bookMap.down} onPointerMove=${V.bookMap.move} onPointerUp=${V.bookMap.up} onPointerCancel=${V.bookMap.up} style="position: relative; width: 100%; aspect-ratio: ${V.bookMap.aspect}; overflow: hidden; border-radius: 12px; background: #C7DADB; border: 1px solid #D9CDB8; touch-action: none; user-select: none; cursor: ${V.bookMap.cursor}">
<div style="position: absolute; left: ${V.bookMap.left}%; top: ${V.bookMap.top}%; width: ${V.bookMap.width}%; height: ${V.bookMap.height}%; transition: ${V.bookMap.transition}">
<img src="basemap.svg" alt="" draggable="false" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: block; pointer-events: none" />
<svg aria-hidden="true" viewBox="0 0 7372.37 5200" preserveAspectRatio="none" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: visible">
${(V.bookMap.routes || []).map((r, $index) => html`
<polyline points=${r.points} fill="none" stroke=${r.color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85" vector-effect="non-scaling-stroke"></polyline>
`)}
</svg>
${(V.bookMap.labels || []).map((l, $index) => html`
<div aria-hidden="true" style="position: absolute; left: ${l.x}%; top: ${l.y}%; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; font-size: 12px; font-family: ${l.font}; font-style: ${l.fstyle}; letter-spacing: ${l.ls}; color: ${l.color}">${l.name}</div>
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
<div>
<div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #6B5F52; margin-bottom: 6px"><span>Length</span><span style="text-transform: none; letter-spacing: 0">${V.sel.lengthLabel}</span></div>
<div aria-hidden="true" style="height: 8px; border-radius: 4px; background: #EAE1D0"><div style="height: 8px; border-radius: 4px; background: ${V.sel.color}; width: ${V.sel.pct}%"></div></div>
<div style="font-size: 12px; color: #6B5F52; margin-top: 4px">Compared with Psalms, the longest book (150 chapters).</div>
</div>
</div>
</div>
</aside>
</main>
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

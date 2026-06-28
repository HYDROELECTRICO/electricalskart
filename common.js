/* ════════════════════════════════════════════════════════════
   ElectricalsKart – Shared JS
   Header + Footer + Cart + Language (EN/ગુજરાતી) + Search
   Edit CONFIG below once → applies to every page.
   ════════════════════════════════════════════════════════════ */

const CONFIG = {
  phone: '919265560630',
  phoneDisplay: '+91 92655 60630',
  email: 'electricohydro@gmail.com',
  addressEn: 'Bhagvati Society, Varachha Main Road, Near Laxman Nagar, Punagam, Surat, Gujarat – 395011',
  addressShortEn: 'Varachha Main Rd, Punagam, Surat',
  addressGu: 'ભગવતી સોસાયટી, વરાછા મેઈન રોડ, લક્ષ્મણ નગર પાસે, પુણાગામ, સુરત, ગુજરાત – 395011',
  addressShortGu: 'વરાછા મેઈન રોડ, પુણાગામ, સુરત',
  mapLink: 'https://maps.app.goo.gl/YNt12PE2RWmEqpfS9',
  mapEmbed: 'https://www.google.com/maps?q=Ghanshyam%20Electricals%20%26%20Filter%20House%2C%20Bhagvati%20Society%2C%20Varachha%20Main%20Rd%2C%20Punagam%2C%20Surat%20395011&output=embed',
  siteName: 'ElectricalsKart',
  domain: 'https://electricalskart.com',

  /* ── OFFER BANNER ──
     ઑફર બદલવી હોય તો અહીં ટેક્સ્ટ બદલો. બંધ કરવી હોય તો enabled: false કરો. */
  offer: {
    enabled: false,
    en: 'Browse our product catalog — enquire on WhatsApp today!',
    gu: 'અમારો પ્રોડક્ટ કેટલોગ જુઓ — આજે જ WhatsApp પર પૂછપરછ કરો!',
    link: 'products.html?cat=water-purifiers'
  }
};
const WA_PHONE = CONFIG.phone;

/* ─────────── LANGUAGE ─────────── */
let LANG = localStorage.getItem('ek_lang') || 'en';

/* Gujarati translations — key: data-i18n attribute value.
   English text stays in the HTML itself (default). */
const GU = {
  tagline: 'તમારું ઈલેક્ટ્રિકલ શોપિંગ ડેસ્ટિનેશન',
  freeDelivery: '₹2,000 થી વધુના ઓર્ડર પર ફ્રી ડિલિવરી',
  navHome: 'હોમ', navAll: 'બધી પ્રોડક્ટ્સ', navElectricals: 'ઈલેક્ટ્રિકલ્સ',
  navAppliances: 'હોમ એપ્લાયન્સિસ', navFans: 'પંખા', navLights: 'લાઈટ્સ અને LED',
  navWater: 'વોટર પ્યુરિફાયર', navAbout: 'અમારા વિશે', navContact: 'સંપર્ક',
  catWires: '⚡ વાયર અને કેબલ', catSwitches: '🔌 સ્વિચ અને સોકેટ', catMcb: '⚙️ MCB / DB પેનલ',
  catLights: '💡 લાઈટ્સ અને LED', catFans: '🌀 પંખા', catConduits: '🔧 કન્ડ્યુટ અને ફિટિંગ્સ',
  catEarthing: '🌍 અર્થિંગ', catTools: '🛠️ ટૂલ્સ', catAppliances: '🏠 મોટા એપ્લાયન્સ',
  catKitchen: '🍳 કિચન એપ્લાયન્સ', catWaterPur: '💧 વોટર પ્યુરિફાયર', catWaterHeat: '🔥 ગીઝર અને હીટિંગ',
  catPersonal: '💇 પર્સનલ કેર', catComfort: '🌬️ હોમ કમ્ફર્ટ', catTv: '📺 એન્ટરટેઈનમેન્ટ',
  hCall: 'કૉલ', hWa: 'વોટ્સએપ', hCart: 'કાર્ટ',
  cartTitle: '🛒 તમારું કાર્ટ', cartEmpty: 'તમારું કાર્ટ ખાલી છે',
  cartEmptyHint: 'પ્રોડક્ટ પેજ પરથી "કાર્ટમાં ઉમેરો" દબાવો', cartTotal: 'કુલ:',
  cartOrder: '💬 WhatsApp પર ઓર્ડર કરો', cartClear: 'કાર્ટ ખાલી કરો',
  cartNote: 'ઓર્ડર WhatsApp પર મોકલાશે — પેમેન્ટ ડિલિવરી વખતે અથવા દુકાન પર.',
  mCallNow: '📞 કૉલ કરો', mWaUs: '💬 WhatsApp',
  ftAbout: 'સુરતમાં ઈલેક્ટ્રિકલ્સ અને હોમ એપ્લાયન્સ માટે તમારું વિશ્વસનીય સ્ટોર. અસલી પ્રોડક્ટ, યોગ્ય ભાવ અને ઝડપી ડિલિવરી.',
  ftElectricals: 'ઈલેક્ટ્રિકલ્સ', ftAppliances: 'એપ્લાયન્સિસ', ftQuick: 'ક્વિક લિંક્સ',
  ftWires: 'વાયર અને કેબલ', ftSwitches: 'સ્વિચ અને સોકેટ', ftMcb: 'MCB / DB પેનલ',
  ftLights: 'લાઈટ્સ અને LED', ftFans: 'પંખા', ftConduits: 'કન્ડ્યુટ',
  ftLarge: 'મોટા એપ્લાયન્સ', ftKitchen: 'કિચન એપ્લાયન્સ', ftWaterPur: 'વોટર પ્યુરિફાયર',
  ftGeyser: 'ગીઝર અને હીટિંગ', ftPersonal: 'પર્સનલ કેર', ftTv: 'એન્ટરટેઈનમેન્ટ',
  ftHome: 'હોમ', ftAll: 'બધી પ્રોડક્ટ્સ', ftAboutL: 'અમારા વિશે', ftContact: 'સંપર્ક',
  ftRights: 'બધા હક અમારી પાસે સુરક્ષિત છે.', ftMade: 'સુરત, ગુજરાતમાં ❤️ થી બનાવેલ',
  /* Page-level keys (used by individual pages) */
  heroBadge: '⚡ સુરતનું વિશ્વસનીય ઈલેક્ટ્રિકલ સ્ટોર',
  heroTitle: 'તમારા ઘરને આપો<br/><span>ક્વોલિટી</span> પ્રોડક્ટ્સની શક્તિ',
  heroPara: 'વાયરથી લઈને હોમ એપ્લાયન્સ સુધી — બધું ઈલેક્ટ્રિકલ એક જ જગ્યાએ. ટોચની બ્રાન્ડ્સ, અસલી પ્રોડક્ટ્સ, નિષ્ણાત માર્ગદર્શન.',
  shopNow: '🛒 ખરીદી કરો', getQuote: '📞 ભાવ પૂછો',
  statProducts: 'પ્રોડક્ટ્સ', statBrands: 'ટોચની બ્રાન્ડ્સ', statCats: 'કેટેગરી', statGenuine: 'અસલી',
  catEyebrow: 'કેટેગરી પ્રમાણે જુઓ', catTitle: 'તમને જે જોઈએ તે ખરીદો',
  catPara: 'ભારતની ટોચની બ્રાન્ડ્સની ઈલેક્ટ્રિકલ્સ અને હોમ એપ્લાયન્સની વિશાળ રેન્જ જુઓ.',
  featEyebrow: 'ખાસ પસંદગી', featTitle: 'ફીચર્ડ પ્રોડક્ટ્સ',
  featPara: 'વિશ્વસનીય બ્રાન્ડ્સના શ્રેષ્ઠ વોટર પ્યુરિફાયર — સ્પર્ધાત્મક ભાવે.',
  viewAllBtn: 'બધી પ્રોડક્ટ્સ જુઓ →', brandsLabel: 'લોકપ્રિય બ્રાન્ડ્સ અને કેટેગરી',
  whyEyebrow: 'કેમ ElectricalsKart', whyTitle: 'તમારો વિશ્વાસુ ઈલેક્ટ્રિકલ પાર્ટનર',
  why1t: '100% અસલી પ્રોડક્ટ્સ', why1p: 'બધી પ્રોડક્ટ્સ અધિકૃત ડિસ્ટ્રિબ્યુટર પાસેથી જ. કોઈ ડુપ્લિકેટ નહીં, કોઈ સમાધાન નહીં.',
  why2t: 'સુરતમાં ઝડપી ડિલિવરી', why2p: 'સુરત શહેરમાં સેમ-ડે ડિલિવરી ઉપલબ્ધ. દરેક ઓર્ડર ઝડપથી રવાના.',
  why3t: 'સ્પર્ધાત્મક ભાવ', why3p: 'બધી ઈલેક્ટ્રિકલ્સ અને એપ્લાયન્સ પર બજારના શ્રેષ્ઠ ભાવ. જથ્થાબંધ ડિસ્કાઉન્ટ ઉપલબ્ધ.',
  why4t: 'નિષ્ણાત માર્ગદર્શન', why4p: 'શું ખરીદવું સમજાતું નથી? અમારી ટીમ તમને યોગ્ય પ્રોડક્ટ પસંદ કરવામાં મદદ કરશે.',
  helpTitle: 'પસંદ કરવામાં મદદ જોઈએ?', helpPara: 'કૉલ કે WhatsApp કરો — તમને જે જોઈએ એ શોધવામાં અમે મદદ કરીશું.',
  waUsBtn: '💬 WhatsApp કરો',
  /* Products page */
  allProductsH: 'બધી પ્રોડક્ટ્સ', allProductsP: 'અમારો કેટલોગ જુઓ — વિશ્વસનીય બ્રાન્ડ્સની અસલી પ્રોડક્ટ્સ',
  fltCategories: 'કેટેગરી', fltBrands: 'બ્રાન્ડ્સ', fltPrice: 'ફિલ્ટર',
  fltApply: 'ફિલ્ટર લાગુ કરો', fltClear: 'બધું સાફ કરો', showing: 'કુલ', productsWord: 'પ્રોડક્ટ્સ',
  /* Contact */
  contactH: 'સંપર્ક કરો', contactP: 'અમે મદદ માટે હાજર છીએ — કૉલ, WhatsApp કે રૂબરૂ મુલાકાત લો.',
  getInTouch: 'સંપર્કમાં રહો', lblPhone: 'ફોન', lblWa: 'વોટ્સએપ', lblEmail: 'ઈમેલ', lblAddress: 'સરનામું',
  waChat: 'WhatsApp પર ચેટ કરો', bizHours: 'દુકાનનો સમય', openToday: 'આજે ખુલ્લું',
  enqTitle: 'પૂછપરછ મોકલો', enqPara: 'તમારી વિગતો ભરો — અમે WhatsApp પર તરત જવાબ આપીશું.',
  lblName: 'તમારું નામ', lblPhone2: 'ફોન નંબર', lblCat: 'પ્રોડક્ટ / કેટેગરી', lblMsg: 'તમારો સંદેશ',
  sendEnq: '📨 WhatsApp પર પૂછપરછ મોકલો', getDirections: 'રસ્તો બતાવો →',
  /* About */
  aboutH: 'ElectricalsKart વિશે', aboutP: 'સુરતમાં અસલી ઈલેક્ટ્રિકલ્સ અને હોમ એપ્લાયન્સ માટેનું વિશ્વસનીય સ્થળ — ગુણવત્તાવાળી પ્રોડક્ટ્સ, પ્રામાણિક ભાવ, નિષ્ણાત માર્ગદર્શન.',
  ourStory: 'અમારી વાર્તા', storyTitle: 'ક્વોલિટી ઈલેક્ટ્રિકલ્સના જુસ્સામાંથી જન્મેલું',
  storyP1: 'ElectricalsKart ની શરૂઆત એક સરળ ઉદ્દેશ્ય સાથે થઈ — સુરતના દરેક ઘર અને ધંધાને અસલી, ઉચ્ચ ગુણવત્તાવાળી ઈલેક્ટ્રિકલ પ્રોડક્ટ્સ અને હોમ એપ્લાયન્સ વાજબી ભાવે સરળતાથી મળે.',
  storyP2: 'નબળી પ્રોડક્ટ થોડા મહિનામાં બગડી જાય એની હતાશા અમે સમજીએ છીએ. એટલે જ અમે ફક્ત ભારતની સૌથી વિશ્વસનીય બ્રાન્ડ્સ સાથે જ કામ કરીએ છીએ — જેથી દરેક પ્રોડક્ટ 100% અસલી અને વોરંટી સાથે મળે.',
  storyP3: 'નવા ઘરનું વાયરિંગ હોય, કિચન અપગ્રેડ કરવું હોય કે વીજળી બચાવતો પંખો જોઈતો હોય — ElectricalsKart સુરતમાં તમારું વન-સ્ટોપ સ્ટોર છે.',
  whyChoose: 'અમને કેમ પસંદ કરશો', coreValues: 'અમારા મૂળ સિદ્ધાંતો',
  readyShop: 'ખરીદી માટે તૈયાર?', readyShopP: 'અમારી પ્રોડક્ટ્સ જુઓ અથવા વ્યક્તિગત ભલામણ માટે સંપર્ક કરો.',
  browseProducts: '🛒 પ્રોડક્ટ્સ જુઓ',
  catComfortS: 'હોમ કમ્ફર્ટ', catToolsS: 'ટૂલ્સ અને એસેસરીઝ', catEarthS: 'અર્થિંગ અને ગ્રાઉન્ડિંગ',
  htAddress: 'વરાછા મેઈન રોડ, પુણાગામ, સુરત',
  ftAddress: 'ભગવતી સોસાયટી, વરાછા મેઈન રોડ, લક્ષ્મણ નગર પાસે, શુભ લક્ષ્મી સ્કૂલ પાછળ, પુણાગામ, સુરત, ગુજરાત – 395011',
  pdAddCart: 'કાર્ટમાં ઉમેરો',
  /* Reviews */
  revEyebrow: 'ગ્રાહકોના રિવ્યૂ', revTitle: 'અમારા ગ્રાહકો શું કહે છે', revPara: 'સુરતના અમારા ગ્રાહકોના સાચા અભિપ્રાય.',
  rev1: 'AQUA ERA વોટર પ્યુરિફાયર લીધું — અસલી પ્રોડક્ટ, સરસ ભાવ અને એ જ દિવસે ઇન્સ્ટોલ કરી આપ્યું. સર્વિસથી ખૂબ ખુશ છું!',
  rev1n: 'રમેશભાઈ પટેલ', rev1a: 'વરાછા, સુરત',
  rev2: 'WhatsApp પર ઓર્ડર કર્યો અને થોડા કલાકોમાં ડિલિવરી મળી. પ્રામાણિક ભાવ અને બોરવેલના પાણી માટે યોગ્ય પ્યુરિફાયર પસંદ કરવામાં મદદ કરી.',
  rev2n: 'જિજ્ઞેશ કાકડિયા', rev2a: 'પુણાગામ, સુરત',
  rev3: 'ફિલ્ટર અને સ્પેરપાર્ટ્સ માટે વિસ્તારની શ્રેષ્ઠ દુકાન. ફિલ્ટર કાર્ટ્રિજના ભાવ વાજબી અને ક્વોલિટી સારી. ભલામણ કરું છું!',
  rev3n: 'મનીષાબેન સવાણી', rev3a: 'યોગી ચોક, સુરત',
  revCta: '⭐ Google પર વધુ રિવ્યૂ જુઓ →',
  /* FAQ */
  faqEyebrow: 'સવાલ છે?', faqTitle: 'વારંવાર પૂછાતા પ્રશ્નો',
  faq1q: 'ઓર્ડર કેવી રીતે કરવો?',
  faq1a: 'કોઈપણ પ્રોડક્ટ પર "ઓર્ડર" કે "કાર્ટમાં ઉમેરો" દબાવી WhatsApp પર ઓર્ડર મોકલો — અથવા +91 92655 60630 પર કૉલ કરો. ઓનલાઈન પેમેન્ટની જરૂર નથી; ડિલિવરી વખતે કે દુકાન પર ચૂકવો.',
  faq2q: 'સુરતમાં ડિલિવરી કરો છો? ચાર્જ કેટલો?',
  faq2a: 'હા! સુરત શહેરમાં સેમ-ડે ડિલિવરી. ₹2,000 થી વધુના ઓર્ડર પર ડિલિવરી મફત. નાના ઓર્ડર માટે વિસ્તાર પ્રમાણે નજીવો ચાર્જ લાગી શકે.',
  faq3q: 'RO પ્યુરિફાયરનું ઇન્સ્ટોલેશન અને સર્વિસ કરો છો?',
  faq3a: 'હા, દરેક વોટર પ્યુરિફાયર સાથે ઇન્સ્ટોલેશન આપીએ છીએ, અને સર્વિસ તથા ફિલ્ટર બદલવાનું કામ પણ કરીએ છીએ. શ્રેષ્ઠ પાણી માટે દર 6 મહિને ફિલ્ટર કાર્ટ્રિજ બદલવાની ભલામણ છે.',
  faq4q: 'પ્રોડક્ટ્સ અસલી છે? વોરંટી મળે છે?',
  faq4a: '100% અસલી. બધી પ્રોડક્ટ્સ સાથે કંપનીની સત્તાવાર વોરંટી મળે છે, અને વોરંટી ક્લેમ તથા આફ્ટર-સેલ્સ સપોર્ટમાં અમે મદદ કરીએ છીએ.',
  faq5q: 'મને જોઈતી પ્રોડક્ટ વેબસાઈટ પર દેખાતી નથી. મળી શકશે?',
  faq5a: 'મોટાભાગે હા! અમારી દુકાનમાં વેબસાઈટ કરતાં ઘણી વધુ પ્રોડક્ટ્સ છે. પ્રોડક્ટનું નામ WhatsApp કરો કે કૉલ કરો — અમે તરત ઉપલબ્ધતા અને ભાવ જણાવીશું.',
  faq6q: 'દુકાનનો સમય શું છે?',
  faq6a: 'સોમવારથી શુક્રવાર: સવારે 9 થી રાત્રે 8, શનિવાર: સવારે 9 થી સાંજે 6, રવિવારે બંધ. WhatsApp ગમે ત્યારે કરી શકો — દુકાન ખુલતાં જ જવાબ આપીશું.',
  /* Filter reminder */
  remTitle: '💧 તમારું RO ફિલ્ટર બદલવાનો સમય થયો?',
  remPara: 'શુદ્ધ પાણી માટે દર 6 મહિને ફિલ્ટર કાર્ટ્રિજ બદલવી જરૂરી છે. WhatsApp પર ફ્રી રિમાઇન્ડર બુક કરો — સમય થાય એટલે અમે જાતે યાદ કરાવીશું!',
  remBtn: '🔔 ફ્રી રિમાઇન્ડર બુક કરો',
  /* Choose guide */
  chooseEyebrow: 'ખરીદી માર્ગદર્શન', chooseTitle: 'યોગ્ય વોટર પ્યુરિફાયર કેવી રીતે પસંદ કરવું?',
  choosePara: 'આ 4 સરળ સવાલના જવાબથી તમને ખબર પડશે કે તમારા ઘર માટે કયું પ્યુરિફાયર શ્રેષ્ઠ છે.',
  ch1t: 'તમારું પાણી ક્યાંથી આવે છે?', ch1p: 'બોરવેલ કે ટેન્કરનું પાણી હોય તો TDS વધારે હોય છે — એના માટે RO + UV + UF ટેક્નોલોજી જરૂરી છે. મ્યુનિસિપલ (નળ)નું પાણી હોય તો પણ RO+UV સુરક્ષિત વિકલ્પ છે.',
  ch1tag: 'બોરવેલ → RO+UV+UF',
  ch2t: 'પરિવારમાં કેટલા સભ્યો છે?', ch2p: '4-5 સભ્યો સુધી 9-12 લિટરની ટાંકી પૂરતી છે. મોટા પરિવાર કે વધુ વપરાશ માટે 15-19 લિટરની ટાંકીવાળું મોડેલ પસંદ કરો.',
  ch2tag: 'મોટો પરિવાર → 15+ લિટર',
  ch3t: 'સ્વાસ્થ્ય માટે વધારાના ફાયદા જોઈએ?', ch3p: 'કોપર (તાંબુ) અને આલ્કલાઇન ટેક્નોલોજીવાળા પ્યુરિફાયર પાણીમાં મિનરલ્સ ઉમેરે છે — રોગપ્રતિકારક શક્તિ અને પાચન માટે ફાયદાકારક.',
  ch3tag: 'કોપર + આલ્કલાઇન ઉપલબ્ધ',
  ch4t: 'મૂંઝવણ હોય તો અમને પૂછો!', ch4p: 'તમારા વિસ્તારનું પાણી, બજેટ અને જરૂરિયાત જણાવો — અમે 30+ વર્ષના અનુભવથી તમારા માટે યોગ્ય મોડેલ સૂચવીશું. સલાહ બિલકુલ મફત!',
  ch4tag: 'ફ્રી નિષ્ણાત સલાહ',
  chooseCta: '💬 મારા માટે કયું યોગ્ય? પૂછો',
  /* Recently viewed */
  recentTitle: '👀 તાજેતરમાં જોયેલી પ્રોડક્ટ્સ',
  /* Product page extras */
  trustGenuine: '✅ 100% અસલી', trustDelivery: '🚚 સેમ-ડે ડિલિવરી', trustInstall: '🔧 ફ્રી ઇન્સ્ટોલેશન', trustWarranty: '🛡️ કંપની વોરંટી',
  shareBtn: '📤 શેર કરો'
};

/* Dynamic UI strings (rendered by JS in both languages) */
const UI = {
  order:      { en: '💬 Order',            gu: '💬 ઓર્ડર' },
  addCart:    { en: '🛒 Add',              gu: '🛒 ઉમેરો' },
  view:       { en: 'View',                gu: 'જુઓ' },
  addedCart:  { en: '✅ Added to cart',    gu: '✅ કાર્ટમાં ઉમેરાયું' },
  removed:    { en: 'Removed from cart',   gu: 'કાર્ટમાંથી કાઢ્યું' },
  cartCleared:{ en: 'Cart cleared',        gu: 'કાર્ટ ખાલી થયું' },
  comingSoon: { en: 'Coming Soon!',        gu: 'જલ્દી આવી રહ્યું છે!' },
  comingSoonText: {
    en: 'We are adding products to this category soon. Meanwhile, this item is available in our store — call or WhatsApp us and we will arrange it for you right away!',
    gu: 'આ કેટેગરીમાં પ્રોડક્ટ્સ જલ્દી ઉમેરાઈ રહી છે. દરમિયાન, આ વસ્તુઓ અમારી દુકાનમાં ઉપલબ્ધ છે — કૉલ કે WhatsApp કરો, અમે તરત વ્યવસ્થા કરી આપીશું!'
  },
  askWa:      { en: '💬 Ask on WhatsApp',  gu: '💬 WhatsApp પર પૂછો' },
  callUs:     { en: '📞 Call Us',          gu: '📞 કૉલ કરો' },
  searchPh:   { en: 'Search for wires, fans, switches, appliances...', gu: 'વાયર, પંખા, સ્વિચ, એપ્લાયન્સ શોધો...' },
  inStock:    { en: '✅ In Stock — Ready to Ship', gu: '✅ સ્ટોકમાં છે — તરત મોકલવા તૈયાર' },
  outStock:   { en: '❌ Out of Stock — Contact Us', gu: '❌ સ્ટોકમાં નથી — સંપર્ક કરો' }
};

function tt(key) {
  const e = UI[key];
  return e ? (e[LANG] || e.en) : key;
}

function applyLang() {
  document.documentElement.lang = LANG === 'gu' ? 'gu' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const k = el.getAttribute('data-i18n');
    if (!el.dataset.orig) el.dataset.orig = el.innerHTML;
    el.innerHTML = (LANG === 'gu' && GU[k]) ? GU[k] : el.dataset.orig;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    const k = el.getAttribute('data-i18n-ph');
    if (!el.dataset.origPh) el.dataset.origPh = el.getAttribute('placeholder') || '';
    el.setAttribute('placeholder', (LANG === 'gu' && (GU[k] || UI[k])) ? (GU[k] || UI[k].gu) : el.dataset.origPh);
  });
  var btns = document.querySelectorAll('.lang-toggle');
  btns.forEach(function(b) { b.textContent = LANG === 'gu' ? 'English' : 'ગુજરાતી'; });
  document.dispatchEvent(new CustomEvent('langchange'));
}

function toggleLang() {
  LANG = LANG === 'en' ? 'gu' : 'en';
  localStorage.setItem('ek_lang', LANG);
  applyLang();
}

/* ─────────── HELPERS ─────────── */
function colorToHex(colorName) {
  const map = {
    'charcoal black': '#2d2d2d', 'classic black': '#1a1a1a', 'black': '#222',
    'forest blue': '#1a4a6e', 'silk blue': '#4a7fa5', 'aqua blue': '#00b4d8',
    'blue': '#1a56c4', 'admiral blue': '#1c3d6e', 'comrade blue': '#2a5298', 'ocean blue': '#006994',
    'pearl white': '#f5f5f0', 'polar white': '#f8f8f8', 'silver white': '#e8e8e8',
    'silk beige': '#d4b896', 'antique bronze': '#cd7f32',
    'urban grey': '#7a7a7a', 'grey': '#888', 'dark grey': '#555', 'dark magnesium gray': '#4a4a4a', 'gun metal': '#536872',
    'gold': '#ffd700', 'white gold': '#f0e68c', 'rose gold': '#b76e79',
    'maroon': '#800000', 'cherry red': '#dc143c',
    'pink': '#ff69b4', 'green': '#228b22', 'emerald green': '#50c878',
    'sierra blue': '#4cb8c4', 'silver': '#c0c0c0',
    'standard': '#1a56c4', 'white blue': '#e8f4f8', 'black white': '#555'
  };
  return map[(colorName || '').toLowerCase()] || '#1a56c4';
}

function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

function openWhatsApp(message) {
  window.open('https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(message), '_blank');
}

function getProductPrice(product, variantIndex) {
  const variant = product.variants[variantIndex || 0];
  return 0;
}

function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round((1 - price / originalPrice) * 100);
}

function escAttr(s) { return String(s).replace(/'/g, '&#39;').replace(/"/g, '&quot;'); }

/* ─────────── SHARED HEADER ─────────── */
const WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

function headerHTML() {
  return '' +
  '<div class="header-top">' +
    '<span class="ht-left">📍 <a href="' + CONFIG.mapLink + '" target="_blank" rel="noopener" data-i18n="htAddress">' + CONFIG.addressShortEn + '</a></span>' +
    '<span style="display:flex;align-items:center;gap:12px;">📞 <a href="tel:+' + CONFIG.phone + '">' + CONFIG.phoneDisplay + '</a>' +
    '<span data-i18n="freeDelivery">Free delivery on orders above ₹2,000</span>' +
    '<button class="lang-toggle" type="button" onclick="toggleLang()">ગુજરાતી</button></span>' +
  '</div>' +
  '<div class="header-main">' +
    '<button class="menu-btn" type="button" aria-label="Menu" onclick="toggleMobileMenu()"><span></span><span></span><span></span></button>' +
    '<a href="index.html" class="logo-area">' +
      '<div class="logo-icon"><svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="13,1 24,7 24,19 13,25 2,19 2,7" stroke="white" stroke-width="1.5" fill="none" opacity="0.7"/><polygon points="13,4 15,10 13,10 15,22 11,13 13,13 11,4" fill="#FFD700"/></svg></div>' +
      '<div class="logo-text"><div class="brand">Electricals<span>Kart</span></div><div class="tagline" data-i18n="tagline">Your Electrical Shopping Destination</div></div>' +
    '</a>' +
    '<button class="cart-btn cart-btn-mobile" type="button" onclick="openCart()" style="display:none;">' +
      '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>' +
      '<span class="cart-badge empty" data-cart-badge>0</span>' +
    '</button>' +
    '<div class="search-bar">' +
      '<input type="text" id="siteSearch" placeholder="Search for wires, fans, switches, appliances..." data-i18n-ph="searchPh"/>' +
      '<button type="button" aria-label="Search">🔍</button>' +
    '</div>' +
    '<div class="header-actions">' +
      '<a href="tel:+' + CONFIG.phone + '"><svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.82 2 2 0 012 .66h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.56a16 16 0 006.35 6.35l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg><span data-i18n="hCall">Call</span></a>' +
      '<a href="https://wa.me/' + CONFIG.phone + '" target="_blank" rel="noopener">' + WA_SVG + '<span data-i18n="hWa">WhatsApp</span></a>' +
      '<button class="cart-btn" type="button" onclick="openCart()">' +
        '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>' +
        '<span data-i18n="hCart">Cart</span><span class="cart-badge empty" data-cart-badge>0</span>' +
      '</button>' +
    '</div>' +
  '</div>' +
  '<nav class="main-nav">' +
    '<div class="nav-inner">' +
      '<div class="nav-item"><a class="nav-link" href="index.html" data-page="home" data-i18n="navHome">Home</a></div>' +
      '<div class="nav-item"><a class="nav-link" href="products.html" data-page="products" data-i18n="navAll">All Products</a></div>' +
      '<details class="nav-item"><summary data-page="electricals"><span data-i18n="navElectricals">Electricals</span> <span class="arrow">▼</span></summary>' +
        '<div class="dropdown">' + dropdownLinksElectricals() + '</div></details>' +
      '<details class="nav-item"><summary data-page="appliances"><span data-i18n="navAppliances">Home Appliances</span> <span class="arrow">▼</span></summary>' +
        '<div class="dropdown">' + dropdownLinksAppliances() + '</div></details>' +
      '<div class="nav-item"><a class="nav-link" href="products.html?cat=fans" data-page="fans" data-i18n="navFans">Fans</a></div>' +
      '<div class="nav-item"><a class="nav-link" href="products.html?cat=lights" data-page="lights" data-i18n="navLights">Lights &amp; LED</a></div>' +
      '<div class="nav-item"><a class="nav-link" href="products.html?cat=water-purifiers" data-page="water-purifiers" data-i18n="navWater">Water Purifiers</a></div>' +
      '<div class="nav-item"><a class="nav-link" href="about.html" data-page="about" data-i18n="navAbout">About Us</a></div>' +
      '<div class="nav-item"><a class="nav-link" href="contact.html" data-page="contact" data-i18n="navContact">Contact</a></div>' +
    '</div>' +
  '</nav>' +
  '<div class="mobile-menu">' +
    '<a class="m-link" href="index.html" data-i18n="navHome">Home</a>' +
    '<a class="m-link" href="products.html" data-i18n="navAll">All Products</a>' +
    '<details><summary><span data-i18n="navElectricals">Electricals</span> <span class="arrow">▼</span></summary>' + dropdownLinksElectricals() + '</details>' +
    '<details><summary><span data-i18n="navAppliances">Home Appliances</span> <span class="arrow">▼</span></summary>' + dropdownLinksAppliances() + '</details>' +
    '<a class="m-link" href="about.html" data-i18n="navAbout">About Us</a>' +
    '<a class="m-link" href="contact.html" data-i18n="navContact">Contact</a>' +
    '<div class="m-cta">' +
      '<a class="m-call" href="tel:+' + CONFIG.phone + '" data-i18n="mCallNow">📞 Call Now</a>' +
      '<a class="m-wa" href="https://wa.me/' + CONFIG.phone + '" target="_blank" rel="noopener" data-i18n="mWaUs">💬 WhatsApp</a>' +
    '</div>' +
  '</div>';
}

function dropdownLinksElectricals() {
  return '<a href="products.html?cat=wires" data-i18n="catWires">⚡ Wires &amp; Cables</a>' +
    '<a href="products.html?cat=switches" data-i18n="catSwitches">🔌 Switches &amp; Sockets</a>' +
    '<a href="products.html?cat=mcb" data-i18n="catMcb">⚙️ MCB / DB Panels</a>' +
    '<a href="products.html?cat=lights" data-i18n="catLights">💡 Lights &amp; LED</a>' +
    '<a href="products.html?cat=fans" data-i18n="catFans">🌀 Fans</a>' +
    '<a href="products.html?cat=conduits" data-i18n="catConduits">🔧 Conduits &amp; Fittings</a>' +
    '<a href="products.html?cat=earthing" data-i18n="catEarthing">🌍 Earthing &amp; Grounding</a>' +
    '<a href="products.html?cat=tools" data-i18n="catTools">🛠️ Tools &amp; Accessories</a>' +
    '<a href="products.html?cat=home-automation">🏠 Home Automation</a>';
}

function dropdownLinksAppliances() {
  return '<a href="products.html?cat=appliances" data-i18n="catAppliances">🏠 Large Appliances</a>' +
    '<a href="products.html?cat=kitchen" data-i18n="catKitchen">🍳 Kitchen Appliances</a>' +
    '<a href="products.html?cat=water-purifiers" data-i18n="catWaterPur">💧 Water Purifiers</a>' +
    '<a href="products.html?cat=water-heating" data-i18n="catWaterHeat">🔥 Water &amp; Heating</a>' +
    '<a href="products.html?cat=personal-care" data-i18n="catPersonal">💇 Personal Care</a>' +
    '<a href="products.html?cat=home-comfort" data-i18n="catComfort">🌬️ Home Comfort</a>' +
    '<a href="products.html?cat=entertainment" data-i18n="catTv">📺 Entertainment</a>';
}

/* ─────────── SHARED FOOTER ─────────── */
function footerHTML() {
  const year = new Date().getFullYear();
  return '' +
  '<div class="footer-inner">' +
    '<div class="footer-brand">' +
      '<div class="brand">Electricals<span>Kart</span></div>' +
      '<p data-i18n="ftAbout">Water purifier sales & service, RO installation, filter replacement, electricals and home appliances in Surat. Genuine products, expert advice and fast delivery.</p>' +
      '<div class="footer-contact">' +
        '<a href="tel:+' + CONFIG.phone + '">📞 ' + CONFIG.phoneDisplay + '</a>' +
        '<a href="https://wa.me/' + CONFIG.phone + '" target="_blank" rel="noopener">💬 WhatsApp</a>' +
        '<a href="' + CONFIG.mapLink + '" target="_blank" rel="noopener">📍 <span data-i18n="ftAddress">' + CONFIG.addressEn + '</span></a>' +
        '<a href="mailto:' + CONFIG.email + '">✉️ ' + CONFIG.email + '</a>' +
      '</div>' +
    '</div>' +
    '<div class="footer-col"><h4 data-i18n="ftElectricals">Electricals</h4><ul>' +
      '<li><a href="products.html?cat=wires" data-i18n="ftWires">Wires &amp; Cables</a></li>' +
      '<li><a href="products.html?cat=switches" data-i18n="ftSwitches">Switches &amp; Sockets</a></li>' +
      '<li><a href="products.html?cat=mcb" data-i18n="ftMcb">MCB / DB Panels</a></li>' +
      '<li><a href="products.html?cat=lights" data-i18n="ftLights">Lights &amp; LED</a></li>' +
      '<li><a href="products.html?cat=fans" data-i18n="ftFans">Fans</a></li>' +
      '<li><a href="products.html?cat=home-automation">Home Automation</a></li>' +
      '<li><a href="products.html?cat=conduits" data-i18n="ftConduits">Conduits</a></li>' +
    '</ul></div>' +
    '<div class="footer-col"><h4 data-i18n="ftAppliances">Appliances</h4><ul>' +
      '<li><a href="products.html?cat=appliances" data-i18n="ftLarge">Large Appliances</a></li>' +
      '<li><a href="products.html?cat=kitchen" data-i18n="ftKitchen">Kitchen Appliances</a></li>' +
      '<li><a href="products.html?cat=water-purifiers" data-i18n="ftWaterPur">Water Purifiers</a></li>' +
      '<li><a href="water-purifier-sales-service-surat.html">RO Service Surat</a></li>' +
      '<li><a href="products.html?cat=water-heating" data-i18n="ftGeyser">Geyser &amp; Heating</a></li>' +
      '<li><a href="products.html?cat=personal-care" data-i18n="ftPersonal">Personal Care</a></li>' +
      '<li><a href="products.html?cat=entertainment" data-i18n="ftTv">Entertainment</a></li>' +
    '</ul></div>' +
    '<div class="footer-col"><h4 data-i18n="ftQuick">Quick Links</h4><ul>' +
      '<li><a href="index.html" data-i18n="ftHome">Home</a></li>' +
      '<li><a href="products.html" data-i18n="ftAll">All Products</a></li>' +
      '<li><a href="electricals-home-appliances-sales-service-surat.html">Electricals & Appliances Service</a></li>' +
      '<li><a href="about.html" data-i18n="ftAboutL">About Us</a></li>' +
      '<li><a href="contact.html" data-i18n="ftContact">Contact</a></li>' +
    '</ul></div>' +
  '</div>' +
  '<div class="footer-bottom">' +
    '<p>© ' + year + ' ElectricalsKart. <span data-i18n="ftRights">All rights reserved.</span> | electricalskart.com</p>' +
    '<p data-i18n="ftMade">Made with ❤️ in Surat, Gujarat</p>' +
  '</div>';
}

/* ─────────── CART (localStorage) ─────────── */
function getCart() {
  try { return JSON.parse(localStorage.getItem('ek_cart')) || []; } catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('ek_cart', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const count = getCart().reduce(function(s, i) { return s + i.qty; }, 0);
  document.querySelectorAll('[data-cart-badge]').forEach(function(b) {
    b.textContent = count;
    b.classList.toggle('empty', count === 0);
  });
}
function addToCart(item) {
  /* item: {id, name, brand, color, variantIdx, image, price, qty} */
  const cart = getCart();
  const existing = cart.find(function(c) { return c.id === item.id && c.variantIdx === item.variantIdx; });
  if (existing) existing.qty += item.qty || 1;
  else cart.push(Object.assign({ qty: 1 }, item));
  saveCart(cart);
  showToast(tt('addedCart'));
  renderCartDrawer();
}
function changeCartQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart.splice(index, 1);
  saveCart(cart);
  renderCartDrawer();
}
function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  showToast(tt('removed'));
  renderCartDrawer();
}
function clearCart() {
  saveCart([]);
  showToast(tt('cartCleared'));
  renderCartDrawer();
}
function cartTotal() {
  return 0;
}
function renderCartDrawer() {
  const wrap = document.getElementById('cartItems');
  if (!wrap) return;
  const cart = getCart();
  if (!cart.length) {
    wrap.innerHTML = '<div class="cart-empty"><div class="ce-icon">🛒</div><p style="font-weight:700;margin-bottom:6px;" data-i18n="cartEmpty">Your cart is empty</p><p style="font-size:12px;" data-i18n="cartEmptyHint">Tap "Add to cart" on any product</p></div>';
  } else {
    wrap.innerHTML = cart.map(function(item, i) {
      return '<div class="cart-item">' +
        '<div class="cart-item-img">' + (item.image ? '<img src="' + escAttr(item.image) + '" alt="" onerror="this.parentElement.textContent=\'💧\'"/>' : '💧') + '</div>' +
        '<div class="cart-item-info">' +
          '<div class="cart-item-name">' + item.name + '</div>' +
          (item.color ? '<div class="cart-item-variant">' + item.color + '</div>' : '') +
          '<div class="cart-item-qty" style="margin-top:6px;">' +
            '<button class="cq-btn" onclick="changeCartQty(' + i + ',-1)">−</button>' +
            '<span class="cq-num">' + item.qty + '</span>' +
            '<button class="cq-btn" onclick="changeCartQty(' + i + ',1)">+</button>' +
          '</div>' +
        '</div>' +
        '<button class="cart-item-remove" onclick="removeCartItem(' + i + ')" title="Remove">✕</button>' +
      '</div>';
    }).join('');
  }
  const foot = document.getElementById('cartFoot');
  if (foot) foot.style.display = cart.length ? 'block' : 'none';
  applyLang();
}
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function orderCartWA() {
  const cart = getCart();
  if (!cart.length) return;
  let msg = LANG === 'gu' ? 'નમસ્તે, મારે આ ઓર્ડર કરવો છે:\n' : 'Hello, I want to order:\n';
  cart.forEach(function(item, i) {
    msg += '\n' + (i + 1) + ') ' + item.name +
      (item.color ? ' (' + item.color + ')' : '') +
      '\n   Qty: ' + item.qty;
  });
  msg += '\n\n' + (LANG === 'gu' ? 'કૃપા કરી ઉપલબ્ધતા અને ડિલિવરીની વિગતો જણાવો.' : 'Please confirm availability and delivery details.');
  openWhatsApp(msg);
}
function cartDrawerHTML() {
  return '' +
  '<div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>' +
  '<aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">' +
    '<div class="cart-head"><h3 data-i18n="cartTitle">🛒 Your Cart</h3><button class="cart-close" onclick="closeCart()" aria-label="Close">×</button></div>' +
    '<div class="cart-items" id="cartItems"></div>' +
    '<div class="cart-foot" id="cartFoot" style="display:none;">' +
      '<button class="cart-order-btn" onclick="orderCartWA()" data-i18n="cartOrder">💬 Order on WhatsApp</button>' +
      '<button class="cart-clear-btn" onclick="clearCart()" data-i18n="cartClear">Clear cart</button>' +
      '<p class="cart-note">Your enquiry is sent via WhatsApp. Details are shared after availability confirmation.</p>' +
    '</div>' +
  '</aside>' +
  '<div class="toast" id="toast"></div>';
}

/* ─────────── TOAST ─────────── */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { t.classList.remove('show'); }, 2200);
}

/* ─────────── MOBILE MENU ─────────── */
function toggleMobileMenu() {
  document.querySelector('header').classList.toggle('menu-open');
}

/* ─────────── OFFER BANNER ─────────── */
function offerBannerHTML() {
  if (!CONFIG.offer || !CONFIG.offer.enabled) return '';
  if (sessionStorage.getItem('ek_offer_closed')) return '';
  return '<div class="offer-banner" id="offerBanner">' +
    '<a href="' + CONFIG.offer.link + '" class="offer-text" id="offerText">' +
      (LANG === 'gu' ? CONFIG.offer.gu : CONFIG.offer.en) + '</a>' +
    '<button class="offer-close" onclick="closeOfferBanner()" aria-label="Close offer">×</button>' +
  '</div>';
}
function closeOfferBanner() {
  var b = document.getElementById('offerBanner');
  if (b) b.remove();
  sessionStorage.setItem('ek_offer_closed', '1');
}
function refreshOfferText() {
  var t = document.getElementById('offerText');
  if (t && CONFIG.offer) t.innerHTML = LANG === 'gu' ? CONFIG.offer.gu : CONFIG.offer.en;
}

/* ─────────── NAV ACTIVE STATE ─────────── */
function initNav() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var params = window.location.search;
  document.querySelectorAll('[data-page]').forEach(function(el) {
    var p = el.getAttribute('data-page');
    var active = false;
    if (p === 'home' && (path === 'index.html' || path === '')) active = true;
    else if (p === 'products' && ((path === 'products.html' && params === '') || path === 'product-detail.html')) active = true;
    else if (p === 'about' && path === 'about.html') active = true;
    else if (p === 'contact' && path === 'contact.html') active = true;
    else if (p === 'fans' && params === '?cat=fans') active = true;
    else if (p === 'lights' && params === '?cat=lights') active = true;
    else if (p === 'water-purifiers' && params === '?cat=water-purifiers') active = true;
    else if (p === 'electricals' && (params.includes('cat=wires') || params.includes('cat=switches') || params.includes('cat=mcb') || params.includes('cat=conduits') || params.includes('cat=earthing') || params.includes('cat=tools'))) active = true;
    else if (p === 'appliances' && (params.includes('cat=appliances') || params.includes('cat=kitchen') || params.includes('cat=water-heating') || params.includes('cat=personal-care') || params.includes('cat=home-comfort') || params.includes('cat=entertainment'))) active = true;
    if (active) {
      el.classList.add('active');
      if (el.tagName === 'SUMMARY') el.style.color = '#fff';
    }
  });
}

/* Close dropdowns when clicking outside */
document.addEventListener('click', function(e) {
  document.querySelectorAll('details.nav-item[open]').forEach(function(d) {
    if (!d.contains(e.target)) d.removeAttribute('open');
  });
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeCart();
});

/* ─────────── SEARCH ─────────── */
function setupSiteSearch(inputId, buttonSelector) {
  var input = document.getElementById(inputId);
  if (!input) return;
  function go() {
    var q = input.value.trim();
    window.location.href = q ? 'products.html?q=' + encodeURIComponent(q) : 'products.html';
  }
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { e.preventDefault(); go(); }
  });
  var btn = buttonSelector ? document.querySelector(buttonSelector) : input.parentElement && input.parentElement.querySelector('button');
  if (btn) btn.addEventListener('click', go);
}

/* ─────────── BACK TO TOP ─────────── */
function initBackTop() {
  var btn = document.createElement('button');
  btn.className = 'back-top';
  btn.id = 'backTop';
  btn.title = 'Back to top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(btn);
  window.addEventListener('scroll', function() {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
}

/* ─────────── LIGHTBOX (image zoom) ─────────── */
function initLightbox() {
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.id = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><img id="lightboxImg" src="" alt="Product image zoom"/><div class="lightbox-hint">Tap anywhere to close</div>';
  lb.onclick = function() { lb.classList.remove('open'); document.body.style.overflow = ''; };
  document.body.appendChild(lb);
}
function openLightbox(src) {
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ─────────── SHARE PRODUCT ─────────── */
function shareProduct(name, url) {
  var fullUrl = url || window.location.href;
  if (navigator.share) {
    navigator.share({ title: name + ' – ElectricalsKart', text: name + ' – available at ElectricalsKart Surat', url: fullUrl }).catch(function() {});
  } else {
    var msg = name + '\n' + fullUrl + '\n\n– ElectricalsKart, Surat';
    window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
  }
}

/* ─────────── RECENTLY VIEWED ─────────── */
function trackRecentlyViewed(productId) {
  try {
    var list = JSON.parse(localStorage.getItem('ek_recent')) || [];
    list = list.filter(function(id) { return id !== productId; });
    list.unshift(productId);
    if (list.length > 8) list = list.slice(0, 8);
    localStorage.setItem('ek_recent', JSON.stringify(list));
  } catch (e) {}
}
function getRecentlyViewed() {
  try { return JSON.parse(localStorage.getItem('ek_recent')) || []; } catch (e) { return []; }
}
/* Renders recently-viewed cards into containerId. Pass products list + optional excludeId */
function renderRecentlyViewed(containerId, products, excludeId) {
  var wrap = document.getElementById(containerId);
  if (!wrap) return;
  var ids = getRecentlyViewed().filter(function(id) { return id !== excludeId; });
  var items = ids.map(function(id) {
    return products.find(function(p) { return p.id === id; });
  }).filter(Boolean).slice(0, 4);
  if (!items.length) { var sec = wrap.closest('.recent-section'); if (sec) sec.style.display = 'none'; return; }
  var sec2 = wrap.closest('.recent-section'); if (sec2) sec2.style.display = '';
  wrap.innerHTML = items.map(function(p) {
    return '<div class="prod-card" onclick="location.href=\'product-detail.html?id=' + p.id + '\'">' +
      '<div class="prod-img"><img src="' + p.variants[0].image + '" alt="' + escAttr(p.name) + '" loading="lazy" onerror="this.parentElement.innerHTML=\'💧\'"/></div>' +
      '<div class="prod-body"><div class="prod-brand">' + p.brand + '</div>' +
      '<div class="prod-name">' + p.name + '</div>' +
      '<div class="prod-enquiry">Enquire for availability</div>' +
      '</div></div>';
  }).join('');
}

/* ─────────── SEO: LocalBusiness JSON-LD ─────────── */
function injectBusinessSchema() {
  if (document.getElementById('bizSchema')) return;
  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.id = 'bizSchema';
  s.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    'name': 'ElectricalsKart',
    'alternateName': 'Ghanshyam Electricals & Filter House',
    'description': 'Water purifier sales and service store in Surat offering RO installation, RO filter replacement, genuine electrical switches, wires, fans, lights, geysers and home appliances with WhatsApp ordering and fast delivery.',
    'url': CONFIG.domain,
    'telephone': '+' + CONFIG.phone,
    'email': CONFIG.email,
    'currenciesAccepted': 'INR',
    'areaServed': ['Surat', 'Varachha', 'Punagam', 'Yogi Chowk', 'Katargam', 'Mota Varachha', 'Kapodra', 'Sarthana'],
    'knowsAbout': ['Water purifier sales', 'RO service', 'RO installation', 'RO filter replacement', 'Electrical switches', 'Wires and cables', 'MCB DB panels', 'LED lights', 'Fans', 'Geysers', 'Home appliances'],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'ElectricalsKart Sales and Service Catalog',
      'itemListElement': [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Water Purifier Sales and RO Installation in Surat' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'RO Filter Replacement and Water Purifier Service' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Product', 'name': 'Electrical switches, sockets, wires and MCB/DB panels' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Product', 'name': 'Fans, LED lights, geysers and home appliances' } }
      ]
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Bhagvati Society, Varachha Main Road, Near Laxman Nagar, Punagam',
      'addressLocality': 'Surat',
      'addressRegion': 'Gujarat',
      'postalCode': '395011',
      'addressCountry': 'IN'
    },
    'hasMap': CONFIG.mapLink,
    'openingHoursSpecification': [
      { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'], 'opens': '09:00', 'closes': '20:00' },
      { '@type': 'OpeningHoursSpecification', 'dayOfWeek': 'Saturday', 'opens': '09:00', 'closes': '18:00' }
    ]
  });
  document.head.appendChild(s);
}

/* ─────────── BOOT ─────────── */
document.addEventListener('DOMContentLoaded', function() {
  var headerEl = document.getElementById('siteHeader');
  if (headerEl) headerEl.innerHTML = offerBannerHTML() + headerHTML();
  var footerEl = document.getElementById('siteFooter');
  if (footerEl) footerEl.innerHTML = footerHTML();
  document.body.insertAdjacentHTML('beforeend', cartDrawerHTML());
  initNav();
  updateCartBadge();
  setupSiteSearch('siteSearch', '.search-bar button');
  injectBusinessSchema();
  initBackTop();
  initLightbox();
  applyLang();
});
document.addEventListener('langchange', refreshOfferText);

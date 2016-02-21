//read json here....
//d3.json("datapath.json",function(data) {
//})

var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
//Data
var scorejson = '{"soy": {"Richland": 6.492043384854744, "Shelby": 8.34231354988677, "Union": 4.029609851520907, "Jo Daviess": 8.434998150016394, "McDonough": 6.689945275883548, "Wayne": 6.660202259255607, "Bureau": 9.504608945492489, "Wabash": 7.64831263795863, "White": 7.201948256084929, "La Salle": 9.284979228771755, "Henderson": 8.754906249236198, "Brown": 7.435922720411431, "Champaign": 9.18473455895801, "Tazewell": 9.418228617518631, "Mcdonough": 1.665608931164596, "Du Page": 1.9592464203449316, "Mchenry": 1.4759750762117394, "De Witt": 7.43306557033014, "Hancock": 8.06886995921608, "Coles": 8.948897468767305, "Henry": 9.279753762546388, "Montgomery": 8.326139889102121, "Jersey": 8.13041246627678, "Mclean": 5.125373262637832, "Washington": 6.019450533798231, "Marion": 6.8130134336622845, "Jasper": 7.484898824017254, "Ogle": 9.373390746036442, "Effingham": 8.080694683593805, "Warren": 9.408123240092475, "Perry": 5.577679505300055, "Jackson": 6.432928191137441, "Mason": 7.7855738362591715, "Jefferson": 5.954865456886953, "Massac": 6.716890139629514, "Putnam": 9.327364502396552, "Lee": 9.343394884268564, "Peoria": 9.11116505140763, "Ford": 8.09221599380361, "Hamilton": 6.214764976228343, "Cook": 0.494093116122502, "Rock Island": 8.628534248295614, "McLean": 3.950991869343117, "Johnson": 4.284477752577546, "Menard": 6.522275235419897, "Woodford": 9.406597741081521, "Edgar": 8.960140649323176, "Greene": 8.400771346240234, "Clay": 6.211612840150461, "Fulton": 8.252401818125122, "Macon": 9.36907552231485, "Kendall": 5.60520591286788, "Madison": 7.22475488770726, "Clinton": 6.695440443591515, "Clark": 8.019135320190443, "Moultrie": 9.311207697954568, "Kane": 9.122711646131426, "Saline": 6.638322726479714, "Morgan": 8.947683812095608, "Stark": 9.409134620652225, "McHenry": 6.371562675674697, "Lawrence": 6.855230143860457, "Fayette": 7.243052447667377, "Sangamon": 9.586143074950886, "Alexander": 1.2206689102458756, "Pike": 7.779606690956657, "Adams": 7.424805962425527, "Kankakee": 7.923113164213648, "Lake": 4.206550880448919, "Livingston": 8.714139184507001, "Franklin": 6.052944086668571, "Pope": 0.0, "Marshall": 9.008206510425229, "Carroll": 9.96840278567919, "Schuyler": 7.7443095094214325, "Grundy": 8.708854721082313, "Mercer": 8.870464906358803, "Gallatin": 7.236621752941643, "Cumberland": 8.13940532508721, "De Kalb": 9.63838930903323, "Edwards": 7.372846286168445, "Calhoun": 5.569015345171543, "Douglas": 9.156854168194272, "Pulaski": 6.913207534448044, "Crawford": 7.1613666111250165, "Williamson": 6.028603527863957, "Christian": 9.413289709118523, "Winnebago": 8.287100599495826, "Piatt": 10.0, "Macoupin": 8.329831428145203, "St. Clair": 6.756730105512277, "Knox": 9.582417823222478, "Stephenson": 9.022357410090377, "Hardin": 1.9545266443994387, "Whiteside": 8.96574538325845, "Will": 8.18513658273051, "Boone": 8.947430966955668, "Cass": 8.244664756843044, "Iroquois": 8.17376697960467, "Bond": 5.146898812217815, "Vermilion": 8.923461247689628, "Logan": 9.478911451103544, "Scott": 8.283560767536706, "Randolph": 6.481988576456579, "Monroe": 6.4871634736539585}, "corn": {"Richland": 7.012997577665048, "Shelby": 8.541628893388957, "Union": 7.213639028485323, "Jo Daviess": 8.692747505178605, "McDonough": 2.327619336144048, "Wayne": 7.202890379334237, "Bureau": 9.49951586452163, "Wabash": 7.547938592699641, "White": 8.396171491828351, "La Salle": 9.405282215155061, "Henderson": 9.440585726150942, "Brown": 8.06804060668793, "Champaign": 9.134477458820434, "Tazewell": 9.655408253585499, "Mcdonough": 7.1130556433213155, "Du Page": 0.0, "Mchenry": 6.402943523307737, "De Witt": 7.378280792457231, "Hancock": 8.976381787937695, "Coles": 8.934664788776933, "Henry": 9.319596483215406, "Montgomery": 8.483076169033538, "Jersey": 8.660348552043482, "Mclean": 7.170471025441531, "Washington": 7.107300079588455, "Marion": 7.2559170484795965, "Jasper": 7.28273384432131, "Ogle": 9.603666832167812, "Effingham": 8.035129084518557, "Warren": 9.939195542026454, "Perry": 5.99667773662775, "Jackson": 6.983623036841474, "Mason": 8.394337973740656, "Jefferson": 6.292945188519576, "Massac": 7.033084673599355, "Putnam": 7.977966161773419, "Lee": 9.041988074227138, "Peoria": 9.660806804060671, "Ford": 7.991917729864899, "Hamilton": 4.456632197036638, "Cook": 0.9352268296483192, "Rock Island": 9.383746665432422, "McLean": 2.2075404770156144, "Johnson": 6.549839178277886, "Menard": 6.859859290874768, "Woodford": 9.589541857636885, "Edgar": 8.885481112341107, "Greene": 8.691707066541918, "Clay": 6.6440906783073395, "Fulton": 8.623267625043257, "Macon": 9.601234041826142, "Kendall": 5.801276730411384, "Madison": 7.746417563216211, "Clinton": 7.503901007363909, "Clark": 5.764568117237035, "Moultrie": 9.444762781265885, "Kane": 9.414648712979956, "Saline": 7.444320594845291, "Morgan": 9.366638080105105, "Stark": 9.813450372479583, "McHenry": 2.371929781612441, "Lawrence": 5.37295772478511, "Fayette": 7.384852386493373, "Sangamon": 9.826050390381248, "Alexander": 4.880264128608417, "Pike": 8.309139309888273, "Adams": 7.843769978398148, "Kankakee": 8.399912480749972, "Lake": 5.255199451831643, "Livingston": 8.848843901818293, "Franklin": 6.617161678298925, "Pope": 3.646694069984289, "Marshall": 9.511605863483743, "Carroll": 10.0, "Schuyler": 8.192758088071601, "Grundy": 9.04390319534516, "Mercer": 9.414054540915377, "Gallatin": 8.265341433454132, "Cumberland": 7.803817644768238, "De Kalb": 9.85116627305955, "Edwards": 4.4407094057437835, "Calhoun": 6.299641737195911, "Douglas": 9.335228563712715, "Pulaski": 7.655881551161404, "Crawford": 7.359820656940096, "Williamson": 6.94907435387613, "Christian": 9.608960828760377, "Winnebago": 8.692737304799815, "Piatt": 9.812228877119352, "Macoupin": 8.240653966685052, "St. Clair": 7.42296865194089, "Knox": 9.696592282954429, "Stephenson": 9.085140776702744, "Hardin": 0.5522230068013577, "Whiteside": 9.044890081993197, "Will": 8.37641845829945, "Boone": 9.227823675232182, "Cass": 9.116846104080077, "Iroquois": 8.463896906811636, "Bond": 5.2357804807081525, "Vermilion": 8.806236919608011, "Logan": 9.604222752811927, "Scott": 8.637106988968034, "Randolph": 5.097404692123241, "Monroe": 7.354972926919641}, "wheat": {"Richland": 6.892695131165421, "Shelby": 5.481077076406099, "Union": 3.43899477572668, "Jo Daviess": 1.3330275795768252, "McDonough": 0.0, "Wayne": 6.725347868396527, "Bureau": 0.8588740617916584, "Wabash": 6.830891713191216, "White": 8.162466962424627, "La Salle": 4.894823647701115, "Henderson": 0.5788976989089882, "Brown": 5.961786660316396, "Champaign": 2.903190716845562, "Tazewell": 4.4491640280705465, "Mcdonough": 0.0, "Du Page": 0.0, "Mchenry": 9.183666869522524, "De Witt": 0.0, "Hancock": 6.318660092960902, "Coles": 6.941409936409099, "Henry": 4.788844691791394, "Montgomery": 7.096691685555779, "Jersey": 6.301379125838249, "Mclean": 4.123054127234722, "Washington": 8.571659566711647, "Marion": 6.117656397456363, "Jasper": 6.254398885174765, "Ogle": 7.456722613724228, "Effingham": 5.634600741452859, "Warren": 1.6360765913160051, "Perry": 7.034176802109701, "Jackson": 6.668548228245178, "Mason": 5.995819405367742, "Jefferson": 3.243565206398486, "Massac": 3.9636094230955803, "Putnam": 0.0, "Lee": 5.009175552635216, "Peoria": 4.401478201815118, "Ford": 4.3821921956353656, "Hamilton": 3.6434676003915993, "Cook": 0.0, "Rock Island": 0.9981096186015882, "McLean": 0.0, "Johnson": 2.429125397259387, "Menard": 0.8679055573685188, "Woodford": 7.5164798334818, "Edgar": 8.423022081889087, "Greene": 4.9653822068953355, "Clay": 3.218352281246417, "Fulton": 1.0564380275354777, "Macon": 1.9474515130401038, "Kendall": 4.02742376000682, "Madison": 7.186124659334457, "Clinton": 7.14196676103874, "Clark": 6.269063305727296, "Moultrie": 4.439485745701074, "Kane": 5.1447832235265745, "Saline": 3.4050384691144604, "Morgan": 7.813025698015245, "Stark": 0.0, "McHenry": 0.0, "Lawrence": 7.514951064699257, "Fayette": 0.0, "Sangamon": 6.392017475003161, "Alexander": 6.24447364784811, "Pike": 6.944373395895256, "Adams": 1.200965476284974, "Kankakee": 4.864554025806793, "Lake": 5.198343049834922, "Livingston": 4.87370311898231, "Franklin": 7.964914756440673, "Pope": 0.0, "Marshall": 8.140352733997172, "Carroll": 10.0, "Schuyler": 5.888817350349705, "Grundy": 2.1498311004489286, "Mercer": 4.72677667922021, "Gallatin": 9.017136910064295, "Cumberland": 6.924940392717181, "De Kalb": 9.85058049114637, "Edwards": 4.563198419488273, "Calhoun": 1.9689953931140727, "Douglas": 7.892445236268275, "Pulaski": 6.533134593391602, "Crawford": 7.74876449022911, "Williamson": 5.17407090547211, "Christian": 5.800160520722166, "Winnebago": 7.079569475191317, "Piatt": 0.0, "Macoupin": 6.357708375594971, "St. Clair": 7.730360466039285, "Knox": 7.743325601291221, "Stephenson": 9.586050572847302, "Hardin": 0.0, "Whiteside": 3.0187891563254277, "Will": 3.7736893012644677, "Boone": 9.584439485745701, "Cass": 1.5196784881652716, "Iroquois": 8.914709401634017, "Bond": 3.521518890584254, "Vermilion": 8.977141966761037, "Logan": 1.5296507645313882, "Scott": 7.396741958529206, "Randolph": 8.014194030157903, "Monroe": 7.578195053257013}}';

var marketjson = '{"Monroe": 0.31460077517656865, "Madison": 0.31460077517656865, "Jo Daviess": 0.0, "Bond": 0.31460077517656865, "Macoupin": 0.31460077517656865, "La Salle": 10.0, "Marion": 0.31460077517656865, "Knox": 10.0, "Perry": 0.31460077517656865, "Gallatin": 0.31460077517656865, "Champaign": 10.0, "Coles": 2.402590711055379, "Hardin": 0.31460077517656865, "Pike": 0.31460077517656865, "Whiteside": 10.0, "Saline": 0.31460077517656865, "Logan": 0.31460077517656865, "Lawrence": 0.31460077517656865, "De Witt": 10.0, "Boone": 0.0, "Edgar": 2.402590711055379, "Clinton": 0.31460077517656865, "Brown": 0.31460077517656865, "Clark": 2.402590711055379, "Macon": 0.31460077517656865, "Christian": 0.31460077517656865, "Ford": 10.0, "Cass": 0.31460077517656865, "Piatt": 2.402590711055379, "Scott": 0.31460077517656865, "White": 0.31460077517656865, "Moultrie": 0.31460077517656865, "Kane": 10.0, "Bureau": 10.0, "Vermilion": 2.402590711055379, "Livingston": 10.0, "Effingham": 0.31460077517656865, "Mason": 0.31460077517656865, "Jefferson": 0.31460077517656865, "Pope": 0.31460077517656865, "Marshall": 10.0, "Pulaski": 0.31460077517656865, "Ogle": 10.0, "Jasper": 0.31460077517656865, "Winnebago": 0.0, "Stephenson": 0.0, "Morgan": 0.31460077517656865, "Williamson": 0.31460077517656865, "Wabash": 1.4741650242692257, "Rock Island": 0.0, "Lake": 10.0, "Douglas": 2.402590711055379, "Randolph": 0.31460077517656865, "Fayette": 0.31460077517656865, "DeKalb": 10.0, "Kankakee": 10.0, "Shelby": 0.31460077517656865, "Iroquois": 10.0, "Warren": 0.31460077517656865, "Edwards": 0.31460077517656865, "Stark": 10.0, "Lee": 10.0, "Menard": 0.31460077517656865, "Fulton": 0.31460077517656865, "McDonough": 0.31460077517656865, "Woodford": 10.0, "McLean": 10.0, "Franklin": 0.31460077517656865, "Mercer": 0.0, "Johnson": 0.31460077517656865, "Clay": 0.31460077517656865, "Henry": 10.0, "Crawford": 2.402590711055379, "Cumberland": 2.402590711055379, "Washington": 0.31460077517656865, "Putnam": 10.0, "Kendall": 10.0, "Montgomery": 0.31460077517656865, "Alexander": 0.31460077517656865, "Wayne": 0.31460077517656865, "Calhoun": 0.31460077517656865, "Schuyler": 0.31460077517656865, "Tazewell": 0.31460077517656865, "Henderson": 0.31460077517656865, "Grundy": 10.0, "Jersey": 0.31460077517656865, "Carroll": 0.0, "Jackson": 0.31460077517656865, "St. Clair": 0.31460077517656865, "McHenry": 10.0, "DuPage": 10.0, "Greene": 0.31460077517656865, "Sangamon": 0.31460077517656865, "Hancock": 0.31460077517656865, "Union": 0.31460077517656865, "Richland": 0.31460077517656865, "Peoria": 10.0, "Massac": 1.5525070791135136, "Cook": 10.0, "Hamilton": 0.31460077517656865, "Will": 10.0}';

var transjson = '{"Monroe": 4.2543388926991987, "Madison": 7.6058019646436543, "Jo Daviess": 5.1462563316942367, "Bond": 5.1399517775704409, "Macoupin": 3.803192654485144, "La Salle": 3.5919857491586344, "Marion": 5.0191425096618154, "Knox": 0.31061713249814688, "Perry": 3.3651068512843927, "Gallatin": 4.0013204228589965, "Champaign": 2.5717748223250063, "Coles": 5.7664025791715119, "Hardin": 1.0032430004982889, "Pike": 5.438620805347254, "Whiteside": 5.4013089465370019, "Saline": 0.99063026398416998, "Logan": 2.9847496588871816, "Lawrence": 6.2461464111646352, "De Witt": 2.3006091589601421, "Boone": 7.9636767606836685, "Edgar": 5.4611777529635654, "Clinton": 5.1704289763729046, "Brown": 0.56585374716651626, "Clark": 4.6506468993896073, "Macon": 6.0412389350105427, "Christian": 3.4232466249260227, "Ford": 3.1495162228977449, "Cass": 1.6055586907085508, "Piatt": 5.7818912433121303, "Scott": 3.8392141434645515, "White": 5.819622205776513, "Moultrie": 1.1923210234568082, "Kane": 4.6973241202559866, "Bureau": 3.9547146483684821, "Vermilion": 5.1038349187731917, "Livingston": 2.0044689575800958, "Effingham": 3.3862641441674026, "Mason": 3.9512887371818337, "Jefferson": 8.3245366432089227, "Pope": 4.9954852518518287, "Marshall": 4.1799378138424634, "Pulaski": 3.379229316190195, "Ogle": 2.4362563351065485, "Jasper": 3.5662305741797189, "Winnebago": 3.6339703905338343, "Stephenson": 2.6063819237791961, "Morgan": 2.5192587772888921, "Williamson": 8.5135986704083439, "Wabash": 2.5596662234603005, "Rock Island": 4.6543745189925785, "Lake": 10.0, "Douglas": 4.3498285162537522, "Randolph": 2.8443200785631464, "Fayette": 1.3658600616029246, "DeKalb": 3.932584327335813, "Kankakee": 4.0291836920376403, "Shelby": 2.8114157084225933, "Iroquois": 1.4293213910845333, "Warren": 5.1393872426129796, "Edwards": 4.8295632498107031, "Stark": 3.083518326707543, "Lee": 6.9616938035720839, "Menard": 1.6855594476018085, "Fulton": 2.4530113571220546, "McDonough": 3.8791671871126558, "Woodford": 2.4715717653015536, "McLean": 7.4450697407756001, "Franklin": 4.6749045021129589, "Mercer": 4.0748087949012497, "Johnson": 6.2881337175736869, "Clay": 1.0522645293188988, "Henry": 2.4730324989538608, "Crawford": 2.7049348713886303, "Cumberland": 4.2914612235659479, "Washington": 3.7929296278960432, "Putnam": 0.91900618877801443, "Kendall": 4.5935223895143293, "Montgomery": 6.4875029983041772, "Alexander": 0.94892676134649123, "Wayne": 2.9631892789818766, "Calhoun": 6.3199900326811003, "Schuyler": 9.4102418057081252, "Tazewell": 1.7729809833472903, "Henderson": 6.1496908149974914, "Grundy": 7.0323375698387984, "Jersey": 3.011203463861273, "Carroll": 3.5910570694806054, "Jackson": 5.4649544408862241, "St. Clair": 7.2388304073639942, "McHenry": 3.0900175080254715, "DuPage": 6.7942307580076537, "Greene": 3.7117721701835849, "Sangamon": 4.5675752978266786, "Hancock": 3.3441844924253794, "Union": 0.0, "Richland": 3.5595102594290449, "Peoria": 2.0975842048814486, "Massac": 4.2911207326573138, "Cook": 7.5754377733448939, "Hamilton": 4.906949927730631, "Will": 5.2579451737275198}'

var score = JSON.parse(scorejson);
var market = JSON.parse(marketjson);
var trans = JSON.parse(transjson);
var county = "Kane";
var corn = score['corn'][county];
var soy = score['soy'][county];
var wheat = score['wheat'][county];
var marketscore = market[county];
var transscore = trans[county];
var LegendOptions = [county,'Perfect'];
var d = [
		  [
			{axis:"Market Size(Metro Population)",value:marketscore/10},
			{axis:"Transpotation cost",value:transscore/10},
			{axis:"Corn Productivity",value:corn/10},
			{axis:"Wheat Productivity",value:wheat/10},
			{axis:"Soybeans Productivity",value:soy/10}
		  ],[
			{axis:"Market Size(Metro Population)",value:1},
			{axis:"Transpotation cost",value:1},
			{axis:"Corn Productivity",value:1},
			{axis:"Wheat Productivity",value:1},
			{axis:"Soybeans Productivity",value:1}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Land Quality Evaluation");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);});
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; });	
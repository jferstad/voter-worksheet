(() => {
const cards = [
  {
    "id": "gov-becerra-1",
    "office": "Governor",
    "candidate": "Xavier Becerra",
    "type": "Ballot designation",
    "topic": "Voting-rights legal background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “Voting Rights Attorney.”",
    "question": "Does a voting-rights legal background make you more interested in researching this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-becerra-2",
    "office": "Governor",
    "candidate": "Xavier Becerra",
    "type": "Issue/position",
    "topic": "Affordability / market intervention",
    "statement": "A voter guide summarized this candidate as focusing on price gouging, unjustified rate hikes, and using state power to lower costs where markets have failed.",
    "question": "How do you react to this affordability approach?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-becerra-3",
    "office": "Governor",
    "candidate": "Xavier Becerra",
    "type": "Issue/position",
    "topic": "Tax policy / safety net",
    "statement": "A voter guide summarized this candidate as supporting higher taxes on “mega wealthy” Californians while protecting programs such as Medi-Cal.",
    "question": "How much do you agree with this tax-and-services direction?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-becerra-4",
    "office": "Governor",
    "candidate": "Xavier Becerra",
    "type": "Endorsement/support",
    "topic": "Institutional support",
    "statement": "A voter guide listed support from the Assembly Speaker, California State Council of Laborers, and Planned Parenthood Affiliates of California.",
    "question": "Do these types of supporters make you more or less likely to look closer at the candidate?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-bianco-1",
    "office": "Governor",
    "candidate": "Chad Bianco",
    "type": "Record/experience",
    "topic": "Law enforcement background",
    "statement": "This candidate appears on the certified list as a Republican candidate with the ballot designation “Riverside County Sheriff.”",
    "question": "Does sheriff experience make you more or less interested in a Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-bianco-2",
    "office": "Governor",
    "candidate": "Chad Bianco",
    "type": "Issue/position",
    "topic": "Taxes / regulation / oil",
    "statement": "A voter guide summarized this candidate as promising to cut taxes and regulations, make California oil independent, oppose new taxes, reduce the gas tax, and cut housing red tape.",
    "question": "How do you react to this economic and housing-policy approach?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-bianco-3",
    "office": "Governor",
    "candidate": "Chad Bianco",
    "type": "Issue/position",
    "topic": "Immigration enforcement",
    "statement": "A voter guide summarized this candidate as promising to try to overturn California’s statewide sanctuary law.",
    "question": "Does this stance make you more or less likely to research the candidate?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-hilton-1",
    "office": "Governor",
    "candidate": "Steve Hilton",
    "type": "Ballot designation",
    "topic": "Small-business background",
    "statement": "This candidate appears on the certified list as a Republican candidate with the ballot designation “Small Business Owner.”",
    "question": "Does small-business experience make you more or less interested in this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-hilton-2",
    "office": "Governor",
    "candidate": "Steve Hilton",
    "type": "Issue/position",
    "topic": "Taxes / spending / regulation",
    "statement": "A voter guide summarized this candidate as wanting lower taxes, spending, and regulations, including a proposal to eliminate state income tax under $100,000 and use a flat tax above that.",
    "question": "How much do you agree with this tax-policy direction?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-hilton-3",
    "office": "Governor",
    "candidate": "Steve Hilton",
    "type": "Issue/position",
    "topic": "Housing / environmental regulation",
    "statement": "A voter guide summarized this candidate as supporting capped development fees and reduced environmental regulations to expand single-family homebuilding.",
    "question": "How do you react to this housing-policy approach?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-mahan-1",
    "office": "Governor",
    "candidate": "Matt Mahan",
    "type": "Record/experience",
    "topic": "Mayoral background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “Mayor, San Jose.”",
    "question": "Does big-city mayoral experience make you more interested in researching this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-mahan-2",
    "office": "Governor",
    "candidate": "Matt Mahan",
    "type": "Issue/position",
    "topic": "Homelessness / housing and gas taxes",
    "statement": "A voter guide summarized this candidate as touting a decrease in unsheltered homelessness as San José mayor and promising to cut taxes on housing development and gas.",
    "question": "How do these priorities affect your interest in the candidate?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-porter-1",
    "office": "Governor",
    "candidate": "Katie Porter",
    "type": "Ballot designation",
    "topic": "Consumer protection background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “Consumer Protection Advocate.”",
    "question": "Does a consumer-protection background make you more interested in this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-porter-2",
    "office": "Governor",
    "candidate": "Katie Porter",
    "type": "Issue/position",
    "topic": "Corporate taxes / income taxes / college costs",
    "statement": "A voter guide summarized this candidate as proposing higher corporate taxes on high-earning companies to eliminate state income taxes for families under $100,000 and cover two years of in-state UC/CSU tuition.",
    "question": "How much do you agree with this tax-and-education approach?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-porter-3",
    "office": "Governor",
    "candidate": "Katie Porter",
    "type": "Record/experience",
    "topic": "Campaign finance / anti-corruption",
    "statement": "In an official candidate statement, this candidate emphasizes exposing corruption and refusing corporate and lobbyist donations.",
    "question": "Does this campaign-finance positioning make you more or less interested in the candidate?",
    "sources": [
      "sosGov"
    ]
  },
  {
    "id": "gov-steyer-1",
    "office": "Governor",
    "candidate": "Tom Steyer",
    "type": "Ballot designation",
    "topic": "Climate background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “Climate Advocate.”",
    "question": "Does a climate-focused background make you more interested in this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-steyer-2",
    "office": "Governor",
    "candidate": "Tom Steyer",
    "type": "Issue/position",
    "topic": "Housing / electricity / preschool / health care",
    "statement": "A voter guide summarized this candidate as supporting one million affordable homes, building on surplus public lands, lowering electricity bills, expanding preschool, and supporting state-level single-payer health care.",
    "question": "How do you react to this combination of priorities?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-steyer-3",
    "office": "Governor",
    "candidate": "Tom Steyer",
    "type": "Issue/position",
    "topic": "Commercial property and corporate tax policy",
    "statement": "A voter guide summarized this candidate as supporting higher commercial property taxes and closing a multinational corporate tax loophole.",
    "question": "How much do you agree with this revenue approach?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-thurmond-1",
    "office": "Governor",
    "candidate": "Tony K. Thurmond",
    "type": "Record/experience",
    "topic": "Education leadership",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “California State Superintendent of Public Instruction.”",
    "question": "Does statewide education leadership experience make you more interested in this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-thurmond-2",
    "office": "Governor",
    "candidate": "Tony K. Thurmond",
    "type": "Issue/position",
    "topic": "Schools / dyslexia / public services",
    "statement": "A voter guide summarized this candidate as supporting a billionaire tax and more funding for dyslexia screening and tutoring; his official statement emphasizes school funding, preschool, school meals, health care, and housing.",
    "question": "How much do these education and services priorities matter to you in the Governor race?",
    "sources": [
      "kqedGov",
      "sosGov"
    ]
  },
  {
    "id": "gov-villaraigosa-1",
    "office": "Governor",
    "candidate": "Antonio Villaraigosa",
    "type": "Ballot designation",
    "topic": "Housing affordability background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “Housing Affordability Advocate.”",
    "question": "Does a housing-affordability-centered ballot designation make you more interested in this Governor candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "gov-villaraigosa-2",
    "office": "Governor",
    "candidate": "Antonio Villaraigosa",
    "type": "Issue/position",
    "topic": "Homebuyer assistance / immigration enforcement oversight",
    "statement": "A voter guide summarized this candidate as promising to boost homebuyer assistance programs and create a task force concerning federal immigration agents’ adherence to state law.",
    "question": "How do you react to this pair of priorities?",
    "sources": [
      "kqedGov"
    ]
  },
  {
    "id": "gov-yee-1",
    "office": "Governor",
    "candidate": "Betty T. Yee",
    "type": "Record/experience",
    "topic": "Fiscal administration",
    "statement": "In an official candidate statement, this candidate emphasizes prior service as a state budget director, Board of Equalization member, and State Controller.",
    "question": "Does this fiscal-administration background make you more interested in this Governor candidate?",
    "sources": [
      "sosGov",
      "sosCert"
    ]
  },
  {
    "id": "gov-yee-2",
    "office": "Governor",
    "candidate": "Betty T. Yee",
    "type": "Record/experience",
    "topic": "Budget oversight claims",
    "statement": "In an official candidate statement, this candidate says she uncovered billions in misspending and protected retirement funds.",
    "question": "Do these oversight claims make you more or less likely to research the candidate?",
    "sources": [
      "sosGov"
    ]
  },
  {
    "id": "ltgov-kellman-1",
    "office": "Lieutenant Governor",
    "candidate": "Janelle Kellman",
    "type": "Issue/position",
    "topic": "Climate risk / utilities / insurance",
    "statement": "In an official candidate statement, this candidate emphasizes climate-risk expertise, disaster preparedness, lower electricity bills, and insurance-market stabilization.",
    "question": "How much do you want the Lieutenant Governor to focus on these issues?",
    "sources": [
      "sosLtGov"
    ]
  },
  {
    "id": "ltgov-kellman-2",
    "office": "Lieutenant Governor",
    "candidate": "Janelle Kellman",
    "type": "Issue/position",
    "topic": "Community college / career education",
    "statement": "In an official candidate statement, this candidate supports expanded vocational and career-aligned education and says community college should be free for California residents.",
    "question": "How much do you agree with this higher-education direction?",
    "sources": [
      "sosLtGov"
    ]
  },
  {
    "id": "ltgov-tubbs-1",
    "office": "Lieutenant Governor",
    "candidate": "Michael Tubbs",
    "type": "Record/experience",
    "topic": "Stockton mayor / guaranteed income background",
    "statement": "In an official candidate statement, this candidate cites work as Stockton mayor, a guaranteed-income pilot, and local public-safety and fiscal-health claims.",
    "question": "Does this background make you more or less interested in the candidate?",
    "sources": [
      "sosLtGov"
    ]
  },
  {
    "id": "ltgov-tubbs-2",
    "office": "Lieutenant Governor",
    "candidate": "Michael Tubbs",
    "type": "Issue/position",
    "topic": "Affordability / higher education / housing",
    "statement": "In an official candidate statement, this candidate says he would focus on affordability, higher education costs, affordable housing, guaranteed income, and accountability.",
    "question": "How do you react to this issue focus?",
    "sources": [
      "sosLtGov"
    ]
  },
  {
    "id": "ltgov-ma-1",
    "office": "Lieutenant Governor",
    "candidate": "Fiona Ma",
    "type": "Issue/position",
    "topic": "University tuition / coastal policy",
    "statement": "In an official candidate statement, this candidate says she would vote to freeze tuition and oppose reopening offshore drilling while serving on boards and commissions tied to the office.",
    "question": "How do you react to these priorities for Lieutenant Governor?",
    "sources": [
      "sosLtGov"
    ]
  },
  {
    "id": "ltgov-fryday-1",
    "office": "Lieutenant Governor",
    "candidate": "Josh Fryday",
    "type": "Ballot designation",
    "topic": "Governor’s Cabinet background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “Governor’s Cabinet Member.”",
    "question": "Does this state-administration background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "sos-weber-1",
    "office": "Secretary of State",
    "candidate": "Shirley N. Weber",
    "type": "Record/experience",
    "topic": "Incumbent election administrator",
    "statement": "This candidate appears on the certified list as the incumbent California Secretary of State.",
    "question": "Does incumbency in election administration make you more or less interested in this candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "sos-wagner-1",
    "office": "Secretary of State",
    "candidate": "Donald P. (Don) Wagner",
    "type": "Record/experience",
    "topic": "County supervisor background",
    "statement": "This candidate appears on the certified list as a Republican candidate with the ballot designation “Orange County Supervisor.”",
    "question": "Does county-supervisor experience make you more or less interested in this candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "controller-cohen-1",
    "office": "Controller",
    "candidate": "Malia M. Cohen",
    "type": "Record/experience",
    "topic": "Incumbent controller",
    "statement": "This candidate appears on the certified list as the incumbent state Controller.",
    "question": "Does incumbent Controller experience make you more or less interested in this candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "controller-morgan-1",
    "office": "Controller",
    "candidate": "Herb W Morgan",
    "type": "Record/experience",
    "topic": "Investment background",
    "statement": "This candidate appears on the certified list with the ballot designation “Chief Investment Officer.”",
    "question": "Does investment-management experience make you more or less interested in a Controller candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "ag-bonta-1",
    "office": "Attorney General",
    "candidate": "Rob Bonta",
    "type": "Record/experience",
    "topic": "Incumbent Attorney General",
    "statement": "This candidate appears on the certified list as the incumbent Attorney General.",
    "question": "Does incumbent Attorney General experience make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "ag-gates-1",
    "office": "Attorney General",
    "candidate": "Michael E. Gates",
    "type": "Record/experience",
    "topic": "Federal prosecutor background",
    "statement": "This candidate appears on the certified list with the ballot designation “Deputy United States Attorney.”",
    "question": "Does federal-prosecutor experience make you more or less interested in this Attorney General candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "treasurer-caballero-1",
    "office": "Treasurer",
    "candidate": "Anna M. Caballero",
    "type": "Record/experience",
    "topic": "State senator background",
    "statement": "This candidate appears on the certified list as a Democratic candidate with the ballot designation “California State Senator.”",
    "question": "Does state-legislative experience make you more or less interested in a Treasurer candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "treasurer-kounalakis-1",
    "office": "Treasurer",
    "candidate": "Eleni Kounalakis",
    "type": "Issue/position",
    "topic": "Public finance / housing / pensions",
    "statement": "In an official candidate statement, this candidate emphasizes public finance for affordable housing, pension protection, and responsible state financial management.",
    "question": "How much do you agree with this Treasurer-focused platform?",
    "sources": [
      "sosTreasurer"
    ]
  },
  {
    "id": "treasurer-kounalakis-2",
    "office": "Treasurer",
    "candidate": "Eleni Kounalakis",
    "type": "Endorsement/support",
    "topic": "Major endorsements",
    "statement": "In an official candidate statement, this candidate lists support from the Governor, U.S. senators, a former House Speaker, and California teachers.",
    "question": "Do these types of supporters make you more or less interested in the candidate?",
    "sources": [
      "sosTreasurer"
    ]
  },
  {
    "id": "treasurer-turner-1",
    "office": "Treasurer",
    "candidate": "Glenn Turner",
    "type": "Issue/position",
    "topic": "Divestment / public banks",
    "statement": "In an official candidate statement, this candidate supports divestment from Israel, weapons manufacturers, and fossil fuels, plus a billionaire tax, student debt jubilee, health care for all, and public banks.",
    "question": "How do you react to this approach for the Treasurer’s office?",
    "sources": [
      "sosTreasurer"
    ]
  },
  {
    "id": "treasurer-hawks-1",
    "office": "Treasurer",
    "candidate": "Jennifer Hawks",
    "type": "Issue/position",
    "topic": "Fiscal discipline / transparency",
    "statement": "In an official candidate statement, this candidate emphasizes discipline, accountability, transparency, audits, and public reporting.",
    "question": "How much do you agree with this Treasurer-office focus?",
    "sources": [
      "sosTreasurer"
    ]
  },
  {
    "id": "treasurer-vazquez-1",
    "office": "Treasurer",
    "candidate": "Tony Vazquez",
    "type": "Record/experience",
    "topic": "BOE and local governance background",
    "statement": "In an official candidate statement, this candidate cites service on the Board of Equalization, the Franchise Tax Board, and local municipal government.",
    "question": "Does this tax-board and local-governance background make you more or less interested in a Treasurer candidate?",
    "sources": [
      "sosTreasurer"
    ]
  },
  {
    "id": "ins-wolff-1",
    "office": "Insurance Commissioner",
    "candidate": "Patrick Wolff",
    "type": "Issue/position",
    "topic": "Insurance expertise / donations",
    "statement": "In an official candidate statement, this candidate emphasizes insurance and financial-analysis experience, a fair and transparent system, and not accepting insurance-company or fossil-fuel-company money.",
    "question": "How do you react to this stated approach?",
    "sources": [
      "sosInsurance"
    ]
  },
  {
    "id": "ins-korsgaden-1",
    "office": "Insurance Commissioner",
    "candidate": "Stacy A. Korsgaden",
    "type": "Issue/position",
    "topic": "Market competition / regulation",
    "statement": "In an official candidate statement, this candidate argues overregulation and market distortion have reduced options and raised prices, and says restoring competition can lower costs.",
    "question": "How much do you agree with this insurance-market approach?",
    "sources": [
      "sosInsurance"
    ]
  },
  {
    "id": "ins-kim-1",
    "office": "Insurance Commissioner",
    "candidate": "Jane Kim",
    "type": "Issue/position",
    "topic": "Rate freezes / public disaster insurance",
    "statement": "In an official candidate statement, this candidate says she will take no insurance-industry money, cap excessive profits, freeze rates after claims, and create a public disaster-insurance program.",
    "question": "How do you react to this insurance-regulation approach?",
    "sources": [
      "sosInsurance"
    ]
  },
  {
    "id": "ins-farren-1",
    "office": "Insurance Commissioner",
    "candidate": "Merritt Farren",
    "type": "Record/experience",
    "topic": "Wildfire survivor / legal and customer operations background",
    "statement": "In an official candidate statement, this candidate describes being a wildfire survivor, participating in rate-increase proceedings, and having legal and customer-operations experience at major companies.",
    "question": "Does this background make you more or less interested in the candidate?",
    "sources": [
      "sosInsurance"
    ]
  },
  {
    "id": "ins-vargas-1",
    "office": "Insurance Commissioner",
    "candidate": "Eduardo \"Lalo\" Vargas",
    "type": "Issue/position",
    "topic": "Rate freeze / public insurance system",
    "statement": "In an official candidate statement, this candidate pledges to freeze insurance rates, investigate claim procedures, and fight for a public insurance system.",
    "question": "How do you react to this approach?",
    "sources": [
      "sosInsurance"
    ]
  },
  {
    "id": "ins-allen-1",
    "office": "Insurance Commissioner",
    "candidate": "Ben Allen",
    "type": "Record/experience",
    "topic": "State senator background",
    "statement": "This candidate appears on the certified list with the ballot designation “California State Senator.”",
    "question": "Does state-legislative experience make you more or less interested in an Insurance Commissioner candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-richard-barrera",
    "office": "Superintendent of Public Instruction",
    "candidate": "Richard Barrera",
    "type": "Ballot designation",
    "topic": "State Superintendent advisor",
    "statement": "This candidate appears on the certified list with the ballot designation “State Superintendent Advisor.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-wendy-castaneda-leal",
    "office": "Superintendent of Public Instruction",
    "candidate": "Wendy Castaneda Leal",
    "type": "Ballot designation",
    "topic": "School district superintendent",
    "statement": "This candidate appears on the certified list with the ballot designation “School District Superintendent.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-nichelle-m-henderson",
    "office": "Superintendent of Public Instruction",
    "candidate": "Nichelle M. Henderson",
    "type": "Ballot designation",
    "topic": "College trustee / teacher",
    "statement": "This candidate appears on the certified list with the ballot designation “College Trustee/Teacher.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-frank-lara",
    "office": "Superintendent of Public Instruction",
    "candidate": "Frank Lara",
    "type": "Ballot designation",
    "topic": "Teacher / union VP",
    "statement": "This candidate appears on the certified list with the ballot designation “Teacher/Union VP.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-ainye-long",
    "office": "Superintendent of Public Instruction",
    "candidate": "Ainye Long",
    "type": "Ballot designation",
    "topic": "Public school teacher",
    "statement": "This candidate appears on the certified list with the ballot designation “Public School Teacher.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-gus-mattammal",
    "office": "Superintendent of Public Instruction",
    "candidate": "Gus Mattammal",
    "type": "Ballot designation",
    "topic": "Educator / executive / author",
    "statement": "This candidate appears on the certified list with the ballot designation “Educator/Executive/Author.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-al-muratsuchi",
    "office": "Superintendent of Public Instruction",
    "candidate": "Al Muratsuchi",
    "type": "Ballot designation",
    "topic": "Assemblymember / classroom educator",
    "statement": "This candidate appears on the certified list with the ballot designation “Assemblymember/Classroom Educator.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-josh-newman",
    "office": "Superintendent of Public Instruction",
    "candidate": "Josh Newman",
    "type": "Ballot designation",
    "topic": "Educator / strategic advisor",
    "statement": "This candidate appears on the certified list with the ballot designation “Educator/Strategic Advisor.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-anthony-rendon",
    "office": "Superintendent of Public Instruction",
    "candidate": "Anthony Rendon",
    "type": "Ballot designation",
    "topic": "Democracy advocate / educator",
    "statement": "This candidate appears on the certified list with the ballot designation “Democracy Advocate/Educator.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "spi-sonja-shaw",
    "office": "Superintendent of Public Instruction",
    "candidate": "Sonja Shaw",
    "type": "Ballot designation",
    "topic": "School district president",
    "statement": "This candidate appears on the certified list with the ballot designation “School District President.”",
    "question": "Does this education/governance background make you more or less interested in the candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "boe-sally-j-lieber",
    "office": "Board of Equalization, District 2",
    "candidate": "Sally J. Lieber",
    "type": "Ballot designation",
    "topic": "Tax board background",
    "statement": "This candidate appears on official materials with the ballot designation “Member, State Board of Equalization.”",
    "question": "Does this background make you more or less interested in a Board of Equalization candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "boe-john-pimentel",
    "office": "Board of Equalization, District 2",
    "candidate": "John Pimentel",
    "type": "Ballot designation",
    "topic": "Tax board background",
    "statement": "This candidate appears on official materials with the ballot designation “Member, Board of Trustees, San Mateo County Community College District.”",
    "question": "Does this background make you more or less interested in a Board of Equalization candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "boe-j-brett-marymee",
    "office": "Board of Equalization, District 2",
    "candidate": "J Brett Marymee",
    "type": "Ballot designation",
    "topic": "Tax board background",
    "statement": "This candidate appears on official materials with the ballot designation “Small Business Owner.”",
    "question": "Does this background make you more or less interested in a Board of Equalization candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "boe-mark-mccomas",
    "office": "Board of Equalization, District 2",
    "candidate": "Mark McComas",
    "type": "Ballot designation",
    "topic": "Tax board background",
    "statement": "This candidate appears on official materials with the ballot designation “Small Business Advocate.”",
    "question": "Does this background make you more or less interested in a Board of Equalization candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "boe-bill-shireman",
    "office": "Board of Equalization, District 2",
    "candidate": "Bill Shireman",
    "type": "Ballot designation",
    "topic": "Tax board background",
    "statement": "This candidate appears on official materials with the ballot designation “Taxpayer Advocate.”",
    "question": "Does this background make you more or less interested in a Board of Equalization candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "boe-john-w-zaruka",
    "office": "Board of Equalization, District 2",
    "candidate": "John W. Zaruka",
    "type": "Ballot designation",
    "topic": "Tax board background",
    "statement": "This candidate appears on official materials with the ballot designation “Retired Hospitality Executive.”",
    "question": "Does this background make you more or less interested in a Board of Equalization candidate?",
    "sources": [
      "sosCert"
    ]
  },
  {
    "id": "us15-anthony-van-dang",
    "office": "U.S. Representative, District 15",
    "candidate": "Anthony Van Dang",
    "type": "Ballot designation",
    "topic": "Congressional candidate background",
    "statement": "This candidate appears on official materials with the ballot designation “Policy Analyst.”",
    "question": "Does this background make you more or less interested in this congressional candidate?",
    "sources": [
      "sosCert",
      "sanMateoRoster"
    ]
  },
  {
    "id": "us15-mantosh-kumar",
    "office": "U.S. Representative, District 15",
    "candidate": "Mantosh Kumar",
    "type": "Ballot designation",
    "topic": "Congressional candidate background",
    "statement": "This candidate appears on official materials with the ballot designation “Strategic Business Advisor.”",
    "question": "Does this background make you more or less interested in this congressional candidate?",
    "sources": [
      "sosCert",
      "sanMateoRoster"
    ]
  },
  {
    "id": "us15-kevin-mullin",
    "office": "U.S. Representative, District 15",
    "candidate": "Kevin Mullin",
    "type": "Ballot designation",
    "topic": "Congressional candidate background",
    "statement": "This candidate appears on official materials with the ballot designation “U.S. Representative.”",
    "question": "Does this background make you more or less interested in this congressional candidate?",
    "sources": [
      "sosCert",
      "sanMateoRoster"
    ]
  },
  {
    "id": "us15-charles-hoelter",
    "office": "U.S. Representative, District 15",
    "candidate": "Charles Hoelter",
    "type": "Ballot designation",
    "topic": "Congressional candidate background",
    "statement": "This candidate appears on official materials with the ballot designation “Retired Training Supervisor.”",
    "question": "Does this background make you more or less interested in this congressional candidate?",
    "sources": [
      "sosCert",
      "sanMateoRoster"
    ]
  },
  {
    "id": "us15-jim-garrity",
    "office": "U.S. Representative, District 15",
    "candidate": "Jim Garrity",
    "type": "Ballot designation",
    "topic": "Congressional candidate background",
    "statement": "This candidate appears on official materials with the ballot designation “Retired Police Inspector.”",
    "question": "Does this background make you more or less interested in this congressional candidate?",
    "sources": [
      "sosCert",
      "sanMateoRoster"
    ]
  },
  {
    "id": "ad21-papan-1",
    "office": "State Assembly, District 21",
    "candidate": "Diane Papan",
    "type": "Record/experience",
    "topic": "Incumbent Assemblymember",
    "statement": "The San Mateo County roster lists this candidate as a California State Assemblymember.",
    "question": "Does incumbent Assembly experience make you more or less interested in this candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "ad21-muhawieh-1",
    "office": "State Assembly, District 21",
    "candidate": "Jabra J. Muhawieh",
    "type": "Record/experience",
    "topic": "Tax professional background",
    "statement": "The San Mateo County roster lists this candidate as a licensed tax professional.",
    "question": "Does tax-professional experience make you more or less interested in this candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-schools-bonini-1",
    "office": "San Mateo County Superintendent of Schools",
    "candidate": "Chelsea Bonini",
    "type": "Record/experience",
    "topic": "Teacher / attorney / trustee background",
    "statement": "The San Mateo County roster lists this candidate as a teacher, attorney, and trustee.",
    "question": "Does this background make you more or less interested in this county schools candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-schools-camacho-1",
    "office": "San Mateo County Superintendent of Schools",
    "candidate": "Héctor Camacho Jr.",
    "type": "Record/experience",
    "topic": "Teacher / executive director background",
    "statement": "The San Mateo County roster lists this candidate as a teacher and executive director.",
    "question": "Does this background make you more or less interested in this county schools candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-d3-jimenez-1",
    "office": "San Mateo County Board of Supervisors, District 3",
    "candidate": "Joaquin Jiménez",
    "type": "Record/experience",
    "topic": "Community organizer background",
    "statement": "The San Mateo County roster lists this candidate as a community organizer.",
    "question": "Does this background make you more or less interested in this supervisor candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-d3-mueller-1",
    "office": "San Mateo County Board of Supervisors, District 3",
    "candidate": "Ray Mueller",
    "type": "Record/experience",
    "topic": "Incumbency",
    "statement": "The San Mateo County roster lists this candidate as the incumbent.",
    "question": "Does incumbency make you more or less interested in this supervisor candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-assessor-canepa-1",
    "office": "San Mateo County Assessor-County Clerk-Recorder",
    "candidate": "David Canepa",
    "type": "Record/experience",
    "topic": "County supervisor background",
    "statement": "The San Mateo County roster lists this candidate as a San Mateo County Supervisor.",
    "question": "Does county-supervisor experience make you more or less interested in this Assessor-Clerk-Recorder candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-assessor-irizarry-1",
    "office": "San Mateo County Assessor-County Clerk-Recorder",
    "candidate": "Jim Irizarry",
    "type": "Record/experience",
    "topic": "Assistant assessor background",
    "statement": "The San Mateo County roster lists this candidate as Assistant County Assessor.",
    "question": "Does direct assessor-office experience make you more or less interested in this candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-controller-raigoza-1",
    "office": "San Mateo County Controller",
    "candidate": "Juan Raigoza",
    "type": "Record/experience",
    "topic": "Incumbent controller background",
    "statement": "The San Mateo County roster lists this candidate as San Mateo County Controller.",
    "question": "Does incumbent Controller experience make you more or less interested in this county candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  },
  {
    "id": "smc-controller-morgan-1",
    "office": "San Mateo County Controller",
    "candidate": "Thomas Royal Morgan II",
    "type": "Ballot designation",
    "topic": "No ballot designation",
    "statement": "The San Mateo County roster lists this candidate without a ballot designation in the March 2 snapshot.",
    "question": "How does the lack of a ballot designation affect your interest in researching this candidate?",
    "sources": [
      "sanMateoRoster"
    ]
  }
];

const supplementalCards = [
  {id:'gov-mahan-accountability', office:'Governor', candidate:'Matt Mahan', type:'Record/experience', topic:'City Hall accountability', statement:'KQED summarizes this candidate as San Jose mayor and notes he points to a decrease in unsheltered homelessness while calling for lower housing-development and gas costs.', question:'Does a mayoral, metrics-focused homelessness and affordability pitch make you more interested in this Governor candidate?', sources:['kqedGov']},
  {id:'gov-villaraigosa-homebuyer-immigration', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Housing and immigration enforcement', statement:'KQED summarizes this candidate as promising to expand homebuyer assistance and create a task force to ensure federal immigration agents follow state law.', question:'How do you react to pairing homebuyer help with state oversight of federal immigration enforcement?', sources:['kqedGov']},
  {id:'gov-thurmond-wealth-tax-education', office:'Governor', candidate:'Tony K. Thurmond', type:'Issue/position', topic:'Wealth tax and student supports', statement:'KQED summarizes this candidate as supporting a California billionaire tax and promising more funding for dyslexia screening and tutoring.', question:'Does this education-centered tax-and-services agenda make you more or less interested?', sources:['kqedGov']},

  {id:'ltgov-fennell-audit-waste', office:'Lieutenant Governor', candidate:'David Fennell', type:'Issue/position', topic:'Audits and waste', statement:'In his official candidate statement, this candidate emphasizes audits, waste, fraud, and accountability in state government.', question:'Does a waste-and-audits pitch make you more interested in a Lieutenant Governor candidate?', sources:['sosLtGov']},
  {id:'ltgov-fennell-water', office:'Lieutenant Governor', candidate:'David Fennell', type:'Issue/position', topic:'Water storage and agriculture', statement:'His official statement highlights water storage, the Delta, and farmers as priorities, giving his campaign a resource-and-agriculture focus.', question:'How important is this water-and-agriculture emphasis for the Lieutenant Governor role?', sources:['sosLtGov']},
  {id:'ltgov-fennell-wildfire', office:'Lieutenant Governor', candidate:'David Fennell', type:'Issue/position', topic:'Forest management', statement:'His official statement also stresses forest management and wildfire prevention rather than mainly higher-education governance.', question:'Does this wildfire-management focus distinguish him positively or negatively for you?', sources:['sosLtGov']},
  {id:'ltgov-fiona-ma-statewide-fiscal', office:'Lieutenant Governor', candidate:'Fiona Ma', type:'Record/experience', topic:'Statewide fiscal offices', statement:'CalMatters describes this candidate as a longtime statewide official who has served as state treasurer, Board of Equalization member, San Francisco supervisor, and assemblymember.', question:'Does this statewide fiscal and legislative resume make you more interested?', sources:['calmattersLtGovGuide']},
  {id:'ltgov-fiona-ma-tuition', office:'Lieutenant Governor', candidate:'Fiona Ma', type:'Issue/position', topic:'Tuition and higher education boards', statement:'Because the lieutenant governor sits on UC and CSU boards, this candidate points to her state-board experience and has emphasized holding down higher-education costs.', question:'How much does a tuition-and-governance focus matter to you for this office?', sources:['calmattersLtGovGuide','sosLtGov']},
  {id:'ltgov-romero-party-switch', office:'Lieutenant Governor', candidate:'Gloria Romero', type:'Record/experience', topic:'Party switch and education politics', statement:'CalMatters describes this former Democratic state senator as becoming Republican in 2024 after clashing with Democrats on school choice, COVID-19 policies, and gender-identity issues.', question:'Does this ideological shift and education-policy contrast make you more or less interested?', sources:['calmattersLtGovGuide']},
  {id:'ltgov-romero-senate-leader', office:'Lieutenant Governor', candidate:'Gloria Romero', type:'Record/experience', topic:'Senate leadership', statement:'CalMatters notes she served nearly 12 years in the Legislature and was the first woman to serve as Senate majority leader.', question:'How do you weigh this legislative leadership background?', sources:['calmattersLtGovGuide']},
  {id:'ltgov-romero-hilton-ticket', office:'Lieutenant Governor', candidate:'Gloria Romero', type:'Endorsement/support', topic:'Republican ticket alignment', statement:'CalMatters reports Republican Governor candidate Steve Hilton asked her to be on the ticket with him, making her campaign closely aligned with his Republican statewide push.', question:'Does that alignment affect your interest in this candidate?', sources:['calmattersLtGovGuide','calmattersLtGovArticle']},
  {id:'ltgov-tubbs-ubi', office:'Lieutenant Governor', candidate:'Michael Tubbs', type:'Record/experience', topic:'Guaranteed income pilot', statement:'CalMatters describes this former Stockton mayor as having piloted a universal basic income program and now leading a nonprofit focused on ending poverty in California.', question:'Does this anti-poverty and guaranteed-income record make you more interested?', sources:['calmattersLtGovGuide']},
  {id:'ltgov-kellman-climate-risk', office:'Lieutenant Governor', candidate:'Janelle Kellman', type:'Record/experience', topic:'Climate risk and local government', statement:'Her official statement and CalMatters profile emphasize environmental law, Sausalito local government experience, and a nonprofit focused on sea-level rise and climate-risk planning.', question:'Does climate-risk and coastal local-government experience fit what you want from this office?', sources:['sosLtGov','calmattersLtGovGuide']},
  {id:'ltgov-oliver-ma-civil-rights', office:'Lieutenant Governor', candidate:'Oliver Ma', type:'Record/experience', topic:'Civil-rights legal background', statement:'This candidate presents himself as a civil-rights lawyer running on a left-populist platform; the campaign website is candidate-supplied and should be verified independently.', question:'Does a civil-rights lawyer profile make you more interested in this Lieutenant Governor candidate?', sources:['oliverMaCampaign','sosCert']},
  {id:'ltgov-oliver-ma-college', office:'Lieutenant Governor', candidate:'Oliver Ma', type:'Issue/position', topic:'Free college and student costs', statement:'His campaign platform emphasizes tuition-free public college, student-debt relief, and housing affordability for students.', question:'How much do these student-cost priorities matter for a role with UC and CSU board seats?', sources:['oliverMaCampaign']},
  {id:'ltgov-oliver-ma-labor-tenants', office:'Lieutenant Governor', candidate:'Oliver Ma', type:'Issue/position', topic:'Labor and tenant politics', statement:'His campaign frames the office around tenant protections, labor power, and taxing concentrated wealth rather than a more ceremonial view of the job.', question:'Does this left-populist use of the office make you more or less interested?', sources:['oliverMaCampaign']},
  {id:'ltgov-tim-myers-arts', office:'Lieutenant Governor', candidate:'Tim Myers', type:'Record/experience', topic:'Music and arts funding', statement:'CalMatters identifies this candidate as a businessman, musician, and producer; his campaign is distinctive for emphasizing California arts, culture, and entertainment work.', question:'Does an arts-and-creative-economy background make you more interested?', sources:['calmattersLtGovGuide','sosCert']},
  {id:'ltgov-tim-myers-outsider', office:'Lieutenant Governor', candidate:'Tim Myers', type:'Record/experience', topic:'Private-sector outsider', statement:'Unlike several leading candidates with long elected-office resumes, this candidate is running from a business and music-production background.', question:'Do you prefer or distrust a private-sector outsider profile for Lieutenant Governor?', sources:['calmattersLtGovGuide','sosCert']},
  {id:'ltgov-tim-myers-housing-jobs', office:'Lieutenant Governor', candidate:'Tim Myers', type:'Issue/position', topic:'Jobs and affordability', statement:'His campaign materials frame the office around jobs, affordability, and opportunity rather than the office only serving as a gubernatorial backup.', question:'Does this jobs-and-opportunity framing make the candidate stand out to you?', sources:['calmattersLtGovGuide']},
  {id:'ltgov-josh-fryday-newsom-cabinet', office:'Lieutenant Governor', candidate:'Josh Fryday', type:'Record/experience', topic:'Newsom administration and service', statement:'CalMatters describes him as head of Gov. Newsom\\u2019s volunteer office, former Novato mayor, former NextGen America COO, and a former Naval officer.', question:'Does this mix of administration, local-office, climate-advocacy, and military experience appeal to you?', sources:['calmattersLtGovGuide','kpbsLtGov']},
  {id:'ltgov-josh-fryday-cta', office:'Lieutenant Governor', candidate:'Josh Fryday', type:'Endorsement/support', topic:'Teacher-union support', statement:'CalMatters says he is endorsed by the California Teachers Association, a major education-union signal in a race tied to higher-education boards.', question:'Does CTA support move you toward or away from this candidate?', sources:['calmattersLtGovGuide']},
  {id:'ltgov-alice-stek-physician', office:'Lieutenant Governor', candidate:'Alice Stek', type:'Record/experience', topic:'Physician background', statement:'Official materials identify this Peace and Freedom candidate as a physician and OBGYN, a notably different background from the officeholders in the race.', question:'Does a physician background make you more interested in this candidate?', sources:['sosLtGov','sosCert']},
  {id:'ltgov-alice-stek-left-slate', office:'Lieutenant Governor', candidate:'Alice Stek', type:'Issue/position', topic:'Peace and Freedom politics', statement:'Her official statement is part of a socialist Peace and Freedom framing, emphasizing labor, public services, and opposition to corporate power.', question:'How do you react to this explicitly socialist statewide-office platform?', sources:['sosLtGov']},
  {id:'ltgov-alice-stek-healthcare', office:'Lieutenant Governor', candidate:'Alice Stek', type:'Issue/position', topic:'Health care and public services', statement:'Her candidate statement foregrounds health care and public-service priorities more than the usual higher-education-board mechanics of the office.', question:'Does that health-care lens make her more or less compelling for this office?', sources:['sosLtGov']},

  {id:'treasurer-caballero-housing-ag', office:'Treasurer', candidate:'Anna M. Caballero', type:'Record/experience', topic:'Housing and agriculture record', statement:'CalMatters describes this state senator as a former Salinas mayor and assemblymember with a legislative reputation in agriculture and housing policy, including prior service as the state housing official under Gov. Jerry Brown.', question:'Does this housing-and-agriculture policy background make you more interested in her for Treasurer?', sources:['calmattersTreasurerGuide']},
  {id:'treasurer-caballero-moderate', office:'Treasurer', candidate:'Anna M. Caballero', type:'Record/experience', topic:'Moderate Democratic profile', statement:'CalMatters describes her as a relative moderate in the Democratic caucus who has sometimes bucked the party\\u2019s progressive wing on environmental regulation and criminal justice issues.', question:'Does this moderate profile make you more or less interested in a state money-manager role?', sources:['calmattersTreasurerGuide']},
  {id:'treasurer-kounalakis-boards', office:'Treasurer', candidate:'Eleni Kounalakis', type:'Record/experience', topic:'State-board experience', statement:'CalMatters notes that as Lieutenant Governor she has served on UC and CSU governing boards and regularly voted against proposed tuition hikes.', question:'Does higher-education board experience and anti-tuition-hike voting matter for Treasurer?', sources:['calmattersTreasurerGuide']},
  {id:'treasurer-vazquez-boe', office:'Treasurer', candidate:'Tony Vazquez', type:'Record/experience', topic:'Tax-board experience', statement:'CalMatters describes him as a former Santa Monica councilmember and first Latino mayor who is coming off eight years on the Board of Equalization.', question:'Does Board of Equalization tax experience make him more attractive for Treasurer?', sources:['calmattersTreasurerGuide']},
  {id:'treasurer-vazquez-labor-roots', office:'Treasurer', candidate:'Tony Vazquez', type:'Endorsement/support', topic:'Labor and Latino roots', statement:'CalMatters says his campaign has stressed his Latino roots and connection to labor leader Dolores Huerta.', question:'Do those political roots and labor ties make you more or less interested?', sources:['calmattersTreasurerGuide']},

  {id:'ins-ben-allen-palisades', office:'Insurance Commissioner', candidate:'Ben Allen', type:'Record/experience', topic:'Wildfire-zone legislator', statement:'Reporting on the race describes this state senator as representing a district that includes much of the Palisades Fire burn zone, giving his campaign a direct wildfire-insurance backdrop.', question:'Does representing a recent fire-affected district make you more interested in this candidate?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-ben-allen-legislative', office:'Insurance Commissioner', candidate:'Ben Allen', type:'Record/experience', topic:'Legislative consumer role', statement:'CalMatters and KQED identify him as one of the leading Democratic candidates, running from a state-senator background rather than an insurance-industry background.', question:'Do you prefer a legislator for Insurance Commissioner over an industry specialist?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-bradford-former-senator', office:'Insurance Commissioner', candidate:'Steven Craig Bradford', type:'Record/experience', topic:'Former legislator', statement:'Race coverage identifies this candidate as a former Democratic state senator and assemblymember from Los Angeles County, not only by his current ballot designation.', question:'Does prior legislative experience make you more interested in him for Insurance Commissioner?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-bradford-carrot', office:'Insurance Commissioner', candidate:'Steven Craig Bradford', type:'Issue/position', topic:'Attracting insurers back', statement:'The San Francisco Chronicle editorial board summarized him as favoring more carrot than stick to lure insurers back into California\\u2019s market.', question:'How do you react to a more insurer-attraction-oriented approach?', sources:['calmattersInsuranceArticle']},
  {id:'ins-bradford-education-board', office:'Insurance Commissioner', candidate:'Steven Craig Bradford', type:'Ballot designation', topic:'Education organization boardmember', statement:'Official materials list him with the ballot designation "Education Organization Boardmember," which differs from candidates emphasizing insurance-industry or financial-analysis resumes.', question:'Does this current public-service designation help or hurt your interest?', sources:['sosCert']},
  {id:'ins-jane-kim-public-option', office:'Insurance Commissioner', candidate:'Jane Kim', type:'Issue/position', topic:'Public disaster insurance', statement:'Reporting describes her proposal for a state insurance option where government would cover natural-disaster risk while private insurers handle smaller claims.', question:'Do you support exploring a public disaster-insurance option?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-jane-kim-profit-caps', office:'Insurance Commissioner', candidate:'Jane Kim', type:'Issue/position', topic:'Profit and CEO-pay caps', statement:'Race coverage says she has proposed caps on insurance-company profits and CEO pay as part of a more aggressive consumer-protection agenda.', question:'Does this confrontational approach to insurer profits make you more or less interested?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-wolff-technical-expertise', office:'Insurance Commissioner', candidate:'Patrick Wolff', type:'Record/experience', topic:'Financial analyst and chess background', statement:'Coverage describes him as a former chess grandmaster and financial analyst who is campaigning on detailed insurance-rule expertise.', question:'Does technical expertise appeal to you more than political experience for this office?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-wolff-oversight-deadlines', office:'Insurance Commissioner', candidate:'Patrick Wolff', type:'Issue/position', topic:'Oversight and claims deadlines', statement:'The Chronicle editorial summary says his approach centers on stronger oversight, enforcing deadlines, and rebuilding trust in the department.', question:'How do you rate a pragmatic regulation-and-enforcement pitch?', sources:['calmattersInsuranceArticle']},
  {id:'ins-farren-wildfire-survivor', office:'Insurance Commissioner', candidate:'Merritt Farren', type:'Record/experience', topic:'Wildfire survivor and consumer advocate', statement:'Coverage describes this Republican candidate as a former attorney for major companies whose home burned in the Palisades fire, after which he intervened in a State Farm rate case.', question:'Does this personal wildfire and rate-case experience make you more interested?', sources:['calmattersInsuranceArticle']},
  {id:'ins-farren-corporate-legal', office:'Insurance Commissioner', candidate:'Merritt Farren', type:'Record/experience', topic:'Corporate legal background', statement:'Reporting notes prior legal work for companies such as Disney and Amazon, a contrast with candidates running mainly as legislators or activists.', question:'How do you weigh corporate legal experience for this regulator role?', sources:['calmattersInsuranceArticle']},
  {id:'ins-korsgaden-agent', office:'Insurance Commissioner', candidate:'Stacy A. Korsgaden', type:'Record/experience', topic:'Licensed insurance agent', statement:'Official materials and race coverage identify her as a licensed insurance agent, giving her one of the clearest industry-practice backgrounds in the race.', question:'Does direct insurance-agent experience make you more or less interested?', sources:['sosInsurance','calmattersInsuranceArticle']},
  {id:'ins-korsgaden-competition', office:'Insurance Commissioner', candidate:'Stacy A. Korsgaden', type:'Issue/position', topic:'Market competition and regulation', statement:'Her candidate materials emphasize restoring competition and lowering costs, a market-oriented contrast with public-option or profit-cap proposals.', question:'Do you prefer this competition-focused approach to insurance affordability?', sources:['sosInsurance']},
  {id:'ins-howell-2022-nominee', office:'Insurance Commissioner', candidate:'Robert P Howell', type:'Record/experience', topic:'Repeat Republican nominee', statement:'Race coverage identifies him as a Silicon Valley cybersecurity company CEO who was the Republican general-election nominee for Insurance Commissioner in 2022.', question:'Does prior statewide nominee experience make him more interesting to research?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-howell-cybersecurity-ceo', office:'Insurance Commissioner', candidate:'Robert P Howell', type:'Record/experience', topic:'Cybersecurity CEO', statement:'Official materials list this candidate as a cybersecurity company CEO, a sharply different profile from the legislators, attorneys, and insurance agents in the race.', question:'Does a cybersecurity-business background translate well to insurance regulation?', sources:['sosCert','calmattersInsuranceArticle']},
  {id:'ins-howell-regulation', office:'Insurance Commissioner', candidate:'Robert P Howell', type:'Issue/position', topic:'Republican regulatory contrast', statement:'As a Republican business candidate in a field with several consumer-progressive proposals, his campaign offers a regulatory contrast centered more on business and market concerns.', question:'Does that market-oriented contrast make you more or less interested?', sources:['calmattersInsuranceArticle','kqedInsurance']},
  {id:'ins-vargas-rate-freeze', office:'Insurance Commissioner', candidate:'Eduardo "Lalo" Vargas', type:'Issue/position', topic:'Rate freezes and claims scrutiny', statement:'His official statement emphasizes freezing insurance rates and investigating claim procedures, placing him on the aggressive consumer-protection side of the race.', question:'How do you react to a rate-freeze and claims-investigation platform?', sources:['sosInsurance']},
  {id:'ins-vargas-public-insurance', office:'Insurance Commissioner', candidate:'Eduardo "Lalo" Vargas', type:'Issue/position', topic:'Public insurance system', statement:'His official candidate statement supports a public-insurance direction rather than relying primarily on private-market competition.', question:'Does a public-insurance approach make you more or less interested?', sources:['sosInsurance']},

  {id:'spi-muratsuchi-prop2', office:'Superintendent of Public Instruction', candidate:'Al Muratsuchi', type:'Record/experience', topic:'Education chair and school facilities bond', statement:'CalMatters describes him as an assemblymember, former Assembly Education Committee chair, adjunct college professor, and co-author of the $10 billion Prop. 2 school facilities bond.', question:'Does this legislative education record make him more compelling for Superintendent?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-muratsuchi-doj', office:'Superintendent of Public Instruction', candidate:'Al Muratsuchi', type:'Record/experience', topic:'Legal and higher-ed background', statement:'CalMatters also notes prior work as a deputy attorney general and service as an adjunct government professor at El Camino College.', question:'Does that legal and college-teaching background matter to you for this office?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-newman-vets-workforce', office:'Superintendent of Public Instruction', candidate:'Josh Newman', type:'Record/experience', topic:'Veterans and workforce transitions', statement:'CalMatters says this former state senator and Army veteran founded an organization helping veterans transition into civilian work before entering politics.', question:'Does a workforce-transition background make you more interested in his education agenda?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-newman-ed-chair-prop2', office:'Superintendent of Public Instruction', candidate:'Josh Newman', type:'Record/experience', topic:'Senate education committee', statement:'CalMatters describes him as a former chair of the state Senate Education Committee and co-author, with Al Muratsuchi, of the $10 billion Prop. 2 school facilities bond.', question:'How much does Senate education leadership weigh for you?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-rendon-speaker', office:'Superintendent of Public Instruction', candidate:'Anthony Rendon', type:'Record/experience', topic:'Former Assembly Speaker', statement:'CalMatters says he served as Assembly Speaker from 2016 to 2023, shepherding K-12 funding increases, universal transitional kindergarten, and charter school accountability.', question:'Does this statewide legislative leadership record make you more interested?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-rendon-early-childhood', office:'Superintendent of Public Instruction', candidate:'Anthony Rendon', type:'Record/experience', topic:'Early childhood education', statement:'CalMatters notes he ran an early childhood program in Los Angeles for 20 years before politics and says early childhood education remains a priority.', question:'Does an early-childhood background distinguish him positively for you?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-shaw-transgender-policy', office:'Superintendent of Public Instruction', candidate:'Sonja Shaw', type:'Issue/position', topic:'Transgender-student protections', statement:'CalMatters describes her as Chino Valley school board president and an outspoken opponent of protections for transgender students, including a high-profile clash with Tony Thurmond in 2023.', question:'How do you react to this role in California school-culture fights?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-shaw-basics', office:'Superintendent of Public Instruction', candidate:'Sonja Shaw', type:'Issue/position', topic:'Basics and curriculum politics', statement:'CalMatters says she supports moving away from what she calls radical ideologies in classrooms and returning to academic basics.', question:'Does this local-control and academic-basics pitch make you more or less interested?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-henderson-health-testing', office:'Superintendent of Public Instruction', candidate:'Nichelle M. Henderson', type:'Issue/position', topic:'School health and testing reform', statement:'CalMatters describes this Los Angeles Community College District trustee and longtime teacher as supporting expanded health access in schools and standardized-testing reform.', question:'Do school health access and testing reform make her stand out to you?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-henderson-union-divestment', office:'Superintendent of Public Instruction', candidate:'Nichelle M. Henderson', type:'Issue/position', topic:'Union and divestment politics', statement:'CalMatters says she has a strong union background and supports divesting state pensions from fossil fuels and the U.S. war machine.', question:'How do you react to this more explicitly political education platform?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-barrera-cta', office:'Superintendent of Public Instruction', candidate:'Richard Barrera', type:'Endorsement/support', topic:'CTA endorsement', statement:'CalMatters describes him as San Diego Unified school board president and senior advisor to Tony Thurmond who gained statewide visibility after winning the California Teachers Association endorsement.', question:'Does CTA backing make you more or less interested in him?', sources:['calmattersSuperintendentGuide','sosSuperintendent']},
  {id:'spi-barrera-san-diego-record', office:'Superintendent of Public Instruction', candidate:'Richard Barrera', type:'Record/experience', topic:'San Diego Unified record', statement:'His official statement argues that San Diego Unified improved academics, facilities, educator pay, and school housing during his board leadership.', question:'Does this district-turnaround case make you more interested in him?', sources:['sosSuperintendent','calmattersSuperintendentGuide']},

  {id:'boe-lieber-incumbent', office:'Board of Equalization, District 2', candidate:'Sally J. Lieber', type:'Record/experience', topic:'Incumbent tax-board member', statement:'Official materials identify this candidate as the incumbent State Board of Equalization member, so she is running from direct experience in the office.', question:'Does incumbency in this technical tax-board role make you more or less interested?', sources:['sosCert','sfchronBoe']},
  {id:'boe-lieber-legislature', office:'Board of Equalization, District 2', candidate:'Sally J. Lieber', type:'Record/experience', topic:'Legislative background', statement:'Editorial context for the race highlights her as the incumbent, while official materials distinguish her from challengers by current tax-board service rather than local or business office.', question:'Do you value continuity on the Board of Equalization?', sources:['sfchronBoe','sosCert']},
  {id:'boe-pimentel-community-college', office:'Board of Equalization, District 2', candidate:'John Pimentel', type:'Record/experience', topic:'Community college trustee', statement:'Official materials list him as a San Mateo County Community College District board trustee, giving him a local public-finance background in the district.', question:'Does community-college trustee experience make you more interested in him for BOE?', sources:['sosCert','sfchronBoe']},
  {id:'boe-pimentel-challenger', office:'Board of Equalization, District 2', candidate:'John Pimentel', type:'Endorsement/support', topic:'Major challenger profile', statement:'The Chronicle editorial context frames him as a major challenger to the incumbent rather than a little-known filing candidate.', question:'Does being the main non-incumbent challenger make him more worth close review?', sources:['sfchronBoe']},
  {id:'boe-zaruka-hospitality', office:'Board of Equalization, District 2', candidate:'John W. Zaruka', type:'Record/experience', topic:'Hospitality executive background', statement:'Official materials list this Republican candidate as a retired hospitality executive, a private-sector profile distinct from the incumbent and community-college trustee.', question:'Does a hospitality-business background make you more interested in a tax-board candidate?', sources:['sosCert']},
  {id:'boe-zaruka-republican-contrast', office:'Board of Equalization, District 2', candidate:'John W. Zaruka', type:'Record/experience', topic:'Republican contrast candidate', statement:'In a race where the filtered set includes two Democrats with public-office backgrounds, this candidate offers the Republican business-background contrast.', question:'Does that partisan and professional contrast matter to you in this BOE race?', sources:['sosCert','sfchronBoe']}
];
cards.push(...supplementalCards);

const fiveCardExpansion = [
  {"id":"gov-hilton-poll-leader","office":"Governor","candidate":"Steve Hilton","type":"Endorsement/support","topic":"Polling position","statement":"The May 4 polling source used for the main-candidates filter placed this candidate at 18%, tied for first in that snapshot.","question":"Does being tied at the top of this poll make you more interested in taking his campaign seriously?","sources":["sfgateLatestGovPoll"]},
  {"id":"gov-hilton-republican-media","office":"Governor","candidate":"Steve Hilton","type":"Record/experience","topic":"Republican media and policy background","statement":"Voter-guide coverage describes this candidate as a Republican former Fox News host and former adviser to British Prime Minister David Cameron.","question":"Does this media-and-policy background make you more or less interested in him for Governor?","sources":["kqedGov","sfchronHilton"]},
  {"id":"gov-becerra-hhs-ag","office":"Governor","candidate":"Xavier Becerra","type":"Record/experience","topic":"Federal and state executive experience","statement":"Voter-guide coverage identifies this candidate as a former California attorney general and former U.S. Health and Human Services secretary.","question":"Does this attorney-general and federal-cabinet experience increase your interest?","sources":["kqedGov"]},
  {"id":"gov-bianco-sheriff","office":"Governor","candidate":"Chad Bianco","type":"Record/experience","topic":"Sheriff background","statement":"This candidate appears in voter-guide materials as Riverside County sheriff, giving him the clearest law-enforcement executive profile in the Governor field.","question":"Does a sheriff background make you more or less interested in a Governor candidate?","sources":["kqedGov","sosCert"]},
  {"id":"gov-bianco-republican-base","office":"Governor","candidate":"Chad Bianco","type":"Endorsement/support","topic":"Republican lane","statement":"The May 4 poll placed this Republican candidate at 15%, making him one of the strongest non-Democratic candidates in the polling snapshot.","question":"Does his visible Republican lane in the poll make him more relevant to your review?","sources":["sfgateLatestGovPoll"]},
  {"id":"gov-steyer-climate-billionaire","office":"Governor","candidate":"Tom Steyer","type":"Record/experience","topic":"Climate donor and business background","statement":"Voter-guide coverage identifies this candidate as a businessman and climate-focused political donor, a different profile from the officeholders in the race.","question":"Does a climate-donor and business background make you more or less interested?","sources":["kqedGov","sfchronSteyer"]},
  {"id":"gov-steyer-poll-tier","office":"Governor","candidate":"Tom Steyer","type":"Endorsement/support","topic":"Polling position","statement":"The May 4 poll placed this candidate at 12%, behind the two leaders but ahead of several elected-office candidates in the field.","question":"How much should this polling position affect whether you rate more of his cards first?","sources":["sfgateLatestGovPoll"]},
  {"id":"gov-porter-congressional-oversight","office":"Governor","candidate":"Katie Porter","type":"Record/experience","topic":"Congressional oversight persona","statement":"Voter-guide coverage presents this candidate through her congressional profile, where she became known for oversight hearings and consumer-focused questioning.","question":"Does that congressional oversight style make you more interested in her for Governor?","sources":["kqedGov"]},
  {"id":"gov-porter-poll-drop","office":"Governor","candidate":"Katie Porter","type":"Endorsement/support","topic":"Polling position","statement":"The May 4 poll placed this candidate at 9%, meaning she remained in the main filtered set but below the top polling tier.","question":"Does a lower-but-still-viable polling position change how you weigh her campaign?","sources":["sfgateLatestGovPoll"]},
  {"id":"gov-mahan-tech-city","office":"Governor","candidate":"Matt Mahan","type":"Record/experience","topic":"San Jose tech-city mayor","statement":"This candidate's main elected-office experience is as mayor of San Jose, giving him a large-city local-government pitch rather than a Sacramento or Washington resume.","question":"Does a large-city mayoral record make you more interested than a legislative or federal background?","sources":["kqedGov","guardianMahan"]},
  {"id":"gov-mahan-poll-underdog","office":"Governor","candidate":"Matt Mahan","type":"Endorsement/support","topic":"Polling position","statement":"The May 4 poll placed this candidate at 7%, below the leading cluster but clearly above the 1% main-filter threshold.","question":"Does this underdog-but-visible polling position make him worth more attention?","sources":["sfgateLatestGovPoll"]},
  {"id":"gov-villaraigosa-la-mayor","office":"Governor","candidate":"Antonio Villaraigosa","type":"Record/experience","topic":"Former Los Angeles mayor","statement":"Voter-guide coverage identifies this candidate as a former Los Angeles mayor and former Assembly speaker, giving him both city-executive and state-legislative experience.","question":"Does that combination of LA mayor and Assembly speaker experience appeal to you?","sources":["kqedGov"]},
  {"id":"gov-villaraigosa-centrist-comeback","office":"Governor","candidate":"Antonio Villaraigosa","type":"Record/experience","topic":"Returning statewide candidate","statement":"This candidate is running as a veteran Democratic figure after a prior Governor run, unlike first-time statewide candidates in the race.","question":"Does a comeback campaign by a longtime political figure make you more or less interested?","sources":["kqedGov","sfgateLatestGovPoll"]},
  {"id":"gov-thurmond-state-schools","office":"Governor","candidate":"Tony K. Thurmond","type":"Record/experience","topic":"State schools chief","statement":"Official materials identify this candidate as California's current Superintendent of Public Instruction, giving him statewide executive experience in education.","question":"Does statewide education-office experience translate well to Governor for you?","sources":["sosCert","kqedGov"]},
  {"id":"gov-thurmond-poll-position","office":"Governor","candidate":"Tony K. Thurmond","type":"Endorsement/support","topic":"Polling position","statement":"The May 4 poll placed this candidate at 2%, keeping him in the main filtered set but at the lower end of that polling snapshot.","question":"Does low but nonzero polling support affect how much time you want to spend on his cards?","sources":["sfgateLatestGovPoll"]},

  {"id":"ltgov-fennell-businessman-party","office":"Lieutenant Governor","candidate":"David Fennell","type":"Record/experience","topic":"Republican businessman profile","statement":"Official materials list this candidate as a Republican businessman, contrasting with Democratic officeholders and left-party candidates in the race.","question":"Does a Republican business profile make him more or less interesting for this office?","sources":["sosCert","sosLtGov"]},
  {"id":"ltgov-fennell-job-definition","office":"Lieutenant Governor","candidate":"David Fennell","type":"Issue/position","topic":"Broad use of office","statement":"His official statement treats the office as a platform for statewide accountability, water, fire, and cost-of-living issues rather than mainly higher-education board work.","question":"Do you like this broader interpretation of the Lieutenant Governor role?","sources":["sosLtGov"]},
  {"id":"ltgov-fiona-ma-cpa","office":"Lieutenant Governor","candidate":"Fiona Ma","type":"Record/experience","topic":"CPA credential","statement":"Official materials identify this candidate as a CPA and state treasurer, making fiscal management a central part of her profile.","question":"Does a CPA and treasurer profile make her more compelling for Lieutenant Governor?","sources":["sosCert","calmattersLtGovGuide"]},
  {"id":"ltgov-fiona-ma-poll","office":"Lieutenant Governor","candidate":"Fiona Ma","type":"Endorsement/support","topic":"Viability signal","statement":"The main-candidate filter includes this candidate because voter-guide and viability sources treated her as one of the leading statewide Democrats in the race.","question":"Does an established statewide-office profile make you more likely to rate her first?","sources":["calmattersLtGovGuide","kpbsLtGov"]},
  {"id":"ltgov-romero-school-choice","office":"Lieutenant Governor","candidate":"Gloria Romero","type":"Issue/position","topic":"School choice","statement":"CalMatters describes school choice as a core issue for this candidate, setting her apart from candidates centered on teacher-union support or traditional public-school governance.","question":"Does a school-choice-centered campaign make you more or less interested?","sources":["calmattersLtGovGuide"]},
  {"id":"ltgov-romero-education-business","office":"Lieutenant Governor","candidate":"Gloria Romero","type":"Ballot designation","topic":"Education and business designation","statement":"Official materials list her ballot designation as educator/businesswoman, which pairs with her campaign's education-policy identity.","question":"Does this education-and-business profile make her stand out?","sources":["sosCert","calmattersLtGovGuide"]},
  {"id":"ltgov-tubbs-stockton-mayor","office":"Lieutenant Governor","candidate":"Michael Tubbs","type":"Record/experience","topic":"Former Stockton mayor","statement":"CalMatters describes this candidate as a former Stockton mayor, giving him local-executive experience rooted in a Central Valley city.","question":"Does former-mayor experience from Stockton make him more interesting to you?","sources":["calmattersLtGovGuide","kpbsLtGov"]},
  {"id":"ltgov-tubbs-youth-profile","office":"Lieutenant Governor","candidate":"Michael Tubbs","type":"Record/experience","topic":"Younger anti-poverty figure","statement":"His campaign profile is centered on anti-poverty work and a younger generation of Democratic leadership rather than long service in Sacramento statewide offices.","question":"Does that generational and anti-poverty contrast appeal to you?","sources":["calmattersLtGovGuide"]},
  {"id":"ltgov-kellman-free-college","office":"Lieutenant Governor","candidate":"Janelle Kellman","type":"Issue/position","topic":"Community college affordability","statement":"Her official candidate statement supports free community college and career-aligned education, connecting higher education to workforce preparation.","question":"Does this community-college and workforce emphasis make her more compelling?","sources":["sosLtGov"]},
  {"id":"ltgov-kellman-insurance-climate","office":"Lieutenant Governor","candidate":"Janelle Kellman","type":"Issue/position","topic":"Climate and insurance risk","statement":"Her campaign materials emphasize climate risk and disaster resilience, a distinctive angle for an office that sits on several state boards and commissions.","question":"Does climate-and-insurance-risk expertise matter to you for Lieutenant Governor?","sources":["sosLtGov","calmattersLtGovGuide"]},
  {"id":"ltgov-oliver-ma-ballot-designation","office":"Lieutenant Governor","candidate":"Oliver Ma","type":"Ballot designation","topic":"Civil rights lawyer designation","statement":"Official materials list this candidate as a civil rights lawyer, matching a campaign platform focused on tenants, labor, and public goods.","question":"Does a civil-rights-lawyer designation make him more credible on those issues?","sources":["sosCert","oliverMaCampaign"]},
  {"id":"ltgov-oliver-ma-source-caution","office":"Lieutenant Governor","candidate":"Oliver Ma","type":"Record/experience","topic":"Candidate-supplied platform caveat","statement":"Much of the available detail for this candidate comes from his own campaign website, so these cards should be treated as claims to verify rather than independent reporting.","question":"Does limited independent coverage make you more cautious when rating him?","sources":["oliverMaCampaign"]},
  {"id":"ltgov-tim-myers-prop28","office":"Lieutenant Governor","candidate":"Tim Myers","type":"Issue/position","topic":"Arts education signal","statement":"His arts-and-entertainment profile makes education funding for creative work a more distinctive campaign signal than for candidates centered on fiscal or legal resumes.","question":"Does arts education and creative-work policy matter to you for this office?","sources":["calmattersLtGovGuide","sosCert"]},
  {"id":"ltgov-tim-myers-producer","office":"Lieutenant Governor","candidate":"Tim Myers","type":"Ballot designation","topic":"Musician and producer designation","statement":"Official materials list him as a businessman/musician/producer, one of the least conventional ballot designations among the main filtered candidates.","question":"Does that unconventional designation make you more or less interested?","sources":["sosCert","calmattersLtGovGuide"]},
  {"id":"ltgov-josh-fryday-veterans","office":"Lieutenant Governor","candidate":"Josh Fryday","type":"Record/experience","topic":"Military and veterans service","statement":"His voter-guide profile includes Navy service, and his public-service pitch often connects civic service, veterans, and state volunteer programs.","question":"Does this service-and-veterans background make you more interested?","sources":["calmattersLtGovGuide","kpbsLtGov"]},
  {"id":"ltgov-josh-fryday-newsom-link","office":"Lieutenant Governor","candidate":"Josh Fryday","type":"Record/experience","topic":"Newsom administration link","statement":"Because he served in Gov. Newsom's administration, his campaign is closely tied to the current Democratic governing network.","question":"Does that Newsom-administration connection help or hurt your interest?","sources":["calmattersLtGovGuide","kpbsLtGov"]},
  {"id":"ltgov-alice-stek-obgyn","office":"Lieutenant Governor","candidate":"Alice Stek","type":"Record/experience","topic":"OBGYN perspective","statement":"Official materials identify her as an OBGYN, giving her a direct reproductive-health background that most other candidates do not have.","question":"Does that reproductive-health professional background matter to you here?","sources":["sosLtGov","sosCert"]},
  {"id":"ltgov-alice-stek-third-party","office":"Lieutenant Governor","candidate":"Alice Stek","type":"Endorsement/support","topic":"Peace and Freedom lane","statement":"Her Peace and Freedom affiliation means her candidacy offers a third-party left alternative rather than a Democratic or Republican governing-coalition path.","question":"Does a third-party left lane make her more useful to compare, even if less likely to win?","sources":["sosCert","sosLtGov"]},

  {"id":"treasurer-caballero-central-valley","office":"Treasurer","candidate":"Anna M. Caballero","type":"Record/experience","topic":"Central Valley base","statement":"CalMatters describes her political base as rooted in Salinas and Central Valley agricultural communities, unlike candidates with more statewide or coastal profiles.","question":"Does a Central Valley and agriculture-policy base matter to you for Treasurer?","sources":["calmattersTreasurerGuide"]},
  {"id":"treasurer-caballero-legislative-finance","office":"Treasurer","candidate":"Anna M. Caballero","type":"Issue/position","topic":"Housing finance lens","statement":"Her Treasurer pitch is tied to housing and infrastructure finance experience rather than only tax administration or higher-education board experience.","question":"Does this housing-finance lens make her more appealing for Treasurer?","sources":["calmattersTreasurerGuide","sosTreasurer"]},
  {"id":"treasurer-kounalakis-diplomat","office":"Treasurer","candidate":"Eleni Kounalakis","type":"Record/experience","topic":"Diplomatic and executive background","statement":"CalMatters describes her as the current Lieutenant Governor and former U.S. ambassador to Hungary, giving her a diplomacy-and-statewide-office resume.","question":"Does that diplomatic and statewide-executive background appeal to you for Treasurer?","sources":["calmattersTreasurerGuide"]},
  {"id":"treasurer-kounalakis-family-business","office":"Treasurer","candidate":"Eleni Kounalakis","type":"Record/experience","topic":"Business and real-estate background","statement":"Her broader public profile includes business and real-estate experience before statewide office, a different base than legislative or tax-board candidates.","question":"Does a business-and-real-estate background help or hurt for managing state finance?","sources":["calmattersTreasurerGuide"]},
  {"id":"treasurer-vazquez-franchise-tax","office":"Treasurer","candidate":"Tony Vazquez","type":"Record/experience","topic":"Tax administration boards","statement":"His Board of Equalization background also connects to tax-administration work with statewide fiscal agencies, distinguishing him from candidates coming from the Legislature.","question":"Does tax-administration experience matter more to you than legislative experience for Treasurer?","sources":["calmattersTreasurerGuide","sosTreasurer"]},
  {"id":"treasurer-vazquez-underdog","office":"Treasurer","candidate":"Tony Vazquez","type":"Endorsement/support","topic":"Viability caveat","statement":"The main-candidate filter keeps him in view as a credible tax-board candidate, while editorial context described the Treasurer race as largely centered on Caballero and Kounalakis.","question":"Does that underdog status change how you rate his cards?","sources":["sacBeeTreasurer","calmattersTreasurerGuide"]},

  {"id":"ins-ben-allen-environment","office":"Insurance Commissioner","candidate":"Ben Allen","type":"Issue/position","topic":"Climate and wildfire insurance","statement":"His campaign is distinctive because his legislative district's fire exposure connects climate, wildfire risk, and insurance availability in a direct way.","question":"Does a climate-and-wildfire legislative lens appeal to you for Insurance Commissioner?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-ben-allen-main-dem","office":"Insurance Commissioner","candidate":"Ben Allen","type":"Endorsement/support","topic":"Leading Democratic tier","statement":"KQED and CalMatters coverage identify him among the major Democratic contenders rather than as a ballot-only candidate.","question":"Does being in the leading Democratic tier make him more worth rating first?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-bradford-la-legislator","office":"Insurance Commissioner","candidate":"Steven Craig Bradford","type":"Record/experience","topic":"Los Angeles legislative background","statement":"Race coverage identifies him as a Los Angeles County Democrat with prior Assembly and Senate service, a public-office background similar in type to Ben Allen but from a different region.","question":"Does that regional and legislative profile make him more or less interesting?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-bradford-market-balance","office":"Insurance Commissioner","candidate":"Steven Craig Bradford","type":"Issue/position","topic":"Market stabilization","statement":"Compared with candidates proposing profit caps or public insurance, coverage frames his approach as more focused on stabilizing the private market and bringing insurers back.","question":"Do you prefer market stabilization over more aggressive public intervention?","sources":["calmattersInsuranceArticle"]},
  {"id":"ins-jane-kim-sf-supervisor","office":"Insurance Commissioner","candidate":"Jane Kim","type":"Record/experience","topic":"San Francisco supervisor and attorney","statement":"Coverage identifies this candidate as a former San Francisco supervisor and attorney, a progressive local-government profile in the Insurance Commissioner race.","question":"Does that progressive city-government background make you more interested?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-jane-kim-industry-money","office":"Insurance Commissioner","candidate":"Jane Kim","type":"Endorsement/support","topic":"Industry-money stance","statement":"Her campaign and coverage emphasize independence from insurance-industry money, pairing with her profit-cap and public-option proposals.","question":"Does a no-insurance-industry-money stance matter to you for this regulator?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-wolff-actuarial-style","office":"Insurance Commissioner","candidate":"Patrick Wolff","type":"Record/experience","topic":"Analytical problem-solver profile","statement":"Coverage gives him a technocratic profile: financial analyst, former chess grandmaster, and candidate focused on the mechanics of insurance oversight.","question":"Does a technical problem-solver profile beat political experience for you in this race?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-wolff-nonpolitician","office":"Insurance Commissioner","candidate":"Patrick Wolff","type":"Record/experience","topic":"Non-politician contrast","statement":"Unlike several leading candidates who are former or current elected officials, this candidate's profile is centered on analysis rather than officeholding.","question":"Do you see that non-politician status as a strength or weakness?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-farren-rate-case","office":"Insurance Commissioner","candidate":"Merritt Farren","type":"Record/experience","topic":"Rate-case intervention","statement":"Race coverage says he intervened in a State Farm rate case after losing his home in the Palisades fire, giving his campaign a personal consumer-advocacy hook.","question":"Does that direct rate-case involvement make him more credible to you?","sources":["calmattersInsuranceArticle"]},
  {"id":"ins-farren-republican-consumer","office":"Insurance Commissioner","candidate":"Merritt Farren","type":"Record/experience","topic":"Republican consumer advocate","statement":"Official materials list him as a Republican consumer advocate/attorney, a different lane from both Democratic progressives and insurance-industry candidates.","question":"Does that Republican consumer-advocate lane interest you?","sources":["sosCert","calmattersInsuranceArticle"]},
  {"id":"ins-korsgaden-industry-practice","office":"Insurance Commissioner","candidate":"Stacy A. Korsgaden","type":"Record/experience","topic":"Practical insurance sales background","statement":"Her licensed-agent background gives her direct experience with how consumers buy policies, contrasting with candidates whose experience is mostly legislative or legal.","question":"Does practical sales-side insurance experience make her more or less appealing?","sources":["sosInsurance","calmattersInsuranceArticle"]},
  {"id":"ins-korsgaden-regulatory-critique","office":"Insurance Commissioner","candidate":"Stacy A. Korsgaden","type":"Issue/position","topic":"Regulatory critique","statement":"Her official statement argues that regulation has driven insurers away and that restoring competition is central to lowering costs.","question":"Do you agree more with this regulatory critique or with stronger-regulation proposals?","sources":["sosInsurance"]},
  {"id":"ins-howell-gop-rematch","office":"Insurance Commissioner","candidate":"Robert P Howell","type":"Endorsement/support","topic":"Republican rematch profile","statement":"Because he was the Republican nominee in 2022, this candidacy offers a rematch-style statewide profile rather than a first-time ballot appearance.","question":"Does prior nominee status make him more worth comparing with newer Republican candidates?","sources":["calmattersInsuranceArticle","kqedInsurance"]},
  {"id":"ins-howell-business-regulator","office":"Insurance Commissioner","candidate":"Robert P Howell","type":"Issue/position","topic":"Business-regulator contrast","statement":"His business-executive background creates a contrast with candidates who frame the office mainly around consumer litigation, public insurance, or legislative oversight.","question":"Do you want a business executive as insurance regulator?","sources":["sosCert","calmattersInsuranceArticle"]},
  {"id":"ins-vargas-science-teacher","office":"Insurance Commissioner","candidate":"Eduardo \"Lalo\" Vargas","type":"Record/experience","topic":"Science teacher background","statement":"Official materials list this Peace and Freedom candidate as a science teacher, a non-industry and non-legislative background in a technical regulatory race.","question":"Does a science-teacher background make him more or less interesting for Insurance Commissioner?","sources":["sosCert","sosInsurance"]},
  {"id":"ins-vargas-left-party","office":"Insurance Commissioner","candidate":"Eduardo \"Lalo\" Vargas","type":"Issue/position","topic":"Left-party consumer platform","statement":"His Peace and Freedom statement puts him in the strongest public-sector and anti-private-insurance lane among the main filtered candidates.","question":"Does that left-party consumer platform help you clarify your own insurance-policy preferences?","sources":["sosInsurance"]},

  {"id":"spi-muratsuchi-cta-fight","office":"Superintendent of Public Instruction","candidate":"Al Muratsuchi","type":"Endorsement/support","topic":"Education-labor competition","statement":"CalMatters frames this race as including multiple candidates competing for education-labor support, with Muratsuchi running on a legislative education record.","question":"Does a legislative education record matter more than union endorsement to you?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-muratsuchi-local-south-bay","office":"Superintendent of Public Instruction","candidate":"Al Muratsuchi","type":"Record/experience","topic":"South Bay education legislator","statement":"His profile as an Assembly education leader from the South Bay gives him a regional and legislative base distinct from statewide-administration and school-board candidates.","question":"Does that regional legislative base make him more compelling?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-newman-recall-return","office":"Superintendent of Public Instruction","candidate":"Josh Newman","type":"Record/experience","topic":"Recall and return to office","statement":"CalMatters notes he was recalled from the state Senate in 2018 and later won the seat back, giving him an unusual political-resilience story.","question":"Does that recall-and-return history make you more or less interested?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-newman-facilities","office":"Superintendent of Public Instruction","candidate":"Josh Newman","type":"Issue/position","topic":"School facilities funding","statement":"His co-authorship of the $10 billion Prop. 2 school facilities bond makes school infrastructure a concrete part of his education record.","question":"How much do school facilities and infrastructure matter in your Superintendent rating?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-rendon-charter-accountability","office":"Superintendent of Public Instruction","candidate":"Anthony Rendon","type":"Issue/position","topic":"Charter school accountability","statement":"CalMatters credits his speakership period with charter school accountability changes, making governance of charter schools part of his record.","question":"Does this charter-accountability record make you more interested?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-rendon-legislative-scale","office":"Superintendent of Public Instruction","candidate":"Anthony Rendon","type":"Record/experience","topic":"Large-scale legislative management","statement":"As former Assembly Speaker, his distinguishing experience is managing broad legislative coalitions rather than running a school district or classroom.","question":"Do you value coalition management for Superintendent of Public Instruction?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-shaw-parental-rights","office":"Superintendent of Public Instruction","candidate":"Sonja Shaw","type":"Issue/position","topic":"Parental rights lane","statement":"Her campaign is closely associated with parental-rights and curriculum-transparency politics, setting her apart from candidates emphasizing labor or legislative education records.","question":"Does a parental-rights lane appeal to you in this statewide schools race?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-shaw-local-board-president","office":"Superintendent of Public Instruction","candidate":"Sonja Shaw","type":"Record/experience","topic":"School board president","statement":"Official materials list her as a school district president, giving her local-board experience rather than state legislative or statewide-administration experience.","question":"Does local school-board leadership make her more or less credible for statewide Superintendent?","sources":["sosCert","calmattersSuperintendentGuide"]},
  {"id":"spi-henderson-community-college","office":"Superintendent of Public Instruction","candidate":"Nichelle M. Henderson","type":"Record/experience","topic":"Community college trustee","statement":"CalMatters describes her as an LA Community College District trustee and longtime teacher, giving her a postsecondary and classroom-centered profile.","question":"Does community-college governance experience matter for K-12 Superintendent?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-henderson-testing","office":"Superintendent of Public Instruction","candidate":"Nichelle M. Henderson","type":"Issue/position","topic":"Testing reform","statement":"Her voter-guide profile includes standardized-testing reform, a concrete contrast with candidates whose cards center on facilities, parental rights, or labor backing.","question":"How much do you agree with focusing on standardized-testing reform?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-barrera-thurmond-advisor","office":"Superintendent of Public Instruction","candidate":"Richard Barrera","type":"Record/experience","topic":"Advisor to current superintendent","statement":"CalMatters describes him as a senior advisor to Tony Thurmond, tying his campaign closely to the current statewide education administration.","question":"Does continuity with the current Superintendent's team make you more or less interested?","sources":["calmattersSuperintendentGuide"]},
  {"id":"spi-barrera-labor-board","office":"Superintendent of Public Instruction","candidate":"Richard Barrera","type":"Record/experience","topic":"Labor and school-board blend","statement":"His profile combines San Diego school-board leadership with labor-aligned support, a different path than former legislative leaders or culture-war candidates.","question":"Does that school-board plus labor profile fit what you want in the office?","sources":["calmattersSuperintendentGuide","sosSuperintendent"]},

  {"id":"boe-lieber-continuity","office":"Board of Equalization, District 2","candidate":"Sally J. Lieber","type":"Endorsement/support","topic":"Continuity versus change","statement":"As the incumbent, her core distinguishing case is continuity on a technical tax board rather than replacing the officeholder with a challenger.","question":"Does continuity matter more to you in a low-visibility tax-board office?","sources":["sosCert","sfchronBoe"]},
  {"id":"boe-lieber-progressive-officeholder","office":"Board of Equalization, District 2","candidate":"Sally J. Lieber","type":"Record/experience","topic":"Progressive officeholder profile","statement":"Her public profile is that of a Democratic incumbent and former legislator, contrasting with the business-background Republican and local trustee challenger.","question":"Does that Democratic officeholder profile make you more or less interested?","sources":["sosCert","sfchronBoe"]},
  {"id":"boe-pimentel-local-finance","office":"Board of Equalization, District 2","candidate":"John Pimentel","type":"Record/experience","topic":"Local finance governance","statement":"His community-college trustee designation gives him local public-budget oversight experience rather than direct incumbency on the tax board.","question":"Does local public-finance oversight make him a credible challenger?","sources":["sosCert","sfchronBoe"]},
  {"id":"boe-pimentel-change-candidate","office":"Board of Equalization, District 2","candidate":"John Pimentel","type":"Issue/position","topic":"Change candidate","statement":"Chronicle editorial context presents him as the main challenger voters might consider if they want change from the incumbent.","question":"Does a change-candidate frame make you more interested in him?","sources":["sfchronBoe"]},
  {"id":"boe-zaruka-private-sector-taxpayer","office":"Board of Equalization, District 2","candidate":"John W. Zaruka","type":"Record/experience","topic":"Private-sector taxpayer lens","statement":"His retired hospitality executive designation suggests a taxpayer and business-operations lens rather than a government-officeholder lens.","question":"Does a private-sector taxpayer perspective matter for BOE?","sources":["sosCert"]},
  {"id":"boe-zaruka-limited-coverage","office":"Board of Equalization, District 2","candidate":"John W. Zaruka","type":"Record/experience","topic":"Limited independent coverage","statement":"Compared with the incumbent and main Democratic challenger, the available independent detail for this candidate is thinner, so the worksheet mostly relies on official designation and party contrast.","question":"Does limited independent coverage make you less comfortable rating him highly?","sources":["sosCert","sfchronBoe"]}
];
cards.push(...fiveCardExpansion);

const lowSignalCardIds = new Set([
  'gov-becerra-1','gov-bianco-1','gov-hilton-1','gov-mahan-1','gov-porter-1','gov-steyer-1','gov-thurmond-1','gov-villaraigosa-1',
  'gov-mahan-2','gov-villaraigosa-homebuyer-immigration','gov-thurmond-wealth-tax-education','gov-yee-1',
  'gov-hilton-poll-leader','gov-hilton-republican-media','gov-becerra-hhs-ag','gov-bianco-sheriff','gov-bianco-republican-base',
  'gov-steyer-climate-billionaire','gov-steyer-poll-tier','gov-porter-poll-drop','gov-mahan-tech-city','gov-mahan-poll-underdog',
  'gov-villaraigosa-la-mayor','gov-villaraigosa-centrist-comeback','gov-thurmond-state-schools','gov-thurmond-poll-position',

  'ltgov-fryday-1','ltgov-kellman-free-college','ltgov-kellman-insurance-climate','ltgov-kellman-climate-risk','ltgov-tubbs-ubi','ltgov-fiona-ma-statewide-fiscal',
  'ltgov-fiona-ma-tuition','ltgov-fiona-ma-cpa','ltgov-fiona-ma-poll','ltgov-romero-party-switch','ltgov-romero-senate-leader',
  'ltgov-romero-hilton-ticket','ltgov-romero-education-business','ltgov-tubbs-stockton-mayor','ltgov-tubbs-youth-profile',
  'ltgov-oliver-ma-civil-rights','ltgov-oliver-ma-ballot-designation','ltgov-oliver-ma-source-caution','ltgov-tim-myers-arts',
  'ltgov-tim-myers-outsider','ltgov-tim-myers-prop28','ltgov-tim-myers-producer','ltgov-josh-fryday-newsom-cabinet',
  'ltgov-josh-fryday-veterans','ltgov-josh-fryday-newsom-link','ltgov-alice-stek-physician','ltgov-alice-stek-obgyn',
  'ltgov-alice-stek-left-slate','ltgov-alice-stek-third-party','ltgov-fennell-businessman-party',

  'sos-weber-1','sos-wagner-1','controller-cohen-1','controller-morgan-1','ag-bonta-1','ag-gates-1',
  'treasurer-caballero-1','treasurer-vazquez-1','treasurer-caballero-housing-ag','treasurer-caballero-moderate','treasurer-caballero-central-valley',
  'treasurer-kounalakis-diplomat','treasurer-kounalakis-family-business','treasurer-vazquez-boe','treasurer-vazquez-franchise-tax',
  'treasurer-vazquez-underdog','treasurer-vazquez-labor-roots',

  'ins-allen-1','ins-ben-allen-palisades','ins-ben-allen-legislative','ins-ben-allen-main-dem','ins-bradford-former-senator',
  'ins-bradford-carrot','ins-bradford-education-board','ins-bradford-la-legislator','ins-kim-1','ins-jane-kim-sf-supervisor',
  'ins-wolff-1','ins-wolff-technical-expertise','ins-wolff-actuarial-style','ins-wolff-nonpolitician','ins-farren-1',
  'ins-farren-wildfire-survivor','ins-farren-corporate-legal','ins-farren-republican-consumer','ins-korsgaden-1','ins-korsgaden-agent',
  'ins-korsgaden-industry-practice','ins-korsgaden-competition','ins-howell-2022-nominee','ins-howell-cybersecurity-ceo',
  'ins-howell-regulation','ins-howell-gop-rematch','ins-howell-business-regulator','ins-vargas-1','ins-vargas-science-teacher','ins-vargas-left-party',

  'spi-richard-barrera','spi-wendy-castaneda-leal','spi-nichelle-m-henderson','spi-frank-lara','spi-ainye-long','spi-gus-mattammal',
  'spi-al-muratsuchi','spi-josh-newman','spi-anthony-rendon','spi-sonja-shaw','spi-muratsuchi-cta-fight','spi-muratsuchi-doj',
  'spi-muratsuchi-local-south-bay','spi-newman-recall-return','spi-rendon-legislative-scale','spi-shaw-parental-rights',
  'spi-shaw-local-board-president','spi-henderson-community-college','spi-henderson-testing','spi-barrera-thurmond-advisor','spi-barrera-labor-board',

  'boe-sally-j-lieber','boe-john-pimentel','boe-j-brett-marymee','boe-mark-mccomas','boe-bill-shireman','boe-john-w-zaruka',
  'boe-lieber-incumbent','boe-lieber-legislature','boe-lieber-continuity','boe-lieber-progressive-officeholder','boe-pimentel-community-college',
  'boe-pimentel-challenger','boe-pimentel-local-finance','boe-pimentel-change-candidate','boe-zaruka-hospitality','boe-zaruka-republican-contrast',
  'boe-zaruka-private-sector-taxpayer','boe-zaruka-limited-coverage',

  'us15-anthony-van-dang','us15-mantosh-kumar','us15-kevin-mullin','us15-charles-hoelter','us15-jim-garrity',
  'ad21-papan-1','ad21-muhawieh-1','smc-schools-bonini-1','smc-schools-camacho-1','smc-d3-jimenez-1','smc-d3-mueller-1',
  'smc-assessor-canepa-1','smc-assessor-irizarry-1','smc-controller-raigoza-1','smc-controller-morgan-1'
]);
cards.splice(0, cards.length, ...cards.filter(card=>!lowSignalCardIds.has(card.id)));

const researchedQualityCards = [
  {id:'gov-becerra-housing-permit-deadline', office:'Governor', candidate:'Xavier Becerra', type:'Issue/position', topic:'Housing permit deadlines', statement:'His housing plan would require cities and counties to approve or deny qualifying building permits within 90 days, while also loosening rules for infill projects and entry-level condos.', question:'How much do you support this permit-deadline and infill-housing approach?', sources:['latimesGovHousing']},
  {id:'gov-becerra-homelessness-prevention-fund', office:'Governor', candidate:'Xavier Becerra', type:'Issue/position', topic:'Homelessness prevention', statement:'He proposes a $150 million annual homelessness-prevention fund aimed at rent, eviction, and foreclosure help in high-risk neighborhoods.', question:'How important is homelessness prevention funding to your Governor rating?', sources:['latimesGovHousing']},
  {id:'gov-mahan-thirty-day-permits', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'Fast housing approvals', statement:'His housing plan would require cities to process permits in under 30 days, then allow qualified third-party planners and inspectors to review permits if cities miss the deadline.', question:'How much do you support this faster-permitting approach?', sources:['latimesGovHousing']},
  {id:'gov-mahan-modular-home-factories', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'Modular housing production', statement:'He wants state incentives for modular home factories so more California homes can be manufactured in-state at lower cost.', question:'How much do you value state industrial policy for cheaper housing?', sources:['latimesGovHousing']},
  {id:'gov-mahan-interim-shelter-enforcement', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'Homelessness enforcement and shelter', statement:'On homelessness, he supports more lower-cost interim beds and would allow penalties only after people repeatedly decline available shelter.', question:'How much do you agree with this shelter-first enforcement line?', sources:['latimesGovHousing']},
  {id:'gov-porter-homelessness-services', office:'Governor', candidate:'Katie Porter', type:'Issue/position', topic:'Rental assistance and rehousing', statement:'Her campaign points to interim housing, emergency rental assistance, and rapid rehousing as homelessness tools she wants California to use more aggressively.', question:'How important are these homelessness interventions to you?', sources:['latimesGovHousing']},
  {id:'gov-steyer-factory-built-state-projects', office:'Governor', candidate:'Tom Steyer', type:'Issue/position', topic:'Factory-built housing', statement:'His housing plan would commit some state-funded projects to factory-built homes, using public demand to help the modular housing industry scale.', question:'How much do you support this state-backed modular housing strategy?', sources:['latimesGovHousing']},
  {id:'gov-steyer-renter-tax-credit', office:'Governor', candidate:'Tom Steyer', type:'Issue/position', topic:'Tenant affordability', statement:'He would expand the renter tax credit while preserving California rent-control rules, pairing new construction with tenant protections.', question:'How much do you agree with this build-more plus tenant-protection balance?', sources:['latimesGovHousing']},
  {id:'gov-steyer-interim-housing-services', office:'Governor', candidate:'Tom Steyer', type:'Issue/position', topic:'Interim homelessness housing', statement:'He argues the state has leaned too heavily on slow permanent-housing projects and should expand interim housing with services.', question:'How much do you support shifting more homelessness money toward interim housing?', sources:['latimesGovHousing']},
  {id:'gov-thurmond-school-land-housing', office:'Governor', candidate:'Tony K. Thurmond', type:'Issue/position', topic:'Housing on school land', statement:'His housing plan would encourage school districts to build homes on surplus land for workers such as teachers, nurses, firefighters, and local families.', question:'How much do you support using school-district land for workforce housing?', sources:['latimesGovHousing']},
  {id:'gov-thurmond-redevelopment-homeless-services', office:'Governor', candidate:'Tony K. Thurmond', type:'Issue/position', topic:'Redevelopment and services', statement:'He has discussed reviving redevelopment-style tools and increasing homeless housing that includes mental-health and substance-use services.', question:'How much do you value this redevelopment-and-services approach?', sources:['latimesGovHousing']},
  {id:'gov-villaraigosa-infill-ceqa', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Infill housing and CEQA reform', statement:'He supports denser infill housing laws such as SB 9 and SB 79, lower development fees, and CEQA reform to speed housing construction.', question:'How much do you support this pro-infill housing agenda?', sources:['latimesGovHousing']},
  {id:'gov-villaraigosa-public-land-bonds', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Public-land housing bonds', statement:'He proposes $10 billion in bonds for mixed-income housing on underused public land, plus limits on investor purchases of single-family homes.', question:'How much do you like this public-land housing financing plan?', sources:['latimesGovHousing']},
  {id:'gov-villaraigosa-homekey-treatment', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Homekey and treatment', statement:'His homelessness plan would double down on Homekey-style supportive housing, invest in interim housing, and expand mandatory treatment programs.', question:'How much do you support this housing-and-treatment mix?', sources:['latimesGovHousing']},

  {id:'ltgov-ma-legislative-consumer-record', office:'Lieutenant Governor', candidate:'Fiona Ma', type:'Record/experience', topic:'Consumer and domestic-violence laws', statement:'The Los Angeles Times notes that her Assembly record included legislation on toxic chemicals and stronger protections for domestic-violence victims.', question:'How much does this consumer-safety and victim-protection record matter?', sources:['latimesLtGovGuide']},
  {id:'ltgov-ma-tax-balance', office:'Lieutenant Governor', candidate:'Fiona Ma', type:'Issue/position', topic:'Tax increases and billionaire tax', statement:'She says she could consider some carefully designed tax increases, but opposes the proposed one-time billionaire tax because she worries it could push wealthy taxpayers out of California.', question:'How much do you agree with this tax-risk argument?', sources:['latimesLtGovGuide']},
  {id:'ltgov-ma-gas-car-ban', office:'Lieutenant Governor', candidate:'Fiona Ma', type:'Issue/position', topic:'Gas-powered car phaseout', statement:'She disagrees with California banning sales of new gas-powered cars by 2035, arguing climate policy should not remove consumer choice.', question:'How much does this climate-and-consumer-choice stance affect your rating?', sources:['latimesLtGovGuide']},
  {id:'ltgov-romero-spending-accountability', office:'Lieutenant Governor', candidate:'Gloria Romero', type:'Issue/position', topic:'Spending accountability', statement:'She rejects new taxes and the billionaire-tax proposal, arguing California should focus on spending control, accountability, investment, and business formation.', question:'How much do you agree with this fiscal-accountability stance?', sources:['latimesLtGovGuide']},
  {id:'ltgov-romero-federal-cooperation', office:'Lieutenant Governor', candidate:'Gloria Romero', type:'Issue/position', topic:'Federal relations', statement:'She says California should reduce constant conflict with Washington and cooperate on public safety, infrastructure, border security, and disaster response, saving litigation for narrower circumstances.', question:'How much do you support this cooperative federal posture?', sources:['latimesLtGovGuide']},
  {id:'ltgov-fryday-disaster-legal-service', office:'Lieutenant Governor', candidate:'Josh Fryday', type:'Record/experience', topic:'Military and disaster response', statement:'His record includes Navy JAG service, coordinating relief after the 2011 Japan tsunami and Fukushima disaster, and later speaking against continued Guantanamo detention.', question:'How much does this military, legal, and disaster-response record matter?', sources:['latimesLtGovGuide']},
  {id:'ltgov-fryday-clean-economy', office:'Lieutenant Governor', candidate:'Josh Fryday', type:'Issue/position', topic:'Clean economy transition', statement:'He supports California phaseout of new gas-powered car sales and describes the clean-economy transition as something the state should pursue aggressively.', question:'How much do you agree with this clean-economy stance?', sources:['latimesLtGovGuide']},
  {id:'ltgov-fryday-federal-resistance', office:'Lieutenant Governor', candidate:'Josh Fryday', type:'Issue/position', topic:'Protecting state institutions', statement:'He says the state needs to push back against federal attacks on universities, communities, and environmental policy.', question:'How important is this kind of federal pushback for Lieutenant Governor?', sources:['latimesLtGovGuide']},
  {id:'ltgov-tubbs-stockton-results', office:'Lieutenant Governor', candidate:'Michael Tubbs', type:'Record/experience', topic:'Stockton mayoral results', statement:'The Los Angeles Times reports that Tubbs points to Stockton reducing homicides, improving fiscal health, and launching Stockton Scholars while he was mayor.', question:'How much does this mayoral-results record matter?', sources:['latimesLtGovGuide']},
  {id:'ltgov-tubbs-corporate-property-tax', office:'Lieutenant Governor', candidate:'Michael Tubbs', type:'Issue/position', topic:'Revenue and accountability', statement:'He is wary of the billionaire-tax proposal but supports other revenue options such as corporate property-tax reform paired with strict accountability.', question:'How much do you agree with this revenue approach?', sources:['latimesLtGovGuide']},
  {id:'ltgov-kellman-risk-infrastructure', office:'Lieutenant Governor', candidate:'Janelle Kellman', type:'Record/experience', topic:'Climate-risk infrastructure', statement:'Her official statement says she founded the Center for Sea Rise Solutions and, as Sausalito mayor, secured infrastructure funding tied to flooding, sea-level rise, wildfire risk, and lower homeowner insurance premiums.', question:'How much does this climate-risk infrastructure record matter?', sources:['sosLtGov']},
  {id:'ltgov-kellman-homelessness-response', office:'Lieutenant Governor', candidate:'Janelle Kellman', type:'Record/experience', topic:'Local homelessness response', statement:'Her official statement says she declared a local encampment emergency as mayor, led a humanitarian housing response, and local homelessness later fell by more than half.', question:'How much does this local homelessness record matter?', sources:['sosLtGov']},
  {id:'ltgov-tim-myers-prop28-arts', office:'Lieutenant Governor', candidate:'Tim Myers', type:'Record/experience', topic:'Arts education funding', statement:'His official statement says he helped pass Proposition 28, which expanded music and arts education funding in California public schools.', question:'How much does this arts-education accomplishment matter?', sources:['sosLtGov']},
  {id:'ltgov-tim-myers-anti-ice-protests', office:'Lieutenant Governor', candidate:'Tim Myers', type:'Record/experience', topic:'Protest and civil-rights activism', statement:'His official statement describes leading anti-Trump and anti-ICE protest rallies across California, making direct-action activism part of his governing pitch.', question:'How much does this activism record affect your rating?', sources:['sosLtGov']},
  {id:'ltgov-tim-myers-no-pac-money', office:'Lieutenant Governor', candidate:'Tim Myers', type:'Endorsement/support', topic:'Campaign finance stance', statement:'His official statement says he has taken zero PAC money and frames anti-corruption as central to why he is running.', question:'How important is this campaign-finance stance to you?', sources:['sosLtGov']},

  {id:'treasurer-caballero-affordable-housing-priority', office:'Treasurer', candidate:'Anna M. Caballero', type:'Issue/position', topic:'Affordable housing finance', statement:'She says affordable housing would be a top Treasurer priority because homeownership and stable housing can anchor families and neighborhoods.', question:'How much do you value affordable housing as a Treasurer priority?', sources:['latimesTreasurerGuide','calmattersTreasurerArticle']},
  {id:'treasurer-caballero-unbanked-credit', office:'Treasurer', candidate:'Anna M. Caballero', type:'Issue/position', topic:'Unbanked credit access', statement:'She wants to work with financial institutions on ways for unbanked Californians to build credit, including through verified use of benefit cards.', question:'How important is this financial-inclusion proposal to you?', sources:['latimesTreasurerGuide']},
  {id:'treasurer-caballero-fossil-transition', office:'Treasurer', candidate:'Anna M. Caballero', type:'Issue/position', topic:'Energy transition and pensions', statement:'On fossil-fuel divestment, she argues the transition will take time and prefers pushing California energy companies to become greener rather than immediately chasing them out of state.', question:'How much do you agree with this gradual-transition approach?', sources:['latimesTreasurerGuide']},
  {id:'treasurer-kounalakis-housing-infrastructure', office:'Treasurer', candidate:'Eleni Kounalakis', type:'Issue/position', topic:'Housing and infrastructure finance', statement:'She says her Treasurer priorities would include responsible state finance, more housing and supporting infrastructure, pension protection, and transparent investment management.', question:'How much does this housing-and-infrastructure finance agenda appeal to you?', sources:['latimesTreasurerGuide']},
  {id:'treasurer-kounalakis-clean-investment-balance', office:'Treasurer', candidate:'Eleni Kounalakis', type:'Issue/position', topic:'Clean investments and pension returns', statement:'She favors leaning into clean investments while balancing divestment pressure against the retirement-return obligations of CalPERS and CalSTRS.', question:'How much do you agree with this clean-investment balancing act?', sources:['latimesTreasurerGuide']},
  {id:'treasurer-kounalakis-bond-rating', office:'Treasurer', candidate:'Eleni Kounalakis', type:'Issue/position', topic:'Bond ratings and housing logjams', statement:'Chronicle editorial context says she would use relationships with bond agencies and local officials to improve California bond ratings and move stuck housing projects forward.', question:'How much do you value this relationship-driven Treasurer strategy?', sources:['sfchronTreasurerEndorsement']},
  {id:'treasurer-vazquez-invest-california', office:'Treasurer', candidate:'Tony Vazquez', type:'Issue/position', topic:'Investing pension assets in California', statement:'He wants CalPERS and CalSTRS to invest more of their assets in California projects, saying the state should be a larger target for its own pension investments.', question:'How much do you support directing more pension investment into California?', sources:['latimesTreasurerGuide']},
  {id:'treasurer-vazquez-housing-partnerships', office:'Treasurer', candidate:'Tony Vazquez', type:'Issue/position', topic:'Housing partnerships', statement:'He says the Treasurer should build partnerships with housing nonprofits and tribes to leverage state and pension resources for more housing.', question:'How much do you support this partnership-based housing finance idea?', sources:['latimesTreasurerGuide']},
  {id:'treasurer-vazquez-fossil-divestment-goal', office:'Treasurer', candidate:'Tony Vazquez', type:'Issue/position', topic:'Fossil-fuel divestment', statement:'He says starting to divest from fossil fuels would be a good goal for state pension funds.', question:'How important is fossil-fuel divestment in your Treasurer rating?', sources:['latimesTreasurerGuide']},

  {id:'ins-allen-consumer-complaints', office:'Insurance Commissioner', candidate:'Ben Allen', type:'Issue/position', topic:'Consumer complaint staffing', statement:'He wants the Insurance Department to add staff for consumer complaints and create a consumer-advocate position after hearing from fire-zone constituents.', question:'How much do you value a more consumer-facing insurance department?', sources:['calmattersInsuranceArticle']},
  {id:'ins-allen-home-hardening-loans', office:'Insurance Commissioner', candidate:'Ben Allen', type:'Issue/position', topic:'Home hardening finance', statement:'He supports state-backed loans to help homeowners pay for wildfire hardening and other risk-reduction improvements.', question:'How much do you support public financing for home hardening?', sources:['calmattersInsuranceArticle','latimesInsuranceGuide']},
  {id:'ins-allen-cure-before-nonrenewal', office:'Insurance Commissioner', candidate:'Ben Allen', type:'Issue/position', topic:'Nonrenewal protections', statement:'He has authored a bill requiring insurers to give policyholders a chance to fix problems before losing coverage.', question:'How much do you support this cure-before-nonrenewal protection?', sources:['latimesInsuranceGuide']},
  {id:'ins-bradford-fair-plan-mitigation', office:'Insurance Commissioner', candidate:'Steven Craig Bradford', type:'Issue/position', topic:'FAIR Plan mitigation', statement:'He says the FAIR Plan should help homeowners pay for wildfire mitigation, with public-private risk sharing to make homes more insurable.', question:'How much do you support this FAIR Plan mitigation approach?', sources:['latimesInsuranceGuide']},
  {id:'ins-farren-cal-reinsure', office:'Insurance Commissioner', candidate:'Merritt Farren', type:'Issue/position', topic:'State reinsurance backstop', statement:'He proposes Cal Reinsure, a state-backed reinsurance authority funded by insurer fees, to spread wildfire risk and shrink reliance on the FAIR Plan.', question:'How much do you support a state-backed reinsurance model?', sources:['calmattersInsuranceGuide','latimesInsuranceGuide']},
  {id:'ins-farren-insurer-penalties', office:'Insurance Commissioner', candidate:'Merritt Farren', type:'Issue/position', topic:'Penalties for insurer behavior', statement:'He supports financial penalties for insurer misconduct after the fire-claims disputes that shaped the race.', question:'How much do you value stronger financial penalties for insurer behavior?', sources:['latimesInsuranceGuide']},
  {id:'ins-howell-guaranteed-coverage-path', office:'Insurance Commissioner', candidate:'Robert P Howell', type:'Issue/position', topic:'Mitigation-to-coverage path', statement:'He says homeowners who complete wildfire-mitigation steps should have a guaranteed path back to coverage.', question:'How much do you support linking mitigation work to guaranteed coverage?', sources:['latimesInsuranceGuide']},
  {id:'ins-howell-loss-estimate-transparency', office:'Insurance Commissioner', candidate:'Robert P Howell', type:'Issue/position', topic:'Claims transparency', statement:'He wants insurers to share every version of loss estimates while claims are being reviewed.', question:'How much does loss-estimate transparency matter to you?', sources:['latimesInsuranceGuide']},
  {id:'ins-korsgaden-new-business-division', office:'Insurance Commissioner', candidate:'Stacy A. Korsgaden', type:'Issue/position', topic:'New insurance products', statement:'She proposes a New Business Division in the Insurance Department to attract more carriers and more varied insurance products.', question:'How much do you support this market-entry strategy?', sources:['calmattersInsuranceGuide','latimesInsuranceGuide']},
  {id:'ins-korsgaden-consumer-hub-fraud', office:'Insurance Commissioner', candidate:'Stacy A. Korsgaden', type:'Issue/position', topic:'Consumer hub and fraud', statement:'Her voter-guide platform includes a consumer advocacy hub and a stronger fraud crackdown as part of lowering insurance costs.', question:'How much do those consumer-hub and anti-fraud ideas matter?', sources:['calmattersInsuranceGuide']},
  {id:'ins-wolff-insurer-report-card', office:'Insurance Commissioner', candidate:'Patrick Wolff', type:'Issue/position', topic:'Insurer report cards', statement:'He would publish an annual report card grading insurers on claims handling and other consumer-facing behavior.', question:'How much do you value public grading of insurers?', sources:['calmattersInsuranceGuide','latimesInsuranceGuide']},
  {id:'ins-wolff-underwriting-data', office:'Insurance Commissioner', candidate:'Patrick Wolff', type:'Issue/position', topic:'Usage-based underwriting', statement:'His voter-guide profile says he would consider allowing auto insurers to use driver-behavior tracking in underwriting.', question:'How do you feel about behavior-based insurance pricing?', sources:['calmattersInsuranceGuide']},

  {id:'spi-muratsuchi-prop2-facilities', office:'Superintendent of Public Instruction', candidate:'Al Muratsuchi', type:'Record/experience', topic:'School facilities bond', statement:'CalMatters credits him as a co-author of Proposition 2, the successful $10 billion school facilities bond.', question:'How much does this school-infrastructure record matter?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-muratsuchi-education-committee', office:'Superintendent of Public Instruction', candidate:'Al Muratsuchi', type:'Record/experience', topic:'Assembly education leadership', statement:'His profile includes former chairmanship of the Assembly Education Committee, giving him direct legislative experience with statewide school policy.', question:'How much do you value legislative education-policy experience?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-barrera-early-teacher-pathway', office:'Superintendent of Public Instruction', candidate:'Richard Barrera', type:'Issue/position', topic:'Early education and teacher pipeline', statement:'His voter-guide profile says he wants to focus on school funding, early childhood education, and easing the path to becoming a teacher.', question:'How much do those priorities fit your view of the office?', sources:['calmattersSuperintendentGuide']},
  {id:'spi-shaw-trans-student-policy', office:'Superintendent of Public Instruction', candidate:'Sonja Shaw', type:'Issue/position', topic:'Transgender student policy', statement:'CalMatters identifies her as an outspoken opponent of protections for transgender students and says she wants schools to move away from what she calls radical ideology.', question:'How much does this culture-war education stance affect your rating?', sources:['calmattersSuperintendentGuide']},

  {id:'boe-pimentel-food-tax-loopholes', office:'Board of Equalization, District 2', candidate:'John Pimentel', type:'Issue/position', topic:'Food tax and loopholes', statement:'His official statement says he wants to end the sales tax on food, close tax loopholes, and strengthen transparency and accountability.', question:'How much do you agree with this tax-fairness agenda?', sources:['sosBoe']},
  {id:'boe-pimentel-free-college-record', office:'Board of Equalization, District 2', candidate:'John Pimentel', type:'Record/experience', topic:'Free community college record', statement:'His official statement says he led efforts to create free college in the San Mateo County Community College District, with enrollment rising after the program launched.', question:'How much does this local affordability record matter?', sources:['sosBoe']},
  {id:'boe-lieber-taxpayer-outreach', office:'Board of Equalization, District 2', candidate:'Sally J. Lieber', type:'Record/experience', topic:'Taxpayer outreach and Prop. 19', statement:'Her official statement says she expanded property-tax relief outreach, increased public information on Proposition 19, and advanced homeowner-insurance consumer protections.', question:'How much does this incumbent tax-board record matter?', sources:['sosBoe']},
  {id:'boe-lieber-assessments-housing-recovery', office:'Board of Equalization, District 2', candidate:'Sally J. Lieber', type:'Issue/position', topic:'Assessments, housing, and disaster recovery', statement:'She says another term would focus on accurate and equitable property-tax assessments, taxpayer assistance, housing affordability, disaster recovery, and economic stability.', question:'How much do these BOE priorities matter to you?', sources:['sosBoe']},

  {id:'smc-schools-bonini-credential-defense', office:'San Mateo County Superintendent of Schools', candidate:'Chelsea Bonini', type:'Issue/position', topic:'Qualification dispute response', statement:'This candidate says questions about eligibility are a distraction and argues that legal training, budget oversight, policy work, and classroom experience are enough preparation for the countywide education role.', question:'How comfortable are you with this preparation pathway?', sources:['paDailyPostSchoolsForum','boniniCampaignNews']},
  {id:'smc-schools-bonini-reserves-programs', office:'San Mateo County Superintendent of Schools', candidate:'Chelsea Bonini', type:'Issue/position', topic:'Use reserves for student programs', statement:'At a public forum, this candidate argued that reserves have grown and that some reserve money should be used to support student programs that are currently under-supported.', question:'How much do you support spending more reserves on student programs?', sources:['almanacSchoolsForum']},
  {id:'smc-schools-bonini-crisis-under12', office:'San Mateo County Superintendent of Schools', candidate:'Chelsea Bonini', type:'Issue/position', topic:'Youth crisis support gaps', statement:'This candidate puts youth mental-health crisis response near the center of the race, citing a shortage of crisis spaces for children under 12 and calling for measurable crisis-support goals.', question:'How important is this under-12 crisis-support focus?', sources:['almanacSchoolsForum','paDailyPostSchoolsForum']},
  {id:'smc-schools-bonini-dyslexia-literacy', office:'San Mateo County Superintendent of Schools', candidate:'Chelsea Bonini', type:'Issue/position', topic:'Dyslexia and literacy screening', statement:'This candidate emphasizes science-based literacy instruction and early dyslexia screening, including training adults to understand what reading barriers feel like for students with learning disabilities.', question:'How much does this dyslexia-and-literacy emphasis matter?', sources:['almanacSchoolsForum','boniniCampaignNews']},
  {id:'smc-schools-camacho-admin-implementation', office:'San Mateo County Superintendent of Schools', candidate:'Héctor Camacho Jr.', type:'Record/experience', topic:'Administrator implementation lens', statement:'This candidate argues that the job needs someone who has implemented education code, led programs, and made fast decisions during student crises, not only someone who has reviewed policy from an oversight role.', question:'How much do you value this implementation-first argument?', sources:['paDailyPostSchoolsForum','camachoCampaign']},
  {id:'smc-schools-camacho-student-ai-voice', office:'San Mateo County Superintendent of Schools', candidate:'Héctor Camacho Jr.', type:'Issue/position', topic:'Student voice on AI', statement:'On classroom AI, this candidate centers student concerns about learning, workforce pressure, and loss of human interaction, and says students should be at the table when districts set AI direction.', question:'How much do you value this student-centered AI approach?', sources:['almanacSchoolsForum','paDailyPostSchoolsForum']},
  {id:'smc-schools-camacho-mental-health-blueprint', office:'San Mateo County Superintendent of Schools', candidate:'Héctor Camacho Jr.', type:'Issue/position', topic:'Countywide mental-health coordination', statement:'This candidate wants mental-health support coordinated among districts, first responders, and county health, using the countywide school-emergency model and the United for Youth Blueprint as templates.', question:'How much do you support this coordinated mental-health model?', sources:['almanacSchoolsForum']},
  {id:'smc-schools-camacho-state-funding-fight', office:'San Mateo County Superintendent of Schools', candidate:'Héctor Camacho Jr.', type:'Issue/position', topic:'State funding advocacy', statement:'On school funding, this candidate says the county needs to rally the community and take the fight to the state, comparing it with local organizing around the Vehicle License Fee shortfall.', question:'How much do you value state-level funding advocacy for this role?', sources:['paDailyPostSchoolsForum']},

  {id:'smc-d3-mueller-crisp-projects', office:'San Mateo County Board of Supervisors, District 3', candidate:'Ray Mueller', type:'Record/experience', topic:'Coastside infrastructure resilience', statement:'This candidate points to a continuation agenda after storms, the Half Moon Bay mass shooting, sheriff removal, and county funding trouble, with a focus on more than 100 critical infrastructure and resilience projects.', question:'How much does this continuation-and-infrastructure record matter?', sources:['smDailyJournalD3','smcMuellerPriorities']},
  {id:'smc-d3-mueller-farmworker-housing', office:'San Mateo County Board of Supervisors, District 3', candidate:'Ray Mueller', type:'Issue/position', topic:'Farmworker housing safety', statement:'This candidate says a next-term focus would be bringing farmworker housing up to code after unsafe living conditions were identified following the 2023 Half Moon Bay mass shooting.', question:'How important is farmworker-housing enforcement to you?', sources:['smDailyJournalD3']},
  {id:'smc-d3-mueller-coastside-healthcare', office:'San Mateo County Board of Supervisors, District 3', candidate:'Ray Mueller', type:'Record/experience', topic:'Emergency response and health access', statement:'This candidate emphasizes cell service near Tunitas Creek Beach, patchwork Coastside emergency response, water supply, and urgent-care access as county responsibilities needing follow-through.', question:'How much does this emergency-response and health-access focus matter?', sources:['smDailyJournalD3','smcMuellerPriorities']},
  {id:'smc-d3-mueller-budget-focus', office:'San Mateo County Board of Supervisors, District 3', candidate:'Ray Mueller', type:'Issue/position', topic:'Budget discipline', statement:'This candidate argues the county should focus limited dollars on “need to have” work rather than excessive or creative extras while navigating budget pressure.', question:'How much do you agree with this county budget discipline?', sources:['smDailyJournalD3']},
  {id:'smc-d3-jimenez-ag-economy', office:'San Mateo County Board of Supervisors, District 3', candidate:'Joaquin Jiménez', type:'Issue/position', topic:'Coastside agriculture economy', statement:'This candidate wants to grow farming and ranching on the Coastside, including opportunities for new farmers, more visibility for the agricultural community, and ideas such as a coast dairy farm.', question:'How much do you value this agriculture-economy focus?', sources:['smDailyJournalD3']},
  {id:'smc-d3-jimenez-vocational-union-pathways', office:'San Mateo County Board of Supervisors, District 3', candidate:'Joaquin Jiménez', type:'Issue/position', topic:'Vocational and union pathways', statement:'This candidate wants programs that give high school students vocational training and pathways into union work.', question:'How much do vocational and union pathways matter to you?', sources:['smDailyJournalD3']},
  {id:'smc-d3-jimenez-coastside-transit', office:'San Mateo County Board of Supervisors, District 3', candidate:'Joaquin Jiménez', type:'Issue/position', topic:'Coastside transportation', statement:'This candidate says better public transportation to and from the Coastside is critical because State Route 92 is the only major route in and out of the area.', question:'How important is Coastside transit in your supervisor rating?', sources:['smDailyJournalD3']},
  {id:'smc-d3-jimenez-sheriff-removal-process', office:'San Mateo County Board of Supervisors, District 3', candidate:'Joaquin Jiménez', type:'Issue/position', topic:'Sheriff removal governance', statement:'In the sheriff-removal dispute, this candidate argued the county should have used a recall rather than spending heavily on removing the elected sheriff through the board process.', question:'How much does this governance stance matter to you?', sources:['smDailyJournalD3']},

  {id:'smc-assessor-canepa-deputy-reorg', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'David Canepa', type:'Issue/position', topic:'Department reorganization', statement:'This candidate says the 167-employee office needs outside leadership and would put a deputy over each major department, including clerk, elections, and assessor functions.', question:'How much do you value this reorganization plan?', sources:['paDailyPostAssessor','smDailyJournalAssessor']},
  {id:'smc-assessor-canepa-morale-promotion', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'David Canepa', type:'Issue/position', topic:'Employee morale and accountability', statement:'This candidate frames low morale and workplace concerns as a leadership problem, pledging to restore professionalism, accountability, and trust inside the office.', question:'How important is internal morale reform for this office?', sources:['paDailyPostAssessor','smDailyJournalAssessor']},
  {id:'smc-assessor-canepa-audit', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'David Canepa', type:'Issue/position', topic:'Performance audit', statement:'This candidate says the first step should be a financial and performance audit to understand inherited problems before changing how the office operates.', question:'How much do you value an early audit of the office?', sources:['paDailyPostAssessor']},
  {id:'smc-assessor-canepa-resident-service', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'David Canepa', type:'Issue/position', topic:'Resident service and outreach', statement:'This candidate says residents should get hands-on help with ballots, ownership changes, and records, not just be directed to a website, and wants more public education through social media.', question:'How much do you value this hands-on customer-service approach?', sources:['paDailyPostAssessor','canepaCampaign']},
  {id:'smc-assessor-irizarry-vote-by-mail', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'Jim Irizarry', type:'Record/experience', topic:'Vote-by-mail implementation', statement:'This candidate points to helping build the county’s vote-by-mail model and argues every voter is verified in that system.', question:'How much does this election-administration record matter?', sources:['paDailyPostAssessor']},
  {id:'smc-assessor-irizarry-recount-accuracy', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'Jim Irizarry', type:'Record/experience', topic:'Recount accuracy', statement:'This candidate cites the 2024 Low-Simitian recount as evidence of election-office accuracy, saying the certified vote matched the recount.', question:'How much does this recount-management example matter?', sources:['paDailyPostAssessor']},
  {id:'smc-assessor-irizarry-vacancies-training', office:'San Mateo County Assessor-County Clerk-Recorder', candidate:'Jim Irizarry', type:'Issue/position', topic:'Continuity and internal growth', statement:'This candidate says the first priority would be filling department vacancies while promoting from within, preserving institutional expertise, and continuing internal improvement.', question:'How much do you value this continuity-and-staffing plan?', sources:['paDailyPostAssessor','smDailyJournalAssessor']}
];
cards.push(...researchedQualityCards);

const duplicateCardIds = new Set([
  'gov-becerra-homelessness-prevention-fund',
  'gov-becerra-4',
  'gov-bianco-2',
  'gov-mahan-modular-home-factories',
  'gov-mahan-interim-shelter-enforcement',
  'gov-porter-2',
  'gov-porter-homelessness-services',
  'gov-hilton-2',
  'gov-steyer-2',
  'gov-steyer-factory-built-state-projects',
  'gov-steyer-interim-housing-services',
  'gov-thurmond-redevelopment-homeless-services',
  'gov-villaraigosa-homekey-treatment',
  'ltgov-kellman-homelessness-response',
  'treasurer-caballero-affordable-housing-priority',
  'treasurer-kounalakis-housing-infrastructure',
  'treasurer-vazquez-housing-partnerships',
  'spi-muratsuchi-prop2-facilities',
  'spi-newman-facilities',
  'spi-shaw-trans-student-policy'
]);
cards.splice(0, cards.length, ...cards.filter(card=>!duplicateCardIds.has(card.id)));

const topicReplacementCards = [
  {id:'gov-becerra-utility-insurance-freeze', office:'Governor', candidate:'Xavier Becerra', type:'Issue/position', topic:'Utility and insurance rates', statement:'LAist reports that he wants to declare a state of emergency to freeze utility and insurance rates, while also revisiting climate goals to keep fuel affordable.', question:'How much do you support this emergency-rate-freeze approach?', sources:['laistGovGuide']},

  {id:'gov-bianco-income-gas-tax', office:'Governor', candidate:'Chad Bianco', type:'Issue/position', topic:'Income tax and gas tax', statement:'Voter-guide coverage says he wants to eliminate California income tax and the gas tax as part of his affordability platform.', question:'How much do you support eliminating those state taxes?', sources:['laistGovGuide']},
  {id:'gov-bianco-environmental-regulation-suspension', office:'Governor', candidate:'Chad Bianco', type:'Issue/position', topic:'Environmental regulation rollback', statement:'LAist reports that he is pushing to suspend numerous state regulations, especially environmental rules, while also boosting oil and gas production.', question:'How much do you support this regulatory rollback approach?', sources:['laistGovGuide']},

  {id:'gov-mahan-transit-performance-funding', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'Transit performance funding', statement:'In a candidate questionnaire, he says transit funding should be tied to ridership growth and farebox recovery, with safety, cleanliness, coordinated schedules, and agency consolidation as part of the fix.', question:'How much do you support performance-based transit funding?', sources:['growsfMahanGov']},
  {id:'gov-mahan-ceqa-grid-industry', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'CEQA and clean-energy infrastructure', statement:'He supports comprehensive CEQA overhaul and ministerial approvals for projects he says are critical to job creation, including clean-energy, water, and grid infrastructure.', question:'How much do you support this CEQA streamlining approach?', sources:['growsfMahanGov']},
  {id:'gov-mahan-phonics-tutoring', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'Reading and tutoring', statement:'His questionnaire emphasizes phonics, intensive tutoring, school-day enrichment, and stronger evaluation of whether students are on grade level.', question:'How important is this reading-and-tutoring agenda to you?', sources:['growsfMahanGov']},
  {id:'gov-mahan-progress-audit-taxes', office:'Governor', candidate:'Matt Mahan', type:'Issue/position', topic:'Tax guardrails and audits', statement:'He says California should not raise taxes without first auditing spending and proving existing programs are delivering measurable results.', question:'How much do you agree with this no-new-taxes-without-audit stance?', sources:['growsfMahanGov']},

  {id:'gov-villaraigosa-measure-r-transit', office:'Governor', candidate:'Antonio Villaraigosa', type:'Record/experience', topic:'Transit expansion record', statement:'As Los Angeles mayor, he championed Measure R, the local sales-tax measure that helped fund major rail and transit expansion across Los Angeles County.', question:'How much does this transit-expansion record matter?', sources:['calmattersGovGuide','latimesVillaraigosaLegacy']},
  {id:'gov-villaraigosa-transit-ridership-safety', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Transit ridership and safety', statement:'In a candidate questionnaire, he says the state should stabilize transit funding while tying support to safety, frequency, reliability, and ridership recovery.', question:'How much do you support this transit-funding approach?', sources:['growsfVillaraigosaGov']},
  {id:'gov-villaraigosa-higher-ed-appointments', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Higher-education governance', statement:'He says governor-appointed UC regents and CSU trustees should be selected for commitment to affordability, access, labor fairness, and student outcomes.', question:'How much do higher-education appointments matter to you?', sources:['growsfVillaraigosaGov']},
  {id:'gov-villaraigosa-budget-reserves', office:'Governor', candidate:'Antonio Villaraigosa', type:'Issue/position', topic:'Budget reserves and accountability', statement:'He says California should rebuild reserves, avoid using one-time money for permanent programs, and tie new spending to measurable outcomes.', question:'How much do you value this budget-discipline stance?', sources:['growsfVillaraigosaGov']},

  {id:'gov-porter-tuition-tax-detail', office:'Governor', candidate:'Katie Porter', type:'Issue/position', topic:'Corporate taxes and tuition', statement:'Her college plan would raise California corporate taxes on higher-earning companies to fund two tuition-free years at UC, CSU, or community college for eligible in-state students.', question:'How much do you support this corporate-tax-for-tuition plan?', sources:['latimesPorterTuition','kqedGov']},
  {id:'gov-porter-transit-oriented-housing', office:'Governor', candidate:'Katie Porter', type:'Issue/position', topic:'Transit-oriented housing', statement:'CalMatters says she supports denser housing near public transit while opposing broader SB 9-style duplex expansion in single-family neighborhoods.', question:'How much do you agree with this transit-oriented housing line?', sources:['calmattersGovGuide']},

  {id:'gov-steyer-ai-worker-tax', office:'Governor', candidate:'Tom Steyer', type:'Issue/position', topic:'AI tax and worker transition', statement:'Voter-guide coverage says he supports taxing AI companies to help workers displaced by artificial intelligence.', question:'How much do you support an AI-industry tax for worker transition?', sources:['laistGovGuide','calmattersGovGuide']},
  {id:'gov-steyer-utility-monopoly', office:'Governor', candidate:'Tom Steyer', type:'Issue/position', topic:'Utility monopoly regulation', statement:'Voter-guide coverage says he wants to challenge investor-owned utility monopolies and lower electricity bills as part of his affordability agenda.', question:'How much does utility-monopoly regulation matter to you?', sources:['kqedGov','calmattersGovGuide']},

  {id:'gov-thurmond-reading-third-grade', office:'Governor', candidate:'Tony K. Thurmond', type:'Issue/position', topic:'Third-grade reading', statement:'His campaign priorities include a five-year plan to ensure every California student can read by third grade.', question:'How important is third-grade reading policy in your Governor rating?', sources:['thurmondPriorities']},
  {id:'gov-thurmond-education-tax-credit', office:'Governor', candidate:'Tony K. Thurmond', type:'Issue/position', topic:'Education tax credit and free degree', statement:'His campaign priorities include a state-level affordability tax credit, universal childcare, and a free four-year CSU or UC pilot program.', question:'How much do you support this education-affordability agenda?', sources:['thurmondPriorities','sosGov']},

  {id:'gov-hilton-third-grade-accountability', office:'Governor', candidate:'Steve Hilton', type:'Issue/position', topic:'Third-grade school accountability', statement:'His education plan would require public school grades based on third-grade proficiency and would put repeatedly failing schools under state-directed special measures.', question:'How much do you support this third-grade accountability model?', sources:['hiltonEducationPlan']},
  {id:'gov-hilton-no-tax-tips', office:'Governor', candidate:'Steve Hilton', type:'Issue/position', topic:'Tax cuts for workers', statement:'His tax plan would exempt the first $100,000 of income from state income tax, eliminate state tax on tips, and end the $800 small business tax.', question:'How much do you support these income-tax and small-business tax cuts?', sources:['hiltonTaxPlan']},

  {id:'gov-bianco-parental-choice', office:'Governor', candidate:'Chad Bianco', type:'Issue/position', topic:'School choice and parental rights', statement:'His education platform emphasizes parental rights, fundamental skills, career-technical education, and expanding access to high-performing charter schools.', question:'How much do you support this school-choice and parental-rights agenda?', sources:['biancoEducationPlan']},
  {id:'gov-bianco-campus-safety', office:'Governor', candidate:'Chad Bianco', type:'Issue/position', topic:'Campus safety and school resource officers', statement:'His education platform supports access to trained school resource officers on public-school campuses and more counseling and mental-health programs.', question:'How much do campus safety and school-resource-officer policies matter to you?', sources:['biancoEducationPlan']}
];
cards.push(...topicReplacementCards);

const localRaceExpansionCards = [
  {id:'ad21-papan-rhna-reform', office:'State Assembly, District 21', candidate:'Diane Papan', type:'Issue/position', topic:'Housing mandates and RHNA reform', statement:'This candidate supports changing the state RHNA housing-target process so cities still plan for more housing, but targets and deadlines account more for local data, public input, and local financial capacity.', question:'How much do you support this more-local-capacity approach to housing mandates?', sources:['smDailyJournalAD21','leginfoPapanAB650']},
  {id:'ad21-papan-rental-assistance', office:'State Assembly, District 21', candidate:'Diane Papan', type:'Issue/position', topic:'Rental assistance and homelessness prevention', statement:'This candidate argues that some housing resources should go to rental assistance so people can stay housed during hard periods instead of falling into homelessness.', question:'How much do you value rental assistance as a homelessness-prevention tool?', sources:['smDailyJournalAD21']},
  {id:'ad21-papan-school-facilities-bonds', office:'State Assembly, District 21', candidate:'Diane Papan', type:'Record/experience', topic:'School facilities and workforce housing', statement:'This candidate authored a school-facilities bond bill that would clarify that local school and community-college bonds can fund facilities such as classrooms, labs, libraries, and housing for students, faculty, or school employees.', question:'How much do you support using education bonds for both school facilities and school-workforce housing?', sources:['papanAB2571Analysis']},
  {id:'ad21-papan-progressive-housing-record', office:'State Assembly, District 21', candidate:'Diane Papan', type:'Record/experience', topic:'Tenant and social-housing votes', statement:'A voter guide flags that this candidate did not vote for some tenant-protection and social-housing bills, creating a contrast with other housing-affordability messaging.', question:'How much does this housing-legislation record affect your view of this candidate?', sources:['progressivePapanGuide']},
  {id:'ad21-papan-transit-infrastructure-record', office:'State Assembly, District 21', candidate:'Diane Papan', type:'Record/experience', topic:'Transit and infrastructure', statement:'Before joining the Assembly, this candidate was described as a San Mateo city leader who championed infrastructure, transit, and climate-adaptation investment.', question:'How much does this local transit-and-infrastructure record matter?', sources:['papanLegProfile']},

  {id:'ad21-muhawieh-tax-affordability', office:'State Assembly, District 21', candidate:'Jabra J. Muhawieh', type:'Issue/position', topic:'Taxes and affordability', statement:'This candidate argues California taxes are too high for families and small businesses, citing sales, property, income, and corporate taxes as well as Proposition 19 limits on parent-to-child property-tax transfers.', question:'How much do you agree with this lower-tax and property-tax-transfer argument?', sources:['smDailyJournalAD21','sfchronBayArea2026']},
  {id:'ad21-muhawieh-housing-mandates', office:'State Assembly, District 21', candidate:'Jabra J. Muhawieh', type:'Issue/position', topic:'State housing mandates', statement:'This candidate opposes state housing mandates, preferring nonbinding state guidelines and more local choice about where new housing should be built.', question:'How much do you agree with this limits-on-mandates approach?', sources:['smDailyJournalAD21']},
  {id:'ad21-muhawieh-targeted-affordable-housing', office:'State Assembly, District 21', candidate:'Jabra J. Muhawieh', type:'Issue/position', topic:'Targeted affordable housing', statement:'This candidate supports building more affordable housing in major cities and urban areas, including housing targeted to specific career groups such as teachers or other workers.', question:'How much do you support this targeted affordable-housing approach?', sources:['smDailyJournalAD21']},
  {id:'ad21-muhawieh-ai-workforce-education', office:'State Assembly, District 21', candidate:'Jabra J. Muhawieh', type:'Issue/position', topic:'AI and workforce skills', statement:'This candidate wants Californians to learn how to work with artificial intelligence while also supporting some AI safety regulation.', question:'How important is AI workforce preparation in your AD21 rating?', sources:['smDailyJournalAD21']},

  {id:'smc-judge4-donnellan-courtroom-trials', office:'Judge of the Superior Court, Office No. 4', candidate:'Brian Donnellan', type:'Record/experience', topic:'Courtroom trial practice', statement:'This candidate emphasizes daily courtroom work, more than 50 solo jury trials, and experience with serious cases, arguing that hands-on trial practice is the best preparation for the bench.', question:'How much does hands-on trial practice matter for this judicial seat?', sources:['vote411JudgeOffice4','donnellanCampaign']},
  {id:'smc-judge4-donnellan-treatment-court', office:'Judge of the Superior Court, Office No. 4', candidate:'Brian Donnellan', type:'Record/experience', topic:'Treatment-court and service perspective', statement:'This candidate says military service and work with a Veterans Treatment Court inform a perspective that includes public safety, due process, and understanding of trauma, substance-use, and PTSD issues among justice-involved people.', question:'How much does this treatment-court and service perspective matter to you?', sources:['vote411JudgeOffice4','rwcPulseJudgeOffice4']},
  {id:'smc-judge4-donnellan-local-legal-support', office:'Judge of the Superior Court, Office No. 4', candidate:'Brian Donnellan', type:'Endorsement/support', topic:'Local legal-community support', statement:'This candidate’s support base is heavily rooted in San Mateo County’s legal establishment, including local judges, defense attorneys, prosecutors, elected officials, and public-safety groups.', question:'How much does broad local legal-community support affect your view?', sources:['vote411JudgeOffice4','donnellanCampaign','rwcPulseJudgeOffice4']},
  {id:'smc-judge4-boyarsky-broad-legal-background', office:'Judge of the Superior Court, Office No. 4', candidate:'Jay Boyarsky', type:'Record/experience', topic:'Broad legal and management experience', statement:'This candidate emphasizes more than three decades of legal work across criminal, civil, and administrative law, arguing that breadth of experience would help with efficiency in an under-resourced court.', question:'How much does broad multi-area legal experience matter for this judicial seat?', sources:['vote411JudgeOffice4','rwcPulseJudgeOffice4']},
  {id:'smc-judge4-boyarsky-recusal-argument', office:'Judge of the Superior Court, Office No. 4', candidate:'Jay Boyarsky', type:'Issue/position', topic:'Conflict-of-interest argument', statement:'This candidate argues that not having practiced in San Mateo County would reduce conflicts of interest and allow them to handle local criminal matters sooner.', question:'How much does this reduced-recusal argument matter to you?', sources:['rwcPulseJudgeOffice4']},
  {id:'smc-judge4-boyarsky-law-change-record', office:'Judge of the Superior Court, Office No. 4', candidate:'Jay Boyarsky', type:'Record/experience', topic:'Victim-focused law-change record', statement:'This candidate cites helping change state law after a child sexual-abuse case was dismissed on a technicality, presenting that work as evidence of a victim-focused public-safety approach.', question:'How much does this law-change record affect your rating?', sources:['vote411JudgeOffice4']},

  {id:'smc-controller-raigoza-tenure', office:'San Mateo County Controller', candidate:'Juan Raigoza', type:'Record/experience', topic:'County finance career', statement:'County materials say this candidate has served as San Mateo County Controller since 2015 after earlier roles as senior internal auditor, division manager, and assistant controller.', question:'How much does this county-finance career path matter?', sources:['smcControllerRaigoza','sfchronBayArea2026']},
  {id:'smc-controller-raigoza-financial-reporting', office:'San Mateo County Controller', candidate:'Juan Raigoza', type:'Record/experience', topic:'Financial reporting awards', statement:'County materials say the annual comprehensive financial report has repeatedly earned national financial-reporting recognition during this candidate’s tenure.', question:'How much does this financial-reporting record matter for Controller?', sources:['smcControllerRaigoza','smcControllerGfoa']},
  {id:'smc-controller-raigoza-operations-controls', office:'San Mateo County Controller', candidate:'Juan Raigoza', type:'Record/experience', topic:'Auditing and internal controls', statement:'County materials say this candidate’s expertise in governmental accounting, auditing, information systems, and internal controls helps assess county operations and recommend improvements.', question:'How much does this operations-and-controls background matter?', sources:['smcControllerRaigoza']},

  {id:'smc-coroner-foucrault-independent-investigations', office:'San Mateo County Coroner', candidate:'Robert J. Foucrault', type:'Issue/position', topic:'Independent death investigations', statement:'The Coroner office says its mission is to provide prompt independent investigations into deaths under county jurisdiction while balancing resident needs with legal requirements.', question:'How important is independent death-investigation capacity to you?', sources:['smcCoronerAbout','sfchronBayArea2026']},
  {id:'smc-coroner-foucrault-case-reporting', office:'San Mateo County Coroner', candidate:'Robert J. Foucrault', type:'Record/experience', topic:'Case statistics and public reporting', statement:'The Coroner office publishes annual case statistics and report archives; its 2025 table lists 556 total cases by cause-of-death category.', question:'How much do public case statistics matter for this office?', sources:['smcCoronerAnnualReport']},
  {id:'smc-coroner-foucrault-save-a-life', office:'San Mateo County Coroner', candidate:'Robert J. Foucrault', type:'Record/experience', topic:'Youth safety intervention', statement:'The Coroner office runs a Save-a-Life course for at-risk youth, using county case examples to confront risky, reckless, or violent behavior.', question:'How much does this youth safety program matter in your Coroner rating?', sources:['smcCoronerSaveALife']},

  {id:'smc-treasurer-arnott-financial-assets', office:'San Mateo County Treasurer-Tax Collector', candidate:'Sandie Arnott', type:'Issue/position', topic:'County funds and property-tax collection', statement:'County materials describe this office as managing and protecting county financial assets while collecting property taxes and administering the county treasury.', question:'How much does this funds-and-tax role matter to you?', sources:['smcTaxArnott','sfchronBayArea2026']},
  {id:'smc-treasurer-arnott-payment-modernization', office:'San Mateo County Treasurer-Tax Collector', candidate:'Sandie Arnott', type:'Record/experience', topic:'Payment access and customer service', statement:'A professional profile says this candidate focused on more convenient, efficient, and paper-light payment processes and received a county customer-service award for adding a chat line and mobile mailbox.', question:'How much do payment-access and customer-service changes matter?', sources:['nacctfoArnott']},
  {id:'smc-treasurer-arnott-taxpayer-legislation', office:'San Mateo County Treasurer-Tax Collector', candidate:'Sandie Arnott', type:'Record/experience', topic:'Taxpayer legislation and pandemic waivers', statement:'A professional profile says this candidate authored taxpayer-related state legislation and helped seek pandemic penalty-waiver authority for affected taxpayers.', question:'How much does this taxpayer-legislation record matter?', sources:['nacctfoArnott']}
];
cards.push(...localRaceExpansionCards);
window.voterWorksheetData = window.voterWorksheetData || {};
window.voterWorksheetData.cards = cards;
})();

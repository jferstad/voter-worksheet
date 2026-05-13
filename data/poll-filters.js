window.voterWorksheetData = window.voterWorksheetData || {};
window.voterWorksheetData.pollFilters = {
  "Governor": {
    label: "May 4 poll at 1%+",
    source: "sfgateLatestGovPoll",
    note: "California Democratic Party poll summarized by SFGATE on May 4, 2026; surveyed 1,200 Californians April 30-May 2.",
    threshold: 1,
    candidates: {
      "Steve Hilton": 18,
      "Xavier Becerra": 18,
      "Chad Bianco": 15,
      "Tom Steyer": 12,
      "Katie Porter": 9,
      "Matt Mahan": 7,
      "Antonio Villaraigosa": 3,
      "Tony K. Thurmond": 2
    }
  },
  "Lieutenant Governor": {
    label: "poll/visibility filter",
    source: "kpbsLtGov",
    note: "Includes candidates named in public 2026 Lieutenant Governor polling at roughly 2% or higher, plus voter-guide-visible contenders with statewide office or notable endorsements.",
    threshold: 2,
    candidates: {
      "David Fennell": 18,
      "Fiona Ma": 18,
      "Gloria Romero": 11,
      "Michael Tubbs": 5,
      "Janelle Kellman": 3,
      "Oliver Ma": 3,
      "Tim Myers": 3,
      "Josh Fryday": 2,
      "Alice Stek": 2
    }
  },
  "Treasurer": {
    label: "viability filter",
    source: "sacBeeTreasurer",
    note: "No clean recent public poll found; filtered to candidates with the strongest visible viability signals: current statewide/state office, major campaign finance, or broad voter-guide/editorial attention.",
    threshold: 1,
    candidates: {
      "Anna M. Caballero": 1,
      "Eleni Kounalakis": 1,
      "Tony Vazquez": 1
    }
  },
  "Insurance Commissioner": {
    label: "voter-guide visibility filter",
    source: "kqedInsurance",
    note: "No clean recent public poll found; filtered to candidates identified as notable in voter guides or with meaningful office/issue visibility.",
    threshold: 1,
    candidates: {
      "Ben Allen": 1,
      "Steven Craig Bradford": 1,
      "Jane Kim": 1,
      "Patrick Wolff": 1,
      "Merritt Farren": 1,
      "Stacy A. Korsgaden": 1,
      "Robert P Howell": 1,
      "Eduardo \"Lalo\" Vargas": 1
    }
  },
  "Superintendent of Public Instruction": {
    label: "voter-guide visibility filter",
    source: "kpbsSuperintendent",
    note: "No clean recent public poll found; filtered to candidates with statewide legislative leadership, major education endorsements, or prominent voter-guide/news coverage.",
    threshold: 1,
    candidates: {
      "Al Muratsuchi": 1,
      "Josh Newman": 1,
      "Anthony Rendon": 1,
      "Sonja Shaw": 1,
      "Nichelle M. Henderson": 1,
      "Richard Barrera": 1
    }
  },
  "Board of Equalization, District 2": {
    label: "local viability filter",
    source: "sfchronBoe",
    note: "No poll found; filtered to the incumbent and challengers with the clearest local/party or editorial-coverage viability signals.",
    threshold: 1,
    candidates: {
      "Sally J. Lieber": 1,
      "John Pimentel": 1,
      "John W. Zaruka": 1
    }
  }
};

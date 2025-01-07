function processCSV(data) {
    const rows = data.split("\n").filter(row => row.trim() !== "");

    rows.forEach((row, index) => {
      
      const columns = row.split(","); 
      console.log('columns', columns)
      const coordinates = columns[2].trim().split("|")
      .map(coord => coord.split("-").map(Number));
      console.log("coordinates", coordinates)

      //draw polygon function here
      drawPolygon(coordinates);
    });
  }
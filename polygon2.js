document.getElementById('file').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const csvData = e.target.result;
        plotPolygons(parseCSV(csvData));
      };
      reader.readAsText(file);
    }
  }

const parseCSV=(content)=> {
    const rows = content.split('\n').filter(row => row.trim() !== '');
    const polygons = [];
    rows.forEach(row => {
        const columns = row.split(',');
        console.log(columns)
        const polygonName = columns[0].trim();
        const polygonType = columns[1].trim();
        const coordinates = columns[2].trim().split('|');
  console.log(coordinates)
        const points = coordinates.map(coord => {
          const [x, y] = coord.split('-').map(Number);
          return { x, y };
        });
  
        console.log(polygons)
        polygons.push({
          name: polygonName,
          type: polygonType,
          points: points
        });
      });
  
      return polygons;
    
      
    }

function plotPolygons(polygons) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    polygons.forEach(polygon => {
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;

      const startPoint = polygon.points[0];
      ctx.moveTo(startPoint.x, startPoint.y);

      polygon.points.forEach(point => {
        ctx.lineTo(point.x, point.y);
      });

      ctx.closePath();
      ctx.stroke();
    });
  }

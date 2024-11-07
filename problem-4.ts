

type Circle = {
    shape: 'circle';
    radius: number;
}

type Rectangular = {
    shape: 'rectangle';
    height: number;
    width: number;
}

type Shape = Circle | Rectangular;

const calculateShapeArea = (shape: Shape) => {
    
    if (shape.shape === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.shape === "rectangle") {
        return (shape.width * shape.height);
    }
}


const area = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  })
console.log(area)

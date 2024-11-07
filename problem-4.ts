
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

const calculateShapeArea = (shape: Shape): number | undefined => {
    
    if (shape.shape === 'circle') {
        return Math.PI * (shape.radius * shape.radius);
    }
    else if (shape.shape === "rectangle") {
        return (shape.width * shape.height);
    }
}
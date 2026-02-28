from abc import ABC, abstractmethod
import math


class Shape(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def calculate_area(self):
        pass


class Rectangle(Shape):
    def __init__(self, length, width):
        super().__init__("Rectangle")
        self.length = length
        self.width = width

    def calculate_area(self):
        return self.length * self.width


class Square(Shape):
    def __init__(self, side):
        super().__init__("Square")
        self.side = side

    def calculate_area(self):
        return self.side ** 2


class Circle(Shape):
    def __init__(self, radius):
        super().__init__("Circle")
        self.radius = radius

    def calculate_area(self):
        return math.pi * (self.radius ** 2)


class Cylinder(Shape):
    def __init__(self, radius, height):
        super().__init__("Cylinder")
        self.radius = radius
        self.height = height

    def calculate_area(self):
        return 2 * math.pi * self.radius * (self.radius + self.height)


if __name__ == "__main__":
    shapes = [
        Rectangle(10, 5),
        Square(4),
        Circle(7),
        Cylinder(3, 8)
    ]

    for shape in shapes:
        print(f"{shape.name} Area: {shape.calculate_area():.2f}")

# Program to evaluate grade according to marks

def evaluate_grade(marks):
    """
    Evaluates and returns the grade based on marks.
    """
    if marks < 0 or marks > 100:
        return "Invalid marks! Please enter marks between 0 and 100."
    elif marks >= 90:
        return "A+"
    elif marks >= 80:
        return "A"
    elif marks >= 70:
        return "B"
    elif marks >= 60:
        return "C"
    elif marks >= 50:
        return "D"
    else:
        return "F"


def main():
    try:
        print("\n-------- Grade Evaluation Program -------\n")
        marks = float(input("Enter your marks (0-100): "))
        grade = evaluate_grade(marks)
        print(f"Your grade is: {grade}\n")
    except ValueError:
        print("\nInvalid input! Please enter a numeric value.")


if __name__ == "__main__":
    main()

def calculate_average(N, columns, rows):
    if N == 0 or "MARKS" not in columns:
        return 0.00

    marks_index = columns.index("MARKS")
    total_marks = 0.0
    valid_count = 0

    for row in rows:
        if len(row) > marks_index:
            try:
                total_marks += float(row[marks_index])
                valid_count += 1
            except ValueError:
                continue

    if valid_count == 0:
        return 0.00

    return total_marks / valid_count


def main():
    try:
        N = int(input("Enter total number of students: ").strip())
        columns = input(
            "Enter column names separated by space: ").strip().split()

        rows = []
        print("Enter student records (one per line):")
        for i in range(N):
            row = input(f"Student {i+1}: ").strip().split()
            rows.append(row)

        average = calculate_average(N, columns, rows)

        print(f"\nAverage Marks: {average:.2f}")

    except Exception:
        print("Invalid input. Average Marks: 0.00")


if __name__ == "__main__":
    main()

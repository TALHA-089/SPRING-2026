def count_substring_occurrences(string, sub_string):
    count = 0
    sub_len = len(sub_string)
    str_len = len(string)

    for i in range(str_len - sub_len + 1):
        if string[i:i + sub_len] == sub_string:
            count += 1

    return count


def main():
    try:
        string = input("Enter the original string: ").strip()
        sub_string = input("Enter the sub-string: ").strip()

        if not (1 <= len(string) <= 200):
            print("String length must be between 1 and 200.")
            return

        result = count_substring_occurrences(string, sub_string)

        print(f"\nNumber of occurrences: {result}")

    except Exception:
        print("Invalid input.")


if __name__ == "__main__":
    main()

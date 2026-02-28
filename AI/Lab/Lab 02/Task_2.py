def count_characters(input_str):
    char_count = {}
    order = []

    for ch in input_str:
        if ch not in char_count:
            char_count[ch] = 1
            order.append(ch)
        else:
            char_count[ch] += 1

    result = ", ".join(f"{ch}:{char_count[ch]}" for ch in order)
    return result


def main():
    input_str = input("Enter the string: ").strip()

    output = count_characters(input_str)
    print(f"\n{output}")


if __name__ == "__main__":
    main()

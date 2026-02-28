import random


def random_number_generator():
    for _ in range(5):
        yield random.randint(1, 100)


if __name__ == "__main__":
    print("5 Random Numbers:")
    for num in random_number_generator():
        print(num)

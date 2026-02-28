def fibonacci_generator(n):
    a, b = 0, 1
    while a <= n:
        yield a
        a, b = b, a + b


if __name__ == "__main__":
    limit = 50
    print(f"Fibonacci sequence up to {limit}:")

    for num in fibonacci_generator(limit):
        print(num)

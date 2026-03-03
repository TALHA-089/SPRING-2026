import heapq
from collections import deque


graph = {
    "S":  [("B1", 2), ("C", 5), ("B2", 4)],
    "B1": [("G", 5)],
    "B2": [("C", 1), ("F", 1)],
    "C":  [("G", 3)],
    "G":  [("C", 2)],
    "F":  [("C", 3)],
    "E":  [("B2", 4)]
}


def get_neighbors(node):
    return graph.get(node, [])


def dfs(start, goal):
    stack = [(start, [start])]
    visited = set()
    expanded = 0
    while stack:
        node, path = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        expanded += 1
        if node == goal:
            return path, expanded
        for neighbor, _ in get_neighbors(node):
            if neighbor not in visited:
                stack.append((neighbor, path + [neighbor]))
    return None, expanded


def bfs(start, goal):
    queue = deque([(start, [start])])
    visited = {start}
    expanded = 0
    while queue:
        node, path = queue.popleft()
        expanded += 1
        if node == goal:
            return path, expanded
        for neighbor, _ in get_neighbors(node):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None, expanded


def heuristic(node):
    return 0


def a_star(start, goal):
    counter = 0
    open_set = []
    heapq.heappush(open_set, (heuristic(start), counter, start))
    counter += 1
    came_from = {}
    g_score = {start: 0}
    closed_set = set()
    expanded = 0

    while open_set:
        f, _, current = heapq.heappop(open_set)
        if current in closed_set:
            continue
        closed_set.add(current)
        expanded += 1
        if current == goal:
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.insert(0, current)
            return path, expanded, g_score[path[-1]]
        for neighbor, weight in get_neighbors(current):
            if neighbor in closed_set:
                continue
            tentative_g = g_score[current] + weight
            if tentative_g < g_score.get(neighbor, float("inf")):
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                heapq.heappush(open_set, (tentative_g + heuristic(neighbor), counter, neighbor))
                counter += 1

    return None, expanded, float("inf")


print("=" * 60)
print("Task 1: Graph Representation (Adjacency List)")
print("=" * 60)
print()
for node in graph:
    neighbors = ", ".join(f"{n}(w={w})" for n, w in graph[node])
    print(f"  {node} -> [{neighbors}]")

print()
print("=" * 60)
print("Task 2: DFS (Depth-First Search)")
print("=" * 60)
dfs_path, dfs_expanded = dfs("S", "G")
if dfs_path:
    print(f"Path: {' -> '.join(dfs_path)}")
else:
    print("Path: No path found")
print(f"Expanded nodes: {dfs_expanded}")

print()
print("=" * 60)
print("Task 2: BFS (Breadth-First Search)")
print("=" * 60)
bfs_path, bfs_expanded = bfs("S", "G")
if bfs_path:
    print(f"Path: {' -> '.join(bfs_path)}")
else:
    print("Path: No path found")
print(f"Expanded nodes: {bfs_expanded}")

print()
print("=" * 60)
print("Task 3: A* Search (h(n) = 0, equivalent to Dijkstra)")
print("=" * 60)
astar_path, astar_expanded, astar_cost = a_star("S", "G")
if astar_path:
    print(f"Path: {' -> '.join(astar_path)}")
else:
    print("Path: No path found")
print(f"Expanded nodes: {astar_expanded}")
print(f"Total path cost: {astar_cost}")

print()
print("=" * 60)
print("Task 4: A* Search (h(n) = 0, equivalent to Dijkstra)")
print("=" * 60)
astar_path, astar_expanded, astar_cost = a_star("S", "G")
if astar_path:
    print(f"Path: {' -> '.join(astar_path)}")
else:
    print("Path: No path found")
print(f"Expanded nodes: {astar_expanded}")
print(f"Total path cost: {astar_cost}")
print("=" * 60)

print()
print("=" * 60)
print("Task 5: Comparison: DFS vs BFS vs A*")
print("=" * 60)
print("""
+-------------------+------------------+------------------+------------------------+
| Criterion         | DFS              | BFS              | A*                     |
+-------------------+------------------+------------------+------------------------+
| Data Structure    | Stack (LIFO)     | Queue (FIFO)     | Priority Queue (Heap)  |
+-------------------+------------------+------------------+------------------------+
| Complete          | No (may loop     | Yes (for finite  | Yes (with admissible   |
|                   | without visited  | graphs)          | heuristic and finite   |
|                   | tracking)        |                  | branching factor)      |
+-------------------+------------------+------------------+------------------------+
| Optimal           | No (finds any    | Yes (for uniform | Yes (with admissible   |
|                   | path, not best)  | edge costs)      | heuristic)             |
+-------------------+------------------+------------------+------------------------+
| Time Complexity   | O(b^m)           | O(b^d)           | O(b^d) worst case,     |
|                   | b = branching    | b = branching    | often much better      |
|                   | factor           | factor           | with a good heuristic  |
|                   | m = max depth    | d = solution     |                        |
|                   |                  | depth            |                        |
+-------------------+------------------+------------------+------------------------+
| Space Complexity  | O(b*m)           | O(b^d)           | O(b^d)                 |
|                   | (linear in path  | (exponential,    | (stores all generated  |
|                   | length)          | stores all nodes | nodes in open/closed   |
|                   |                  | at depth d)      | sets)                  |
+-------------------+------------------+------------------+------------------------+
| When to Use       | Memory-limited   | Finding shortest | Finding lowest-cost    |
|                   | scenarios, maze  | path in          | path in weighted       |
|                   | solving, topo-   | unweighted       | graphs such as GPS     |
|                   | logical sorting, | graphs, level-   | navigation, robotics   |
|                   | cycle detection  | order traversal, | path planning, and     |
|                   | in graphs        | peer-to-peer     | game AI where a good   |
|                   |                  | networking       | heuristic is available |
+-------------------+------------------+------------------+------------------------+

Heuristic Justification:
h(n) = 0 is used for all nodes, which is trivially admissible because it
never overestimates the actual cost to reach the goal (the actual cost is
always >= 0). With h(n) = 0, A* reduces to Dijkstra's algorithm, which
guarantees finding the optimal (minimum-cost) path. This choice is
appropriate when no domain-specific distance estimate is available for
the graph nodes.
""")

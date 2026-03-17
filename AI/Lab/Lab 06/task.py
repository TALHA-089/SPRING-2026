import heapq
import time
import copy

# ==========================================
# 🔹 1. CONSTANTS & HELPER FUNCTIONS
# ==========================================

# The goal state defined as a tuple of tuples (for immutability and hashability)
GOAL_STATE = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 0)
)

def print_board(state):
    """Prints the 3x3 board in a readable format."""
    for row in state:
        print(" | ".join(str(val) if val != 0 else " " for val in row))
    print("-" * 13)

def is_solvable(state):
    """
    Checks if a given 8-puzzle state is solvable.
    An 8-puzzle is solvable if the number of inversions is even.
    An inversion is when a tile precedes another tile with a lower number.
    """
    flat_state = [val for row in state for val in row if val != 0]
    inversions = 0
    for i in range(len(flat_state)):
        for j in range(i + 1, len(flat_state)):
            if flat_state[i] > flat_state[j]:
                inversions += 1
    return inversions % 2 == 0

# ==========================================
# 🔹 2. AGENT COMPONENTS
# ==========================================

class Node:
    """Represents a state node in the search tree."""
    def __init__(self, state, parent=None, move=None, g=0, h=0):
        self.state = state      # 2D tuple representing the board
        self.parent = parent    # Pointer to parent node to trace path
        self.move = move        # The move taken to reach this state
        self.g = g              # Cost from start to current node
        self.h = h              # Heuristic estimated cost to goal
        self.f = g + h          # Evaluation function f(n) = g(n) + h(n)

    def __lt__(self, other):
        """Allows priority queue (min-heap) to sort nodes based on f(n)."""
        return self.f < other.f

def get_successors(node):
    """
    Generates all valid successor states from the current node.
    Returns a list of tuples: (new_state, move_name)
    """
    successors = []
    
    # Locate the blank space (0)
    zero_r, zero_c = -1, -1
    for r in range(3):
        for c in range(3):
            if node.state[r][c] == 0:
                zero_r, zero_c = r, c
                break
                
    # Define potential moves: (Row Offset, Col Offset, Move Name)
    moves = [
        (-1, 0, 'Up'),
        (1, 0, 'Down'),
        (0, -1, 'Left'),
        (0, 1, 'Right')
    ]
    
    for dr, dc, move_name in moves:
        new_r, new_c = zero_r + dr, zero_c + dc
        
        # Check if the move is within the 3x3 grid boundaries
        if 0 <= new_r < 3 and 0 <= new_c < 3:
            # Convert tuple to list of lists for mutability
            new_state = [list(row) for row in node.state]
            
            # Swap the blank space with the target tile
            new_state[zero_r][zero_c], new_state[new_r][new_c] = new_state[new_r][new_c], new_state[zero_r][zero_c]
            
            # Convert back to tuple of tuples for immutability
            successors.append((tuple(tuple(row) for row in new_state), move_name))
            
    return successors

def heuristic(state, goal_state, h_type='manhattan'):
    """
    Calculates the heuristic cost h(n) from the current state to the goal.
    Supports both 'manhattan' and 'misplaced' heuristics.
    """
    h_cost = 0
    
    if h_type == 'manhattan':
        # Precompute the target positions for each tile in the goal state
        goal_positions = {goal_state[r][c]: (r, c) for r in range(3) for c in range(3)}
        
        for r in range(3):
            for c in range(3):
                val = state[r][c]
                if val != 0: # Ignore the blank space
                    goal_r, goal_c = goal_positions[val]
                    # Manhattan distance formula: |x1 - x2| + |y1 - y2|
                    h_cost += abs(r - goal_r) + abs(c - goal_c)
                    
    elif h_type == 'misplaced':
        for r in range(3):
            for c in range(3):
                val = state[r][c]
                # Count tiles that are not in their goal position (excluding 0)
                if val != 0 and val != goal_state[r][c]:
                    h_cost += 1
                    
    return h_cost

# ==========================================
# 🔹 3. A* SEARCH ALGORITHM
# ==========================================

def a_star(start_state, goal_state, h_type='manhattan'):
    """
    Executes the A* search algorithm to find the optimal path to the goal.
    """
    start_time = time.time()
    
    # Priority Queue (Min-Heap) representing the Open List
    open_list = []
    
    # Set to keep track of visited states (Closed List) to prevent revisiting
    closed_set = set()
    
    # Initialize the start node
    start_h = heuristic(start_state, goal_state, h_type)
    start_node = Node(state=start_state, parent=None, move="Start", g=0, h=start_h)
    
    # Push start node to the open list
    heapq.heappush(open_list, start_node)
    
    nodes_expanded = 0
    
    while open_list:
        # Pop the node with the lowest f(n)
        current_node = heapq.heappop(open_list)
        
        # Goal Formulation Check
        if current_node.state == goal_state:
            execution_time = time.time() - start_time
            return current_node, nodes_expanded, execution_time
            
        # Add current state to closed set
        closed_set.add(current_node.state)
        nodes_expanded += 1
        
        # State Space Exploration: Generate valid successors
        for next_state, move_name in get_successors(current_node):
            if next_state in closed_set:
                continue # Skip already explored states
                
            # Decision-making: Calculate costs for the successor
            g_cost = current_node.g + 1
            h_cost = heuristic(next_state, goal_state, h_type)
            
            # Create successor node
            child_node = Node(state=next_state, parent=current_node, move=move_name, g=g_cost, h=h_cost)
            
            # Push to open list. 
            # (Note: In strict A*, we'd check if child is in open_list with higher cost and update it, 
            # but with consistent heuristics like Manhattan, standard closed_set checking suffices.)
            heapq.heappush(open_list, child_node)
            
    return None, nodes_expanded, time.time() - start_time # No solution found

# ==========================================
# 🔹 4. OUTPUT AND EXECUTION
# ==========================================

def print_path(goal_node):
    """Traces back the parent pointers to reconstruct and print the path."""
    path = []
    current = goal_node
    while current:
        path.append(current)
        current = current.parent
        
    path.reverse() # Reverse to get the path from start to goal
    
    for step, node in enumerate(path):
        if step == 0:
            print("Step 0: Initial State")
        else:
            print(f"Step {step}: Move '{node.move}' (g={node.g}, h={node.h}, f={node.f})")
        print_board(node.state)
        
    return len(path) - 1 # Total moves is path length minus 1

def run_agent():
    # Example Solvable Initial State
    INITIAL_STATE = (
        (2, 4, 3),
        (1, 0, 6),
        (7, 5, 8)
    )

    print("═══════════════════════════════════════")
    print("🔹 GOAL-BASED AGENT: 8-PUZZLE SOLVER")
    print("═══════════════════════════════════════\n")
    
    print("INITIAL STATE:")
    print_board(INITIAL_STATE)
    
    print("GOAL STATE:")
    print_board(GOAL_STATE)
    
    # Bonus: Solvability Check
    if not is_solvable(INITIAL_STATE):
        print("ERROR: This puzzle configuration is UNSOLVABLE.")
        return
    else:
        print("Solvability Check Passed! The puzzle is solvable.\n")

    # Run and Compare Heuristics (Bonus)
    heuristics = ['misplaced', 'manhattan']
    
    for h in heuristics:
        print(f"Running A* Search with '{h.upper()}' heuristic...")
        goal_node, nodes_expanded, exec_time = a_star(INITIAL_STATE, GOAL_STATE, h_type=h)
        
        if goal_node:
            print(f"GOAL STATE REACHED!\n")
            if h == 'manhattan':
                # Only print the full path for the best heuristic to save console space
                print("--- STEP-BY-STEP PATH ---")
                total_moves = print_path(goal_node)
            else:
                total_moves = goal_node.g
                
            print(f"{h.capitalize()} Heuristic Results:")
            print(f"   - Total Moves (Path Cost): {total_moves}")
            print(f"   - Nodes Expanded: {nodes_expanded}")
            print(f"   - Execution Time: {exec_time:.4f} seconds\n")
        else:
            print("Failed to find a solution.\n")

if __name__ == "__main__":
    run_agent()
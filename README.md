# 🧩 Sudoku Game & Solver  
**Angular | Algorithms | Problem Solving**

A web-based **Sudoku game and solver** built using **Angular 14.2.3**.  
This project allows users to **create and solve Sudoku puzzles** using a **custom backtracking algorithm implemented from scratch**, without relying on any external Sudoku-solving libraries.

---

## ✨ Features

- 🎮 Play Sudoku in the browser
- ✏️ Create custom Sudoku puzzles
- 🧠 Solve Sudoku using a custom backtracking algorithm
- 🚫 No third-party Sudoku solver libraries used
- ✅ Validates all Sudoku rules
- 🧪 Unit tests included
- ⚡ Built with Angular 14

---

## 🛠️ Tech Stack

- **Frontend:** Angular 14.2.3
- **Language:** TypeScript
- **Algorithm:** Backtracking (custom implementation)
- **Testing:** Karma / Jasmine

---

## 🧠 Sudoku Solver Algorithm

The solver uses a **recursive backtracking algorithm**:

1. Identify an empty cell in the grid
2. Try numbers from **1 to 9**
3. Validate the number against:
   - Row constraints
   - Column constraints
   - 3×3 sub-grid constraints
4. Recursively continue if valid
5. Backtrack when conflicts occur

This guarantees a correct solution when one exists.

---

## 📦 Installation

### Prerequisites

- Node.js (v14+)
- npm

### Steps

```bash
git clone https://github.com/Ashu-vk/sudoku.git
cd sudoku
npm install

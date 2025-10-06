# Svelte Mac Keyboard

A customizable and animated Mac-style keyboard component for Svelte. It visually responds to both keyboard and mouse events.

## Setup and Running the Project

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/timoweiss/svelte-mac-keyboard.git
    cd svelte-mac-keyboard
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

3.  **Run the development server:**
    ```sh
    bun run dev
    ```
    The application will be available at `http://localhost:5173`.

## How to Use in Another Project

1.  **Copy the component:**
    Copy the `keyboard.svelte` file from `src/lib/components/` into your own Svelte project's components directory. Also, copy the `utils.ts` file from `src/lib/` for class name utility if you didn't install shadcn/ui yet.

2.  **Import the component:**
    In your Svelte file, import the `Keyboard` component:
    ```svelte
    <script lang="ts">
        import Keyboard from './path/to/keyboard.svelte';
    </script>

    <Keyboard />
    ```

## Customization

You can customize the keyboard's appearance and layout directly within the `keyboard.svelte` file.

-   **Styling:**
    Modify the style constants at the top of the script section to change colors, fonts, and borders.
    ```javascript
    const BG_COLOR = 'bg-[#67666b]';
    const KEY_BG_COLOR = 'bg-[#161920]';
    // ... and so on
    ```

-   **Layout:**
    The `keyboardLayout` array defines the structure of the keyboard. You can add, remove, or reorder keys by editing this array. Each key object can have properties like `code`, `label`, `size`, etc.
    ```javascript
    const keyboardLayout: Key[][] = [
        [
            { code: 'Backquote', label: '`', shiftLabel: '~' },
            // ... more keys
        ],
        // ... more rows
    ];
    ```

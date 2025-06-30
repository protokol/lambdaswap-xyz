# LambdaSwap

The essential gateway to the EulerSwap ecosystem. Swap with confidence, provide liquidity with precision.

LambdaSwap is an all-in-one platform built on top of EulerSwap that unlocks the full potential of its next-generation AMM. We provide sophisticated tools for liquidity providers and the best execution for traders through a seamless, intuitive interface.

Our platform makes the advanced concepts of Just-in-Time (JIT) liquidity, programmable operators, and custom AMM curves accessible, practical, and powerful for everyone.

## Key Features

Smart-Routing Swaps: Our swap interface automatically finds the most optimal pool for any trade, leveraging EulerSwap's JIT liquidity to guarantee the best price and minimal slippage.

Guided Pool Creation: An intuitive wizard that allows anyone to launch a custom-designed liquidity pool. Use our "Architect" tool to visually design an AMM curve perfect for your strategy.

Active Rebalancing Logic: Go beyond "set and forget." Our tools enable liquidity providers to actively manage and update their pool's strategy in response to market conditions, just as the EulerSwap protocol intended.

Advanced Pool Explorer: A comprehensive dashboard to discover and analyze the performance, configuration, and unique strategies of all active EulerSwap pools.

## How It Works

LambdaSwap is built directly on top of EulerSwap's smart contract architecture.

For Swaps: Our application intelligently interfaces with the network of on-chain Operator contracts. The smart router queries these operators to find the one that will provide the best execution and routes the trade accordingly.

For Liquidity Providers: We provide a user-friendly factory for deploying unique, user-owned Operator contracts. Our interface allows LPs to define the parameters for their pool's custom curve and strategy, which are then encoded into the contract they deploy on-chain.

## Getting Started (For Developers)

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or later)
- [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repo**

   ```sh
   git clone https://github.com/protokol/lambdaswap-xyz
   cd lambdaswap-xyz
   ```

2. **Install dependencies**

   ```sh
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root of the project and add your environment variables. You can use the `.env.example` file as a template.

   ```
   VITE_ALCHEMY_API_KEY=...<>
   ```

4. **Run the development server**
   ```sh
   pnpm dev
   ```

### Tech Stack

- **Framework:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Web3:** [Viem](https://viem.sh/) & [Wagmi](https://wagmi.sh/) for blockchain interaction.
- **UI:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) / [React Query](https://tanstack.com/query/v4)

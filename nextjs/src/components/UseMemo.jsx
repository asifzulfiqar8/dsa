"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

const factorial = (num) => {
  console.log(`Calculating factorial(${num})`);
  if (num < 0) return 0;
  return num === 0 ? 1 : num * factorial(num - 1);
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  console.log("counter is increasing clicking");

  const memoizedFactorial = useMemo(() => factorial(num), [num]);
  return (
    <div className="p-5 border rounded-md">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-full border outline-none rounded-md py-2 px-4"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button
          className="bg-black text-white font-semibold px-5 py-2 text-nowrap rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increase Counter: {count}
        </button>
        <Link href="/posts">Posts</Link>
      </div>
      <div className="mt-5">
        Factorial of {num} is: {memoizedFactorial}
      </div>
    </div>
  );
};

export default UseMemo;

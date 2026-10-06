export interface EconomicsLesson {
  day: number;
  title: string;
  subtitle: string;
  pages: string[];
  idea: string;
  steps: string[];
  check: { question: string; answer: string };
  examples: {
    sourceNumber: number;
    source: string;
    question: string;
    formulaId: string;
    entry: string;
    answer: string;
    note: string;
  }[];
}
export const ECONOMICS_LESSONS: EconomicsLesson[] = [
  {
    day: 1,
    title: "Start with one amount",
    subtitle: "Simple and compound interest",
    pages: ["IMG_0767.HEIC", "IMG_0768.HEIC"],
    idea: "Interest is the price of using money. Simple interest grows by the same amount each year; compound interest grows on the new balance.",
    steps: [
      "Write what is given and what is asked: principal, interest only, or total amount.",
      "Convert months to years or count days using the stated year basis.",
      "For compound interest, count all compounding periods before calculating.",
    ],
    check: {
      question:
        "₱1,000 earns 10% simple interest for 2 years. What is the interest and total amount?",
      answer:
        "Interest = ₱200; total = ₱1,200. Compound interest would produce ₱1,210 instead.",
    },
    examples: [
      {
        sourceNumber: 1,
        source: "IMG_0767.HEIC",
        question:
          "Juan withdraws ₱107,500 after 15 months at 6% simple interest. How much was deposited?",
        formulaId: "simple",
        entry: "107500 ÷ (1 + 0.06 × 15 ÷ 12)",
        answer: "₱100,000 — A",
        note: "Divide the future amount by the simple-interest growth factor.",
      },
      {
        sourceNumber: 5,
        source: "IMG_0768.HEIC",
        question:
          "₱50,000 earns 5% compounded semiannually for 5 years. Find the total.",
        formulaId: "compound",
        entry: "50000 × (1 + 0.05 ÷ 2)^10",
        answer: "₱64,004.23 — C (printed ₱64,004.22)",
        note: "Five years × two periods = ten. The printed option differs by one cent.",
      },
    ],
  },
  {
    day: 2,
    title: "Get the rate right",
    subtitle: "Equivalent rates and continuous compounding",
    pages: ["IMG_0768.HEIC", "IMG_0769.HEIC"],
    idea: "A rate and a time period belong together. Match the interest interval to the cash-flow interval before you choose a formula.",
    steps: [
      "Identify whether the annual rate is nominal, effective, or continuous.",
      "Convert to an effective rate per payment period.",
      "Use the rate as a decimal: 10% means 0.10.",
    ],
    check: {
      question:
        "What effective annual rate comes from 10% nominal, compounded semiannually?",
      answer: "(1.05)²−1 = 10.25%.",
    },
    examples: [
      {
        sourceNumber: 8,
        source: "IMG_0769.HEIC",
        question:
          "Convert 10% nominal compounded semiannually to an effective annual rate.",
        formulaId: "rate",
        entry: "((1 + 0.10 ÷ 2)^2 − 1) × 100",
        answer: "10.25% — B",
        note: "Two 5% growth periods produce 10.25% yearly.",
      },
      {
        sourceNumber: 10,
        source: "IMG_0769.HEIC",
        question:
          "₱6,000 earns 5.2% compounded continuously for 8 years. Find the balance.",
        formulaId: "continuous",
        entry: "6000 × e^(0.052 × 8)",
        answer: "₱9,095.31 — D (printed ₱9,095.32)",
        note: "Use eˣ, not 10ˣ. A one-cent source difference is noted.",
      },
    ],
  },
  {
    day: 3,
    title: "Equal payments made simple",
    subtitle: "Ordinary annuity, repayment, savings",
    pages: ["IMG_0769.HEIC", "IMG_0770.HEIC"],
    idea: "An annuity is a row of equal payments. Decide whether you want its value today, its value at the end, or the size of each payment.",
    steps: [
      "Draw the first payment at period 1 for an ordinary annuity.",
      "Use P/A for a value today; F/A for accumulated savings.",
      "Use A/P for loan payments; A/F for deposits toward a target.",
    ],
    check: {
      question:
        "Does the final deposit earn another year of interest when the target date is that deposit’s date?",
      answer: "No. At that date, its growth factor is 1.",
    },
    examples: [
      {
        sourceNumber: 12,
        source: "IMG_0769.HEIC",
        question:
          "Find the present worth of ₱15,000 paid yearly for 7 years at 11%.",
        formulaId: "pa",
        entry: "15000 × (1 − 1.11^(−7)) ÷ 0.11",
        answer: "₱70,682.94 — D",
        note: "The first payment is at the end of year 1.",
      },
      {
        sourceNumber: 13,
        source: "IMG_0770.HEIC",
        question:
          "₱50,000 is withdrawn in equal yearly amounts over 12 years at 9% nominal compounded quarterly.",
        formulaId: "cr",
        entry: "50000 × (1.0225^4 − 1) ÷ (1 − (1.0225^4)^(−12))",
        answer: "₱7,091.36; no matching printed choice.",
        note: "The original printed choices are around ₱1,200–₱1,800 and do not fit the stated annual-withdrawal question. The rate must be effective yearly.",
      },
    ],
  },
  {
    day: 4,
    title: "Put payments on a timeline",
    subtitle: "Due, deferred, unequal payments, perpetuity",
    pages: ["IMG_0770.HEIC", "IMG_0771.HEIC"],
    idea: "Moving a payment earlier makes it worth more today. P/A always sits one period before the first payment; that rule removes most timing errors.",
    steps: [
      "Mark now as period 0. Count every actual payment.",
      "Beginning payments: multiply ordinary worth by 1+i.",
      "Deferred payments: find worth one period before the first, then discount to now.",
      "Forever: use A/i with the matching payment-period rate.",
    ],
    check: {
      question:
        "An annuity first pays at year 4. Where is its P/A value located?",
      answer: "At year 3, so discount it three years to get present worth.",
    },
    examples: [
      {
        sourceNumber: 14,
        source: "IMG_0770.HEIC",
        question:
          "A ₱1,000,000 tractor is paid in 20 semiannual installments beginning now, at 28% nominal compounded semiannually.",
        formulaId: "due",
        entry: "1000000 × 0.14 ÷ (1 − 1.14^(−20)) ÷ 1.14",
        answer: "₱132,443.86 — A",
        note: "Divide the ordinary payment by 1.14 for payments one period earlier.",
      },
      {
        sourceNumber: 17,
        source: "IMG_0771.HEIC",
        question:
          "Pay ₱100,000 now and ten ₱8,000 semiannual payments starting at year 3. Find cash price at 12% compounded semiannually.",
        formulaId: "deferred",
        entry: "100000 + 8000 × (1 − 1.06^(−10)) ÷ 0.06 ÷ 1.06^5",
        answer: "₱143,999.08 — nearest A (₱144,000)",
        note: "Year 3 is period 6; discount the annuity value five periods.",
      },
    ],
  },
  {
    day: 5,
    title: "Understand depreciation",
    subtitle: "Book value, straight line, sinking fund, SYD, DB",
    pages: ["IMG_0772.HEIC", "IMG_0773.HEIC"],
    idea: "Depreciation allocates an asset’s cost over its life. Book value is cost minus accumulated depreciation; it is not necessarily the resale price.",
    steps: [
      "Write installed cost C, net salvage S, life n, and requested year m.",
      "Identify the specified method before solving.",
      "Check whether the question asks one year’s charge, total charges, or remaining book value.",
      "For double declining balance, use 2/n and respect the salvage floor.",
    ],
    check: {
      question:
        "Cost ₱10,000, salvage ₱1,000, life 10 years: what is year-6 straight-line book value?",
      answer: "Annual charge ₱900; book value ₱10,000−6(₱900)=₱4,600.",
    },
    examples: [
      {
        sourceNumber: 19,
        source: "IMG_0772.HEIC",
        question:
          "Cost ₱120,000, salvage ₱15,000, life 9 years. Find straight-line book value after 7 years.",
        formulaId: "sl",
        entry: "120000 − 7 × (120000 − 15000) ÷ 9",
        answer: "₱38,333.33 — D",
        note: "Subtract seven equal annual charges.",
      },
      {
        sourceNumber: 23,
        source: "IMG_0773.HEIC",
        question:
          "Cost ₱900,000, salvage ₱200,000, life 8 years. Find SYD book value after 5 years.",
        formulaId: "syd",
        entry: "900000 − 700000 × (8 + 7 + 6 + 5 + 4) ÷ 36",
        answer: "₱316,666.67 — B (rounded ₱316,667)",
        note: "Five depreciation digits sum to 30; SYD is 36.",
      },
    ],
  },
  {
    day: 6,
    title: "Compare costs fairly",
    subtitle: "Inflation, annual cost, capitalized cost",
    pages: ["IMG_0773.HEIC", "IMG_0774.HEIC"],
    idea: "Future pesos buy a different amount of goods. For project comparisons, bring costs to one basis: today’s value, equal yearly cost, or indefinite service cost.",
    steps: [
      "Keep nominal money and constant purchasing power separate.",
      "Annual cost: recover initial cost, subtract salvage recovery, add running costs.",
      "Capitalized cost: include initial cost, perpetual maintenance, and recurring replacements.",
      "If the handout requests straight-line annual cost, name that convention explicitly.",
    ],
    check: {
      question:
        "A permanent facility costs ₱2 million and ₱200,000/year to maintain at 20%. What is capitalized cost?",
      answer: "₱2,000,000+₱200,000/0.20=₱3,000,000.",
    },
    examples: [
      {
        sourceNumber: 30,
        source: "IMG_0774.HEIC",
        question:
          "A power plant costs ₱2 million with ₱200,000 annual expenses indefinitely. Find capitalized cost at 20%.",
        formulaId: "cc",
        entry: "2000000 + 200000 ÷ 0.20",
        answer: "₱3,000,000 — C",
        note: "Annual expenses are a perpetuity.",
      },
      {
        sourceNumber: 31,
        source: "IMG_0774.HEIC",
        question:
          "A bridge costs ₱500,000 and requires ₱30,000 resurfacing every 4 years forever. Find capitalized cost at 10%.",
        formulaId: "cc",
        entry: "500000 + 30000 ÷ (1.10^4 − 1)",
        answer: "₱564,641.24 — A (rounded ₱564,641)",
        note: "Recurring work begins at year 4, so use the repeating replacement term.",
      },
    ],
  },
  {
    day: 7,
    title: "Make the final decision",
    subtitle: "Benefit–cost, return, bonds, break-even",
    pages: ["IMG_0774.HEIC", "IMG_0775.HEIC"],
    idea: "A project must earn enough to justify its costs. A bond is coupons plus redemption; break-even units must cover both variable and fixed costs.",
    steps: [
      "Use the same rate and horizon for benefits and costs.",
      "Rate of return: solve present-worth receipts minus investment = 0.",
      "Bonds: match coupon periods, and separate coupon rate from yield.",
      "Break-even: divide fixed cost by contribution per unit; round upward for whole units.",
      "Complete your self-check, mark day 7 done, then open the sample set below.",
    ],
    check: {
      question:
        "Fixed cost ₱220,000; selling price ₱210; variable cost ₱160. Find break-even units.",
      answer: "₱220,000/(₱210−₱160)=4,400 units.",
    },
    examples: [
      {
        sourceNumber: 33,
        source: "IMG_0775.HEIC",
        question:
          "A ₱5,000 bond pays ₱250 yearly and redeems after 8 years. Find price for a 6% annual yield.",
        formulaId: "bond",
        entry: "250 × (1 − 1.06^(−8)) ÷ 0.06 + 5000 ÷ 1.06^8",
        answer: "₱4,689.51 — B",
        note: "Discount eight coupons plus the redemption.",
      },
      {
        sourceNumber: 35,
        source: "IMG_0775.HEIC",
        question:
          "Fixed annual expenses are ₱220,000, cost per unit ₱160, selling price ₱210. Find break-even quantity.",
        formulaId: "breakEven",
        entry: "220000 ÷ (210 − 160)",
        answer: "4,400 units — A",
        note: "Each unit contributes ₱50 toward fixed cost.",
      },
    ],
  },
];

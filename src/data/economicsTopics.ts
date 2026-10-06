// Teaching notes are written in the app; original sheet IDs are provenance only.
export interface EconomicsTopicNote {
  id: string;
  idea: string;
  recognize: string;
  example: string;
  steps: string[];
  answer: string;
}
export const ECONOMICS_TOPIC_NOTES: EconomicsTopicNote[] = [
  {
    id: "simple",
    idea: "Simple interest is a rental fee on the original money. Earlier interest does not earn more interest.",
    recognize:
      "Look for “simple interest,” ordinary interest, or exact interest.",
    example:
      "Borrow ₱1,000 for 90 days at 12% ordinary simple interest. Find interest and amount due.",
    steps: [
      "Convert the rate: 12% = 0.12. Ordinary interest uses t=90/360=0.25 year.",
      "Interest I=1000×0.12×0.25=₱30.",
      "Amount due F=P+I=1000+30.",
    ],
    answer:
      "Interest ₱30; amount due ₱1,030. Exact interest uses 365 days, or 366 for the stated leap-year basis.",
  },
  {
    id: "compound",
    idea: "Each compounding period adds interest to the balance. The next period earns interest on that larger balance.",
    recognize:
      "One deposit or loan; interest is compounded annually, quarterly, monthly, or semiannually.",
    example: "Deposit ₱1,000 at 10% compounded annually for 2 years.",
    steps: [
      "The rate per year is i=0.10 and the number of periods is n=2.",
      "First year: 1000×1.10=1100. Second year: 1100×1.10=1210.",
      "Shortcut: enter 1000×1.10^2. Interest earned is 1210−1000.",
    ],
    answer:
      "Future amount ₱1,210; interest ₱210. For nominal r compounded m times/year, use i=r/m and n=m×years.",
  },
  {
    id: "rate",
    idea: "An annual rate and a monthly payment use different clocks. Convert the rate to the payment clock first.",
    recognize:
      "Compounding differs from payment timing, or an equivalent/effective rate is requested.",
    example:
      "A 12% nominal rate is compounded quarterly, but payments are monthly.",
    steps: [
      "Quarterly interest is 0.12/4=0.03. Three monthly periods fit one quarter.",
      "Monthly interest i=(1.03)^(1/3)−1≈0.00990163.",
      "Use 0.990163% per month in the annuity formula; count payments in months.",
    ],
    answer:
      "Effective monthly rate ≈0.990163%. If 12% is effective annually instead, monthly i=(1.12)^(1/12)−1.",
  },
  {
    id: "continuous",
    idea: "Continuous compounding is the limiting case of compounding more and more frequently. Its growth factor is e^(rt).",
    recognize: "The question explicitly says “compounded continuously.”",
    example: "How long to double money at a continuous 10% annual rate?",
    steps: [
      "F/P=2 and r=0.10.",
      "Take natural logarithms: t=ln(2)/0.10.",
      "Canon entry: ln(2)÷0.10.",
    ],
    answer:
      "6.93147 years. For a future amount, use eˣ; for a time or continuous rate, use ln.",
  },
  {
    id: "pa",
    idea: "Present worth is the single amount today that can fund a row of equal future payments.",
    recognize:
      "Equal end-of-period payments; asking cash price, loan amount, or present value.",
    example:
      "Receive ₱1,000 at each year-end for 3 years at 10%. What is the value today?",
    steps: [
      "Payments occur at years 1, 2, and 3, so this is an ordinary annuity.",
      "P=1000×(1−1.10^(−3))÷0.10.",
      "Check by adding 1000/1.10 + 1000/1.10^2 + 1000/1.10^3.",
    ],
    answer:
      "Present worth ₱2,486.85. This value sits one period before the first payment.",
  },
  {
    id: "fa",
    idea: "Future worth adds all equal deposits after moving them to the date of the final deposit.",
    recognize: "Regular savings at period-end; asking the accumulated balance.",
    example: "Deposit ₱1,000 at each year-end for 3 years at 10%.",
    steps: [
      "The deposits earn 2, 1, and 0 years of interest at year 3.",
      "F=1000×(1.10^3−1)÷0.10.",
      "Check: 1000×1.10^2 + 1000×1.10 + 1000.",
    ],
    answer:
      "Balance at year 3: ₱3,310. The last deposit is included, but earns no extra year.",
  },
  {
    id: "cr",
    idea: "Capital recovery splits a present debt into equal payments that cover both interest and principal.",
    recognize:
      "Given today’s financed amount; asking installment or annual repayment.",
    example: "Repay a ₱10,000 loan in 3 year-end payments at 10%.",
    steps: [
      "P=10000, i=0.10, n=3.",
      "A=10000×0.10÷(1−1.10^(−3)).",
      "Enter the whole denominator in parentheses.",
    ],
    answer:
      "Each payment is ₱4,021.15. Deduct any down payment before identifying P.",
  },
  {
    id: "sf",
    idea: "A sinking fund builds a target amount through equal interest-earning deposits.",
    recognize:
      "Asking how much to save each period for a future replacement or redemption.",
    example: "Save ₱10,000 by year 3 through year-end deposits at 10%.",
    steps: [
      "F=10000, i=0.10, n=3.",
      "A=10000×0.10÷(1.10^3−1).",
      "This is the reverse of the F/A accumulated-savings formula.",
    ],
    answer:
      "Deposit ₱3,021.15 each year. For asset replacement, check whether the target is cost minus salvage.",
  },
  {
    id: "due",
    idea: "A beginning-of-period payment has one more period of value than an end-of-period payment.",
    recognize: "“Beginning,” “in advance,” or “first payment now.”",
    example: "Pay ₱1,000 at years 0, 1, and 2. Find present worth at 10%.",
    steps: [
      "An ordinary three-payment present worth is 1000×(1−1.10^(−3))÷0.10.",
      "Multiply that value by 1.10 because every payment is one year earlier.",
      "Check: 1000 + 1000/1.10 + 1000/1.10^2.",
    ],
    answer:
      "Present worth ₱2,735.54. To find a due-annuity payment from P, divide the ordinary payment by 1+i.",
  },
  {
    id: "deferred",
    idea: "A delayed annuity is an ordinary annuity moved farther into the future.",
    recognize: "Equal payments start several periods after today.",
    example:
      "Receive ₱1,000 yearly at years 4, 5, and 6. Find present worth at 10%.",
    steps: [
      "The P/A value is at year 3: one period before the first payment at year 4.",
      "At year 3, value=1000×(1−1.10^(−3))÷0.10.",
      "Discount three more years: divide that value by 1.10^3.",
    ],
    answer:
      "Present worth ₱1,868.41. The discount exponent is first-payment period minus one.",
  },
  {
    id: "perpetuity",
    idea: "A perpetuity repeats the same payment forever. At positive interest, its present value can still be finite.",
    recognize:
      "“Forever,” “indefinitely,” or an endowment with no ending date.",
    example:
      "An endowment pays ₱1,000 each year forever, first payment one year away, at 10%.",
    steps: [
      "Match annual payments to annual interest i=0.10.",
      "P=A/i=1000/0.10.",
      "If the first payment is at year 4 instead, discount this value from year 3 to today.",
    ],
    answer:
      "₱10,000 for the ordinary perpetuity. With the first payment at year 4, present worth is ₱7,513.15.",
  },
  {
    id: "cashflow",
    idea: "Unequal payments cannot be added fairly until they are all valued on the same date.",
    recognize:
      "Different payment amounts, staged rates, or a payment that rises by a fixed increment.",
    example:
      "Receive ₱1,000 at year 1 and ₱2,000 at year 2. Find present worth at 10%.",
    steps: [
      "Choose today as the focal date.",
      "Discount each amount for its own time: P=1000/1.10 + 2000/1.10^2.",
      "For future worth at year 2 instead, use 1000×1.10 + 2000.",
    ],
    answer:
      "Present worth ₱2,561.98; year-2 worth ₱3,100. For an arithmetic gradient, the added G starts at year 2, not year 1.",
  },
  {
    id: "sl",
    idea: "Straight line subtracts the same monetary depreciation charge every year.",
    recognize:
      "“Straight line,” equal annual depreciation, or remaining book value.",
    example:
      "Cost ₱10,000; salvage ₱1,000; life 5 years. Find book value after year 2.",
    steps: [
      "Depreciable base C−S=10000−1000=9000.",
      "Annual charge D=9000/5=1800.",
      "Book value BV2=10000−2×1800.",
    ],
    answer:
      "Book value ₱6,400. Annual depreciation is ₱1,800; accumulated depreciation after 2 years is ₱3,600.",
  },
  {
    id: "syd",
    idea: "SYD uses large year digits first, so more cost is depreciated early in the asset’s life.",
    recognize: "“Sum of years digits,” “SOYD,” or “SYD.”",
    example:
      "Cost ₱10,000; salvage ₱1,000; life 5 years. Find second-year depreciation.",
    steps: [
      "SYD=5×6/2=15. The yearly digits are 5,4,3,2,1.",
      "Year 2 uses 5−2+1=4.",
      "D2=(10000−1000)×4/15.",
    ],
    answer:
      "Second-year charge ₱2,400. After year 2, book value is 10000−9000×(5+4)/15=₱4,600.",
  },
  {
    id: "db",
    idea: "Declining balance takes a fixed percentage of the remaining book value. The peso charge becomes smaller as book value falls.",
    recognize:
      "“Constant percentage,” “declining balance,” or “double declining balance.”",
    example:
      "Cost ₱10,000; life 5 years; salvage ₱1,000. Find DDB book value after year 2.",
    steps: [
      "DDB rate k=2/5=0.40. Keep 60% of the previous book value yearly.",
      "BV2=10000×0.60^2. This is still above the salvage floor.",
      "For ordinary salvage-derived DB instead, k=1−(S/C)^(1/n); that is a different rate.",
    ],
    answer:
      "DDB book value ₱3,600. First-year charge ₱4,000; second-year charge ₱2,400. Never depreciate below the salvage floor.",
  },
  {
    id: "sinkingDep",
    idea: "Sinking-fund depreciation imagines replacement savings earning interest. The fixed deposit differs from the growing fund’s yearly increase.",
    recognize:
      "Depreciation computed through an actual or imaginary interest-earning fund.",
    example: "Cost ₱10,000; salvage ₱1,000; life 3 years; fund earns 10%.",
    steps: [
      "Fund target is C−S=9000.",
      "Fixed yearly deposit A=9000×0.10/(1.10^3−1)=2719.0332.",
      "Accumulated depreciation at year 2 is A×(1.10^2−1)/0.10; year-2 charge is A×1.10.",
    ],
    answer:
      "Deposit ₱2,719.03; accumulated depreciation at year 2 ₱5,709.97; year-2 charge ₱2,990.94.",
  },
  {
    id: "real",
    idea: "Nominal money is the number of pesos received. Real money measures how much those pesos can buy.",
    recognize:
      "Inflation, purchasing power, constant pesos, or combined interest–inflation rate.",
    example:
      "An investment earns 10% nominal annually while inflation is 5%. Find the real return.",
    steps: [
      "Use the growth-factor relationship, not simple subtraction.",
      "Real rate =1.10/1.05−1.",
      "For a future nominal balance, divide by the inflation growth factor (1.05)^years.",
    ],
    answer:
      "Real return ≈4.7619%. A 10% real requirement with 5% inflation needs 1.10×1.05−1=15.5% nominal.",
  },
  {
    id: "euac",
    idea: "Equivalent uniform annual cost converts a purchase, later salvage, and operating expenses into one comparable yearly cost.",
    recognize:
      "Annual equivalent cost or comparison of alternatives delivering the same service.",
    example:
      "Cost ₱10,000; salvage ₱1,000 after 3 years; operation ₱500/year; interest 10%.",
    steps: [
      "Annualize first cost: 10000×0.10/(1−1.10^(−3)).",
      "Subtract salvage annualization: 1000×0.10/(1.10^3−1).",
      "Add ₱500 yearly operation. Keep full precision between terms.",
    ],
    answer:
      "EUAC ₱4,219.03/year. For unequal lives, state whether the alternatives can be repeated with equivalent service.",
  },
  {
    id: "annualSL",
    idea: "The handout’s straight-line annual-cost convention adds depreciation, interest on original capital, and annual running costs.",
    recognize:
      "The source explicitly asks annual cost using straight-line depreciation.",
    example:
      "Cost ₱10,000; salvage ₱1,000 after 3 years; interest 10%; operation ₱500/year.",
    steps: [
      "Straight-line charge=(10000−1000)/3=3000.",
      "Interest on original capital=0.10×10000=1000.",
      "Add operating cost: 3000+1000+500.",
    ],
    answer:
      "Handout annual cost ₱4,500/year. This convention is different from capital-recovery EUAC; use the method specified.",
  },
  {
    id: "annualSF",
    idea: "The sinking-fund annual-cost convention combines replacement deposits, interest on original capital, and yearly operation.",
    recognize: "Annual cost using sinking-fund depreciation.",
    example:
      "Cost ₱10,000; salvage ₱1,000 after 3 years; interest 10%; operation ₱500/year.",
    steps: [
      "Replacement deposit=(10000−1000)×0.10/(1.10^3−1).",
      "Interest on original capital=0.10×10000=1000.",
      "Add operation: 2719.0332+1000+500.",
    ],
    answer:
      "Annual cost ₱4,219.03/year. With the same interest assumptions, this agrees with capital-recovery EUAC.",
  },
  {
    id: "cc",
    idea: "Capitalized cost is today’s cost of maintaining a service indefinitely, including future recurring work.",
    recognize:
      "Permanent service, perpetual maintenance, or replacements that repeat forever.",
    example:
      "A facility costs ₱10,000 and requires ₱500/year forever at 10%. No replacement cost is specified.",
    steps: [
      "Include the initial cost once: C=10000.",
      "Perpetual maintenance is worth O/i=500/0.10=5000.",
      "Add both present values. For replacements every n years, also add net replacement/(growth factor−1).",
    ],
    answer:
      "Capitalized cost ₱15,000. Replacement costs must be stated or explicitly assumed; do not silently invent them.",
  },
  {
    id: "bcr",
    idea: "Benefit–cost ratio compares discounted benefits with discounted costs using the same timing and rate.",
    recognize: "Public-project evaluation or a requested B/C ratio.",
    example:
      "Benefits have present worth ₱12,000 and costs have present worth ₱10,000.",
    steps: [
      "B/C=12000/10000.",
      "NPV=12000−10000.",
      "A ratio at least 1 means benefits cover costs under the stated estimates.",
    ],
    answer:
      "B/C=1.20 and NPV=₱2,000. To choose between mutually exclusive alternatives, use incremental analysis rather than the largest stand-alone ratio.",
  },
  {
    id: "irr",
    idea: "Internal rate of return is the rate that makes the discounted receipts exactly equal the initial investment.",
    recognize:
      "Unknown annual return or interest rate of an installment offer.",
    example: "Invest ₱10,000 now and receive ₱11,000 after one year.",
    steps: [
      "Set the residual to zero: −10000+11000/(1+X)=0.",
      "For one payment, solve directly: X=11000/10000−1.",
      "For several payments, use the present-worth sum and Canon SOLVE; verify the resulting residual.",
    ],
    answer:
      "IRR=10%. X is a decimal rate; multiply it by 100 to express percent. Some cash-flow patterns can have multiple IRRs.",
  },
  {
    id: "bond",
    idea: "A bond price is the present worth of its coupon payments plus its redemption payment.",
    recognize:
      "Bond price, market value, yield, coupon rate, or redemption value.",
    example:
      "A ₱1,000 bond pays ₱100 each year for 3 years and redeems at ₱1,000. Required yield is 10%.",
    steps: [
      "Coupon present worth=100×(1−1.10^(−3))/0.10.",
      "Redemption present worth=1000/1.10^3.",
      "Add them. For unknown yield, enter their sum minus market price as a SOLVE residual.",
    ],
    answer:
      "Price ₱1,000. At par, with redemption at par, yield equals coupon rate. Match semiannual coupons to semiannual yield and period count.",
  },
  {
    id: "breakEven",
    idea: "Each sale contributes selling price minus variable cost toward fixed cost. Break-even occurs when that contribution covers all fixed cost.",
    recognize:
      "No-profit/no-loss production quantity or break-even sales volume.",
    example: "Fixed cost ₱1,000; price ₱50/unit; variable cost ₱30/unit.",
    steps: [
      "Contribution per unit=50−30=20.",
      "Break-even Q=1000/20.",
      "For indivisible products, round any fractional quantity upward. Simple payback uses investment divided by constant annual net receipts.",
    ],
    answer:
      "50 units. With fixed cost ₱1,010, the ratio is 50.5 but 51 whole units are needed. Payback ignores the time value of money.",
  },
];
export const economicsNoteById = Object.fromEntries(
  ECONOMICS_TOPIC_NOTES.map((n) => [n.id, n]),
);

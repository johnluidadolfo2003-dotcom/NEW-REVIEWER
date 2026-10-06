import json

# =========================================================================
# 100 TERMS QUESTIONS GENERATION
# =========================================================================
terms_data = [
  # 1-10: Foundations of Economics
  {
    "num": 1,
    "term": "Scarcity",
    "cat": "Foundations of Economics",
    "q": "What is the fundamental condition that gives rise to the entire study of economics and engineering economic decision making?",
    "choices": [
      "A. The existence of unlimited natural resources",
      "B. Unlimited human wants and needs competing for limited and scarce resources",
      "C. Government intervention in pricing and taxation",
      "D. The fluctuation of fiat currency exchange rates"
    ],
    "ans": "B",
    "def": "The basic economic problem that arises because people have unlimited wants but resources are limited and scarce.",
    "exp": "Scarcity forces engineering decision-makers to evaluate trade-offs, perform feasibility analyses, and select the best alternative among mutually exclusive options.",
    "trap": "Scarcity does not mean poverty; it means resources (capital, time, materials) are finite relative to demand."
  },
  {
    "num": 2,
    "term": "Goods and Services (Economic Goods vs Free Goods)",
    "cat": "Foundations of Economics",
    "q": "Which type of good commands a positive market price because human effort or capital is required to produce and allocate it?",
    "choices": [
      "A. Free Goods",
      "B. Public Goods",
      "C. Economic Goods",
      "D. Non-Rival Goods"
    ],
    "ans": "C",
    "def": "Goods that are scarce relative to demand and therefore command a price in the market.",
    "exp": "Free goods (such as ambient air or open sunlight) exist in abundance and have zero market price, whereas economic goods require expenditure of resources.",
    "trap": "Free goods become economic goods when processed or treated (e.g., filtered medical oxygen or purified water)."
  },
  {
    "num": 3,
    "term": "Consumer Goods vs Producer Goods",
    "cat": "Foundations of Economics",
    "q": "Industrial machinery, substation transformers, and transmission towers purchased by an electric utility are classified as:",
    "choices": [
      "A. Consumer Goods",
      "B. Producer (Capital) Goods",
      "C. Giffen Goods",
      "D. Veblen Goods"
    ],
    "ans": "B",
    "def": "Producer (or capital) goods are goods used to produce other goods or services rather than being consumed directly.",
    "exp": "Consumer goods satisfy immediate human wants directly (e.g., home appliances), while producer goods serve as capital investments to generate future economic outputs.",
    "trap": "Electricity is a consumer good for a household, but a producer input for a manufacturing plant."
  },
  {
    "num": 4,
    "term": "Law of Supply and Demand",
    "cat": "Market Mechanisms",
    "q": "Under normal competitive market conditions, according to the Law of Demand, what is the relationship between the unit price of a product and the quantity demanded?",
    "choices": [
      "A. Directly proportional: quantity demanded rises as price rises",
      "B. Inversely proportional: quantity demanded decreases as price increases",
      "C. Perfectly inelastic: demand remains constant regardless of price",
      "D. Independent: price has no effect on consumer purchasing decisions"
    ],
    "ans": "B",
    "def": "Other factors remaining equal, as the price of a good increases, consumer demand for that good decreases.",
    "exp": "The downward-sloping demand curve reflects substitution and income effects when prices change.",
    "trap": "A change in price causes a movement ALONG the demand curve, not a shift of the demand curve itself."
  },
  {
    "num": 5,
    "term": "Equilibrium Price (Market Clearing Price)",
    "cat": "Market Mechanisms",
    "q": "The single market price at which the quantity of a product supplied by sellers exactly equals the quantity demanded by buyers is known as:",
    "choices": [
      "A. Ceiling Price",
      "B. Floor Price",
      "C. Equilibrium Price",
      "D. Shadow Price"
    ],
    "ans": "C",
    "def": "The market price where supply equals demand, resulting in neither a surplus nor a shortage.",
    "exp": "At equilibrium price, every producer willing to sell at that price finds a buyer, and all markets clear smoothly.",
    "trap": "Price ceilings below equilibrium cause shortages; price floors above equilibrium cause surpluses."
  },
  {
    "num": 6,
    "term": "Price Elasticity of Demand",
    "cat": "Market Mechanisms",
    "q": "If a 5% increase in electric utility tariffs leads to a 10% decrease in kilowatt-hour consumption, the demand for electricity is described as:",
    "choices": [
      "A. Inelastic (|E_d| < 1)",
      "B. Unitary Elastic (|E_d| = 1)",
      "C. Elastic (|E_d| > 1)",
      "D. Perfectly Inelastic (|E_d| = 0)"
    ],
    "ans": "C",
    "def": "A measure of the responsiveness of the quantity demanded of a good to a change in its price: |E_d| = (% change in Q) / (% change in P).",
    "exp": "Here |E_d| = 10% / 5% = 2.0 > 1.0, signifying elastic demand where total revenue decreases when price rises.",
    "trap": "Essential goods (like basic water or emergency power) typically have inelastic demand (|E_d| < 1)."
  },
  {
    "num": 7,
    "term": "Utility and Marginal Utility",
    "cat": "Consumer Theory",
    "q": "The satisfaction, pleasure, or usefulness derived by a consumer from consuming an additional unit of a good or service is termed:",
    "choices": [
      "A. Total Utility",
      "B. Average Utility",
      "C. Marginal Utility",
      "D. Opportunity Utility"
    ],
    "ans": "C",
    "def": "The additional utility gained from consuming one additional unit of a commodity.",
    "exp": "According to the Law of Diminishing Marginal Utility, as consumption of a good increases, the marginal utility derived from each subsequent unit declines.",
    "trap": "Total utility can be rising even while marginal utility is falling, as long as marginal utility remains positive."
  },
  {
    "num": 8,
    "term": "Law of Diminishing Returns",
    "cat": "Production Economics",
    "q": "The economic principle stating that as successive units of a variable input (e.g., labor) are added to a fixed input (e.g., machinery), the resulting additions to total output eventually decrease is the:",
    "choices": [
      "A. Law of Substitution",
      "B. Law of Diminishing Returns (Diminishing Marginal Productivity)",
      "C. Law of Comparative Advantage",
      "D. Law of Sunk Cost Fallacy"
    ],
    "ans": "B",
    "def": "When successive increments of a variable input are applied to a constant amount of fixed inputs, output increases at a decreasing rate beyond a certain threshold.",
    "exp": "In engineering operations, overcrowding a fixed workstation with too many workers leads to bottlenecks, idle time, and lower marginal output.",
    "trap": "Diminishing returns does NOT mean total output drops immediately; it means marginal output begins to decrease."
  },
  {
    "num": 9,
    "term": "Monopoly",
    "cat": "Market Structures",
    "q": "A market structure characterized by a single seller supplying a unique product or utility service with no close substitutes and high barriers to entry is a:",
    "choices": [
      "A. Perfect Competition",
      "B. Monopolistic Competition",
      "C. Oligopoly",
      "D. Monopoly"
    ],
    "ans": "D",
    "def": "A market structure where a single supplier controls the entire market supply of a product or service.",
    "exp": "Electric transmission grids and distribution utilities are classic 'natural monopolies' where high infrastructure costs make duplicate networks inefficient.",
    "trap": "A single buyer is a MONOPSONY, not a monopoly (which is a single seller)."
  },
  {
    "num": 10,
    "term": "Oligopoly",
    "cat": "Market Structures",
    "q": "A market dominated by a small number of large, interdependent firms (such as commercial airlines, oil refiners, or major telecom providers) is classified as an:",
    "choices": [
      "A. Oligopoly",
      "B. Perfect Competition",
      "C. Pure Monopoly",
      "D. Monopsony"
    ],
    "ans": "A",
    "def": "A market dominated by a few large sellers who are mutually interdependent in their pricing and output decisions.",
    "exp": "In an oligopoly, the actions of one firm (e.g., price cuts or promotional deals) directly impact its rivals, often leading to non-price competition or tacit collusion.",
    "trap": "Duopoly is a specific type of oligopoly with exactly two dominant firms."
  }
]

print("Script template ready")

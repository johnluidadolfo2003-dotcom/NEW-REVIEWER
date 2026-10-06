import React from 'react';

interface CleanMathProps {
  math: string;
  className?: string;
  block?: boolean;
}

// ---------------------------------------------------------------------------
// Helpers: Extract balanced brackets and delimiters
// ---------------------------------------------------------------------------
const extractBalanced = (
  str: string,
  startIdx: number,
  openChar: string,
  closeChar: string
): { content: string; endIndex: number } | null => {
  if (str[startIdx] !== openChar) return null;
  let depth = 0;
  for (let i = startIdx; i < str.length; i++) {
    if (str[i] === openChar) depth++;
    else if (str[i] === closeChar) {
      depth--;
      if (depth === 0) {
        return { content: str.substring(startIdx + 1, i), endIndex: i };
      }
    }
  }
  return null;
};

// Check if string has redundant outer parentheses or brackets e.g. "(a + b)" -> "a + b"
const stripOuterBrackets = (str: string): string => {
  const trimmed = str.trim();
  if (
    (trimmed.startsWith('(') && trimmed.endsWith(')')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'))
  ) {
    const openChar = trimmed[0];
    const closeChar = openChar === '(' ? ')' : ']';
    let depth = 0;
    for (let i = 0; i < trimmed.length - 1; i++) {
      if (trimmed[i] === openChar) depth++;
      else if (trimmed[i] === closeChar) {
        depth--;
        if (depth === 0) return trimmed; // closed prematurely, e.g. (a)+(b)
      }
    }
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
};

// ---------------------------------------------------------------------------
// StackedFraction: Numerator OVER Denominator with clean horizontal line
// NEVER uses a forward slash "/" for mathematical division.
// ---------------------------------------------------------------------------
export const StackedFraction: React.FC<{
  num: React.ReactNode;
  den: React.ReactNode;
  className?: string;
}> = ({ num, den, className = '' }) => {
  return (
    <span
      className={`inline-flex flex-col items-center justify-center align-middle mx-1 my-0.5 text-center font-mono select-none ${className}`}
      style={{ verticalAlign: 'middle' }}
    >
      {/* Numerator OVER */}
      <span className="border-b-2 border-slate-300 px-1 pb-0.5 leading-none text-xs sm:text-sm text-slate-100 font-semibold w-full text-center block">
        {num}
      </span>
      {/* Denominator */}
      <span className="px-1 pt-0.5 leading-none text-xs sm:text-sm text-slate-200 font-medium w-full text-center block">
        {den}
      </span>
    </span>
  );
};

// ---------------------------------------------------------------------------
// TallBracket: Stretches cleanly around tall fractions and compound terms
// Exponent is positioned accurately at the top-right shoulder of the bracket.
// ---------------------------------------------------------------------------
const TallBracket: React.FC<{
  type: 'square' | 'round';
  children: React.ReactNode;
  exponent?: React.ReactNode;
}> = ({ type, children, exponent }) => {
  if (type === 'square') {
    return (
      <span className="inline-flex items-center align-middle mx-0.5 my-0.5 font-mono">
        <span className="inline-flex items-stretch">
          {/* Left square bracket */}
          <span className="border-l-2 border-t-2 border-b-2 border-slate-400 w-1.5 my-0.5 rounded-l-[2px] shrink-0" />
          <span className="px-1 flex items-center justify-center">{children}</span>
          {/* Right square bracket */}
          <span className="border-r-2 border-t-2 border-b-2 border-slate-400 w-1.5 my-0.5 rounded-r-[2px] shrink-0" />
        </span>
        {exponent && (
          <sup className="text-[0.75em] font-bold text-amber-300 ml-0.5 leading-none self-start relative top-0.5 font-mono">
            {exponent}
          </sup>
        )}
      </span>
    );
  }

  // Round tall parentheses (used when wrapping stacked fractions)
  return (
    <span className="inline-flex items-center align-middle mx-0.5 my-0.5 font-mono">
      <span className="text-slate-400 text-lg sm:text-xl font-light select-none leading-none scale-y-125 self-center -mr-0.5">
        (
      </span>
      <span className="px-1 flex items-center justify-center">{children}</span>
      <span className="relative inline-flex items-center self-stretch">
        <span className="text-slate-400 text-lg sm:text-xl font-light select-none leading-none scale-y-125 self-center -ml-0.5">
          )
        </span>
        {exponent && (
          <sup className="text-[0.75em] font-bold text-amber-300 ml-0.5 leading-none self-start relative top-0.5 font-mono">
            {exponent}
          </sup>
        )}
      </span>
    </span>
  );
};

// ---------------------------------------------------------------------------
// Token formatting: exponents, subscripts, radicals, special characters
// ---------------------------------------------------------------------------
export const formatTextTokens = (text: string): React.ReactNode => {
  if (!text) return null;

  // Check for radical in token: \sqrt[n]{x} or \sqrt{x}
  const rootRegex = /\\sqrt(?:\[([^\]]+)\])?\{([^}]+)\}/g;
  if (rootRegex.test(text)) {
    rootRegex.lastIndex = 0;
    const rootParts: React.ReactNode[] = [];
    let lastRootIdx = 0;
    let rootMatch: RegExpExecArray | null;

    while ((rootMatch = rootRegex.exec(text)) !== null) {
      if (rootMatch.index > lastRootIdx) {
        rootParts.push(formatTextTokens(text.substring(lastRootIdx, rootMatch.index)));
      }

      const degree = rootMatch[1];
      const radicand = rootMatch[2];

      rootParts.push(
        <span key={`root-${rootMatch.index}`} className="inline-flex items-center align-middle mx-1 font-mono">
          <span className="relative flex items-center">
            {degree && (
              <sup className="text-[0.68em] text-amber-400 font-bold -mr-0.5 leading-none align-super">
                {parseMathExpression(degree, `deg-${rootMatch.index}`)}
              </sup>
            )}
            <span className="text-amber-400 text-base sm:text-lg leading-none font-serif">√</span>
          </span>
          <span className="border-t-2 border-slate-300 pt-0.5 px-1 leading-none text-slate-100 font-semibold">
            {parseMathExpression(radicand, `rad-${rootMatch.index}`)}
          </span>
        </span>
      );

      lastRootIdx = rootRegex.lastIndex;
    }

    if (lastRootIdx < text.length) {
      rootParts.push(formatTextTokens(text.substring(lastRootIdx)));
    }

    return <>{rootParts}</>;
  }

  // Regex to match superscripts ^ and subscripts _
  const expSubRegex = /(\^(\{[^}]+\}|\([^\)]+\)|[0-9a-zA-Z+-]+)|_(\{[^}]+\}|\([^\)]+\)|[0-9a-zA-Z]+))/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = expSubRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('^')) {
      const expContent = token.slice(1).replace(/^[\{\(](.*)[\}\)]$/, '$1');
      parts.push(
        <sup
          key={`exp-${match.index}`}
          className="text-[0.75em] font-bold text-amber-300 ml-0.5 leading-none align-super font-mono"
        >
          {parseMathExpression(expContent, `subexp-${match.index}`)}
        </sup>
      );
    } else if (token.startsWith('_')) {
      const subContent = token.slice(1).replace(/^[\{\(](.*)[\}\)]$/, '$1');
      parts.push(
        <sub
          key={`sub-${match.index}`}
          className="text-[0.75em] font-semibold text-slate-300 ml-0.5 leading-none align-sub font-mono"
        >
          {subContent}
        </sub>
      );
    }

    lastIndex = expSubRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};

// ---------------------------------------------------------------------------
// Expression Parser: converts expressions, fractions, brackets into React Nodes
// ---------------------------------------------------------------------------
const parseMathExpression = (expr: string, keyPrefix: string = 'm'): React.ReactNode => {
  const trimmed = expr.trim();
  if (!trimmed) return null;

  // 1. Check for addition / subtraction / ± at depth 0
  // Note: Only split if preceded by a term (avoid splitting unary minus like -P or -n)
  let pDepth = 0;
  let bDepth = 0;
  let cDepth = 0;
  const terms: string[] = [];
  const addSubOps: string[] = [];
  let lastIdx = 0;

  for (let i = 0; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (c === '(') pDepth++;
    else if (c === ')') pDepth--;
    else if (c === '[') bDepth++;
    else if (c === ']') bDepth--;
    else if (c === '{') cDepth++;
    else if (c === '}') cDepth--;
    else if (pDepth === 0 && bDepth === 0 && cDepth === 0) {
      const rest = trimmed.substring(i);
      let matchedOp = '';
      if (rest.startsWith(' + ')) matchedOp = '+';
      else if (rest.startsWith(' - ')) matchedOp = '-';
      else if (rest.startsWith(' ± ')) matchedOp = '±';

      if (matchedOp && i > lastIdx) {
        terms.push(trimmed.substring(lastIdx, i).trim());
        addSubOps.push(matchedOp);
        i += matchedOp.length + 1; // skip past operator and spaces
        lastIdx = i + 1;
      }
    }
  }

  if (addSubOps.length > 0) {
    terms.push(trimmed.substring(lastIdx).trim());
    const termNodes: React.ReactNode[] = [];
    terms.forEach((term, idx) => {
      termNodes.push(parseMathExpression(term, `${keyPrefix}-t${idx}`));
      if (idx < addSubOps.length) {
        termNodes.push(
          <span key={`${keyPrefix}-op${idx}`} className="mx-1.5 text-amber-400 font-bold font-mono">
            {addSubOps[idx]}
          </span>
        );
      }
    });
    return (
      <span key={keyPrefix} className="inline-flex items-center align-middle font-mono">
        {termNodes}
      </span>
    );
  }

  // 2. Check for multiplication '·' or '×' at depth 0
  let pD = 0;
  let bD = 0;
  let cD = 0;
  const multParts: string[] = [];
  const multOps: string[] = [];
  let lastMIdx = 0;

  for (let i = 0; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (c === '(') pD++;
    else if (c === ')') pD--;
    else if (c === '[') bD++;
    else if (c === ']') bD--;
    else if (c === '{') cD++;
    else if (c === '}') cD--;
    else if (pD === 0 && bD === 0 && cD === 0) {
      const rest = trimmed.substring(i);
      let matchedOp = '';
      if (rest.startsWith(' · ')) matchedOp = '·';
      else if (rest.startsWith(' × ')) matchedOp = '×';

      if (matchedOp && i > lastMIdx) {
        multParts.push(trimmed.substring(lastMIdx, i).trim());
        multOps.push(matchedOp);
        i += matchedOp.length + 1;
        lastMIdx = i + 1;
      }
    }
  }

  if (multOps.length > 0) {
    multParts.push(trimmed.substring(lastMIdx).trim());
    const multNodes: React.ReactNode[] = [];
    multParts.forEach((part, idx) => {
      multNodes.push(parseMathExpression(part, `${keyPrefix}-m${idx}`));
      if (idx < multOps.length) {
        multNodes.push(
          <span key={`${keyPrefix}-mop${idx}`} className="mx-1 text-slate-400 font-bold font-mono">
            {multOps[idx]}
          </span>
        );
      }
    });
    return (
      <span key={keyPrefix} className="inline-flex items-center align-middle font-mono">
        {multNodes}
      </span>
    );
  }

  // 3. Check for standalone bracketed block ( ... )^exp or [ ... ]^exp
  if (trimmed.startsWith('(') || trimmed.startsWith('[')) {
    const openChar = trimmed[0];
    const closeChar = openChar === '(' ? ')' : ']';
    const balanced = extractBalanced(trimmed, 0, openChar, closeChar);

    if (balanced) {
      const rest = trimmed.substring(balanced.endIndex + 1).trim();
      let expNode: React.ReactNode = null;
      let afterRest = '';

      if (rest.startsWith('^')) {
        const expStr = rest.slice(1);
        if (expStr.startsWith('{')) {
          const expB = extractBalanced(expStr, 0, '{', '}');
          if (expB) {
            expNode = parseMathExpression(expB.content, `${keyPrefix}-exp`);
            afterRest = expStr.substring(expB.endIndex + 1).trim();
          }
        } else if (expStr.startsWith('(')) {
          const expB = extractBalanced(expStr, 0, '(', ')');
          if (expB) {
            expNode = parseMathExpression(expB.content, `${keyPrefix}-exp`);
            afterRest = expStr.substring(expB.endIndex + 1).trim();
          }
        } else {
          const m = expStr.match(/^([a-zA-Z0-9+-]+)/);
          if (m) {
            expNode = parseMathExpression(m[1], `${keyPrefix}-exp`);
            afterRest = expStr.substring(m[1].length).trim();
          }
        }
      } else {
        afterRest = rest;
      }

      const isTall = balanced.content.includes('\\frac') || balanced.content.includes('/');
      if (isTall) {
        return (
          <span key={keyPrefix} className="inline-flex items-center align-middle font-mono">
            <TallBracket
              type={openChar === '[' ? 'square' : 'round'}
              exponent={expNode}
            >
              {parseMathExpression(balanced.content, `${keyPrefix}-in`)}
            </TallBracket>
            {afterRest && parseMathExpression(afterRest, `${keyPrefix}-ae`)}
          </span>
        );
      } else {
        return (
          <span key={keyPrefix} className="inline font-mono">
            <span className="text-slate-300 font-semibold">{openChar}</span>
            {parseMathExpression(balanced.content, `${keyPrefix}-in`)}
            <span className="text-slate-300 font-semibold">{closeChar}</span>
            {expNode && (
              <sup className="text-[0.75em] font-bold text-amber-300 ml-0.5 leading-none align-super font-mono">
                {expNode}
              </sup>
            )}
            {afterRest && parseMathExpression(afterRest, `${keyPrefix}-ae`)}
          </span>
        );
      }
    }
  }

  // 4. Check for juxtaposed prefix + bracket: prefix [ ... ]^exp or prefix ( ... )^exp
  // e.g. A [ \frac{1 - (1+i)^{-n}}{i} ], P(1 + i)^n, FC(1 - k)^m, C(1 + i)^{-n}
  // Make sure not to match \sqrt[n]{x} or \frac
  if (!trimmed.startsWith('\\sqrt') && !trimmed.startsWith('\\frac')) {
    const bracketMatch = trimmed.match(/^([a-zA-Z0-9_.,%₱!$*\\{}'-]+)\s*(\[|\()/);
    if (bracketMatch && bracketMatch.index === 0) {
      const prefix = bracketMatch[1];
      const openChar = bracketMatch[2];
      const openIdx = prefix.length + (trimmed.substring(prefix.length).indexOf(openChar));
      const closeChar = openChar === '[' ? ']' : ')';
      const balanced = extractBalanced(trimmed, openIdx, openChar, closeChar);

      if (balanced) {
        const rest = trimmed.substring(balanced.endIndex + 1).trim();
        let expNode: React.ReactNode = null;
        let afterRest = '';

        if (rest.startsWith('^')) {
          const expStr = rest.slice(1);
          if (expStr.startsWith('{')) {
            const expB = extractBalanced(expStr, 0, '{', '}');
            if (expB) {
              expNode = parseMathExpression(expB.content, `${keyPrefix}-jexp`);
              afterRest = expStr.substring(expB.endIndex + 1).trim();
            }
          } else if (expStr.startsWith('(')) {
            const expB = extractBalanced(expStr, 0, '(', ')');
            if (expB) {
              expNode = parseMathExpression(expB.content, `${keyPrefix}-jexp`);
              afterRest = expStr.substring(expB.endIndex + 1).trim();
            }
          } else {
            const m = expStr.match(/^([a-zA-Z0-9+-]+)/);
            if (m) {
              expNode = parseMathExpression(m[1], `${keyPrefix}-jexp`);
              afterRest = expStr.substring(m[1].length).trim();
            }
          }
        } else {
          afterRest = rest;
        }

        const isTall = balanced.content.includes('\\frac') || balanced.content.includes('/');
        if (isTall) {
          return (
            <span key={keyPrefix} className="inline-flex items-center align-middle font-mono">
              {formatTextTokens(prefix)}
              <TallBracket type={openChar === '[' ? 'square' : 'round'} exponent={expNode}>
                {parseMathExpression(balanced.content, `${keyPrefix}-jin`)}
              </TallBracket>
              {afterRest && parseMathExpression(afterRest, `${keyPrefix}-jafter`)}
            </span>
          );
        } else {
          return (
            <span key={keyPrefix} className="inline font-mono">
              {formatTextTokens(prefix)}
              <span className="text-slate-300 font-semibold">{openChar}</span>
              {parseMathExpression(balanced.content, `${keyPrefix}-jin`)}
              <span className="text-slate-300 font-semibold">{closeChar}</span>
              {expNode && (
                <sup className="text-[0.75em] font-bold text-amber-300 ml-0.5 leading-none align-super font-mono">
                  {expNode}
                </sup>
              )}
              {afterRest && parseMathExpression(afterRest, `${keyPrefix}-jafter`)}
            </span>
          );
        }
      }
    }
  }

  // 5. Check for LaTeX \frac{num}{den}
  const fracIdx = trimmed.indexOf('\\frac');
  if (fracIdx !== -1) {
    const before = trimmed.substring(0, fracIdx).trim();
    const brace1 = extractBalanced(trimmed, fracIdx + 5, '{', '}');
    if (brace1) {
      const brace2 = extractBalanced(trimmed, brace1.endIndex + 1, '{', '}');
      if (brace2) {
        const after = trimmed.substring(brace2.endIndex + 1).trim();

        return (
          <span key={keyPrefix} className="inline-flex items-center align-middle font-mono">
            {before && parseMathExpression(before, `${keyPrefix}-fb`)}
            <StackedFraction
              num={parseMathExpression(brace1.content, `${keyPrefix}-fn`)}
              den={parseMathExpression(brace2.content, `${keyPrefix}-fd`)}
            />
            {after && parseMathExpression(after, `${keyPrefix}-fa`)}
          </span>
        );
      }
    }
  }

  // 6. Check for division slash '/' -> CONVERT TO PROPER OVER FRACTION
  // Guard against common engineering units that should keep inline slash
  const isUnitOnly = /^(ft-lb\/s|rad\/s|W\/HP|km\/h|m\/s|N\/mm²|N\/m|units\/yr|pesos\/unit)$/i.test(trimmed);
  if (!isUnitOnly) {
    let parenDepth = 0;
    let bracketDepth = 0;
    let braceDepth = 0;
    let slashIndex = -1;

    for (let i = 0; i < trimmed.length; i++) {
      const c = trimmed[i];
      if (c === '(') parenDepth++;
      else if (c === ')') parenDepth--;
      else if (c === '[') bracketDepth++;
      else if (c === ']') bracketDepth--;
      else if (c === '{') braceDepth++;
      else if (c === '}') braceDepth--;
      else if (c === '/' && parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) {
        slashIndex = i;
        break;
      }
    }

    if (slashIndex > 0 && slashIndex < trimmed.length - 1) {
      let num = trimmed.substring(0, slashIndex).trim();
      let den = trimmed.substring(slashIndex + 1).trim();

      // Clean redundant outer brackets from numerator and denominator
      num = stripOuterBrackets(num);
      den = stripOuterBrackets(den);

      return (
        <StackedFraction
          key={keyPrefix}
          num={parseMathExpression(num, `${keyPrefix}-sn`)}
          den={parseMathExpression(den, `${keyPrefix}-sd`)}
        />
      );
    }
  }

  // 7. Fallback: format text tokens (exponents, subscripts, radicals)
  return (
    <span key={keyPrefix} className="inline font-mono">
      {formatTextTokens(trimmed)}
    </span>
  );
};

// ---------------------------------------------------------------------------
// Preprocess raw math string: normalize LaTeX keywords and symbols
// ---------------------------------------------------------------------------
const preprocessMath = (text: string): string => {
  return text
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\\{/g, '{')
    .replace(/\\right\\}/g, '}')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\times/g, ' × ')
    .replace(/\\pm/g, ' ± ')
    .replace(/\\ge/g, ' ≥ ')
    .replace(/\\le/g, ' ≤ ')
    .replace(/\\neq/g, ' ≠ ')
    .replace(/\\approx/g, ' ≈ ')
    .replace(/\\Longleftrightarrow/g, ' ⟺ ')
    .replace(/\\Longrightarrow/g, ' ⟹ ')
    .replace(/\\implies/g, ' ⟹ ')
    .replace(/\\quad/g, '   ')
    .replace(/\\qquad/g, '     ')
    .replace(/\\Sigma/g, 'Σ')
    .replace(/\\sum/g, 'Σ')
    .replace(/\\pi/g, 'π')
    .replace(/\\infty/g, '∞')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/ⁿ/g, '^n')
    .replace(/⁻¹/g, '^-1')
    .replace(/⁻ᵐ/g, '^-m')
    .replace(/⁻ⁿ/g, '^-n')
    .replace(/⁻⁶/g, '^-6')
    .replace(/₁/g, '_1')
    .replace(/₂/g, '_2')
    .replace(/₃/g, '_3')
    .replace(/₀/g, '_0');
};

// ---------------------------------------------------------------------------
// Main CleanMath Component
// ---------------------------------------------------------------------------
export const CleanMath: React.FC<CleanMathProps> = ({ math, className = '', block = false }) => {
  if (!math) return null;

  // Split on newlines so multi-line calculations render each line cleanly
  const lines = math.trim().split(/\r?\n+/);
  if (lines.length > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {lines.map((line, lIdx) => (
          <div key={`line-${lIdx}`} className="flex flex-wrap items-center gap-1.5">
            <CleanMath math={line} block={false} />
          </div>
        ))}
      </div>
    );
  }

  const rawCleanStr = preprocessMath(lines[0]);

  // Split clauses by major delimiters like '|', ';', or ' • '
  const clauses = rawCleanStr.split(/(\s*\|\s*|\s*;\s*|\s*•\s*)/g);
  const segments: React.ReactNode[] = [];

  clauses.forEach((clause, cIdx) => {
    const trimmedClause = clause.trim();
    if (!trimmedClause) return;

    if (trimmedClause === '|' || trimmedClause === ';' || trimmedClause === '•') {
      segments.push(
        <span key={`sep-${cIdx}`} className="mx-2 text-slate-500 font-sans text-xs uppercase tracking-wider font-semibold">
          •
        </span>
      );
      return;
    }

    // Split each clause on equality and relation symbols: =, ≈, ⟹, ⟺, ≤, ≥, ≠
    const relationParts = trimmedClause.split(/(\s*=\s*|\s*≈\s*|\s*⟹\s*|\s*⟺\s*|\s*≤\s*|\s*≥\s*|\s*≠\s*)/g);

    relationParts.forEach((part, pIdx) => {
      const trimmedPart = part.trim();
      if (!trimmedPart) return;

      const isOperator = ['=', '≈', '⟹', '⟺', '≤', '≥', '≠'].includes(trimmedPart);
      if (isOperator) {
        segments.push(
          <span key={`op-${cIdx}-${pIdx}`} className="mx-1.5 text-amber-400 font-bold font-mono">
            {trimmedPart}
          </span>
        );
      } else {
        segments.push(parseMathExpression(trimmedPart, `c-${cIdx}-p-${pIdx}`));
      }
    });
  });

  if (block) {
    return (
      <div className={`flex flex-wrap items-center justify-center p-3 rounded bg-slate-950 border border-slate-800 text-slate-100 overflow-x-auto text-sm ${className}`}>
        {segments}
      </div>
    );
  }

  return (
    <span className={`inline-flex flex-wrap items-center align-middle font-mono ${className}`}>
      {segments}
    </span>
  );
};
